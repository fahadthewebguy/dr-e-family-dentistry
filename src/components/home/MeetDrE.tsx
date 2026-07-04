import Image from "@/components/AppImage";
import Link from "next/link";
import { drE } from "@/data/team";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export function MeetDrE() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
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
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            Meet Your Dentist
          </p>
          <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
            Janet Euzarraga, DDS — &ldquo;Dr. E&rdquo;
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-700">
            {drE.bio[0]}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-neutral-600">{drE.bio[2]}</p>
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
          <Link
            href="/team"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            Read Dr. E&rsquo;s Full Story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
