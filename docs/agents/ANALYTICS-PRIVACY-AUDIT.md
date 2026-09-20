# Analytics privacy audit and proposed fixes

Date: 2026-09-18. Canonical repository at baseline 553ee5bc1a7c78206c0a56b69b9dbc0180bd9e99, with the separate PrayerCard pilot diff.
Scope authorized: inspect analytics data flows, reproduce safely and propose fixes. No analytics configuration or application remediation was changed.

## Outcome

Two high-priority data minimization issues were reproduced locally: full query strings enter the page-view event queue, and selected personal needs/state of life enter Saint Companion events despite a local-only notice. These are separate from the PrayerCard change.

This audit verifies repository behavior and the local Google event queue. Requests to Google and every other external browser destination were intercepted during reproduction. No claim is made that these test values reached Google, that production has the same deployed revision, or that real users' private text has been collected.

## Method and coverage

- Inspected root GA initialization, AnalyticsPageTracker, analytics helper, TrackedLink and sensitive tool callers.
- Extracted 137 direct trackEvent/trackPageView call sites using the TypeScript parser, then reviewed relevant payloads. A wrapper can serve many callers; this count is not an exhaustive runtime event catalog.
- Used the built local site, existing Edge/Playwright runtime and synthetic inputs with all external requests intercepted.
- No production requests, analytics dashboard access, private browser profiles or real journal/examination records were used.
- Ignored local evidence: qa/analytics-call-inventory.json and qa/prayer-card-fixture/results.json.

## Findings

| Priority | Finding and evidence | Proposed correction |
| --- | --- | --- |
| P1 | `src/components/analytics/AnalyticsPageTracker.tsx:13–21` appends searchParams to page_path. Local history navigation queued `/adoration?audit_marker=SYNTHETIC_QUERY_ONLY`. | Strip query/hash before telemetry; allow only explicitly approved public route identifiers. Review initial page-view configuration as well as navigation events. |
| P1 | `src/components/saints/SaintCompanionFinder.tsx:96–105` emits need_slug, state_slug and primary_saint. Its line 160 notice says selections are not sent to a server. The active component at /saints/confirmation queued anxiety-or-fear and young adult using synthetic selection. | Remove personal selections and derived recommendations from telemetry. Preserve the local-only promise by changing collection behavior; do not merely weaken the notice. Verify every route that mounts this shared component. |
| P2 | `src/components/pray/ChoosePrayerByNeed.tsx:47` sends need_slug; `adoration/AdorationPrayerPathSelector.tsx:52` sends the selected prayer need. NightlyExamenExperience sends pace, writing_enabled, step, duration and clear/resume/completion events. | Treat categorical spiritual information and activity patterns as sensitive even without free text. Remove these fields/events unless a concrete, owner-approved measurement need justifies a less revealing alternative. |
| P2 | `src/lib/analytics.ts:190–214` accepts any scalar parameters and removes only null/undefined. TrackedLink forwards arbitrary eventParams. | Add per-event key and value allowlists with fail-closed behavior; reject unknown events/params and private route values at runtime, not only through TypeScript. Never log rejected payload contents. |
| P2 | `src/app/layout.tsx:29,103–111` installs the production GA measurement ID globally without a local/preview guard or route-specific exclusion. No analytics consent controls were found in the inspected initialization/helper. | Disable collection on localhost and previews, and decide which personal routes should never load analytics. Review the analytics property's automatic measurement and URL/referrer handling before asserting that a custom-helper fix covers all collection. |
| P3 | The finder events label page_path as /saints/finder, which currently redirects to /prayers; the same component remains rendered at /saints and /saints/confirmation. | Inventory effective routes and mounted components. A redirect does not remove the shared collection behavior; any retained non-sensitive page identifier should reflect the approved route map. |

## What was not found or established

The inspected BibleWordJournalTool sends only static labels on copy; its reflection fields are used to build clipboard text. InteriorTempleCheckup's inspected events also use static labels instead of answers. NightlyExamen's inspected explicit events did not include written notes. These observations do not certify all application flows, third-party scripts, deployed settings or historical analytics data.

Initial GA config has no explicit URL override in source. Its effective automatic collection, consent behavior, property settings and retention were not inspected in the Google dashboard. Treat those as verification work, not confirmed absence of protection or a legal conclusion.

## Recommended follow-up implementation

Create one scoped privacy-hardening feature with the following boundaries:

1. Centralize an explicit analytics eligibility policy: production only, approved public routes only; no loading/collection on local/preview or personal prayer/examination/journal flows.
2. Remove selection-bearing events/parameters from the shared tools above. Prefer no event over an unnecessary record of a personal spiritual action.
3. Replace open-ended parameters with a small event schema and runtime allowlist. Permit only enumerated public content IDs and genuinely needed non-sensitive values.
4. Ensure both initial and client-navigation page views use the same sanitized public route policy. Audit automatic GA measurement, referrer and outbound-link collection so raw URLs cannot bypass the application helper.
5. Verify the user-facing privacy notices against behavior after changes. Preserve theological and devotional copy.
6. Test with synthetic markers, intercept requests, and assert excluded values are absent from queues and outbound request payloads. Verify local/preview makes no analytics requests and restricted surfaces cannot start collection.
7. Record required dashboard settings separately; do not change live analytics settings or publish code as part of this audit.

Proposed files: src/lib/analytics.ts, src/components/analytics/AnalyticsPageTracker.tsx, src/app/layout.tsx and the specific affected callers. Add tests using existing tooling. No new paid service, dependency or server-side analytics pipeline is necessary.

## Acceptance criteria for that follow-up

- Unknown/private query parameters, fragments, free text, need/state selections and private progress are absent from every allowed analytics event and tested outbound request.
- Initial load, client navigation and shared-component routes are tested, not only direct helper calls.
- Local and preview browsing produces zero analytics collection requests.
- Private-route exclusions hold even after navigating from a public page; check automatic collectors, not just custom calls.
- No private payload is echoed into logs when rejected.
- Local-only notices match the observed behavior.
- Required lint/type/build and focused privacy tests are documented, with existing baseline failures separated.
- Owner approves the concrete privacy spec and separately authorizes any production/dashboard change.

## Owner decisions

Recommended default: no telemetry of personal spiritual selections or private-tool progress; retain only minimal approved public-page/content measurements.

The owner should decide which public metrics are actually necessary and whether analytics should load at all on sensitive surfaces. Implementation authorization for these fixes and production/dashboard authorization are still pending. The current "Approved" instruction authorized this audit and proposed fixes, not their rollout.
