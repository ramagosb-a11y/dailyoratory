# DEVELOPMENT-SPEC — Homepage Life of Jesus card

## Identity and authorization
- Feature: `home-life-of-jesus-card`
- Revision/date: v1 / 2026-09-27
- Status: approved-for-implementation
- Owner authorization: user request dated 2026-09-27: update the Eucharistic Miracles front-page module with the Life of Jesus Christ timeline page, including its photo, text and link.
- Route review: `/life-of-jesus` already has canonical metadata and is in `src/app/sitemap.ts`.
- Production authorization: Owner explicitly approved committing to `main` and deploying to Production on 2026-09-27.

## Contract
- Update only the fourth item in `featuredContentCards` in `src/app/page.tsx`.
- Title: “The Life of Jesus Christ.”
- Description: excerpt from existing route metadata: “Walk through the life of Jesus Christ from the promises and Incarnation to the Cross, Resurrection, and Ascension.”
- Destination: `/life-of-jesus`.
- Image and alt: existing timeline hero asset `/images/rosary/viewpoints/luminous/03_proclamation/01_among_seated_crowds.jpg`; alt copied from asset record: “Jesus teaching among a gathered crowd in devotional sacred art.”
- Preserve the other featured cards and keep the Eucharistic Miracles route unchanged elsewhere.
- No dependencies, routes, metadata, sitemap, or schema edits.

## Acceptance criteria
| ID | Requirement | Verification |
| --- | --- | --- |
| AC-1 | Fourth card presents the timeline image, title, matching copy and internal link. | Source and local browser review. |
| AC-2 | Card link opens the existing timeline route. | Browser interaction. |
| AC-3 | Other homepage cards and route metadata remain unchanged. | Focused diff review. |
| AC-4 | Quality checks pass. | Focused ESLint, typecheck, full build. |
