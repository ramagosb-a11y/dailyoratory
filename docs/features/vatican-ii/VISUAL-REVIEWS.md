# Vatican II and the Mass — two visual review/improve rounds

Completed 2026-11-01. Authorization: [VISUAL-REVIEW-SPEC.md](VISUAL-REVIEW-SPEC.md). Page title: Vatican II and the Mass | Scripture, Liturgy and Participation | Daily Oratory. Local production preview: http://127.0.0.1:3015/vatican-ii . Goal/audience: help Catholics, returning Catholics and discussion groups understand Vatican II’s liturgical renewal through a source-backed visual article.

## Round 1 — independent review, then implementation

Reviewers: visual_review_round1 (senior visual designer) and responsive_review_round1 (responsive/accessibility). Read-only review of rendered 1440/768/390/320 screenshots, full-page artifacts and source. Designer rated the initial visual presentation roughly 75/100: good typography/photography, conservative art direction and a cramped tablet hero.

| Priority | Location | Observed issue | Implemented adjustment | Wording |
| --- | --- | --- | --- | --- |
| P1 | Hero, “Vatican II and the Mass”, `.hero` | Split layout at 768px wrapped the title awkwardly and severely cropped the image | Stacked composition <=1000px, landscape tablet photo, 56/44 desktop split, gold date rule, responsive title; larger credits; photo scale removes archival scan’s outer black border | N/A — visual change |
| P1 | “More Scripture. A wider horizon.”, `.cycles` | Three letters read as a plain text row | Architectural arches, large gold initials, centered Year/Gospel labels, separated John note and richer navy field | N/A — visual change |
| P2 | Chapter markers and reading layout, `.chapter`, `.purpose`, `.language` | Equally weighted rectangles and tiny boxed indices flattened hierarchy | Plain serif chapter numerals with gold rules, asymmetric editorial columns and more deliberate spacing | N/A — visual change |
| P2 | Mass comparison, `.comparison`, `.comparisonPair` | Dashboard-like table header and repeated heavy mobile navy strips | Serif desktop column headings/gold top rule; warm paper mobile headers and numbered pairs; tablet two-column definitions | N/A — visual change |
| P1 | “The whole person. The whole Church.”, `.participation` | Framed picture inside a beige panel reduced photographic impact | Flush photograph/prose spread, attached caption and cleaner image edge | N/A — visual change |
| P2 | Prayer, source and credit sections | Prayer needed a ceremonial ending; secondary text was too small | Inset gold prayer frame, larger labels/citations/credits, initially more distinct source entries | N/A — visual change |

Round-1 screenshots retained under output/playwright/vatican-ii-review/round1-*.

## Round 2 — review the revised render, then refine again

Same independent reviewers inspected the new rendered desktop/tablet/mobile artifacts and scoped CSS. Designer’s screenshot-based visual judgment rose to 87/100; this was a design assessment, not a functional-test score. Both agreed the hero, arches, chapter rhythm, photographic spread and prayer now formed a coherent visual system.

| Priority | Location | Remaining issue | Implemented correction | Wording |
| --- | --- | --- | --- | --- |
| P1 | Tablet `.participationFigure` | Round-1 tablet grid put a half-width photo beside a caption and empty beige space | Normal-flow full-width figure and caption; 4:3 image at 601–1000px with a 65% vertical focal point; narrow mobile keeps complete square image | N/A — visual change |
| P2 | `.sourceGrid` beneath “Read the Council’s teaching.” | Eight boxed entries made the ending feel administrative | First two texts retain subtle highlight and gold rule; remaining entries form an open two-column bibliography with fine top rules; mobile is a readable sequence | N/A — visual change |
| P1 | Small-phone `.cycles` | Gospel names/year captions needed explicit room | 8px gaps, 4px horizontal insets, 60.8px initials, 19.2px unbroken Gospel names and 12px Year labels at <=480px | N/A — visual change |
| P2 | Comparison at 601–767px | Overlapping media rules added both a top and left divider to the second definition | Reset top divider for horizontal pairs; stacked pairs retain their horizontal divider | N/A — visual change |
| P2 | Shared Learn menu | Owner requested a menu link | Existing destination now has the concise label “Vatican II”; one shared entry serves desktop/mobile and preserves concurrent Vatican/Vatican I entries | Vatican II |

No theological copy, prayer, discussion question, source destination or image file changed. Article-data and photo SHA-256 values equal the pre-refinement baseline. Reversing the responsive `sizes` string restores the page’s original hash, proving there were no other article-markup changes. No new APIs, forms, state, tracking, animation, dependencies or services.

## Final rendered assessment

Parent implementation/QA review, not an independent third design round: **91/100, A**. This score is a subjective design/UX assessment against the webpage-review rubric, not a measured conversion or accessibility certification.

| Criterion | Score | Observed evidence |
| --- | ---: | --- |
| Message clarity/audience fit | 19/20 | Clear title, focused Mass/Scripture introduction and consistent section headings |
| Copy quality/usefulness | 19/20 | Reviewed original article retained with comparison, qualifications, discussion prompts and primary sources |
| Visual hierarchy/scannability | 14/15 | Distinct hero, arches, chapter system, photographic spread and quiet framed prayer |
| Navigation/interaction | 13/15 | Desktop/mobile Learn link and both hero anchors work; long article still requires substantial scrolling |
| Accessibility/usability | 12/15 | Semantic controls, larger secondary text, visible keyboard outline and text fit at all tested widths; dense source material remains a reading burden |
| Trust/credibility | 9/10 | Primary source links and visible photographer/source/license/change credits |
| Visible technical/SEO basics | 5/5 | One H1, matching canonical/metadata and prerendered public route |

Quick wins completed: tablet hero, Scripture arches, readable credits. Preserved strengths: archival photography/color, Catholic editorial voice, exact content and source provenance, static rendering. No speculative experiments introduced. Coverage limits: no formal assistive-technology audit, user study or performance lab trace. Earlier independent theological review remains applicable because content is unchanged.

## Verification and handoff

- Focused ESLint and TypeScript: passed. Full repository lint’s prior unrelated backlog (43 errors/36 warnings) was not altered or re-run for these presentation-only refinements.
- Production build: passed, exit 0; compiled in 15.4 seconds, 667 pages generated, /vatican-ii prerendered. Client-store, image and rendering guards passed. First attempt met another build lock; waited for its release without interrupting it, then completed the build. Log: ignored qa/vatican-ii-review/build-final.log.
- SEO preflight/URL validation: passed, all 13 priority routes found. CSS parsed successfully with PostCSS; document/source preservation checks passed.
- Production browser checks at actual CSS widths 320, 390, 640, 768, 1000 and 1440: no horizontal overflow; both photographs loaded; all Gospel names fit their arches. Paired comparison shown through 1000px; semantic desktop table visible at 1440px. Measurements: ignored qa/vatican-ii-review/final-browser-results.json.
- Desktop and mobile Learn → Vatican II verified by click. Both hero anchors reach #what-changed / #sources. Tab from primary to secondary hero action retains a visible solid outline. Production browser warning/error log empty.
- Device scale measured at 1.76; viewport requests calibrated to actual CSS dimensions. Viewport override restored after testing. No browser zoom preference was changed.
- Screenshot evidence: output/playwright/vatican-ii-review/final-hero-{320,390,768,1440}.png; final-scripture.png; final-scripture-320.png; final-participation.png; final-prayer.png; menu-final.png; menu-desktop-final.png. These are production viewport captures. Full-page capture API clipped at the device scale, so those raw outputs are retained only in ignored QA storage and are not authoritative evidence.
- No new raster files or conversions: both original optimized WebP files retained unchanged (prior 45.9% total savings). Existing card, other Vatican work and concurrent user changes preserved.

Status: implemented-awaiting-human-review. Local production preview left running on port 3015, existing dev preview on port 3014 preserved. No commit, push, merge, publication or deployment.
