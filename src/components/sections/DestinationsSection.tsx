import { SectionContainer } from "@/components/ui/SectionContainer";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { sectionIds } from "@/lib/site";

const destinations = [
  {
    title: "Cruises",
    description:
      "From relaxed ocean voyages to intimate river routes—see how cruise travel can fit your style.",
    imageSrc:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Cruise ship on calm blue water at sunset",
  },
  {
    title: "All-inclusive escapes",
    description:
      "Unpack once and unwind—resort-style stays designed for couples who want ease and atmosphere.",
    imageSrc:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury resort pool at a tropical property",
  },
  {
    title: "Tropical destinations",
    description:
      "Coastlines, islands, and warm-weather backdrops that inspire your next chapter together.",
    imageSrc:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Tropical beach with palm trees and turquoise water",
  },
  {
    title: "Luxury villas",
    description:
      "Space, privacy, and elevated amenities—ideal when you want a residential feel away from home.",
    imageSrc:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern luxury villa with infinity pool overlooking hills",
  },
  {
    title: "Adventure & culture",
    description:
      "Meaningful itineraries that pair comfort with discovery—always presented with clear terms.",
    imageSrc:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Scenic road trip landscape with mountains and open road",
  },
];

export function DestinationsSection() {
  return (
    <SectionContainer id={sectionIds.destinations} className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
          Destinations & styles
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
          Inspiration for every kind of getaway
        </h2>
        <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
          We discuss a range of travel experiences during the showcase. Specific
          offers and destinations depend on timing, eligibility, and program
          availability.
        </p>
      </div>

      <div className="mt-14 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {destinations.map((d) => (
          <div key={d.title} className="break-inside-avoid">
            <DestinationCard {...d} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
