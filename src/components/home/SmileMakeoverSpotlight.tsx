import Image from "next/image";
import Link from "next/link";
import { smileMakeover } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";

export function SmileMakeoverSpotlight() {
  return (
    <section className="bg-primary-950 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
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
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl">
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

        <Reveal delay={0.1}>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Smile Makeover
          </p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
            Transform Your Smile, Gain New Confidence
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-200">
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
    </section>
  );
}
