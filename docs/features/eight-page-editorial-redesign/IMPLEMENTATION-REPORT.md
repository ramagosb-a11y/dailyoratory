# IMPLEMENTATION REPORT — eight-page editorial redesign

Feature: eight-page-editorial-redesign. Revision redesign-r1, 2026-11-01. Status: **implemented-awaiting-human-review**. Owner explicitly requested implementation of the complete plan. No commit, push, external publication or deployment performed.

## Result

All eight requested canonical pages now use photo-led editorial composition in the existing Vatican visual language. Navy/ivory/gold, serif headings, clear actions, relevant supporting photographs and compact secondary guidance replace repeated promotional cards and long undifferentiated stacks.

- Learn is a deliberate gateway with six learning destinations and a retained complete category-resource directory.
- Pray prioritizes actual prayer and the need/rhythm tools; all 16 original prayers remain available, seasonal Marian prayer remains available, and deeper explanations are optional.
- Formation puts its pathway selector first, keeps all original topic/virtue/practice data and optional plans, and consolidates featured promotions.
- Catechism brings its topic finder forward, preserves the four pillars, practical study plan and official resources.
- News becomes a concise directory of official sources, independent reporting and commentary; the future-headlines placeholder is removed.
- Indulgences keeps essential conditions and practical tools visible; historical Jubilee 2025 is separated from dated Francis guidance and source corrections are documented.
- Sacraments presents all seven in grouped photographic cards before preparation guidance. Journey controls expose their selected state.
- Holy Orders uses its own layout, preserves the existing content data, vocation boundary, companion and prayer attribution, and shows an authentic episcopal-consecration photograph.

Code changes and editorial changes are distinguished in CONTENT.md and UX-IMPLEMENTATION.md. Shared SectionPage and SacramentDetailPageView are unchanged. Unrelated pre-existing output artifacts were preserved.

## Local review URLs

The verified production build is running on loopback port 3022:

- http://127.0.0.1:3022/learn
- http://127.0.0.1:3022/pray
- http://127.0.0.1:3022/formation
- http://127.0.0.1:3022/catechism
- http://127.0.0.1:3022/news
- http://127.0.0.1:3022/indulgences
- http://127.0.0.1:3022/sacraments
- http://127.0.0.1:3022/sacraments/holy-orders

The existing development server on 3014 was reused for the initial pass and was not stopped or replaced. For future fresh review, run npm run start -- --hostname 127.0.0.1 --port 3022 after npm run build.

## Checks and evidence

| Check | Result |
| --- | --- |
| npm run lint | Passed after integration corrections; final rerun recorded below if applicable. |
| npm run typecheck | Passed. Final production build also completed its TypeScript check. |
| npm run build | Passed, including source guard, client-store audit, images:check and rendering strategy postbuild audit. Final log output/editorial-build-final.log. |
| npm run validate:urls | Passed. |
| npm run seo:preflight | Passed, including 13/13 priority routes. |
| node --experimental-strip-types --test src/components/indulgences/planStorage.test.mjs | 3/3 passed. Valid shape/unknown stripping, malformed/incomplete JSON, enum/type/date/length validation. |
| Responsive browser tests against final production build | All 8 routes at 1440, 768, 390 and 320px, plus 200% root text at 640px: no page overflow. One H1/main landmark, canonical, local fragment targets and hero focus checked. No runtime errors or missing local assets. |
| Interaction scenarios against final production build | 9 scenario groups passed: Catechism selection/copy/denial/reset; Formation selection/copy/reset; prayer need/rhythm/copy/print; native disclosure deep links; indulgence save/reload/copy/denial/print/clear/reload; corrupt storage; expired-grant recovery; seven sacrament cards and journey control; denied storage. |
| Privacy synthetic-marker check | No intention marker in captured request URLs or bodies; all external browser requests blocked during QA. Print/clipboard APIs mocked to prevent actual exports during these tests. |
| Keyboard and unaffected-page smoke | Native summary opens/closes with Enter. /reflect, /sacraments/matrimony and /vatican return 200; six retained destination samples also return 200. |
| git diff --check | Passed (Git reports expected line-ending normalization warnings only). |

Reproducible browser scripts: scripts/check-editorial-redesign.cjs and scripts/check-editorial-interactions.cjs. Set EDITORIAL_BASE_URL to http://127.0.0.1:3022 (default points to existing development server 3014). These follow the repository's existing machine-local Playwright/Edge convention.

Screenshots: output/playwright/editorial-before/ contains the 16 original production full-page captures; output/playwright/editorial-after/ contains 32 final full-page/hero captures plus report.json, interactions.json and smoke.json. All capture examples use default or synthetic state, never real spiritual information. Image crops, overlays and representative full-page compositions were visually inspected. This is targeted browser/accessibility QA, not a complete assistive-technology certification.

## Photography and performance

13 documented local photographs, creator/source/license links and resized/cropped notices. All original source sizes total 113,631,317 bytes; final WebP files total 4,320,844 bytes: 109,310,473 bytes saved, **96.2% smaller than source originals**. This comparison concerns selected source assets, not existing deployed storage or a guarantee about network transfer/hosting usage. Full provenance is in PHOTOGRAPHY.md and public/images/editorial/provenance.json.

Existing static/ISR rendering preserved; Pray and Indulgences retain daily revalidation and rendering guard coverage. No new dependency, image CDN, database, API, feed, remote personalized rendering or automation was introduced. Vercel usage dashboard was not inspected, so continued free-tier capacity is not claimed.

## Baseline analytics test limitation

The standard npm run test:analytics-privacy command fails before assertions because existing src/lib/sitemapEligibility.ts imports ../data/redirects without a .ts extension, which the native Node test runner cannot resolve. Neither file was changed by this feature.

A test-only loader in output/editorial-test-loader.mjs resolves the extensionless TypeScript import without changing application code. With it, all four privacy-specific tests pass. The fifth existing sitemap test fails because it expects /fasting-retreat to be excluded, while current eligibility returns true. This is unrelated to the eight redesigned routes and is left visible rather than changing sitemap policy during a presentation task.

Reproduction:

    node --experimental-strip-types --import ./output/editorial-test-loader.mjs --test src/lib/analyticsPrivacy.test.mjs

Focused privacy checks:

    node --experimental-strip-types --import ./output/editorial-test-loader.mjs --test --test-name-pattern="page tracking|personal spiritual|campaign attribution|event fields" src/lib/analyticsPrivacy.test.mjs

## Review status and remaining human checks

See REVIEWS.md and THEOLOGY-REVIEW.md. Independent initial UX/platform reviews and a partial independent exact-source review were delivered. Agents reached a usage limit before final integrated independent sign-off. The coordinator's final code/content review is explicitly self-review. No final reviewer signatures or ecclesial approval have been invented.

For owner review: compare the photo crops and compact layouts, try the retained tools, inspect the dated indulgence/source changes, and confirm the content disposition. Final independent editorial/theological and integrated code review remain outstanding before publication. Production remains separately authorized only; no release action has been taken.
