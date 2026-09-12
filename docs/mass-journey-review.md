# Holy Mass journey — local implementation review
Date: 2026-09-11. Scope: /mass only. No deployment or ecclesiastical approval.

## Inventory
24 lessons across 7 chapters; 34 original Mass parts mapped exactly once.
Essential lessons: 208–262 words each, including the original what-happens summaries.
24 distinct AI-generated images, 1536 × 1024, WebP quality 88. Final images total 3,581,146 bytes versus 50,946,427 bytes for PNG masters: 93.0% smaller.
Deployment assets: public/images/mass/journey/. Masters: output/imagegen/mass/ (not public).
Welcome reuses prepare.webp. Artwork descriptions and sources are typed in src/data/massJourney.ts.

| Step | Lesson | Artwork | Original parts |
|---|---|---|---|
| 1 | Prepare your heart | `prepare.webp` | before-mass-preparation |
| 2 | Gathered in Christ | `entrance.webp` | entrance-chant, sign-of-the-cross-and-greeting |
| 3 | Ask for mercy | `penitential.webp` | penitential-act, kyrie |
| 4 | Give glory to God | `gloria.webp` | gloria |
| 5 | Let our prayers become one | `collect.webp` | collect |
| 6 | Listen, then answer | `readings.webp` | first-reading, responsorial-psalm |
| 7 | Receive the apostolic witness | `acclamation.webp` | second-reading, gospel-acclamation |
| 8 | Hear Christ in the Gospel | `gospel.webp` | gospel |
| 9 | Let the word reach your life | `homily.webp` | homily |
| 10 | Believe with the Church; pray for the world | `creed-intercessions.webp` | creed, universal-prayer |
| 11 | Bring the gifts; offer your life | `gifts.webp` | preparation-of-the-gifts, prayer-over-the-offerings |
| 12 | Lift up your heart | `preface.webp` | preface, sanctus |
| 13 | The Church invokes the Holy Spirit | `epiclesis.webp` | epiclesis |
| 14 | Christ gives Himself | `consecration.webp` | institution-narrative-and-consecration |
| 15 | Remember and offer with Christ | `memorial.webp` | anamnesis-and-offering |
| 16 | One Church, one offering | `great-amen.webp` | intercessions-and-doxology |
| 17 | Pray as children of the Father | `our-father.webp` | lords-prayer |
| 18 | Receive and offer Christ's peace | `peace.webp` | sign-of-peace |
| 19 | Behold the Lamb of God | `lamb-of-god.webp` | fraction-rite-and-lamb-of-god, invitation-to-communion |
| 20 | Receive the living Christ | `communion.webp` | holy-communion |
| 21 | Let thanksgiving take root | `communion-silence.webp` | silence-after-communion, prayer-after-communion |
| 22 | Receive the blessing; accept the mission | `blessing.webp` | announcements, blessing-and-dismissal |
| 23 | Carry Christ's peace beyond the doors | `going-forth.webp` | recessional |
| 24 | Live the Mass | `thanksgiving.webp` | after-mass-thanksgiving |

## Four review rounds
1. Structure/design: implemented server-rendered lesson content and original Full Guide with a client navigation/preferences shell. Preserved metadata and structured data; removed nested main. Fixed chapter-ID mismatch detected in the selector. All original guide content matches HEAD after only renaming the component and main-to-div substitution.
2. Teaching/imagery: checked original summaries against GIRM, the USCCB outline, Catechism Eucharist sections and the Eucharistic-fast canon. Kept the Eucharistic Prayer one continuous prayer, explained seasonal/weekday variation, distinguished optional devotion from liturgy, and included visitors/noncommunicants and accessibility guidance. Inspected 24 illustrations; corrected entrance/recessional direction, the Host lying flat on the paten at the doxology, and the priest's posture/location during the Gloria. Images are explicitly labeled illustrative and AI-generated, with local variation noted.
3. Navigation/preservation: exercised 46 forward and 46 backward controls, both final guide actions and both overview actions, selector, resume/reset, URL selection, Back/Forward, reload, six representative legacy anchors, invalid preferences, blocked storage, quiet mode, Home, and image Close/Escape/Tab/focus restoration. Fixed modal tab containment and the no-JavaScript guide's conflict with the site's hidden-attribute CSS.
4. Visual/accessibility: screenshots at 360, 390, 768, 1440px; large text and 200% CSS zoom; reduced-motion browser context; print stylesheet/PDF. Shortened the active-lesson masthead, changed tablet to single-column, kept Continue first when controls stack, and prevented the site's dropdown overflow on this route. Reviewed default, large-text, modal, welcome, and print captures.

## Verification
- node --experimental-strip-types scripts/validate-mass-journey.mjs: 24 steps, 7 chapters, 34 unique mappings, word counts, 24 WebP metadata/dimensions, sources and exact Full Guide preservation.
- node --experimental-strip-types scripts/optimize-mass-journey.mjs --check: image optimization checks.
- scripts/check-mass-journey.cjs: complete journey browser suite, zero page runtime errors.
- scripts/check-mass-regressions.cjs: homepage, Way of the Cross, Adoration Companion, Fasting Retreat and Mass Readings routes returned successfully, no journey styling leaked into them, zero page runtime errors.
- Targeted ESLint and TypeScript checking passed.
- Production build passed with 602 generated pages and the existing rendering/client-store/image audits. The first restricted-network attempt failed only fetching existing Google Fonts; the network-enabled local retry passed.
- Full Guide remains readable with JavaScript disabled. Journey interactivity requires JavaScript.
- No new embedded Scripture or long liturgical quotations added. Original devotional prayers are identified separately.

## Sources reviewed
- [USCCB Order of Mass](https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass)
- [GIRM, including U.S. adaptations](https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html), especially 27–28, 42–90, 120–170.
- [Catechism: sacrifice, memorial and presence](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/v_the_sacramental_sacrifice_thanksgiving_memorial_presence.html), especially 1362–1377.
- [Catechism: the Paschal Banquet](https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_one/article_3/vi_the_paschal_banquet.html), especially 1385–1397.
- [Code of Canon Law, 912–919](https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html).

## Limitations
Browser checks used desktop Edge emulating the listed viewport sizes, not physical iOS/Android devices or an assistive-technology user test. The images are illustrative, not documentary photographs or a claim that every parish has identical arrangements. A priest or qualified catechist may provide an additional pastoral review before publication. The site is not an official liturgical text or an ecclesiastically approved catechism.

## Artwork direction
Use case: photorealistic-natural. Create one finished 3:2 landscape Catholic educational devotional illustration, a realistic painterly photograph with fine natural textures, not a diagram. Consistent setting: present-day Roman Catholic parish in a pale limestone Romanesque church, rounded arches, dark oak pews, freestanding pale stone altar with white linen, simple brass candlesticks and crucifix. Warm window light, navy shadows, muted ivory and gold, restrained candlelight. Modern Roman Rite, reverent and anatomically natural, understated real liturgical action. If priest present: middle-aged man with short dark graying hair, ivory chasuble with narrow gold band over white alb; no mitre. Diverse adult congregation in modest modern clothing when appropriate. No text, letters, watermark, fantasy light, glowing Hosts or supernatural visible figures. Keep meaningful action in central frame, no cropped heads or hands. This is a stand-alone illustration not UI. Scene: 

