import { Ship, Umbrella, Castle, Compass } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { InfoCard } from "@/components/cards/InfoCard";

const cards = [
  {
    icon: Ship,
    title: "Cruise experiences",
    description:
      "Ocean and river itineraries presented with clarity—so you can picture the journey before any commitment.",
  },
  {
    icon: Umbrella,
    title: "Resort & all-inclusive getaways",
    description:
      "Relaxing stays and packaged escapes discussed in a straightforward, promotional context.",
  },
  {
    icon: Castle,
    title: "Luxury villas & destination stays",
    description:
      "Elevated accommodations and destination immersion for couples who value space and privacy.",
  },
  {
    icon: Compass,
    title: "Guided travel opportunities",
    description:
      "Curated experiences that blend comfort with discovery—always subject to program terms.",
  },
];

export function ValueOfferSection() {
  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
          The offer
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
          A refined travel presentation for qualifying couples
        </h2>
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          Qualified guests are invited to attend a live webinar where we
          showcase vacation concepts and explain how eligible participants may
          access promotional travel incentives. It is an informative session—not
          a high-pressure pitch—with room to ask questions.
        </p>
      </div>

      <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
        <div className="rounded-2xl border border-brand-navy/8 bg-brand-sand/40 px-4 py-5 text-center">
          <dt className="text-xs font-medium text-brand-navy/55">Format</dt>
          <dd className="mt-1 font-display text-2xl font-semibold text-brand-navy">
            Live online
          </dd>
        </div>
        <div className="rounded-2xl border border-brand-navy/8 bg-brand-sand/40 px-4 py-5 text-center">
          <dt className="text-xs font-medium text-brand-navy/55">Audience</dt>
          <dd className="mt-1 font-display text-2xl font-semibold text-brand-navy">
            Couples
          </dd>
        </div>
        <div className="rounded-2xl border border-brand-navy/8 bg-brand-sand/40 px-4 py-5 text-center">
          <dt className="text-xs font-medium text-brand-navy/55">Focus</dt>
          <dd className="mt-1 font-display text-2xl font-semibold text-brand-navy">
            Premium travel
          </dd>
        </div>
        <div className="rounded-2xl border border-brand-navy/8 bg-brand-sand/40 px-4 py-5 text-center">
          <dt className="text-xs font-medium text-brand-navy/55">Incentives</dt>
          <dd className="mt-1 font-display text-2xl font-semibold text-brand-navy">
            If eligible
          </dd>
        </div>
      </dl>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {cards.map((c) => (
          <InfoCard key={c.title} {...c} />
        ))}
      </div>
    </SectionContainer>
  );
}
