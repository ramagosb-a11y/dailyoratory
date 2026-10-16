# Strongholds — independent reviews

- Feature/specification: `strongholds`, revision 1; content revision 1 in `src/data/strongholds.ts`.
- Review date: 2026-10-15.
- Reviewer: separate read-only AI agent `/root/source_review`, independent of the implementation/content author. This file is the reviewer's only requested write.
- Decision: **ready for a clearly marked local draft, with source and human editorial holds before publication**. The two implementation findings below were corrected and independently re-inspected in source.
- Limits: this is AI advisory review, not ecclesial approval, a human theological/editorial decision, or production authorization. The reviewer did not run runtime tests. Runtime command results and the implementing agent's reported browser PASS belong in `IMPLEMENTATION-REPORT.md`.

## Evidence and review boundary

Inspected the canonical repository identified in `SOURCE_OF_TRUTH.md`, root `AGENTS.md`, `docs/agents/README.md`, `docs/agents/CATHOLIC-SOURCES.md`, `docs/agents/CATHOLIC-REVIEWER.md`, and `docs/content-publishing-checklist.md`. The owner prohibited browsing additional theological material; no external theological sources were opened. Existing source URLs below are provenance recorded in the repository, not a claim of fresh remote verification.

Reviewed the stable content module; all new Strongholds route and component files; `src/lib/strongholdsState.ts`; `src/lib/strongholdsStorage.ts`; the Strongholds changes to `src/lib/analyticsPrivacy.ts` and `src/lib/sitemapEligibility.ts`; inherited `src/app/layout.tsx`, `src/components/analytics/AnalyticsPageTracker.tsx`, and `src/lib/analytics.ts`; and `scripts/strongholds.test.mjs` plus `scripts/check-strongholds-browser.cjs`.

## Catholic Sources — local research

| Source/content | Local evidence | Finding |
| --- | --- | --- |
| Douay-Rheims edition and rights | `docs/features/life-of-jesus-pilgrims-path/RESEARCH.md`, R7; `scripts/generate-life-of-jesus-douay-rheims.mjs` | Existing source research documents eBible engDRA, the public-domain Douay-Rheims American Edition of 1899, the source/access date, and archive/extracted-text SHA-256 values. The generator pins the extracted-text hash. This does not independently verify missing passages. |
| Matthew 11:28 | `src/data/companionScripture.json`; edition/verification context in `docs/adoration-companion-review.md` | The Help Now literal was compared with the local passage text: “Come to me, all you that labour, and are burdened, and I will refresh you.” Its reference and translation are accurately identified. |
| Matthew 6:25–34 | `src/data/companionScripture.json`; full Matthew 6 in `src/content/fasting-retreat-scripture.json` | Existing locally embedded Douay-Rheims passage is available. Strongholds currently uses a reference and original application rather than quotation. |
| Psalm 50 | Full Psalm in `src/content/fasting-retreat-scripture.json`; shorter record in `src/data/companionScripture.json`; `docs/fasting-retreat/review-2026-09-11.md` | Local text is available. Primary numbering is correctly Douay-Rheims Psalm 50, with modern Psalm 51 explained. |
| James 4:8 | `src/content/fasting-retreat-scripture.json`; retreat review cited above | Local verification supports verse 8, not all of James 4:6–8. No complete-range quotation should be inferred. |
| Existing grace copy | `src/data/grace.ts`, including CCC 2008–2011 references | Secondary site content is not a substitute for comparing the requested primary Catechism paragraphs. |

The pinned `engDRA_vpl.txt`/archive was not found in the canonical repository, the Ascension workspace, `$env:TEMP`, Downloads, or `C:/Users/brent/.codex` during this bounded search. No supplied primary Catechism or Spiritual Exercises text was found. The reviewer did not reconstruct missing quotations from memory or fetch replacement theological material.

Outstanding primary-source checks:

- 2 Corinthians 10:3–6, including 10:5; Philippians 4:6–7; James 4:6–7 and 1:22; Ephesians 4:25–32; 1 Corinthians 6:18–20; Galatians 5:22–26.
- CCC 2846–2849, 1812–1829, 1830–1832, and 2010–2011.
- Additional teaching-card Church references: CCC 131–133, 144, 1422, 2559, 1324, and 2678.
- Spiritual Exercises §§313–327: the fourteen first-week rules. No second-week/false-consolation claims are made; §§328–336 must remain distinct if later introduced.
- Additional Scripture references in the cards remain reference-only. This review does not claim a fresh exact-text comparison for every card reference, including Hebrews 4:12–13, Mark 9:24, John 20:22–23, and Luke 2:19.

The landing page visibly discloses the missing 2 Corinthians quotation and the source hold. Other unquoted references, original devotional applications, and prayers are clearly distinguished. Source presence, existing publication, and automated citation checks do not establish authenticity, permission, or theological approval.

## Artwork provenance

`public/images/daily-examen/IMAGE-CREDITS.md` documents all six reused images as original assets generated for Daily Oratory on 2026-09-27, with no third-party photographic source or runtime external image request:

| Strongholds step | Existing file | Documented scene |
| --- | --- | --- |
| Recognize | `presence.webp` | Quiet chapel, candle, and cross at night |
| Identify | `review.webp` | A person quietly praying in a chapel |
| Discern | `gratitude.webp` | Evening chapel light |
| Surrender | `mercy.webp` | Cross and kneeler in warm chapel light |
| Act | `resolution.webp` | Dawn beginning in a chapel |
| Grow | `surrender.webp` | Peaceful night sky through a church window |

The assets are distinct, calm, locally served, and already optimized WebPs. Their documented generated origin supports this reuse path without inventing a third-party license. Provenance does not establish theological/editorial approval. `docs/adoration-companion-artwork.md` also documents alternative original devotional assets, but Strongholds does not require new images.

## Independent Catholic and pastoral review — content revision 1

No additional substantive pastoral correction was required for the local draft. All **11** requested categories are present, including separate Anger and Resentment entries, Other, and Unsure; every category has a Scripture reference, original truth statement, original prayer, and three practical responses.

- Recognize explicitly distinguishes anxiety, unwanted thoughts, emotional distress, and mental-health symptoms from automatic temptation, sin, or spiritual failure.
- Identify labels “stronghold” a devotional metaphor and rejects diagnostic or demonic conclusions. It does not claim to identify a thought's supernatural origin.
- Discern considers the direction and fruits of choices without equating consolation/desolation with pleasant/unpleasant feelings. Its first-week summary is explicitly draft and pending primary verification. Perseverance guidance excludes remaining in danger, tolerating abuse, and refusing needed pastoral, medical, or mental-health help.
- Surrender does not promise relief or represent absolution. Original truth applications are not presented as direct Scripture quotations.
- Act preserves appropriate boundaries and does not determine mortal sin, culpability, or eligibility for Communion.
- Grow avoids earned-grace and completion-as-holiness claims. Its CCC 2010–2011 application remains identified for review.
- The Holy Spirit card addresses Him as a divine Person, and the sacramental cards direct visitors toward the Church and appropriate pastoral guidance.

The content review is therefore advisory-ready for the protected local draft, while verification of significant cited primary material and human publication review remain pending. The late addition of the verified Matthew 11:28 literal was checked against the local record; it does not close the other gaps.

## Independent implementation, privacy, and accessibility review

| Finding | Required correction | Resolution independently inspected |
| --- | --- | --- |
| P2: `StrongholdsJourney.remove(finish)` originally ended the journey only if browser-storage deletion succeeded, blocking Finish Without Saving under storage denial. | End/clear in-memory prayer independently; accurately disclose failure to remove any persisted copy and allow retry. | Corrected. `finish` now resets memory and displays the finished screen regardless of deletion result. Failure copy distinguishes the ended in-memory journey from saved data that could not be deleted. A retry control is available. |
| P2: successful landing-page deletion unmounted its focused Delete button. | Hand focus to a stable control after success. | Corrected. `SavedJourneyControls` uses a ref to focus Begin Guided Prayer. |
| Verification gap: browser checks originally listened only for `pageerror` and inspected metadata with `head.innerText()`. | Include console hydration diagnostics and inspect metadata markup/attributes. | Corrected in the script: hydration-related console messages are captured, and marker isolation inspects `head.innerHTML()`. This is source verification of coverage, not a runtime result from this reviewer. |

Other inspected boundaries:

- Shared feature-layout state keeps responses in memory while moving among Strongholds screens. Back transitions preserve responses; writing does not gate prayer.
- Save is an explicit snapshot operation. Resume validates before loading and does not enable automatic persistence. Other prayer tools' keys are not removed.
- The versioned parser bounds input and text sizes, validates category/step/field shapes, and copies known fields only. Corrupt/future records are rejected without automatic erasure. Storage denial and quota errors are caught.
- No feature response-bearing network request, AI call, API, logging, telemetry, URL, or metadata path was found. Static image requests contain no response values.
- Adding `/strongholds` to sensitive analytics paths suppresses application interaction telemetry and sensitive page titles. Inherited page views still contain sanitized static route/referrer paths; this is not a claim that every analytics request is absent. No session-replay or error-reporting collector was found in the inspected source. Remote GA property settings and enhanced-measurement configuration were not verified by this reviewer.
- Heading focus, labeled optional fields, pressed-state choices, accessible progress text, text wrapping, site focus treatment, and reduced-motion CSS are present.
- Print CSS restricts the explicit summary output and removes feature/site navigation. Physical pagination/layout requires the implementing agent's visual QA.
- Draft routes are noindex, excluded by sitemap eligibility, absent from public hub/search/navigation additions, and blocked on Vercel while `strongholdsPublished` is false. Public discovery and publication require a later reviewed change.

## Test-coverage review and handoff

The focused Node and browser scripts cover all categories, bounded transitions, optional writing, Back preservation, snapshots, resume, scoped deletion, corrupt/future/denied storage, successful-deletion focus, ending under storage denial, cross-route memory, summary printing, viewport widths, reduced-motion preference, internal links, and synthetic response isolation. Existing Morning Prayer/Nightly Examen checks are smoke checks of loading and button presence, not full guided-flow regression coverage.

The implementing agent reported an integrated browser PASS after corrections. This reviewer did not execute that browser script, run build/lint/tests, or independently inspect its generated screenshots/PDF. Record the actual commands, results, baseline failures, and visual/runtime limitations in the implementation report rather than attributing them to this review.

Next owner: implementing agent for final runtime evidence and local-preview handoff; feature owner and appropriate human Catholic/editorial reviewer for primary-source gaps, final content, and any future publication decision. No push, merge, production deployment, or human approval is granted by this file.

## Revision 3 — prototype replication, independent source/content/privacy review

Reviewed 2026-10-15 by `/root/source_review`, independently of the author, following the owner's instruction to replicate the supplied AI Studio prototype and its features. No external theological browsing was performed. This review covers stable `src/data/strongholdsFormation.ts`, `src/data/strongholdsPractice.ts`, the Sanctuary at `src/app/strongholds/page.tsx`, `StrongholdsPrayerPicker.tsx`, the revised Help/Journey, and supporting history/settings boundaries. Sanctuary remains `/strongholds`; no separate `/strongholds/sanctuary` route is implied.

**Content decision: acceptable as a protected local draft, with publication still held for primary-source verification and human editorial review. Implementation decision at this review: limited changes required for deletion focus and deletion-scope wording below.** The reviewer did not execute runtime tests or observe the external prototype; prototype fidelity is for the implementing/design reviewers to establish.

### Content, attributions, and additional source gaps

- The seven weekday reflections, prayers, actions, and fourteen rule summaries are labeled original drafts. No traditional prayer text or new direct Scripture/Church quotation is imported. The existing verified Matthew 11:28 literal remains the identified exception.
- `StrongholdsDiscernment` identifies §313 as introduction and §§314–327 as the fourteen first-week rule references, with verification and human review explicitly pending. These paragraph correspondences and summaries have not been compared with a locally available primary Exercises text. They are not publication-ready verification.
- The summaries distinguish consolation/desolation from pleasant/unpleasant feelings; rule 3 allows sorrow in love, rule 4 rejects diagnosis from symptoms alone, rule 5 retains danger/abuse/help exceptions, rule 6 rejects harmful penance, and rule 9 rejects inferring neglect or punishment from distress. Rules 12–14 use restrained original applications and do not diagnose demonic activity or guilt. Second-week §§328–336 remain distinct.
- The optional atmosphere/direction tool gives educational suggestions, not a spiritual verdict. It distinguishes harmful secrecy from privacy and healthy solitude, and never claims a supernatural source.
- The formation themes preserve responsible care, appropriate boundaries, dependence on grace, and priestly guidance for sacramental questions. Choosing weekdays does not create a required schedule, streak, score, or holiness measure.
- Additional source checks introduced by formation include Mark 6:31; CCC 1806, 302–314, and 1808. Earlier source gaps and the references repeated in the new modules remain open. Every new reflection/application remains original, not an exact paraphrase verified against those paragraphs.
- Sanctuary's Matthew 11:28 quotation matches the local eBible passage. Its 2 Corinthians invitation is visibly original application with the requested exact quotation still omitted. The draft banner, source disclosure, noindex metadata, and Vercel publication hold remain relevant to all new surfaces.

Traditional-prayer lookup was limited to repository evidence. `src/data/prayers.ts` exports `prayerLibraryItems`, with `jesus-prayer`, `memorare`, `anima-christi`, and `st-michael` records. Their available `text` is existing site content, without sufficient primary-source/license/reviewer metadata to claim freshly verified approval. `src/data/prayerPage.ts` classifies its Saint Michael entry as traditional; `src/data/morningPrayer.ts` also has that prayer. `src/data/adorationCompanion.ts` has an Anima Christi rendering with an existing USCCB source/verification note, but that English rendering differs from the library and cannot be silently substituted or treated as new reuse permission. No local Suscipe text was found.

`StrongholdsPrayerPicker` correctly presents five original short prayers under distinct intention titles and labels them original devotional drafts. It uses the real `/prayers#prayer-search` destination for the four existing traditional prayers, without fabricating individual prayer routes/anchors. Suscipe remains explicitly unquoted and pending source verification. This follows the reviewed boundary and does not imply the short original prayers are the traditional texts.

### History/settings privacy and engineering findings

The history key is `daily-oratory-strongholds-history-v1`, separate from the existing `daily-oratory-strongholds-v1` draft. `parseStrongholdsHistory` caps history at 20 entries and 480,000 serialized characters; validates unique bounded IDs, bounded parseable timestamps, and every draft through the existing parser; and copies known fields. Malformed/future history is rejected and is not silently overwritten. A full journal refuses another entry rather than silently discarding an older reflection. Save is explicit; completion alone does not persist history.

The added `fruits` field is optional when parsing existing v1 drafts and defaults to an empty array, preserving old snapshots. New arrays are bounded. Save/read/delete failure paths are caught, and Settings attempts to clear only the two Strongholds keys while also clearing current draft memory. History entries are reopened through memory, not response-bearing URLs. Theme, font size, and reduced-motion choices remain temporary provider state and are accurately described as unsaved. No new network/telemetry/AI/database boundary was found in the reviewed additions.

| Finding at revision 3 review | Required action |
| --- | --- |
| P2: `StrongholdsMyJourney.remove(entry.id)` unmounts its focused Delete This Reflection button. Successful Delete Unreadable History similarly unmounts its focused control. | Restore focus to a stable heading/status or appropriate next record after successful deletion, and retain status announcements. This is the same focus principle already applied to the landing draft deletion. |
| P2: draft deletion controls/messages still say Delete Saved Strongholds Data / Saved Strongholds data deleted, although history is now retained by those operations. Finish Without Saving also deletes only the draft snapshot. | Use draft-specific labels/messages and explicitly explain that earlier My Journey saves remain until deleted there or in Settings. Preserve the intentional distinction between ending an unsaved journey and deleting previously saved history. |

Nonblocking source-presentation recommendation: the shell wordmark currently pairs “2 Cor 10:4” with “Captive to Christ,” whereas the requested thought-captive reference is 10:5 and the landing source range is 10:3–6. Prefer the full range or appropriate reference without presenting the original slogan as a verified quotation.

Remaining verification: integrated keyboard/focus behavior after the requested corrections; both history and draft storage-denial/quota cases; full-journal behavior; old-v1 draft loading; print output within the new shell; settings dialog focus/keyboard behavior; responsive/reduced-motion results; and synthetic response isolation. Source inspection alone does not establish these runtime results. Human Catholic/editorial approval, traditional-prayer verification, and the expanded primary-source ledger remain publication holds regardless of successful technical tests.

Revision3 resolution note (parent implementation, 2026-10-15): both required P2 findings are fixed. Successful history deletion focuses the stable My Journey H1; CUA verified H1 focus and zero remaining QA articles. Draft controls now say Delete Saved Draft; success/finish copy explicitly distinguishes retained My Journey reflections. The wordmark now uses 2 Corinthians10:3–6. Independent final UX review reports no remaining material implementation issue for local owner testing. Source/human publication holds remain unchanged.

Revision 4 implementation resolution (2026-10-15): Independent comparison confirms that all 25 passages and 82 verse occurrences match the identified public-domain source. The visible Mark 9:23 correction and nonconsecutive-caption fix are implemented; final integration review passed. Bible-text verification is complete. Catechism, Ignatian, traditional-prayer, and human publication reviews remain pending. Actual checks are recorded in IMPLEMENTATION-REPORT.md. Five homepage concepts remain unselected and uninstalled.
