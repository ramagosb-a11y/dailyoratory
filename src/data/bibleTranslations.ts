import type { BibleTranslation } from "@/types/bible";

const usccbApprovedTranslationsUrl =
  "https://www.usccb.org/offices/new-american-bible/approved-translations-bible";

export const bibleTranslations: BibleTranslation[] = [
  {
    id: "bible-translation-nabre",
    title: "New American Bible, Revised Edition",
    abbreviation: "NABRE",
    slug: "nabre",
    description:
      "A clear Catholic translation commonly used in the United States for reading, study, and following the daily readings.",
    bestFor: "U.S. Catholics who want to follow the USCCB daily readings and begin with a familiar Catholic edition.",
    readingLevel: "Beginner to intermediate",
    catholicApprovedNote:
      "Widely used for Catholic reading and study in the United States. The USCCB readings site is especially easy to follow with NABRE.",
    regionNote:
      "Liturgical wording and approved editions vary by country, even when the translation family is familiar.",
    officialInfoUrl: usccbApprovedTranslationsUrl,
    sortOrder: 10,
  },
  {
    id: "bible-translation-rsv-ce",
    title: "Revised Standard Version, Catholic Edition / Second Catholic Edition",
    abbreviation: "RSV-CE / RSV-2CE",
    slug: "rsv-ce",
    description:
      "A literary Catholic translation often chosen for study, apologetics, and careful reading with a more formal tone.",
    bestFor: "Readers who want strong study habits, clear wording, and a more traditional feel without moving to older English.",
    readingLevel: "Intermediate",
    catholicApprovedNote:
      "Popular among Catholics for study, discipleship groups, and theological comparison.",
    regionNote:
      "Check local publishing and bishops' conference guidance when choosing a specific Catholic edition.",
    officialInfoUrl: usccbApprovedTranslationsUrl,
    sortOrder: 20,
  },
  {
    id: "bible-translation-nrsv-ce",
    title: "New Revised Standard Version, Catholic Edition",
    abbreviation: "NRSV-CE",
    slug: "nrsv-ce",
    description:
      "A modern Catholic edition often used in academic study, ecumenical settings, and careful comparison across translations.",
    bestFor: "Readers who want academic study, class use, or a translation often recognized across Christian contexts.",
    readingLevel: "Intermediate to advanced",
    catholicApprovedNote:
      "Helpful for study and comparison, especially when you want a broadly recognized modern translation.",
    regionNote:
      "Approval and liturgical use can vary by conference and publisher.",
    officialInfoUrl: usccbApprovedTranslationsUrl,
    sortOrder: 30,
  },
  {
    id: "bible-translation-douay-rheims",
    title: "Douay-Rheims",
    abbreviation: "DR",
    slug: "douay-rheims",
    description:
      "A historic English Catholic translation with older wording that many readers find beautiful, solemn, and devotional.",
    bestFor: "Readers drawn to older traditional English and historic Catholic devotional reading.",
    readingLevel: "Advanced or patient beginner",
    catholicApprovedNote:
      "A historic Catholic translation valued for its heritage, though its language can be demanding for beginners.",
    regionNote:
      "This is not the current U.S. liturgical wording. Check edition and publisher details before buying.",
    officialInfoUrl: usccbApprovedTranslationsUrl,
    sortOrder: 40,
  },
  {
    id: "bible-translation-jerusalem",
    title: "New Jerusalem Bible / Revised New Jerusalem Bible",
    abbreviation: "NJB / RNJB",
    slug: "jerusalem-bible",
    description:
      "A readable Catholic translation family often chosen for prayerful reading, study, and literary flow depending on edition and region.",
    bestFor: "Readers who want a prayer-friendly Catholic Bible with smooth English and a distinct literary voice.",
    readingLevel: "Beginner to intermediate",
    catholicApprovedNote:
      "A respected Catholic option in many regions, especially for personal reading and prayer.",
    regionNote:
      "Regional use varies. Verify the exact edition recommended in your country or parish setting.",
    officialInfoUrl: usccbApprovedTranslationsUrl,
    sortOrder: 50,
  },
  {
    id: "bible-translation-regional-approved",
    title: "Christian Community Bible and Other Approved Regional Editions",
    abbreviation: "Regional editions",
    slug: "regional-approved-editions",
    description:
      "Some Catholic communities use approved editions that are especially common in their own country, region, or pastoral setting.",
    bestFor: "Readers outside the United States or anyone choosing a Bible with parish or family guidance in their own region.",
    readingLevel: "Varies by edition",
    catholicApprovedNote:
      "Always verify Catholic approval and the full Catholic canon for the exact edition you are considering.",
    regionNote:
      "Approved translations and liturgical editions differ by bishops' conference, language, and country.",
    officialInfoUrl: usccbApprovedTranslationsUrl,
    sortOrder: 60,
  },
];
