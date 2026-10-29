# New-page search discovery — revision 1

Date: October 29, 2026. Owner instruction: "Review new pages and help the google seacrh console, setup anything that can improve the site results. it is open in edge". This authorizes the review, appropriate Search Console submissions and local technical SEO improvements. After the completed revision 1 review and explicit production-release follow-up, the owner replied "approved" on October 29, authorizing this reviewed fix to main/production and the subsequent /strongholds indexing request. No authority is reused from the October 3 release.

## Goal and bounded implementation

Make the already-public /strongholds overview eligible for Google indexing and sitemap discovery. Remove its inherited draft noindex flag and allow only that exact overview through sitemapEligibility. All /strongholds/* subroutes keep their existing noindex and sitemap exclusion, including private My Journey and guided exercises. Preserve the public title, description, canonical, imagery, prayer text, source disclosures, storage and analytics protection. Use existing primaryNavigation inclusion and daily sitemap ISR; no new crawling job or dependency.

Baseline: canonical repository at c9a78fb, tracked source clean; numerous unrelated untracked output/image/script artifacts must be preserved. Reviewed SOURCE_OF_TRUTH, AGENTS, role/feature workflow, current metadata helper and bundled Next generate-metadata docs. Strongholds publication flag is true and it is linked in navigation; historical release records intentionally retained noindex from draft. Current SEO instruction authorizes preparing this exact public-overview discovery correction locally; it does not attest theological approval or authorize publishing changed devotional text.

Acceptance: /strongholds emits index/follow with unchanged canonical; /strongholds is in generated sitemap; every Strongholds subroute remains noindex and excluded; Armor of God and music remain indexable and in sitemap; no changes to personal data flows or approved copy. Verify focused lint, typecheck, Strongholds tests, analytics privacy tests, URL/SEO preflight, build/guards, generated HTML/XML, and local HTTP routes. Self-review is not independent human approval. Rollback only the overview metadata flag and sitemap eligibility conditional.

## Selected reviews

- Lead / Engineering / Site-SEO: bounded metadata/sitemap fix, using existing routes and navigation. No new schema claims or promises of rank improvement.
- Privacy: only static overview indexing changes. Private records are local and never server-rendered; keep all descendants excluded and sensitive analytics path handling unchanged.
- Vercel efficiency: metadata only, existing static page and daily sitemap ISR retained; no extra calls, functions, cache policy or paid resources. Dashboard usage not inspected.
- Theology / Formation / UX / Automation: no new text, doctrine, interactions, scheduled work or jobs, so no new review of those areas is represented. Prior source-review limitations remain unchanged.
- Human release review: owner approved this reviewed revision on October 29; release only its two code files and feature documentation, preserving unrelated local artifacts.

## Search Console review baseline

Domain property dailyoratory.faith is already available. Sitemap reports Success, last read October 27, 446 discovered pages; the current public XML contains 460 entries including /armor-of-god and /music. Robots allows crawling and points to the correct canonical sitemap. Indexing report is dated October 22: 63 indexed, 446 excluded (25 404, 14 redirect, 4 robots blocked, 2 alternate canonical, 104 crawled-not-indexed, 297 discovered-not-indexed). These aggregate figures lag new releases and do not establish that all exclusions are errors.

Live HTTP inspection: Armor of God, music, Holy Week, Reading and Reflections, and Examination Companion return 200 with self-canonical metadata and index/follow; /strongholds alone emits noindex and is absent from sitemap. Existing public theological copy is not rewritten for keywords.

Google URL Inspection: Armor of God unknown to the index; live test passes with one valid breadcrumb item. First indexing submission failed on reCAPTCHA connectivity; reload and retry succeeded with "Indexing requested" priority-queue confirmation. No CAPTCHA was solved. Additional Search Console results and local verification are recorded in IMPLEMENTATION-REPORT.

Sources: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap. Requests do not guarantee indexing; avoid duplicate submissions of unchanged URLs.
