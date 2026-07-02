import Image from "next/image";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-primary-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/award-badge.png"
                alt="Best of 2025 Ahwatukee Foothills News, 1st Place award badge"
                width={330}
                height={460}
                className="h-14 w-auto"
              />
              <div>
                <p className="font-serif text-lg text-primary-900">
                  {site.award.title}, {site.award.years}
                </p>
                <p className="text-sm text-neutral-600">{site.award.source}</p>
              </div>
            </div>

            <div className="hidden h-10 w-px bg-primary-100 sm:block" />

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {site.memberships.map((m) => (
                <div key={m.abbr} className="text-center">
                  <p className="font-serif text-lg text-primary-900">{m.abbr}</p>
                  <p className="max-w-[10rem] text-xs text-neutral-500">{m.name}</p>
                </div>
              ))}
            </div>

            <div className="hidden h-10 w-px bg-primary-100 sm:block" />

            <div className="text-center">
              <p className="font-serif text-lg text-primary-900">Since 2001</p>
              <p className="text-xs text-neutral-500">Proudly serving Ahwatukee</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
