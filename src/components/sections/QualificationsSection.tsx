import { SectionContainer } from "@/components/ui/SectionContainer";
import { EligibilityCard } from "@/components/cards/EligibilityCard";
import { sectionIds } from "@/lib/site";

export function QualificationsSection() {
  return (
    <SectionContainer
      id={sectionIds.qualifications}
      className="border-t border-brand-navy/6 bg-gradient-to-b from-brand-cream to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
          Qualifications
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
          Transparent eligibility you can review up front
        </h2>
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          We believe trust starts with clarity. Below are the core requirements
          most guests ask about first—your host can confirm any additional
          details when you reserve.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-4xl">
        <EligibilityCard />
      </div>
    </SectionContainer>
  );
}
