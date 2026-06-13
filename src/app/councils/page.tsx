import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { CouncilsHero } from "@/components/councils/CouncilsHero";
import { WhatIsCouncil } from "@/components/councils/WhatIsCouncil";
import { WhyCouncilsMatter } from "@/components/councils/WhyCouncilsMatter";
import { TypesOfCouncils } from "@/components/councils/TypesOfCouncils";
import { CouncilsAndHolySpirit } from "@/components/councils/CouncilsAndHolySpirit";
import { CouncilsTimeline } from "@/components/councils/CouncilsTimeline";
import { FirstSevenCouncils } from "@/components/councils/FirstSevenCouncils";
import { CouncilsAndCreed } from "@/components/councils/CouncilsAndCreed";
import { CouncilsAndChrist } from "@/components/councils/CouncilsAndChrist";
import { CouncilsAndMary } from "@/components/councils/CouncilsAndMary";
import { CouncilsAndEucharist } from "@/components/councils/CouncilsAndEucharist";
import { CouncilsScriptureTraditionChurch } from "@/components/councils/CouncilsScriptureTraditionChurch";
import { CouncilOfTrentSection } from "@/components/councils/CouncilOfTrentSection";
import { VaticanISection } from "@/components/councils/VaticanISection";
import { VaticanIISection } from "@/components/councils/VaticanIISection";
import { CouncilsTimelineExplorer } from "@/components/councils/CouncilsTimelineExplorer";
import { CouncilTopicFinder } from "@/components/councils/CouncilTopicFinder";
import { CouncilsFAQ } from "@/components/councils/CouncilsFAQ";
import { CouncilsForExplorers } from "@/components/councils/CouncilsForExplorers";
import { CouncilsDailyLife } from "@/components/councils/CouncilsDailyLife";
import { CouncilsStudyPath } from "@/components/councils/CouncilsStudyPath";
import { RelatedCouncilTools } from "@/components/councils/RelatedCouncilTools";
import { CouncilResources } from "@/components/councils/CouncilResources";
import { CouncilsCopyrightNote } from "@/components/councils/CouncilsCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "Councils of the Catholic Church",
  description:
    "Learn about the 21 ecumenical councils of the Catholic Church, from Nicaea to Vatican II, and how councils clarified doctrine, Scripture, Tradition, the Mass, sacraments, and Church life.",
  path: "/councils",
  keywords: [
    "Catholic councils",
    "ecumenical councils",
    "Church councils",
    "Council of Nicaea",
    "Council of Trent",
    "Vatican I",
    "Vatican II",
    "Catholic doctrine",
    "Creed",
    "Scripture and Tradition",
    "Magisterium",
    "Church history",
  ],
});

export default function CouncilsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Councils of the Church" }]} />

        <div className="mt-8">
          <CouncilsHero />
        </div>
        <div className="mt-14">
          <WhatIsCouncil />
        </div>
        <div className="mt-14">
          <WhyCouncilsMatter />
        </div>
        <div className="mt-14">
          <TypesOfCouncils />
        </div>
        <div className="mt-14">
          <CouncilsAndHolySpirit />
        </div>
        <div className="mt-14">
          <CouncilsTimeline />
        </div>
        <div className="mt-14">
          <FirstSevenCouncils />
        </div>
        <div className="mt-14">
          <CouncilsAndCreed />
        </div>
        <div className="mt-14">
          <CouncilsAndChrist />
        </div>
        <div className="mt-14">
          <CouncilsAndMary />
        </div>
        <div className="mt-14">
          <CouncilsAndEucharist />
        </div>
        <div className="mt-14">
          <CouncilsScriptureTraditionChurch />
        </div>
        <div className="mt-14">
          <CouncilOfTrentSection />
        </div>
        <div className="mt-14">
          <VaticanISection />
        </div>
        <div className="mt-14">
          <VaticanIISection />
        </div>
        <div className="mt-14">
          <CouncilsTimelineExplorer />
        </div>
        <div className="mt-14">
          <CouncilTopicFinder />
        </div>
        <div className="mt-14">
          <CouncilsFAQ />
        </div>
        <div className="mt-14">
          <CouncilsForExplorers />
        </div>
        <div className="mt-14">
          <CouncilsDailyLife />
        </div>
        <div className="mt-14">
          <CouncilsStudyPath />
        </div>
        <div className="mt-14">
          <RelatedCouncilTools />
        </div>
        <div className="mt-14">
          <CouncilResources />
        </div>
        <div className="mt-14">
          <CouncilsCopyrightNote />
        </div>
      </main>
    </div>
  );
}
