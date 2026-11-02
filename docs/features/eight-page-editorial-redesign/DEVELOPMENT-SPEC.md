# DEVELOPMENT-SPEC — Eight-page editorial redesign

## Identity and authorization
- Feature: eight-page-editorial-redesign; revision redesign-r1; date 2026-11-01.
- Owner instruction: “PLEASE IMPLEMENT THIS PLAN” followed by the complete eight-page editorial redesign specification in this chat.
- Status: implemented-awaiting-human-review. Production authorization: **not authorized**.
- Contract: implement the supplied plan for /learn, /pray, /formation, /catechism, /news, /indulgences, /sacraments and /sacraments/holy-orders. The duplicated Holy Orders URL denotes one page.
- Related artifacts: IDEA.md, UX-IMPLEMENTATION.md, CONTENT.md, PHOTOGRAPHY.md, REVIEWS.md and IMPLEMENTATION-REPORT.md (produced during implementation/review).

## Implementation and content contract
Use Vatican editorial language, concise photo-led heroes, two actions maximum, meaningful supporting imagery and compact secondary guidance. Preserve tools, useful destinations and all essential teaching qualifications. Reuse existing data and component contracts. Isolate Learn and Holy Orders from shared page renderers. No global redesign of unrelated routes.

Existing doctrinal/devotional wording remains unchanged except recorded, source-reviewed corrections to dated indulgence grants. All seven sacraments, Church-guided vocation discernment, Scripture/CCC references and prayer attribution remain available. Maintain a disposition record for consolidated blocks. News remains a directory; remove its future-headlines placeholder.

Use authentic licensed/documented photographs, local optimized assets, explicit responsive image sizes, reserved dimensions, one preloaded hero and lazy supporting images. Preserve static/ISR patterns and cache safeguards. No new dependency, service, API, CMS, database, feed or automation.

Preserve on-device plan storage and intentional copy/print/clear. No sensitive analytics parameters. Keep canonical paths, metadata, internal links, useful anchor targets and structured data consistent. Native secondary disclosures must remain keyboard accessible; primary tools remain visible. Existing empty/failure/reset/return states must continue working.

## Acceptance criteria
| ID | Required behavior | Verification |
| --- | --- | --- |
| AC-1 | All eight canonical pages redesigned; title/purpose/actions precede long teaching | Browser desktop/mobile; heading and action checks |
| AC-2 | Distinct relevant optimized photographs with rights/credits | Asset ledger, image checks and rendered crop review |
| AC-3 | Seven sacraments and all retained tools/source links accessible | Browser links and interaction scenarios |
| AC-4 | Repetition consolidated; placeholders removed; essential qualifications retained | Content disposition and independent review |
| AC-5 | Historical 2025 grant separated; Francis correction matches official decree | Exact copy diff and independent source review |
| AC-6 | No private intention/selection data in telemetry or URLs; saved plans survive | Analytics privacy tests and synthetic browser tests |
| AC-7 | No overflow at 320/390/desktop, readable overlays, keyboard focus, reduced motion | Screenshots and browser checks, 200% text/zoom |
| AC-8 | Rendering, SEO and image guards pass; no hydration/console regressions | lint, typecheck, build, validate:urls, seo:preflight, images:check, test:analytics-privacy; storage checks if touched |

## Integration and handoff
One integration owner; bounded file ownership for agents. Obtain independent review of actual content and integrated code. Resolve findings, document checks and limitations, capture before/after screenshots, and deliver local review URLs. Do not push, commit, publish, deploy, submit IndexNow or sync external content. Reversal is removal/reversion of this feature's focused diff only, preserving other work.
