# Daily Oratory Product Architecture

## Product Vision

Daily Oratory is your daily Catholic home for prayer, reflection, and devotion. It turns a large spiritual resource archive into a prayerful, searchable, mobile-first formation experience for individuals, families, parish groups, prayer communities, and formation teams.

The platform helps users:

1. Begin in prayer with daily and seasonal structure.
2. Reflect on Daily Mass readings and Sunday Gospel passages.
3. Learn Catholic doctrine and spiritual practices.
4. Live the liturgical year.
5. Prepare for confession.
6. Explore Mass, sacraments, saints, and devotions.
7. Ask for prayer and join reverent online prayer spaces.
8. Search and filter a large resource library.

## Information Architecture

Top-level navigation:

1. Pray
2. Reflect
3. Learn
4. Liturgical Year
5. Community
6. Library
7. About

Resource categories:

- Prayer
- Rosary
- Daily Reflection
- Liturgical Year
- Sacraments
- Saints & Devotions
- Formation
- Community
- Scripture
- Reference

## User Journeys

Prayer path: Home -> Begin in prayer -> Pray -> Morning Offering, Holy Rosary, or Enter Adoration -> related resources.

Reflection path: Home -> Daily Reflections -> Reflect -> Daily Mass or Sunday Gospel reflection -> Scripture prayer resources.

Confession path: Home -> Grow in virtue -> Confession Guide -> Habitual Sin / Resisting Temptation / Predominant Fault.

Liturgical path: Home -> Pray with the Church -> Liturgical Year -> season cards -> filtered resources.

Search path: Home search or Library -> query/filter by category, tag, and season -> resource detail -> related resources.

Community path: Home events -> Community -> Ask for prayer / live Rosary / local groups / discussion topics.

## File Tree

```text
daily-oratory/
  src/app/
    page.tsx
    layout.tsx
    globals.css
    pray/page.tsx
    reflect/page.tsx
    learn/page.tsx
    liturgical-year/page.tsx
    community/page.tsx
    library/page.tsx
    library/[slug]/page.tsx
    about/page.tsx
    contact/page.tsx
    sitemap.ts
    robots.ts
  src/components/layout/
    Header.tsx
    Footer.tsx
  src/components/home/
    Hero.tsx
    BeginInPrayer.tsx
    TodayInTheChurch.tsx
    DailyReflectionsSection.tsx
    GrowInTheFaith.tsx
    LiturgicalYearSection.tsx
    PrayerCommunity.tsx
    FeaturedResources.tsx
    NewsletterSignup.tsx
    FooterCta.tsx
  src/config/
    brand.ts
    navigation.ts
  src/data/
    resources.ts
    categories.ts
  src/content/
    resources.ts
    reflections.ts
    events.ts
    liturgical.ts
    sections.ts
    types.ts
  src/lib/
    metadata.ts
    resources.ts
    format.ts
```

## Design System

Visual direction: Catholic, prayerful, welcoming, mission-driven, reverent, and modern.

Core palette:

- Ivory: `#fffdf7`
- Parchment: `#f3ead8`
- Deep navy: `#0d2038`
- Warm gold: `#bd8a2f`
- Muted burgundy: `#7a2533`
- Soft stone: `#d8cdb9`
- Olive: `#31523b`

Typography:

- Headings: Cormorant Garamond via `next/font`.
- Body/UI: Geist Sans via `next/font`.
- Code/technical labels: Geist Mono.

Component rules:

- Cards are used for repeated resources, reflection cards, events, and season items.
- Sections are full-width bands or unframed content blocks.
- Controls have explicit labels, focus states, and stable heights.
- Mobile navigation uses a reachable button and visible open/closed state.
- Search and filters are native controls for accessibility and minimal dependencies.

## Data Schema

Resource fields:

- `slug`
- `title`
- `description`
- `category`
- `format`
- `season`
- `tags`
- `featured`
- `minutes`
- `updatedAt`
- `status`
- `related`
- `body`
