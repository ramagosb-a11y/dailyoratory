# Analytics test maintenance — development specification

Revision r1, 2026-11-01. Owner said “Approved” immediately after the project-status report recommended fixing the analytics test-runner and sitemap-policy mismatch as a focused maintenance change. This authorizes local implementation and verification, not a new production release.

## Evidence and decision

The standard test:analytics-privacy command fails before assertions because native Node cannot resolve extensionless imports through sitemapEligibility.ts → redirects.ts → rosaryMysteries.ts. Application bundling resolves those imports correctly; avoid changing production imports or broad TypeScript/package module settings just to accommodate the runner.

Commit 6088b0148086adfa9063249f64c7072e51dab939 (2026-10-03) intentionally enabled public indexing in retreat/reflection metadata and removed both paths from sitemap exclusions. Existing test expectations were stale. Later canonicalization also retires /rosary and /library/catechism; they must not be positive sitemap fixtures.

## Approved implementation scope

- Add a test-only Node resolve hook, explicitly loaded only by the analytics test command. Normal resolution runs first. On module-not-found only, relative extensionless imports originating inside project src/ may resolve an existing neighboring .ts source. Preserve other resolution/errors and prohibit fallback outside src/.
- Correct fixtures for published public retreat/reflection pages and canonical destinations. Add regressions proving public indexability and sensitive path-only analytics can coexist, and retired aliases stay excluded.
- Preserve all existing privacy assertions. No changes to application helpers, sitemap, redirects, route metadata, analytics behavior, public copy, dependencies, tsconfig or lockfile.

## Review and acceptance

Lead handles scope and engineering. Site/SEO review derives from actual metadata, redirect registry and history; Privacy review preserves sensitive-path checks and all existing sanitization tests. No theological content, images, new collection, runtime service or automation is involved. Independent read-only code review requested from readings_button_review.

Acceptance: standard npm run test:analytics-privacy passes without temporary output files or NODE_OPTIONS; wrong/retired sitemap assumptions replaced with current policy; lint/typecheck/build and URL/SEO checks appropriate to scope pass; actual generated sitemap retains public routes and excludes retired aliases. Output artifacts and existing local work remain preserved. Stop at local verified diff, no commit/push/deploy.
