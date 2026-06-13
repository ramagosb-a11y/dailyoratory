# Daily Oratory

**Your daily Catholic home for prayer, reflection, and devotion.**

Canonical domain: [DailyOratory.faith](https://DailyOratory.faith)

Daily Oratory helps Catholics pray daily, follow the liturgical year, grow in virtue, prepare for the sacraments, ask for prayer, discover saints, and join reverent online prayer spaces.

## Core Paths

- Begin in prayer.
- Pray with the Church.
- Live the liturgical year.
- Grow in virtue.
- Ask for prayer.
- Enter Adoration.
- Find a saint companion.
- Build a daily rule of life.

## Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- TypeScript
- App Router
- Tailwind CSS v4
- Static generation for library resource pages
- Local TypeScript data files
- No paid CMS and no unnecessary runtime dependencies

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Key Files

- Brand system: `src/config/brand.ts`
- Design system: `tailwind.config.ts`, `src/app/globals.css`, and `docs/design-system.md`
- Navigation and redirect map: `src/config/navigation.ts`
- Information architecture: `docs/information-architecture.md`
- Full content model: `src/types/*`, `src/data/*`, and `src/lib/content.ts`
- Metadata helper: `src/lib/metadata.ts`
- Homepage sections: `src/components/home/*`
- Layout: `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx`
- Resources: `src/data/resources.ts` and `src/content/resources.ts`
- Categories: `src/data/categories.ts`
- Rosary section: `src/app/rosary/*`, `src/components/rosary/*`, `src/data/rosary.ts`, and `src/lib/rosary.ts`
- Confession Guide: `src/app/confession/*`, `src/components/confession/*`, `src/data/confession.ts`, and `src/lib/confession.ts`
- Daily Reflections: `src/app/reflections/*`, `src/components/reflections/*`, `src/data/reflections.ts`, and `src/lib/reflections.ts`
- Prayer Intention Wall: `src/app/prayer-intentions/*`, `src/components/prayer-intentions/*`, `src/data/prayerIntentions.ts`, and `src/lib/prayerIntentionStorage.ts`
- Events and Community: `src/app/community/*`, `src/components/community/*`, `src/data/community.ts`, and `src/lib/community.ts`
- Live Prayer Rooms: `src/app/community/prayer-rooms/*`, `src/components/prayer-rooms/*`, `src/data/prayerRooms.ts`, and `src/lib/prayerRoomPresence.ts`
- Live Adoration Portal: `src/app/adoration/*`, `src/components/adoration/*`, `src/data/adoration.ts`, and `src/lib/adoration.ts`
- Google Sheets content admin: `google-workspace/content-admin/*` and `docs/google-sheets-content-admin.md`
- SEO, accessibility, and performance QA: `docs/seo-qa-checklist.md`, `docs/accessibility-checklist.md`, and `docs/performance-checklist.md`
- Final launch checklist: `docs/final-launch-checklist.md`

## Brand Audit Checklist

- Public brand name is `Daily Oratory`.
- Public domain is `DailyOratory.faith`.
- Public tagline is `Your daily Catholic home for prayer, reflection, and devotion.`
- Metadata uses `src/config/brand.ts`.
- Header, footer, homepage, About page, README, and admin docs use Daily Oratory.
- Legacy brand language appears only in migration documentation, redirect planning, or old content source mapping.

## Deployment On Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Keep the default framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: leave default.
6. Add `DailyOratory.faith` as the production domain.
7. Deploy.

No environment variables are required for the current static/local-content version.

## Prayer Intention Wall

The v1 wall uses approved mock data plus local-only UI for submissions, prayer counts, and reports. Real submissions must go through moderation before publication. Privacy, emergency, Google Sheets, and Supabase schema notes are available at `/prayer-intentions/guidelines`.

## Live Prayer Rooms

The v1 room experience uses mock data and localStorage presence. Users can browse rooms, open a room detail page, join or leave locally, save optional intentions locally, and save local reports. Supabase Realtime schema, RLS notes, and moderation checklist content are displayed from `src/data/prayerRooms.ts`.

## Live Adoration Portal

The v1 Adoration portal uses reviewed mock streams with safe YouTube/Vimeo embed normalization, no autoplay audio, quiet mode, local broken-stream reports, and a local submit-stream review form. Google Sheets schema and Apps Script exporter notes live in `src/data/adoration.ts`.

## Events And Community

The v1 Community section includes upcoming events, live prayer events, local faith groups, group discussion topics, and a contact form UI at `/community/contact`. Event detail pages are generated from `src/data/community.ts`, including recurring event support and online/in-person labels.

## Google Sheets Content Admin

The no-cost content admin system lives in `google-workspace/content-admin`. It creates the required Google Sheets tabs, validates approved content, exports approved rows to JSON in Drive, and logs every export. Full setup instructions are in `docs/google-sheets-content-admin.md`.

## Admin And Migration Docs

- Admin guide: `docs/admin-guide.md`
- Google Sheets admin: `docs/google-sheets-content-admin.md`
- Rebrand migration plan: `docs/rebrand-migration-plan.md`

Sample Catholic content is starter-grade and should receive theological/editorial review before production publication.
