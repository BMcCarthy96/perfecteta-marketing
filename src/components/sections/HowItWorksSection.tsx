import { CalendarPlus, Presentation, BadgeCheck, Mail } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { sectionIds } from "@/lib/site";

const steps = [
  {
    step: 1,
    icon: CalendarPlus,
    title: "Reserve your webinar spot",
    body: "Share your details and choose a time that fits both partners. We’ll confirm eligibility basics before your session.",
  },
  {
    step: 2,
    icon: Presentation,
    title: "Attend the presentation",
    body: "Join from home, listen, and participate. We walk through travel concepts and how promotional offers may apply.",
  },
  {
    step: 3,
    icon: BadgeCheck,
    title: "Confirm qualifications",
    body: "We verify program requirements transparently. Not every offer is available to every household—and that’s okay.",
  },
  {
    step: 4,
    icon: Mail,
    title: "Receive next steps",
    body: "If you qualify and wish to proceed, we share applicable details, terms, and timing for any promotional opportunities.",
  },
];

export function HowItWorksSection() {
  return (
    <SectionContainer
      id={sectionIds.howItWorks}
      className="border-t border-brand-navy/6 bg-brand-sand/35 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
          How it works
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
          A clear path from invitation to information
        </h2>
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          No guesswork. Here’s exactly what happens when you decide to explore
          our travel showcase.
        </p>
      </div>

      <ol className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2 lg:gap-10">
        {steps.map(({ step, icon: Icon, title, body }) => (
          <li
            key={step}
            className="relative flex gap-5 rounded-2xl border border-brand-navy/8 bg-white p-6 shadow-soft"
          >
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-brand-navy text-white">
              <span className="text-xs font-medium text-white/70">Step</span>
              <span className="font-display text-xl font-semibold">{step}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-brand-teal" aria-hidden />
                <h3 className="font-display text-lg font-semibold text-brand-navy">
                  {title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/65">
                {body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </SectionContainer>
  );
}
