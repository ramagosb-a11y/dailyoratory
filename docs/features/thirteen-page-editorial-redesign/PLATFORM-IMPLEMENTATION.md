# Platform implementation — thirteen-page editorial redesign

Revision: approvedplan, November 2, 2026. Implementer: platform_review. Scope authorized by coordinator's explicit implementation assignment; no commit, push or deployment performed.

## Page changes

- Homilies: photograph-led editorial opening, two featured entries, one searchable complete approved catalog (including playlists/audio), optional collections and compact supporting guidance. Removed separate duplicate playlist/audio lists. Preserved cached remote-sheet/static-fallback pipeline, existing metadata and 86400-second ISR. Featured anchor action omitted when no featured record exists.
- Today’s prayer: compact hero and longform shell followed immediately by the generated prayer; exact generated prayer text and liturgical model preserved, including paragraph breaks and copy payload. Prompts and related model destinations remain. Copy/print actions now provide accessible success/failure feedback without falsely claiming a completed print.
- Group discussion: compact anchored topic index, native expandable complete guides with original opening prayers, all questions and previously unrendered facilitator notes. Added original process guidance protecting voluntary participation and private Confession boundaries. No private discussion notes collected. Topic slug deep links preserved.

## Privacy/storage changes

- LocalPlanToolShell gains safeStorage?: boolean defaulting false; only Detachment opts in. Existing default callers retain their persistence and event behavior.
- The opt-in keeps the existing detachment-from-sin-plan key and manual save/load behavior. It restores only known string fields, tolerates missing legacy fields, strips unknown fields, rejects malformed/non-object/non-string records, catches blocked storage, and preserves current form values on a failed load.
- Clear resets memory and removes the saved key. No effect recreates it. Failed deletion is explicitly reported; clipboard/printed copies are described as separate. Saving remains optional and local, without claiming encryption. Copy/print in safe mode emit no event and have accessible failure/status messages.
- Removed choice telemetry from Adoration prayer paths, sacramental finder, relic visit preparation, council topic finder and council timeline explorer. Removed the council topic recommendation-derived resource event. Ordinary public navigation links remain.
- The private council explorer now retains full CouncilCard details after the redundant full timeline was removed by another author. Added CouncilCard suppressResourceTracking?: boolean default false, enabled only in the explorer, so selection-derived source navigation emits no event while the static public-card default is preserved.

## Verification

- Targeted ESLint on the three pages, discussion card, daily actions, storage shell/helper/tests, Detachment opt-in and five privacy selectors: pass, exit 0.
- Follow-up ESLint on CouncilCard, council explorer and daily prayer image reference: pass, exit 0.
- npm run typecheck: pass, exit 0 (integrated state at time of check).
- node --experimental-strip-types --test src/components/sin-and-temptation/safePlanStorage.test.mjs: 6/6 pass. Cases: known-field save/legacy restore, stripping unknown data, deletion/no resurrection, denied storage including failed clear, corrupt record preservation, private selector telemetry guard, council card opt-out wiring.
- npm run test:analytics-privacy: 7/7 pass, exit 0.
- React review checklist applied: pages stay Server Components; client state/browser APIs remain in small existing islands; no added dependency/effect/remote persistence; native disclosures, semantic controls, focus rings, status feedback and responsive layouts retained.

The coordinator owns final build, image/SEO checks and integrated browser QA. No browser verification is claimed by this implementer. Specific acceptance still requires saved-plan round-trip, corrupt/blocked storage and honest clear feedback in a browser; clipboard/print fallback; disclosure slug navigation and keyboard; media catalog empty/fallback states; mobile/desktop image crop/overflow and generated prayer text comparison. Photos homilies.webp and group-discussion.webp are supplied by the coordinator; daily prayer reuses licensed pray.webp. Independent theological/editorial review of new non-quotation process copy remains with the coordinator/reviewer.

## Homily catalog QA correction

Added an always-available Clear filters action resetting search, media type, topic, season, speaker, audience and featured-only together. The catalog count is a polite atomic status announcement. Zero matches now shows explanatory recovery guidance and Show all homilies, using the same complete reset. Removed redundant topic/season chip rows; every option remains in the existing labeled selectors, and the removed browser components had no anchor IDs. Search text was not sent to analytics before this change and remains untracked. Existing featured-only public filter event is unchanged. No media types, approved-record filtering, audio/playlist rendering or data fetching changed.

Focused ESLint for HomilyFilters.tsx passed (exit 0). Root browser QA should enter an unmatched synthetic query, combine all filter categories, exercise both reset actions, confirm restored complete count, and check the live status announcement.
