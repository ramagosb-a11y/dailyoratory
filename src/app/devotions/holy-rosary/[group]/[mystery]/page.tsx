import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { PrayThisDecade } from "@/components/rosary/PrayThisDecade";
import { RosaryContemplationPoints } from "@/components/rosary/RosaryContemplationPoints";
import { RosaryContemplativePause } from "@/components/rosary/RosaryContemplativePause";
import { RosaryDecadePrayer } from "@/components/rosary/RosaryDecadePrayer";
import { RosaryFruitOfMystery } from "@/components/rosary/RosaryFruitOfMystery";
import { RosaryMeditationConclusion } from "@/components/rosary/RosaryMeditationConclusion";
import { RosaryMysteryDetailHero } from "@/components/rosary/RosaryMysteryDetailHero";
import { RosaryMysteryNavigation } from "@/components/rosary/RosaryMysteryNavigation";
import { RosaryOpeningPrayer } from "@/components/rosary/RosaryOpeningPrayer";
import { RosaryPracticeToday } from "@/components/rosary/RosaryPracticeToday";
import { RosaryReflectionQuestions } from "@/components/rosary/RosaryReflectionQuestions";
import { RosaryRelatedLinks } from "@/components/rosary/RosaryRelatedLinks";
import { RosaryScriptureScene } from "@/components/rosary/RosaryScriptureScene";
import { RosaryScriptureForMeditation } from "@/components/rosary/RosaryScriptureForMeditation";
import { SevenSensesMeditation } from "@/components/rosary/SevenSensesMeditation";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import {
  getMysteryBySlug,
  getNextMystery,
  getPreviousMystery,
  getRosaryMysteries,
  getRosaryMysteryGroups,
} from "@/lib/rosary";

const FALLBACK_OPENING_PRAYER =
  "Lord Jesus, draw me into this mystery of the Rosary. Open my heart to receive the grace You desire to give me, and teach me to contemplate Your life with Mary's faith, humility, and love. Amen.";

export function generateStaticParams() {
  return getRosaryMysteries().map((mystery) => ({
    group: mystery.groupSlug,
    mystery: mystery.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string; mystery: string }>;
}): Promise<Metadata> {
  const { group, mystery } = await params;
  const groupRecord = getRosaryMysteryGroups().find((item) => item.slug === group);
  const mysteryRecord = getMysteryBySlug(group, mystery);
  if (!groupRecord || !mysteryRecord) return {};

  if (group === "joyful-mysteries" && mystery === "annunciation") {
    return createPageMetadata({
      title: "The Annunciation | First Joyful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Annunciation, the First Joyful Mystery and First Joyful Decade of the Rosary, with Scripture, sensory meditation, humility, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Annunciation",
        "First Joyful Mystery",
        "First Joyful Decade",
        "Rosary meditation",
        "Mary's fiat",
        "Luke 1:26-38",
        "humility",
        "Incarnation",
      ],
    });
  }

  if (group === "joyful-mysteries" && mystery === "visitation") {
    return createPageMetadata({
      title: "The Visitation | Second Joyful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Visitation, the Second Joyful Mystery and Second Joyful Decade of the Rosary, with Scripture, sensory meditation, charity, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Visitation",
        "Second Joyful Mystery",
        "Second Joyful Decade",
        "Rosary meditation",
        "Mary visits Elizabeth",
        "Luke 1:39-56",
        "Magnificat",
        "charity",
        "humility",
        "John the Baptist",
      ],
    });
  }

  if (group === "joyful-mysteries" && mystery === "nativity") {
    return createPageMetadata({
      title: "The Nativity | Third Joyful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Nativity, the Third Joyful Mystery and Third Joyful Decade of the Rosary, with Scripture, sensory meditation, poverty of spirit, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Nativity",
        "Third Joyful Mystery",
        "Third Joyful Decade",
        "Rosary meditation",
        "birth of Jesus",
        "Bethlehem",
        "Luke 2:1-20",
        "poverty of spirit",
        "manger",
        "shepherds",
      ],
    });
  }

  if (group === "joyful-mysteries" && mystery === "presentation") {
    return createPageMetadata({
      title: "The Presentation in the Temple | Fourth Joyful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Presentation in the Temple, the Fourth Joyful Mystery and Fourth Joyful Decade of the Rosary, with Scripture, sensory meditation, obedience, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Presentation in the Temple",
        "Fourth Joyful Mystery",
        "Fourth Joyful Decade",
        "Rosary meditation",
        "Luke 2:22-38",
        "Simeon",
        "Anna",
        "sword shall pierce",
        "obedience",
        "Mary and Joseph",
      ],
    });
  }

  if (group === "joyful-mysteries" && mystery === "finding-in-the-temple") {
    return createPageMetadata({
      title: "The Finding of Jesus in the Temple | Fifth Joyful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Finding of Jesus in the Temple, the Fifth Joyful Mystery and Fifth Joyful Decade of the Rosary, with Scripture, sensory meditation, zeal for God, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Finding of Jesus in the Temple",
        "Fifth Joyful Mystery",
        "Fifth Joyful Decade",
        "Rosary meditation",
        "Luke 2:41-52",
        "Mary and Joseph",
        "Father's business",
        "zeal for God",
        "seeking Jesus",
      ],
    });
  }

  if (group === "sorrowful-mysteries" && mystery === "agony-in-the-garden") {
    return createPageMetadata({
      title: "The Agony in the Garden | First Sorrowful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Agony in the Garden, the First Sorrowful Mystery and First Sorrowful Decade of the Rosary, with Scripture, sensory meditation, surrender, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Agony in the Garden",
        "First Sorrowful Mystery",
        "First Sorrowful Decade",
        "Rosary meditation",
        "Gethsemane",
        "Matthew 26:36-46",
        "Luke 22:39-46",
        "not my will but Yours",
        "surrender to God",
      ],
    });
  }

  if (group === "sorrowful-mysteries" && mystery === "scourging-at-the-pillar") {
    return createPageMetadata({
      title: "The Scourging at the Pillar | Second Sorrowful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Scourging at the Pillar, the Second Sorrowful Mystery and Second Sorrowful Decade of the Rosary, with Scripture, sensory meditation, purity, reparation, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Scourging at the Pillar",
        "Second Sorrowful Mystery",
        "Second Sorrowful Decade",
        "Rosary meditation",
        "Matthew 27:26",
        "Mark 15:15",
        "John 19:1",
        "purity",
        "mortification",
        "wounds of Christ",
      ],
    });
  }

  if (group === "sorrowful-mysteries" && mystery === "crowning-with-thorns") {
    return createPageMetadata({
      title: "The Crowning with Thorns | Third Sorrowful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Crowning with Thorns, the Third Sorrowful Mystery and Third Sorrowful Decade of the Rosary, with Scripture, sensory meditation, humility, meekness, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Crowning with Thorns",
        "Third Sorrowful Mystery",
        "Third Sorrowful Decade",
        "Rosary meditation",
        "Matthew 27:27-31",
        "Mark 15:16-20",
        "John 19:2-5",
        "Christ the King",
        "humility",
        "meekness",
      ],
    });
  }

  if (group === "sorrowful-mysteries" && mystery === "carrying-of-the-cross") {
    return createPageMetadata({
      title: "The Carrying of the Cross | Fourth Sorrowful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Carrying of the Cross, the Fourth Sorrowful Mystery and Fourth Sorrowful Decade of the Rosary, with Scripture, sensory meditation, patience, perseverance, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Carrying of the Cross",
        "Fourth Sorrowful Mystery",
        "Fourth Sorrowful Decade",
        "Rosary meditation",
        "John 19:16-17",
        "Luke 23:26-32",
        "Matthew 27:31-32",
        "Simon of Cyrene",
        "Way of the Cross",
        "patience",
        "perseverance",
      ],
    });
  }

  if (group === "sorrowful-mysteries" && mystery === "crucifixion") {
    return createPageMetadata({
      title: "The Crucifixion | Fifth Sorrowful Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Crucifixion, the Fifth Sorrowful Mystery and Fifth Sorrowful Decade of the Rosary, with Scripture, sensory meditation, sacrificial love, forgiveness, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Crucifixion",
        "Fifth Sorrowful Mystery",
        "Fifth Sorrowful Decade",
        "Rosary meditation",
        "Calvary",
        "Matthew 27",
        "Mark 15",
        "Luke 23",
        "John 19",
        "sacrificial love",
        "Jesus on the Cross",
        "Mary at the Cross",
      ],
    });
  }

  if (group === "glorious-mysteries" && mystery === "resurrection") {
    return createPageMetadata({
      title: "The Resurrection | First Glorious Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Resurrection, the First Glorious Mystery and First Glorious Decade of the Rosary, with Scripture, sensory meditation, faith, hope, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Resurrection",
        "First Glorious Mystery",
        "First Glorious Decade",
        "Rosary meditation",
        "empty tomb",
        "He is risen",
        "Matthew 28",
        "Mark 16",
        "Luke 24",
        "John 20",
        "faith",
        "hope",
        "Easter",
      ],
    });
  }

  if (group === "glorious-mysteries" && mystery === "ascension") {
    return createPageMetadata({
      title: "The Ascension | Second Glorious Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Ascension, the Second Glorious Mystery and Second Glorious Decade of the Rosary, with Scripture, sensory meditation, hope, Heaven, mission, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Ascension",
        "Second Glorious Mystery",
        "Second Glorious Decade",
        "Rosary meditation",
        "Mark 16:19",
        "Luke 24:50-53",
        "Acts 1:6-11",
        "hope",
        "Heaven",
        "Mount of Olives",
        "Jesus ascends",
      ],
    });
  }

  if (group === "glorious-mysteries" && mystery === "descent-of-the-holy-spirit") {
    return createPageMetadata({
      title:
        "The Descent of the Holy Spirit | Third Glorious Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Descent of the Holy Spirit, the Third Glorious Mystery and Third Glorious Decade of the Rosary, with Scripture, sensory meditation, Pentecost, zeal, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Descent of the Holy Spirit",
        "Third Glorious Mystery",
        "Third Glorious Decade",
        "Rosary meditation",
        "Pentecost",
        "Acts 2",
        "Upper Room",
        "Mary Mother of the Church",
        "gifts of the Holy Spirit",
        "zeal",
      ],
    });
  }

  if (group === "glorious-mysteries" && mystery === "assumption-of-mary") {
    return createPageMetadata({
      title: "The Assumption of Mary | Fourth Glorious Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Assumption of Mary, the Fourth Glorious Mystery and Fourth Glorious Decade of the Rosary, with sensory meditation, hope of Heaven, purity, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Assumption of Mary",
        "Fourth Glorious Mystery",
        "Fourth Glorious Decade",
        "Rosary meditation",
        "Mary assumed into Heaven",
        "Revelation 12:1",
        "Queen assumed into Heaven",
        "hope of Heaven",
        "holy death",
      ],
    });
  }

  if (group === "glorious-mysteries" && mystery === "coronation-of-mary") {
    return createPageMetadata({
      title: "The Coronation of Mary | Fifth Glorious Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Coronation of Mary, the Fifth Glorious Mystery and Fifth Glorious Decade of the Rosary, with sensory meditation, Mary's queenship, intercession, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Coronation of Mary",
        "Fifth Glorious Mystery",
        "Fifth Glorious Decade",
        "Rosary meditation",
        "Mary Queen of Heaven",
        "Revelation 12:1",
        "Queen of the Most Holy Rosary",
        "Mary's intercession",
        "final perseverance",
      ],
    });
  }

  if (group === "luminous-mysteries" && mystery === "baptism-of-jesus") {
    return createPageMetadata({
      title: "The Baptism of Jesus | First Luminous Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Baptism of Jesus, the First Luminous Mystery and First Luminous Decade of the Rosary, with Scripture, sensory meditation, baptismal renewal, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Baptism of Jesus",
        "First Luminous Mystery",
        "First Luminous Decade",
        "Rosary meditation",
        "Matthew 3:13-17",
        "Jordan River",
        "Holy Spirit",
        "beloved Son",
        "baptismal grace",
      ],
    });
  }

  if (group === "luminous-mysteries" && mystery === "wedding-at-cana") {
    return createPageMetadata({
      title: "The Wedding at Cana | Second Luminous Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Wedding at Cana, the Second Luminous Mystery and Second Luminous Decade of the Rosary, with Scripture, sensory meditation, Mary's intercession, obedience, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Wedding at Cana",
        "Second Luminous Mystery",
        "Second Luminous Decade",
        "Rosary meditation",
        "John 2:1-11",
        "Do whatever he tells you",
        "Mary's intercession",
        "water into wine",
        "Cana miracle",
      ],
    });
  }

  if (group === "luminous-mysteries" && mystery === "proclamation-of-the-kingdom") {
    return createPageMetadata({
      title: "The Proclamation of the Kingdom | Third Luminous Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Proclamation of the Kingdom, the Third Luminous Mystery and Third Luminous Decade of the Rosary, with Scripture, sensory meditation, repentance, conversion, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Proclamation of the Kingdom",
        "Third Luminous Mystery",
        "Third Luminous Decade",
        "Rosary meditation",
        "Mark 1:14-15",
        "Matthew 4:17",
        "repent and believe the Gospel",
        "Kingdom of God",
        "conversion",
      ],
    });
  }

  if (group === "luminous-mysteries" && mystery === "transfiguration") {
    return createPageMetadata({
      title: "The Transfiguration | Fourth Luminous Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Transfiguration, the Fourth Luminous Mystery and Fourth Luminous Decade of the Rosary, with Scripture, sensory meditation, holiness, divine glory, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Transfiguration",
        "Fourth Luminous Mystery",
        "Fourth Luminous Decade",
        "Rosary meditation",
        "Matthew 17:1-8",
        "Mount Tabor",
        "listen to Him",
        "desire for holiness",
        "radiant Christ",
      ],
    });
  }

  if (group === "luminous-mysteries" && mystery === "institution-of-the-eucharist") {
    return createPageMetadata({
      title: "The Institution of the Eucharist | Fifth Luminous Mystery of the Rosary | Daily Oratory",
      description:
        "Meditate deeply on the Institution of the Eucharist, the Fifth Luminous Mystery and Fifth Luminous Decade of the Rosary, with Scripture, sensory meditation, Real Presence, prayer, and reflection.",
      path: mysteryRecord.fullPath,
      keywords: [
        "Institution of the Eucharist",
        "Fifth Luminous Mystery",
        "Fifth Luminous Decade",
        "Rosary meditation",
        "Matthew 26:26-28",
        "Luke 22:19-20",
        "Real Presence",
        "Holy Eucharist",
        "This is my body",
        "Upper Room",
      ],
    });
  }

  return createPageMetadata({
    title: `${mysteryRecord.title} | ${mysteryRecord.decadeLabel} | Daily Oratory`,
    description: `Meditate on ${mysteryRecord.title}, the ${mysteryRecord.decadeLabel}, with Scripture reference, virtue, decade prayer guide, reflection questions, and a short prayer.`,
    path: mysteryRecord.fullPath,
  });
}

export default async function RosaryMysteryDetailPage({
  params,
}: {
  params: Promise<{ group: string; mystery: string }>;
}) {
  const { group, mystery } = await params;
  const groupRecord = getRosaryMysteryGroups().find((item) => item.slug === group);
  const mysteryRecord = getMysteryBySlug(group, mystery);
  if (!groupRecord || !mysteryRecord) notFound();
  const usesDeepMeditationFlow =
    (group === "joyful-mysteries" &&
      (
        mystery === "annunciation" ||
        mystery === "visitation" ||
        mystery === "nativity" ||
        mystery === "presentation" ||
        mystery === "finding-in-the-temple"
      )) ||
    (group === "sorrowful-mysteries" &&
      (
        mystery === "agony-in-the-garden" ||
        mystery === "scourging-at-the-pillar" ||
        mystery === "crowning-with-thorns" ||
        mystery === "carrying-of-the-cross" ||
        mystery === "crucifixion"
      )) ||
    (group === "glorious-mysteries" &&
      (
        mystery === "resurrection" ||
        mystery === "ascension" ||
        mystery === "descent-of-the-holy-spirit" ||
        mystery === "assumption-of-mary" ||
        mystery === "coronation-of-mary"
      )) ||
    (group === "luminous-mysteries" &&
      (
        mystery === "baptism-of-jesus" ||
        mystery === "wedding-at-cana" ||
        mystery === "proclamation-of-the-kingdom" ||
        mystery === "transfiguration" ||
        mystery === "institution-of-the-eucharist"
      ));

  const usesSeparateMeditationSections = Boolean(
    mysteryRecord.scriptureForMeditation || mysteryRecord.contemplativePause,
  );
  const openingPrayer = mysteryRecord.openingPrayer ?? FALLBACK_OPENING_PRAYER;

  const previousMystery = getPreviousMystery(group, mystery);
  const nextMystery = getNextMystery(group, mystery);
  const mysteryDescription = `Meditate on ${mysteryRecord.title}, the ${mysteryRecord.decadeLabel}, with Scripture, virtue, prayer, and reflection.`;
  const breadcrumbItems = [
    { name: "Pray", path: "/pray" },
    { name: "Devotions", path: "/devotions" },
    { name: "Holy Rosary", path: "/devotions/holy-rosary" },
    { name: groupRecord.title, path: `/devotions/holy-rosary/${groupRecord.slug}` },
    { name: mysteryRecord.title, path: mysteryRecord.fullPath },
  ];

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: mysteryRecord.title,
              description: mysteryDescription,
              path: mysteryRecord.fullPath,
            }),
            buildArticleStructuredData({
              headline: mysteryRecord.title,
              description: mysteryDescription,
              path: mysteryRecord.fullPath,
            }),
            buildBreadcrumbList(breadcrumbItems),
          ]}
        />
        <Breadcrumbs
          items={[
            { label: "Pray", href: "/pray" },
            { label: "Devotions", href: "/devotions" },
            { label: "Holy Rosary", href: "/devotions/holy-rosary" },
            { label: groupRecord.title, href: `/devotions/holy-rosary/${groupRecord.slug}` },
            { label: mysteryRecord.title },
          ]}
        />

        <div className="mt-8">
          <RosaryMysteryDetailHero group={groupRecord} mystery={mysteryRecord} />
        </div>

        <div className="mt-14">
          <RosaryScriptureScene mystery={mysteryRecord} />
        </div>

        <div className="mt-14">
          <RosaryOpeningPrayer prayer={openingPrayer} />
        </div>

        <div className="mt-14">
          <SevenSensesMeditation group={groupRecord} mystery={mysteryRecord} />
        </div>

        <div className="mt-14">
          {usesSeparateMeditationSections ? (
            <RosaryScriptureForMeditation scripture={mysteryRecord.scriptureForMeditation} />
          ) : mysteryRecord.meditationConclusionPrompt || mysteryRecord.optionalClosingPrayer ? (
            <RosaryMeditationConclusion
              prompt={mysteryRecord.meditationConclusionPrompt}
              closingPrayer={mysteryRecord.optionalClosingPrayer}
            />
          ) : (
            <RosaryContemplationPoints group={groupRecord} mystery={mysteryRecord} />
          )}
        </div>

        {usesSeparateMeditationSections ? (
          <div className="mt-14">
            <RosaryContemplativePause pause={mysteryRecord.contemplativePause} />
          </div>
        ) : null}

        {usesSeparateMeditationSections && mysteryRecord.optionalClosingPrayer ? (
          <div className="mt-14">
            <RosaryMeditationConclusion closingPrayer={mysteryRecord.optionalClosingPrayer} />
          </div>
        ) : null}

        <div className="mt-14">
          <RosaryFruitOfMystery group={groupRecord} mystery={mysteryRecord} />
        </div>

        <div className="mt-14">
          <PrayThisDecade group={groupRecord} mystery={mysteryRecord} />
        </div>

        <div className="mt-14">
          <RosaryReflectionQuestions mystery={mysteryRecord} />
        </div>

        {!usesDeepMeditationFlow ? (
          <div className="mt-14">
            <RosaryDecadePrayer group={groupRecord} mystery={mysteryRecord} />
          </div>
        ) : null}

        <div className="mt-14">
          <RosaryPracticeToday mystery={mysteryRecord} />
        </div>

        <div className="mt-14">
          <RosaryMysteryNavigation
            group={groupRecord}
            previousMystery={previousMystery}
            nextMystery={nextMystery}
          />
        </div>

        <div className="mt-14">
          <RosaryRelatedLinks links={mysteryRecord.relatedLinks} />
        </div>
      </main>
    </div>
  );
}
