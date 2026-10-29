# Search Console and new-page discovery report

October 29, 2026; spec revision 1. Search Console actions completed; technical correction reviewed and approved for main/production by the owner's "approved" response to the release handoff.

## Completed in Google Search Console

- /armor-of-god: index status unknown to Google. Live test returned URL is available to Google, page can be indexed, one valid breadcrumb. First request encountered a reCAPTCHA connection error; ordinary reload/retry succeeded, with Indexing requested and priority crawl queue confirmation. No CAPTCHA challenge was completed by the agent.
- /music: index status unknown to Google. Request succeeded with Indexing requested and priority crawl queue confirmation.
- https://dailyoratory.faith/sitemap.xml: submitted the changed current sitemap once; Google confirmed Sitemap submitted successfully. This follows new additions since its October 27 read, rather than repeated submissions of an unchanged file.
- Manual actions and Security issues: both report No issues detected.
- Robots-blocked examples are old /search?q=Saints, /search?category=Reflect, /saints?patronage=families and /saints?category=mystics (last crawled May 21–23). No request to index filter/search combinations and no unsupported Validate Fix claim.
- No access, billing, verification, GA associations, credentials, domains or paid services changed. No automated submissions or scheduled monitors added.

Confirmation screenshots are local QA evidence in output/gsc-armor-indexing-requested.png, output/gsc-music-indexing-requested.png and output/gsc-sitemap-submitted-oct29.png.

## Search evidence and reviewed pages

Performance July 28–October 27: 77 clicks, 3.99K impressions, 1.9% CTR, average position 28.5; last update 4.5 hours before review. Earlier October 3 report covered June 30–September 29 and showed 17 clicks, 1.81K impressions, 0.9%, position 56.4. These are overlapping moving windows, not a controlled attribution of gains to the prior release.

Live HTTP metadata/sitemap review passed for Armor of God, music, Holy Week, Reading and Reflections, and Examination Companion: HTTP 200, index/follow and self-canonical metadata. Public XML contains 460 URLs; robots allows crawling and declares the canonical sitemap. Strongholds is public and navigable but still noindex and omitted, inherited from its draft stage.

## Local technical correction

- src/app/strongholds/page.tsx: remove only the public overview's noIndex flag; preserve all visible copy, title, description and canonical.
- src/lib/sitemapEligibility.ts: allow exact /strongholds through existing navigation-based sitemap generation, retaining the blanket exclusion for /strongholds/* guided/private subpages.
- No editorial, schema, UI, analytics, storage, image, dependency or rendering policy changes. Prior source-review limitations are not represented as resolved. Unrelated untracked output, images and scripts preserved.

## Validation

- Focused ESLint on both edited source files: passed.
- Typecheck: passed.
- Strongholds tests: 22/22 passed.
- SEO preflight / URL validation: passed.
- Production build: passed, 662 pages, including source, client-store, image and rendering safeguards.
- Generated HTML/XML assertions: 461 sitemap URLs; /strongholds, /armor-of-god and /music present; no /strongholds/* URL; overview index/follow; all six descendants noindex/follow. Main canonical signal unchanged.
- Local production server http://127.0.0.1:3109: overview, My Journey, journey and sitemap return 200; HTTP metadata confirms overview index/follow and private/guided pages noindex/follow. A first sandbox-bound server on 3108 could not be reached from the elevated HTTP check; the loopback-only server with matching network permissions resolved the environment issue.
- Full lint: 56 errors / 41 warnings outside the edited files (output/gsc-oct29-lint.log). Focused lint passes; no guard weakened.
- Standard analytics-privacy script has a pre-existing Node extensionless-import resolution failure. With the existing local QA resolver, all four analytics/privacy cases pass; the fifth, pre-existing sitemap assertion incorrectly expects /fasting-retreat to be excluded even though current baseline intentionally includes it. Neither failure is introduced by the /strongholds condition change; stale expectations were not altered to hide the failure.
- git diff --check and coordinator diff review: passed. Review is self-review, not independent approval.

## Release boundary and next action

Owner approved this reviewed revision and the production-release/indexing follow-up on October 29. Release through Git main only; no preview deployment. Baseline main c9a78fbbb933ed2dcadd3c2ca0b8c646aac2fe9b matched freshly fetched origin/main. Prior production rollback candidate: dpl_EUCEUaEA4dqLeZJpPc3WtLhAsnne. Use the already-passed exact-source production build and checks documented above; repeat focused release checks and inspect the staged diff. After release, recheck the live /strongholds robots metadata and sitemap, then request indexing for that overview. Do not request it while live metadata remains noindex. Google decides whether and when to index the accepted URLs; submissions do not guarantee rankings or immediate inclusion. Final deployment and submission results are reported in the release handoff.
