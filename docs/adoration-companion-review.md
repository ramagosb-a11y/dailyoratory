# Adoration Companion: implementation and review

Local route: http://localhost:3000/adoration/companion  
Reviewed September 10, 2026. No deployment.

## Result

Navy-and-gold reading surfaces, consolidated five-section navigation, visible Home/Back to Adoration links, a separate external USCCB link, compact mobile timer and reading selectors, and top/bottom meditation navigation. Devotional prose, prayer and hymn texts, and Catechism summaries were preserved.

Inferred audience: people using the Companion for personal Eucharistic adoration, frequently on phones. Primary objective: reach and move through prayerful reading without utility panels or long selectors getting in the way.

## Scripture provenance and completeness

Edition: Douay-Rheims, Challoner revision, 1899 American Edition. Source: [eBible engDRA](https://ebible.org/engDRA/index.htm). All text is embedded locally; each displayed block includes a direct chapter/verse source link. Runtime reading does not require a network request.

| Area | Passage blocks | Displayed verses |
| --- | ---: | ---: |
| Seven meditation parts | 7 | 16 |
| Ten Guided Scripture readings | 10 | 69 |
| Holy Hour Guide | 19 | 32 |
| Total | **36** | **117** |

There are 35 distinct passage records; the same John 15:4–5 reading appears in two locations. Counts refer to one occurrence of each content location, not repeated renderings or viewport tests.

- Each range includes every listed verse; nonconsecutive selections remain nonconsecutive. Psalm 62 is included in full, including its numbered superscription in this edition.
- Douay-Rheims Psalm numbers are primary. Existing parenthesized modern equivalents are retained.
- “1 Kings 3:10 (Douay-Rheims)” explicitly maps to canonical 1 Samuel (`1SA03`) and displays “1 Kings (1 Samuel) 3:10.” The Elijah reading uses modern 1 Kings (`1KI19`), traditionally 3 Kings in Douay-Rheims naming; it is not confused with Samuel.
- Guided Scripture seeds no longer contain legacy verse text. The Companion uses the verified collection through a typed adapter and a shared passage component; missing mappings throw instead of falling back to excerpts.
- Shared Holy Hour data remains unchanged for other Adoration pages. Its Companion rendering substitutes complete verified passages for both segment readings and nested Scripture blocks.
- The external USCCB Mass Readings link is separate from embedded Douay-Rheims attribution.

## Review rounds

1. **Initial review and implementation:** inspected all five sections at desktop and mobile widths. Unified navigation, reduced artwork height, moved the mobile timer into an expandable panel, added part controls and selectors, and embedded complete readings.
2. **Follow-up 1 — navigation:** tested top and bottom controls in Guided Steps and Continuous Reading, first-part boundary, direct part selection, focus placement, and final transition to Holy Hour. Corrected the mobile passage selector's accessible name.
3. **Follow-up 2 — content:** compared the inventory and every verse against freshly downloaded eBible text. Verified all 36 content locations at 360, 390, 768, and 1440px. Removed obsolete guided-reading verse arrays.
4. **Follow-up 3 — visual and utility regression:** reviewed section screenshots; replaced remaining cream prayer panels, darkened search/journal fields, made bilingual prayer columns responsive, added compact mobile prayer selection, and removed the empty Holy Hour sidebar column. Rechecked timer, filters, language controls, clipboard, journal, search, and deep-link behavior.

## Design scorecard

Editorial assessment: **88/100 (B)**, not an accessibility certification or user-research metric.

| Category | Score | Evidence |
| --- | ---: | --- |
| Message clarity and audience fit | 19/20 | Clear adoration purpose and five named practices. |
| Copy quality and usefulness | 18/20 | Complete Scripture beside preserved devotional content. |
| Hierarchy and scannability | 14/15 | Reduced hero/image prominence, consistent reading cards, compact selectors. |
| Navigation and interaction | 14/15 | Top/bottom part controls, both reading modes, final transition and focus verified. |
| Accessibility and usability | 12/15 | Focus styling, named selectors, 44px button heights and reduced-motion handling; no physical screen-reader audit. |
| Trust and reassurance | 8/10 | Verified passage/source data, public-domain edition and devotional distinction. |
| Visible technical basics | 3/5 | Production build, type check and browser checks; no full SEO/performance audit. |

## Implemented priorities

| Priority | Location | Action and exact adjustment | Wording |
| --- | --- | --- | --- |
| P1 | Every meditation card | Add identical top/bottom navigation and direct part selection | “Next Part →”; “← Previous”; final “Continue to Holy Hour →” |
| P1 | Scripture references and Holy Hour Scripture blocks | Replace index links/excerpts with complete numbered passages and direct source links | “Sacred Scripture”; edition attribution |
| P1 | Section navigation and mobile timer | Consolidate five controls; collapse timer into a labeled status panel | “Prayer timer”; “Running” / “Paused”; “Show” / “Hide” |
| P2 | Reading cards and prayer columns | Restyle to navy/ivory/gold, readable spacing and responsive bilingual columns | N/A — visual change |
| P2 | Mobile Scripture/prayer library | Replace long lists with labeled selectors | “Scripture theme”; “Choose a passage”; “Choose prayer or hymn” |
| P2 | Masthead | Add clear exit links | “Home”; “Back to Adoration” |

Quick wins delivered: top Next controls, shorter artwork, compact mobile timer. Preserved strengths: Eucharistic imagery, prayerful tone, English/Latin prayers, guided/continuous modes, and existing utility features.

## Reproducible checks

- `node scripts/companion-scripture.mjs --verify`: fresh source comparison, inventory and exact verse coverage.
- `node scripts/check-companion-browser.cjs`: 36 passage locations across four widths, every part-navigation direction/position/mode, focus, final transition, theme filters, timer state, language selection, copy, journal preservation, Catechism search, chime invocation, deep link and runtime errors. Uses an isolated browser, not the user's session.
- `npm run typecheck` and `npm run build`: compilation and production checks. Run sequentially: the build regenerates `.next/types`, so running the standalone type check simultaneously can produce a transient missing generated-file error.

Screenshots are in `output/playwright/companion-final-*`. Browser verification uses desktop Edge with responsive viewports; physical iOS/Android devices, audible chime quality, and assistive-technology certification were not tested.
