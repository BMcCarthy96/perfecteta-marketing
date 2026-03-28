"use client";

import { useState, type FormEvent } from "react";
import { CtaButton } from "@/components/ui/CtaButton";

type LeadFormProps = {
  id?: string;
  className?: string;
};

/**
 * Frontend-only lead capture — wire to HubSpot, GoHighLevel, Zapier, or a webhook.
 *
 * TODO: POST to your CRM or `fetch('/api/lead', { method: 'POST', body: JSON.stringify(data) })`
 * TODO: Optionally embed Zoom/Calendly after successful submit
 */
export function LeadForm({ id, className = "" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Placeholder: replace with real integration
    console.info("[LeadForm] submit payload (placeholder)", {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
    });
    setStatus("sent");
    form.reset();
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`space-y-4 ${className}`}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="lead-name"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Full name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Jordan & Alex Rivera"
            className="w-full rounded-xl border border-brand-navy/12 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/25"
          />
        </div>
        <div>
          <label
            htmlFor="lead-email"
            className="mb-1.5 block text-sm font-medium text-brand-navy"
          >
            Email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-brand-navy/12 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/25"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="lead-phone"
          className="mb-1.5 block text-sm font-medium text-brand-navy"
        >
          Phone
        </label>
        <input
          id="lead-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="(555) 000-0000"
          className="w-full rounded-xl border border-brand-navy/12 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/25"
        />
      </div>
      <div>
        <label
          htmlFor="lead-message"
          className="mb-1.5 block text-sm font-medium text-brand-navy"
        >
          Message{" "}
          <span className="font-normal text-brand-navy/45">(optional)</span>
        </label>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          placeholder="Preferred days to attend, questions about qualifications…"
          className="w-full resize-y rounded-xl border border-brand-navy/12 bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/25"
        />
      </div>
      {status === "sent" && (
        <p className="rounded-xl bg-brand-teal/10 px-4 py-3 text-sm text-brand-teal" role="status">
          Thank you. We&apos;ve received your request and will follow up
          shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <CtaButton type="submit" variant="primary" className="w-full sm:w-auto">
        Request information
      </CtaButton>
    </form>
  );
}
