# Analytics test maintenance — implementation report

2026-11-01. Completed locally against released main commit 0311602ec9fca7441d1e6260b34df017be1446ad. No commit, push or deployment was made for this maintenance change.

## Changes

- package.json loads a dedicated test resolver for test:analytics-privacy.
- scripts/register-typescript-test-resolver.mjs permits narrowly scoped native Node resolution of existing extensionless TypeScript imports within src/ after normal resolution fails.
- src/lib/analyticsPrivacy.test.mjs corrects stale sitemap fixtures, uses current canonical destinations and adds explicit coverage for sensitive analytics on public indexable pages and exclusion of retired aliases.

Application code, route metadata, sitemap policy, redirects, analytics behavior, dependencies and lockfile are unchanged. Existing output artifacts are preserved.

## Verification

| Check | Result |
| --- | --- |
| Standard npm run test:analytics-privacy | 7/7 passed, without temporary loader or NODE_OPTIONS |
| npm run lint | Passed |
| npm run typecheck | Passed |
| npm run build, including rendering strategy audit | Passed |
| npm run validate:urls | Passed |
| npm run seo:preflight | Passed; 13/13 priority routes |
| Fresh generated sitemap | Four canonical inclusions and four exclusions verified; see REVIEWS.md |
| git diff --check | Passed |
| Independent code review | Ready; no blocking findings |

Build diagnostics are retained in output/analytics-test-maintenance-build.log. Existing Node MODULE_TYPELESS_PACKAGE_JSON warnings remain nonblocking; broad module configuration changes are outside this focused repair. No visual comparison was needed because the change affects only test execution and expectations.

The previously released redesign remains the production release. This maintenance packet is ready for review as a local diff.

## Subsequent release authorization

After the local report, the owner explicitly requested: “Commit deploy to main and production.” The reviewed maintenance files and this feature packet are authorized for a Git-integrated main/production release, without a preview deployment. Remote main matched the validated base before staging. Analytics tests (7/7) and the client-store audit passed again at release time; the completed build, lint, typecheck, URL and SEO results above apply to the unchanged implementation. Previous production rollback candidate: dpl_7cGexiFj7ePeeCTgAkBQbpH82u5w at commit 0311602ec9fca7441d1e6260b34df017be1446ad. Final deployment evidence is reported separately after readiness and smoke checks.
