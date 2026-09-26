# RESEARCH — Life of Jesus: Pilgrim’s Path

Feature ID / content revision / researcher / date: `life-of-jesus-pilgrims-path`; R3; Catholic Sources workstream with three independent chronology review passes; 2026-09-23.

Status: **ready for local implementation; source-link and human publication verification pending**. The content basis is the owner-provided “The Life of Jesus Christ — A Comprehensive Chronological Timeline from the Annunciation to the Ascension,” SHA-256 `C0F29B81640168619381C1CB68B5E1757C760E95EFAD608CEF13C03D20E66722`. It contains 280 numbered source records. This review does not claim that every external URL has been opened or that a human ecclesial reviewer has approved the material.

## Source and claim ledger

| Claim ID | Proposed claim or use | Category | Source and exact passage policy | Verification / date | Rights / permission | Status |
| --- | --- | --- | --- | --- | --- | --- |
| SRC-BIBLE-001 | Event facts and Gospel order | Narrated history / teaching | Exact displayed verse ranges from the supplied record; official USCCB NABRE chapter page as outbound source | Record-level references and chronology audited three times, 2026-09-23; link targets require final automated/manual check | Do not reproduce modern translation text; references, short UI summaries, and outbound links only | Implementation-ready; publication link check pending |
| SRC-HARMONY-001 | Cross-Gospel placement | Traditional harmony / strong inference / uncertain order | Each record must carry visible chronology status; disputed accounts use stacked source panels preserving each Gospel’s internal order | Three review rounds, 2026-09-23 | Original editorial classification, not a quotation | Verified for R3 model |
| SRC-CCC-001 | Incarnation | Doctrine | CCC 456–483; Scripture Lk 1:35–38; Jn 1:14 | Source ranges identified; exact outbound targets and any quotation require final inspection | Prefer paragraph references/paraphrase; do not reproduce extended text | Implementation-ready; publication check pending |
| SRC-CCC-002 | Descent to the dead | Doctrine / creedal mystery | CCC 631–637; 1 Pt 3:18–20, with careful distinction from the hell of the damned | Corrected in review rounds 1–3 | Reference/paraphrase only | Verified correction; human review pending |
| SRC-CCC-003 | Forgiveness ministry | Doctrine / sacrament | Jn 20:21–23; CCC 976, 1441–1442, 1461 as applicable | Narrative wording corrected to “disciples” and ecclesial interpretation distinguished | Reference/paraphrase only | Verified correction; human review pending |
| SRC-CCC-004 | Ascension | Doctrine / liturgy | Acts 1:1–11 as timeline anchor; Lk 24:50–53 as condensed conclusion; CCC 659–667 | Corrected in rounds 1–3 | Reference/paraphrase only | Verified correction; human review pending |
| SRC-PASSION-001 | Responsibility for the Passion | Doctrine / pastoral safeguard | CCC 597–598; Gospel-specific actors | R2/R3 requirement | Short paraphrase and paragraph link; no indiscriminate blame | Required and approved for implementation |
| SRC-DEVOTION-001 | Rosary and Seven Sorrows associations | Devotion | Existing listed devotional connections; display as devotion, not narrated chronology or doctrine | Category corrected in R2 | Names/references only unless separately sourced | Implementation-ready; human review pending |
| SRC-TYPOLOGY-001 | Gen 3:15; Is 7:14; Mi 5; Davidic/Abrahamic promises | Typology / messianic fulfillment | Show Old Testament context and Christian fulfillment without pretending the Christian layer exhausts the original historical context | Corrected in R2 | Reference/paraphrase only | Implementation-ready; human review pending |
| SRC-IMAGES-001 | Major-era photographs/art | Media | Per-asset creator, source URL, date, license URL, attribution, crop, and permission record | No final production assets selected | Must be original, generated with documented provenance, licensed, or public domain | **Blocked for publication** |

## Chronology evidence taxonomy

Every source record receives exactly one chronology classification:

1. `explicit-sequence` — the cited narrative explicitly orders the record relative to adjacent records.
2. `strong-inference` — order is strongly supported by multiple textual anchors but not directly stated.
3. `traditional-harmony` — a recognized synthesis of more than one Gospel, not the only possible reconstruction.
4. `uncertain-order` — the relationship cannot be established confidently.
5. `teaching-subdivision` — a segment nested within a discourse, not a separately dated event.
6. `doctrinal-liturgical-mystery` — doctrinally affirmed but not presented as a camera-like narrated scene.
7. `editorial-summary` — canonical/editorial transition rather than a datable occurrence.

Catholic category is a separate field: `narrated-history`, `typology`, `doctrine`, `liturgy`, or `devotion`. The two taxonomies must not be collapsed.

## Required source policies

- Stable IDs are independent of display order. “280” means source records, not 280 independently datable historical events.
- Display exact book/chapter/verse ranges. Remove `utm_source=chatgpt.com` and all tracking parameters.
- USCCB fallback-link policy: if a tested official verse-fragment URL is stable, link it; otherwise link the official USCCB chapter page and show the exact verse range in the link label and adjacent text. Never claim the browser opens at an exact verse unless verified.
- All external links open safely and identify USCCB as the destination. Broken/unverified links block publication of the affected record but must fail gracefully in local UI.
- Do not reproduce full USCCB/NABRE passages. The page provides original concise summaries, references, and official links.
- Exact dates, unnamed villages, routes, the Transfiguration mountain, and appearance locations remain approximate or unlabeled unless the source supplies them.

## Three-round correction record

Round 1 identified publication-blocking false linearity in records 143–172, 193–206, and 251–264; duplicate/disputed placements; non-verse-specific links; and multiple event-level conflations. Round 2 approved the layered architecture and required infancy and Passover-calendar notes, separate Catholic categories, Passion anti-Judaism safeguards, and source-specific wording. Round 3 found five residuals and required: nonordinal unresolved clusters; the Jairus/woman intercalation; a traditional-harmony label for records 230–240; a Matthew/Acts Judas panel without invented reconciliation or destiny judgment; and doctrinal certainty of the Resurrection without depicting its unobserved instant as witnessed.

All corrections are incorporated into `CONTENT.md` and `DEVELOPMENT-SPEC.md`. Human Catholic/source review and asset-rights review remain publication gates.

## R7 Douay–Rheims full-text source audit — 2026-09-26

The owner requested complete in-page reading text for all timeline citations. Independent Catholic-source audit identified [eBible.org's `engDRA` edition page](https://ebible.org/find/details.php?id=engDRA), its [public-domain notice](https://ebible.org/engDRA/copyright.htm), and its official [VPL download](https://ebible.org/Scriptures/engDRA_vpl.zip). The edition is *The Holy Bible in English, Douay-Rheims American Edition of 1899*, source files dated 2022-11-03, text courtesy of eBible.org. The download was accessed 2026-09-24. Its ZIP SHA-256 is `D953C97B16AB4529ED119F6673C89CC928A1E790160B4F286B7AF01782997A4F`; extracted `engDRA_vpl.txt` SHA-256 is `96282BFA7C89A74680CEA66FE873AAFA5E7CD446407F0FF2531A723E19EEE2C2`. The extracted file has 35,811 verse lines across 73 book codes; the publisher's included `engDRA_about.htm` identifies the archive as Bible text only, without notes or formatting.

The timeline contains 462 displayed passage instances and 453 unique exact reference labels across 13 books. Eight unique labels have noncontiguous or cross-chapter spans. Automated extraction must fail on any missing, duplicated, extra, or empty verse rather than silently render a partial quotation. The earlier generic eBible fallback URL is unsuitable for Psalms because eBible uses three-digit Psalm filenames.

The independent versification screen compared all 100 cited chapters across the 13 books against a public-domain modern-numbered control and examined all 906 passage endpoints, with targeted official-source inspection on anomalies. It found 12 affected labels: modern Psalm 22:2 → DRA Psalm 21:2; Micah 5:1–4 → 5:2–5; Mark 4:35–41 → 4:35–40; Mark 8:34–9:1 → 8:34–39; Mark 9:2–8 → 9:1–7; Mark 9:14–29 → 9:13–28; Matthew 17:14–20 → 17:14–19; Matthew 17:22–23 → 17:21–22; John 6:22–59 → 6:22–60; John 6:60–66 → 6:61–67; John 6:67–69 → 6:68–70; and Luke 9:37–43 → DRA 9:37–44a. The Luke “44a” marker is editorial: this edition's verse 44 includes the conclusion to the cited healing and the next Passion prediction, so the embedded text stops at “he said to his disciples:” and excludes the prediction. See the official [DRA Luke 9](https://ebible.org/engDRA/LUK09.htm), [DRA Matthew 17](https://ebible.org/engDRA/MAT17.htm), [DRA Mark 9](https://ebible.org/engDRA/MRK09.htm), and [DRA John 6](https://ebible.org/engDRA/JHN06.htm). The exact source file, not a modern translation, supplies the displayed text. No further boundary mismatch was detected in the other cited chapters; that screen does not substitute for a human passage-by-passage review.

The independent source audit recommends the exact eBible edition label. eBible's own edition page does not substantiate the current “Challoner revision” phrase, so R7 removes that extra attribution from this module. Automated source equality establishes extraction fidelity, not theological suitability or human publication approval. A separate independent review of the finished content/code and qualified human Catholic/rights review remain publication gates. The internal USCCB metadata stays untouched and is not reproduced as NABRE text.
