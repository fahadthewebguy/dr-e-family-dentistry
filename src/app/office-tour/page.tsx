import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Office Tour",
  description:
    "Take a look inside Dr. E Cosmetic & Family Dentistry's modern, comfortable office in Ahwatukee, Phoenix, AZ.",
  alternates: { canonical: "/office-tour" },
};

const photos = [
  { src: "/images/office/office-1.jpg", alt: "Modern dental treatment room with overhead light" },
  { src: "/images/office/office-2.jpg", alt: "Clean, bright dental operatory" },
  { src: "/images/office/office-3.jpg", alt: "Dental equipment in a treatment room" },
  { src: "/images/office/office-4.jpg", alt: "Modern dental office interior" },
  { src: "/images/office/office-5.jpg", alt: "Dental chair and equipment in a treatment room" },
  { src: "/images/office/office-6.jpg", alt: "Comfortable, modern dental treatment room" },
];

export default function OfficeTourPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            Take a Look Inside
          </p>
          <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">Office Tour</h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-700">
            A modern, comfortable space designed to put you at ease from the moment you walk in.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-sm ring-1 ring-primary-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
