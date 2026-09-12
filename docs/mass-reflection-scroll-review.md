# Antique walnut and brass reflection scroll

Implementation and pre-deployment review: September 12, 2026.

## Scope

- Only the manuscript presentation of `TodayMassReflectionFull` and the Mass Readings page's scoped stylesheet were changed.
- Replaced the gradient pseudo-element rollers with separate upper and lower image-based rollers. Each uses fixed-aspect end pieces and a flexible parchment center.
- Removed the imitation vertical scrollbar and its obsolete CSS.
- Retained normal page scrolling, all reflection content and formatting, calendar integration, upcoming-reflection links, and current-reflection selection.
- The bottom roller follows the complete reflection. Supplemental resources remain immediately beneath the finished scroll.
- Decorative elements are hidden from assistive technology, have no focusable descendants, do not intercept pointer input, and are omitted from print.
- In a follow-up cleanup requested after the scroll review, the top section-navigation buttons and their back links were removed. The inline Search and Filter, Sunday, Daily, archive-summary, Bible-promotion, and return-tomorrow sections were also removed. Their standalone archive, calendar, upcoming, Sunday, daily, and individual-reflection routes remain available.

## Artwork and reproducible design brief

Artwork was generated with the image-generation tool using the approved antique walnut/brass reference. Separate top and bottom masters are retained outside `public` in `output/imagegen/antique-scroll/`.

Production art direction:

1. Upper roller: a text-free, straight-on photorealistic horizontal roll of warm honey parchment, wrapped around a walnut rod; polished, compact rounded walnut ends; restrained engraved antique-brass collars; visible paper winding and a narrow parchment lip leaving the underside. Warm natural lighting, gentle contact shadow, no theatrical effects or text.
2. Lower roller: the coordinated matching object, with the parchment sheet entering above the roll. Preserve the upper roller's material, color, lighting, collar detail, and proportions without merely rotating its lighting upside down.
3. Responsive refinement: keep handles compact and round, close to the collars, so the parchment retains useful width on narrow phones. Keep the central paper neutral enough to scale horizontally. Use an isolated white matte for reliable transparent production cutouts.

The tool's selected exports had white mattes rather than usable alpha. The optimization script removes only border-connected neutral matte, retains interior material highlights, crops the artwork, and downsizes it to 224px high. Six WebP pieces use quality 88 and alpha quality 100. Validation checks true transparent and opaque pixels, dimensions, and file format.

Masters:

- `output/imagegen/antique-scroll/top-master.png`: 1,212,950 bytes.
- `output/imagegen/antique-scroll/bottom-master.png`: 1,263,652 bytes.
- Prepared transparent cutouts and the detailed optimization report are in the same directory. These are source/review files, not public page assets.

Public assets in `public/images/reflections/antique-scroll/`:

| Asset | Dimensions | Bytes |
| --- | --- | ---: |
| top-left.webp | 256 x 224 | 17,494 |
| top-center.webp | 1390 x 224 | 55,380 |
| top-right.webp | 256 x 224 | 16,744 |
| bottom-left.webp | 256 x 224 | 18,510 |
| bottom-center.webp | 1253 x 224 | 46,132 |
| bottom-right.webp | 256 x 224 | 17,544 |
| **Total** | **6 transparent WebP assets** | **171,804** |

Compared with 2,476,602 bytes of source masters, the production assets save 2,304,798 bytes (**93.06%**). This includes cropping, resizing, and compression, not compression alone.

Regenerate from the retained masters with `node scripts/optimize-reflection-scroll.mjs`. Validate production assets with `node scripts/optimize-reflection-scroll.mjs --check`.

## Review rounds

### 1. Initial implementation and material review

Inspected both masters and transparent cutouts. Replaced the old rollers instead of layering more overrides over them. Reserved space in normal flow and matched the paper's warmer edge shading to the roller artwork. End pieces retain their 256:224 aspect ratio; only the paper center changes width.

### 2. Navigation and behavior

Before the follow-up cleanup, local browser checks passed for all seven section links, destination-heading focus, search, filter clearing, and browser Back/Forward. Those inline controls were subsequently removed at the user's request. After removal, the page was checked again to confirm the button group and six requested content areas were absent, while the Google Calendar, upcoming reflections, supplemental resources, and standalone destination routes remained available.

Short and long content fixtures were tested temporarily in the isolated browser DOM, then restored. At 390px, the frame changed naturally from approximately 922px for a short fixture to 8,824px for doubled prose. In both cases the bottom roll remained 28px after the prose. No content or fixtures were saved into app data.

### 3. Content and isolation

Compared the current reflection against a pre-edit browser baseline: all 597 displayed words, normalized whitespace, rich-body HTML, and link text/destinations/target/rel values matched. No prayer, Scripture reference, reading explanation, or devotional paragraph was rewritten.

The existing content checker passed six date/publication/empty-state cases, renderer opt-in isolation, headings, quotations, lists, inline formatting, and preservation of the 15-minute refresh.

Representative individual-reflection, archive, and calendar routes returned HTTP 200 and contained no new manuscript-frame elements:

- `/reflections/mass-readings/2026-05-16-saturday-of-the-sixth-week-of-easter`
- `/reflections/mass-readings/archive`
- `/reflections/mass-readings/calendar`

### 4. Visual and accessibility

Inspected top and bottom screenshots independently at every requested width. A one-pixel center overlap corrected fractional-pixel grid joins without stretching the handles.

| Viewport width | Roller height | Frame overflow or content overlap |
| ---: | ---: | --- |
| 360px | 48px | None |
| 390px | 48px | None |
| 768px | 55.28px | None |
| 1440px | 100px | None |

All six artwork pieces loaded. Both sets of ends stayed within the viewport. The top roller cleared the label, the bottom followed the last paragraph, and supplemental resources cleared the bottom roll. There is no fixed-height or independently scrolling reading window.

Confirmed 34px enlarged body text and 68px title styling at 390px without overlap or frame overflow. A 720px layout check exercised the reflow equivalent of a 1440px viewport at 200% zoom; it is not a claim of testing a physical phone or browser-UI zoom. Print-media screenshots and an A4 PDF confirmed plain white paper with rollers and navigation omitted. Local browser runs reported no page runtime exceptions; the third-party Google Calendar frame emits informational report-only CSP messages.

Screenshots and browser review scripts are retained in `output/playwright/antique-scroll/`: `top-{width}.png`, `bottom-{width}.png`, `enlarged-390.png`, `print.png`, and `print.pdf`. The content comparison in `review.js` relies on the baseline retained in the isolated review session; create a new pre-edit baseline when reusing that check for a future content change.

## Automated validation

- Changed-files ESLint: passed for the component, image script, and browser review scripts.
- `npm run typecheck`: passed.
- `node scripts/check-mass-reflection-content.cjs`: passed.
- `node scripts/optimize-reflection-scroll.mjs --check`: passed all six alpha-enabled assets.
- Production build: passed, including TypeScript, 603 generated pages, client-store audit, existing 25-asset retreat image validation, and rendering-strategy audit.
- `git diff --check`: passed; Git only noted its usual LF-to-CRLF conversion warnings.

## Unrelated existing findings

- Repository-wide ESLint still reports **42 errors and 35 warnings**. The errors are in existing CJS inspection/check scripts (`no-require-imports` and one `no-assign-module-variable` category), not in this change. They were left untouched.
- At 1440px, existing invisible global-header dropdowns extend the document's scroll width to 1,893px. The same issue is present on the unrelated calendar route; temporarily hiding the header in the isolated browser restores a 1,440px document. The new scroll and all Mass Readings content fit within the viewport. Global-header behavior is outside this decorative-frame change and was not modified.

Review locally at `http://localhost:3000/reflections/mass-readings#current-reflection`.
