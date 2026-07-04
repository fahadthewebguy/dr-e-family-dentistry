import type { Metadata } from "next";
import Image from "@/components/AppImage";
import Link from "next/link";
import { drE, hygienists } from "@/data/team";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet Dr. Janet Euzarraga, DDS (\"Dr. E\") and the dental hygiene team at Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
              Meet the Team
            </p>
            <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">
              The People Behind Your Smile
            </h1>
          </Reveal>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full shadow-2xl shadow-primary-950/15 ring-8 ring-white">
                <Image
                  src={drE.image}
                  alt={drE.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 70vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl text-primary-950">{drE.name}</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent-700">
                {drE.role}
              </p>
              <div className="mt-5 space-y-4 text-neutral-700 leading-relaxed">
                {drE.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-6 flex flex-wrap gap-3">
                {site.memberships.map((m) => (
                  <li
                    key={m.abbr}
                    className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-800"
                  >
                    {m.abbr} Member
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
              Dental Hygienists
            </p>
            <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
              Top-Notch Hygiene Care
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
              Dr. E&rsquo;s office boasts top-notch hygienists dedicated to helping every patient
              maintain a healthy, beautiful smile.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hygienists.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-primary-100">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    {/* PLACEHOLDER — replace with real staff photo */}
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-primary-900">{member.name}</h3>
                    <p className="text-sm font-medium text-accent-700">{member.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{member.bio[0]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl text-primary-950 sm:text-3xl">
            Ready to meet the team in person?
          </h2>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
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
      </section>
    </>
  );
}
