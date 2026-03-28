import Image from "next/image";
import { Laptop, Sparkles, CalendarHeart, ShieldCheck, Gift } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

const benefits = [
  {
    icon: Laptop,
    title: "Attend from home",
    text: "No travel required to learn—just a quiet space, reliable internet, and both partners present.",
  },
  {
    icon: Sparkles,
    title: "Curated possibilities",
    text: "Explore premium travel ideas presented in a structured, easy-to-follow format.",
  },
  {
    icon: CalendarHeart,
    title: "Simple scheduling",
    text: "We work with you to find a webinar time that respects your calendar.",
  },
  {
    icon: ShieldCheck,
    title: "Professional tone",
    text: "Expect a respectful presentation with room for questions—never theatrics or pressure tactics.",
  },
  {
    icon: Gift,
    title: "Promotional incentives",
    text: "Eligible participants may receive details on travel incentives, subject to terms and availability.",
  },
];

const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80";

export function WhyAttendSection() {
  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card lg:aspect-[3/4]">
            <Image
              src={SIDE_IMAGE}
              alt="Couple enjoying a scenic European canal view during travel"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand-navy/10"
              aria-hidden
            />
          </div>
          <div className="absolute -bottom-6 -right-4 max-w-[240px] rounded-2xl border border-white/20 bg-brand-navy/95 p-5 text-white shadow-card backdrop-blur-md sm:-right-6">
            <p className="font-display text-2xl font-semibold text-brand-gold">
              Designed for couples
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              Both partners attend together—so decisions stay aligned from the
              start.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Why attend
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
            A worthwhile hour for curious travelers
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
            Whether you are actively planning a trip or simply exploring what
            is possible, the showcase is built to inform—not to overwhelm.
          </p>
          <ul className="mt-10 space-y-5">
            {benefits.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-brand-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-navy/65">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
}
