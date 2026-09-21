# GROUPED DIRECTORY R2 PLAN — Church Fathers learning redesign

Feature ID: `church-fathers-learning-redesign`
Planning revision: `R2-PLAN-01`
Date: 2026-09-21
Status: owner-approved for R2 research and local implementation; publication not authorized

## Owner request

Break down each Church Father into historically meaningful groups on `/church-fathers`.

Owner approval: 2026-09-21 message: `approved`, following presentation of this grouped-directory plan. This authorizes source research and a local implementation only after the listed review gates; it does not approve public release of unreviewed biographies, attributions, or destinations.

## Proposed public structure after review

1. **Apostolic Fathers — named individuals**
   - Clement of Rome
   - Ignatius of Antioch
   - Polycarp of Smyrna
2. **Greek and Byzantine Fathers**
   - Justin Martyr; Irenaeus of Lyons; Athanasius of Alexandria; Basil of Caesarea; Gregory of Nazianzus; Gregory of Nyssa; John Chrysostom; Cyril of Jerusalem; Cyril of Alexandria; John Damascene; Maximus the Confessor
3. **Latin Fathers**
   - Cyprian of Carthage; Hilary of Poitiers; Ambrose of Milan; Jerome; Augustine of Hippo; Leo the Great; Gregory the Great; Isidore of Seville
4. **Syriac Christian writers and Fathers**
   - Ephrem the Syrian; Aphrahat
5. **Early Christian writings to read alongside the Fathers**
   - *The Didache*; *The Shepherd of Hermas*; *Letter to Diognetus*

## Required distinctions

- The fifth group is intentionally separate: its entries are anonymous works, not people or named Church Fathers.
- Tertullian, if included later, needs a separate “Influential early Latin Christian writer” treatment with a sourced reception caveat.
- Isaac the Syrian / Isaac of Nineveh is deferred pending focused review of identity, ecclesial context, Catholic reception, title, work attribution, and reading source.
- Do not use a “Great Fathers” rank or a complete/authoritative-directory claim without separately sourced criteria.

## R2 source and content gates

Before rendering any group or card, create `RESEARCH-R2` with one row per person/work containing: standard name/title, group rationale, era/location, original background sentence, source for authorship and work title, verified direct reading URL, repository/translation information where available, access date, and link-only rights decision.

Then draft exact `CONTENT-R2` for group introductions, every card, external-link labels, and context notes. The independent Catholic Reviewer must review the exact R2 content against the ledger. UX/Formation must review semantic grouped headings, narrow-width rendering, focus order, and descriptive external-link names; Site/SEO must confirm that metadata does not promise a complete or authoritative canon.

## Review update — 2026-09-21

The owner requested the grouped directory be added to the page in a good-looking format. The independent Catholic Reviewer approved the following introduction only: `A map for further study, not a complete catalogue or a ranking. Read each writer in context, alongside Scripture and the Church's living teaching.`

**Decision: changes required before public rendering of group cards.** Each displayed membership and group label is a public historical classification and needs the focused `RESEARCH-R2` and exact `CONTENT-R2` review described above. A visual component may be drafted without rendering it, but no names, anonymous-writing classification, legacy biography, date, work, or outbound link is approved for the route yet.

## Independent Catholic Reviewer — R2 map review

**Reviewer:** `/root/theology_review`, independent of the content author
**Reviewed revisions:** `RESEARCH-R2.1` and `CONTENT-R2.1`
**Decision:** **Ready for the narrow local-rendering scope after correction.**

The listed names and the separate anonymous-writing shelf are ready as an explicitly non-exhaustive study map, not a ranking or biography directory. The Syriac heading was corrected from `Syriac Christian writers and Fathers` to `Syriac Christian writers`; the research ledger records that the source uses “Aphraates” and that “Aphrahat” is an alternate transliteration. This decision excludes biographies, dates, places, work attribution, external card links, Tertullian, Isaac the Syrian / Isaac of Nineveh, and all legacy directory claims.

## Known legacy corrections

- Do not present *Martyrdom of Polycarp* as Polycarp's work. Verify a direct reading destination for his *Letter to the Philippians* instead.
- Move Maximus from the legacy Syriac/Eastern group to Greek/Byzantine.
- Verify that Isidore, Ephrem, and Maximus lead to named primary works rather than biographies or generic indexes.
- Verify the identity, terminology, and named work for Aphrahat; verify each Ephrem attribution carefully.
- Preserve existing page-wide cautions: read contextually; no one writer settles every doctrinal question; Scripture and the Church's living teaching remain the guide.

## Implementation boundary

No runtime code, list, biography, grouping, work recommendation, outbound link, metadata claim, or production change is authorized by this plan. The live page continues to present only the source-reviewed four-door path and primary-writings area.
