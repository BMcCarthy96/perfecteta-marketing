/**
 * Shared contact-lead validation for the marketing form (client + API route).
 * Keep rules in sync: any change here affects both layers.
 */

export type ContactLeadPayload = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

export type ContactLeadFieldErrors = Partial<
  Record<"name" | "email" | "phone" | "message", string>
>;

const NAME_MIN = 2;
const NAME_MAX = 120;
const MESSAGE_MAX = 5000;

/** Practical email check — not exhaustive but blocks obvious junk */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function countPhoneDigits(value: string): number {
  return value.replace(/\D/g, "").length;
}

export function validateEmail(value: string): string | null {
  const v = value.trim();
  if (!v) return "Email is required.";
  if (v.length > 254) return "Email is too long.";
  if (!EMAIL_RE.test(v)) return "Enter a valid email address.";
  return null;
}

export function validateName(value: string): string | null {
  const v = value.trim();
  if (!v) return "Name is required.";
  if (v.length < NAME_MIN) return "Please enter your full name.";
  if (v.length > NAME_MAX) return "Name is too long.";
  return null;
}

export function validatePhone(value: string): string | null {
  const v = value.trim();
  if (!v) return "Phone is required.";
  const digits = countPhoneDigits(v);
  if (digits < 10) return "Enter a phone number with at least 10 digits.";
  if (digits > 15) return "Phone number has too many digits.";
  return null;
}

export function validateMessage(value: string | undefined): string | null {
  if (value == null || value.trim() === "") return null;
  if (value.length > MESSAGE_MAX) return `Message must be under ${MESSAGE_MAX} characters.`;
  return null;
}

export type ValidateContactResult =
  | { ok: true; data: ContactLeadPayload }
  | { ok: false; fields: ContactLeadFieldErrors };

/** Validate unknown JSON body from the API */
export function validateContactLeadBody(body: unknown): ValidateContactResult {
  if (body === null || typeof body !== "object") {
    return { ok: false, fields: { name: "Invalid request." } };
  }

  const o = body as Record<string, unknown>;
  const name = typeof o.name === "string" ? o.name : "";
  const email = typeof o.email === "string" ? o.email : "";
  const phone = typeof o.phone === "string" ? o.phone : "";
  const rawMessage = o.message;
  const message =
    typeof rawMessage === "string" && rawMessage.trim() !== ""
      ? rawMessage
      : undefined;

  const fields: ContactLeadFieldErrors = {};
  const en = validateName(name);
  const ee = validateEmail(email);
  const ep = validatePhone(phone);
  const em = validateMessage(message);

  if (en) fields.name = en;
  if (ee) fields.email = ee;
  if (ep) fields.phone = ep;
  if (em) fields.message = em;

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      ...(message !== undefined ? { message: message.trim() } : {}),
    },
  };
}
