# DEVELOPMENT-SPEC — Daily Haydock Passage Links

## Identity and authorization
- Feature ID: `haydock-passage-links`
- Spec revision/date: 1 / 2026-09-27
- Status: approved-for-implementation
- Owner: Brent
- Implementation approval: owner replied “Approved.” on 2026-09-27 to the reviewed recommendation: direct Psalm 25 to the matching Haydock chapter; use a static checked-in chapter map and a transparent fallback; audit Psalter numbering boundaries.
- Required review artifacts and reviewed revisions: `REVIEWS.md`, revision 1 (UX / Formation and Codex Engineering independent reviews; Site / SEO review by Oratory Lead).
- Production authorization: **not authorized**
- Re-review triggers: changes to source data meaning, resource UI beyond link labels, runtime fetching, routes, or journal/network data flow.

## Goal and scope
- Goal: Make daily reading cards open the corresponding Haydock chapter wherever a supported passage can be mapped, instead of routinely opening the testament index.
- User problem and audience: The current live Psalm 25 card opens Haydock's broad Old Testament menu even though a matching Psalm chapter exists.
- Existing related functionality and inspected evidence: `src/lib/scriptureSourceLinks.ts` has a small direct map and testament-wide fallback; `ScriptureStudyResources.tsx` renders one anchor per resource; live daily readings come from the USCCB date-matched data.
- Route/location: `/reflections/reading-and-reflections`; no route changes.
- Required existing components and contracts: Preserve `getScriptureStudyPassages` public result contract where practical and existing resource cards/mobile layout.
- New components only if necessary, with justification: None expected.
- Allowed files and dependencies: `src/lib/scriptureSourceLinks.ts`, a generated checked-in Haydock chapter map and its generator/verification script if useful, `src/components/reflections/ScriptureStudyResources.tsx` and its module CSS only if multiple chapter links require display, focused source-link checks, and this feature packet. No new dependencies.
- Explicit non-goals: No runtime fetch of Haydock indexes; no commentary text; no journal changes; no copy, date-selection, route, SEO metadata, or analytics changes; no production release.

## Content contract
- Exact approved content IDs/files/revisions: No new devotional content.
- Source requirements and verified RESEARCH references: Haydock's own OT index `https://johnblood.gitlab.io/haydock/id330.html`, NT index `https://johnblood.gitlab.io/haydock/index.html`, and their linked chapter URLs; official current Psalm 25 reference `https://bible.usccb.org/bible/readings/092726.cfm`.
- Theology/rights review and human approval evidence: Not applicable; link destinations only.
- Copy to preserve verbatim: Existing passage references and existing prayer/reflection copy.
- Code changes versus content changes: Code-only mapping and link labels.

## Behavior
- User flow: From each daily Scripture card, open the matching Haydock chapter directly when the reading is mapped. If the source supports multiple relevant chapters for a split Psalm reference, provide links to each relevant source chapter. When a direct map is unavailable, route to an appropriate index and make the extra navigation clear in the label.
- Mobile behavior: Preserve stacked resource cards and make multiple chapter targets individually easy to tap.
- Desktop behavior: Preserve existing responsive grid.
- Empty/loading/error/complete/return states: No new states. Unsupported mapping retains an explicit book/chapter index fallback.
- Accessibility requirements: Semantic external anchors, discernible names identifying chapter or verse range, visible keyboard focus, preserve new-tab `rel` protections.
- Privacy requirements: Only public reading references enter generated external links; never include journal text.
- SEO requirements: No route or metadata changes.
- Analytics requirements: No new tracking.
- Performance/rendering and compatibility constraints: Static checked-in map; deterministic generation/rendering; no external request to Haydock at runtime or production build; retain static/ISR route behavior.

## Acceptance criteria and tests
| ID | Observable required behavior | Verification method / command | Expected result |
| --- | --- | --- | --- |
| AC-1 | Psalm 25 maps to Haydock Psalm 24, the source's matching chapter. | Resolver acceptance check plus read-only source URL check. | `https://johnblood.gitlab.io/haydock/id749.html`; source title `Psalm 24`; one-based Psalm numbering is clear in UI. |
| AC-2 | Supported OT and NT book/chapter references map through the checked-in source index manifest. | Exhaustive manifest/key checks and representative direct URL title checks. | No arithmetic page-ID guessing; recognized readings link to their corresponding chapter. |
| AC-3 | Canonical book names map correctly to Haydock titles. | Alias checks for 1/2 Samuel, 1/2 Kings, Chronicles, Ezra/Nehemiah, Tobit/Sirach, and Revelation. | Chapter href belongs to the intended source book/chapter. |
| AC-4 | Psalter numbering preserves merged/split cases and verse-range-specific targets. | Boundary checks for Psalm 9/10, 113/114/115, 116:1–9 and 10–19, 117, 146, 147:1–11 and 12–20, 148, 150. | Merged references share the corresponding Vulgate chapter; split references include each applicable chapter for Haydock, Douay, and New Advent. |
| AC-5 | Unsupported references have truthful fallback labels and do not fabricate a direct destination. | Unknown book/chapter and malformed reference checks. | Correct testament/book index fallback; UI says user must choose a chapter. |
| AC-6 | The route keeps existing privacy and deployment behavior. | Build guards, route smoke and source review. | No journal data in URLs; no runtime external fetch; existing ISR/rendering audits pass. |

- Automated test scope and commands: Add focused resolver/mapping tests; `npm run validate:urls`, `npm run audit:client-stores`, `npm run build`, and focused lint. Full lint baseline has known unrelated repository errors and should be reported separately if still present.
- Manual/browser checks: Inspect `/reflections/reading-and-reflections` at about 390px and desktop; click Psalm 25 and one mapped Gospel/epistle; check multi-target Psalm cards keyboard access and target labels.
- Known baseline failures/limitations: Site source navigation is external and may be revised; mapping manifest is a snapshot and must be refreshed deliberately when upstream navigation changes.
- Code-review assignment: independent Codex Engineering review after implementation.
- Implementation sequence and dependencies: Generate/extract a static manifest from both Haydock navigation pages; implement verified resolver and verse-aware Psalm target selection; adjust resource links only if multi-target UI requires; add focused checks; inspect integrated diff.
- Reversal approach: Revert the focused mapping/resolver/UI commit; previous generic index fallback behavior can be restored without data migration.

## Definition of Done
- [x] All required reviews apply to this revision; implementation authorization recorded.
- [x] Acceptance criteria implemented; approved content preserved.
- [x] Relevant tests/lint/typecheck/build and local route check recorded truthfully.
- [x] Code/content diff reviewed, follow-up limitations documented, unrelated work preserved.
- [x] IMPLEMENTATION-REPORT complete; owner visual review requested for the concrete change.
- [ ] No automatic production publication, push or deployment.

Engineering handoff: this path + revision 1 + approval instruction dated 2026-09-27 + `REVIEWS.md` + allowed scope above. Stop at locally reviewed implementation.
