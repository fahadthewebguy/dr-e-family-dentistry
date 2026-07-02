import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, smileMakeover, getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

const allOfferings = [...services, smileMakeover];

export function generateStaticParams() {
  return allOfferings.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [{ url: service.heroImage }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = allOfferings.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-primary-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-primary-700">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-primary-800">{service.name}</li>
            </ol>
          </nav>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-16 lg:px-8">
          <Reveal>
            <h1 className="font-serif text-4xl leading-tight text-primary-950 sm:text-5xl">
              {service.name} in Ahwatukee, Phoenix
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              {service.shortDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-primary-950/10">
              <Image
                src={service.heroImage}
                alt={service.heroImageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {service.content.map((block) => (
              <Reveal key={block.heading}>
                <h2 className="font-serif text-2xl text-primary-900 sm:text-3xl">
                  {block.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-neutral-700">
                  {block.body.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 rounded-3xl bg-primary-950 p-8 text-center sm:p-10">
              <h3 className="font-serif text-2xl text-white">
                Ready to talk about {service.name.toLowerCase()}?
              </h3>
              <p className="mt-3 text-primary-200">
                Reach out to Dr. E&rsquo;s office — we&rsquo;re happy to answer questions and find
                a time that works for you.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-accent-500 px-7 py-3.5 text-center text-base font-semibold text-primary-950 transition-colors hover:bg-accent-400"
                >
                  Request an Appointment
                </Link>
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-primary-700 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-primary-900"
                >
                  Call or Text {site.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-serif text-2xl text-primary-950 sm:text-3xl">
              You Might Also Be Interested In
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-neutral-50 ring-1 ring-primary-100 transition-shadow hover:shadow-lg hover:shadow-primary-950/10"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={s.heroImageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg text-primary-900">{s.name}</h3>
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
