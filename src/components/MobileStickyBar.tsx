import Link from "next/link";
import { site } from "@/data/site";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-primary-200 bg-neutral-50/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(36,20,29,0.08)] sm:hidden">
      <a
        href={site.phoneHref}
        className="flex flex-col items-center justify-center gap-0.5 border-r border-primary-100 py-2.5 text-primary-800"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 5c0-.55.45-1 1-1h3.28a1 1 0 0 1 .95.68l1.2 3.6a1 1 0 0 1-.27 1.03L8.5 10.9a12 12 0 0 0 4.6 4.6l1.6-1.66a1 1 0 0 1 1.03-.27l3.6 1.2a1 1 0 0 1 .67.95V19c0 .55-.45 1-1 1h-1.5C10.4 20 4 13.6 4 5.5V5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-semibold">Call</span>
      </a>
      <a
        href={site.smsHref}
        className="flex flex-col items-center justify-center gap-0.5 border-r border-primary-100 py-2.5 text-primary-800"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 12a8 8 0 1 1 3.2 6.4L4 19l1-2.8A7.96 7.96 0 0 1 4 12Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-semibold">Text</span>
      </a>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-0.5 bg-primary-700 py-2.5 text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 9h14M8 4v3M16 4v3M6 6h12a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11px] font-semibold">Book</span>
      </Link>
    </div>
  );
}
