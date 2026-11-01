# Pope redesign — revision 1

Date: 2026-10-31. Status: implemented-awaiting-human-review, based on owner instruction: “have the webteam redesign and make it look stunning” for http://127.0.0.1:3000/pope. Production publication is not authorized.

Scope: presentation of /pope, its hero and current-pope component, route-scoped CSS, and accessible copy feedback. Preserve every existing content component, theological passage, data field, source link and tracking contract. Group the existing material into five navigable chapters; retain original foundation/prayer anchors and metadata. Reuse the existing licensed Saint Peter’s WebP with attribution. No dependencies, services, routes, data fetching, paid resources or deployment changes.

Acceptance: architectural navy hero, clear gold primary action, current-pope feature, five working chapter links, readable body/prayer text, native FAQ with visible indicator, visible focus and responsive layouts at desktop/390/320px and increased text size. Existing prayer copy remains intentional with announced feedback. All 23 original component exports remain rendered once. Static rendering preserved.

Validation: lint, typecheck, production build and image checks; desktop/mobile screenshots, image load and overflow, fragment targets, FAQ keyboard toggle and copy success/failure. Independent engineering review of scoped diff; local handoff only. Rollback by reverting only the Pope-specific changes, preserving existing unrelated Vatican work.
