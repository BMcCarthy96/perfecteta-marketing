/**
 * Central site configuration.
 *
 * Member login: perfectETA.com (separate from this marketing site).
 * Primary booking: Zoom scheduler (opens in a new tab).
 *
 * TODO: Wire /api/contact to webhook, CRM, or email — see src/app/api/contact/route.ts
 */
export const SITE = {
  name: "Perfect ETA",
  /** Public marketing domain reference (display / SEO) */
  marketingDomain: "perfectETA.info",
  /** Member authentication lives on a separate domain */
  memberPortalUrl: "https://perfectETA.com",
  /**
   * Primary webinar booking — Zoom scheduler.
   * Used by Header, hero, CTA strip, FAQ (Reserve your spot).
   */
  webinarBookingUrl: "https://scheduler.zoom.us/f/rwez6u42",
  /** Use with CtaButton `external` so the scheduler opens in a new tab */
  webinarBookingExternal: true,
  /** Lead form POST target (Next.js API route) */
  contactApiPath: "/api/contact",
  supportEmailPlaceholder: "hello@perfectETA.info",
} as const;

export const sectionIds = {
  home: "top",
  howItWorks: "how-it-works",
  destinations: "destinations",
  qualifications: "qualifications",
  contact: "contact",
} as const;
