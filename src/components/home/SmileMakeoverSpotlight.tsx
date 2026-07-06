import Image from "@/components/AppImage";
import Link from "next/link";
import { smileMakeover } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function SmileMakeoverSpotlight() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 sm:py-28">
      <div className="absolute -right-24 -top-24 -z-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/smile-makeover-before.jpg"
                alt="Before: a patient during a dental treatment visit"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-primary-950/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Before
              </span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl ring-2 ring-accent-500/60">
              <Image
                src="/images/smile-makeover-after.jpg"
                alt="After: a patient with a confident, healthy smile"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-950">
                After
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Smile Makeover"
            title="Transform Your Smile, Gain New Confidence"
            align="left"
            variant="dark"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-200">
              {smileMakeover.shortDescription}
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-primary-300">
              First, it&rsquo;s necessary to rule out dental decay and gum disease. From there, Dr. E
              helps you choose from whitening, Invisalign, veneers, crowns, and bonding — a
              personal, custom approach for every patient.
            </p>
            <Link
              href={`/services/${smileMakeover.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-primary-950 shadow-md transition-colors hover:bg-accent-400"
            >
              Explore Smile Makeovers
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
