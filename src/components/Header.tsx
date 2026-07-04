"use client";

import Image from "@/components/AppImage";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

const primaryNav = [
  { label: "Services", href: "/services" },
  { label: "Meet the Team", href: "/team" },
  { label: "Before & After", href: "/before-after" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

const secondaryNav = [
  { label: "Patient Forms", href: "/patient-forms" },
  { label: "Office Tour", href: "/office-tour" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100/60 bg-neutral-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} home`}>
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={464}
            height={267}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-primary-900 transition-colors hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-sm font-medium tracking-wide text-primary-900 transition-colors hover:text-primary-600"
              aria-haspopup="true"
            >
              Patients
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="w-48 rounded-xl border border-primary-100 bg-white p-2 shadow-lg shadow-primary-950/5">
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-primary-900 hover:bg-primary-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-sm font-medium tracking-wide text-primary-900 transition-colors hover:text-primary-600"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="rounded-full border border-primary-200 px-4 py-2.5 text-sm font-semibold text-primary-800 transition-colors hover:border-primary-400 hover:bg-primary-50"
          >
            Call or Text {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-800"
          >
            Request an Appointment
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-primary-900 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-primary-100 bg-neutral-50 lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {[...primaryNav, ...secondaryNav, { label: "Contact", href: "/contact" }].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-primary-900 hover:bg-primary-50"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-primary-100 pt-3">
                <a
                  href={site.phoneHref}
                  className="rounded-full border border-primary-200 px-4 py-3 text-center text-sm font-semibold text-primary-800"
                >
                  Call or Text {site.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-primary-700 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Request an Appointment
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
