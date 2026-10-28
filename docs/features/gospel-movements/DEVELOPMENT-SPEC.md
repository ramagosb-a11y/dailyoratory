# DEVELOPMENT-SPEC — Gospel Movements

## Identity and authorization
Revision 1, 2026-10-28. Local implementation authorized by the owner's selected designs (“Home page card #4, dedicated page #2”) followed by “I mean on the local full site” after the approved mockup plan. This authorizes implementing those selected designs for local review, not a production release. No commit, push or deployment.

## Implementation contract
- Add a home spotlight after Featured Content, id gospel-movements, matching card 4: navy, gold sound waves/organ artwork, heading The Gospel Movements and copy “Liturgy- and Scripture-inspired songs across a variety of musical genres.”
- Buttons: View All Songs on Suno opens https://suno.com/@thegospelmovements; Explore Playlists navigates to /music. Visible attribution @thegospelmovements.
- /music uses the existing site shell, chapel hero matching dedicated page 2, same title/copy/profile button, Explore Playlists section and eleven locally stored covers and actual public playlist titles in supplied order. Every Open on Suno link uses its original supplied URL. No inferred genres, counts, filters or player.
- Shared data in src/data/gospelMovements.ts, new home Server Component, /music page, scoped CSS module, local optimized images and sitemap entry. Preserve unrelated work; no new dependency.
- Mobile: single column, wrapping full-width buttons; desktop 4-column playlist grid, readable title wrapping. Semantic headings, list structure, focus indicators, decorative art alt empty, covers descriptive. No autoplay or remote image calls. No new analytics/storage/API.
- createPageMetadata canonical /music with matching social image. Static page; existing home revalidation unchanged. Home provides discovery; no global nav redesign.

## Acceptance and checks
1. Home spotlight visible with correct selected styling and exact two destinations.
2. /music returns 200, includes all eleven verified playlist titles and exact distinct supplied destinations in order.
3. Profile links correct; local WebP assets load; 390px and 1440px viewports have no horizontal overflow, broken art or console errors attributable to feature.
4. Focusable links have meaningful names and external cues. No embedded player/network dependency on Suno.
5. Targeted ESLint, typecheck, production build and URL validation; browser review home-to-music flow and screenshots. Record failures honestly. Owner is final local visual reviewer; no fabricated independent review.

Reversal: remove spotlight import/render, /music page, shared data/style/assets and sitemap entry only. Implementation report records evidence.
