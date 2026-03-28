import type { Metadata } from "next";
import { HeroSection } from "@/components/hero/HeroSection";
import { ValueOfferSection } from "@/components/sections/ValueOfferSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { QualificationsSection } from "@/components/sections/QualificationsSection";
import { WhyAttendSection } from "@/components/sections/WhyAttendSection";
import { CtaStripSection } from "@/components/sections/CtaStripSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "Travel Showcase Webinar | Promotional Vacation Offers for Qualifying Couples",
  description:
    "Reserve your spot for the Perfect ETA travel showcase—an online qualifying presentation covering cruises, resorts, and luxury travel. Eligible couples may receive promotional vacation opportunities. Attend from home.",
  openGraph: {
    title:
      "Perfect ETA | Travel Showcase & Promotional Vacation Opportunities",
    description:
      "Professional webinar presentation for qualifying couples. Explore premium travel and learn about promotional offers.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueOfferSection />
      <HowItWorksSection />
      <DestinationsSection />
      <QualificationsSection />
      <WhyAttendSection />
      <CtaStripSection />
      <ContactSection />
    </>
  );
}
