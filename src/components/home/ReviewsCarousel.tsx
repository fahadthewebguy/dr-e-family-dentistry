"use client";

import { useRef } from "react";
import Link from "next/link";
import { reviews } from "@/data/reviews";
import { Reveal } from "@/components/motion/Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-accent-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
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

export function ReviewsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-review-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-700">
              Patient Reviews
            </p>
            <h2 className="mt-3 font-serif text-3xl text-primary-950 sm:text-4xl">
              Loved by Ahwatukee Families
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-colors hover:bg-primary-50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M9.5 3 5 8l4.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next reviews"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-200 text-primary-700 transition-colors hover:bg-primary-50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6.5 3 11 8l-4.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div
            ref={scrollerRef}
            className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                data-review-card
                className="flex w-[320px] shrink-0 snap-start flex-col rounded-3xl bg-neutral-50 p-7 ring-1 ring-primary-100 sm:w-[360px]"
              >
                <Stars rating={review.rating} />
                <p className="mt-4 flex-1 text-neutral-700 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-5 font-serif text-primary-900">{review.name}</p>
                <p className="text-xs text-neutral-500">via {review.source}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-4 text-center sm:text-left">
          <Link href="/reviews" className="text-sm font-semibold text-primary-700 hover:text-primary-800">
            Read all reviews →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
