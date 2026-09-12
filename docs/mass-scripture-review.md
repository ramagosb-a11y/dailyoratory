# Holy Mass Scripture and title enhancement

Implemented locally on September 11, 2026. No deployment.

## Content and source

- 24 assembled lessons; 32 distinct passage blocks; 129 displayed verse occurrences.
- Source: https://ebible.org/engDRA/copyright.htm — public-domain Douay-Rheims, American Edition of 1899 (Challoner revision).
- Every passage contains its entire approved verse selection. Nonconsecutive verses are retained; Psalm 83 (84) and John 6 retain Douay-Rheims numbering.
- Each block includes numbered verses, a source URL, and separately labeled original commentary.
- The scripture plan defines the expected references; the local collection is the sole source of displayed biblical text.
- Fresh-source validation: node scripts/mass-scripture.mjs --verify. Network access is needed only for this development check, never to read the deployed app.
- Assembled-data validation: node --experimental-strip-types scripts/validate-mass-journey.mjs.

## Reviews

1. Implementation: added server-rendered Scripture, gold-bordered chapter banners, ivory title panels, and wrapping typography. Preserved all 34 original Mass-part mappings and the Full Guide. Follow-up: moved Scripture below all lesson content and Go deeper; added a visible heavenly-liturgy teaching section immediately beneath Scripture in all 24 moments, citing Catechism 335, 1137–1139, 1326, and 1402–1405. Browser assertions verify this order at all four widths.
2. Content: fresh eBible comparison passed for every verse and range. Commentary checked against Catechism 796, 1326, 1402–1405, and 1617. Biblical, devotional, and liturgical wording remain distinct; Christ's one sacrifice, Communion discipline, and Revelation's visionary character remain explicit.
3. Behavior: existing journey browser suite passed 46 forward and 46 backward navigation controls, all 24 images, six legacy anchors, image dialog focus/Escape, saved state, unavailable storage, Back/Forward, and the JavaScript-free Full Guide. Five unrelated route smoke checks passed.
4. Visual: all 24 lessons and every rendered verse checked at 360, 390, 768, and 1440px. Screenshots reviewed for mobile, tablet, desktop, enlarged text, 200% CSS zoom, and print-media rendering. No horizontal overflow or title clipping. Long Scripture blocks may break across printed pages rather than being kept together.

## Validation results

- TypeScript, targeted ESLint, assembled journey validation: pass.
- Fresh source text and coverage validation: pass, 24 / 32 / 129.
- Browser Scripture checks: exact rendered text, reference headings, verse numbers, and source URLs match the collection at all four widths.
- Journey and regression browser checks: pass; zero captured page runtime errors.
- Production build: pass, 602 static pages generated; client-store, image, and rendering-strategy audits passed.
- React/Next.js review: no new client-side fetching, state, or persistence; Scripture renders in a server component, with only existing navigation data passed to the client shell.

## Limitations

Browser verification used automated Edge with emulated viewport sizes and CSS zoom, not physical mobile devices or screen-reader testing. Print-media screenshots and a generated PDF were checked/generated; no physical printing. Teaching is source-based educational commentary, not ecclesiastical approval.
