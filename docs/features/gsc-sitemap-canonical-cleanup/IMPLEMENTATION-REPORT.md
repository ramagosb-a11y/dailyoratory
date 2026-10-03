# Implementation report

October 3, 2026; revision 1; implemented and authorized for release to main and production by the owner's instruction: "Commit, deploy to production and main, not to preview".

Code changes: sitemapEligibility excludes exact implemented permanent redirect sources using the existing registry plus the next.config /reflections rule. Sitemap omits fabricated regeneration dates for undated static/devotion pages and rejects invalid dates. Valid content update dates and daily ISR remain intact. Editorial changes: none.

Verification:

- npm run typecheck: passed.
- npm run seo:preflight (URL validation and priority pages): passed.
- npx eslint src/app/sitemap.ts src/lib/sitemapEligibility.ts: passed.
- npm run build: passed, including source, client-store, image and rendering audits; 627 static pages generated.
- Generated .next/server/app/sitemap.xml.body compared with .next/routes-manifest.json: 430 entries, zero exact redirect sources, home/homilies/adoration/reflection hubs present without fabricated lastmod; sampled personal/noindex paths absent; 221 dated entries preserved.
- git diff --check: passed. Coordinator diff review: passed; not independent.
- npm run lint: fails with 43 errors and 36 warnings in untouched repository files, including existing CommonJS script import rules. Edited files pass targeted lint. No guard was weakened.

Search Console was reviewed through the existing authenticated browser. No sitemap submission, validation request or property setting was changed. The sitemap already reports Success and was read October 3; no redundant resubmission needed. Historical 404 classifications do not establish that prior committed redirects still fail today.

Review limits: direct production HTTP inspection from the shell was blocked by network restrictions during implementation, so production redirect behavior was not verified at that stage. Browser UI checks for the application were not required because no visible UI changed; build-generated XML was inspected directly. Rankings and indexing improvements remain unmeasured until release and recrawl. Release results are reported separately after the authorized push and production verification.

Owner validation after an authorized release: inspect /sitemap.xml for canonical-only entries and absent fabricated dates; use Search Console URL Inspection on /homilies, /reflections/mass-readings and /adoration; reassess indexing after recrawl rather than treating expected redirects/canonical exclusions as errors. Prioritize /relics (174 impressions, zero clicks) and /catechism (106, zero) for a separate content/title review supported by query and position data.
