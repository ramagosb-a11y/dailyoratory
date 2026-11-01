# Eucharist redesign — implementation contract

Revision 1, 2026-10-31; implementation verified 2026-11-01. Status: implemented-awaiting-human-review within the owner's explicit redesign request recorded in IDEA.md. Production authorization: **not authorized**. See REVIEWS.md and IMPLEMENTATION-REPORT.md for independent review and validation limitations.

## Scope and content

Change only `src/app/sacraments/eucharist/page.tsx`, its new colocated `EucharistPage.module.css`, and this feature packet. Preserve the current page's complete theological/devotional prose, reference arrays, FAQs, pastoral qualifications, metadata and JSON-LD. Reflow existing introductory prose below the hero. New text is limited to navigational labels, chapter numbers and descriptive image alt text. No new Catholic claims or quotations.

Reuse Breadcrumbs, SectionJumpNav, Next Image, existing fonts and navy/gold/ivory/burgundy palette. Introduce a navy split hero with `/images/adoration/monstrance-adoration-night.webp`; use `/images/mass/journey/consecration.webp` in the Mass section. Assets remain unchanged optimized WebP. Keep imagery legible without placing reading copy over its detailed areas. Use route-scoped CSS, editorial sections, a numbered four-part strip, a distinct preparation checklist and native question disclosures. Existing FAQ text remains rendered in details elements, consistent with unchanged FAQ schema.

## Behavior and boundaries

All existing section IDs and destinations remain. Add prominent shortcuts to Meaning, Prepare and Adoration; retain full existing jump navigation. Desktop uses split imagery/editorial layouts; mobile stacks in reading order, keeps meaningful image subjects visible, and uses the shared outline disclosure. No forced motion, client JS, storage, tracking or new network services. Static rendering is preserved. Image dimensions/sizes, hero preload and lazy lower image prevent avoidable layout shifts and downloads. Existing WebPs total 294,144 bytes; no added source asset bytes or conversion savings.

Use semantic headings, lists, native details/summary and links; visible keyboard focus, 44px minimum interactive targets, readable line lengths and contrast. No essential content depends on hover. Respect reduced motion and print. Page still functions without JS. Existing metadata, canonical URL, schema, route and sitemap behavior remain unchanged.

## Acceptance and verification

- AC1: Distinct navy/gold image hero and readable cream editorial content at desktop and narrow widths; no horizontal overflow.
- AC2: Every existing teaching paragraph, list entry, citation, question and answer is preserved; only presentation/navigation/alt text added.
- AC3: Existing anchors and internal links work; FAQ disclosures and shared mobile outline are keyboard operable; focus visible.
- AC4: Reused images resolve, preserve subject framing, and use responsive sizes; no new client state or runtime/data flows.
- AC5: Relevant ESLint, typecheck, production build and image/client-store/rendering guards pass, or baseline failures are documented accurately. Browser-check hero, middle/lower content, anchors and FAQ.
- AC6: Independent final code review completes; unrelated working tree changes are preserved.

Implementation: author page/CSS, inspect rendered desktop/mobile, run checks, resolve independent review, record implementation report and stop for owner review. Reversal: restore only this route from its baseline and remove its new CSS. Do not revert unrelated files. Reopen review if content meaning, route or data flow changes.
