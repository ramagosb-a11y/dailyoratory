# Pilot review packet

Feature: prayer-card-copy-label; spec v1; 2026-09-18.
Reviewer: Codex, sequential planning review. These are advisory findings, not independent code review or human approval.

## Research and content preservation

No theological/source research is needed: the proposal adds no claim or quotation. Preserve exact prayer, title, note, eyebrow, copyLabel and copiedLabel values. The proposed UI rule is accessible name = current visible label followed by ": " and the existing nonblank title. If title is absent/blank, use the current visible label. No source, Scripture translation or theological wording is inferred.

## UX review — ready for owner consideration

Reuse PrayerCard and its existing button. Keep the visible label, classes, layout and focus behavior. Include the visible label in the accessible name, including after copied state changes. Do not move focus or add duplicate hidden text, a tooltip or new live region for this scope.

Caller correction from implementation inspection (2026-09-18): both AngelPrayerCards and AdorationPrayerCards pass title. The earlier planning note incorrectly described Adoration as title-less. Neither caller needs changes; absent/blank-title fallback is verified with the actual component in a synthetic browser fixture. Differentiation of title-less cards remains outside v1.

Tests must cover titled and title-less cards, custom labels, copied state and two differently titled cards. Check the accessible name in the browser accessibility tree and manually in a screen-reader button list when available. If manual assistive-technology testing is unavailable, document that limit.

## Site/SEO screen — not applicable

No path, metadata, canonical, navigation or structured-data changes. The shared button's accessible name does not warrant a new route or extra schema.

## Privacy review — ready for owner consideration

The title already appears on-screen and is used locally to name the button. Add no logs/events/storage or network calls. Use public prayer examples or synthetic strings for tests. Inspect caller contracts so the implementation does not forward prayer text/title to new destinations.

Current AdorationPrayerCards uses an onCopy callback and existing analytics with a public prayer title. Its callback catches errors internally, which means PrayerCard cannot determine whether the clipboard actually succeeded. That is a separate existing issue; do not claim this pilot fixes clipboard success/failure accuracy or broaden the patch into callback changes.

## Theology screen — not applicable

Content preservation is an acceptance requirement. If implementation changes devotional text or its meaning, stop the affected work and reopen source/theological review.

## Remaining decisions

The owner approved spec v1 on 2026-09-18. Implementation, keyboard/browser checks and sequential Codex diff review are recorded in [IMPLEMENTATION-REPORT.md](IMPLEMENTATION-REPORT.md). Human review and a human screen-reader listening test remain pending. No review here authorizes production publication.
