import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { BibleAndHomilies } from "@/components/bible/BibleAndHomilies";
import { BibleAndLiturgyHours } from "@/components/bible/BibleAndLiturgyHours";
import { BibleAndPrayer } from "@/components/bible/BibleAndPrayer";
import { BibleAtMass } from "@/components/bible/BibleAtMass";
import { BibleCopyrightNote } from "@/components/bible/BibleCopyrightNote";
import { BibleForExplorers } from "@/components/bible/BibleForExplorers";
import { BibleForFamilies } from "@/components/bible/BibleForFamilies";
import { BibleHero } from "@/components/bible/BibleHero";
import { BibleReadingPlans } from "@/components/bible/BibleReadingPlans";
import { BibleResources } from "@/components/bible/BibleResources";
import { BibleStudyVsPrayer } from "@/components/bible/BibleStudyVsPrayer";
import { BibleTranslationFinder } from "@/components/bible/BibleTranslationFinder";
import { BibleTranslations } from "@/components/bible/BibleTranslations";
import { BibleWordJournalTool } from "@/components/bible/BibleWordJournalTool";
import { BooksOfBibleOverview } from "@/components/bible/BooksOfBibleOverview";
import { CatholicViewBible } from "@/components/bible/CatholicViewBible";
import { CommonBibleMistakes } from "@/components/bible/CommonBibleMistakes";
import { DailyReadingsMethod } from "@/components/bible/DailyReadingsMethod";
import { DeuterocanonicalBooks } from "@/components/bible/DeuterocanonicalBooks";
import { DifficultBiblePassages } from "@/components/bible/DifficultBiblePassages";
import { GatherAWordFromReadings } from "@/components/bible/GatherAWordFromReadings";
import { HowToReadBibleCatholic } from "@/components/bible/HowToReadBibleCatholic";
import { LectioDivinaSection } from "@/components/bible/LectioDivinaSection";
import { RelatedBibleTools } from "@/components/bible/RelatedBibleTools";
import { ScriptureTraditionMagisterium } from "@/components/bible/ScriptureTraditionMagisterium";
import { WhereToStartBible } from "@/components/bible/WhereToStartBible";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const baseMetadata = createPageMetadata({
  title: "The Bible and Sacred Scripture | Daily Oratory",
  description:
    "Learn how Catholics read the Bible, pray with daily Mass readings, choose Catholic Bible translations, gather a word from Scripture, and understand Scripture with Tradition and the Church.",
  path: "/bible",
  keywords: [
    "Catholic Bible",
    "Sacred Scripture",
    "how Catholics read the Bible",
    "daily Mass readings",
    "USCCB Bible",
    "Catholic Bible translations",
    "Lectio Divina",
    "Bible reading plan",
    "Scripture and Tradition",
    "deuterocanonical books",
    "Catholic Scripture prayer",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "The Bible",
    description:
      "A Catholic guide to Sacred Scripture, daily Mass readings, Bible translations, Lectio Divina, Scripture prayer, and reading the Bible with the Church.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "The Bible",
    description:
      "A Catholic guide to Sacred Scripture, daily Mass readings, Bible translations, Lectio Divina, Scripture prayer, and reading the Bible with the Church.",
  },
};

export default function BiblePage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Bible and Sacred Scripture",
              description:
                "Learn how Catholics read the Bible, pray with daily Mass readings, choose Catholic Bible translations, gather a word from Scripture, and understand Scripture with Tradition and the Church.",
              path: "/bible",
            }),
            buildArticleStructuredData({
              headline: "The Bible and Sacred Scripture",
              description:
                "Learn how Catholics read the Bible, pray with daily Mass readings, choose Catholic Bible translations, gather a word from Scripture, and understand Scripture with Tradition and the Church.",
              path: "/bible",
              keywords: baseMetadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Bible", path: "/bible" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Bible" }]} />

        <div className="mt-8">
          <BibleHero />
        </div>

        <div className="mt-14">
          <CatholicViewBible />
        </div>

        <div className="mt-14">
          <ScriptureTraditionMagisterium />
        </div>

        <div className="mt-14">
          <BibleAtMass />
        </div>

        <div className="mt-14">
          <HowToReadBibleCatholic />
        </div>

        <div className="mt-14">
          <GatherAWordFromReadings />
        </div>

        <div className="mt-14">
          <DailyReadingsMethod />
        </div>

        <div className="mt-14">
          <LectioDivinaSection />
        </div>

        <div className="mt-14">
          <BibleTranslations />
        </div>

        <div className="mt-14">
          <BibleTranslationFinder />
        </div>

        <div className="mt-14">
          <DeuterocanonicalBooks />
        </div>

        <div className="mt-14">
          <WhereToStartBible />
        </div>

        <div className="mt-14">
          <BooksOfBibleOverview />
        </div>

        <div className="mt-14">
          <BibleAndPrayer />
        </div>

        <div className="mt-14">
          <BibleAndLiturgyHours />
        </div>

        <div className="mt-14">
          <BibleAndHomilies />
        </div>

        <div className="mt-14">
          <BibleStudyVsPrayer />
        </div>

        <div className="mt-14">
          <CommonBibleMistakes />
        </div>

        <div className="mt-14">
          <DifficultBiblePassages />
        </div>

        <div className="mt-14">
          <BibleForFamilies />
        </div>

        <div className="mt-14">
          <BibleForExplorers />
        </div>

        <div className="mt-14">
          <BibleReadingPlans />
        </div>

        <div className="mt-14">
          <BibleWordJournalTool />
        </div>

        <div className="mt-14">
          <BibleResources />
        </div>

        <div className="mt-14">
          <RelatedBibleTools />
        </div>

        <div className="mt-14">
          <BibleCopyrightNote />
        </div>
      </main>
    </div>
  );
}
