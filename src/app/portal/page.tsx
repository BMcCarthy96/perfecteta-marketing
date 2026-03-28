import type { Metadata } from "next";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PortalLinkCard } from "@/components/portal/PortalLinkCard";

export const metadata: Metadata = {
  title: "Member Portal",
  description:
    "Access your Perfect ETA member account at perfectETA.com. This page is not the marketing site—sign in through the dedicated portal.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortalPage() {
  return (
    <SectionContainer className="flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center py-20 md:py-28">
      <PortalLinkCard />
    </SectionContainer>
  );
}
