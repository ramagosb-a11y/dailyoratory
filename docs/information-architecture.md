# Daily Oratory Information Architecture

Daily Oratory is organized as a quiet Catholic digital oratory: simple paths, reverent language, and resource discovery that serves prayer rather than distraction.

Tagline: **Your daily Catholic home for prayer, reflection, and devotion.**

## Sitemap

1. Pray
   - Prayer Library
   - Holy Rosary
   - Divine Mercy Chaplet
   - Live Adoration
   - Live Prayer Rooms
   - Daily Rule of Life
   - Confession Guide
2. Reflect
   - Daily Reflections
   - Sunday Gospel Reflections
   - Guided Examination of Conscience
   - Virtue and Vice Tracker
3. Learn
   - Spiritual Growth Pathways
   - Sacraments
   - Saints
   - Devotions
   - Scripture
   - Mass
   - Formation
4. Liturgical Year
   - Today in the Church
   - Liturgical Living Dashboard
   - Calendar
   - Seasons
   - Holy Days
   - Family Liturgical Living
5. Community
   - Ask for Prayer
   - Prayer Intention Wall
   - Prayer Chain
   - Live Prayer Rooms
   - Events
   - Local Faith Groups
   - Group Discussion Topics
6. Library
   - All Resources
   - Prayer Resources
   - Formation Resources
   - Sacramental Resources
   - Seasonal Resources
7. About
   - Mission
   - Contact

## URL Structure

- `/` - Home and primary starting points
- `/pray` - Prayer, Rosary, Adoration, prayer rooms, rule of life, confession
- `/rosary` - Holy Rosary overview, how to pray, mystery selector, and day-of-week recommendation
- `/rosary/joyful-mysteries` - Joyful Mysteries with fruits, Scripture references, and meditation prompts
- `/rosary/sorrowful-mysteries` - Sorrowful Mysteries with fruits, Scripture references, and meditation prompts
- `/rosary/glorious-mysteries` - Glorious Mysteries with fruits, Scripture references, and meditation prompts
- `/rosary/luminous-mysteries` - Luminous Mysteries with fruits, Scripture references, and meditation prompts
- `/rosary/latin-rosary` - Latin Rosary guide with English cues and pronunciation help
- `/adoration` - Live Adoration Portal with featured, live, 24/7, and verified streams
- `/adoration/live` - Filtered live and 24/7 Eucharistic Adoration streams
- `/adoration/[slug]` - Stream detail prayer chapel with quiet mode, safe iframe, prayer panel, and reporting
- `/adoration/prayers` - Adoration prayers for entering, silence, reparation, and leaving
- `/adoration/submit-stream` - Submit-stream review form with Google Sheets schema and Apps Script plan
- `/confession` - Gentle Catholic Confession Guide hub with preparation, examination, prayers, and support
- `/confession/how-to-go` - Pastoral guide for going to confession
- `/confession/examination` - Private local-only Guided Examination of Conscience
- `/confession/sins` - Pastoral overview of sin, conscience, culpability, and conversion
- `/confession/habitual-sin` - Gentle support for repeated struggles, safeguards, confession, and contrary virtues
- `/confession/resisting-temptation` - Practical Catholic guide for resisting temptation before consent
- `/confession/predominant-fault` - Self-knowledge guide for naming a recurring fault and practicing a contrary virtue
- `/confession/prayers` - Prayers before and after confession
- `/reflect` - Daily and Sunday reflections, conscience, virtue and vice review
- `/learn` - Sacraments, saints, devotions, Scripture, Mass, formation
- `/liturgical-year` - Today in the Church, calendar, seasons, holy days, family practices
- `/community` - Prayer requests, intention wall, prayer chain, events, groups, discussions
- `/community/prayer-rooms` - Live Prayer Rooms directory with mock presence and devotion guides
- `/community/prayer-rooms/[roomId]` - Room detail with current step, join/leave, optional intentions, report button, and host controls placeholder
- `/community/prayer-rooms/start` - Local start-room draft form plus Supabase schema and moderation checklist
- `/community/prayer-rooms/schedule` - Live, upcoming, and paused prayer room schedule
- `/community/prayer-rooms/rosary` - Rosary room listing and host guide
- `/community/prayer-rooms/divine-mercy` - Divine Mercy room listing and host guide
- `/prayer-intentions` - Ask for prayer and learn the moderation-first intention wall flow
- `/prayer-intentions/submit` - Local mock submission form with privacy warnings
- `/prayer-intentions/wall` - Approved public intentions with local prayer recording
- `/prayer-intentions/urgent` - Approved urgent intentions with emergency disclaimer
- `/prayer-intentions/thanksgivings` - Approved thanksgiving intentions
- `/prayer-intentions/guidelines` - Moderation workflow, Google Sheets notes, and Supabase schema
- `/prayer-intentions/[slug]` - Approved public prayer intention detail page
- `/library` - All resources with search, category, tag, and season filters
- `/library/[slug]` - Canonical resource detail page
- `/about` - Mission, editorial posture, brand trust
- `/contact` - Corrections, contributions, and inquiries

## Desktop Mega Menu

The desktop header uses `siteNavigation` from `src/config/navigation.ts`.

Each top-level section opens a calm mega menu with:

- Section title
- Short purpose statement
- Link to open the section
- Child links with one-line descriptions

The menu avoids novelty labels and keeps devotional language close to user intent.

## Mobile Drawer Menu

The mobile drawer uses the same `mobileDrawerNavigation` data source.

Pattern:

- Brand name and `Ask for prayer` action at the top
- Sections grouped by top-level IA
- Each section includes the short purpose statement and child links
- Links close the drawer after navigation

## Footer Navigation

The footer groups links by spiritual movement:

- Begin: Begin in prayer, Pray with the Church, Enter Adoration, Confession Guide
- Grow: Daily Reflections, Live the liturgical year, Grow in virtue, Find a saint companion
- Gather: Ask for prayer, Events, Library, About, Contact

## Breadcrumb Pattern

Breadcrumbs should always begin with `Home`.

Examples:

- `Home / Library / Holy Rosary`
- `Home / Pray`
- `Home / Liturgical Year`

Resource detail pages use:

```text
Home / Library / Resource Title
```

The TypeScript breadcrumb reference lives in `breadcrumbPatterns` inside `src/config/navigation.ts`.

## Resource Taxonomy

Resource families:

- Prayer Resources
- Reflection Resources
- Formation Resources
- Sacramental Resources
- Seasonal Resources
- Community Resources

Canonical resource categories:

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

## Tag Taxonomy

Primary tags include:

- Adoration
- Live Adoration
- Rosary
- Divine Mercy
- Rule of Life
- Confession
- Daily Reflection
- Sunday Gospel
- Examination of Conscience
- Virtue
- Vice
- Sacraments
- Saints
- Devotions
- Scripture
- Mass
- Liturgical Living
- Holy Days
- Family Prayer
- Prayer Intentions
- Prayer Chain
- Live Prayer Rooms
- Events
- Local Faith Groups

Tags are defined in `src/data/categories.ts`.

## Liturgical Season Taxonomy

- Advent
- Christmas
- Lent
- Easter
- Pentecost
- Ordinary Time
- Marian
- All Year

Each season includes a slug, color, and spiritual focus in `src/data/categories.ts`.

## TypeScript Config

Primary source files:

- `src/config/navigation.ts` - sitemap, URL structure, desktop mega menu, mobile drawer menu, footer groups, breadcrumbs, legacy redirects
- `src/data/categories.ts` - resource taxonomy, tag taxonomy, liturgical season taxonomy
- `src/content/sections.ts` - section-page copy and featured path language
