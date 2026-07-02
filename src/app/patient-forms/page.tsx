import type { Metadata } from "next";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Patient Forms",
  description:
    "Download new patient forms for Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ, or complete them digitally before your visit.",
  alternates: { canonical: "/patient-forms" },
};

// PLACEHOLDER — replace with real downloadable PDF forms (or a digital intake form link) before launch.
const forms = [
  {
    name: "New Patient Registration",
    description: "Contact details, insurance information, and general intake questions.",
  },
  {
    name: "Medical & Dental History",
    description: "Help Dr. E understand your health history so she can care for you safely.",
  },
  {
    name: "Financial & Insurance Policy",
    description: "Our office policies around billing, insurance, and payment.",
  },
  {
    name: "HIPAA Consent Form",
    description: "Your privacy rights and how your health information is protected.",
  },
];

export default function PatientFormsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            Before Your Visit
          </p>
          <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">Patient Forms</h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-700">
            Save time at your appointment by completing your forms ahead of time. You&rsquo;re
            also welcome to fill these out in the office — our team is happy to help.
          </p>
        </Reveal>

        <div className="mt-12 space-y-4">
          {forms.map((form, i) => (
            <Reveal key={form.name} delay={i * 0.06}>
              <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-neutral-50 p-6 ring-1 ring-primary-100 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-serif text-lg text-primary-900">{form.name}</h2>
                  <p className="mt-1 text-sm text-neutral-600">{form.description}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary-200 px-5 py-2.5 text-sm font-semibold text-primary-500">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M10 3v10m0 0 3.5-3.5M10 13l-3.5-3.5M4 15.5h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Coming Soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 rounded-3xl bg-primary-950 p-8 text-center sm:p-10">
          <h2 className="font-serif text-2xl text-white">Prefer to fill these out with us?</h2>
          <p className="mt-3 text-primary-200">
            No problem at all — just arrive a few minutes early to your appointment and our front
            desk team will take care of you.
          </p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-flex rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-primary-950 transition-colors hover:bg-accent-400"
          >
            Call or Text {site.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
