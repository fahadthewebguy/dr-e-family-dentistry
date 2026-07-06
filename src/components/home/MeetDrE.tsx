import Image from "@/components/AppImage";
import Link from "next/link";
import { drE } from "@/data/team";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function MeetDrE() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 -z-0 hidden h-full w-full rounded-[2.5rem] bg-accent-100 lg:block" />
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl shadow-primary-950/15 ring-1 ring-primary-100">
            <Image
              src={drE.image}
              alt={drE.imageAlt}
              fill
              sizes="(min-width: 1024px) 30vw, 70vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Meet Your Dentist"
            title={<>Janet Euzarraga, DDS — &ldquo;Dr. E&rdquo;</>}
            align="left"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
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
      </div>
    </section>
  );
}
