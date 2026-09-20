# Implementation report

## Current delivery — approved Tradition guide

2026-09-20. Owner approved proposal r4 and instructed continue. IMPLEMENTATION-SPEC-R2.md implemented locally. The prior cleanup report below is historical; the full guide now replaces the hero/resources-only state.

Delivered five original lessons (about 2,000 body words) under Meaning, Transmission and Continuity. Exact copy is in src/data/traditionGuide.ts. Includes a documented Nicene Creed example distinguishing 325/381, definition of consubstantial, a semantic transmission diagram, a specifically attributed OCA perspective, seven source references, and Church Fathers/Councils continuation links. No devotional detours or copied prayers. The first lesson is visible and four later readings expand independently through native controls. Compact references replace the large resource grid.

Approved r4 hero copy and Bible visual language are implemented. Static /tradition route and canonical preserved; metadata updated. Independent exact-content and component review completed after the two required theological corrections; see CONTENT-REVIEW.md. No remaining blocking review findings. Source research and AI review do not constitute ecclesial endorsement.

Validation after final application edits:

- Build passed, including prebuild client-store/image guards and postbuild rendering audit; /tradition remains static.
- Typecheck passed. Scoped lint passed for route, hero, guide and data. Full repository lint remains at the same 43 errors/36 warnings in unrelated existing files; full output in output/playwright/tradition-guide-lint.txt.
- URL validation and SEO preflight passed. Citation detector passed as a detector; its §4 inference as Catechism is a false classification of the explicitly labeled International Theological Commission reference, whose actual source was independently verified. Output in tradition-guide-citations.txt.
- Edge browser acceptance passed at 1440px, 390px, and 720px (reflow equivalent of a 1440px viewport at 200%). Five lessons; visible first lesson; five valid fragment targets; correct canonical; no horizontal overflow before/after expansion; source list has seven entries.
- Native readings open with Enter, close with Space, remain independent, and show a visible 2px focus outline. Tab moves from the reference disclosure to its first source. With JavaScript disabled at 390px, all these core reading interactions still pass. No pageerror events.
- A first QA run had a test-harness selector-index issue as a collection shrank during iteration; corrected the harness to iterate stable details elements. Final run passed; no application fix was needed.
- Visual inspection: full desktop page, mobile/desktop hero and mobile transmission diagram. Evidence: output/playwright/tradition-guide-{390,1440}.png, tradition-guide-top-{390,1440}.png, tradition-diagram-{390,1440}.png, tradition-guide-browser.json. Reproducible local acceptance script: output/playwright/verify-tradition-guide.mjs (uses existing bundled Playwright/Edge).
- git diff --check passed. No full screen-reader audit or actual browser-zoom gesture test; equivalent-width reflow was checked. No claim of live production comparison, which remained network-restricted.

Local server: http://127.0.0.1:3217/tradition . Homepage button changes from prior work remain at http://127.0.0.1:3217/ . Owner review: inspect the opening, follow Explore an example, expand two lessons, and read the Creed and authority explanations. No commit, push, deploy, or external content publication performed.

## Visual polish — revision 3

Delivered a sleeker treatment for the Tradition lesson controls and homepage Growth cards. Native “Read the full lesson” summaries are now navy, text-only controls with 48px targets, an inverted open state, mobile full width and the existing visible focus style. The controls retain their native keyboard/no-JavaScript behavior; no app-style or iPhone-style icons were added.

The four Grow in the Faith cards now use generated 16:9 editorial illustrations and the same image-led composition as Featured Content. Their navigational links look like prominent navy buttons while remaining semantic links. Each card has aligned card bodies and actions across desktop, two-column and mobile layouts. The Church Fathers artwork is labeled as an illustration of generic early Christian teachers, not a named historical portrait.

Image optimization: final assets are WebP, 1672×941, sharp quality 85 / effort 6. Four generated PNGs totalled 9,070,802 bytes; the referenced WebPs total 824,962 bytes, saving 8,245,840 bytes (90.9%) versus deploying originals. Original PNGs remain outside the repository. `.vercelignore` now excludes output/playwright so local visual evidence is not uploaded to Vercel. See IMAGE-PROVENANCE.md and output/playwright/grow-faith-image-sizes.json.

Validation: build passed with image/client-store/rendering guards; typecheck, URL validation and scoped visual component lint passed. Independent visual/component review found no blocker. Browser checks at 1440px and 390px passed: four images loaded through next/image as WebP at quality 85 with no 404, four CTA buttons measured at least 48px, no horizontal overflow, styled native lesson controls toggled with keyboard, and focus remained a solid 2px outline. Visual inspection passed for Grow cards desktop/mobile and Tradition mobile. Evidence: output/playwright/grow-faith-{1440,390}.png, tradition-polish-{1440,390}.png and visual-polish-browser.json. Full repository lint baseline remains 43 errors/36 warnings in unrelated existing files. No deploy, push, commit or external publication.

## Historical delivery — initial cleanup

The following records the initial local cleanup before approval of the full guide.

## Delivered

- Removed 21 standalone screenshot-selected sections from /tradition and the Note within its hero (22 selections total). The removed Holy Spirit section includes its prayer; Related Tools and Daily Life are separate removals from one screenshot. Hero and unselected Official and Study Resources remain. Old source components/data remain unmounted for reference/reversal.
- Tradition shell follows the Bible's established navy/gold rounded hero and background treatment. Retained theological copy is unchanged. Fixed dead hero anchors to source library, /bible and /church-fathers; shortened metadata description to reflect remaining content.
- Morning Prayer now matches all four transparent outline prayer links.
- Daily readings, Daily Scripture reflections and saint action use one button geometry and seasonal primary palette. Saint visible name is exactly Learn About Today's Saint. Its existing target/rel intent now uses TrackedLink's proper external branch. Destinations/event payloads unchanged.
- PROPOSAL.md contains a revised four-area structure, exact opening/orientation/closing drafts, five substantive chapter outlines, intended 1,500–2,000-word depth, interaction behavior and source mapping. REVIEWS.md records three actual refinement passes and independent review. Full replacement chapter copy is not written or implemented; owner selection of this proposed direction is the next editorial step.

## Verification

| Check | Result |
| --- | --- |
| npm run build | Passed, including prebuild client-store/image guards and postbuild rendering audit; /tradition static |
| npm run typecheck | Passed |
| ESLint on all seven touched/new runtime files | Passed |
| npm run lint | Failed: 43 errors and 36 warnings in existing unrelated files; no touched-file lint failures. Did not alter unrelated scripts/components to silence these. |
| npm run validate:urls | Passed |
| npm run seo:preflight | Passed |
| git diff --check | Passed after EOF whitespace cleanup |
| Edge/Playwright 390px and 1440px | Passed: /tradition HTTP 200; only retained sources h2; no classifier/select or removed notes; source fragment exists; no page overflow |
| Homepage browser assertions | All five prayer links share classes and transparent computed backgrounds; three Today links share color/background/radius/min-height, measured 50px tall at both widths; saint target _blank and noopener preserved |
| Focus and console | Saint focus has visible 2px solid outline at both widths; no pageerror events. Full screen-reader/keyboard journey and zoom audit not performed. |
| Independent review | /root/proposal_review found no blocking code/theological defect in inspected diff and exact proposal r2; r3 incorporates requested wording/source/native-disclosure refinements. No claim of ecclesial approval or full unwritten chapter review. |

Browser evidence: output/playwright/tradition-390.png, tradition-1440.png, today-buttons-390.png, today-buttons-1440.png, prayer-buttons-390.png, prayer-buttons-1440.png. Mobile and desktop Today screenshots visually inspected; mobile Tradition screenshot inspected. Source fragment screenshot includes sticky header at scrolled position.

Live web page fetches were unavailable (web cache miss; browser ERR_NETWORK_ACCESS_DENIED). Compared supplied production screenshots with canonical source and local /bible. Playwright CLI was unavailable due restricted registry access; used the repository's existing bundled Playwright/Edge pattern without installing packages.

Local production server: http://127.0.0.1:3217/ and http://127.0.0.1:3217/tradition . Comparison page: http://127.0.0.1:3217/bible . Port 3100 was occupied; left it untouched and used 3217.

Owner validation: inspect the two homepage button groups; open Tradition and confirm the retained hero/resources are the desired starting shell; read PROPOSAL.md r3 to assess the proposed replacement. No commit, push, deployment, IndexNow submission or external publication performed.
