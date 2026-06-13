import type { Metadata } from "next";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { SaintsHero } from "@/components/saints/SaintsHero";
import { WhatAreSaints } from "@/components/saints/WhatAreSaints";
import { WhyAskSaintsToPray } from "@/components/saints/WhyAskSaintsToPray";
import { SaintOfTheDayCard } from "@/components/saints/SaintOfTheDayCard";
import { SaintCompanionFinder } from "@/components/saints/SaintCompanionFinder";
import { FeaturedSaints } from "@/components/saints/FeaturedSaints";
import { SaintLibraryBrowser } from "@/components/saints/SaintLibraryBrowser";
import { SaintCategoryGrid } from "@/components/saints/SaintCategoryGrid";
import { SaintsByVirtue } from "@/components/saints/SaintsByVirtue";
import { PatronSaintsDirectory } from "@/components/saints/PatronSaintsDirectory";
import { SaintCalendarPreview } from "@/components/saints/SaintCalendarPreview";
import { SaintsLiturgicalYear } from "@/components/saints/SaintsLiturgicalYear";
import { SaintsAndSacraments } from "@/components/saints/SaintsAndSacraments";
import { SaintsDailyLife } from "@/components/saints/SaintsDailyLife";
import { SaintReadingPlan } from "@/components/saints/SaintReadingPlan";
import { SaintChallenge } from "@/components/saints/SaintChallenge";
import { SaintsTimeline } from "@/components/saints/SaintsTimeline";
import { SaintsAroundWorld } from "@/components/saints/SaintsAroundWorld";
import { DoctorsOfChurchSection } from "@/components/saints/DoctorsOfChurchSection";
import { SaintsAndChurchFathers } from "@/components/saints/SaintsAndChurchFathers";
import { SaintsForModernLife } from "@/components/saints/SaintsForModernLife";
import { SaintsWorksOfMercy } from "@/components/saints/SaintsWorksOfMercy";
import { SaintsFAQ } from "@/components/saints/SaintsFAQ";
import { SaintTrustedSources } from "@/components/saints/SaintTrustedSources";
import { RelatedSaintsTools } from "@/components/saints/RelatedSaintsTools";
import { SaintsPastoralNote } from "@/components/saints/SaintsPastoralNote";
import { SaintsCopyrightNote } from "@/components/saints/SaintsCopyrightNote";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Saints Library",
  description:
    "Explore Catholic saints, patron saints, virtues, feast days, and stories of holiness with beginner-friendly guidance for Catholics, returning Catholics, and anyone curious about the communion of saints.",
  path: "/saints",
});

export default function SaintsPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Saints Library",
              description:
                "Explore Catholic saints, patron saints, virtues, feast days, and stories of holiness with beginner-friendly guidance for Catholics, returning Catholics, and anyone curious about the communion of saints.",
              path: "/saints",
            }),
            buildArticleStructuredData({
              headline: "Catholic Saints Library",
              description:
                "Explore Catholic saints, patron saints, virtues, feast days, and stories of holiness with beginner-friendly guidance for Catholics, returning Catholics, and anyone curious about the communion of saints.",
              path: "/saints",
            }),
          ]}
        />
        <SaintsHero />
        <WhatAreSaints />
        <WhyAskSaintsToPray />
        <SaintOfTheDayCard />
        <SaintCalendarPreview />
        <SaintCompanionFinder />
        <FeaturedSaints />
        <SaintLibraryBrowser />
        <SaintCategoryGrid />
        <SaintsByVirtue />
        <PatronSaintsDirectory />
        <SaintsLiturgicalYear />
        <SaintsAndSacraments />
        <SaintsDailyLife />
        <SaintReadingPlan />
        <SaintChallenge />
        <SaintsTimeline />
        <SaintsAroundWorld />
        <DoctorsOfChurchSection />
        <SaintsAndChurchFathers />
        <SaintsForModernLife />
        <SaintsWorksOfMercy />
        <SaintsFAQ />
        <SaintTrustedSources />
        <RelatedSaintsTools />
        <SaintsPastoralNote />
        <SaintsCopyrightNote />
      </section>
    </div>
  );
}
