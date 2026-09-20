# REVIEWS — Welcoming Scripture Guide

Feature ID: `bible-welcoming-scripture-guide`
Reviewed content revision: `BIBLE-REFRAME-CONTENT-R1`
Date: 2026-09-19

## Catholic sources and independent theology review

Reviewer: `/root/theology_review` (independent of implementation/content author)
Verdict: ready for the incorporated content contract below.

| Content / claim ID | Evidence inspected | Finding and resolution |
| --- | --- | --- |
| BIB-001 | Existing `/reflections/mass-readings` route and its page copy | The retained **Mass Readings Reflections** CTA is an optional Catholic path, not a requirement for Bible reading. It uses the existing internal route and has no new theological claim. |
| BIB-002 | [USCCB Daily Readings](https://bible.usccb.org/daily-bible-reading), accessed 2026-09-19 | The retained external CTA accurately identifies USCCB daily readings. |
| BIB-003 | [Dei Verbum §§12, 22, 25](https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html), accessed 2026-09-19 | Context and literary form are presented as a gentle reading aid, not universal Catholic instruction. No quotation is used. |
| BIB-004 | Exact `BIBLE-REFRAME-CONTENT-R1` data/component copy | The hero avoids doctrinal claims such as inspiration, Catholic Tradition, or approval. The Lectio sequence is described only as a flexible practice; it makes no historical attribution, official-instruction claim, or promised spiritual effect. |
| BIB-005 | Exact `BIBLE-REFRAME-CONTENT-R1` books copy | The overview avoids counts and canon comparisons. It explicitly directs readers to their own edition’s table of contents because book names, order, and contents vary among traditions. |

No public Scripture quotation, modern prayer text, Catholic canon comparison, translation recommendation, or attribution is added. The source/copyright note is removed from page UI as requested; this does not alter off-page rights obligations.

## Formation/content decision

Content author: Oratory Lead. The final public-content contract is limited to:

- Welcoming hero: “You do not need to know everything before you begin. Choose a short passage, read it in context, notice what it says, and return regularly.”
- Five suggestion cards with optional, non-prescriptive wording.
- Six adaptable Lectio Divina movements, allowing a thought, journal note, question, or prayer, with no required devotional response.
- A four-part reading map and a tradition-aware edition note.

Verdict: ready. The exact strings are in `src/data/biblePage.ts` and the retained Bible components in the final implementation revision.

## UX / Formation review

Reviewer: `/root/ux_review`
Reviewed revision: `BIBLE-REFRAME-UX-R1`
Verdict: ready with incorporated changes.

- Reuse Mass-like radial gold/parchment hero language, existing cards, focus styles, and typography.
- Replace the 25-module catalog with a short flow: welcome, gentle reading suggestions, dark navy/gold Lectio visual pause, and an expanded Bible map.
- Use the dark Lectio panel as the requested heavenly theme module without presenting a theological claim about heavenly liturgy.
- Keep real links, keyboard focus, one `h1`, `h2` per section, stacked cards at narrow widths, and no interactive inputs or horizontal scrollers.

## Site / SEO review

Reviewer: Oratory Lead, 2026-09-19.
Verdict: ready.

- Existing canonical route `/bible`, `createPageMetadata`, WebPage/Article JSON-LD, breadcrumbs, and sitemap eligibility remain unchanged.
- The route’s metadata, Open Graph/Twitter descriptions, structured-data descriptions, keywords, and `search-bible` index copy change to accurately describe its inclusive reading-guide content.
- No route, metadata image, redirect, canonical, navigation, sitemap, schema type, private query parameter, or indexing behavior is introduced.
- Validate with `npm run validate:urls` and `npm run seo:preflight`; inspect the rendered route metadata locally.

## Privacy / Safety review

Reviewer: Oratory Lead, 2026-09-19.
Verdict: not-applicable / risk-reducing.

The route removes local-state tools, reflection fields, clipboard, print, and their page-level interaction paths. It adds no inputs, local storage, exports, APIs, network request, personal data, or analytics event. The retained fixed links contain no personal data.

## Remaining human judgment

The owner’s request authorizes local implementation. Human editorial/theological review of the final local page remains required before any production publication.

## Visual theme review — BIBLE-THEME-R1

Reviewer: `/root/bible_theme_review` (independent of implementation)
Verdict: ready for scoped visual implementation; no blocker.

Scope: `SPEC-R3` changes presentation only relative to the completed `SPEC-R2` content addition. It preserves the complete reviewed `BIBLE-REFRAME-CONTENT-R1` and `BIBLE-BOOK-INVITATIONS-R1` copy, sources, and links. The latter deliberately added ten original book summaries, editorial prompts, and official USCCB first-passage destinations in `SPEC-R2`; none are new in `SPEC-R3`.

Review criteria:

- The hero must establish a clear first impression using the existing Mass family of navy, gold, ivory, and restrained celestial detail, while retaining strong contrast and a single visible `h1`.
- Readers must be able to see the intended sequence—begin with care, read slowly, find a book—without a large new navigation system.
- Repeated card patterns must not make every section look interchangeable: guidance, overview, and individual-book cards need distinct density and surfaces.
- The reading journey must remain usable at narrow widths, keyboard focus must remain visible, decorative shapes must be hidden from assistive technology, and no new interaction/data state may be introduced.

Implementation response: the dark reading-room hero uses decorative `aria-hidden` rings; the three route anchors are native links; suggestions, overview, and book doorway cards each use a distinct responsive treatment; all existing focus-ring styles and semantic landmarks are retained. The review specifically identified the previous visual issue as a uniform stack of parchment cards, and called the existing Lectio panel the strongest visual moment. `SPEC-R3` extends that navy/gold visual language to the page entrance while keeping Lectio as the visual centerpiece. Final visual/browser validation is recorded in the implementation report after testing.

## Book invitations — BIBLE-BOOK-INVITATIONS-R2

Reviewer: `/root/book_source_review` (independent of implementation)
Date: 2026-09-19
Verdict: ready.

The static “Choose a doorway” grid now covers all 73 books of the Catholic canon in canonical Catholic/NAB order: 46 Old Testament books (including Tobit, Judith, Wisdom, Sirach, Baruch, and 1–2 Maccabees) followed by 27 New Testament books. Esther and Daniel correctly include their Catholic additions without becoming separate book cards; the Letter of Jeremiah is included within Baruch. Each card uses a factual literary summary, an explicitly editorial “Begin here if” prompt, and a specific first-passage link. It does not quote Scripture, promise a personal answer, or add a user profile, plan, or stored progress.

The original ten-book ledger remains below. The expanded 63-book set was independently checked against the relevant [USCCB Books of the Bible index](https://www.usccb.org/bible/books-of-the-bible) and the USCCB NABRE book-introduction/first-chapter route pattern on 2026-09-19. The review found every additional summary to be a high-level original paraphrase with no doctrinal claim, Bible-text reproduction, or attributed source text. Numeric-book URL forms such as `1samuel`, `1maccabees`, `1corinthians`, `1thessalonians`, `1peter`, and `1john` were verified against the established USCCB route pattern; accessible browser checks also confirmed representative numeric routes. The USCCB bot 403 observed on two chapter fetches was treated as an access limitation, not a bad-link finding.

| Original starter book | Verified source introduction | Source-safe factual scope |
| --- | --- | --- |
| Genesis | [USCCB Genesis](https://bible.usccb.org/bible/genesis/0) | Creation, patriarchal families, promise, and the Joseph bridge to Exodus. |
| Exodus | [USCCB Exodus](https://bible.usccb.org/bible/exodus/0) | Oppression, deliverance, Sinai covenant, and wilderness journey. |
| Ruth | [USCCB Ruth](https://bible.usccb.org/bible/ruth/0) | Short, dialogue-rich story of loyalty and belonging. |
| Psalms | [USCCB Psalms](https://bible.usccb.org/bible/psalms/0) | Songs and poems with varied forms and emotional range. |
| Proverbs | [USCCB Proverbs](https://bible.usccb.org/bible/proverbs/0) | Wisdom anthology of compact sayings and poems. |
| Isaiah | [USCCB Isaiah](https://bible.usccb.org/bible/isaiah/0) | Poetic prophecy addressing holiness, ethics, upheaval, and hope. |
| Mark | [USCCB Mark](https://bible.usccb.org/bible/mark/0) | Shortest Gospel; vivid teaching, healing, passion, and resurrection narrative. |
| Luke | [USCCB Luke](https://bible.usccb.org/bible/luke/0) | First volume of Luke–Acts with a shaped Jesus narrative. |
| John | [USCCB John](https://bible.usccb.org/bible/john/0) | Literary and symbolic Gospel structured around signs and discourses. |
| Acts | [USCCB Acts](https://bible.usccb.org/bible/acts/0) | Second Luke volume; early Christian movement from Jerusalem toward Rome. |

Rights: every one of the 73 cards is an original paraphrase; no modern Bible translation, USCCB introduction text, or other source text is reproduced. The review was limited to factual framing; the “Begin here if” sentences are original editorial suggestions.

## Book context and collection navigation — BIBLE-BOOK-CONTEXT-R1

Reviewer: `/root/book_source_review` (independent of implementation)
Date: 2026-09-19
Verdict: ready.

`SPEC-R5` adds nine collection records and native collapsed background panels to the 73 existing book cards. The collection map contains every Catholic-canon book exactly once: Torah / Pentateuch, Historical Books, Wisdom and Poetry, Major Prophets, the Twelve Minor Prophets, Gospels and Acts, Pauline Letters, Hebrews and the Catholic Letters, and Revelation.

- The literary-form guidance is intentionally broad and genre-aware; it does not read narrative, poetry, prophecy, Gospel, letter, and apocalyptic literature as if they were the same kind of text.
- Time-and-setting notes are high-level and qualified. They distinguish the Torah's story setting from textual formation, avoid forcing wisdom writings into one date, acknowledge debated authorship/dating for the general letters, and direct readers not to use Revelation as a simplistic future timetable.
- The new copy makes no doctrinal promise, private-revelation claim, supersessionist assertion, or reproduced source text. It retains the prior Catholic-canon decisions for Esther, Daniel, and Baruch.
- Each native disclosure gives the same source-safe context: literary form, time/setting, up to three related in-page books, and an official USCCB book introduction. The `/1` first-passage URLs correctly map to USCCB's `/0` book-introduction routes for the card set.

## Book orientation guides — BIBLE-BOOK-ORIENTATION-R1

Reviewer: `/root/book_source_review` (independent of implementation)
Date: 2026-09-19
Verdict: ready.

`SPEC-R6` adds orientation records for all 73 book cards and shared reading-guide records for all nine canonical collections. The review confirmed that every invitation title has exactly one orientation record and every collection id has one guide.

- The guiding questions are reader prompts, not definitive theses, private-revelation claims, or promises of a personal answer.
- Key people/place lines are compact literary anchors. Catholic-canon books—including Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, Esther, and Daniel—remain naturally framed without polemic or overstatement.
- Story placement, book-shape, what-to-notice, first-visit, and careful-reading guidance retain the existing historical and literary cautions: the Torah distinguishes text formation from story setting; wisdom honors genre; letters address real communities; and Revelation is symbolic/pastoral rather than a future timetable.
- All new copy is original summary content. It includes no reproduced Scripture, study-Bible, or USCCB text, and no new schema, provider, analytics, data state, or safety risk.
