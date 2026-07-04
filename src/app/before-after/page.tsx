import type { Metadata } from "next";
import Image from "@/components/AppImage";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Before & After Smile Gallery",
  description:
    "See the kind of smile transformations possible with cosmetic dentistry at Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ.",
  alternates: { canonical: "/before-after" },
};

// PLACEHOLDER — replace with real, consented patient before/after photography before launch.
const pairs = [
  {
    before: "/images/before-after/pair1-before.jpg",
    after: "/images/before-after/pair1-after.jpg",
    label: "Teeth Whitening",
  },
  {
    before: "/images/before-after/pair2-before.jpg",
    after: "/images/before-after/pair2-after.jpg",
    label: "Veneers",
  },
  {
    before: "/images/before-after/pair3-before.jpg",
    after: "/images/before-after/pair3-after.jpg",
    label: "Smile Makeover",
  },
];

export default function BeforeAfterPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            Real Results
          </p>
          <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">
            Before &amp; After Gallery
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-700">
            Every smile is different — here&rsquo;s a look at the kind of transformations possible
            with Dr. E&rsquo;s cosmetic dentistry.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map((pair, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <div className="overflow-hidden rounded-3xl shadow-sm ring-1 ring-primary-100">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={pair.before}
                      alt={`Before ${pair.label.toLowerCase()}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, 45vw"
                      className="object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-primary-950/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={pair.after}
                      alt={`After ${pair.label.toLowerCase()}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, 45vw"
                      className="object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded-full bg-accent-500 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-950">
                      After
                    </span>
                  </div>
                </div>
                <div className="bg-neutral-50 px-5 py-4">
                  <p className="font-serif text-lg text-primary-900">{pair.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-xs text-neutral-500">
            Photos shown are illustrative of possible results and are not actual patients of Dr.
            E Cosmetic &amp; Family Dentistry. Individual results vary.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 text-center">
          <Link
            href="/contact"
            className="rounded-full bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary-800"
          >
            Start Your Own Smile Makeover
          </Link>
          <p className="mt-3 text-sm text-neutral-500">
            or call/text{" "}
            <a href={site.phoneHref} className="font-semibold text-primary-700">
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
