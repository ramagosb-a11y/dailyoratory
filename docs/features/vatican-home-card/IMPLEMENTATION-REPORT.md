# Vatican homepage card — revision 1 implementation
2026-10-31. Implemented, awaiting owner review. No commit, push or deployment.

## Changes
Added HomeVaticanSpotlight and scoped CSS, inserted immediately after Armor of God and before Strongholds. Navy/gold selected design, HTML copy/CTA, optimized artwork, internal /vatican link. Mobile separates artwork above copy. Existing music menu edits preserved. No devotional page text, analytics, route, dependency or rendering policy changes.

## Image provenance and optimization
Built-in image generation, original architectural illustration inspired by Saint Peter’s Basilica, not documentary photography. Prompt: landscape 3:2 architectural illustration, looking upward into an ornate basilica dome, warm gold natural light and navy shadows, focal detail on right, dark left for HTML overlay, no people, text, logos or official seals. Original: ../output/vatican-home-card/pilgrimage-dome.png (outside repository). Deployed: public/images/vatican/pilgrimage-dome.webp. Quality88, dimensions1536×1024 unchanged; 3,068,455 to408,306 bytes, saving2,660,149 bytes (86.7%). Decorative empty alt. Source retained, not deployed.

## Verification
- Focused ESLint for homepage and new component passed; full lint reports existing backlog:43 errors/36 warnings, none in touched files.
- npm run typecheck passed. Production build passed including image, client-store and rendering guards. URL validation passed. Diff whitespace check passed.
- Browser1440px: image loaded, no horizontal overflow, correct previous Armor of God and next Strongholds sections, /vatican destination.
- Browser390px: artwork above copy, image loaded, no overflow, button285×56px. Keyboard Shift+Tab moves to Armor of God and Tab returns to Vatican CTA with visible3px ivory outline. Mobile screenshot inspected.
- Browser320px: image loaded and no horizontal overflow. CTA click opens existing Vatican page with correct heading. Captured browser errors empty. Actual200% zoom not tested.
- Implementer reviewed scoped diff/React structure; no independent review claimed. Existing /vatican content unchanged and not re-audited for theological accuracy.

Local review: http://127.0.0.1:3000/#vatican-pilgrimage. Build/lint/URL logs and source artwork in workspace output/vatican-home-card outside canonical Git checkout.
