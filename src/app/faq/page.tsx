import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { CtaButton } from "@/components/ui/CtaButton";
import { faqItems } from "@/lib/faq-data";
import { SITE, sectionIds } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Travel Showcase Webinar & Qualifications",
  description:
    "Answers about the Perfect ETA travel showcase webinar, presentation length, qualifications, costs, and promotional travel offers for eligible couples.",
  openGraph: {
    title: "Frequently Asked Questions | Perfect ETA",
    description:
      "Learn how our travel presentation works, who qualifies, and what to expect—clear, professional answers.",
  },
};

export default function FaqPage() {
  return (
    <SectionContainer className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
          Support
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-brand-navy md:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Straightforward answers about the showcase, timing, eligibility, and
          what happens after you attend.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <FaqAccordion items={faqItems} />
      </div>

      <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-brand-navy/10 bg-brand-sand/40 p-8 text-center">
        <p className="font-display text-xl font-semibold text-brand-navy">
          Still have questions?
        </p>
        <p className="mt-2 text-sm text-brand-navy/65">
          Reach out through our contact form or reserve a spot to speak with our
          team.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <CtaButton href={`/#${sectionIds.contact}`} variant="primary">
            Contact us
          </CtaButton>
          <CtaButton href={SITE.webinarBookingUrl} variant="outline">
            Reserve your spot
          </CtaButton>
        </div>
        <p className="mt-6 text-xs text-brand-navy/45">
          Member login lives on{" "}
          <Link href="/portal" className="text-brand-teal underline-offset-2 hover:underline">
            the member portal page
          </Link>
          .
        </p>
      </div>
    </SectionContainer>
  );
}
