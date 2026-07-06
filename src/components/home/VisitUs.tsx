import Link from "next/link";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function VisitUs() {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 overflow-hidden rounded-[2.5rem] bg-white shadow-sm ring-1 ring-primary-100 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <SectionHeading eyebrow="Visit Us" title="We'd Love to See You" align="left" />
            <address className="mt-6 not-italic leading-relaxed text-neutral-700">
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>

            <div className="mt-6 space-y-1">
              {site.hours.map((h) => (
                <p key={h.days} className="flex justify-between gap-8 text-sm text-neutral-700 sm:max-w-xs">
                  <span className="font-medium">{h.days}</span>
                  <span className={h.time === "Closed" ? "font-semibold text-primary-600" : ""}>
                    {h.time}
                  </span>
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="rounded-full bg-primary-700 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                Call or Text {site.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-primary-300 px-6 py-3 text-center text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
              >
                Get Directions &amp; Contact
              </Link>
            </div>
          </div>

          <Reveal delay={0.1} className="min-h-[320px] lg:min-h-full">
            <iframe
              title={`Map to ${site.name}`}
              src={site.mapEmbedSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
