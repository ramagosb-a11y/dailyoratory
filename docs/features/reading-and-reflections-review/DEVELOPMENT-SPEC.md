# DEVELOPMENT-SPEC — Reading and Reflections review page

## Identity and authorization
- Feature: `reading-and-reflections-review`
- Revision/date: v9 / 2026-09-26
- Status: approved-for-implementation; implemented-awaiting-human-review at completion.
- Owner: repository owner.
- Implementation approval: Owner explicitly requested implementation of this contract on 2026-09-26; scope is limited to a noindex review page and its local-only Scripture journal.
- v2 owner authorization: Owner requested dark-blue styling matching Step 2, a stronger notebook treatment for My Scripture Journal, a redesign of Explore Scripture Further, and web-team visual review/refinement on 2026-09-26. This authorizes local presentation changes only; preserve copy, journal data behavior, link destinations, and route/indexing boundaries.
- v3 owner authorization: Owner requested that “Read today’s Scripture intentionally.” and its explanatory reading guidance use a collapse/expand control like Prayer Before Scripture on 2026-09-26. Add an accessible collapsed-by-default disclosure; preserve all supplied guidance text and leave USCCB button and journal fields visible.
- v4 owner authorization: Owner requested a menu item for this page on 2026-09-26. Add it to the shared desktop/mobile Mass & Adoration → Mass and the Word navigation group; retain noindex and sitemap exclusion until further owner approval.
- v5 owner authorization: Owner asked whether the journal stores one entry per day and requested a daily journal immediately below the reflection plus a history button linking to a history section at the very bottom of the page. Preserve one entry per visitor-local calendar day; explain same-day updates; move the form out of Step 1 to avoid duplicate editors; place full history after all other page sections.
- v6 owner authorization: Owner requested the history button immediately under today’s reflections. Place the existing history link directly after the current Mass reflection and before the daily journal editor; keep the history itself at the bottom.
- v7 owner authorization: Owner clarified that Journal History may appear above the month calendar. Place history after Scripture resources and immediately before the month calendar; keep the history jump button below today’s reflection.
- v8 owner authorization: Owner asked to limit the notebook look to each saved-entry card shown in the reference screenshot. Keep the Journal History container plain navy, with the notebook paper/ruled styling only on individual entry cards.
- v9 owner authorization: Owner requested moving My Scripture Journal for Today above Mass Readings Reflections, labeling it Step 2 · Write · Remember · Return, and relabeling Mass Readings Reflections Step 3 · Read · Reflect · Pray.
- v10 owner authorization: Owner asked to remove the Mass Readings summary card shown within the reflection on 2026-09-26, while protecting the reflection. Hide that summary and its explanatory note on the review route only; preserve the reflection title, date/liturgical description, full reflection body, and all behavior on `/reflections/mass-readings`.
- v11 owner authorization: Owner requested that the Step 2 journal section collapse and expand on 2026-09-26. Keep it expanded by default, retain its heading and summary while collapsed, use a keyboard-accessible native disclosure, and ensure the journal-history edit action expands it before focusing today's word field.
- v12 owner authorization: Owner requested moving the **View Journal History** button directly below the **Update Today’s Journal** button on 2026-09-26. Place it inside Step 2 beneath the form actions; remove the separate button below Step 3 while keeping the history section in its existing location.
- v13 owner authorization: After reviewing the live missing-reference state and the Hobby plan implications, Owner approved a cached server-side USCCB Daily Readings RSS integration on 2026-09-26. Use only the RSS date, title, citations, and official item URL to populate passage links; do not display feed Scripture text. Keep a same-date Daily Oratory reference fallback and show the direct USCCB daily page when neither source supplies usable references. Use one daily cached fetch and no new cron job.
- Reviews: [`IDEA.md`](IDEA.md) v1; [`REVIEWS.md`](REVIEWS.md) includes the v2 UX review.
- Production authorization: **not authorized**.
- Re-review triggers: Change to prayer, doctrinal/editorial meaning, sources, external data flow, storage, or final route/canonical/indexing behavior.

## Goal and scope
- Goal: Let visitors pray with daily Mass Scripture, notice and save a word or phrase and brief response locally, and continue to established Catholic Scripture study resources.
- User problem and audience: Visitors seeking a calm, approachable daily Scripture routine and a way to keep private reflections on their device.
- Existing evidence: Canonical repo `brotherhood-of-ascension`, clean `main` at discovery. Reuse existing Next.js 16 App Router page, `CurrentMassReflectionSection`, `TodayMassReflectionFull`, `MassReadingsReflectionHero`, manuscript CSS, `MassReadingsReflection` data, `createPageMetadata`, and existing TypeScript/local-storage patterns.
- Route/location: New `/reflections/reading-and-reflections`, self-canonical and noindex; old `/reflections/mass-readings` must render and behave unchanged. Owner now authorizes a navigation item, but keep this route out of the sitemap.
- New components justified: One accessible client island for Step 1 editor/storage sync, one client island for the journal list/copy controls, and one small source-link helper for reference routing; server page remains server rendered.
- Explicit non-goals: Modify old route UI, migrate approved route, production deploy/push/merge, add auth/database/API/remote storage, log analytics, or embed lectionary/commentary content.

## Content contract
- Exact approved copy from owner-supplied attachment:
  - “Read today’s Scripture intentionally.”
  - “Expect God to speak to you through His Word. As you read, look for a word or phrase that draws your attention, stays with you, or seems meant for you today. God wants to speak to your heart.”
  - “Don’t rush. Read slowly and listen.”
  - “When a word or phrase stands out, sit with it for a moment. Then come back and write it down along with a short reflection on what God may be inviting you to notice, receive, or do.”
  - Prayer: “Come, Holy Spirit, open my heart to God’s Word. Help me discern what You are saying and return to Your Word throughout this day. Give me the grace to follow where You lead. Amen.”
- Reading questions: “What word or phrase stays with me?”, “What do I notice about God?”, “What might God be inviting me to notice, receive, or do today?”
- Sources: Owner supplied source-site links to [Douay-Rheims / DRBO](https://www.drbo.org/chapter/23003.htm), [Haydock](https://johnblood.gitlab.io/haydock/), [Haydock Confraternity index](https://johnblood.gitlab.io/haydock/confraternity/index.html), [New Advent Genesis 1](https://www.newadvent.org/bible/gen001.htm), and [HeavenBound](https://chatgpt.com/g/g-68858af32c348191bd1d17ae4c8bda79-heavenbound). Link out only; do not copy their Bible or commentary text.
- Field labels/copy: `My Word or Phrase`; placeholder `Enter the word or phrase that stayed with you…`; max 60. `My Reflection`; placeholder `What might God be inviting you to notice, receive, or do today?`; max 500.
- Content changes versus code: Supplied copy and prayer unchanged; approved three questions rendered as prompts; no new theological exposition.

## Behavior
- Page order: Step 1 reading guidance/prayer/USCCB link; Step 2 daily Scripture journal editor; Step 3 Read · Reflect · Pray hero; current Mass reading reflection; Explore Scripture Further; supplemental resources; Journal History; month calendar; upcoming/archive section. The editor appears once, with its history jump below the save action. History shows all entries newest-first with copy controls.
- Visual revision v2/v8: Step 1 and Explore Scripture Further use the Step 2 deep-navy/gold identity with light text; Step 1 writing controls remain on a high-contrast warm-paper inset. My Scripture Journal uses a plain navy history container; only individual saved-entry cards use the ruled-paper notebook look. Study resources group today’s readings (paired Douay-Rheims/Haydock actions) and Further Study (New Advent/HeavenBound). Preserve mobile stacking, visible focus, reduced-motion support, and existing editorial content.
- Save one entry per visitor-local date as `YYYY-MM-DD`, fields date/wordOrPhrase/reflection/createdAt/updatedAt. Prefill existing today entry. Saving again replaces same key and preserves original createdAt. Refresh local day while page remains open.
- State beside the editor that there is one entry per local calendar day and same-day saves update it. A keyboard-focusable “View Journal History” anchor leads to the final history section; return-to-edit scrolls to and focuses today's word input, respecting reduced-motion preferences.
- Versioned key: `daily-oratory-scripture-journal-v1`. Validate entry key/date and lengths; discard invalid individual records; handle malformed root data and unavailable/throwing localStorage without crashing/hydration mismatch. Do not overwrite an unreadable corrupt root; disable saves and show a quiet status in that state. If writing fails, retain draft and show an inline failure message.
- Journal list: local entries sorted newest-first; the final history section shows all saved entries. Empty copy: “Your saved words and reflections will appear here as you pray with Scripture each day.” Today action returns focus to the word input.
- Copy: `Copy all reflections` outputs readable plain text, entries newest first with date/word/reflection; each entry has `Copy this reflection`. Use browser clipboard with a local fallback, status feedback, and no analytics. Do not include timestamps or source metadata unless needed to identify the entry.
- Prayer disclosure: collapsed by default; native button with `aria-expanded`, `aria-controls`, focus-visible style and restrained chevron. No modal or heavy animation.
- Reading guidance disclosure: “Read today’s Scripture intentionally.” is a native button, collapsed by default, with `aria-expanded`, `aria-controls`, visible focus, and the same chevron treatment as Prayer Before Scripture. The explanatory reading guidance is revealed when expanded; the USCCB button and writing fields remain visible.
- Further study: derive daily external links from the official USCCB RSS references for the matching site date, with same-date Mass Reflection references as backup; never substitute an older reflection's readings. Fetch/cache the feed server-side once per day. Parse and display only citation metadata, not RSS Scripture text. If no usable reference is available, link directly to the official USCCB daily readings page. Douay-Rheims opens the corresponding DRBO chapter where supported. Haydock opens its corresponding commentary chapter where supported; if a precise source page cannot be resolved, link to the matching testament/book index with a clear label. Also show fixed New Advent Genesis 1 and HeavenBound links. New tabs use `rel="noopener noreferrer"`. The HeavenBound link is a plain resource link and never includes journal text.
- Storage/privacy: Keep reflections solely in browser localStorage. No accounts, cookies, server writes, API calls, event payloads, logs, query parameters, metadata, or network requests contain saved text. External URLs derive only from the page's public scripture references.
- SEO: `createPageMetadata` with `noIndex: true`, page-specific canonical and relevant page copy; v4 adds only the owner-requested navigation item, retains sitemap exclusion and adds no redirect.
- Rendering: Server-render route and content; browser storage only in a small client island. Use the supplied site's time zone only to select today's Mass reading; the journal date is the visitor's local calendar date.

## Acceptance criteria and tests
| ID | Observable required behavior | Verification | Expected result |
| --- | --- | --- | --- |
| AC-1 | Review route orders Step 1 before Step 2/current reflection; current route unchanged | Route render, screenshot and old/new diff | New route has requested order; old route output behavior unchanged |
| AC-2 | Prayer, fields, prompts and limits are accessible | Keyboard/screen-reader-name and mobile checks | Visible labels, focus, collapsed state, correctly limited fields |
| AC-3 | Today entry persists and updates by visitor-local date | Synthetic save/reload/date tests | Prefill and update one record without duplication or UTC rollover errors |
| AC-4 | Full journal history, empty state and edit action work | Synthetic 0 and multi-date entries plus focus check | Exact empty copy, all entries newest-first, today editor focused |
| AC-5 | Both copy actions copy only intended readable content | Clipboard success/failure and fallback tests | Correct text/status; no navigation/network/telemetry side effect |
| AC-6 | Reading resources are useful and safe | Resolver examples including Ecclesiastes 3:1–11, psalms, mixed readings and unknown reference | Supported exact chapter links; unsupported chapters fall back clearly; no Bible/commentary text embedded |
| AC-7 | Corrupt/unavailable storage is safe | Invalid JSON, invalid record, denied read/write, reload | No crash/hydration warning; valid records sanitized; corrupt root not overwritten; save failure is visible |
| AC-8 | Journal data does not leave browser | Synthetic unique marker; inspect gtag events, network, URL, console, metadata and external URL | Marker exists only in localStorage/visible page/explicit clipboard copy |
| AC-9 | Review route is hidden from indexing | Metadata, sitemap and canonical checks | `noindex`, correct self-canonical; excluded from sitemap; menu inclusion remains owner-authorized |
| AC-10 | Daily editor and reflection steps appear in the approved order; history stays above month calendar | Render order and anchor navigation | Step 1, Step 2 editor, Step 3 reflection order; history button is directly below the journal form action; resources remain before history; history precedes calendar; anchor is keyboard navigable; all entries shown; one entry per local day is stated |
| AC-11 | Explore Scripture Further matches the current USCCB day despite a missing reflection reference list | Feed parsing/date selection and fallback review | USCCB feed references for the site date generate current DR/Haydock links; same-day reflection references may back up a missing feed, never a previous day's; when both fail, a clear direct USCCB link is provided and no full RSS Bible text is rendered |

- Automated commands: `npm run lint`, `npm run typecheck`, `npm run audit:client-stores`, `npm run build`, `npm run validate:urls`, `npm run seo:preflight`; add focused Node script checks for pure date/reference/store helpers if no existing test runner is suitable.
- Manual/browser checks: keyboard disclosure and form, 390px and desktop layout, browser console/hydration, screen-reader accessible names/status, copy success/failure, synthetic storage states, and network/analytics inspection.
- Reviewer limitation: final code review is sequential self-review, not an independent review. Human visual review is pending.
- Reversal: Remove the new route/components/helper and this feature packet; leave `/reflections/mass-readings` intact.

## Definition of Done
- [x] Owner authorization and v1 review decisions recorded.
- [x] AC-1 through AC-9 implemented/verified; remaining manual/browser verification is itemized in `IMPLEMENTATION-REPORT.md`.
- [x] v2 visual review recommendation implemented and CSS/structure reviewed; final narrow-width/zoom visual check still recorded as manual review.
- [x] Relevant checks reported with exit status and known baseline issues.
- [x] Final diff reviewed; unrelated work preserved; independent-review limitation disclosed.
- [x] `IMPLEMENTATION-REPORT.md` complete; human review requested.
- [x] No automatic production publication, push, merge or deployment.
