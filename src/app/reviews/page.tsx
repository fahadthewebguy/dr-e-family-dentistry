import type { Metadata } from "next";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read what patients are saying about Dr. E Cosmetic & Family Dentistry in Ahwatukee, Phoenix, AZ.",
  alternates: { canonical: "/reviews" },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-accent-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
            Patient Reviews
          </p>
          <h1 className="mt-3 font-serif text-4xl text-primary-950 sm:text-5xl">
            Loved by Ahwatukee Families
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-neutral-700">
            {site.award.title} {site.award.years} — see why patients keep coming back to Dr.
            E&rsquo;s office.
          </p>
        </Reveal>

        {/* PLACEHOLDER — replace with real patient reviews pulled from Google/Yelp/Facebook */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-3xl bg-neutral-50 p-7 ring-1 ring-primary-100">
                <Stars rating={review.rating} />
                <p className="mt-4 flex-1 leading-relaxed text-neutral-700">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-5 font-serif text-primary-900">{review.name}</p>
                <p className="text-xs text-neutral-500">via {review.source}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 rounded-3xl bg-primary-950 p-8 text-center sm:p-12">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">Had a great visit?</h2>
          <p className="mt-3 text-primary-200">
            We&rsquo;d love to hear about your experience — it helps other Ahwatukee families find
            us too.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={site.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent-500 px-7 py-3.5 text-center text-base font-semibold text-primary-950 transition-colors hover:bg-accent-400"
            >
              Leave a Review on Yelp
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary-700 px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-primary-900"
            >
              Leave a Review on Facebook
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
