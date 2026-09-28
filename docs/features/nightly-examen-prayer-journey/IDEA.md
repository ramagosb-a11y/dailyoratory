# IDEA — Nightly Examen Prayer Journey

- Feature ID / owner / date: `nightly-examen-prayer-journey` / repository owner (Brent) / 2026-09-27
- Goal and user problem: Redesign `/daily-examen/nightly` as a six-step, prayer-first Catholic evening journey using the Morning Prayer module's visual language, while retaining a distinct nighttime atmosphere and making reflection/journaling optional.
- Audience and desired prayer/formation outcome: Visitors seeking a calm way to pray through gratitude, review, mercy, a realistic resolution, and surrender at day's end.
- Existing related routes, components, data and instructions: `src/app/daily-examen/nightly/page.tsx`; `src/components/daily-examen/NightlyExamenExperience.tsx` and its CSS module; `src/data/nightlyExamenContent.ts`; `src/lib/dailyExamenStorage.ts`; `src/types/dailyExamen.ts`; `src/components/morning-prayer/MorningPrayerExperience.tsx`; `src/data/morningPrayer.ts`; image and root AGENTS guidance. `/daily-examen/nightly` is already canonical and in sitemap.
- Repository revision and existing dirty files: `main`, `origin/main`, HEAD to be recorded during implementation. Pre-existing staged home Daily Readings feature packet/content; modified homepage, Morning Prayer experience, Night Prayer experience and staged home Today component; untracked home Life of Jesus, Morning Prayer personal lists and Night Prayer direct entry packets. Preserve all.
- Content change / code change / both: Both. The owner supplied six pages of new prayer/reflection copy and a proposed Confession note; route UI, privacy/data behavior, and page metadata change.
- In scope: six-page guided experience; supplied titles, explanations, prayers, reflection questions, resolutions and closing; optional journaling; per-session draft retention; unique generated/otherwise legally permitted photos; Morning Prayer-like split photo/content layout and navigation; meaningful metadata; accessibility and privacy review; preserve existing sessions/history/clear and other useful existing affordances where compatible.
- Explicit non-goals: production publication, pushing/merging, added account/backend/paid service, changing unrelated routes or dirty work, diagnosing user's sin or conscience, using photography without permission.
- Constraints (privacy, dependencies, visual identity, cost): Use existing components/styles and local architecture; no new dependency/service; keep sensitive text out of URLs, analytics, logs and network; identify localStorage limitations honestly; preserve current browser drafts/history if data schema changes; warm parchment/navy/burgundy/gold prayer visual language with a distinct night palette.
- High-risk subject matter: Confession, serious sin, repentance, mercy, act of contrition, scrupulosity/anxiety, examination of conscience; new devotional wording (not liturgical formula).
- Open owner decisions: None for the scoped copy; on 2026-09-27 the owner approved the focused page 4 revisions recommended by independent review. UX, privacy, SEO and code review must be recorded after integrated implementation.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required; complete | Canonical repo verified from workspace SOURCE_OF_TRUTH, git origin and route. Existing files and dirty tree inspected. | Oratory Lead |
| Catholic sources | Required; source review completed, focused edits owner-approved | New copy discusses Confession, contrition and serious sin. Primary Vatican sources and reviewer recommendations are in REVIEWS; owner approved focused copy revisions on 2026-09-27. | Oratory Lead; Independent Catholic Review (subagent) |
| Formation/content | Required; owner draft approved with focused page 4 revision | Six-step copy and optional prompts map to stable content IDs; revised emotion prompt is action-based. | Oratory Lead |
| Independent theology | Required; reviewed with approved revision | Separate AI reviewer found the original page 4 note incomplete/ambiguous and recommended focused edits; owner approved them. See REVIEWS. | Independent Catholic Review (subagent; AI review, not human ecclesial review) |
| UX/accessibility | Required; independent review complete | Morning Prayer-inspired split layout, reading order, labels, heading focus, reduced motion and responsive behavior reviewed; visual layout checked at mobile/tablet/desktop. Full keyboard and screen-reader interaction coverage remains documented as limited. | UX / Formation reviewer |
| Site/SEO | Required; review and local verification complete | Canonical route and sitemap retained; metadata updated; direct route, image, canonical and description verified; URL and SEO preflights pass. | Site / SEO reviewer |
| Privacy/safety | Required; independent review complete | Local draft/session mapping, field limits, explicit clear, restart, copy and analytics payload reviewed. Browser storage interaction tests remain partial to protect an existing same-day draft in the preview profile. | Privacy / Safety reviewer |
| Engineering and verification | Required | Six-page journey, image sources, state/schema, accessibility and route checks. | Codex Engineering |
| Code/diff review | Required; complete | Independent review found two P2 issues; both were resolved and reverified. Unrelated working-tree changes remain untouched. | Independent implementation reviewer |
| Human review | Required | Owner's implementation authorization is recorded in the spec; theology/editorial publication review remains separate. | Repository owner |

## Next handoff

Feature `nightly-examen-prayer-journey`, content revision 2.0. Local implementation and AI reviews are complete; check results and browser-coverage limitations are in `IMPLEMENTATION-REPORT.md`. The owner approved the page 4 recommendation and authorized local implementation. Human theological/editorial publication review remains with the repository owner before any production release. No production publication was performed.
