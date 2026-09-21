# REVIEWS — Church Fathers learning redesign

Feature ID: `church-fathers-learning-redesign`
Planning revision: `PLAN-R1`
Date: 2026-09-20
Scope: planning only; no production copy, routes, or code changed.

## Baseline evidence

- `src/app/church-fathers/page.tsx` currently renders the hero plus ten follow-on page sections. The four historical group sections present every father card before a visitor is offered a focused first lesson.
- `src/components/church-fathers/ChurchFatherCard.tsx` combines century, place, themes, starting work, external link, and related app links into every card. This is useful reference material but too dense as the principal first-time experience.
- `/bible` provides the appropriate structural precedent: an emphatic hero, a visible three-step in-page path, differentiated section surfaces, and optional deeper exploration.
- The live Church Fathers page (checked 2026-09-20) confirms the route's public promise is “Learn from the Church Fathers,” but the visible experience is primarily an extensive directory.

## Review 1 of 4 — learning journey and formation

**Finding:** The present order gives equal visual priority to explanation, a broad historical catalogue, topical browsing, a ten-item plan, and auxiliary tools. A newcomer does not get a clear first answer to “where should I begin?”

**Decision:** Replace the page body with a three-part formation path:

1. **Meet the witnesses** — a brief, source-checked orientation that distinguishes the Fathers from Scripture and from the Church's living teaching office.
2. **Follow one question** — four carefully curated learning doors: Scripture, worship and sacraments, the Church's confession of Christ, and Christian life. Each has a short original explanation, a limited set of approved witness/work pairings, and no doctrinal conclusion that exceeds its cited source.
3. **Read a first work** — a small “begin here” pathway with one first reading and a transparent external source per learner intention; the full archive remains an optional final disclosure/link area rather than the primary page.

**Formation guardrail:** No streaks, grading, required prayer response, spiritual diagnosis, or claim that reading produces a sacramental or spiritual result.

**Verdict:** Ready as a structural direction; exact public copy is pending source and independent-theology review.

## Review 2 of 4 — visual hierarchy and Bible-family fit

**Finding:** The screenshot and current `ChurchFathersHero` establish the brand colors, but the visual system becomes a repeated stack of similarly weighted cards. The Bible page makes the sequence legible without making every section look alike.

**Decision:** Use the Bible page's *principles*, not a duplicate:

- A more spacious navy “study room” hero, with restrained gold linework and decorative elements hidden from assistive technology.
- A compact numbered path directly below the hero: **1. Understand · 2. Explore a question · 3. Read a first work**.
- A parchment orientation panel, a dark/inset question explorer, and a light, editorial reading-path panel so scanning identifies the learning sequence at a glance.
- One horizontal-to-stacked responsive visual rhythm; no carousels, autoplay, or decorative image requirement.

**Verdict:** Ready. The implementation must reuse existing tokens and focus styles, preserve one `h1`, and avoid a generic wall of cards.

## Review 3 of 4 — accessibility and cognitive load

**Finding:** Current dense father cards repeat several classes of information and links, creating a long tab order and a high reading burden. Historical categories are useful after, rather than before, orientation.

**Decision:**

- Use semantic `nav`, `section`, headings, and short ordered steps; every in-page path item receives a clear destination.
- Keep the first view to two purposeful calls to action: choose a learning door and begin a first reading. Make the catalogue a native, closed disclosure or a clearly labeled non-primary destination.
- At approximately 390px and 200% zoom: stack all cards, keep controls at least 44px high, avoid horizontal overflow, and maintain visible focus. Decorations receive `aria-hidden="true"`.
- Do not hide critical theological caveats inside a disclosure; context must precede each external reading link.

**Verdict:** Ready, with browser/keyboard/zoom validation required after implementation.

## Review 4 of 4 — content integrity, sources, and discovery

**Finding:** Existing `churchFathers.ts`, `churchFatherTopics.ts`, and `churchFatherReadingPlan.ts` contain numerous historical summaries, topic statements, recommended works, and New Advent/CCEL links. Existing publication is not source certification. The current page metadata promises an accessible learning experience, but no structured data is emitted at the route level.

**Decision:**

- Create a claim ledger before writing the new content. For every retained or new father/work pairing, record the primary/authoritative source, exact work/section where feasible, edition or translation, direct URL, access date, rights status, and whether the prose is original summary or quotation. No quotation is in `PLAN-R1`.
- Curation must state that the Fathers are important early Christian witnesses, not a uniform voice and not a replacement for Scripture or the Magisterium. Avoid using individual passages as shorthand proof for doctrines without suitable context.
- Keep canonical `/church-fathers`, existing breadcrumb and sitemap eligibility. Revise metadata, Open Graph/Twitter copy, search-index entry, and add only accurate existing schema helpers after the content contract is approved. No route aliases, redirects, or new tracking.
- An independent Catholic reviewer must review the exact `CONTENT-R1` against the ledger. This review cannot be self-review and is currently pending.

**Verdict:** Changes required before implementation of public copy; source/content and independent theology review are blocking gates.

## Consolidated outcome

All four content-and-visual review passes are complete. The layout direction is owner-approved for the next source-and-content phase; no theological or historical wording is approved for publication yet.

## Independent Catholic Reviewer — pre-content review

**Reviewer:** `/root/theology_review`, independent of the planned content author
**Reviewed:** `PLAN-R1`; current route, Church Fathers data/components, and the Catholic Reviewer role instructions
**Decision:** **Changes required / blocked for public-content implementation.** The learning-path architecture is sound, but no exact `CONTENT-R1` or source ledger exists yet.

### Required source-ledger coverage

The next revision must record, for every final public statement, whether it is original orientation, historical fact, interpretive summary, or quotation. It must verify criteria for calling a person a Father; historical facts and authorship; individual works, editions/translations, URLs and rights; topic-to-witness pairings; and broader claims about worship, ministry, continuity, or doctrine.

### Findings that change the content direction

- The Didache, *The Shepherd of Hermas*, and *Letter to Diognetus* are works, not individual Fathers. They need a distinct “early Christian writings” treatment if retained. See `src/data/churchFathers.ts` records `didache`, `shepherd-of-hermas`, and `letter-to-diognetus`.
- *Martyrdom of Polycarp* is an account of Polycarp's martyrdom, not a work authored by Polycarp. Do not present it as his notable work or authored first reading.
- Do not present Second Clement as securely Clement of Rome's. Omit it from a beginner path unless disputed attribution is the point of the presentation.
- Tertullian needs a reception caveat: he is an important early Latin Christian writer, but should not be a default, uncomplicated witness for Catholic doctrine or beginner guidance.
- Treat the “Apostolic Fathers” as a scholarly collection containing authors and anonymous texts, not a uniform theological category or proof of direct apostolic authorship.
- Do not reuse blanket apologetic claims such as “the faith was not invented late” or claims that the Fathers alone prove visible communion. Do not project fully developed contemporary terminology into the early centuries.
- The sensitive topic doors—Eucharist, Baptism, Confession, Marian teaching, apostolic succession, authority, and unity with a bishop—must not use isolated passages as stand-alone proof of later doctrine.

### Required beginner-facing caveats

The final content should clearly state that Scripture is the inspired word of God; the Fathers are important historical witnesses and teachers, not replacements for Scripture or the living Magisterium; no single Father settles a doctrine; early Christian disagreement, historical setting, and doctrinal development require context; and external repositories/translations are study aids to be read in context. It must not promise a spiritual or sacramental result from reading.

### Blockers before public-content implementation

1. Create `RESEARCH-R1` with claim-level primary/authoritative evidence, authorship status, validated link, edition/translation, access date, and rights status.
2. Create exact `CONTENT-R1`, including hero, orientation, question doors, caveats, and reading-path wording.
3. Review selected reading choices individually, especially disputed/anonymous texts, Tertullian, and any sacramental/doctrinal pairing.
4. Return `CONTENT-R1` and `RESEARCH-R1` to an independent Catholic Reviewer for final theological/source fidelity review.

## Independent Catholic Reviewer — content re-review

**Reviewer:** `/root/theology_review`, independent of the content author
**Reviewed revisions:** `RESEARCH-R1` and `CONTENT-R1`
**Decision:** **Ready for the reviewed public-content scope.**

The reviewer confirmed that the revised ledger separates the Didache's historical classification from its outbound reading page; restricts the external-source statement to verified accessibility and link-only use; and gives bounded beginner entry points: *On Christian Doctrine*, Book I, chapters 1–5, and *First Apology*, chapters 65–67. The exact content preserves Scripture and the Church's teaching, gives necessary historical and reception cautions, avoids quotations and doctrinal proof-texting, and makes no sacramental, disciplinary, or promised personal-spiritual claim.

This clearance is limited to the four named learning doors in `CONTENT-R1`. A newly added Father, work, quotation, archive record, doctrinal topic door, metadata claim, or external source requires targeted source/theological review.

## Requested Father-list expansion — pre-content decision

Owner request, 2026-09-21: add a list of Church Fathers with a background and online reading link for each.

**Independent Catholic Reviewer decision:** not approved for rendering until `RESEARCH-R2`, exact `CONTENT-R2`, and an independent final source/theology review are complete. The existing `churchFathers.ts` is an inventory, not a reviewed public directory. A proposed 20-card implementation was removed rather than leave public-looking, unverified biographies and source links in the local preview.

The future R2 list must verify each person's identity/title, era/place, exact original background sentence, named authentic work, authorship, direct destination, access date, and link-only rights boundary. Anonymous writings, Tertullian, Isaac the Syrian, Polycarp's currently misattributed reading, and biography-only links require distinct handling or further research.

## Independent Catholic Reviewer — topic-browser framing re-review

**Reviewer:** `/root/theology_review`, independent of the content author
**Reviewed revision:** `CONTENT-R1.1`
**Decision:** **Ready for the existing public-content scope.**

The labels Scripture, worship, Christ, and Christian life accurately describe the four previously cleared doors and introduce no historical, theological, or source-dependent claim. The topic browser remains limited to Augustine's *On Christian Doctrine*, Justin's *First Apology*, Athanasius's *On the Incarnation*, and the *Didache*, which remains explicitly identified as an early Christian writing rather than a named Father. Existing safeguards—read in context, do not make one writer carry every question, and keep the Church's living teaching as guide—remain required. This decision does not approve the separate, unreviewed Father-directory expansion.

## Independent Catholic Reviewer — primary-writings section review

**Reviewer:** `/root/theology_review`, independent of the content author
**Reviewed revision:** `CONTENT-R1.2`
**Decision:** **Ready with reviewed wording.**

The section remains within the previously cleared four-reading scope. It must be framed as `Primary writings` or `Primary texts`, never as “official writings”: there is no single official Church Fathers edition, and the external links lead to particular translations and editorial repositories. The approved card descriptions retain Athanasius's full work title, identify Justin's intended audience as imperial Roman, and identify the *Didache* as anonymous rather than as a named Father's work. Existing context and study-aid caveats remain required. The decision does not approve a broad Father-directory expansion.
