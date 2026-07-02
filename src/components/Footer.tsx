import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "Before & After", href: "/before-after" },
  { label: "Reviews", href: "/reviews" },
  { label: "Meet the Team", href: "/team" },
  { label: "Patient Forms", href: "/patient-forms" },
  { label: "Office Tour", href: "/office-tour" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt={`${site.name} logo`}
            width={464}
            height={267}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-primary-200">
            {site.tagline} — cosmetic &amp; family dentistry rooted in this community since 2001.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr. E on Facebook"
              className="text-primary-300 transition-colors hover:text-accent-400"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
              </svg>
            </a>
            <a
              href={site.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr. E on X (Twitter)"
              className="text-primary-300 transition-colors hover:text-accent-400"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.7L7.4 4H5.5l12.2 16Z" />
              </svg>
            </a>
            <a
              href={site.socials.yelp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr. E on Yelp"
              className="text-primary-300 transition-colors hover:text-accent-400"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8.6 13.1 3.9 11.5c-.9-.3-.9-1.6.1-1.8l7.6-1.7c.9-.2 1.7.6 1.4 1.5l-2.4 6.8c-.3.9-1.5 1-2 .2l-1.1-1.6Zm3.1 2.1 4.7 3.4c.8.6.6 1.8-.3 2.1l-5.1 1.6c-.9.3-1.7-.6-1.4-1.4l1.5-5.1c.2-.8 1.3-1.1 1.9-.6Zm3.3-5.7-2.9-6.9c-.4-.9.6-1.8 1.4-1.3l6.7 4c.8.5.6 1.7-.3 1.9l-4.9 2.3Zm-1 3.2 6.9-1c1-.1 1.4 1.1.7 1.8l-4.9 4.6c-.6.6-1.7.2-1.7-.7l-.1-4.7Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">Visit Us</h3>
          <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-primary-200">
            <p>{site.address.line1}</p>
            <p>
              {site.address.city}, {site.address.state} {site.address.zip}
            </p>
          </address>
          <p className="mt-4 text-sm text-primary-200">
            <a href={site.phoneHref} className="hover:text-accent-400">
              Call or Text {site.phone}
            </a>
          </p>
          <p className="text-sm text-primary-200">
            <a href={`mailto:${site.email}`} className="hover:text-accent-400">
              {site.email}
            </a>
          </p>
          <div className="mt-4 space-y-1 text-sm text-primary-200">
            {site.hours.map((h) => (
              <p key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className={h.time === "Closed" ? "text-primary-400" : ""}>{h.time}</span>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-200">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">Services</h3>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-primary-200">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent-400">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wider text-primary-400">Memberships</p>
          <p className="mt-2 text-sm text-primary-200">
            {site.memberships.map((m) => m.abbr).join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-900">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-primary-400 sm:px-6 lg:px-8">
          © {year} {site.name} — {site.dentist}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
