# IDEA — Welcoming Scripture Guide

- Feature ID / owner / date: `bible-welcoming-scripture-guide` / Brent / 2026-09-19.
- Goal and user problem: Reduce the dense, Catholic-only `/bible` page to a calm, welcoming guide for anyone opening the Bible, while keeping an optional, clearly Catholic path to Mass Readings Reflections.
- Audience and desired prayer/formation outcome: New, returning, and regular Bible readers of any background should be able to choose a first passage, read it with context, understand the Bible's broad shape, and optionally use Lectio Divina or Catholic Mass reflections.
- Existing related routes, components, data and instructions: `src/app/bible/page.tsx`, `src/components/bible/*`, `src/data/biblePage.ts`, `src/data/searchIndex.ts`, `/mass` and `/reflections/mass-readings`; root `AGENTS.md`; local Next metadata guidance.
- Repository revision and existing dirty files: `5c080a52bc4dc3ef63c9f195596ad6a503f5263d`; pre-existing modifications and untracked work shown by `git status --short` must remain untouched.
- Content change / code change / both: Both — remove page modules, write original inclusive bridge copy, update metadata/search copy, and add one presentational heavenly-themed Scripture module.
- In scope: Hero CTA becomes **Mass Readings Reflections**; remove the specified Catholic-only, local-state, copy, plan, FAQ, resource, source/copyright, and ancillary sections from `/bible`; replace the Catholic practice with a gentle general reading suggestion; expand Lectio Divina and the Bible-books overview; add a non-interactive heavenly visual module using existing Mass visual language.
- Explicit non-goals: No new route, storage, analytics event, data collection, remote request, Scripture quotation, translation recommendation engine, image asset, dependency, deployment, or changes to `/mass` and `/reflections/mass-readings`.
- Constraints: Keep `/bible` static/server-rendered; use existing Tailwind tokens and Mass visual language; preserve accessibility and responsive layout; no fabricated religious source attributions.
- High-risk subject matter: Scripture-reading and Lectio Divina descriptions are devotional/formation content. The revised page must not claim Church approval, prescribe a tradition, or promise spiritual outcomes.
- Open owner decisions: None material. The owner explicitly asked for local implementation of the stated removal/reframing scope; publication remains a separate decision.

## Stage selection by Oratory Lead

| Stage | Required / not-applicable | Evidence and reason | Assigned reviewer |
| --- | --- | --- | --- |
| Repository/context | Required | Existing `/bible` is a single composition of dedicated components; current route, metadata, search entry, Mass visual patterns, and dirty state were inspected. | Oratory Lead |
| Catholic sources | Required | The change introduces a concise Lectio Divina explanation and changes Catholic positioning. No quotations will be used. | Catholic Sources reviewer |
| Formation/content | Required | New reading suggestions and expanded Lectio guidance are public formation copy. | Oratory Lead / content author |
| Independent theology | Required | An independent reviewer must check the inclusive and devotional wording against the source ledger. | Independent Catholic Reviewer |
| UX/accessibility | Required | The page journey, CTA and visual module change. | UX / Formation reviewer |
| Site/SEO | Required | Existing route metadata, structured-data descriptions, and search entry change; no route is created. | Oratory Lead using route evidence |
| Privacy/safety | Not-applicable (risk-reducing) | No new data flow. The implementation removes local tools, clipboard actions, and their associated analytics interactions from the route. | Oratory Lead |
| Engineering and verification | Required | Application code and public copy will change. | Codex Engineering |
| Code/diff review | Required | Final integrated diff needs a reviewer separate from the implementation pass. | Pending final revision |
| Human review | Required | Local implementation stops for the owner's editorial/theological review. | Owner |

## Next handoff

Feature `bible-welcoming-scripture-guide`; use content revision `BIBLE-REFRAME-CONTENT-R1` and specification revision `SPEC-R1`. Required review results are consolidated in `REVIEWS.md`; implementation is limited to the `/bible` composition, its retained components/data, page metadata/structured-data descriptions, and its search entry.
