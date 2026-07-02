# Dr. E Cosmetic & Family Dentistry

A modern marketing website for Dr. E Cosmetic & Family Dentistry (Dr. Janet Euzarraga, DDS) in Ahwatukee, Phoenix, AZ — built as a redesign pitch for the practice's existing site.

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** — brand palette extracted directly from the practice logo (`scripts/extract-colors.ps1`)
- **Framer Motion** for scroll-triggered entrance animations
- Static content in `/src/data/` — no CMS, no database

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing Content

All practice content (NAP, hours, services, team, blog posts, reviews) lives in `/src/data/` as plain TypeScript objects:

- `site.ts` — name, address, phone, hours, socials, memberships
- `services.ts` — all 11 services + Smile Makeover
- `team.ts` — Dr. E and hygienist bios
- `blog.ts` — blog posts
- `reviews.ts` — patient testimonials (currently placeholder — replace with real reviews before launch)

## Known Placeholders

A few things are intentionally marked `PLACEHOLDER` in code and should be replaced before this goes live:

- **Before & After gallery** — currently stock photography, not real patient results (disclaimer shown on page)
- **Hygienist team photos** — stock portraits standing in for real staff photos
- **Patient reviews** — sample copy, not pulled from Google/Yelp/Facebook yet
- **Patient forms** — no downloadable PDFs wired up yet

## Build

```bash
npm run build
npm run lint
```
