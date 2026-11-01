# Adoration timestamp hydration fix — revision 1

2026-11-01. Owner instruction: “Can you fix the error”, referring to the Adoration hydration warning reported after the combined release. Approved for local implementation; production release not inferred from prior completed release authorization.

Cause evidence: deployed /adoration emits React #418 in America/Chicago, not UTC; shared formatAdorationDateTime used during server prerender and client initial render omitted timeZone, so the same lastCheckedAt value yielded different text. Scope: set UTC explicitly while preserving the displayed short zone label, timestamp data, teaching, links, tracking and all server/client boundaries. No new effect, suppressed hydration warning, data fetch, settings, asset or dependency.

UX/engineering review: UTC keeps timestamps consistent and accurately labeled across server and client in stream cards, chapel views and quiet rooms. Source inspection: src/lib/adoration.ts and its three component callers. Rendering/caching strategy unchanged. Privacy/site/theology/automation stages not applicable: no changed data collection, URL, teaching or scheduling. Review is by implementer, not independent.

Acceptance: no React #418 in UTC or America/Chicago during initial /adoration hydration; timestamp strings identical and include UTC, including a zone with date rollover. Verify focused ESLint, typecheck, production build/guards and local browser contexts. Stop at reviewed local fix.
