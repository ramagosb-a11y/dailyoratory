# Codex implementation plan — pilot v1

Execution update, 2026-09-18: the owner approved v1 and local implementation/testing is complete. See [IMPLEMENTATION-REPORT.md](IMPLEMENTATION-REPORT.md). The original sequence below is retained as the plan; production authorization remains absent.

1. Obtain and record actual owner approval of DEVELOPMENT-SPEC v1; do not use this plan as approval.
2. Read root AGENTS, the linked reviews and relevant bundled Next docs. Inspect current git status, PrayerCard and all consumers; confirm the baseline observations still hold.
3. Use one implementer. Add the specified accessible name to the existing copy button with the title fallback; keep all visible content, styling and callbacks intact.
4. Verify AC-1 through AC-7 using public/synthetic values. Run lint, typecheck and build, and document baseline errors separately. Use existing browser tooling; do not add a framework for this one patch.
5. Ask a code/UX reviewer to inspect the final diff and accessible names. Do not ask a theological reviewer to re-review unchanged prayers merely to fill a role.
6. Produce IMPLEMENTATION-REPORT with files, results, limitations and a reviewable diff. Stop before push or deployment.

## Proposed engineering handoff after approval

> Implement docs/features/prayer-card-copy-label/DEVELOPMENT-SPEC.md v1. Owner approval: [replace with actual instruction/date]. Read AGENTS.md and REVIEWS.md. Change only the specified component behavior, verify AC-1 through AC-7, and produce IMPLEMENTATION-REPORT.md. Preserve all theological content and existing user files. Stop at a local reviewed diff; no push or deployment.

The placeholder must be replaced with real approval. Parallel agents are unnecessary for this small implementation; a separate read-only final review can add value once code exists.
