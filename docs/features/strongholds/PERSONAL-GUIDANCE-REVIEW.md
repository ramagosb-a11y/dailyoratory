# Strongholds — personal guidance review

- Revision: 8, struggle-specific Scripture/virtues and antecedent-specific practical guidance.
- Date: 2026-10-16.
- Independent advisory reviewer: AI agent `/root/source_review`, separate from the new guidance author/implementer. The reviewer previously authored the Scripture import; that dataset received its own separate independent review in `SCRIPTURE-REVIEW.md`.
- Inspected scope: `src/data/strongholdsGuidance.ts`, current category references/triggers in `src/data/strongholds.ts`, category/state definitions in `src/lib/strongholdsState.ts`, and the existing verified local `src/data/strongholdsScripture.json` archive. No external research was conducted.
- Decision: **advisory-ready for the local draft; no required theological/pastoral wording correction found.** This is not human Catholic/editorial approval or publication authorization. Final integrated rendering, privacy behavior, and runtime tests belong to the implementing agent.

## Scripture selections and completeness

The new module contains verse-number selections and original devotional/pastoral applications, not reconstructed Bible quotations. Each selection was checked against the current category's actual `strongholdCounsel.reference` and the verified Douay-Rheims archive. All selected numbers exist within the resolved passage, with no duplicate selection numbers.

| Category | Current counsel reference | Selected source verses | Virtue invitation |
| --- | --- | --- | --- |
| Fear or anxiety | Philippians 4:6–7 | 6, 7 | Hope and prudence |
| Pride | James 4:6–8 | 6, 7, 8 | Humility |
| Anger | Ephesians 4:26–32 | 26, 27, 29, 31, 32 | Patience and gentleness |
| Lust or impurity | 1 Corinthians 6:18–20 | 18, 19, 20 | Chastity and self-control |
| Resentment | Ephesians 4:26–32 | 31, 32 | Charity and patience |
| Envy | Galatians 5:25–26 | 25, 26 | Charity and gratitude |
| Discouragement | Psalm 50, Douay-Rheims | 12, 13, 14 | Hope and fortitude |
| Desire for control | Matthew 6:25–34 | 33, 34 | Prudence and trust in God |
| Dishonesty | Ephesians 4:25 | 25 | Truthfulness and courage |
| Other | 2 Corinthians 10:5 | 5 | Prudence and charity |
| Unsure | 2 Corinthians 10:5 | 5 | Prudence and hope |

The virtue labels are practical devotional invitations, not a culpability assessment, exhaustive doctrinal classification, or a claim that each listed word appears in the selected verse. The relevant quoted passages remain source-exact through the shared helper. In particular, the Anger selection is noncontiguous and must keep an accurate comma/range label rather than imply that omitted verses were quoted; the existing helper supports this distinction.

The nine trigger records exactly match the existing UI selections: Stress, Fatigue, Loneliness, Conflict, Boredom, Memories, Uncertainty, Digital content, and Other. All include a notice, question, practical action, and planning invitation. There are 16 optional category/trigger combinations: Lust 3, Anger 3, Resentment 2, Envy 1, Fear 2, Pride 1, Control 1, Dishonesty 1, and Discouragement 2. Other and Unsure appropriately fall back to the generic selected-trigger guidance rather than fabricate a diagnosis.

## Pastoral/content findings

- Anxiety is not blamed on lack of faith. Fear guidance allows rest, support and professional care alongside prayer; it encourages safe responsibility rather than an impossible guarantee.
- Lust guidance distinguishes an unwanted thought or attraction from freely choosing to dwell on it. The practical response redirects attention and sets boundaries without instructing repeated anxious self-examination or determining guilt.
- Anger guidance acknowledges hurt/injustice and encourages truthful boundaries without contempt or retaliation. Conflict guidance explicitly provides safety/help exceptions; the anger/conflict combination permits a later conversation only if safe.
- Resentment guidance rejects excusing harm, denying hurt, forcing reconciliation, or restoring unsafe access. Justice, appropriate boundaries, and trusted counsel remain available.
- Memories are not treated as consent, guilt, or proof of a spiritual cause. The visitor need not describe or relive them, and persistent distress can lead to pastoral/professional support.
- Discouragement does not become a verdict on the person's whole life. Persistent low mood/distress is met with appropriate support, basic care, grace and hope.
- Control/uncertainty distinguish responsibility from control of outcomes or another person's freedom. Trust is not used to justify neglect of duties, safety, or care.
- Dishonesty guidance respects appropriate privacy and allows advice when truth-telling might create danger. It does not demand indiscriminate disclosure or determine sacramental standing.
- Other and Unsure are fully supported. Uncertainty need not be resolved before seeking help, and the tool explicitly does not decide whether an experience is temptation, sin, or a mental-health symptom.
- Combination-specific suggestions use the selected categories to offer possible actions. They do not establish that a trigger caused a struggle, infer supernatural origin, or classify a person as guilty. The UI must preserve the module's optional-suggestion framing.

No saint/Church quotation, new attributed teaching, or copied modern Scripture translation was added. The existing independent Bible source verification remains applicable; the new original applications and broader Catechism/Ignatian material still share the standing human editorial publication hold.

The optional tone improvement was adopted during integration: the Discouragement question is now “What basic need or support would help me now?” This reduces self-blaming interpretation while preserving its practical purpose.

## Privacy and integration boundary

The module is pure static data plus a deterministic helper. It has no network, AI, telemetry, browser-storage, logging, or URL access. `getTriggerGuidance` filters through the fixed trigger allowlist, ignores unknown strings, and returns each allowed selection once in the fixed display order. It never interpolates a free-text answer into its returned guidance.

Category and antecedent selections are sensitive spiritual reflection data even when they use fixed labels. Keep them in provider memory by default and persist them only through the already explicit draft/history save controls. Displaying a virtue or trigger in the intentional summary does not authorize sending it to analytics, logs, URLs, error reporting, or external services. Print remains an intentional user action.

When integrating:

- Keep negative thought examples visibly identified as editable claims to examine, not truths or judgments about the visitor. Continuing, skipping and Unsure must remain available.
- Preserve source-exact Scripture/helper labels, distinct original applications, and the full supporting passage reading option.
- Present suggestions as options; do not automatically replace a visitor's written thought, resolution, or already chosen action merely because the category/trigger changes without clear UI behavior.
- Preserve Back navigation and selections; verify optional notes and category-specific examples/questions, action deduplication, compact later-step guidance, and summary/print values using synthetic data.
- Keep anxiety, memory, boundary and support safeguards visible in the relevant context rather than replacing them with unsupported diagnoses or promises of immediate relief.

## Checks actually performed

Executed a read-only Node assertion against the actual modules and JSON. Result: **PASS** for all 11 category keys, all nine trigger keys/order, complete verse-array resolution under current counsel references, no duplicate verse selections, two or three examples and three questions per category, exactly 16 specific combinations, and safe unknown/duplicate trigger handling. No test fixtures, source modules or shared implementation files were edited by this reviewer.

No browser/layout/focus/network/print/storage runtime test or application build was executed for this revision by this reviewer. Runtime results and final integrated behavior must be recorded by the implementing agent. Only this review document was authored for the assignment. No push, deployment or human approval is granted.

## Integrated source review — 2026-10-16

Independently re-read `StrongholdsPersonalGuidance.tsx`, the revised `StrongholdsJourney.tsx`, `StrongholdsHelp.tsx`, and the adopted Discouragement wording. **The personal-guidance integration introduces no new theological/pastoral wording problem; source/application safeguards are preserved.** The static copy remains advisory-ready for the local draft, with the existing human Catholic/editorial publication hold unchanged.

- Recognize shows the selected category's encouragement, virtue/practice, exact archive-derived verse selection, actions, and original prayer directly after the category controls. Later steps provide a compact reading disclosure and the relevant invitation rather than generating new text.
- Scripture is passed to the shared component as the category's actual counsel reference plus the reviewed verse-number array. Anger's noncontiguous selection therefore retains the helper's accurate labeling/full-passage behavior.
- Negative examples are explicitly described as invitations to reflect rather than statements about the visitor, and the fieldset identifies them as editable. The selected category supplies those examples and its Discern questions. Unsure and leaving the thought blank remain available.
- Trigger guidance appears after the antecedent selections. It explicitly says that a selected circumstance is a clue, not proof of causation, and that suggestions are optional. Compact Act guidance retains practical safety copy and category/trigger combinations.
- Offered Act choices combine category and selected-trigger actions through a `Set`, avoiding exact duplicate strings. Trigger changes update the suggestions without replacing written thought, prayer response, or resolution.
- The intentional summary includes the chosen virtue/practice, encouragement to remember, and selected circumstances' planning suggestions. Save still goes through explicit snapshot/history controls; the guidance component adds no new storage, network, telemetry, logging, or URL path.
- Help's Scripture step uses both the core verse and the selected category's reviewed passage/verse array. Its virtue/practice and encouragement are labeled original devotional suggestions. Immediate-help selections remain memory-only and do not replace the separate guided draft.
- The existing safety/support, unwanted-thought, non-absolution, and non-holiness-measure qualifications remain present. No category selection becomes a diagnosis, guilt decision, or supernatural verdict.

One existing interaction edge was reported separately to the implementer during this re-inspection: the Recognize category handler unconditionally cleared `draft.action`, even if the visitor clicked the already active category after returning from Act. The implementer corrected it during review, and this reviewer independently re-read the resulting source: the patch now runs only when `category !== draft.category`. The same-category click therefore preserves the existing resolution. This source finding is resolved; a genuine category change retains the existing deliberate action-reset behavior.

The implementing parent reports 17 tests, build, TypeScript, scoped lint and audits passing, plus browser checks of all 11 category verses/virtues, all nine triggers at 360px, the Lust/Digital combination, tailored examples/questions/actions, saved-summary virtue/plans, Back preservation and no errors. These are parent-reported runtime results. This reviewer did not independently execute those application/browser/build checks, and they do not substitute for the standing human editorial/publication decision.
