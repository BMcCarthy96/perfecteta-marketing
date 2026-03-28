import { SectionContainer } from "@/components/ui/SectionContainer";
import { CtaButton } from "@/components/ui/CtaButton";
import { SITE } from "@/lib/site";

export function CtaStripSection() {
  return (
    <SectionContainer className="py-12 md:py-16">
      <div className="relative overflow-hidden rounded-2xl bg-brand-navy px-6 py-14 text-center shadow-card md:px-12 md:py-16">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl"
          aria-hidden
        />
        <h2 className="relative font-display text-3xl font-semibold text-white md:text-4xl">
          Ready to reserve your spot?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80">
          Join our travel showcase and explore exclusive vacation opportunities
          with a team that values your time.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton
            href={SITE.webinarBookingUrl}
            external={SITE.webinarBookingExternal}
            variant="secondary"
            className="min-w-[200px]"
          >
            Reserve your spot
          </CtaButton>
          <CtaButton
            href="/faq"
            variant="outline"
            className="min-w-[200px] border-white/35 bg-white/10 text-white hover:border-white/50 hover:bg-white/15"
          >
            View FAQ
          </CtaButton>
        </div>
      </div>
    </SectionContainer>
  );
}
