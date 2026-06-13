# Daily Oratory Rebrand Migration Plan

## Brand Decision

Public platform name: **Daily Oratory**

Domain: **DailyOratory.faith**

Canonical URL: `https://DailyOratory.faith`

Tagline: **Your daily Catholic home for prayer, reflection, and devotion.**

Mission: Daily Oratory helps Catholics pray daily, follow the liturgical year, grow in virtue, prepare for the sacraments, ask for prayer, discover saints, and join reverent online prayer spaces.

## Legacy Context

The previous project name, Brotherhood of Ascension, should appear only when discussing legacy migration, old URL redirects, analytics annotations, old content source mapping, or private editorial history. It should not appear in public navigation, metadata, page copy, footer copy, resource UI, or social previews.

## Old-To-New Terminology Map

| Old or deprecated term | Daily Oratory replacement |
| --- | --- |
| Brotherhood of Ascension | Daily Oratory |
| BOA | Daily Oratory |
| brotherhood | Catholic community, prayer community, or Daily Oratory |
| ascension as brand language | oratory, Catholic prayer, or Daily Oratory |
| brotherhoodofascension.com | DailyOratory.faith |
| old brand | legacy brand |
| old site | legacy site |
| join the brotherhood | ask for prayer or join a prayer community |
| men's formation as default audience | individuals, families, parish groups, and prayer communities |

## Updated Sitemap

- `/` - Home
- `/pray` - Begin in prayer, Holy Rosary, Adoration, Benediction, and live prayer
- `/reflect` - Daily Mass Scripture Reflections and Sunday Gospel Reflections
- `/learn` - Confession Guide, Mass and Sacraments, Saints and Devotions, Spiritual Formation
- `/liturgical-year` - Live the liturgical year with Church seasons and seasonal practices
- `/community` - Ask for prayer, live prayer rooms, events, local faith groups, and group discussion topics
- `/community/events` - Upcoming prayer, formation, and local Catholic community events
- `/community/events/[slug]` - Event detail pages
- `/community/local-faith-groups` - Local and hybrid faith group directory
- `/community/group-discussion-topics` - Prayerful discussion guides for groups
- `/community/contact` - Community contact form UI
- `/library` - Searchable resource library
- `/library/[slug]` - Resource detail pages
- `/about` - Mission and brand direction
- `/contact` - Contribution, correction, and event inquiries

## Redirect Planning Notes

Configured in `next.config.ts` and mirrored in `src/config/navigation.ts`:

```text
/prayer -> /pray
/rosary -> /pray
/daily-reflections -> /reflect
/sacraments -> /learn
/saints-devotions -> /learn
/formation -> /learn
/events -> /community/events
/community-events -> /community/events
/local-faith-groups -> /community/local-faith-groups
/group-discussion-topics -> /community/group-discussion-topics
/resources -> /library
/resources/:slug -> /library/:slug
```

When migrating from the legacy source site, map old URLs to the closest user intent first, then to the most specific resource detail page. Keep historical source notes in migration docs only.

## Public Brand Language

Use:

- Daily Oratory
- Your daily Catholic home for prayer, reflection, and devotion
- Begin in prayer
- Pray with the Church
- Live the liturgical year
- Grow in virtue
- Ask for prayer
- Enter Adoration
- Find a saint companion
- Build a daily rule of life

Avoid:

- Brotherhood of Ascension as public brand
- BOA as public shorthand
- Startup-style language
- Gamified holiness language
- Social-media-style engagement language

## Rebrand Audit Checklist

- Search the repository for `Brotherhood of Ascension`, `BOA`, `brotherhood`, `ascension`, `brotherhoodofascension.com`, `old brand`, and `old site`.
- Confirm remaining legacy references are only in migration documentation, redirect planning, or old content source mapping.
- Confirm `src/config/brand.ts` includes platform, domain, canonical URL, tagline, mission, SEO, Open Graph, support email, and social image values.
- Confirm metadata title, description, Open Graph title, Open Graph description, and canonical URL use Daily Oratory.
- Confirm header, footer, homepage, About page, README, and admin guide use Daily Oratory.
- Confirm navigation uses Pray, Reflect, Learn, Liturgical Year, Community, Library, and About.
- Confirm old routes redirect to the new structure.

## QA Checklist

- Run `npm run lint`.
- Run `npm run build`.
- Test `/`, `/pray`, `/reflect`, `/learn`, `/liturgical-year`, `/community`, `/library`, `/about`, and `/contact`.
- Test `/library?q=rosary` search.
- Test at least one resource detail page, such as `/library/holy-rosary`.
- Test a legacy redirect, such as `/resources/holy-rosary`.
- Check mobile navigation and first viewport at 390px width.
- Confirm no old public brand references remain in visible UI.
