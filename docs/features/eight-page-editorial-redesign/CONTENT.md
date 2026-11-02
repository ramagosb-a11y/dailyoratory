# Content revision r1 — eight-page editorial redesign

Owner direction: Vatican-style editorial; consolidate and curate; correct dated indulgence wording and source discrepancies. This record covers /news and /indulgences. Other route authors should append their own deltas. Implementation agent: content_review. Source comparison performed November 1, 2026. Independent exact-copy review is pending; this document does not claim ecclesial or human publication approval.

## Primary source ledger

| ID | Source and exact location | Method and support | Status |
| --- | --- | --- | --- |
| IND-CCC | https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_two/article_4/x_indulgences.html — CCC 1471–1479 | Opened actual Vatican English text. Existing definition, guilt/temporal-punishment distinction, partial/plenary distinction, communion of saints and prayer for departed preserved. No new long quotations. | Source checked; exact revised UI still requires independent review. |
| IND-NORMS | https://www.vatican.va/roman_curia/tribunals/apost_penit/documents/rc_trib_appen_pro_20000129_indulgence_en.html — General Remarks 3–7 | Opened English primary text. State of grace by completion; detachment even venial; Confession; Communion; Pope’s intentions; prescribed work; ordinary once-daily plenary norm; application to self/departed. Distinguish its later historical Jubilee-2000 provisions. | Source checked for general norms. |
| IND-2025 | https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2024/05/13/240513f.html — May 13, 2024 decree, opening and final validity paragraph | Opened English decree. Its special provisions apply to the Ordinary Jubilee 2025. Limited twice-daily exception was specific to that Jubilee and conditions. | Historical, not current. |
| IND-FRANCIS | https://press.vatican.va/content/salastampa/it/bollettino/pubblico/2026/01/16/0041/00081.html — decree dated January 10, published January 16, 2026, operative final paragraphs | Opened Italian original, compared pilgrimage provision and homebound exception. Dates Jan 10, 2026–Jan 10, 2027. It explicitly calls Ordinary Jubilee 2025 concluded. English UI is original paraphrase, not an official English translation. | Source checked; independent translation/theological review pending. |

No new copied Church-document passages or reconstructed prayers. Existing prayer texts and attributions in reused modules remain unchanged. Photographic rights and captions are recorded in the separate image ledger / shared editorial image manifest.

## Exact editorial deltas requiring review

The authoritative exact r1 copy is the working-tree JSX in the listed components; review the full diff, including metadata and FAQ answers.

- `YearOfSaintFrancisIndulgenceGuide.tsx`: removes redundant work cards and associated original prayer to avoid presenting separate acts as interchangeable grants. Replaces summary with three linked paragraphs: usual conditions and application for departed; pilgrimage to a Franciscan conventual church or place dedicated/connected to Saint Francis, Jubilee rites OR suitable meditation, followed by the prescribed charity/peace prayer and Our Father/Creed/invocations; homebound provision limited to elderly, sick, carers, serious inability to leave home, spiritual union with celebrations, offering prayer/suffering/hardship, detachment and intention to fulfill three conditions as soon as possible. Dates visible; direct Italian decree link. This is the universal pilgrimage provision, not an exhaustive treatment of the decree’s separate Franciscan membership provision.
- `JubileeIndulgenceGuide.tsx`: labels concluded historical grant, removes current-plan CTA and current-opportunity framing, retains official 2025 decree. Collapsed on landing page.
- `IndulgenceFAQ.tsx`: replaces FAQ `faq-more-than-one` with ordinary once-daily rule and explicitly historical 2025 exception; makes `faq-jubilee-travel` a historical question; replaces `faq-francis-travel` with the same precise homebound condition as the source-backed guide. Other answers unchanged. Existing shared data is not silently rewritten; these source corrections apply to the displayed FAQ component.
- `PlenaryConditionsChecklist.tsx`: all six existing condition entries retained; adds prescribed-work warning and distinguishes praying for detachment from determining actual detachment. Links standing norms. Existing partial-indulgence qualification and priest/source guidance preserved.
- `CommonIndulgencedWorks.tsx`: hides out-of-date special-year works according to existing Chicago date helpers. Replaces church-visit source note with reminder that a currently valid grant’s requirements must be satisfied and 2025 provisions are historical. Underlying generic devotional descriptions unchanged.
- `/indulgences` metadata: removes stale Jubilee-2025 and time-limited Francis promotional text from metadata. New visual headings/short introductions are original site copy, not quotations or new doctrinal treatment.
- `/news`: explicitly calls page a directory. Preserves existing resource descriptions and original outbound tracked destinations. Short editorial copy separates official statements, independent reporting, and spiritual/commentary/aggregation; warns inclusion does not establish authenticity of a reported private revelation. No fabricated headlines or copied articles.

## Disposition of former landing-page sections

| Existing area | Disposition |
| --- | --- |
| Indulgence foundation/conditions | Retained visibly, original copy; redundant checklist versions removed from landing composition. |
| Partial/plenary, offering targets | Existing content in optional disclosures. |
| Full detachment comparison/steps/reflections/prayers | Removed from landing composition; existing dedicated /indulgences/detachment-from-sin route linked prominently. Components/routes retained. |
| Repeated daily routines/preparation/panels | Consolidated into visible today suggestion, conditions, common works, builder. Removed components remain available in repository; no original prayer silently rewritten. |
| Holy Souls / burial / Purgatory promotions | Compact relevant photograph card to prayers for departed; deeper teachings remain on existing routes. |
| Common works / builder | Visible primary tasks; seasonal works date-filtered; builder remains optional. |
| Francis / Jubilee | Precise dated Francis summary visible; expired 2025 grant historical disclosure. |
| FAQ / official sources / pastoral and rights notes | FAQ disclosure; authoritative source links and existing pastoral/copyright notes retained. |
| News official/reporting/spiritual source groups | All real resources retained and regrouped; local `#` placeholder omitted. Existing analytics allowlisted public resource fields preserved. |
| News future-headlines placeholder | Removed from rendered page. No feed introduced. |
| News focus/reading-plan/featured/related repetitions | Consolidated into directory categories, one optional original prayer-prompt section and four concise useful destination links. |
| News discernment | Six repetitive cards condensed into a short optional reading note, plus distinction near each source category. |
| News FAQ / source notes | Existing FAQ disclosed; copyright/source note retained. |

Principal indulgence anchor IDs retained, including visible conditions/common works/builder/today/special year targets and compatibility aliases for healing, detachment, routine and Holy Souls. Secondary kind/offering/FAQ/historical targets reside in native disclosures and need browser reveal verification.

## Builder behavior and privacy delta

Stored JSON is now validated for known work/intention enums, boolean flags, bounded string intention, valid date and complete shape. Unknown properties are stripped. Null/arrays/malformed/incomplete records never merge into React state. Expired saved special works become Other, retaining remaining notes and displaying a notice. Availability uses existing Chicago date helpers. Clear resets memory, removes storage and disables effect-driven persistence until a new intentional change, so cleared storage is not immediately recreated. Storage failures do not crash the builder; a failed clear is honestly reported. User text stays on device and is never added to telemetry or URLs. Privacy copy now states automatic browser saving, limits of clear, and separate print/clipboard copies. No prayer text or guarantee disclaimer changed.

Validation: three focused parser regression tests pass (valid round-trip/unknown stripping; malformed/non-object/incomplete records; invalid enums/types/date/length). Targeted ESLint passed for first changed-file batch. Browser clear/reload, denied storage, clipboard/print, native disclosure anchors, final source review and integration checks remain to be completed by lead/reviewer.

## Integration additions — Learn, Sacraments, and Holy Orders

Author: Oratory Lead. Revision redesign-r1. Existing doctrinal/prayer data and shared detail renderer are unchanged.

| Former area | Disposition |
| --- | --- |
| Learn: pre-H1 Bible promotion / generic SectionPage / first six resources / decorative tags | Route-owned photographic hero first. Intentional six-destination grid, Scripture actions, practical next steps, and supporting destinations. Complete original category resource list retained inside learning-library disclosure. |
| Sacraments: group cards / life map / comparison table | Group titles/descriptions and all seven original short descriptions retained in grouped photographic cards. Original life-map non-checklist paragraph retained. Grace/ordinary minister information from comparison retained in optional per-sacrament detail list. |
| Sacraments: two large grace/burial promotions | Compact destination links in “Live the grace you receive”; destinations unchanged. |
| Sacraments: journey / preparation / family / Fathers / devotion / FAQ | Journey selector and preparation links visible. Parish checklist, family and Fathers/devotion content available in named disclosures. FAQ remains visible. Parish authority retained beside preparation action. |
| Holy Orders: shared hero / repeated meaning / grace / celebration | Route-specific hero and consolidated meaning use existing sacrament data verbatim. Original one-sacrament/three-degrees copy retained. Celebration details in disclosure. No modifications to other sacrament detail pages. |
| Holy Orders: discernment / reminders / prayer / sources / related tools | Discernment steps and family guidance unchanged; vocational boundary near companion. Original vocation prayer/attribution visible. Scripture/CCC reference components retained; trusted resources/questions disclosed. Existing related tools remain compact links. General duplicated parish reminder replaced by the existing specific vocation boundary. |

New headings, navigation labels, summaries, and introductions are original editorial UI copy. They are not presented as Scripture, attributed quotations, official translations, or Church-approved text. Hero photo depicts the episcopal consecration of Pavel Konzbul, not a priestly ordination. Photo metadata supplies accurate alt text. Historical chrismatory is symbolic imagery for Anointing, not a depiction of its administration.

Integration privacy addition: the indulgence builder now announces clipboard success/failure and unavailable/invalid storage; no sensitive data is transmitted. Clear failure distinguishes resetting in-memory state from removing stored data. Existing sacrament journey buttons expose pressed state to assistive technology.
