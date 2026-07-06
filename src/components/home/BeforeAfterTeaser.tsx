import Image from "@/components/AppImage";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

const pairs = [
  { before: "/images/before-after/pair1-before.jpg", after: "/images/before-after/pair1-after.jpg" },
  { before: "/images/before-after/pair2-before.jpg", after: "/images/before-after/pair2-after.jpg" },
];

export function BeforeAfterTeaser() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Results"
          title="See the Difference"
          description="A glimpse at the smile transformations possible with Dr. E's cosmetic dentistry."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pairs.map((pair, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Link
                href="/before-after"
                className="group grid grid-cols-2 gap-1 overflow-hidden rounded-3xl shadow-sm ring-1 ring-primary-100"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={pair.before}
                    alt="Before smile transformation"
                    fill
                    sizes="(min-width: 640px) 25vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-primary-950/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={pair.after}
                    alt="After smile transformation"
                    fill
                    sizes="(min-width: 640px) 25vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-accent-500 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-950">
                    After
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Link
            href="/before-after"
            className="inline-flex items-center gap-2 rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            View Full Gallery
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
