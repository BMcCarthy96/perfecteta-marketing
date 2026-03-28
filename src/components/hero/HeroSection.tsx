"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CtaButton } from "@/components/ui/CtaButton";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { SITE, sectionIds } from "@/lib/site";

/** Luxury travel hero — swap `src` for brand photography when available */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2400&q=80";

export function HeroSection() {
  return (
    <div
      id={sectionIds.home}
      className="relative min-h-[min(92vh,920px)] overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Aspirational travel destination with coastline and warm light, representing curated vacation experiences"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/20"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(92vh,920px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium tracking-wide text-brand-gold/95">
            Travel showcase · By invitation
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.25rem]">
            Discover exclusive travel opportunities from the comfort of home
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            Join our refined online presentation to explore cruises, resort
            stays, and destination experiences—and learn whether you may
            qualify for promotional travel incentives as a participating
            couple.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton
              href={SITE.webinarBookingUrl}
              external={SITE.webinarBookingExternal}
              variant="secondary"
              className="min-h-[3rem] px-8"
            >
              Reserve your spot
            </CtaButton>
            <CtaButton
              href={`/#${sectionIds.howItWorks}`}
              variant="outline"
              className="min-h-[3rem] border-white/35 bg-white/10 text-white hover:border-white/50 hover:bg-white/15"
            >
              See how it works
            </CtaButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <TrustStrip />
        </motion.div>
      </div>
    </div>
  );
}
