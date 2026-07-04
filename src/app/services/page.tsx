import type { Metadata } from "next";
import Image from "@/components/AppImage";
import Link from "next/link";
import { services, smileMakeover } from "@/data/services";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Dental Services in Ahwatukee, Phoenix AZ",
  description:
    "Explore general, cosmetic, and family dentistry services at Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ — from cleanings to veneers, implants, and smile makeovers.",
  alternates: { canonical: "/services" },
};

const allOfferings = [...services, smileMakeover];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
              Our Services
            </p>
            <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">
              Comprehensive Dental Care for Every Smile
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              From routine cleanings to full smile makeovers, Dr. E and her team provide
              personalized, comfortable dental care for the whole family in Ahwatukee.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-primary-700 px-7 py-3.5 text-center text-base font-semibold text-white shadow-md transition-colors hover:bg-primary-800"
              >
                Request an Appointment
              </Link>
              <a
                href={site.phoneHref}
                className="rounded-full border border-primary-300 px-7 py-3.5 text-center text-base font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
              >
                Call or Text {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allOfferings.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 6) * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-primary-950/5 ring-1 ring-primary-100 transition-shadow hover:shadow-lg hover:shadow-primary-950/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={service.heroImage}
                      alt={service.heroImageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-xl text-primary-900">{service.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                      {service.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:text-primary-800">
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
