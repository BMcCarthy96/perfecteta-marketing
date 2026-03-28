import { NextResponse } from "next/server";
import {
  validateContactLeadBody,
  type ContactLeadPayload,
} from "@/lib/lead-validation";

export const runtime = "nodejs";

/**
 * Hook point for webhook, CRM, transactional email, etc.
 * Replace the body with real side effects when you connect integrations.
 */
async function deliverLead(payload: ContactLeadPayload): Promise<void> {
  void payload;
  // TODO: webhook / CRM / email — implement using `payload` (see file header).
}

/**
 * POST /api/contact
 *
 * Accepts JSON: { name, email, phone, message? }
 * Returns 200 { ok: true } or 400 { error, fields? }
 *
 * TODO: Forward `data` to your stack, for example:
 * - await fetch(process.env.LEAD_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
 * - HubSpot Forms API or CRM SDK (server-side token)
 * - GoHighLevel / Zapier Catch Hook
 * - Resend / SendGrid / SES for a notification email
 * - Log to your data warehouse (avoid PII in client-accessible logs)
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

  await deliverLead(result.data);

  if (process.env.NODE_ENV === "development") {
    // Dev-only: confirms handler ran without printing personal data
    console.log("[api/contact] Lead accepted (dev)");
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
