# Pilot: distinguish Copy Prayer buttons by prayer title

Feature ID: prayer-card-copy-label. Prepared 2026-09-18.
Status: implemented locally, awaiting human review. Owner approved pilot v1 on 2026-09-18; production remains unauthorized.
Baseline: `553ee5bc1a7c78206c0a56b69b9dbc0180bd9e99`.

## Idea and context

A person navigating a list of buttons with a screen reader should be able to distinguish which prayer each Copy Prayer control belongs to. `src/components/ui/PrayerCard.tsx` currently uses the same visible copy label by default. It accepts an optional title, copyLabel, copiedLabel and onCopy callback. Repeated callers include `src/components/adoration/AdorationPrayerCards.tsx` and `src/components/angels/AngelPrayerCards.tsx`.

Propose using the existing public title in the button's accessible name, retaining its current visible label. Preserve title-less behavior and custom labels. No new devotional writing, route, service, dependency, tracking or storage.

## Stage selection

| Stage | Decision | Evidence / reason |
| --- | --- | --- |
| Repository/context | Completed | Inspected PrayerCard, Typography, AdorationPrayerCards and references; reuse shared component |
| Catholic sources | Not applicable | No new claim, quotation or source; preserve all supplied prayer text |
| Formation/content | Preservation review completed | Existing prayer flow unchanged; accessible-name format uses existing UI label and title |
| Independent theology | Not applicable to scoped change | No theological meaning changes; becomes required if a title/prayer is rewritten |
| UX/accessibility | Draft review completed | Button-list ambiguity has a precise accessible-name acceptance test |
| Site/SEO | Not applicable after screening | No route, metadata, navigation, sitemap or rendered prayer-content change |
| Privacy/safety | Draft review completed | Accessible name derived locally from existing displayed title; no new telemetry or persistence |
| Engineering | Implemented | Only shared PrayerCard accessible-name behavior changed |
| Automated QA / code review | Completed with stated limitations | Build, typecheck and browser checks pass; baseline lint fails; sequential Codex review, no separate reviewer or human screen-reader test |
| Human implementation approval | Approved | Owner replied "Approved" after confirming local pilot implementation/testing on 2026-09-18 |
| Human publication approval | Not authorized | Stop at the tested local diff |

[REVIEWS.md](REVIEWS.md) combines the small review packet. [DEVELOPMENT-SPEC.md](DEVELOPMENT-SPEC.md) records the approved contract; [IMPLEMENTATION-PLAN.md](IMPLEMENTATION-PLAN.md) preserves the plan. See [IMPLEMENTATION-REPORT.md](IMPLEMENTATION-REPORT.md) for results and local testing instructions.
