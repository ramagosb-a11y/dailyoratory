# Daily Oratory Site Audit

Date: May 17, 2026  
Auditor: Codex

## 1. Route Inventory

This inventory focuses on the public route surface in `src/app`, supported redirects in `src/data/redirects.ts`, sitemap coverage in [src/app/sitemap.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\app\sitemap.ts), and user-facing navigation in [src/config/navigation.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\config\navigation.ts).

### Primary hub routes

| Route | Title / label | Main purpose | Audience | Primary CTA / next action | In nav | In sitemap | Metadata | Notes |
|---|---|---|---|---|---|---|---|---|
| `/` | Daily Oratory home | Main entry and user journey hub | Everyone | Start Here cards / hero CTAs | Yes | Yes | Yes | Improved during this pass with stronger Start Here flow and community prayer section restored |
| `/pray` | Pray | Prayer hub | Catholics, seekers, returning Catholics | Start a prayer practice | Yes | Yes | Yes | Good central prayer hub |
| `/explore` | Explore the Catholic Faith | Seeker and first-steps gateway | Seekers, non-Catholics, returning Catholics | Start with the basics | Yes | Yes | Yes | Strong start-here page |
| `/formation` | Formation | Growth in doctrine, virtue, discipleship | Catholics, returning Catholics | Begin a formation path | Yes | Yes | Yes | Could use more visible jump navigation |
| `/mass` | The Holy Mass | Mass teaching and walkthrough | Catholics, seekers, returning Catholics | Learn the Mass / attend Mass | Yes | Yes | Yes | Long page; jump menu recommended if not already fully surfaced |
| `/sacraments` | Sacraments | Sacramental overview | Catholics, seekers | Learn a sacrament | Yes | Yes | Yes | Important hub |
| `/catechism` | Catechism | Catechism orientation and study | Catholics, OCIA, seekers | Start a topic | Yes | Yes | Yes | Good canonical study destination |
| `/tradition` | Sacred Tradition | Teaching page on Tradition | Catholics, seekers | Learn about Tradition | Yes | Yes | Yes | Strong internal-link candidate |
| `/councils` | Councils of the Church | Teaching page on ecumenical councils | Catholics, seekers | Explore the councils | Yes | Yes | Yes | Strong teaching page |
| `/pope` | The Pope | Papacy overview | Catholics, seekers | Learn about the Pope | Yes | Yes | Yes | Good companion to `/tradition` and `/councils` |
| `/vatican` | The Vatican | Vatican guide, media, pilgrimage | Catholics, seekers | Explore the Vatican | Yes | Yes | Yes | Uses staged video loading pattern well |
| `/family` | The Domestic Church | Catholic family formation | Families, seekers, returning Catholics | Build your domestic church | Yes | Yes | Yes | Strong practical page |
| `/news` | Catholic News | Faithful news and official sources | Catholics, seekers | Read current news sources | Yes | Yes | Yes | Needs stronger cross-links to Pope, Vatican, Today |
| `/today` | Today in the Church | Today-focused dashboard | Catholics | Pray with today | Yes | Yes | Yes | Important liturgical anchor |
| `/liturgical-living` | Liturgical Living | Church year hub | Catholics, families | Live the season | Yes | Yes | Yes | Good hub but deep children increase nav complexity |
| `/liturgy-of-the-hours` | Liturgy of the Hours | Divine Office guide | Catholics, seekers | Begin praying the Hours | Yes | Yes | Yes | Good prayer hub |
| `/adoration` | Eucharistic Adoration | Stream room plus guide | Catholics, homebound, seekers | Enter Adoration / start a Holy Hour | Yes | Yes | Yes | Kept stream prominent; strong long-form page |
| `/rosary` | Rosary | Rosary hub and prayer room | Catholics, families | Pray the Rosary | Yes | Yes | Yes | Quiet room embeds needed embed hygiene improvements |
| `/confession` | Confession Guide | Preparation and pastoral guidance | Catholics, returning Catholics | Start examination / prepare for confession | Yes | Yes | Yes | High-value pastoral tool |
| `/indulgences` | Indulgences | Guide to indulgences | Catholics | Learn the conditions | Yes | Yes | Yes | Had stale reflection links, now fixed |
| `/saints` | Saints | Saints library and tools | Catholics, seekers, families | Find a saint / Saint of the Day | Yes | Yes | Yes | Homepage card now intentionally compact |
| `/church-fathers` | Church Fathers | Early Church teaching hub | Catholics, seekers | Explore the Fathers | Yes | Yes | Yes | Pairs naturally with Tradition and Councils |
| `/community` | Community | Events, groups, community links | Catholics | Explore events / contact | Not top-level in current header | Yes | Yes | Good route, underused in homepage journey |
| `/about` | About | Mission and editorial posture | Everyone | Learn the mission | Yes | Yes | Yes | Good trust page |
| `/contact` | Contact | Contact form | Contributors, readers | Send a message | Footer / About | Yes | Yes | Recipient updated server-side in previous pass |

### Explore and seeker routes

| Route | Purpose | Audience | In nav | In sitemap | Metadata | Notes |
|---|---|---|---|---|---|---|
| `/explore/first-time-at-mass` | First visit to Mass guide | Seekers, guests | Via Learn | Yes | Yes | Good route for `/mass` and `/explore` cross-linking |
| `/explore/questions` | FAQ hub | Seekers, returning Catholics | Via Learn | Yes | Yes | Useful for misconceptions and low-pressure exploration |
| `/explore/catholic-beliefs` | Plain-English beliefs | Seekers | Related links | Yes | Yes | Good companion page |
| `/explore/mary-and-saints` | Mary and saints explainer | Seekers | Related links | Yes | Yes | Good misconception clarifier |
| `/returning` | Coming home guide | Returning Catholics | Via Learn | Yes | Yes | Strong pastoral route |
| `/glossary` | Catholic terms glossary | Seekers, OCIA, returning Catholics | Via Learn | Yes | Yes | Important support page for difficult terms |
| `/ocia` | Becoming Catholic | Seekers, adults entering Church | Via Learn | Yes | Yes | Key start-here page |

### Prayer, devotion, and reflection families

| Route family | Purpose | Sitemap | Metadata | Notes |
|---|---|---|---|---|
| `/reflections/mass-readings` and children | Reflections hub, archive, calendar, upcoming, detail pages | Yes | Yes | Canonical reflections family |
| `/prayer-intentions` and children | Community prayer, submission, public wall, urgent, thanksgivings | Yes | Yes | Privacy-sensitive; analytics should remain metadata-only |
| `/rule-of-life` and children | Rule builder and saved rule surfaces | Yes | Yes | Local-only tool family |
| `/virtue-tracker` and children | Local virtue review and dashboards | Yes | Yes | Local-only and privacy-sensitive |
| `/pathways` and children | Guided growth pathways | Yes | Yes | Strong growth system, but deeper routes are many |
| `/devotions` and children | Devotion hub and detail pages | Yes | Yes | Good use of canonical detail pattern |
| `/library` and children | Resource hub and dynamic resource pages | Yes | Yes | Useful catch-all, but not a natural first-stop for new users |
| `/adoration/live`, `/adoration/prayers`, `/adoration/[slug]` | Adoration sub-pages | Yes | Yes | Good route family |

### Sacrament and confession families

| Route family | Purpose | Sitemap | Metadata | Notes |
|---|---|---|---|---|
| `/sacraments` and named sacrament pages | Sacrament formation | Yes | Yes | Good coverage across sacrament topics |
| `/sacraments/[slug]` | Dynamic companion route | Yes | Yes | Good canonical detail route |
| `/confession/examination` and children | Guided examination flow | Yes | Yes | Local-only, privacy-sensitive |
| `/confession/how-to-go`, `/confession/prayers`, related topical pages | Practical confession support | Yes | Yes | Good pastoral toolset |

### Community and event routes

| Route family | Purpose | Sitemap | Metadata | Notes |
|---|---|---|---|---|
| `/community/events` and `[slug]` | Event listings and detail pages | Yes | Yes | Valuable but not very discoverable from home |
| `/community/local-faith-groups` | Local faith group support | Yes | Yes | Useful supporting page |
| `/community/group-discussion-topics` | Discussion topics | Yes | Yes | Better as a secondary resource than primary nav item |
| `/community/contact` | Community contact | Yes | Yes | Complements main `/contact` |

### Legacy aliases and redirect-style routes

These exist to preserve older URLs or alternate language patterns.

| Route | Current behavior | Notes |
|---|---|---|
| `/daily-reflections` | Redirects to canonical reflections family | Good legacy preservation |
| `/reflections` | Redirect-style legacy landing | Should remain non-canonical |
| `/reflections/daily` | Redirect-style legacy route | Canonical replacement is `/reflections/mass-readings` |
| `/holy-mass` | Redirect | Canonical replacement is `/mass` |
| `/prayer` | Redirect-style alias | Canonical replacement is `/pray` |
| `/divine-office` | Redirect-style alias | Canonical replacement is `/liturgy-of-the-hours` |
| `/resources` and children | Redirect-style aliases | Canonical replacement is `/library` |
| `/sacraments/marriage` | Redirect-style alias | Canonical replacement is `/sacraments/matrimony` |
| `/rcia` | Redirect recommended / likely implemented through redirects map | Canonical replacement is `/ocia` |
| `/domestic-church` | Redirect | Canonical replacement is `/family` |

## 2. Broken Links Found and Fixed

### Fixed in this pass

- Replaced stale `/reflections/daily` links with `/reflections/mass-readings` in:
  - [src/lib/indulgences.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\lib\indulgences.ts)
  - [src/components/indulgences/HolySoulsIndulgenceSection.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\indulgences\HolySoulsIndulgenceSection.tsx)
  - [src/data/indulgenceOpportunities.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\indulgenceOpportunities.ts)
  - [src/data/indulgenceDetachment.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\indulgenceDetachment.ts)
  - [src/data/commonIndulgencedWorks.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\commonIndulgencedWorks.ts)

### Clarified / bridged

- Added `/ask-for-prayer` redirect support to `/prayer-intentions/submit` in:
  - [src/data/redirects.ts](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\data\redirects.ts)

### Remaining to watch

- `/authority` and `/canon-law` are referenced in the product direction but do not currently exist.
- `/community/prayer-rooms` does not currently exist.
- `/ask-for-prayer` exists as a route family, but there is no top-level `page.tsx` there right now.

## 3. Navigation Issues Found

- The header still reflects older content buckets more than current user intent.
- Learn is much healthier than before because it now scrolls and groups items, but overall top-level information architecture is still crowded.
- Mobile nav is improved for Learn, but the overall site still spreads “start here” routes across Learn, About, and prayer-related routes.
- Community pages are useful but not especially discoverable from the homepage.
- Library remains structurally useful but is not the most intuitive first stop for beginners.

## 4. Recommended Navigation Structure

Recommended top-level grouping for future cleanup:

1. Pray
2. Learn
3. Live
4. Explore
5. Community

This matches how real users arrive:

- `Pray`: immediate devotional need
- `Learn`: Catholic teaching and formation
- `Live`: daily practice and Church year
- `Explore`: low-pressure entry point
- `Community`: prayer requests, events, news, contact

### Safe progress completed this pass

- Strengthened homepage “Start Here” flow
- Added `Ask for Prayer` into visible nav and footer patterns
- Restored the homepage community prayer section

## 5. Pages Missing Metadata

Most canonical public pages already use `createPageMetadata`.

### Missing explicit metadata or using redirect-only files

- `/daily-reflections`
- `/divine-office`
- `/prayer/liturgy-of-the-hours`
- `/prayer`
- `/reflections/[slug]`
- `/reflections/daily`
- `/reflections`
- `/reflections/sunday`
- `/resources/[slug]`
- `/resources`
- `/sacraments/marriage`
- `/saints-devotions`

These are primarily alias or redirect-style pages. They should either:

- remain redirect-only and be excluded or marked non-canonical, or
- receive explicit `noIndex` metadata if they render content rather than immediate redirects.

## 6. Pages Missing Related Links

Highest-value pages that would benefit from stronger 4–8 link clusters:

- `/news`
- `/formation`
- `/mass`
- `/confession`
- `/explore`
- `/pope`
- `/vatican`
- `/family`
- `/catechism`
- `/tradition`
- `/councils`

Some of these already have partial related sections; the main issue is consistency.

## 7. Pages Needing Jump Menus

Recommended jump menus or more visible jump menus on:

- `/mass`
- `/sacraments`
- `/confession`
- `/indulgences`
- `/formation`
- `/saints`
- `/tradition`
- `/councils`
- `/pope`
- `/vatican`
- `/family`
- `/catechism`
- `/pray`

Existing pattern sources:

- [src/app/mass/page.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\app\mass\page.tsx)
- [src/components/indulgences/IndulgencesPageNav.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\indulgences\IndulgencesPageNav.tsx)
- [src/app/liturgical-living/seasons/page.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\app\liturgical-living\seasons\page.tsx)

## 8. Performance Issues Found

- Several prayer-room and meditation pages still used direct `youtube.com/embed` URLs.
- Several iframe embeds were missing `loading="lazy"`.
- Some long pages lean heavily on client components when parts could remain purely server-rendered over time.
- The sitemap is broad and healthy, but a few alias-style pages should stay out of the canonical SEO surface.
- The homepage had a good overall shape, but community support was underexposed relative to its importance.

### Safe performance fixes completed this pass

- Switched several iframe embeds to privacy-enhanced `youtube-nocookie.com`
- Added `loading="lazy"` to those embeds where appropriate

Files updated:

- [src/components/rosary/RosaryQuietRoom.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\rosary\RosaryQuietRoom.tsx)
- [src/components/divine-mercy/DivineMercyQuietRoom.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\divine-mercy\DivineMercyQuietRoom.tsx)
- [src/components/way-of-cross/WayOfCrossQuietRoom.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\way-of-cross\WayOfCrossQuietRoom.tsx)
- [src/components/eucharistic-stations/EucharisticStationsQuietRoom.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\eucharistic-stations\EucharisticStationsQuietRoom.tsx)
- [src/components/resurrection-stations/ResurrectionStationsQuietRoom.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\resurrection-stations\ResurrectionStationsQuietRoom.tsx)
- [src/components/home/YoutubePlaylistSection.tsx](C:\Users\brent\OneDrive\Documents\Codex\Ascension\brotherhood-of-ascension\src\components\home\YoutubePlaylistSection.tsx)

## 9. Accessibility Issues Found

- Long mega-menu content remains a cognitive load, even though overflow is now much better handled.
- Some long educational pages would benefit from more consistent “You are here” cues and jump links.
- External links are generally safe in newer pages, but older areas still deserve spot checks.
- Iframe-heavy prayer pages should continue using clear titles and privacy-safe embed patterns.
- Liturgical accent colors need ongoing contrast review wherever gold is used on ivory or parchment backgrounds.

## 10. Mobile Layout Issues Found

- The homepage was slightly imbalanced below “Today in the Church”; “Start Here” is now stronger and the community section is back in the journey.
- Long header menus remain the biggest mobile comprehension issue, even though Learn itself is now grouped and scrollable.
- Long-form teaching pages vary in how quickly they surface useful anchors.
- Embedded video pages should continue using single-embed-first patterns rather than stacking multiple live iframes high on the page.

## 11. Duplicate Content Concerns

Most repetition is thematic rather than harmful, but the following clusters should continue to be tightened:

- Mass / Eucharist / Sacraments
- Tradition / Councils / Pope / Vatican
- Explore / OCIA / Returning / First Time at Mass
- Pray / Scripture Prayer / Liturgy of the Hours
- Saints / Devotions / Rosary

Recommended editorial pattern:

- keep the clearest explanation on the deepest canonical page
- shorten duplicates elsewhere
- use “Learn more” and related-tool cards
- keep each page’s unique practical next step obvious

## 12. Redirects Added or Recommended

### Added / confirmed in code

- `/ask-for-prayer` → `/prayer-intentions/submit`
- stale indulgence-related links now point to `/reflections/mass-readings`

### Recommended to keep or verify

- `/rcia` → `/ocia`
- `/holy-mass` → `/mass`
- `/daily-reflections` → `/reflections/mass-readings`
- `/becoming-catholic` → `/ocia`
- `/domestic-church` → `/family`
- `/papacy` → `/pope`

### Not implemented this pass because canonical pages do not exist yet

- `/church-authority` → `/authority`
- any `/canon-law` alias, until `/canon-law` exists

## 13. Sitemap Issues

Strengths:

- Sitemap covers major hubs plus dynamic resources, saints, adoration streams, reflections, events, and prayer intentions.
- Canonical hubs like `/explore`, `/returning`, `/glossary`, `/tradition`, `/councils`, `/family`, `/pope`, and `/vatican` are included.

Watch items:

- Alias/redirect pages should not become part of the canonical crawl surface.
- `/ask-for-prayer` is currently better treated as a redirect alias than a primary sitemap target unless a real landing page is added.

## 14. Analytics and Privacy Concerns

Good:

- No evidence in this pass that confession note text or prayer request body text is being sent to analytics.
- Local-only tools like rule builder and virtue tracker are structured in a privacy-conscious way.

Watch:

- Keep prayer-request analytics limited to event counts and non-sensitive metadata.
- Keep confession and examination flows strictly local-only.
- Avoid logging or tracking message bodies, names, emails, or family conflict details in analytics.

## 15. High-Priority Fixes Completed

1. Homepage “Start Here” journey improved
2. Homepage community prayer section restored
3. Footer and nav patterns now expose `Ask for Prayer` more clearly
4. `/ask-for-prayer` alias redirect added
5. Indulgence-related broken links updated to canonical reflections route
6. Several YouTube embeds upgraded to privacy-enhanced `youtube-nocookie.com`
7. Lazy loading added to those embeds

## 16. Recommended Future Improvements

### High priority

- Re-center the top-level header around `Pray`, `Learn`, `Live`, `Explore`, and `Community`
- Add or standardize jump menus on the longest teaching pages
- Add consistent “Your Next Step” panels to major hubs
- Add more disciplined related-link blocks to `/news`, `/formation`, `/mass`, `/confession`, `/catechism`, `/tradition`, and `/councils`

### Medium priority

- Add a real top-level `/ask-for-prayer` landing page if that route should become canonical
- Mark redirect-style alias pages as `noIndex` where they render content instead of immediate redirects
- Add more glossary linking for first-use terms on seeker pages
- Standardize breadcrumb use on all deeper educational routes

### Lower priority

- Continue moving legacy YouTube embeds toward click-to-load or staged-load patterns where multiple embeds appear
- Review unused or overlapping child pages in route families like `pathways`, `virtue-tracker`, and `community`

## Completed Build Check

- `npm run build` passed after the improvements in this pass
