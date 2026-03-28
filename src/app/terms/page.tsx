import type { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use placeholder for Perfect ETA. Replace with counsel-approved terms before launch.",
};

export default function TermsPage() {
  return (
    <SectionContainer className="mx-auto max-w-3xl py-16 md:py-24">
      <h1 className="font-display text-4xl font-semibold text-brand-navy">
        Terms of use
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-brand-navy/70">
        This is a <strong>placeholder</strong> page. Replace with your
        counsel-approved terms of use, including eligibility disclaimers,
        promotional offer limitations, and jurisdiction.
      </p>
    </SectionContainer>
  );
}
