# Daily Oratory Admin Guide

## Brand Rules

Daily Oratory is the public platform name.

Tagline: **Your daily Catholic home for prayer, reflection, and devotion.**

Use these phrases when adding public copy:

- Begin in prayer
- Pray with the Church
- Live the liturgical year
- Grow in virtue
- Ask for prayer
- Enter Adoration
- Find a saint companion
- Build a daily rule of life

Avoid startup-style language, gamified holiness language, and social-media-style engagement language.

## Content Sources

Daily Oratory reads public content from local TypeScript data files:

- `src/types/*`
- `src/data/resources.ts`
- `src/data/categories.ts`
- `src/lib/content.ts`
- `src/content/resources.ts`
- `src/content/reflections.ts`
- `src/content/events.ts`
- `src/content/liturgical.ts`

The full backend-ready content model lives in `src/types/*`, `src/data/*`, and `src/lib/content.ts`. The current public pages still use the smaller `src/content/*` records for rendering, while the richer model supports future Google Sheets export, Supabase tables, prayer intentions, prayer rooms, rule of life tools, and sacrament companions.

The Google Sheets content admin system lives in `google-workspace/content-admin`, with setup documentation in `docs/google-sheets-content-admin.md`.

## Add A New Resource

Open `src/content/resources.ts` and add a new object to the `resources` array.

Required fields:

- `slug`: lowercase URL-safe identifier.
- `title`: public title.
- `description`: one-sentence summary.
- `category`: one of the allowed categories in `src/content/types.ts`.
- `format`: guide, prayer, devotion, reflection, checklist, reference, or event.
- `season`: Advent, Christmas, Lent, Easter, Pentecost, Ordinary Time, Marian, or All Year.
- `tags`: short lowercase labels.
- `minutes`: estimated reading time.
- `updatedAt`: ISO date.
- `status`: `published` or `draft`.
- `body`: content blocks.

Example:

```ts
{
  slug: "stations-of-the-cross",
  title: "Stations of the Cross",
  description: "A parish and personal guide for praying the Way of the Cross.",
  category: "Prayer",
  format: "Devotion",
  season: "Lent",
  tags: ["lent", "cross", "meditation"],
  minutes: 12,
  updatedAt: "2026-02-20",
  status: "published",
  related: ["lent", "confession-guide"],
  body: [
    { type: "heading", text: "Praying the Way" },
    { type: "paragraph", text: "Begin with silence and follow Christ station by station." },
  ],
}
```

## Add A Reflection

Open `src/content/reflections.ts` and add a reflection with:

- `slug`
- `date`
- `title`
- `reference`
- `excerpt`
- `season`

Daily Mass and Sunday Gospel reflection resources can also be added to `src/content/resources.ts` for searchable long-form content.

## Manage Rosary Content

Rosary section data lives in `src/data/rosary.ts`, with shared types in `src/types/rosary.ts`.

Rosary rules:

- Keep the four mystery-set URLs stable: `/rosary/joyful-mysteries`, `/rosary/sorrowful-mysteries`, `/rosary/glorious-mysteries`, and `/rosary/luminous-mysteries`.
- Each mystery should include a fruit, Scripture reference, and meditation prompt.
- Traditional prayers may be public-domain text, but editors should verify transcription against a parish-approved source.
- Keep the Latin Rosary guide concise and prayer-focused, with English cues for users who are still learning.
- Link live Rosary gathering copy to `/community/prayer-rooms/rosary`.

## Manage Confession Guide Content

Confession guide content lives in `src/data/confession.ts`, with shared types in `src/types/confession.ts`.

Confession rules:

- Keep `/confession` as the canonical public guide hub.
- Use gentle, hopeful language rooted in mercy and conversion.
- Do not use page copy to determine whether a sin is mortal or venial.
- Encourage users to speak with a priest when unsure.
- Keep Guided Examination data private and local-only in version 1.
- Route old topical slugs such as `/sins`, `/habitual-sin`, `/resisting-temptation`, and `/predominant-fault` through redirect mapping in `src/config/navigation.ts`.

## Manage Events And Community

Community records live in `src/data/community.ts`, with helpers in `src/lib/community.ts`.

Public community routes:

- `/community`
- `/community/events`
- `/community/events/[slug]`
- `/community/local-faith-groups`
- `/community/group-discussion-topics`
- `/community/contact`

Event records support:

- online, in-person, and hybrid labels
- recurring event metadata
- registration links
- preparation notes
- related resources
- generated event detail pages

For Google Sheets administration, add event rows to the `Events` tab and export only after setting `Status = Approved`.

## Moderate Prayer Intentions

Prayer intention records live in `src/data/prayerIntentions.ts` and the shared model lives in `src/types/prayerIntentions.ts`.

Public wall rules:

- Only `moderationStatus: "approved"` records may appear publicly.
- Only `intentionVisibility: "public"` or `"anonymous-public"` records may appear publicly.
- Prayer team only and hidden summary records must stay private.
- Pending, reported, hidden, archived, and needs attention records must not be exported to public static pages.
- Remove private names, locations, contact details, and sensitive medical details before approval.
- Urgent requests still require moderation and should include the emergency disclaimer.

The public workflow and Supabase-ready schema are visible at `/prayer-intentions/guidelines`.

## Manage Live Prayer Rooms

Prayer room records live in `src/data/prayerRooms.ts` and the shared model lives in `src/types/prayerRooms.ts`.

Room rules:

- Use `roomStatus` for live state: `live`, `starting-soon`, `scheduled`, `paused`, or `ended`.
- Use `status` for content publication state. Only `status: "published"` rooms appear publicly.
- Keep `meetingUrl` as a placeholder until authenticated access and host review are in place.
- Keep devotion guides short unless the text is original, public domain, or explicitly approved for publication.
- Youth-safe and family rooms require verified hosts before realtime launch.
- Every public room should include `reverenceGuidelines`, `safetyNotes`, and `reportEnabled: true`.
- Optional intentions must avoid private identifying details and should default to host review in a real backend.

Version 1 uses localStorage for join/leave, optional intentions, reports, and start-room drafts. Supabase schema, RLS notes, and the safety checklist are shown on `/community/prayer-rooms/start`.

## Manage Live Adoration Streams

Adoration stream records live in `src/data/adoration.ts` and the shared model lives in `src/types/adoration.ts`.

Stream rules:

- Only YouTube and Vimeo HTTPS URLs are supported.
- Always store a normalized `embedUrl`; the app also sanitizes before rendering.
- Do not enable autoplay audio.
- Mark streams as `verified` only after confirming the chapel, parish/community source, language, schedule, and stream ownership.
- Use `isTwentyFourSeven` only for streams that are truly perpetual or reliably always available.
- Keep `lastCheckedAt` current when editors review stream availability.
- Broken-stream reports are local in version 1 and should route to an editor queue in a backend.

The submit-stream form at `/adoration/submit-stream` saves local review items and displays the Google Sheets schema plus optional Apps Script exporter plan.

## Change Brand Or Navigation

- Brand constants live in `src/config/brand.ts`.
- Navigation and legacy redirect mapping live in `src/config/navigation.ts`.
- The full sitemap, URL structure, menu pattern, breadcrumb pattern, and taxonomies are documented in `docs/information-architecture.md`.
- Site metadata should use `src/lib/metadata.ts`.

## Google Sheets Content Admin

Use the Sheet admin system when non-developers need to maintain approved content.

Apps Script source files:

- `google-workspace/content-admin/Code.gs`
- `google-workspace/content-admin/Config.gs`
- `google-workspace/content-admin/DataService.gs`
- `google-workspace/content-admin/Validation.gs`
- `google-workspace/content-admin/ExportService.gs`
- `google-workspace/content-admin/JsonBuilder.gs`
- `google-workspace/content-admin/LogService.gs`
- `google-workspace/content-admin/Menu.gs`
- `google-workspace/content-admin/Utilities.gs`

Operational rules:

- Row 1 is headers only.
- One record per row.
- Every content row needs a stable `ID`.
- Only `Status = Approved` exports.
- Draft, Needs Review, and Archived rows are skipped.
- Exported JSON is written to the Drive folder configured by `EXPORT_FOLDER_ID`.

Full schema, setup steps, and testing checklist are in `docs/google-sheets-content-admin.md`.

## Rebrand Audit Checklist

- Confirm `src/config/brand.ts` contains `platformName`, `domain`, `canonicalUrl`, `tagline`, SEO, Open Graph, support email, and social image values.
- Confirm visible public copy uses Daily Oratory, not a legacy brand.
- Confirm content additions avoid legacy shorthand or legacy source-site language unless the context is migration documentation.
- Confirm old URLs are mapped through redirects instead of linked publicly.
- Run `npm run lint` and `npm run build`.

## Editorial Workflow

1. Add content as `draft`.
2. Preview locally.
3. Ask a Catholic editor or clergy reviewer to check doctrinal and pastoral accuracy.
4. Complete copyright/provenance fields: creator, source, license, attribution, copyright status, review status, reviewer, date, and notes.
5. For Scripture, prefer references and external links; do not copy full modern Bible readings.
6. For hymns, prayers, PDFs, images, and legacy content, confirm public-domain status, license, or permission before publishing.
7. Change `status` to `published` only after editorial and copyright review.
8. Run `npm run lint` and `npm run build`.
9. Deploy.

## Copyright Review Workflow

- Use `docs/content-publishing-checklist.md` before adding new content.
- Use `docs/copyright-audit.md` to track current risk areas.
- Use `src/data/contentProvenance.ts` as the code-side registry for known content provenance and risk levels.
- Use the Google Sheets `Copyright_Review` tab for owner review decisions and remediation tracking.
- Do not export rows with `Review_Status = Do Not Publish` or `Review_Status = Replace Required`.
- Treat `Risk_Level = High Risk` as blocked until rewritten, removed, linked externally, or permission is documented.
