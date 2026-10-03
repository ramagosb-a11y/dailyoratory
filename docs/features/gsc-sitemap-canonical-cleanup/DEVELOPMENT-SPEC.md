# Search Console sitemap cleanup

Revision 1, October 3, 2026. Implementation authorized by the owner's instruction: "Review google search console and improve". Scope: technical sitemap improvements discovered in the review. Production authorization: owner instructed "Commit, deploy to production and main, not to preview" on October 3, 2026, after reviewing the readiness report. Status: approved-for-production-release.

## Contract

Use the existing sitemap eligibility helper and permanent redirect registry to exclude exact retired redirect sources. Preserve destination URLs, existing noindex exclusions, approved content, metadata and daily sitemap ISR. Omit lastModified for static routes and devotions without a trustworthy content update field; preserve dated published records and omit invalid dates. No dependencies, new routes, tracking, account changes or editorial changes.

Acceptance: exact implemented redirect sources are excluded; active canonical destinations remain eligible; existing personal/noindex paths stay excluded; undated entries do not claim today's timestamp; valid record update dates survive. Run focused eligibility assertions, lint, typecheck, URL/SEO preflight and build; inspect generated sitemap and redirect manifest together.

Inspected: SOURCE_OF_TRUTH.md, AGENTS.md, docs/agents and feature workflow, bundled Next sitemap reference, src/app/sitemap.ts, src/lib/sitemapEligibility.ts, src/data/redirects.ts, next.config.ts, robots.ts and brand/URL helpers. Rollback: revert this feature's two code files only.

## Reviews and stage selection

Lead / Engineering / Site-SEO: ready for this bounded technical fix. Google recommends canonical sitemap URLs and meaningful modification dates: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap and https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom.

Vercel efficiency: retain existing 86400-second ISR and content loading; no request-time file scans or extra network calls. Redirect source set is built from existing bundled data. Dashboard usage not inspected; no plan or settings changes.

Catholic content, UX, privacy and automation stages: not applicable because public copy, UI, personal data flows and jobs are unchanged. Coordinator review is self-review; human review remains pending.

## Search Console evidence

Reviewed authenticated dailyoratory.faith domain property October 3. Three-month performance chart June 30–September 29: 17 clicks, 1.81K impressions, 0.9% CTR, average position 56.4. Visible queries include catholic homilies (1 click / 33 impressions), daily gospel reflections (1 / 6), homilies (0 / 33) and perpetual eucharistic adoration (0 / 20). Query table does not expose every click.

Indexing last updated September 20: 77 indexed, 422 excluded: 25 not found, 14 redirects, 4 robots-blocked, 2 alternate canonical, 86 crawled-not-indexed, 291 discovered-not-indexed (validation passed). These are historical classifications, not proof of current defects.

Sitemap https://dailyoratory.faith/sitemap.xml: submitted September 28, read October 3, Success, 430 discovered pages. Historical indexing dropdown still lists the www sitemap. No duplicate submission is needed.

Earlier gsc-indexing-404-redirects packet reports 16 exact fixes; they are now present in the clean repository at baseline commit 906ad6a. Do not duplicate those rules. Remaining dated reflections and individual prayer-request URLs need verified replacements; preserve legitimate 404s rather than invent destinations. Production behavior of those prior rules was not independently verified in this review.

Priority after release: check canonical homilies and Gospel reflection pages in URL Inspection, improve discovery around pages with actual impressions, and reassess after Google recrawls. Redirect and alternate-canonical exclusions can be expected; excluded count alone is not a success metric.
