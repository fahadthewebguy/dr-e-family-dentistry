import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { SmileMakeoverSpotlight } from "@/components/home/SmileMakeoverSpotlight";
import { MeetDrE } from "@/components/home/MeetDrE";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { BeforeAfterTeaser } from "@/components/home/BeforeAfterTeaser";
import { BlogTeaser } from "@/components/home/BlogTeaser";
import { VisitUs } from "@/components/home/VisitUs";

export const metadata: Metadata = {
  title: "Cosmetic & Family Dentist in Ahwatukee, Phoenix AZ",
  description:
    "Dr. Janet Euzarraga (\"Dr. E\") offers cosmetic and family dentistry in Ahwatukee, Phoenix, AZ. Voted #1 Best Dentist, ADA & AACD member. Call or text 480-494-2435.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <SmileMakeoverSpotlight />
      <MeetDrE />
      <ReviewsCarousel />
      <BeforeAfterTeaser />
      <BlogTeaser />
      <VisitUs />
    </>
  );
}
