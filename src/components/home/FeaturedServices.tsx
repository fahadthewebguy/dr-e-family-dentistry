import Image from "@/components/AppImage";
import Link from "next/link";
import { featuredServices } from "@/data/services";
import { smileMakeover } from "@/data/services";
import { Reveal } from "@/components/motion/Reveal";

const cards = [...featuredServices, smileMakeover];

export function FeaturedServices() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            What We Offer
          </p>
          <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
            Care Designed Around Your Smile
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm shadow-primary-950/5 ring-1 ring-primary-100 transition-shadow hover:shadow-lg hover:shadow-primary-950/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-primary-900">{service.name}</h3>
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

        <Reveal delay={0.3} className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            View All Services
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
