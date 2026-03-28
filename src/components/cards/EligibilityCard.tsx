import { CheckCircle2 } from "lucide-react";

const items = [
  {
    title: "Age requirement",
    body: "Both partners must be 35 years of age or older at the time of the presentation.",
  },
  {
    title: "Recent travel history",
    body: "Within the last 24 months, you must have traveled by cruise or commercial air at least once.",
  },
];

export function EligibilityCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-navy/10 bg-gradient-to-br from-white via-brand-cream to-brand-sand/80 p-8 shadow-card md:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
            Qualification overview
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-brand-navy md:text-3xl">
            Who we invite to attend
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-navy/70">
            We keep eligibility straightforward so you know what to expect
            before you reserve. Final qualification may include additional
            criteria communicated during scheduling.
          </p>
        </div>
        <div className="rounded-2xl border border-brand-gold/25 bg-white/60 px-5 py-4 text-center backdrop-blur-sm lg:max-w-xs">
          <p className="font-display text-4xl font-semibold text-brand-navy">
            35+
          </p>
          <p className="mt-1 text-xs text-brand-navy/60">
            Minimum age for both partners
          </p>
        </div>
      </div>
      <ul className="mt-8 space-y-4">
        {items.map((item) => (
          <li
            key={item.title}
            className="flex gap-4 rounded-xl border border-brand-navy/6 bg-white/80 p-4"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal"
              aria-hidden
            />
            <div>
              <p className="font-semibold text-brand-navy">{item.title}</p>
              <p className="mt-1 text-sm text-brand-navy/65">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs leading-relaxed text-brand-navy/55">
        Additional terms, conditions, and eligibility requirements may apply.
        Promotional travel opportunities are not guaranteed and are subject to
        availability and program rules.
      </p>
    </div>
  );
}
