import Image from "@/components/AppImage";
import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.100),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:py-24 lg:px-8">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent-300 bg-accent-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-accent-800">
              <Image
                src="/images/award-badge.png"
                alt=""
                width={330}
                height={460}
                className="h-4 w-auto"
                aria-hidden="true"
              />
              {site.award.title} {site.award.years} · {site.award.source}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-4xl leading-[1.1] text-primary-950 sm:text-5xl lg:text-6xl">
              {site.tagline}
              <span className="block text-primary-600">for Cosmetic &amp; Family Dentistry</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
              Dr. Janet Euzarraga — &ldquo;Dr. E&rdquo; — has been welcoming Ahwatukee families into
              her practice since 2001, pairing genuine, personal care with premium cosmetic and
              general dentistry.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-primary-700 px-7 py-3.5 text-center text-base font-semibold text-white shadow-md shadow-primary-950/10 transition-colors hover:bg-primary-800"
              >
                Request an Appointment
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-full border border-primary-300 bg-white px-7 py-3.5 text-center text-base font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
              >
                Call or Text {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary-950/20 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero.jpg"
              alt="A relaxed patient smiling during a friendly dental visit at Dr. E Cosmetic & Family Dentistry"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl shadow-primary-950/10 sm:block">
            <p className="font-serif text-2xl text-primary-800">30+ years</p>
            <p className="text-xs font-medium tracking-wide text-neutral-600">
              of trusted dental care
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
