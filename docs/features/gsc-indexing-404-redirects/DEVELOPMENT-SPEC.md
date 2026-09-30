# DEVELOPMENT-SPEC — Search Console 404 redirect cleanup

## Identity and authorization

- Feature ID: `gsc-indexing-404-redirects`
- Spec revision/date: 1 / 2026-09-30
- Status: implemented-awaiting-human-review
- Owner: Brent Ramagost
- Implementation approval: Owner instruction “Review the google search console for improvements and implement” on 2026-09-30.
- Required review artifact: `REVIEWS.md` revision 1 (coordinator review; independence limitation disclosed).
- Release authorization: none. No commit, push, deployment, Search Console validation request, or sitemap submission is authorized by this specification.

## Goal and observed state

Reduce Search Console 404s for obsolete URLs that have a direct current equivalent, based on the 2026-09-30 review of property `sc-domain:dailyoratory.faith`.

GSC Pages report last updated 2026-09-20: 25 Not found (404), 14 Page with redirect, 4 Blocked by robots.txt, 2 Alternate page with proper canonical, 86 Crawled—currently not indexed, 291 Discovered—currently not indexed; 77 indexed. Canonical sitemap only: `https://dailyoratory.faith/sitemap.xml`, successful, last read 2026-09-29, 427 discovered pages. These counts are triage signals, not proof every excluded URL is erroneous.

## Existing behavior

- Next.js `redirects()` in `next.config.ts` adapts `legacyRedirects` from `src/data/redirects.ts`.
- Public prayer intentions now use `/prayer-intentions`; former request routes are not a source for individual prayer text.
- Saints and Library records are published from the current data model and use canonical slugs/paths.

## Implementation scope

Add exact, permanent redirects (Next.js emits HTTP 308 for `permanent: true`) for verified route replacements observed in GSC:

- `/ask-for-prayer/submit` → `/prayer-intentions/submit`
- `/ask-for-prayer/guidelines` → `/prayer-intentions/guidelines`
- `/ask-for-prayer/teams` and `/ask-for-prayer/admin` → `/prayer-intentions`
- `/community/prayer-rooms` and `/community/prayer-rooms/general-intercession` → `/prayer-intentions/wall`
- `/library/the-eucharist` → `/sacraments/eucharist`
- `/library/latin-rosary` → `/rosary/latin-rosary`
- `/library/eschatology` → `/formation/eschatology`
- `/library/events` → `/community/events`
- `/library/ordinary-time` → `/liturgical-living/seasons`
- `/prayers/novenas` → `/prayers`
- Former saint aliases for Clare, Catherine of Siena, Francis of Assisi, and Ignatius of Loyola → their existing published canonical profile slugs.

Do not redirect individual former prayer-request slugs, dated Mass Reading Reflection pages without a verified current match, or other retired pages to an unrelated generic destination. Do not alter pages, theological wording, sitemap/robots policies, analytics, GSC settings, or public content.

## Acceptance criteria

1. Each included old route is an exact, permanent redirect to a verified existing current route.
2. No redirects are created for individual prayer-request content or unverified dated reflection equivalents.
3. Redirect validation finds no malformed destinations, loops, or sitemap regressions.
4. Existing dirty changes remain intact; release actions are not performed.

## Verification

- `npm run validate:urls` — passed.
- `npm run seo:preflight` — passed, including all 13 priority routes.
- `npm run typecheck` — passed.
- `npm run build` — passed, including deployment source, client store, image, static build and rendering safeguards.
- Built `.next/routes-manifest.json` — confirmed all 16 redirect source/destination pairs and HTTP 308 status.

## Rollback

Revert only the exact entries added to `src/data/redirects.ts`; do not remove prior user changes.
