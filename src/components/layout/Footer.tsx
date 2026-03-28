import Link from "next/link";
import { SITE, sectionIds } from "@/lib/site";

const quick = [
  { label: "How it works", href: `/#${sectionIds.howItWorks}` },
  { label: "Destinations", href: `/#${sectionIds.destinations}` },
  { label: "Qualifications", href: `/#${sectionIds.qualifications}` },
  { label: "Contact", href: `/#${sectionIds.contact}` },
];

const legal = [
  { label: "FAQ", href: "/faq" },
  { label: "Member portal", href: "/portal" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-brand-navy/10 bg-brand-navy text-brand-cream/95">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold text-white">
              Perfect ETA
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-cream/70">
              Curated travel inspiration and promotional vacation opportunities
              for qualifying couples—presented professionally, online, from
              home.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-brand-cream/50">
              Marketing site: {SITE.marketingDomain}. Member access is hosted
              separately at{" "}
              <a
                href={SITE.memberPortalUrl}
                className="underline decoration-brand-gold/50 underline-offset-2 hover:text-white"
              >
                perfectETA.com
              </a>
              .
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold/90">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {quick.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-cream/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold/90">
              Resources
            </p>
            <ul className="mt-4 space-y-2">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-brand-cream/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 text-xs leading-relaxed text-brand-cream/60">
          <p>
            Offers are subject to qualification, availability, and terms
            disclosed during or after eligible participation. Promotional
            details vary; not all attendees will qualify for every incentive.
            This website is for marketing and information only—it is not the
            member login portal.
          </p>
        </div>

        <p className="mt-8 text-center text-xs text-brand-cream/45">
          © {new Date().getFullYear()} Perfect ETA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
