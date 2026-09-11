# Mass Readings Reflections parchment review

Local implementation and review: September 11, 2026. No deployment.

## Round 1 — implementation

Removed the duplicate summary card from the current-reflection section. Moved a compact introduction and seven wrapping section links to the top, followed by the full reflection, search, calendar, collections, and resources. Added route-scoped ivory parchment, subtle edge shading, Cormorant headings, readable body typography, consistent cards and controls, and print rules. The rich-body manuscript variant is opt-in; devotional data was not edited.

## Round 2 — navigation and behavior

Verified seven destination links and heading focus at 360, 390, 768, and 1440 CSS pixels, plus return-to-navigation focus. All seven filter parameters were exercised: search, type, season, cycle year, weekday cycle, lectionary number, and Scripture reference. Checked clear filters, individual filter removal, empty results, and browser Back/Forward. Calendar embed URL and external calendar link remain intact. Removed the newly introduced nested main landmark. Browser automation now waits for React hydration before testing handlers.

## Round 3 — content preservation

The entire visible current-reflection body matches the pre-edit browser baseline after whitespace normalization at all four widths. Renderer fixtures cover numbered headings, ordinary paragraphs, quotations, lists, bold, underline, and italic formatting. Default rendering remains opt-in isolated from manuscript rendering. Six date-selection tests cover today's entry, fallback, upcoming, draft exclusion, no entries, and scheduled-entry activation. The existing 15-minute refresh remains present.

## Round 4 — visual and accessibility

Reviewed desktop, tablet, and narrow-mobile screenshots and print rendering. Reflection content has no internal horizontal overflow at the four requested widths. The 200% desktop reflow check uses an equivalent 720 CSS-pixel viewport, not browser-chrome zoom. Print emulation keeps the complete reflection and removes navigation, texture, and collection controls. Screenshots and the printable PDF are in output/playwright/mass-parchment-*.

## Validation

- `node scripts/check-mass-reflection-content.cjs`: passed.
- `node scripts/check-mass-parchment.cjs`: passed its scoped assertions, with the current detail-page 404 explicitly reported rather than ignored.
- Targeted ESLint on the seven modified TSX files: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed, including 602 generated pages, client-store audit, image validation, and rendering-strategy audit.
- Representative published May 16 individual reflection, archive, and calendar routes: HTTP 200; no manuscript styling applied.
- No page JavaScript runtime errors recorded in the browser suite.

## Unresolved limitations, outside this presentation change

1. The existing September 11 current reflection's individual destination returns 404, although its full content appears on the overview. The detail route uses a static source and `dynamicParams = false`; publication/data routing was deliberately left unchanged. Not all individual destinations can therefore be reported as working.
2. The global desktop header's offscreen hidden dropdowns extend the document width. The reflection content itself fits; global header behavior was not redesigned.
3. Google Calendar's cross-origin internal interface and external-service availability were not controlled or restyled. Its configured embed and external link were checked.
4. Current reflection metadata contains an empty structured readings array; the supplied prose still contains the readings references. No references or devotional content were invented or rewritten.
