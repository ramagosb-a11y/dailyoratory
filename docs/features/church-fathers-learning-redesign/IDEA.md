# IDEA — Church Fathers learning redesign

- Feature ID / owner / date: `church-fathers-learning-redesign` / owner: Brent / 2026-09-20
- Goal and user problem: Replace the current long Church Fathers catalogue with a focused, beginner-friendly learning experience that helps a visitor understand who the Fathers are, why they matter, and how to begin reading one of them.
- Audience and desired prayer/formation outcome: A curious newcomer or returning learner can leave with a modest, accurate orientation and one voluntary next reading; experienced readers can deliberately continue to the deeper archive.
- Existing related routes, components, data and instructions: `src/app/church-fathers/page.tsx`; `src/components/church-fathers/*`; `src/data/churchFathers.ts`, `churchFatherReadingPlan.ts`, and `churchFatherTopics.ts`; the current `/bible` route and its guided reading-path visual system; root `AGENTS.md`; `docs/agents/*`; `docs/content-publishing-checklist.md`.
- Repository revision and existing dirty files: Canonical repository confirmed by `SOURCE_OF_TRUTH.md`; origin is `ramagosb-a11y/dailyoratory`; worktree was clean at discovery. Preserve any work that appears after this packet.
- Content change / code change / both: Both. The current page body is removed and replaced; existing data remains the starting inventory, not proof of source approval.
- In scope: Keep global site chrome, `/church-fathers`, breadcrumbs, sitemap eligibility, existing inbound links, and the page's overall Daily Oratory visual language. Remove the present body stack: the existing hero, explanatory modules, four group catalogues, topic grid, reading-plan list, Mass feature, weekly feature, research-source panel, related-tool panel, and editorial note. Build one cohesive learning path in their place.
- Explicit non-goals: No new route, account, saved progress, quiz, personalization, AI answer, email capture, external API, analytics event, copied patristic quotation, new image asset, or production release. Do not delete the underlying father/topic/reading-plan records solely because this page stops rendering them; they may be reused by approved, source-checked curation.
- Constraints (privacy, dependencies, visual identity, cost): Server-rendered and static-friendly; no dependency or paid service; navy/gold/parchment visual family; mobile-first; no private input or storage; no new tracking; original concise editorial copy only unless a source and rights review approves an excerpt.
- High-risk subject matter: Patristic attribution, historical classification, doctrinal interpretation, and exact work/translation links. Current page copy and external links require a claim-by-claim review before reuse in a changed learning context.
- Open owner decisions: The owner did not name a page element to preserve after saying “remove all except.” This plan interprets it as **remove all current route body content while retaining site chrome, route, and breadcrumb**. Confirm a different retained element before implementation if that was not intended.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required | Existing route renders eleven distinct modules and uses local static data. | Oratory Lead |
| Catholic sources | Required | Redesigned orientation and any surviving father/work cards make historical and theological claims. | Catholic Sources |
| Formation/content | Required | The page changes from a directory into a learning journey. | Spiritual Formation |
| Independent theology | Required | The new sequence and summaries must not overstate patristic witness or treat it as magisterial teaching. | Independent Catholic Reviewer, separate from author |
| UX/accessibility | Required | Full visual and interaction redesign. | UX / Formation |
| Site/SEO | Required | Public page title/description, internal anchors, structured data, search copy, and page information architecture will change. | Site / SEO |
| Privacy/safety | Not applicable, subject to re-open | Planned scope has no inputs, storage, exports, APIs, or added tracking. Re-open if a quiz, note field, or progress feature is proposed. | Oratory Lead |
| Engineering and verification | Required | Route and components will change after a reviewed specification is approved. | Codex Engineering |
| Code/diff review | Required | Substantive page replacement. | Independent code reviewer |
| Human review | Required | Public formation content and visual redesign need owner review before any release. | Owner |

## Next handoff

`church-fathers-learning-redesign`; reviewed planning revision `PLAN-R1`; content/source approval is pending. Next: owner review of `DEVELOPMENT-SPEC.md`, then source-backed CONTENT and independent theology review before local implementation.
