"use client";

import { useRef, useState } from "react";
import { CtaButton } from "@/components/ui/CtaButton";
import {
  validateContactLeadBody,
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
  type ContactLeadFieldErrors,
} from "@/lib/lead-validation";
import { SITE } from "@/lib/site";

type LeadFormProps = {
  id?: string;
  className?: string;
};

type FieldName = "name" | "email" | "phone" | "message";

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-brand-navy/35 focus:outline-none focus:ring-2 focus:ring-brand-teal/25";
const inputOk = "border-brand-navy/12 focus:border-brand-teal";
const inputErr = "border-red-600/40 focus:border-red-600/50 focus:ring-red-600/15";

export function LeadForm({ id, className = "" }: LeadFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [fieldErrors, setFieldErrors] = useState<ContactLeadFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLock = useRef(false);

  function setFieldError(field: FieldName, messageText: string | null) {
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (messageText) next[field] = messageText;
      else delete next[field];
      return next;
    });
  }

  function handleBlur(field: FieldName) {
    if (field === "name") setFieldError("name", validateName(name));
    else if (field === "email") setFieldError("email", validateEmail(email));
    else if (field === "phone") setFieldError("phone", validatePhone(phone));
    else setFieldError("message", validateMessage(message));
  }

  function clearFieldError(field: FieldName) {
    setFieldError(field, null);
    setFormError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitLock.current || isSubmitting) return;

    setFormError(null);
    setSuccess(false);

    const result = validateContactLeadBody({
      name,
      email,
      phone,
      message: message.trim() === "" ? undefined : message,
    });

    if (!result.ok) {
      setFieldErrors(result.fields);
      return;
    }

    submitLock.current = true;
    setIsSubmitting(true);

    try {
      const res = await fetch(SITE.contactApiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const payload = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string; fields?: ContactLeadFieldErrors }
        | null;

      if (res.ok && payload && "ok" in payload && payload.ok) {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setFieldErrors({});
        setSuccess(true);
        window.setTimeout(() => setSuccess(false), 8000);
        return;
      }

      if (res.status === 400 && payload?.fields) {
        setFieldErrors(payload.fields);
        return;
      }

      setFormError(
        "We couldn’t send your message. Please try again in a moment or email us directly.",
      );
    } catch {
      setFormError(
        "Network error. Check your connection and try again, or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
      submitLock.current = false;
    }
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
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              clearFieldError("name");
            }}
            onBlur={() => handleBlur("name")}
            placeholder="Jordan & Alex Rivera"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "lead-name-error" : undefined}
            className={`${inputBase} ${fieldErrors.name ? inputErr : inputOk}`}
          />
          {fieldErrors.name ? (
            <p id="lead-name-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearFieldError("email");
            }}
            onBlur={() => handleBlur("email")}
            placeholder="you@example.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={
              fieldErrors.email ? "lead-email-error" : undefined
            }
            className={`${inputBase} ${fieldErrors.email ? inputErr : inputOk}`}
          />
          {fieldErrors.email ? (
            <p id="lead-email-error" className="mt-1.5 text-sm text-red-700" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
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
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            clearFieldError("phone");
          }}
          onBlur={() => handleBlur("phone")}
          placeholder="(555) 000-0000"
          aria-invalid={Boolean(fieldErrors.phone)}
          aria-describedby={fieldErrors.phone ? "lead-phone-error" : undefined}
          className={`${inputBase} ${fieldErrors.phone ? inputErr : inputOk}`}
        />
        {fieldErrors.phone ? (
          <p id="lead-phone-error" className="mt-1.5 text-sm text-red-700" role="alert">
            {fieldErrors.phone}
          </p>
        ) : null}
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
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            clearFieldError("message");
          }}
          onBlur={() => handleBlur("message")}
          placeholder="Preferred days to attend, questions about qualifications…"
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? "lead-message-error" : undefined
          }
          className={`${inputBase} ${fieldErrors.message ? inputErr : inputOk} resize-y`}
        />
        {fieldErrors.message ? (
          <p id="lead-message-error" className="mt-1.5 text-sm text-red-700" role="alert">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>
      {success ? (
        <p
          className="rounded-xl bg-brand-teal/10 px-4 py-3 text-sm text-brand-teal"
          role="status"
          aria-live="polite"
        >
          Thank you. We&apos;ve received your request and will follow up
          shortly.
        </p>
      ) : null}
      {formError ? (
        <p className="text-sm text-red-700" role="alert">
          {formError}
        </p>
      ) : null}
      <CtaButton
        type="submit"
        variant="primary"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Request information"}
      </CtaButton>
    </form>
  );
}
