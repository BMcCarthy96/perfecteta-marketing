import { MessageCircle, HelpCircle, Mail, Headphones } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { LeadForm } from "@/components/forms/LeadForm";
import { SITE, sectionIds } from "@/lib/site";

const sideItems = [
  {
    icon: MessageCircle,
    title: "Webinar questions",
    body: "Ask about session length, what to prepare, or how joining online works.",
  },
  {
    icon: HelpCircle,
    title: "Qualification questions",
    body: "Unsure about eligibility? Tell us your situation—we’ll guide you honestly.",
  },
  {
    icon: Mail,
    title: "Email",
    body: SITE.supportEmailPlaceholder,
  },
  {
    icon: Headphones,
    title: "Booking help",
    body: "Placeholder: dedicated scheduling line once your telephony stack is connected.",
  },
];

export function ContactSection() {
  return (
    <SectionContainer
      id={sectionIds.contact}
      className="border-t border-brand-navy/6 bg-brand-sand/25 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
          Request information
        </h2>
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Share your details for questions about qualifications or the
          showcase—we’ll follow up shortly. To pick a webinar time, use{" "}
          <span className="font-medium text-brand-navy">Reserve your spot</span>{" "}
          to open our scheduler.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-brand-navy/8 bg-white p-6 shadow-card md:p-8">
            <LeadForm id="lead-form" />
          </div>
        </div>
        <aside className="lg:col-span-2">
          <div className="sticky top-28 space-y-4">
            <p className="text-sm font-semibold text-brand-navy">
              Before you submit
            </p>
            {sideItems.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-3 rounded-2xl border border-brand-navy/8 bg-white/90 p-4 shadow-soft"
              >
                <Icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <div>
                  <h3 className="text-sm font-semibold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-brand-navy/60">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </SectionContainer>
  );
}
