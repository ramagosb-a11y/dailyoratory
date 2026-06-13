import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { PopeHero } from "@/components/pope/PopeHero";
import { CurrentPopeCard } from "@/components/pope/CurrentPopeCard";
import { WhatIsPope } from "@/components/pope/WhatIsPope";
import { WhyPeterMatters } from "@/components/pope/WhyPeterMatters";
import { PopeRoles } from "@/components/pope/PopeRoles";
import { PapalInfallibilityExplainer } from "@/components/pope/PapalInfallibilityExplainer";
import { LevelsOfPapalTeaching } from "@/components/pope/LevelsOfPapalTeaching";
import { PapalDocumentsLibrary } from "@/components/pope/PapalDocumentsLibrary";
import { FeaturedPapalDocuments } from "@/components/pope/FeaturedPapalDocuments";
import { PapalTimeline } from "@/components/pope/PapalTimeline";
import { HowPopeIsChosen } from "@/components/pope/HowPopeIsChosen";
import { PopeBishopsCouncils } from "@/components/pope/PopeBishopsCouncils";
import { PopeAndMagisterium } from "@/components/pope/PopeAndMagisterium";
import { PopeFAQ } from "@/components/pope/PopeFAQ";
import { PopeForExplorers } from "@/components/pope/PopeForExplorers";
import { PrayerForHolyFather } from "@/components/pope/PrayerForHolyFather";
import { PopesMonthlyIntentions } from "@/components/pope/PopesMonthlyIntentions";
import { ReadPapalDocumentsPrayerfully } from "@/components/pope/ReadPapalDocumentsPrayerfully";
import { PapalDocumentsByTheme } from "@/components/pope/PapalDocumentsByTheme";
import { PopeDailyLife } from "@/components/pope/PopeDailyLife";
import { PopeOfficialSources } from "@/components/pope/PopeOfficialSources";
import { RelatedPopeTools } from "@/components/pope/RelatedPopeTools";
import { PopeCopyrightNote } from "@/components/pope/PopeCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "The Pope and the Papacy",
  description:
    "Understand the Pope's role as Bishop of Rome, successor of Saint Peter, visible sign of unity, papal documents, papal teaching, and how to pray for the Holy Father.",
  path: "/pope",
  keywords: [
    "Pope",
    "papacy",
    "Pope Leo XIV",
    "Bishop of Rome",
    "successor of Peter",
    "papal documents",
    "encyclicals",
    "apostolic exhortations",
    "papal infallibility",
    "Magisterium",
    "Vatican",
    "Holy Father",
  ],
});

export default function PopePage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "The Pope" }]} />

        <div className="mt-8">
          <PopeHero />
        </div>
        <div className="mt-14">
          <CurrentPopeCard />
        </div>
        <div className="mt-14">
          <WhatIsPope />
        </div>
        <div className="mt-14">
          <WhyPeterMatters />
        </div>
        <div className="mt-14">
          <PopeRoles />
        </div>
        <div className="mt-14">
          <PapalInfallibilityExplainer />
        </div>
        <div className="mt-14">
          <LevelsOfPapalTeaching />
        </div>
        <div className="mt-14">
          <PapalDocumentsLibrary />
        </div>
        <div className="mt-14">
          <FeaturedPapalDocuments />
        </div>
        <div className="mt-14">
          <PapalTimeline />
        </div>
        <div className="mt-14">
          <HowPopeIsChosen />
        </div>
        <div className="mt-14">
          <PopeBishopsCouncils />
        </div>
        <div className="mt-14">
          <PopeAndMagisterium />
        </div>
        <div className="mt-14">
          <PopeFAQ />
        </div>
        <div className="mt-14">
          <PopeForExplorers />
        </div>
        <div className="mt-14">
          <PrayerForHolyFather />
        </div>
        <div className="mt-14">
          <PopesMonthlyIntentions />
        </div>
        <div className="mt-14">
          <ReadPapalDocumentsPrayerfully />
        </div>
        <div className="mt-14">
          <PapalDocumentsByTheme />
        </div>
        <div className="mt-14">
          <PopeDailyLife />
        </div>
        <div className="mt-14">
          <PopeOfficialSources />
        </div>
        <div className="mt-14">
          <RelatedPopeTools />
        </div>
        <div className="mt-14">
          <PopeCopyrightNote />
        </div>
      </main>
    </div>
  );
}
