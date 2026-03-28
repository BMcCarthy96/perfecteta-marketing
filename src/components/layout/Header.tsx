"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";
import { SITE, sectionIds } from "@/lib/site";

const navLinks = [
  { label: "Home", href: `/#${sectionIds.home}` },
  { label: "How It Works", href: `/#${sectionIds.howItWorks}` },
  { label: "Destinations", href: `/#${sectionIds.destinations}` },
  { label: "Qualifications", href: `/#${sectionIds.qualifications}` },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: `/#${sectionIds.contact}` },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell = scrolled
    ? "bg-white/95 shadow-soft backdrop-blur-md border-b border-brand-navy/5"
    : "bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shell}`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-brand-navy sm:text-2xl"
        >
          Perfect ETA
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-brand-navy/75 transition-colors hover:bg-brand-navy/5 hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/portal"
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-brand-navy/65 transition-colors hover:bg-brand-navy/5 hover:text-brand-navy"
          >
            <LogIn className="h-4 w-4" aria-hidden />
            Member portal
          </Link>
          <CtaButton
            href={SITE.webinarBookingUrl}
            external={SITE.webinarBookingExternal}
            variant="primary"
          >
            Reserve your spot
          </CtaButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <CtaButton
            href={SITE.webinarBookingUrl}
            external={SITE.webinarBookingExternal}
            variant="primary"
            className="px-4 py-2.5 text-xs sm:text-sm"
          >
            Reserve
          </CtaButton>
          <button
            type="button"
            className="rounded-xl p-2 text-brand-navy hover:bg-brand-navy/5"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-brand-navy/5 bg-white/98 backdrop-blur-lg lg:hidden"
          >
            <div className="flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-1 overflow-y-auto px-4 py-4">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-brand-navy hover:bg-brand-sand"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/portal"
                className="mt-2 flex items-center gap-2 rounded-xl border border-brand-navy/10 px-4 py-3 text-base font-medium text-brand-navy/80 hover:bg-brand-sand"
                onClick={() => setOpen(false)}
              >
                <LogIn className="h-5 w-5" aria-hidden />
                Member portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
