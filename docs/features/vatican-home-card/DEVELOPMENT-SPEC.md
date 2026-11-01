# Vatican homepage card — revision 1

## Authorization
Owner instruction 2026-10-31: “A Pilgrimage from Home Between armor of God and Strongholds”. This selects the previously presented navy/gold concept and authorizes local implementation. Release not authorized. Status: approved-for-implementation.

## Contract
- Insert HomeVaticanSpotlight immediately after HomeArmorOfGodCta and before HomeStrongholdsCta in src/app/page.tsx.
- Use deep navy, muted gold, ivory heading and an architectural illustration inspired by Saint Peter’s Basilica. Save optimized WebP under public/images/vatican; keep source outside deployed tree.
- Exact copy: “A journey of faith”; “A pilgrimage from home”; “Step inside the Vatican through virtual tours, sacred art, and moments of prayer.”; “Begin Exploring”; “The Vatican · Daily Oratory”. CTA accessible name: “Begin exploring the Vatican”, destination /vatican.
- Desktop has text left, artwork right; mobile shows artwork above text with no text/image collision. No arrow icons. Semantic section/h2 and one keyboard-focusable internal Link with visible focus. Decorative image alt empty. No client component, extra dependency, animation, tracking or route changes.
- Scope: homepage import/placement, new home TSX/CSS, one WebP, feature docs. Existing music menu changes preserved.

## Acceptance
Check section order, destination, visible image, desktop/mobile widths including 320/390/1440, no horizontal overflow, readable text and keyboard focus. Run focused lint, full lint (report existing backlog), typecheck, production build with image/client-store/rendering guards, URL validation and diff check. Human review at local homepage fragment #vatican-pilgrimage. Do not commit, push or deploy.
