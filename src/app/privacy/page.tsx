import type { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy placeholder for Perfect ETA marketing site. Replace with counsel-approved copy before launch.",
};

export default function PrivacyPage() {
  return (
    <SectionContainer className="mx-auto max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-brand-navy">
        Privacy policy
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">
        This is a <strong>placeholder</strong> page. Replace this content with
        your attorney-reviewed privacy policy before production launch.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">
        Intended sections: data collection, cookies, CRM integrations (HubSpot,
        GoHighLevel), webinar platforms, retention, contact for privacy
        requests, and regional disclosures as applicable.
      </p>
    </SectionContainer>
  );
}
