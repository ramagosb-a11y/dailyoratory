# Strongholds — Catholic formation and source recommendations

Review date: October 16, 2026. Requested by owner: “Have the liturgical team review to see if they have any suggestion to add that can help a person fight temptation.”

Review scope: suggestions only. Parent /root coordinated two separate read-only AI role reviews: /root/temptation_formation_review (Spiritual Formation) and /root/temptation_sources_review (Catholic Sources and doctrinal safety). These are AI advisory reviews, not a priest's review, an ecclesial endorsement, or a claim that a human liturgical team has approved the module. No application code, devotional text, saved data or deployment changed during this review.

## Finding

The module already contains 11 struggle mappings, virtues, specific actions, nine circumstances with combination guidance, grace and mental-health safeguards, sacramental/devotional resources and Ignatian teaching. The best additions connect this existing material into a clearer response before, during and after temptation. Preserve 2 Corinthians 10:3–6 as the core passage; avoid making the urgent experience longer or more demanding.

## Ranked recommendations

| Priority | Addition and placement | Suggested behavior | Source and review status |
|---|---|---|---|
| 1 | “For this moment” panel at the start of Help Now; concise reassurance in Recognize | Immediately offer a brief original prayer, one safe action to leave a trigger, and one category-specific response. Keep the longer six-step flow optional. Explain that an unwanted thought or impulse is not the same as freely choosing to act on it; do not make users repeatedly classify guilt. | Reuses existing actions and safeguards. Hebrews 4:15–16 is available from the locally verified DR source. Proposed CCC 2847 explanation requires primary-source comparison before attribution. |
| 2 | “When this comes again” at Act and Grow, included in the optional summary | Reuse the selected circumstance, triggerGuidance.plan, virtue and chosen action: When [circumstance] occurs, I will [one response]. Support can remain a silent intention; collecting a person's name is unnecessary. No required writing, automatic save or success scoring. | Existing original guidance in strongholdsGuidance.ts. Matthew 26:41 is available in the verified local Bible source. Plans are devotional/practical applications, not promises of control or relief. |
| 3 | “After a fall: begin again” from Sanctuary, final Help screen and Grow | A brief hope-filled path: stop the harmful action, turn toward Christ, make an appropriate repair, and seek pastoral/sacramental guidance. Distinguish this from reassurance about unwanted intrusive thoughts. No automatic absolution, culpability score or Communion advice. | Psalm 50 and John 20:22–23 are already in the curated verified collection. Relevant CCC 1422 and grace paragraphs still need primary-source verification for new attributed teaching. |
| 4 | “How Jesus answered temptation” expandable teaching below the core passage, or in Weapons' Scripture resource | Read Matthew 4:1–11; examine a false promise, a truth from the passage, and one concrete faithful response. Complement the core Pauline passage. Do not diagnose a visitor's thoughts as satanic, promise a technique will remove them, or suggest imitating Christ's forty-day fast. | Sources reviewer inspected Matthew 4:1–11 in the local official DR source. It must be imported through the central passage/digest/alias workflow before UI quotation. |
| 5 | Optional Our Father within Weapons/Prayer or Help's prayer step | Give a familiar prayer without a prayer-library detour. Keep the traditional prayer distinct from original compositions and from the exact biblical text. Follow it with one modest act of obedience or charity. | Matthew 6:9–13 is available in the local DR source; verse13 was inspected. Existing Our Father text in prayers.ts is not by itself proof of the exact rendering's source/permission. Verify that rendering separately. CCC 2846–2849 primary text remains unresolved. |

Example original draft copy for recommendation1: “Jesus, help me turn toward You and choose the good.” Pair this with “Step away from the trigger when safe. Choose one small, responsible action.” This is proposed original devotional wording, not a quotation or approved liturgical formula.

Optional teaching support: 1 Corinthians 10:13 can help connect temptation with a concrete next response and seeking support. It must never be paraphrased as “God never gives you more than you can handle,” or used to discourage necessary help or safety.

## Existing integration that needs attention

The Strongholds Reconciliation resource and several buttons point to /confession. src/data/redirects.ts maps that path to /prayers. This conflicts with the owner's earlier request to avoid prayer-library detours and makes a direct sacramental handoff harder. A later implementation should point preparation actions to the existing /confession/examination route, with appropriate labels, instead of changing the global redirect as part of this feature.

Existing /sin-and-temptation/resisting-temptation and /sin-and-temptation/near-occasions-of-sin pages can support deeper teaching without duplicating a full guide inside Strongholds. Their source/copy status must still be considered before reuse. Existing Rosary, Adoration, Morning Prayer and Nightly Examen resources should remain available; more generic resource cards are not the main missing feature.

## Source evidence and limits

Sources reviewer freshly hashed C:/Users/brent/AppData/Local/Temp/strongholds-engDRA-20261015/engDRA_vpl.txt. SHA256: 96282bfa7c89a74680cea66fe873aafa5e7cd446407f0ff2531a723e19eee2c2. This matches the repository's pinned official Douay-Rheims American Edition of 1899 source and the existing SCRIPTURE-SOURCES.md / SCRIPTURE-REVIEW.md evidence. The reviewer inspected Matthew4:1–11 and Matthew6:13, and established the availability of Matthew26:41, Hebrews4:15–16 and 1Corinthians10:13 for local verification/import. No external theological browsing was performed.

The existing Strongholds JSON has 25 passage records and 82 verse occurrences independently checked in its recorded source review. The proposed additional passages are not yet part of that collection. New quotations require exact extraction, numbering/context review, provenance/digest records and normal independent review. No new Scripture is quoted in this recommendation document.

The Bible source evidence does not close the remaining primary-source checks for CCC2846–2849, virtues/gifts/grace paragraphs, or Spiritual Exercises313–327. Human editorial/theological approval and any traditional-prayer rendering checks remain separate. Do not infer that removing public workflow notices resolved those internal gaps.

Avoid adding prescribed food fasting, harsh penances, compulsory accountability, spiritual diagnoses or prayers presented as exorcisms. A modest optional practice such as setting aside a distracting app can be considered without implying that grace is earned. Preserve freedom, safe boundaries and appropriate pastoral/professional support.

## Recommended next scope

Implement recommendations1,2 and3 first, plus correct the Confession handoff. They give practical help in the immediate moment, preparation for recurrence and hope after a setback. Add the Gospel teaching and Our Father after the relevant source and exact-text checks. This document records recommendations only; it does not authorize implementation, commit, push or publication. Documentation-only review: application tests and builds were not rerun, because runtime files were unchanged.
