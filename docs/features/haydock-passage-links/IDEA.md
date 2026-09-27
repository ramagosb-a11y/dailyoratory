# IDEA — Daily Haydock Passage Links

- Feature ID / owner / date: `haydock-passage-links` / Brent / 2026-09-27
- Goal and user problem: Open the matching Haydock commentary chapter from each daily reading card instead of sending most readings to a generic testament menu.
- Audience and desired prayer/formation outcome: Readers exploring the day's Scripture can move directly into the relevant traditional commentary with fewer navigation steps.
- Existing related routes, components, data and instructions: `/reflections/reading-and-reflections`; `ScriptureStudyResources`; `src/lib/scriptureSourceLinks.ts`; USCCB daily reading references; Haydock 1859 site navigation.
- Repository revision and existing dirty files: `ece35706c6e534e5c692ec46050783528ea9d307` (`main`); clean at review start.
- Content change / code change / both: Code and resource-link label changes; no devotional or theological content changes.
- In scope: Verify Haydock's current chapter navigation; provide a deterministic checked-in chapter map; convert modern Psalm references to relevant Haydock/Douay chapter(s), including split Psalms 116 and 147; keep fallback links accurate and clearly labeled; verify mapped source headings.
- Explicit non-goals: Fetching source indexes at runtime or during production builds; embedding commentary text; changing daily reading selection; journal, analytics, metadata, or route changes; deployment.
- Constraints (privacy, dependencies, visual identity, cost): No new dependencies, services, or runtime network requests; Scripture references only in external URLs; preserve current card layout and existing New Advent/Douay links.
- High-risk subject matter: Not applicable; this changes navigation only and adds no theological claims or quotations.
- Open owner decisions: None for implementation; production release remains separately unauthorized.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required | Audited live page, resolver, resource component, USCCB reference data and Haydock source navigation. | Oratory Lead |
| Catholic sources | Not applicable | No Scripture/commentary text will be reproduced; external destinations are verified against the source navigation. | — |
| Formation/content | Not applicable | No prayer or theological copy changed. | — |
| Independent theology | Not applicable | No theological claim is added or changed. | — |
| UX/accessibility | Required | Fallback label and direct-link meaning affect user expectations and task flow. | UX / Formation review |
| Site/SEO | Required | External links and their destinations change; public route and metadata remain unchanged. | Site / SEO review |
| Privacy/safety | Not applicable | Only public Scripture references determine outbound links; journal data is not read or sent. | — |
| Engineering and verification | Required | Mapping, Psalm numbering and source targets require implementation and automated checks. | Codex Engineering |
| Code/diff review | Required | Mapping generation and source URL behavior need an independent review. | Codex Engineering reviewer |
| Human review | Required | Owner approved proposed solution after review on 2026-09-27. | Owner |

## Next handoff

Feature ID `haydock-passage-links`, revision 1. UX and engineering review evidence is in `REVIEWS.md`. The owner replied “Approved.” on 2026-09-27 to the recommendation to map Psalm 25 directly, use a checked-in Haydock chapter map with a transparent fallback, and audit Psalm numbering edge cases. Implement locally; stop before commit, push, or deployment.
