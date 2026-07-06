import Image from "@/components/AppImage";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  {
    badge: true,
    title: `${site.award.title}`,
    subtitle: `${site.award.years} · ${site.award.source}`,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "ADA · AACD",
    subtitle: "Professional memberships",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Since 2001",
    subtitle: "Serving Ahwatukee",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3c2.5 2 4 4.2 4 7 0 2.8-1.8 5-4 5s-4-2.2-4-5c0-2.8 1.5-5 4-7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M7 20c1-2.5 2.8-4 5-4s4 1.5 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "11 Services",
    subtitle: "Cosmetic & family care",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-primary-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4 lg:divide-x lg:divide-primary-100">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 text-center lg:px-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 text-primary-700 ring-1 ring-accent-200">
                  {item.badge ? (
                    <Image
                      src="/images/award-badge.png"
                      alt="Best of Ahwatukee Foothills News, 1st Place award badge"
                      width={330}
                      height={460}
                      className="h-8 w-auto"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <div>
                  <p className="font-serif text-base text-primary-900">{item.title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-neutral-500">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
