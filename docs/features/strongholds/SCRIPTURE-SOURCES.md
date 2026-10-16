# Strongholds — Douay-Rheims Scripture source audit

Audit date: 2026-10-15. Source researcher/import author: AI agent `/root/source_review`. The owner expressly requested verification that all Strongholds Scripture uses Douay-Rheims without introducing copyrighted modern-edition text. This request authorized consulting the primary Bible edition, its rights statement, and its downloadable text. It did not authorize unrelated theological browsing or production publication.

## Edition and public-domain evidence

The primary [eBible edition page](https://ebible.org/find/details.php?id=engDRA), [copyright/rights page](https://ebible.org/engDRA/copyright.htm), and the official archive's `engDRA_about.htm` identify the edition as **The Holy Bible in English, Douay-Rheims American Edition of 1899, translated from the Latin Vulgate**. The edition ID is `engDRA`; the source files are dated 2022-11-03. All three identify the Bible text as public domain and supplied courtesy of eBible.org. These primary notices were inspected on 2026-10-15.

Use the exact edition label above, or the short label **Douay-Rheims American Edition of 1899**. The source notices inspected do not establish the additional “Challoner revision” wording, so the new Strongholds source layer does not add that phrase.

The copied material is limited to Bible text from the official public-domain VPL archive. No NABRE, modern copyrighted translation, Bible commentary, introductions, footnotes, or modern prayer translation is reproduced by this import. The archive's about page explains that its VPL text excludes formatting, paragraph breaks, notes, introductions, and noncanonical section titles. Courtesy attribution is retained. The evidence supports using this identified public-domain text; it is not an absolute guarantee about every jurisdiction or unrelated site material.

## Download and integrity

Official download: [eBible engDRA VPL archive](https://ebible.org/Scriptures/engDRA_vpl.zip).

| Artifact | SHA-256 inspected on 2026-10-15 |
| --- | --- |
| Current downloaded ZIP, 4,995,856 bytes | `3ffaba207835c9cbb668bce5287f23bab10c8560f51aa74494ff7bcb8a1a7a47` |
| Extracted `engDRA_vpl.txt`, 4,982,426 bytes | `96282bfa7c89a74680cea66fe873aafa5e7cd446407f0ff2531a723e19eee2c2` |

The text hash exactly matches the previously pinned repository source in `docs/features/life-of-jesus-pilgrims-path/RESEARCH.md`, R7, and `scripts/generate-life-of-jesus-douay-rheims.mjs`. The newly downloaded ZIP differs from the earlier ZIP hash recorded there, but the extracted Bible text is byte-identical. No cause for the ZIP-container difference is inferred.

The complete source contains 35,811 distinct verse lines. Import parsing required the `BOOK CHAPTER:VERSE TEXT` format, rejected duplicate verse keys and missing/nonempty-selection failures, and checked the complete source count and text hash before extraction. Text, spelling, punctuation, capitalization, and source verse boundaries are preserved in the JSON rather than reconstructed from memory or modernized.

Temporary verification copies were acquired at `C:/Users/brent/AppData/Local/Temp/strongholds-engDRA-20261015/` (`engDRA_vpl.zip`, `engDRA_vpl.txt`, and `engDRA_about.htm`). These are a local audit cache, not application/build dependencies. Only the small curated JSON is imported by the application.

## Curated artifact and stable schema

`src/data/strongholdsScripture.json` has `schemaVersion: 1` and these top-level fields:

- `source`: exact edition/ID, primary edition/rights/download URLs, access/source dates, archive and text hashes, complete-source verse count, courtesy attribution, verification method, and independent-review status.
- `aliases`: existing feature reference labels mapped to the standardized Douay-Rheims reference key. Psalm annotations are normalized. The old modern-numbered `Mark 9:24` label maps to the corrected `Mark 9:23` with an explicit numbering note; visible content must use the corrected reference.
- `passages`: records keyed by standardized reference. Each has `reference`, `sourceReference`, `bookCode` (VPL source code), `chapter`, direct `sourceUrl`, complete `verses: [{ number, text }]`, `versesSha256`, and an optional `numberingNote`.

Each passage hash is SHA-256 of UTF-8 `JSON.stringify(verses)` in its stored array order. Source VPL book codes differ from HTML codes for some books: `MAR` → `MRK`, `JOH` → `JHN`, `PHI` → `PHP`, and `JAM` → `JAS`. The artifact's links use the HTML codes; Psalm chapter filenames have three digits.

The initial coverage audit extracted all reference properties from `strongholdCounsel`, `strongholdsSteps`, `strongholdsResources`, `strongholdsComfortVerse`, and `strongholdsFormationDays` in `src/data/strongholds.ts` and `src/data/strongholdsFormation.ts`. The original feature contained 25 distinct labels, including two annotated labels for the same Psalm. Every label resolves to a complete selected passage. The artifact contains 25 distinct passage records and 82 verse occurrences, including the extra explicit John 6:51–52 reading option. There is no partial-text or modern-edition fallback.

| Complete selected passage | Verse occurrences | Primary chapter link |
| --- | --- | --- |
| Matthew 11:28 | 1 | [eBible chapter](https://ebible.org/engDRA/MAT11.htm#V28) |
| Philippians 4:6–7 | 2 | [eBible chapter](https://ebible.org/engDRA/PHP04.htm#V6) |
| James 4:6–8 | 3 | [eBible chapter](https://ebible.org/engDRA/JAS04.htm#V6) |
| Ephesians 4:26–32 | 7 | [eBible chapter](https://ebible.org/engDRA/EPH04.htm#V26) |
| 1 Corinthians 6:18–20 | 3 | [eBible chapter](https://ebible.org/engDRA/1CO06.htm#V18) |
| Galatians 5:25–26 | 2 | [eBible chapter](https://ebible.org/engDRA/GAL05.htm#V25) |
| Psalm 50 | 21 | [eBible chapter](https://ebible.org/engDRA/PSA050.htm#V1) |
| Matthew 6:25–34 | 10 | [eBible chapter](https://ebible.org/engDRA/MAT06.htm#V25) |
| Ephesians 4:25 | 1 | [eBible chapter](https://ebible.org/engDRA/EPH04.htm#V25) |
| 2 Corinthians 10:5 | 1 | [eBible chapter](https://ebible.org/engDRA/2CO10.htm#V5) |
| Matthew 11:28–30 | 3 | [eBible chapter](https://ebible.org/engDRA/MAT11.htm#V28) |
| 2 Corinthians 10:3–6 | 4 | [eBible chapter](https://ebible.org/engDRA/2CO10.htm#V3) |
| Galatians 5:22–26 | 5 | [eBible chapter](https://ebible.org/engDRA/GAL05.htm#V22) |
| James 1:22 | 1 | [eBible chapter](https://ebible.org/engDRA/JAS01.htm#V22) |
| John 15:4–5 | 2 | [eBible chapter](https://ebible.org/engDRA/JHN15.htm#V4) |
| Matthew 6:6–8 | 3 | [eBible chapter](https://ebible.org/engDRA/MAT06.htm#V6) |
| Hebrews 4:12–13 | 2 | [eBible chapter](https://ebible.org/engDRA/HEB04.htm#V12) |
| Mark 9:23 | 1 | [eBible chapter](https://ebible.org/engDRA/MRK09.htm#V23) |
| John 14:15 | 1 | [eBible chapter](https://ebible.org/engDRA/JHN14.htm#V15) |
| John 13:34–35 | 2 | [eBible chapter](https://ebible.org/engDRA/JHN13.htm#V34) |
| John 20:22–23 | 2 | [eBible chapter](https://ebible.org/engDRA/JHN20.htm#V22) |
| John 6:51 | 1 | [eBible chapter](https://ebible.org/engDRA/JHN06.htm#V51) |
| Luke 2:19 | 1 | [eBible chapter](https://ebible.org/engDRA/LUK02.htm#V19) |
| Mark 6:31 | 1 | [eBible chapter](https://ebible.org/engDRA/MRK06.htm#V31) |
| John 6:51–52 | 2 | [eBible chapter](https://ebible.org/engDRA/JHN06.htm#V51) |

## Numbering and transcription findings

1. **Psalm 50:** use Douay-Rheims 50, not an unmarked modern 51. The full source selection is 50:1–21, including its initial superscription in verses 1–2. Both existing annotated Psalm labels resolve to this complete record.
2. **Faith card:** the prayer of belief associated with modern Mark 9:24 occurs at **Douay-Rheims Mark 9:23**. Douay-Rheims 9:24 begins Christ's next action addressing the unclean spirit. The application should update the Faith card's visible reference to 9:23 rather than attach an unintended verse to it. The compatibility alias is explicit, not a silent assertion that the editions number the verse identically.
3. **John 6:** Douay-Rheims 6:51 is the short living-bread sentence. The following promise and flesh-for-the-world clause are in Douay-Rheims 6:52. The JSON preserves 6:51 as requested and supplies a separately labeled complete 6:51–52 option. It never labels both source verses as 6:51.
4. **Exact source spellings:** the official VPL and official HTML both contain `exhalteth` at 2 Corinthians 10:5 and `envying on another` at Galatians 5:26. These are preserved as source transcription, not silently corrected or represented as editorial prose. Any future correction requires identifying and documenting a different verified edition/source, not changing a quotation ad hoc.

## Verification performed and limitations

- Compared every curated verse directly with its keyed verse in the complete, SHA-256-verified official VPL source during generation; missing/duplicate/empty values cause failure.
- Separately fetched all **19** distinct official eBible HTML chapters with PowerShell `Invoke-WebRequest`; every chapter returned HTTP 200. Extracted the displayed numbered verses and compared all **82** stored verse occurrences after whitespace and straight/curly quotation-mark normalization on **both** sides: **zero mismatches**. The committed JSON itself retains exact VPL strings and does not apply those HTML-display normalizations.
- Browser-search tool access failed for some otherwise valid pages (including 2 Corinthians 10 and James 4). Direct official HTTP retrieval succeeded; a search-tool access error is not treated as a broken source link. Individual verse anchors use the publisher's `V<number>` convention.
- Earlier Scripture gaps in `REVIEWS.md` describe the original no-external-research boundary. This later owner-authorized source audit closes the Bible extraction/edition/rights-evidence gaps listed in this ledger. It does **not** close CCC, Ignatian, traditional-prayer, theological-application, human editorial, or publication holds.
- Import author and source researcher are the same agent for this work. Independent exact-text/rights review was requested from a separate agent; record its actual result when returned. Source equality and public-domain evidence do not constitute human ecclesial or editorial approval.

UI integration, complete-content display, newly added test results, and runtime/privacy verification are owned by the implementing agent and must be recorded separately. No push or deployment is authorized by this audit.
