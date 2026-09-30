# Bing Webmaster SEO Review

## Review scope

Reviewed the authenticated `dailyoratory.faith` property in Bing Webmaster Tools on 2026-09-30. This work changes repository files only; it does not change Bing settings or submit/index URLs.

## Report findings

- Search Performance (three months, ending 2026-09-28): 798 clicks, 45.7K impressions, 1.75% average CTR.
- Strong topics include live/perpetual Eucharistic Adoration and Catholic homilies. The `/adoration` result received 6.4K impressions, 31 clicks, 0.49% CTR, average position 6.94; `/adoration/live` received 10.8K impressions, 166 clicks, 1.54% CTR, average position 5.23. `/homilies` received 1.9K impressions, 53 clicks, 2.80% CTR, average position 7.47.
- Bing SEO recommendations listed 3 pages without an H1, 1 page with multiple H1s, 39 overly long titles, 112 short descriptions, 2 pages with `noindex`, and 1 missing image alt attribute.
- Missing H1 examples were `/liturgical-living/calendar`, `/prayers/litanies`, and `/reflections/mass-readings/upcoming`. The duplicate H1 report named `/adoration`.
- The `noindex` examples were `/fasting-retreat` and `/rosary/visual-meditation`, both deliberately noindex in source. They remain excluded from search.
- Bing lists one known sitemap, `https://dailyoratory.faith/sitemap.xml`, successful, last submitted/crawled 2026-09-28, with 427 URLs discovered and no sitemap warnings or errors.

## Changes

- Added an `as` option to the shared `SectionHeader`, then used a page-level H1 on the calendar and upcoming Mass readings pages.
- Promoted the litanies landing page's main heading to H1.
- Made the embedded Adoration quiet-room heading H2 when it appears below the Adoration page's own H1. Standalone chapel pages keep their H1.
- Shortened the `/adoration` title to `Live Eucharistic Adoration and Prayer` while retaining its core search topic.

## Deferred findings

- Did not remove the two `noindex` directives because these are intentional routes, not indexable editorial pages.
- Did not expand 112 descriptions mechanically. Each description should be improved with route-specific information; generic padding could make search snippets less useful.
- Did not bulk rewrite all 39 reported titles because the report's sampled URL list was not audited against each route's intent in this scoped pass. The high-impression `/adoration` title was addressed first.
- Did not claim or modify high-quality backlinks. Bing's backlink suggestion is not an implementation task in the repository.
- The single missing ALT finding was not changed without a verified URL/asset match.

## Verification

- `npm run validate:urls` passed.
- `npm run seo:preflight` passed (13/13 priority routes).
- `npm run typecheck` passed.
- `npm run build` did not complete: Turbopack could not resolve the `next/font/google` internal font module for existing Google font imports in `src/app/layout.tsx`. This is unrelated to the edited routes; a complete build remains unverified.

## Release status

Changes are local and not committed, pushed, or deployed. Bing will need a later crawl to refresh its SEO recommendations after release.
