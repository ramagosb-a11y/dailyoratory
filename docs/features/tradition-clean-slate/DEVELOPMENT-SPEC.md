# DEVELOPMENT-SPEC — Tradition clean slate

## Identity and authorization
- Feature: tradition-clean-slate; revision 1; 2026-09-20.
- Implementation scope: approved by the owner's original numbered button instructions and final “done, remove to get a clean slate” instruction. Replacement content remains a proposal, not approved implementation.
- Production authorization: not authorized.
- Review record: REVIEWS.md; proposal: PROPOSAL.md.

## Goal, scope and content contract
Remove every screenshot-selected section from /tradition and leave a coherent starting shell. Retain existing hero theological wording and the unselected source library. Apply the Bible hero's established navy/gold, rounded-panel design; repair removed fragment destinations with existing /bible, /church-fathers and retained #tradition-resources targets. Simplify metadata to describe the actual remaining overview/resources.

Remove rendered components: WhatIsSacredTradition, TraditionNotOldCustoms, ScriptureAndTradition, ScriptureTraditionMagisterium, DepositOfFaith, BigTAndSmallTTradition, DoctrineDisciplineDevotionCustom, TraditionClassifier, WhereWeSeeTradition, TraditionEarlyChurch, ApostolicSuccession, TraditionAndMass, TraditionAndBible, TraditionFAQ, TraditionForExplorers, TraditionAndHolySpirit (including its prayer), TraditionStudyPath, TraditionTimeline, TraditionDailyLife, RelatedTraditionTools, TraditionCopyrightNote; also the Note box inside TraditionHero. Remove corresponding imports. Do not delete shared or historical source files.

Homepage: Morning Prayer uses exactly the same inverse outline button style as the other prayer links. The three Today actions share the same rounded, minimum-48px, softly shadowed button geometry and current seasonal primary color. Use the existing theme primary style for the saint link too, avoiding conflicting gold and hover text styles. Change visible saint label to “Learn About Today's Saint”. Preserve destinations and event payloads. Correct the saint link to the existing TrackedLink external branch so its existing new-tab intent works; no new tracking.

Allowed files: src/app/tradition/page.tsx; TraditionHero.tsx; TraditionResources.tsx; home/Hero.tsx; home/TodayInTheChurchClient.tsx; home/TodaySaintCompanionCard.tsx; home/todayActionStyles.ts; this feature packet. No new routes, dependencies, images, forms, prayers or doctrinal assertions in runtime code.

## Behavior and accessibility
Use server/static components for Tradition. Stack hero links on mobile; allow Today actions to wrap at intermediate widths. Maintain headings, landmarks, keyboard focus, existing external link protections and season themes. No loading or error states needed for static shell changes. Preserve canonical /tradition, global navigation and sitemap. No new schema, analytics events, storage or network data flows. Reversal: revert only this feature's scoped diff.

## Acceptance and verification
| ID | Required result | Verification |
| --- | --- | --- |
| AC-1 | All selected sections and both notes absent from rendered Tradition | Source diff + browser headings/text |
| AC-2 | Retained hero and resources render; hero links resolve | Browser/HTTP + fragment check |
| AC-3 | Morning Prayer background matches four peer controls | Browser computed styles |
| AC-4 | Three Today buttons share geometry/theme; requested saint label | Browser styles, label and link attributes |
| AC-5 | No horizontal overflow at mobile/desktop; visible keyboard focus | Browser 390px/1440px checks |
| AC-6 | Three recorded proposal review/refinement passes | REVIEWS.md, PROPOSAL.md |

Run lint, typecheck, build, validate:urls and seo:preflight. Record failures truthfully; browser check / and /tradition, compare /bible. Independent review of integrated diff; new proposed content gets separate independent review. Human handoff includes local URLs and limitations. No push/deployment.
