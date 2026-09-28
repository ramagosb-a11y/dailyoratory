# Implementation Report — Daily Haydock Passage Links

- Feature ID: `haydock-passage-links`
- Spec revision: 2
- Implementation date: 2026-09-27; freshness follow-up 2026-09-28
- Status: initial link fix released; hourly freshness adjustment validated locally
- Release status: link fix deployed to production; freshness adjustment pending release verification

## What changed

- Replaced the small hand-maintained Haydock direct-link list with a checked-in chapter map generated explicitly from Haydock's Old and New Testament navigation pages.
- Added verse-aware Psalm conversion for the Douay-Rheims, Haydock, and New Advent links, including modern Psalms 116 and 147 split across source chapters.
- Added transparent link labels for differing Psalm numbers and fallback chapter selection.
- Updated resource cards to show separate links when a reading spans multiple source chapters.
- Added resolver tests covering Psalm 25, merged and split Psalm numbering, the generated map, unsupported chapters, and multi-reading references.
- Reduced the reading page ISR and USCCB feed Data Cache lifetimes from 24 hours to one hour after the owner reported an unavailable-reference screen around date rollover.

## Acceptance evidence

| Criterion | Result | Evidence |
| --- | --- | --- |
| Psalm 25 opens Haydock Psalm 24 | Pass | Resolver returns `https://johnblood.gitlab.io/haydock/id749.html`; label identifies modern Psalm 25. |
| Supported OT/NT chapters use static Haydock map | Pass | Checked-in manifest contains 1,334 chapter destinations across 73 books; no runtime fetch. |
| Psalm numbering merge/split handling | Pass | Tests cover Psalm 9/10, 113/114/115, 116 split, 117–146 conversion, 147 split, and 148/150 boundaries. |
| Unsupported chapter fallback is clear | Pass | Label directs users to choose a chapter in the relevant testament index. |
| Existing route responds | Pass | `http://127.0.0.1:3013/reflections/reading-and-reflections` returned HTTP 200. |
| Privacy/deployment behavior preserved | Pass | The implementation only uses public passage references; no journal data or analytics changes were added. The existing USCCB feed request remains cached and is not made per visitor; route behavior remains static/ISR. |
| Date-sensitive reading data refreshes without per-visitor fetches | Pass | Both route and feed cache revalidate hourly; the production build keeps the page statically rendered with ISR. The first request after expiry can still see stale output during background regeneration. |

## Verification

- `npm run test:reading-and-reflections` — 12/12 passed.
- `npm run typecheck` — passed.
- Focused ESLint on changed TypeScript, component, generator, and test files — passed.
- `npm run validate:urls` — passed.
- `npm run build` — passed; 621 static pages generated and post-build rendering audit passed.
- `git diff --check` — passed; Git reported only line-ending normalization notices for edited files.
- Independent code review by `/root/ux_review` — approved with follow-up notes below.
- Independent cache review by `/root/journal_history_ux` — approved with the stale-while-revalidate limitation below.
- Production observation on 2026-09-28 — current route displayed USCCB readings for Monday of the Twenty-sixth Week in Ordinary Time; the feed contained item `/bible/readings/092826.cfm`.

## Follow-up notes and limits

- If an input names a recognized book but a chapter absent from the generated map, the current fallback is the testament-wide index. Its label is truthful, but a book-specific index would reduce navigation for malformed or unsupported chapter references.
- Tests validate manifest shape, size, selected aliases, and representative destinations. A deliberate manifest refresh should also spot-check destination page headings because the upstream site can change opaque page IDs.
- Time-based ISR can show stale output on the first request after expiration while regeneration runs. Hourly revalidation bounds this window without adding a per-visitor origin fetch.
- The local review URL is `http://127.0.0.1:3013/reflections/reading-and-reflections` when the development server is running.
