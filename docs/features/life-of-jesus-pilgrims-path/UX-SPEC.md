# UX-SPEC — Life of Jesus: Pilgrim’s Path

Feature ID / revision / reviewer / date / verdict: `life-of-jesus-pilgrims-path`; R3 baseline with R6 visual follow-up; UX / Formation review; 2026-09-24; **implemented locally, human visual review pending**.

R7 Scripture follow-up (2026-09-26): all 462 native reading disclosures remain closed initially and open to full local text, with no link-only fallback. Twelve edition-numbering/boundary notes appear inside their respective opened cards without changing the original citation label outside. The Luke 9:44a label is explicitly explained. Check a short range, the long John 6 discourse, a noncontiguous range, and an affected numbering card at phone, tablet, and desktop widths; confirm scroll, focus, and source-link access remain usable.

- Existing route and user entry point: new public canonical `/life-of-jesus`, entered from Learn navigation, `/learn`, search index if required by existing architecture, sitemap, and related Scripture/formation surfaces.
- Existing components/tokens to reuse: `Breadcrumbs`, `SectionHeader`, `Typography` where suitable, `createPageMetadata`, `paper-texture`, `liturgical-gradient-soft`, `card-parchment`, `btn`, `focus-ring`, and navy/burgundy/gold/parchment/ivory/stone/muted tokens. Use the Vatican page/hero/timeline only as composition references; do not copy its content.
- New components: server-rendered hero, legend, era/chapter landmarks, source-record card, unresolved-source cluster, image interlude, and one small client island only if needed for jump navigation/current-era state. New components are justified by 280 records and the requirement to represent certainty without flattening it.
- User flow: hero → accuracy/legend → optional era jump navigation → winding pilgrimage path → chapter landmarks and expandable/compact records → Ascension conclusion. Reading the entire page never requires an account, form, saved state, or completion action.
- Visual direction: concept 3, a restrained winding path. The line may alternate left/right on wide screens, but textual DOM order always follows the corrected display order. Major imagery marks eras, not every record.
- Start state: all era headings and essential record title/reference/labels are available in the document. If progressive disclosure is used, native `<details>/<summary>` or accessible buttons expose supporting notes; Scripture links are never hidden behind hover.
- Loading state: none for core content because it is local static data. Images reserve aspect ratio and may lazy-load below the fold. No skeleton that conceals content indefinitely.
- Empty/error state: build-time validation rejects missing eras, chapters, references, or duplicate IDs. A missing optional image falls back to the parchment/card composition and alt-independent heading; the timeline remains usable. A failed external link does not break the page.
- Completion/return state: final Ascension landmark and links back to Bible/formation resources. No congratulatory score, streak, spiritual assessment, or stored completion.
- Mobile behavior: one vertical path line; cards remain in single-column DOM order; era jump control wraps or becomes a semantic disclosure; minimum 44px targets; no horizontal map panning; photos use stable aspect ratios and focal crops; uncertainty labels remain visible.
- Desktop behavior: winding alternating layout within `max-w-7xl`; text column width remains readable; line and markers are decorative; unresolved clusters occupy one shared band instead of appearing sequential.
- Nonordinal clusters: for 143–172, 193–206, 230–240, and 251–264, suppress connector progression, ordinal animation, and “next event” language between mutually unresolved panels. Each Gospel panel preserves its internal order; inter-panel position has no chronological meaning. Resume the path at the next shared anchor.
- Keyboard order: hero and legend first, then jump links, then records in corrected DOM order. Native anchors/buttons/details only. Focus never follows the decorative path. A sticky jump control, if implemented, must not trap focus or cover focused content.
- Accessible names/descriptions: exact book and range remain visible as text, and each Douay–Rheims disclosure has a descriptive native summary. Classification badges have readable text, not color alone. Decorative line/markers use `aria-hidden`; meaningful images have concise contextual alt text, while decorative chapter photography has empty alt.
- Status announcements: no continuous scroll/current-era announcements. If a client jump control updates selection, visible state and `aria-current` are sufficient; do not create noisy live regions.
- Zoom/contrast/reading order/reduced motion: usable at 200% zoom and about 390px; WCAG AA text contrast; headings descend logically; `prefers-reduced-motion` removes path-drawing/parallax/reveal motion; no autoplay or forced smooth scrolling.
- Content IDs: use `CONTENT.md` R3 and stable record IDs. Stable IDs are not displayed as historical ordinals when records move or cluster.
- Image gate: placeholders or clearly licensed assets only during local work. Before publication, each image must have provenance/license/attribution, appropriate Christological iconography review, responsive crop review, and optimization under `.codex/workflows/image-optimization.md`.

## Acceptance checks

- At 390px, 768px, and 1440px, no horizontal overflow, clipped labels, path/text collision, or hidden uncertainty note.
- Keyboard-only user can reach every era and Scripture disclosure with visible focus.
- Screen-reader heading/output communicates era, chapter, record title, exact reference, Douay–Rheims reading option, and uncertainty without relying on the decorative line.
- Reduced-motion mode has no line-drawing, parallax, or reveal transitions.
- Every unresolved cluster passes a source-order review and has no connector implying inter-source order.
- Removing/denying an optional image leaves complete readable content.

Handoff: implement the behavior above, preserve R3 content, run accessibility/browser checks, obtain image rights and human Catholic publication review before release.

## R5 mobile visual and usability follow-up — 2026-09-24

- Observed at 390px before correction: the full introductory deck occupied nearly the entire hero and covered the sacred artwork; era titles could occupy six or seven lines; era captions obscured a large share of each 208px image; a Scripture summary wrapped awkwardly in the narrow stop card.
- Corrected composition: the hero presents the landscape, title, and journey action first, with the original full deck and independent-resource note immediately below in a connected panel. Era images have a stable 4:3 mobile frame and a separate caption panel. No theological or chronological copy was rewritten.
- Wayfinding: a compact sticky era disclosure is available within the open journey. Its link selection closes the menu through the existing client island; native disclosure and anchor navigation remain functional without JavaScript. Anchor offsets keep era titles clear of the sticky controls.
- Reading width: the mobile route gutter and record padding are reduced so Scripture text and controls have more width while the gold waypoint stays aligned to a single path. The collapsed disclosure visibly names Douay–Rheims and the exact range without a wrapped translation suffix.
- Acceptance evidence: browser screenshots and geometry checks at 320px, 390px, 768px, and 1440px; first era, Last Supper, and Resurrection image crops; mobile navigation, disclosure open/closed states, image response, and horizontal overflow. Final owner imagery/rights review remains pending.

## R6 Christ-centered entry and visual rhythm — 2026-09-24

- Observed at 390px before correction: the journey invitation began roughly 2,446px down the page, after a 951px accuracy note and 417px chronology guide. These are important, but the first encounter felt like documentation before a Gospel journey.
- The existing sacred-art library includes a Christ-centered teaching image suited to the hero; use it with a responsive focal crop so Jesus is visible on phone and desktop. Keep the image identified as devotional artwork, not a documented historical view. Do not add new image binaries in this pass.
- Remove the statistics from the hero overlay and place them in the closed journey invitation. The invitation becomes a distinct illustrated portal using existing Nativity, Calvary, and empty-tomb imagery; the images are decorative here because their meaningful captioned counterparts remain in the eras.
- Move the unchanged full accuracy note and chronology legend into a closed native disclosure at the start of the expanded journey. The summary clearly names the chronology/source guidance; the body precedes the first era in DOM order. Keep the unchanged source/provenance footer after the timeline inside the expanded journey, so the closed page ends with the visual invitation rather than legal-style detail. Per-record certainty labels and the pre-Passion safeguard remain visible at their points of use.
- Test the hero action, journey portal, methodology disclosure, and era navigation with keyboard and touch at 320px, 390px, 768px, and desktop. Confirm no horizontal overflow, readable focus, image-disabled completeness, and no newly introduced content or data changes.
