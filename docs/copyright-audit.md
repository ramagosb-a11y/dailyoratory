# Daily Oratory Copyright-Risk Audit

Date: 2026-05-16

This practical audit is not legal advice. It identifies copyright, licensing, attribution, and provenance risks found in the Daily Oratory repository and recommends operational fixes for the site owner.

## Executive Summary

Daily Oratory is mostly built from original product copy, local data records, and external links. A remediation pass on 2026-05-16 replaced the clearest high-risk reproduced devotional text on the Divine Mercy and Eucharistic Stations pages with original Daily Oratory summaries and visible source notes. The remaining priority areas are prayer/hymn texts with unclear edition/source provenance, official liturgical/Catechism references, embedded media source review, and an image asset with no documented source.

The site generally avoids copying full USCCB daily readings and instead uses Scripture references plus official links. That is a strong practice and should remain the standard. The next priority is provenance documentation: add creator/source/license/review fields for every imported prayer, hymn, image, video, PDF, and legacy content item.

## High-Risk Findings

| Item | Files | Concern | Recommended Action |
| --- | --- | --- | --- |
| None currently identified after the 2026-05-16 remediation pass | N/A | Continue treating undocumented copied text as blocked until reviewed. | Keep using original summaries, links, and documented permissions. |

## Medium-Risk Findings

| Item | Files | Concern | Recommended Action |
| --- | --- | --- | --- |
| Adoration hymn translations | `src/components/adoration/AdorationQuietRoom.tsx` | Traditional hymn titles are old, but English translations can be modern/copyrighted. | Document exact translation source; replace with a verified public-domain translation if needed. |
| Rosary prayer text | `src/components/rosary/RosaryQuietRoom.tsx` | Traditional prayers are likely public domain, but transcription/source is undocumented. | Add source note from a public-domain/parish-approved source. |
| Divine Mercy Chaplet guide | `src/components/divine-mercy/DivineMercyQuietRoom.tsx` | Long Diary/Roman Missal excerpts were removed; remaining page uses summaries and traditional prayer references. | Keep full official Chaplet wording linked to approved sources unless permission is documented. |
| Eucharistic Stations prompts | `src/components/eucharistic-stations/EucharisticStationsQuietRoom.tsx` | Modern authored station text was replaced with original prompts; external video remains embedded. | Keep the source note and do not restore full external text without written permission. |
| St. Alphonsus Liguori Way of the Cross | `src/components/way-of-cross/WayOfCrossQuietRoom.tsx` | Author is public domain, but English translation/source needs confirmation. | Document edition/source; replace if translation is copyrighted. |
| Catechism references/paraphrases | `src/data/reflections.ts`, `src/components/eucharistic-stations/EucharisticStationsQuietRoom.tsx` | Brief references are likely manageable, but long CCC quotation should be avoided and paragraph attribution should be clear. | Keep short, cite paragraph numbers, prefer paraphrase. |
| External PDFs | `src/components/resurrection-stations/ResurrectionStationsQuietRoom.tsx` | PDF is linked externally, not copied, but public distribution should be confirmed. | Keep as external link; document source owner and access date. |
| YouTube/Vimeo embeds | `src/components/*`, `src/data/adoration.ts` | Embeds depend on upload authorization and platform availability. | Prefer official channels; document channel/source and replace questionable uploads. |

## Unknown / Needs Review

| Item | Files | Concern | Recommended Action |
| --- | --- | --- | --- |
| Chapel hero image | `public/images/chapel-library-hero.png` | No creator/source/license in repo. | Add media attribution or replace with original/licensed/public-domain image. |
| Saint biographies | `src/data/saints.ts` | Short summaries appear original, but factual source bibliography is absent. | Add source bibliography and mark as original summaries after owner confirmation. |
| Legacy content references | `src/data/contentRecords.ts`, `src/data/redirects.ts`, `docs/migration-plan.md` | Legacy ownership/provenance needs confirmation. | Confirm Daily Oratory controls or has permission to reuse legacy text. |
| User-supplied devotional additions | Several quiet-room components | Source may be typed from external pages or prayer books. | Record source/edition/permission before treating as safe. |

## Low-Risk Items

| Item | Files | Basis | Notes |
| --- | --- | --- | --- |
| Daily reflections | `src/data/reflections.ts` | Appears original and uses Scripture references, not full readings. | Added provenance metadata. |
| Product/interface copy | `src/app`, `src/components/home`, `src/components/*` | Appears original Daily Oratory copy. | Keep sourceType `original` for admin-managed content. |
| Default SVG framework icons | `public/*.svg` | Framework scaffold assets. | Keep dependency/license notices. |
| External Bible/Catechism links | `src/components/home/BibleResourcesSection.tsx` | Links externally instead of copying text. | Preferred approach. |

## Files Reviewed

- `src/app`
- `src/components`
- `src/data`
- `src/lib`
- `src/types`
- `public`
- `docs`
- `google-workspace/content-admin`
- Markdown, TypeScript, SVG, PNG, CSV, and Apps Script files present in the repository

## Content Types Reviewed

- Scripture references and readings links
- Daily/Sunday reflections
- Rosary prayers
- Divine Mercy prayers
- Adoration hymns
- Way of the Cross prayers
- Eucharistic Stations text
- Saint biographies
- Catechism references
- External PDFs
- YouTube/Vimeo embeds
- Public images and SVG icons
- Google Sheets admin schema and export scripts

## Recommended Fixes

1. Replace copied modern or uncertain devotional text with original summaries unless permission is documented.
2. Keep modern Scripture as references plus external links; use Douay-Rheims only when Scripture text is required.
3. Add source/creator/license metadata to every media asset.
4. Add source notes to all prayers and hymns, including translation source.
5. Add provenance fields to every Google Sheets content tab and block export for high-risk or do-not-publish records.
6. Maintain a `Copyright_Review` sheet for ongoing review.
7. Add owner confirmation notes to legacy imported content.

## Recommended Attribution Format

For source notes near content:

> Source: [Title or source name], by [author/creator], [license or permission status], accessed [date]. Used as [public domain / short quotation / licensed / with permission].

For original content:

> Original reflection by Daily Oratory. Scripture readings are referenced and linked externally.

For embedded videos:

> Video embedded from [platform/channel]. Content remains hosted by the source platform. Verify official upload and embedding availability.

## Recommended Replacement Sources

- Scripture text: Douay-Rheims Bible from documented public-domain source, or Scripture references with external links.
- Daily readings: link to official readings; do not copy full readings.
- Catechism: short paragraph references and paraphrases; link to official hosted Catechism.
- Hymns: documented public-domain translations or original hymn/prayer text.
- Images: original photography, properly licensed stock, public-domain art, or generated images with creator note.

## Open Questions

- Who created `public/images/chapel-library-hero.png`, and under what license?
- If the owner wants to restore the full Eucharistic Stations text credited to Fr. Jonathan Meyer, is written permission available?
- Which editions/sources were used for the Rosary, Adoration hymns, Divine Mercy, and Way of the Cross texts?
- Which legacy Brotherhood of Ascension content is owned by the site owner and safe to republish?

## Owner Confirmation Needed

- Confirm ownership or permission for all legacy content before migration.
- Confirm devotional prayer sources and editions.
- Confirm whether embedded videos are from official/authorized channels.
- Confirm whether any PDFs or PowerPoints are stored outside the repo and need the same review.
