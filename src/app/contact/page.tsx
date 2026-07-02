import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | Request an Appointment",
  description:
    "Request an appointment or get in touch with Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ. Call or text 480-494-2435.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            Get In Touch
          </p>
          <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">
            Request an Appointment
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-700">
            Fill out the form below or call/text us directly — we&rsquo;ll follow up to confirm a
            time that works for you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl bg-neutral-50 p-6 ring-1 ring-primary-100 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-xl text-primary-900">Visit Us</h2>
                <address className="mt-2 not-italic leading-relaxed text-neutral-700">
                  {site.address.line1}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </address>
              </div>

              <div>
                <h2 className="font-serif text-xl text-primary-900">Reach Us Directly</h2>
                <p className="mt-2 text-neutral-700">
                  <a href={site.phoneHref} className="font-semibold text-primary-700 hover:text-primary-800">
                    Call or Text {site.phone}
                  </a>
                </p>
                <p className="text-neutral-700">
                  <a href={`mailto:${site.email}`} className="hover:text-primary-700">
                    {site.email}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl text-primary-900">Office Hours</h2>
                <div className="mt-2 space-y-1">
                  {site.hours.map((h) => (
                    <p key={h.days} className="flex justify-between gap-8 text-sm text-neutral-700 sm:max-w-xs">
                      <span className="font-medium">{h.days}</span>
                      <span className={h.time === "Closed" ? "font-semibold text-primary-600" : ""}>
                        {h.time}
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl ring-1 ring-primary-100">
                <iframe
                  title={`Map to ${site.name}`}
                  src={site.mapEmbedSrc}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
