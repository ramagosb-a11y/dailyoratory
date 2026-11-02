# UX implementation — redesign-r1

Owner instruction: complete redesign of the eight named Daily Oratory pages, more photography, less unnecessary space, alignment with newer site pages, and full team review. Parent coordinator assigned implementation of Pray, Formation, and Catechism. No production authorization is inferred here.

## Presentation and content disposition

- All three routes retain metadata and use the shared editorial photographic hero, two primary actions, compact section navigation, and photo destination cards. Existing data models, route URLs, and client tool islands are reused.
- Catechism: moved topic finder to the first task; retained four pillars, paragraph ranges, reading plan, study method, Compendium, FAQ, official resources, and copyright note. Consolidated repeated introduction/why/audience panels into the introductory summary. Consolidated Scripture/Mass/prayer/moral-life navigation into Scripture, sacramental-life, and formation destination cards. No Catechism quotations or source data were edited.
- Formation: moved pathway selector first; combined five large featured promos into three image cards and two compact links. Retained the complete existing doctrine topics, virtue entries, spiritual practices, weekly plan, challenge, state-of-life guidance, seasonal guidance, obstacles, library, trusted sources, and pastoral note. Focused disclosures make these optional reading journeys; repeat pillar/ladder/navigation promos are not rendered. Existing doctrine, virtue, spiritual-growth, and formation-selector anchors remain.
- Pray: kept all 16 existing prayer entries accessible, with Morning Offering expanded and individual native disclosures for the rest. Retained need selector, rhythm builder, the seasonal Marian prayer, basics, levels/types, obstacles, available media, FAQ, trusted resources, and copyright. Repeated daily-path/promotional sections became compact destination links. Fourteen category cards (thirteen leading to the same generic library) became direct prayer-library and litanies links, alongside specific prayer destinations. No prayer text was edited. Suggested-prayer links now target the corresponding prayer disclosure.
- Native disclosure content stays server-rendered. No carousel, autoplay, new form input, CMS, feed, paid service, or new dependency was introduced.

## Privacy and functional adjustments

- Removed Catechism topic selection/copy payloads and selected-topic/resource-URL parameters from topic-finder analytics. Retained generic official-resource click metadata.
- Removed Formation pathway-selection/copy analytics that transmitted the selected need or generated recommendation.
- Removed prayer-need selection and prayer-rhythm selection analytics to match their existing local-state privacy descriptions. No new event names were introduced.
- Added announced clipboard success/failure status to retained prayer, Catechism, Formation, weekly/challenge, and rhythm copy tools. Failure leaves the text available for manual selection.
- Formation recommendation destinations are now actual focusable links rather than plain-text list entries.

## Validation

- Read the installed Next.js server/client component and image guidance before implementation.
- Targeted ESLint passed for the three routes and nine modified supporting components.
- TypeScript passed after the shared photography manifest became available. The initial run reported only the then-missing manifest; there were no owned-file type errors.
- Pending browser checks: 360px/desktop composition, target anchors into disclosures, keyboard navigation, selector/reset behavior, clipboard denial, image credits/alt text, and no horizontal overflow.
