import type { MetadataRoute } from "next";
import { primaryNavigation } from "@/config/navigation";
import { rosaryMysteries, rosaryMysteryGroups } from "@/data/rosaryMysteries";
import { getPublishedAdorationStreams } from "@/lib/adoration";
import { getPublishedEvents } from "@/lib/community";
import { getPublishedMassReadingsReflectionsData } from "@/lib/massReadingsReflections";
import { getApprovedDevotions } from "@/lib/devotions";
import { getPublishedPathways } from "@/lib/pathways";
import { getApprovedMediaItems } from "@/lib/media";
import { getApprovedPrayerIntentions } from "@/lib/prayerIntentions";
import { publishedResources } from "@/lib/resources";
import { getPublishedSacramentCompanions } from "@/lib/sacraments";
import { getPublishedSaints } from "@/lib/saints";
import { absoluteUrl, hasMalformedUrlPattern, isInternalHref, normalizeInternalHref, validateSingleUrl } from "@/lib/url";

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const liturgicalLivingPages = [
    { label: "Today", href: "/today" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Liturgical Calendar", href: "/liturgical-living/calendar" },
    { label: "Liturgical Seasons", href: "/liturgical-living/seasons" },
    { label: "Advent", href: "/liturgical-living/advent" },
    { label: "Catholic Lent Guide", href: "/liturgical-living/lent" },
    { label: "Catholic Fasting and Abstinence Guide", href: "/liturgical-living/lent/fasting-and-abstinence" },
    { label: "O Antiphons", href: "/liturgical-living/advent/o-antiphons" },
    { label: "Christmas", href: "/liturgical-living/christmas" },
    { label: "Epiphany", href: "/liturgical-living/christmas/epiphany" },
    { label: "Epiphany House Blessing", href: "/liturgical-living/christmas/epiphany/house-blessing" },
    { label: "Holy Days", href: "/liturgical-living/holy-days" },
    { label: "Family Liturgical Living", href: "/liturgical-living/family" },
    { label: "Liturgical Settings", href: "/liturgical-living/settings" },
  ];
  const startHerePages = [
    { label: "Begin in Prayer", href: "/begin-in-prayer" },
    { label: "What Should I Do?", href: "/what-should-i-do" },
    { label: "Catholic Q&A", href: "/catholic-answers" },
    { label: "Prayer Library", href: "/prayers" },
  ];
  const ruleOfLifePages = [
    { label: "Rule of Life", href: "/rule-of-life" },
    { label: "Rule Builder", href: "/rule-of-life/builder" },
    { label: "My Rule", href: "/rule-of-life/my-rule" },
    { label: "Rule Templates", href: "/rule-of-life/templates" },
    { label: "Print Rule", href: "/rule-of-life/print" },
  ];
  const dailyExamenPages = [{ label: "Daily Examen", href: "/daily-examen" }];
  const pathwayPages = [
    { label: "Pathways", href: "/pathways" },
    { label: "Start Pathway", href: "/pathways/start" },
    { label: "My Pathways", href: "/pathways/my-pathways" },
    { label: "Recommended Pathways", href: "/pathways/recommended" },
    { label: "Pathway Settings", href: "/pathways/settings" },
  ];
  const sacramentPages = [
    { label: "Sacraments", href: "/sacraments" },
    { label: "Baptism", href: "/sacraments/baptism" },
    { label: "Confirmation", href: "/sacraments/confirmation" },
    { label: "Eucharist", href: "/sacraments/eucharist" },
    { label: "Reconciliation", href: "/sacraments/reconciliation" },
    { label: "Anointing of the Sick", href: "/sacraments/anointing" },
    { label: "Matrimony", href: "/sacraments/matrimony" },
    { label: "Holy Orders", href: "/sacraments/holy-orders" },
    { label: "OCIA", href: "/sacraments/ocia" },
    { label: "Sponsor and Godparent Guide", href: "/sacraments/sponsor-godparent" },
    { label: "First Communion", href: "/sacraments/first-communion" },
    { label: "Sacrament Companions", href: "/sacraments/companion" },
    { label: "Prepare for a Sacrament", href: "/sacraments/prepare" },
    { label: "My Sacrament Preparation", href: "/sacraments/my-preparation" },
    { label: "Print Sacrament Preparation", href: "/sacraments/print" },
  ];
  const confessionPages = [
    { label: "Confession Guide", href: "/confession" },
    { label: "Guided Examination", href: "/confession/examination" },
    { label: "Start Examination", href: "/confession/examination/start" },
    { label: "Ten Commandments Examination", href: "/confession/examination/ten-commandments" },
    { label: "Beatitudes Examination", href: "/confession/examination/beatitudes" },
    { label: "State of Life Examination", href: "/confession/examination/state-of-life" },
    { label: "Virtues Examination", href: "/confession/examination/virtues" },
    { label: "Review Examination", href: "/confession/examination/review" },
    { label: "How to Go to Confession", href: "/confession/how-to-go" },
    { label: "Sins", href: "/confession/sins" },
    { label: "Habitual Sin", href: "/confession/habitual-sin" },
    { label: "Resisting Temptation", href: "/confession/resisting-temptation" },
    { label: "Predominant Fault", href: "/confession/predominant-fault" },
    { label: "Confession Prayers", href: "/confession/prayers" },
  ];
  const virtueTrackerPages = [
    { label: "Virtue Tracker", href: "/virtue-tracker" },
    { label: "Virtue Tracker Dashboard", href: "/virtue-tracker/dashboard" },
    { label: "Virtue Tracker Check-In", href: "/virtue-tracker/check-in" },
    { label: "Virtue Library", href: "/virtue-tracker/virtues" },
    { label: "Vice Library", href: "/virtue-tracker/vices" },
    { label: "Virtue Patterns", href: "/virtue-tracker/patterns" },
    { label: "Virtue Confession Prep", href: "/virtue-tracker/confession-prep" },
    { label: "Virtue Tracker Settings", href: "/virtue-tracker/settings" },
  ];
  const saintPages = [
    { label: "Saints", href: "/saints" },
    { label: "Saint Finder", href: "/saints/finder" },
    { label: "Saint of the Day", href: "/saints/saint-of-the-day" },
    { label: "Saved Saint Companions", href: "/saints/companions" },
    { label: "Saint Calendar", href: "/saints/calendar" },
    { label: "Patron Saints", href: "/saints/patron-saints" },
    { label: "Saints by Virtue", href: "/saints/virtues" },
    { label: "Saint Reading Plan", href: "/saints/reading-plan" },
    { label: "Confirmation Saint Helper", href: "/saints/confirmation" },
    { label: "Saint Patronage", href: "/saints/patronage" },
    { label: "Saint Settings", href: "/saints/settings" },
  ];
  const prayerIntentionPages = [
    { label: "Prayer Intentions", href: "/prayer-intentions" },
    { label: "Mass Intentions", href: "/mass-intentions" },
    { label: "Candle Intentions", href: "/candle-intentions" },
    { label: "Submit Prayer Intention", href: "/prayer-intentions/submit" },
    { label: "Urgent Prayer Intentions", href: "/prayer-intentions/urgent" },
    { label: "Thanksgiving Intentions", href: "/prayer-intentions/thanksgivings" },
    { label: "Prayer Intention Guidelines", href: "/prayer-intentions/guidelines" },
  ];
  const adorationPages = [
    { label: "Live Adoration Portal", href: "/adoration" },
    { label: "Perpetual Adoration in Melbourne", href: "/adoration/melbourne" },
    { label: "Live Adoration Streams", href: "/adoration/live" },
    { label: "How to Make a Holy Hour", href: "/adoration/holy-hour" },
    { label: "Adoration Prayers", href: "/adoration/prayers" },
    { label: "Submit Adoration Stream", href: "/adoration/submit-stream" },
    { label: "Eucharistic Miracles", href: "/eucharistic-miracles" },
  ];
  const rosaryPages = [
    { label: "Holy Rosary", href: "/rosary" },
    { label: "Way of the Cross", href: "/way-of-cross" },
    { label: "Joyful Mysteries", href: "/rosary/joyful-mysteries" },
    { label: "Sorrowful Mysteries", href: "/rosary/sorrowful-mysteries" },
    { label: "Glorious Mysteries", href: "/rosary/glorious-mysteries" },
    { label: "Luminous Mysteries", href: "/rosary/luminous-mysteries" },
    { label: "Latin Rosary", href: "/rosary/latin-rosary" },
  ];
  const devotionRosaryPages = [
    { label: "Holy Rosary Guide", href: "/devotions/holy-rosary" },
    ...rosaryMysteryGroups.map((group) => ({ label: group.title, href: `/devotions/holy-rosary/${group.slug}` })),
    ...rosaryMysteries.map((mystery) => ({ label: mystery.title, href: mystery.fullPath })),
  ];
  const reflectionPages = [
    { label: "Mass Readings Reflections", href: "/reflections/mass-readings" },
    { label: "Mass Readings Archive", href: "/reflections/mass-readings/archive" },
    { label: "Mass Readings Calendar", href: "/reflections/mass-readings/calendar" },
    { label: "Upcoming Mass Readings Reflections", href: "/reflections/mass-readings/upcoming" },
  ];
  const massPages = [
    { label: "The Holy Mass", href: "/mass" },
    { label: "Returning to Mass", href: "/returning-to-mass" },
  ];
  const catholicLifePages = [{ label: "Catholic Life Roadmap", href: "/catholic-life" }];
  const sacramentalEmergencyPages = [{ label: "Sacramental Emergency Guide", href: "/sacramental-emergency" }];
  const biblePages = [{ label: "The Bible and Sacred Scripture", href: "/bible" }];
  const bodySoulSpiritPages = [{ label: "Body, Soul, and Spirit", href: "/body-soul-spirit" }];
  const sinAndTemptationPages = [
    { label: "Sin, Temptation, and Conversion", href: "/sin-and-temptation" },
    { label: "Catholic Spiritual Warfare and Deliverance", href: "/spiritual-warfare" },
    { label: "Venial and Mortal Sin", href: "/sin-and-temptation/venial-and-mortal-sin" },
    { label: "Habitual Sin", href: "/sin-and-temptation/habitual-sin" },
    { label: "Predominant Fault", href: "/sin-and-temptation/predominant-fault" },
    { label: "Resisting Temptation", href: "/sin-and-temptation/resisting-temptation" },
    { label: "Near Occasions of Sin", href: "/sin-and-temptation/near-occasions-of-sin" },
    { label: "Examination and Confession", href: "/sin-and-temptation/examination-and-confession" },
    { label: "Virtue, Healing, and Freedom", href: "/sin-and-temptation/virtue-and-healing" },
  ];
  const scripturePages = [{ label: "Scripture Prayer", href: "/library/scripture-prayer" }];
  const prayerGuidePages = [
    { label: "The Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms" },
    { label: "Catholic Litanies", href: "/prayers/litanies" },
    { label: "The Angelus", href: "/prayers/angelus" },
    { label: "Regina Caeli", href: "/prayers/regina-caeli" },
    { label: "Magnificat Guide", href: "/prayers/magnificat" },
    { label: "Litany of Loreto Guide", href: "/prayers/litany-of-loreto" },
    { label: "O Sacrum Convivium Guide", href: "/prayers/o-sacrum-convivium" },
    { label: "Tantum Ergo Guide", href: "/prayers/tantum-ergo" },
    { label: "O Salutaris Hostia Guide", href: "/prayers/o-salutaris-hostia" },
    { label: "Litany of Humility Guide", href: "/prayers/litany-of-humility" },
    { label: "Breastplate of St. Patrick Guide", href: "/prayers/breastplate-of-st-patrick" },
    { label: "Catholic Novenas", href: "/prayers/novenas" },
    { label: "Novena to the Sacred Heart of Jesus", href: "/prayers/novena-to-the-sacred-heart-of-jesus" },
    { label: "Psalm 23 Guide", href: "/prayers/psalm-23" },
    { label: "Veni Creator Spiritus Guide", href: "/prayers/veni-creator-spiritus" },
    { label: "Confiteor Guide", href: "/prayers/confiteor" },
    { label: "Advent Wreath Prayers", href: "/prayers/advent-wreath-prayers" },
    { label: "Christmas Blessing Prayer", href: "/prayers/christmas-blessing" },
    { label: "Lenten Prayer", href: "/prayers/lenten-prayer" },
    { label: "Good Friday Reproaches Guide", href: "/prayers/good-friday-reproaches" },
    { label: "Come, Holy Spirit", href: "/prayers/come-holy-spirit" },
  ];
  const formationPages = [{ label: "Catholic Formation", href: "/formation" }];
  const gracePages = [
    { label: "Grace", href: "/formation/grace" },
    { label: "Sanctifying Grace", href: "/formation/grace/sanctifying-grace" },
    { label: "Actual Grace", href: "/formation/grace/actual-grace" },
    { label: "Sacramental Grace", href: "/formation/grace/sacramental-grace" },
    { label: "Charisms", href: "/formation/grace/charisms" },
    { label: "Cooperating with Grace", href: "/formation/grace/cooperating-with-grace" },
  ];
  const eschatologyPages = [
    { label: "Catholic Eschatology", href: "/formation/eschatology" },
    { label: "Death and Christian Hope", href: "/formation/eschatology/death" },
    { label: "Particular Judgment and Final Judgment", href: "/formation/eschatology/judgment" },
    { label: "Heaven and the Beatific Vision", href: "/formation/eschatology/heaven" },
    { label: "Hell and the Seriousness of Freedom", href: "/formation/eschatology/hell" },
    { label: "Purgatory and Final Purification", href: "/formation/eschatology/purgatory" },
    { label: "The Resurrection of the Body", href: "/formation/eschatology/resurrection-of-the-body" },
    { label: "The Second Coming of Christ", href: "/formation/eschatology/second-coming" },
  ];
  const catholicBurialPages = [
    { label: "Catholic Burial, Cremation, and Funeral Rites", href: "/formation/catholic-burial" },
    { label: "Catholic Cremation Guide", href: "/formation/catholic-burial/cremation" },
    { label: "Catholic Funeral Rites", href: "/formation/catholic-burial/funeral-rites" },
    { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" },
    { label: "Planning a Catholic Funeral", href: "/formation/catholic-burial/planning-a-catholic-funeral" },
  ];
  const indulgencePages = [
    { label: "Catholic Indulgences Guide", href: "/indulgences" },
    { label: "Complete Detachment from Sin", href: "/indulgences/detachment-from-sin" },
    { label: "Prayers and Devotions with Indulgences", href: "/indulgences/prayers-and-devotions" },
  ];
  const studyPages = [{ label: "Church Fathers Library", href: "/church-fathers" }];
  const devotionPages = [
    { label: "Catholic Devotions Library", href: "/devotions" },
    { label: "Sacred Heart Seven Senses Meditation", href: "/devotions/sacred-heart-of-jesus/seven-senses-meditation" },
  ];
  const sacramentalPages = [{ label: "Catholic Sacramentals", href: "/sacramentals" }];
  const relicPages = [{ label: "Catholic Relics", href: "/relics" }];
  const newsPages = [{ label: "Catholic News", href: "/news" }];
  const catechismPages = [{ label: "Catechism of the Catholic Church", href: "/catechism" }];
  const angelsPages = [{ label: "Angels and the Invisible World", href: "/angels" }];
  const explorePages = [
    { label: "Explore the Catholic Faith", href: "/explore" },
    { label: "First Time at Mass", href: "/explore/first-time-at-mass" },
    { label: "Common Questions About Catholicism", href: "/explore/questions" },
    { label: "Catholic Beliefs", href: "/explore/catholic-beliefs" },
    { label: "Mary and the Saints", href: "/explore/mary-and-saints" },
  ];
  const ociaPages = [{ label: "Becoming Catholic", href: "/ocia" }];
  const returningPages = [
    { label: "Coming Home to the Catholic Church", href: "/returning" },
    { label: "Returning to Mass", href: "/returning-to-mass" },
  ];
  const glossaryPages = [{ label: "Catholic Terms Glossary", href: "/glossary" }];
  const traditionPages = [{ label: "Sacred Tradition", href: "/tradition" }];
  const councilPages = [{ label: "Councils of the Church", href: "/councils" }];
  const familyPages = [{ label: "The Domestic Church", href: "/family" }];
  const popePages = [{ label: "The Pope and the Papacy", href: "/pope" }];
  const vaticanPages = [{ label: "The Vatican", href: "/vatican" }];
  const mediaPages = [{ label: "Catholic Media Library", href: "/media" }];
  const featuredSeriesPages = [{ label: "Prophecy Series", href: "/prophecy-series" }];
  const homilyPages = [{ label: "Catholic Homilies Library", href: "/homilies" }];
  const searchPages = [{ label: "Search", href: "/search" }];
  const liturgyHoursPages = [{ label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" }];
  const dailyPrayerPages = [{ label: "Today's Suggested Prayer", href: "/pray/today" }];
  const communityPages = [
    { label: "Community Events", href: "/community/events" },
    { label: "Local Faith Groups", href: "/community/local-faith-groups" },
    { label: "Group Discussion Topics", href: "/community/group-discussion-topics" },
    { label: "Community Contact", href: "/community/contact" },
  ];
  const toolPages = [{ label: "Heavenbound Spiritual Companion", href: "/tools/heavenbound" }];
  const aboutPages = [
    { label: "About Daily Oratory", href: "/about" },
    { label: "The Mission of the Church", href: "/mission" },
    { label: "Contact", href: "/contact" },
  ];
  const pages = [{ label: "Home", href: "/" }, ...primaryNavigation, ...startHerePages, ...toolPages, ...aboutPages, ...rosaryPages, ...devotionRosaryPages, ...reflectionPages, ...massPages, ...catholicLifePages, ...sacramentalEmergencyPages, ...biblePages, ...bodySoulSpiritPages, ...sinAndTemptationPages, ...scripturePages, ...prayerGuidePages, ...formationPages, ...gracePages, ...eschatologyPages, ...catholicBurialPages, ...indulgencePages, ...studyPages, ...devotionPages, ...sacramentalPages, ...relicPages, ...newsPages, ...catechismPages, ...angelsPages, ...dailyExamenPages, ...explorePages, ...ociaPages, ...returningPages, ...glossaryPages, ...traditionPages, ...councilPages, ...familyPages, ...popePages, ...vaticanPages, ...mediaPages, ...featuredSeriesPages, ...homilyPages, ...searchPages, ...liturgyHoursPages, ...dailyPrayerPages, ...adorationPages, ...liturgicalLivingPages, ...ruleOfLifePages, ...pathwayPages, ...sacramentPages, ...confessionPages, ...virtueTrackerPages, ...saintPages, ...prayerIntentionPages, ...communityPages]
    .map((item) => buildSitemapEntry(item.href, new Date(), item.label))
    .filter(isSitemapEntry);

  const resourcePages = publishedResources
    .filter((resource) => !["spiritual-growth", "confession-guide", "sins", "habitual-sin", "resisting-temptation", "predominant-fault", "daily-mass-reflections", "sunday-gospel-reflections"].includes(resource.slug))
    .map((resource) => buildSitemapEntry(`/library/${resource.slug}`, new Date(resource.updatedAt), `resource:${resource.slug}`))
    .filter(isSitemapEntry);
  const dynamicPathwayPages = getPublishedPathways().flatMap((pathway) => [
    buildSitemapEntry(`/pathways/${pathway.slug}`, new Date(pathway.updatedAt), `pathway:${pathway.slug}`),
    ...pathway.modules.map((step) =>
      buildSitemapEntry(`/pathways/${pathway.slug}/steps/${step.slug}`, new Date(pathway.updatedAt), `pathway-step:${pathway.slug}:${step.slug}`),
    ),
  ]).filter(isSitemapEntry);
  const dynamicSacramentPages = getPublishedSacramentCompanions()
    .map((companion) => buildSitemapEntry(companion.route, new Date(companion.updatedAt), `sacrament:${companion.route}`))
    .filter(isSitemapEntry);
  const dynamicSaintPages = getPublishedSaints()
    .map((saint) => buildSitemapEntry(`/saints/${saint.slug}`, new Date(saint.updatedAt), `saint:${saint.slug}`))
    .filter(isSitemapEntry);
  const dynamicPrayerIntentionPages = getApprovedPrayerIntentions()
    .map((intention) => buildSitemapEntry(`/prayer-intentions/${intention.slug}`, new Date(intention.updatedAt), `intention:${intention.slug}`))
    .filter(isSitemapEntry);
  const dynamicAdorationPages = getPublishedAdorationStreams()
    .map((stream) => buildSitemapEntry(`/adoration/${stream.slug}`, new Date(stream.updatedAt), `adoration:${stream.slug}`))
    .filter(isSitemapEntry);
  const massReadingReflections = await getPublishedMassReadingsReflectionsData();
  const dynamicDevotionPages = getApprovedDevotions()
    .map((devotion) => buildSitemapEntry(`/devotions/${devotion.slug}`, new Date(), `devotion:${devotion.slug}`))
    .filter(isSitemapEntry);
  const dynamicReflectionPages = massReadingReflections
    .map((reflection) => buildSitemapEntry(`/reflections/mass-readings/${reflection.slug}`, new Date(reflection.updatedAt), `reflection:${reflection.slug}`))
    .filter(isSitemapEntry);
  const dynamicEventPages = getPublishedEvents()
    .map((event) => buildSitemapEntry(`/community/events/${event.slug}`, new Date(event.updatedAt), `event:${event.slug}`))
    .filter(isSitemapEntry);
  const dynamicMediaPages = (await getApprovedMediaItems())
    .map((item) => buildSitemapEntry(`/media/${item.slug}`, new Date(item.updatedDate), `media:${item.slug}`))
    .filter(isSitemapEntry);

  return addSeoHints([
    ...pages,
    ...resourcePages,
    ...dynamicPathwayPages,
    ...dynamicSacramentPages,
    ...dynamicSaintPages,
    ...dynamicPrayerIntentionPages,
    ...dynamicAdorationPages,
    ...dynamicDevotionPages,
    ...dynamicReflectionPages,
    ...dynamicEventPages,
    ...dynamicMediaPages,
  ]);
}

function addSeoHints(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  return dedupeByUrl(entries).map((entry) => ({
    ...entry,
    changeFrequency: getChangeFrequency(entry.url),
    priority: getPriority(entry.url),
  }));
}

function dedupeByUrl(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  return Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());
}

function buildSitemapEntry(
  href: string,
  lastModified: Date,
  source: string,
): MetadataRoute.Sitemap[number] | null {
  try {
    const validation = validateSingleUrl(href);
    if (!validation.ok) {
      logSitemapWarning(`Skipping invalid sitemap source from ${source}`, `${href} (${validation.reason})`);
      return null;
    }

    const normalizedHref = normalizeInternalHref(href);

    if (!isInternalHref(normalizedHref)) {
      logSitemapWarning(`Skipping external URL from ${source}`, href);
      return null;
    }

    const url = absoluteUrl(normalizedHref);

    if (isMalformedSitemapUrl(url)) {
      logSitemapWarning(`Skipping malformed sitemap URL from ${source}`, href);
      return null;
    }

    return { url, lastModified };
  } catch (error) {
    logSitemapWarning(`Skipping invalid sitemap URL from ${source}`, href, error);
    return null;
  }
}

function isSitemapEntry(entry: MetadataRoute.Sitemap[number] | null): entry is MetadataRoute.Sitemap[number] {
  return Boolean(entry);
}

function isMalformedSitemapUrl(url: string) {
  return (
    hasMalformedUrlPattern(url) ||
    /\s/.test(url) ||
    url.includes("http://dailyoratory.faith") ||
    /dailyoratory\.faith.*dailyoratory\.faith/i.test(url)
  );
}

function logSitemapWarning(message: string, value: string, error?: unknown) {
  const details = error instanceof Error ? ` (${error.message})` : "";
  console.warn(`[sitemap] ${message}: ${value}${details}`);
}

function getChangeFrequency(url: string): "daily" | "weekly" | "monthly" {
  const pathname = new URL(url).pathname;
  if (pathname === "/" || pathname === "/today" || pathname.startsWith("/reflections/mass-readings")) return "daily";
  if (pathname.startsWith("/community/events") || pathname.startsWith("/prayer-intentions")) return "weekly";
  return "monthly";
}

function getPriority(url: string) {
  const pathname = new URL(url).pathname;
  if (pathname === "/") return 1;
  if (
    [
      "/what-should-i-do",
      "/catholic-life",
      "/catholic-answers",
      "/prayers",
      "/pray",
      "/daily-examen",
      "/pray/today",
      "/rosary",
      "/devotions/holy-rosary",
      "/confession",
      "/mass",
      "/bible",
      "/body-soul-spirit",
      "/sin-and-temptation",
      "/spiritual-warfare",
      "/reflections/mass-readings",
      "/formation",
      "/formation/grace",
      "/formation/eschatology",
      "/news",
      "/catechism",
      "/angels",
      "/relics",
      "/explore",
      "/ocia",
      "/returning",
      "/glossary",
      "/tradition",
      "/councils",
      "/family",
      "/pope",
      "/vatican",
      "/media",
      "/prophecy-series",
      "/homilies",
      "/search",
      "/indulgences",
      "/sacramentals",
      "/liturgy-of-the-hours",
      "/liturgical-living",
      "/liturgical-living/lent",
      "/sacraments",
      "/saints",
      "/community",
      "/library",
      "/adoration",
      "/sacramental-emergency",
      "/mission",
    ].includes(pathname)
  ) {
    return 0.9;
  }
  if (pathname.startsWith("/devotions/holy-rosary/")) return 0.7;
  if (pathname.startsWith("/library/") || pathname.startsWith("/reflections/")) return 0.7;
  return 0.6;
}
