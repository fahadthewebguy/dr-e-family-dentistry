import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { DentistJsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Dr. Janet Euzarraga (\"Dr. E\") provides cosmetic and family dentistry in Ahwatukee, Phoenix, AZ — voted the community's #1 Best Dentist. Call or text 480-494-2435.",
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | ${site.tagline}`,
    description:
      "Cosmetic and family dentistry in Ahwatukee, Phoenix, AZ from Dr. Janet Euzarraga, DDS.",
    images: [{ url: "/images/award-banner.png", width: 1920, height: 496 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description:
      "Cosmetic and family dentistry in Ahwatukee, Phoenix, AZ from Dr. Janet Euzarraga, DDS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${figtree.variable} h-full antialiased`}
    >
      <head>
        <DentistJsonLd />
      </head>
      <body className="flex min-h-full flex-col bg-neutral-50 pb-14 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
