/**
 * Central site configuration — swap URLs when integrations go live.
 *
 * TODO: Connect WEBINAR_BOOKING_URL to your Zoom / Calendly / custom scheduler.
 * TODO: MEMBER_PORTAL_URL should point to the live login app (perfectETA.com).
 */
export const SITE = {
  name: "Perfect ETA",
  /** Public marketing domain reference (display / SEO) */
  marketingDomain: "perfectETA.info",
  /** Member authentication lives on a separate domain */
  memberPortalUrl: "https://perfectETA.com",
  /**
   * Primary webinar / reservation flow — replace with real booking link.
   * Used by Header CTA, hero, and CTA strip.
   */
  webinarBookingUrl: "#contact",
  supportEmailPlaceholder: "hello@perfectETA.info",
} as const;

export const sectionIds = {
  home: "top",
  howItWorks: "how-it-works",
  destinations: "destinations",
  qualifications: "qualifications",
  contact: "contact",
} as const;
