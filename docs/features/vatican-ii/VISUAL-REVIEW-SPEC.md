# Vatican II visual refinement — revision 3, 2026-10-31

Status: implemented-awaiting-human-review, completed 2026-11-01. Both sequential review/improve rounds and final verification are recorded in [VISUAL-REVIEWS.md](VISUAL-REVIEWS.md).

Owner request: “Have the web team review and improve the look so it is stunning. then do it again.” Authorizes two sequential independent review/improve rounds, local implementation and verification. No commit, push or production publication authorized.

2026-11-01 owner amendment: “add a menu link”, then “Continue”. Preserve the existing /vatican-ii destination and expose a concise “Vatican II” entry in Learn using shared desktop/mobile navigation. Avoid duplicate entries; verify both menu presentations. This menu-label adjustment is within the authorized navigation scope.

Implementation contract: preserve article data/theological text, prayer, discussion questions, source/credit destinations, route/metadata/navigation, existing card and all unrelated user work. Change only scoped article presentation and responsive image sizes. No new imagery, dependency, motion, tracking, data input or runtime fetch. Existing two optimized archival photographs and their attributions retained.

Round 1: independent visual designer and responsive/accessibility reviewer inspect baseline rendered screenshots and source. Implement publication-cover hero with responsive stack <=1000px, larger secondary text, architectural A/B/C cycle graphic, stronger editorial chapter rhythm, cleaner participation image spread, framed contemplative prayer and curated source entries. Preserve desktop table semantics and mobile/tablet pairs. Round 2: re-review actual updated screenshots, implement remaining specific corrections, then final integrated QA. Record both rounds and exact changes in VISUAL-REVIEWS.md.

Acceptance: two completed review/improve cycles; material visible improvements to hero, Scripture graphic and photo spread; no content/source changes; complete image/credit display; widths 320/390/768/1000/1440 without horizontal overflow; readable source labels and visible focus; reduced-motion/no-animation; existing actions/anchors and static render preserved. Focused lint, typecheck/build, image/rendering guardrails and browser checks. Full lint baseline from revision 2 remains separately disclosed. Screenshot evidence retained under output/playwright/vatican-ii-review. Human review is local.
