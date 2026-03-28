import { NextResponse } from "next/server";
import {
  validateContactLeadBody,
  type ContactLeadPayload,
} from "@/lib/lead-validation";

export const runtime = "nodejs";

/**
 * LEAD_WEBHOOK_URL — server-only (never use NEXT_PUBLIC_*; the URL must not ship to the browser).
 *
 * Local development
 * -----------------
 * Create `.env.local` in the project root (same directory as `package.json`, e.g. `perfectETA/.env.local`).
 * Next.js loads it automatically. Example line:
 *
 *   LEAD_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/ACCOUNT_ID/HOOK_KEY/
 *
 * In Zapier: use a “Webhooks by Zapier” → “Catch Hook” trigger, then copy the **Custom Webhook URL**
 * and paste it as the value above. Restart `next dev` after saving `.env.local`.
 *
 * Vercel Production (and Preview if you want leads from preview deploys)
 * ---------------------------------------------------------------------
 * Dashboard → your Project → Settings → Environment Variables → add `LEAD_WEBHOOK_URL`
 * with the same Zapier URL, scoped to **Production** (and **Preview** if needed). Redeploy so the
 * new variable is available to the serverless `/api/contact` route.
 */
async function deliverLead(
  payload: ContactLeadPayload,
): Promise<{ ok: true } | { ok: false; httpStatus: number }> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    console.error(
      "[api/contact] LEAD_WEBHOOK_URL is missing. Set it in .env.local (see comment at top of this file).",
    );
    return { ok: false, httpStatus: 503 };
  }

  // Zapier Catch Hook: POST JSON body with this exact shape (strings; message may be "").
  const body = JSON.stringify({
    source: "perfectETA.info",
    submittedAt: new Date().toISOString(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    message: payload.message ?? "",
  });

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      // Abort if Zapier is slow or unreachable; avoids hanging serverless invocations.
      signal: AbortSignal.timeout(15_000),
    });

    // Catch Hook should return 2xx; anything else (4xx/5xx) is treated as delivery failure.
    if (!res.ok) {
      console.error(
        "[api/contact] Webhook responded with error:",
        res.status,
        res.statusText,
      );
      return { ok: false, httpStatus: 502 };
    }

    return { ok: true };
  } catch (err) {
    console.error("[api/contact] Webhook request failed:", err);
    return { ok: false, httpStatus: 502 };
  }
}

/**
 * POST /api/contact
 *
 * Accepts JSON: { name, email, phone, message? }
 * Returns 200 { ok: true }, 400 validation errors, or 502/503 if Zapier delivery fails.
 */
export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "invalid_json", message: "Request body must be JSON." },
      { status: 400 },
    );
  }

  const result = validateContactLeadBody(json);
  if (!result.ok) {
    return NextResponse.json(
      {
        error: "validation_failed",
        fields: result.fields,
      },
      { status: 400 },
    );
  }

  const delivery = await deliverLead(result.data);
  if (!delivery.ok) {
    // Never include LEAD_WEBHOOK_URL, stack traces, or Zapier bodies in this JSON (client-visible).
    return NextResponse.json(
      {
        error: "delivery_failed",
        message:
          "We could not deliver your request right now. Please try again in a few minutes or email us directly.",
      },
      { status: delivery.httpStatus },
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[api/contact] Lead delivered to webhook (dev)");
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
