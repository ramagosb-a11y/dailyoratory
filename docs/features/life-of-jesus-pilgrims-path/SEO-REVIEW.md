# SEO-REVIEW — Life of Jesus: Pilgrim’s Path

Feature ID / revision / reviewer / date: `life-of-jesus-pilgrims-path`; R3; Site / SEO review; 2026-09-23.

Verdict: **ready for local route implementation; publication/indexing pending content and rights gates**.

- Existing equivalent route and duplicate-content check: no `src/app/life-of-jesus` route and no existing Life of Jesus page was found. The Bible, Way of the Cross, Resurrection Stations, Holy Week, Rosary, and Vatican pages are related but not duplicates.
- Route/location and canonical: one canonical public route, `/life-of-jesus`. Do not create `/jesus-timeline`, `/life-of-christ`, or per-event routes in v1. If aliases are later requested, permanent redirects point to `/life-of-jesus` and require loop validation.
- Metadata: use `createPageMetadata` with title `The Life of Jesus Christ Timeline | A Pilgrim’s Path`; description `Walk through the life of Jesus Christ from the promises and Incarnation to the Cross, Resurrection, and Ascension, with exact Gospel references and public-domain Douay–Rheims devotional reading.`; path `/life-of-jesus`; restrained keywords such as `life of Jesus Christ`, `Jesus timeline`, `Gospel chronology`, `Catholic Bible`, and `Douay–Rheims Bible`.
- Open Graph: canonical URL agrees with metadata path. Use a rights-cleared production image only; until then use the site’s safe default rather than the concept mockup or an unlicensed photograph.
- Navigation/internal links: add “Life of Jesus” under Learn → Foundations of the Faith or the nearest existing Scripture group; add a card/link from `/learn` if that page’s established pattern supports it; add the breadcrumb `Learn → Life of Jesus`; consider related links from `/bible`, `/holy-week`, and `/resurrection-stations` only where editorially appropriate.
- Sitemap: include `/life-of-jesus` once through the existing sitemap source list after the page is publication-approved. It is a monthly evergreen page; do not add 280 URLs in v1.
- Robots/noindex and preview: local/preview behavior follows existing deployment policy. Do not add the route to production sitemap or make a deliberate indexing submission until Catholic/source/image-rights and owner publication gates are complete.
- Structured data: v1 may use `WebPage` plus breadcrumb data only if produced by existing helpers. Do not use `Event`, `HowTo`, `Article` authorship, or 280-event schema; chronological source records are not calendar events. FAQ schema is out of scope.
- Private URLs/parameters: none. Era fragments may use stable slugs such as `#nativity`; they contain no user data. Avoid query-driven state and duplicate crawlable URLs.
- Rendering/static/ISR/cache: static server-rendered data is required. Keep client code limited to optional navigation state. No runtime source fetch, external Bible API, or per-request rendering.
- Source metadata: exact range remains visible; reviewed USCCB chapter URLs remain internal for audit continuity but are not rendered as reader-facing links; each closed Douay–Rheims disclosure opens to complete local text with an eBible.org source link.

## Validation plan

- `npm run validate:urls`
- `npm run seo:preflight`
- production build/rendering audit
- inspect canonical, title, description, OG URL/image, breadcrumb, sitemap uniqueness, robots behavior, eBible.org source links, and absence of malformed/duplicate URLs
- validate any redirect with no loop; no IndexNow submission during QA

Unresolved publication dependencies: final rights-cleared OG/era images; qualified human Catholic/source approval; owner production authorization.

Next owner: Engineering for local implementation, then Site/SEO recheck of the integrated route.
