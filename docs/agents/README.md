# Daily Oratory agent workflow

Start with [the repository audit](REPOSITORY-AUDIT.md), [root instructions](../../AGENTS.md) and [feature workflow](../features/README.md). These are responsibilities inside the existing repository, not new services. One owner can coordinate them in one task; use separate reviewers when independence matters.

| Role | Responsibility | Deliverable |
| --- | --- | --- |
| [Oratory Lead](ORATORY-LEAD.md) | Scope, stage selection, evidence and decisions | IDEA and consolidated DEVELOPMENT-SPEC |
| [Catholic Sources](CATHOLIC-SOURCES.md) | Verify sources and reuse permissions | RESEARCH claim ledger |
| [Spiritual Formation](SPIRITUAL-FORMATION.md) | Prayer flow and exact draft content | CONTENT |
| [Catholic Reviewer](CATHOLIC-REVIEWER.md) | Independent theological/source assessment | THEOLOGY-REVIEW |
| [UX / Formation](UX-FORMATION.md) | Calm accessible interaction | UX-SPEC |
| [Site / SEO](SITE-SEO.md) | Existing route fit and discovery | SEO-REVIEW |
| [Privacy / Safety](PRIVACY-SAFETY.md) | Personal information and network boundaries | PRIVACY-REVIEW |
| [Codex Engineering](CODEX-ENGINEERING.md) | Approved specification to verified change | IMPLEMENTATION-REPORT |

## Common handoff

Every role records: feature ID; spec/content revision; inspected paths and source evidence; findings with severity; decision (ready / changes-required / blocked / not-applicable); unresolved questions; next owner; reviewer identity and date. Cite exact content IDs and acceptance criteria. Never mark human approval on an owner's behalf. A role's ready decision is an advisory review, not publication permission.

Use [templates](../features/_template/IDEA.md), keeping skipped stages as explained rows in IDEA. Review findings can be combined into one file for small changes. The [pilot](../features/prayer-card-copy-label/IDEA.md) demonstrates this without shipping code.

## Approval boundaries

A specific owner instruction can approve a concrete spec; record its scope and revision rather than asking again. An idea alone is not approval of a later-expanded implementation. New doctrinal wording or material scope changes reopen affected reviews. AI review never substitutes for the owner's theological/editorial publication decision.

Stop at implementation/PR-ready. No production push, merge or deployment follows automatically. The source runbook's release steps apply only after explicit production authorization. Never auto-publish theological or devotional material.

## Parallel work when useful

See [engineering responsibilities](CODEX-ENGINEERING.md). Independent reading/review can run concurrently; content review depends on a stable content revision, and implementation depends on an approved spec. Prefer a single implementer for a small shared component. Do not split work merely to populate every role.
