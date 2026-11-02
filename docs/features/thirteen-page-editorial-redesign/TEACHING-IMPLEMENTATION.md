# Teaching implementation — revision r1, November 2, 2026

Implementation author: content_review. Owner-approved thirteen-page editorial redesign; this file covers only detachment-from-sin, sacramentals, relics and councils. Independent exact-copy review is PENDING. Source comparison by the content author is not independent theological approval or ecclesial approval.

## Source ledger

Direct primary passages opened and compared in this implementation session; all revised text is original concise paraphrase or an identified pastoral/site-boundary statement. No new prayers, quotations or Scripture excerpts were composed.

| ID | Source | Location and supported use |
| --- | --- | --- |
| D1 | https://www.vatican.va/roman_curia/tribunals/apost_penit/documents/rc_trib_appen_pro_20000129_indulgence_en.html | General Remarks 2–7: prescribed work, usual conditions, full detachment even venial sin, state of grace, sacramental conditions. Do not import the later historical Jubilee-2000 provisions. |
| S1 | https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_four/article_1.html | CCC 1667–1670: Church-instituted signs, Church intercession, preparation/cooperation with grace, different from sacraments. |
| S2 | https://www.vatican.va/content/catechism/en/part_three/section_two/chapter_one/article_1/iii_you_shall_have_no_other_gods_before_me.html | CCC 2111 and 2114: superstition/external performance; worship due to God alone. |
| R1 | https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-direttorio_en.html | Directory on Popular Piety 236–237: relics of saints, objects connected to lives/bodies, reverent veneration, authenticity and commerce cautions. Opened actual text in planning and used for source comparison. |
| R2 | https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann1166-1190_en.html | Canons 1166–1171 and 1186–1190: sacramentals, reverence, relic veneration, sale prohibition. Preserved existing care/sale guidance. |
| C1 | https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib2-cann330-367_en.html | Canons 336–341: college with its head, ecumenical council, approval/confirmation/promulgation. |
| C2 | https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_en.html | Lumen gentium 25: scope and conditions of infallible teaching; not universal correctness in all personal statements. |
| P1 | Existing exact pastoral guidance in src/data/detachmentFromSin.ts (FAQ 4,6), RelicsAuthenticity, RelicsAndHealing, SacramentalsNotMagic/SpiritualProtection | Original site pastoral boundary and practical care instructions, preserved in condensed wording; not presented as a Church quotation. |

## Exact revised substantive teaching / pastoral sentences

These are the new or condensed statements in page composition, beyond unchanged nested content. All original prayers remain byte-for-byte in their existing components/data; none was silently shortened.

### Detachment from sin

D1 + P1:

> A plenary indulgence requires interior detachment from all sin, even venial sin, along with its other conditions and prescribed work. If full detachment is lacking, the indulgence may be partial rather than plenary. This site cannot judge the interior state of the soul or determine that an indulgence has been gained.

P1:

> Preparation is not a guarantee. Consult the usual conditions in the main indulgences guide and speak with a priest when unsure. If you struggle with scrupulosity, avoid repeatedly measuring your soul with anxiety and seek steady guidance from one confessor.

Optionality and framing (original site copy, no new doctrinal claim):

> A gentle guide to detachment from sin, sincere conversion, and trust in mercy. Begin with grace, rather than anxious self-measurement.

> The plan is optional. You can pray and continue reading without entering anything.

### Sacramentals

S1:

> Sacramentals are sacred signs given by the Church to help us turn ordinary life toward God. Through the Church’s intercession, they foster a readiness to receive and cooperate with grace.

S1/S2, with pastoral P1:

> Their role differs from that of the sacraments. A blessed object is not a lucky charm: it does not force God to act or guarantee protection.

> Keep Christ at the center. Let devotion lead toward prayer, charity, repentance, and the sacraments, rather than fear or obsession with evil.

Original practical guidance, condensed from existing family/home/starter material:

> For a family starting simply, a crucifix, a prayer card, or a Rosary can support a modest place of prayer at home. Teach children reverent use; keep the focus on God rather than accumulating objects.

Attribution added above retained prayers (supported by each record’s sourceType: daily-oratory):

> Original Daily Oratory devotional prayers.

### Relics

R1 + S2:

> The Church venerates the bodily remains of saints and objects associated with their lives. These signs recall the grace of Christ at work in real people and invite us to imitate their faith.

> Veneration is not worship. Worship belongs to God alone. Relics are not lucky charms, and devotion to them does not control God or guarantee healing.

P1, retained boundary:

> Daily Oratory cannot authenticate a relic. Some claims are uncertain or disputed; seek guidance from the relevant parish, shrine, religious community, or diocese.

P1, unchanged existing practical-care points consolidated:

> God is the healer. Continue appropriate medical care, and bring serious illness to prayer, the sacraments, and professional care.

R1 + existing RelicsOfChrist association language, with explicit site boundary:

> Some objects are traditionally associated with Christ’s Passion and venerated in remembrance of His saving death and Resurrection. This page does not authenticate individual objects.

Removed the unsupported author-facing Shroud subtopic and the paragraph telling an editor to “Use careful language here.” No replacement authenticity/historical assertion was introduced. Existing three traditional item labels remain under qualified association wording. Added original prayer attribution, supported by data sourceType: daily-oratory.

### Councils

C1:

> The college of bishops exercises its authority solemnly in an ecumenical council, always with its head, the Roman Pontiff. Conciliar decrees require papal approval, confirmation, and promulgation to have obligatory force.

Existing source-sensitive distinction retained from councilFaqs, expressed as study guidance:

> Doctrine concerns what the Church teaches as true; discipline concerns practical rules and structures that can sometimes change. Read each document in its historical context and according to its purpose.

C2 + retained councilFaqs qualification:

> Papal infallibility concerns particular definitive teachings on faith and morals. It does not mean the Pope is sinless or correct about everything.

The introductory 21-council count and names are unchanged existing catalog data, not a newly researched historical claim. Early-council/Creed/Trent/Vatican-I/II feature cards are navigation descriptions; dedicated Vatican-I/II routes and catalog content remain the sources of full explanations.

## Disposition

| Route | Retained visibly | Consolidated/secondary | Removed from landing composition |
| --- | --- | --- | --- |
| Detachment | Existing WhatIsDetachment definition, clear full-detachment/no-judgment condition, builder in second group, practice steps, both complete prayers, sacraments teaching, sources | Reflection/seven-day/FAQ disclosed; comparison anchored to foundation; conditions link points to full current indulgences guide; scrupulosity note visible | Duplicate comparison list, standalone second condition checklist, oversized two related promotions, large related-link catalog. No underlying data/components deleted. |
| Sacramentals | Single new concise source-linked foundation, full finder in second group, common sacramentals catalog, blessing guidance, full original prayers | Disposal with safety note, purchasing with conditional affiliate notice, purchase guidance and FAQ disclosed; home/family/starter themes merged into one short paragraph; sources retained | Separate what/versus/not-magic grids; redundant family/explorer/home/seasonal/starter/protection card stacks; related-promotion catalog. Core qualifications retained at foundation/finder. |
| Relics | Merged concise foundation, full visit tool in second group, classes/copy action, sale warning, explicit authenticity/care/no-magic boundary, complete original prayers, sources | Veneration/Scripture/Passion/Mass/authenticity/received-relic/healing/pilgrimage/FAQ guidance disclosed | Repeated overview/why/not-magic/communion-of-saints grids, standalone reliquary/family/explorer/home/history/related promotion blocks. Existing FAQ/source/visit/class content retains essential guidance. Unsupported Shroud placeholder removed from component. |
| Councils | Topic finder first, single era explorer, source-linked authority distinctions, short entry cards, full council prayer, sources | Study path and FAQ disclosed; vocabulary in one disclosure | Duplicate full static timeline and first-seven catalog; six overlapping doctrine relation grids; duplicate featured Trent/Vatican cards replaced by compact navigation to current explorer/dedicated guides; redundant daily-life/explorer/related blocks. |

All useful existing explicit anchors are retained through components or visible compatibility wrappers (notably what-is-complete-detachment, why-detachment-matters, detachment-is-and-is-not, before-seeking-an-indulgence; common-sacramentals, what-are-sacramentals; what-are-relics, classes-of-relics; councils-timeline, first-seven-councils, councils-and-creed, council-of-trent, vatican-i, vatican-ii). Prayer/tool anchors remain original. Disclosed deep content needs browser hash/keyboard validation.

## Handoff and limits

Parent owns new licensed photos/manifest, shared Editorial compact/longform support, sensitive-plan storage and selector telemetry. Existing photos in these four pages are provisional slots pending that image mapping. No commits or deployment performed.

Required integration change called out to lead: CouncilsTimelineExplorer originally rendered compact CouncilCard, omitting full teaching/source detail. The single-catalog design requires noncompact cards so all 21 councils retain original keyTeachings, descriptions and resource links. Parent owns that shared edit.

Focused ESLint for four pages and RelicsOfChrist passed before the last small paragraph/attribution edits; rerun pending in final handoff. Independent exact-copy Catholic review is still required, including new condensed paragraphs and the preserved relic-class “holy site” language. Existing publication is not proof of that language’s source fidelity. No broad rewrite of that shared component was authorized here.

Partial/plenary qualification in detachment is retained from the existing DetachmentIndulgenceConnection wording; exact new paragraph above includes it. Source comparison: Indulgentiarum doctrina norm 7 (https://www.vatican.va/content/paul-vi/en/apost_constitutions/documents/hf_p-vi_apc_01011967_indulgentiarum-doctrina.html), linked as existing standing doctrine. Independent reviewer to verify exact disposition before approval.


## Revision r2 — third-class relic definition correction

Requested by independent reviewer readings_button_review; implemented November 2, 2026. This is a narrow correction to the component summary, class data/examples/caution, and FAQ. No other teaching or UI changed in this revision.

Source directly reopened: Directory on Popular Piety, §236, https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20020513_vers-direttorio_en.html . The actual English passage identifies objects that touched saints’ bodies or tombs. It does not authorize arbitrary shrine/holy-site contact as a classification or establish authenticity of any individual item. The traditional class label remains explanatory vocabulary, not an authentication judgment.

Exact new shared definition:

> An object brought into contact with a saint's body, tomb, or relic.

RelicClasses summary now reads:

> First class: part of the saint. Second class: something used by the saint. Third class: an object brought into contact with a saint's body, tomb, or relic.

relicFaqs faq-third-class now reads:

> A third-class relic is an object brought into contact with a saint's body, tomb, or relic. Contact with an arbitrary shrine or holy site does not establish this connection. Daily Oratory does not authenticate relics.

relicsPage class-third examples now read:

- a cloth brought into contact with a saint's tomb
- a prayer card brought into contact with a saint's relic

Its caution now reads:

> Contact with an arbitrary shrine or holy site does not establish this connection. Daily Oratory does not authenticate relics. These objects should never be treated as magical protection or novelty items.

This replaces the former broad holy-site/shrine wording and unqualified generic object examples. The copied class summary uses the same shared class data via formatRelicClassesSummaryForCopy; no separately hardcoded old definition remains in that formatter. Existing no-authentication boundary made explicit rather than inferred. Independent focused recheck requested; this author does not grant its own approval.
