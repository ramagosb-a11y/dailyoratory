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

## Revision 2 — link and mobile photo refinement, 2026-10-28
Owner requested removing link icons on the home music feature and dedicated music page, and improving the dedicated hero photo on mobile. Remove decorative arrow glyphs from music CTAs and return link; preserve destinations and accessible external-link labels. Below 640px, display the chapel photograph in its own unobstructed image area above the hero text rather than cropping it behind a tall text block. Retain desktop overlay layout. No new images, dependencies, content meaning or data changes. Validate mobile/desktop layouts, links, focused lint, typecheck and production build. Local review first; the preceding release authorization applied to revision 1.

## Revision 3 — playlist display order, 2026-10-29
Owner requested “Move country to the top, move rap to bottom”. Country becomes first and the existing HipHop playlist (the rap collection) becomes last. Retain all eleven records and preserve their titles, covers, destinations and the relative order of the other nine entries. This supersedes the original-order requirement for display only. Local implementation; no production release authorization inferred from the earlier revision-specific releases.

## Revision 4 — web-team design refinement, 2026-10-30
Owner authorization: “Have the web team review the dedicated page and improve the look, sharpen the playlist cards, and the top section. Fix and do it 3 more times”. Four review/fix rounds with independent UX and frontend reviewers, parent-owned browser checks and implementation. Dedicated /music only; preserve all titles, URLs, art, Country-first/HipHop-last ordering, home card, no icons, no embeds/tracking or theology changes. Use dedicated page CSS, editorial split hero with unobstructed image above text on mobile, correctly square 640px covers at existing allowlisted quality 85, roomier responsive cards, clear keyboard focus and readable full titles. No new image files, dependencies or backend. Review at 320/390/768/1440, keyboard, no overflow, correct links and image loads. Record each round and final independent review. Final lint/type/build/URL/SEO checks; local review only, no automatic commit or release.

Revision 4 amendment, 2026-10-30: owner requested “Remove the gospel playlist”. Remove only the entry titled Gospel (share URL ending PpvYSTpAKvnIef2D). Ten entries remain; Country first and HipHop last, with all other relative ordering unchanged. The visible count derives from array length. Keep account branding The Gospel Movements, existing designs, other destinations and historical source metadata intact. Local change only.
