import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const siteUrl = `https://${SITE.marketingDomain}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Perfect ETA | Travel Showcase Webinar & Promotional Vacation Offers",
    template: "%s | Perfect ETA",
  },
  description:
    "Attend our qualifying travel presentation webinar from home. Explore cruises, resorts, and luxury destination experiences—and learn about promotional travel offers for eligible couples.",
  keywords: [
    "travel showcase webinar",
    "promotional travel offers",
    "qualifying travel presentation",
    "vacation webinar",
    "travel opportunity presentation",
    "cruise presentation",
    "resort vacation offers",
  ],
  authors: [{ name: "Perfect ETA" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Perfect ETA",
    title:
      "Perfect ETA | Premium Travel Showcase & Promotional Vacation Opportunities",
    description:
      "A refined online travel presentation for qualifying couples. Explore premium vacation concepts and eligibility for promotional incentives.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Perfect ETA — aspirational travel and curated vacation experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfect ETA | Travel Showcase Webinar",
    description:
      "Discover curated travel possibilities and promotional offers through our professional online presentation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="pt-[4.25rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
