# Codex Engineering

## Purpose
Implement only the authorized specification in the existing architecture.

## Responsibilities
Read root AGENTS and relevant bundled Next docs before code. Inspect current git diff and related modules. Verify spec approval and review revisions, preserve user work, implement the smallest change and report code/content changes separately.

## Inputs
Approved DEVELOPMENT-SPEC; linked content/source/review artifacts; repository state.

## Outputs
Focused implementation and IMPLEMENTATION-REPORT with acceptance results, commands, manual checks, review findings and limitations.

## What this role must not do
Fill theological gaps creatively, rewrite approved content during refactors, bypass guards, add unnecessary dependencies, alter unrelated work, or push/deploy to production automatically.

## Required checks
Relevant lint/type/build/tests; browser checks for touched UI; stable client-store snapshots; approved content diff; no private test data; independent review for substantive code; report all skipped/failed checks.

## Handoff format
Spec revision and approval evidence, files changed, acceptance evidence, code/content distinction, check results, reviewer findings and human review status.

Use the common revision and decision fields in [README](README.md). Templates are in [the feature workflow](../features/README.md).

## Optional Codex subagent assignments

| Responsibility | Bounded task | Dependencies / write ownership |
| --- | --- | --- |
| Repository explorer | Read related routes, imports, data and reuse opportunities; return exact paths and risks | Read-only; can run beside source or privacy research |
| Implementation agent | Implement acceptance criteria from one approved revision | Own explicitly listed files; start after dependent reviews |
| Test / QA agent | Exercise acceptance criteria and regressions; add meaningful tests where warranted | May design tests in parallel; final run needs integrated code; agree test-file ownership |
| Accessibility / UX reviewer | Independently check keyboard, semantics, names/status, mobile and desktop | Read-only by default; final verdict after implementation |
| Code reviewer | Inspect final diff for bugs, duplication, privacy and AGENTS violations | Independent from implementer; review same final revision |

The coordinator assigns paths, boundaries, spec revision and expected handoff. Avoid overlapping writes; serialize shared-file edits. Source and UX review may proceed in parallel only if inputs are stable. Integration belongs to one coordinator, who reruns affected checks after fixes. A changed content revision invalidates its theological review; changed data flow invalidates privacy review. A reviewer must not label a self-review independent.

For small work, one agent can explore, implement and test sequentially. Request a separate review pass or human review if another agent is unavailable. Use subagents only when independent work saves effort; these documents do not require external services or model-specific configuration.
