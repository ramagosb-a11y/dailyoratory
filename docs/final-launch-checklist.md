# Daily Oratory Final Launch Checklist

Domain: `DailyOratory.faith`

Tagline: **Your daily Catholic home for prayer, reflection, and devotion.**

Use this checklist before launch, during launch day, and through the first 30 days after launch.

## Content QA

- Page titles are clear, reverent, and specific.
- Slugs are lowercase, hyphenated, stable, and user-readable.
- Categories match the platform taxonomy: Prayer, Rosary, Confession, Reflections, Liturgical Year, Sacraments, Saints, Devotions, Formation, Community, Events, and Library.
- Tags are useful for search and filtering, not decorative.
- Related resources are present on long-form pages and point to live URLs.
- Catholic terminology is accurate, reverent, and consistent.
- Liturgical information includes the note that local observances should be verified with the user's diocese or official calendar.
- Sacramental companion pages include boundaries: they support preparation but do not replace parish or diocesan requirements.
- Confession pages do not determine mortal or venial sin and encourage speaking with a priest when unsure.
- Privacy disclaimers appear before users enter prayer, confession-preparation, virtue, or private note data.
- Public copy uses Daily Oratory as the brand.
- Legacy brand references appear only in migration, redirect, or source-mapping documentation.
- Traditional prayers are verified against public-domain or approved sources.
- Daily readings are referenced and linked externally rather than copied.

## Design QA

- Homepage communicates Daily Oratory, prayer, reflection, devotion, liturgical living, and community within the first viewport.
- Library search, category filters, tag filters, season filters, sorting, active filters, and empty states are usable on mobile and desktop.
- Resource pages have breadcrumbs, descriptive headings, readable body width, related resources, and clear metadata.
- Today dashboard shows date, liturgical day, season, color, saint or feast, readings link, prayer, devotion, seasonal practice, and verification note.
- Rule of Life Builder is gentle, non-shaming, local-only, printable, and mobile-friendly.
- Pathways pages avoid gamified holiness language and show clear spiritual goals, steps, prayers, practices, and related resources.
- Sacrament pages show preparation support, parish reminder, role checklists, reflection prompts, and boundaries.
- Confession Guide is compassionate, hopeful, and clearly connected to the Guided Examination of Conscience.
- Virtue Tracker avoids scores, streaks, rankings, and public sharing.
- Saints section avoids horoscope or destiny language and uses “a saint to consider praying with” style language.
- Prayer Intention Wall shows moderation, privacy, emergency, report, and “I prayed for this” states.
- Prayer Chain is distinct from the public intention wall and supports routed prayer team workflows.
- Prayer Rooms show room status, devotion type, host, language, participant count, join/leave, report, and safety notes.
- Adoration portal clearly marks live, 24/7, verified, quiet mode, and report broken stream states.
- Rosary pages include mystery selector, day recommendation, fruits, Scripture references, meditations, Latin guide, and live room links.
- Reflections pages include today's reflection, Sunday reflection, search, filters, Scripture references, questions, prayer, and related resources.
- Events pages show online/in-person/hybrid labels, recurrence, event detail pages, and registration/contact paths.
- Mobile navigation opens, closes, scrolls, supports keyboard use, and uses accurate labels.
- Footer includes brand, tagline, platform description, and useful navigation.

## Technical QA

- `npm run lint` passes.
- `npm run build` passes.
- TypeScript passes during production build.
- No broken imports or missing route modules.
- No console errors on core pages.
- Public routes work:
  `/`, `/pray`, `/rosary`, `/confession`, `/reflections`, `/today`, `/liturgical-living`, `/library`, `/sacraments`, `/saints`, `/community`, `/adoration`.
- Dynamic pages work:
  library resources, reflection details, saint profiles, sacrament companions, pathway steps, adoration streams, prayer rooms, prayer intentions, prayer chain requests, and event details.
- Search works in Library and Reflections.
- Filters work for category, type, season, tags, date, and topic where applicable.
- localStorage features work for Rule of Life, Pathways, Sacraments, Examination, Virtue Tracker, Saints, Prayer Intentions, Prayer Chain, Prayer Rooms, and Adoration reports.
- Print/export views work for Rule of Life, Sacraments, Confession Examination, and Virtue Tracker.
- `/sitemap.xml` returns `200` and contains canonical public pages.
- `/robots.txt` returns `200` and points to the sitemap.
- Metadata includes titles, descriptions, canonical URLs, Open Graph, and Twitter cards.
- Redirects in `src/data/redirects.ts` avoid chains and loops.
- Google tag is present if analytics is enabled.

## Privacy QA

- Confession preparation notes stay local and are not sent to a server.
- Virtue Tracker check-ins stay local and are not sent to a server.
- Rule of Life data stays local and is not sent to a server.
- Private notes and marked examination items stay local.
- Contact form UI does not submit real data until a reviewed backend is connected.
- Contact emails are not exposed in ways that invite scraping beyond intentional support addresses.
- Prayer intention submissions are not published automatically.
- Prayer chain requests require moderation and routing before real team alerts.
- Youth-safe and family community features require verified moderation before realtime launch.
- Emergency disclaimers appear near prayer request and urgent intention flows.

## Launch Checklist

- Vercel project is linked to the correct project: `daily-oratory`.
- Production deploy succeeds.
- Custom domain `DailyOratory.faith` is assigned to production.
- DNS records are correct and stable.
- HTTPS certificate is active.
- Homepage returns `200`.
- `/sitemap.xml` returns `200`.
- `/robots.txt` returns `200`.
- Top redirects are tested from old URLs to new canonical destinations.
- Google Search Console property is created for `DailyOratory.faith`.
- Sitemap is submitted in Google Search Console.
- Analytics option is confirmed: Google tag `G-FPKXBSX0QY` is installed or intentionally disabled.
- Legacy site is backed up or kept read-only for source mapping.
- Launch date is recorded in analytics and the migration tracker.
- Post-launch monitoring owner is assigned.

## Post-Launch Monitoring

- Check Vercel deployment health daily for the first week.
- Check Search Console coverage, indexing, and sitemap status.
- Review 404s and add redirects for valuable missed URLs.
- Test top user journeys after every deployment.
- Monitor form placeholder pages to ensure users understand which flows are mock/local-only.
- Review analytics for high-exit pages and unexpected traffic drops.
- Track content corrections and theological review requests.

## 30-Day Roadmap

### Week 1

- Verify all production routes and redirects.
- Submit sitemap and inspect key URLs in Search Console.
- Fix high-priority 404s.
- Review homepage, Library, Rosary, Confession, Reflections, and Community on mobile.
- Confirm Google tag receives pageviews.

### Week 2

- Complete editorial review for top 25 resources.
- Improve thin migrated content.
- Add missing related resources and tags.
- Review liturgical season pages for accuracy and local-observance notes.
- Confirm all sacramental pages include parish/diocesan boundary language.

### Week 3

- Pilot Google Sheets content admin with sample resources, reflections, events, saints, and redirects.
- Test export workflow into JSON.
- Document editor roles and approval process.
- Review privacy language for prayer requests, localStorage tools, and contact flows.

### Week 4

- Prioritize backend candidates: prayer chain, intention moderation, event submissions, and content admin import.
- Review analytics and Search Console performance.
- Refine navigation labels based on observed usage.
- Prepare a version 1.1 content and feature backlog.
- Run a full accessibility and SEO QA pass.

## Admin Maintenance Checklist

- Review new content weekly.
- Keep `Status = Approved` limited to reviewed content.
- Update event dates and recurrence notes.
- Review Adoration stream availability and `lastCheckedAt`.
- Review prayer rooms for safety notes, host status, and room status.
- Audit prayer intentions and prayer chain mock data before replacing with real submissions.
- Keep redirects updated from Search Console 404 reports.
- Run `npm run lint` and `npm run build` before deployment.
- Back up Google Sheets content admin exports if used.
- Keep migration notes separate from public-facing copy.

## Content Publishing Workflow

1. Draft content in the appropriate local data file or Google Sheets tab.
2. Assign title, slug, description, category, tags, season, and related resources.
3. Check Catholic terminology, pastoral tone, source notes, and copyright status.
4. Add privacy, sacramental, liturgical, or emergency disclaimers where needed.
5. Review on mobile and desktop.
6. Mark content as approved or published only after review.
7. Run lint and build.
8. Deploy to Vercel.
9. Verify the live URL, metadata, and related links.
10. Add or update redirects if the content replaces a legacy page.

## Bug Triage Process

Severity levels:

- `P0`: Site down, broken production deploy, domain/HTTPS failure, privacy leak, or harmful public content.
- `P1`: Core user journey broken, major route 404, broken search/filter, broken localStorage privacy tool, or bad redirect for high-value page.
- `P2`: Visual issue, copy issue, minor accessibility problem, non-core broken link, or content metadata gap.
- `P3`: Enhancement, polish, future content request, or admin workflow improvement.

Triage steps:

1. Capture URL, browser, device, screenshot, and reproduction steps.
2. Assign severity.
3. Check whether the issue is content, design, frontend, deployment, DNS, analytics, or migration.
4. For privacy or pastoral-risk issues, remove or hide affected public content first.
5. Fix locally and run lint/build.
6. Deploy and verify the live URL.
7. Record the fix in the launch tracker or issue log.
8. If the issue came from content workflow, update the admin guide or checklist so it does not repeat.
