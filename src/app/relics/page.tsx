import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HowToVenerateRelic } from "@/components/relics/HowToVenerateRelic";
import { RelatedRelicTools } from "@/components/relics/RelatedRelicTools";
import { RelicClasses } from "@/components/relics/RelicClasses";
import { RelicCopyrightNote } from "@/components/relics/RelicCopyrightNote";
import { RelicPilgrimageSites } from "@/components/relics/RelicPilgrimageSites";
import { RelicPrayerCards } from "@/components/relics/RelicPrayerCards";
import { RelicResources } from "@/components/relics/RelicResources";
import { RelicVisitReflectionTool } from "@/components/relics/RelicVisitReflectionTool";
import { RelicsAndHealing } from "@/components/relics/RelicsAndHealing";
import { RelicsAndMass } from "@/components/relics/RelicsAndMass";
import { RelicsAndScripture } from "@/components/relics/RelicsAndScripture";
import { RelicsAtHome } from "@/components/relics/RelicsAtHome";
import { RelicsAuthenticity } from "@/components/relics/RelicsAuthenticity";
import { RelicsBuyingSelling } from "@/components/relics/RelicsBuyingSelling";
import { RelicsCommunionOfSaints } from "@/components/relics/RelicsCommunionOfSaints";
import { RelicsEarlyChurch } from "@/components/relics/RelicsEarlyChurch";
import { RelicsFAQ } from "@/components/relics/RelicsFAQ";
import { RelicsForExplorers } from "@/components/relics/RelicsForExplorers";
import { RelicsForFamilies } from "@/components/relics/RelicsForFamilies";
import { RelicsHero } from "@/components/relics/RelicsHero";
import { RelicsNotMagic } from "@/components/relics/RelicsNotMagic";
import { RelicsOfChrist } from "@/components/relics/RelicsOfChrist";
import { WhatAreRelics } from "@/components/relics/WhatAreRelics";
import { WhatIfIHaveRelic } from "@/components/relics/WhatIfIHaveRelic";
import { WhatIsReliquary } from "@/components/relics/WhatIsReliquary";
import { WhyVenerateRelics } from "@/components/relics/WhyVenerateRelics";
import { createPageMetadata } from "@/lib/metadata";

const baseMetadata = createPageMetadata({
  title: "Catholic Relics | Saints, Veneration, Relic Classes, and the Communion of Saints",
  description:
    "Learn what Catholic relics are, why Catholics venerate relics, the first, second, and third classes of relics, relics in Scripture, relics in the Mass, and how to avoid superstition.",
  path: "/relics",
  keywords: [
    "Catholic relics",
    "first class relic",
    "second class relic",
    "third class relic",
    "reliquary",
    "communion of saints",
    "relic veneration",
    "relics in the Bible",
    "relics and the Mass",
    "saint relics",
    "Catholic saints",
    "sacramentals",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Catholic Relics",
    description:
      "A faithful guide to Catholic relics, the communion of saints, relic classes, reliquaries, relics in Scripture, relics at Mass, and reverent veneration.",
  },
};

export default function RelicsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Relics" }]} />

        <div className="mt-8">
          <RelicsHero />
        </div>
        <div className="mt-14">
          <WhatAreRelics />
        </div>
        <div className="mt-14">
          <WhyVenerateRelics />
        </div>
        <div className="mt-14">
          <RelicsNotMagic />
        </div>
        <div className="mt-14">
          <RelicClasses />
        </div>
        <div className="mt-14">
          <RelicsOfChrist />
        </div>
        <div className="mt-14">
          <RelicsAndScripture />
        </div>
        <div className="mt-14">
          <RelicsEarlyChurch />
        </div>
        <div className="mt-14">
          <RelicsAndMass />
        </div>
        <div className="mt-14">
          <RelicsCommunionOfSaints />
        </div>
        <div className="mt-14">
          <HowToVenerateRelic />
        </div>
        <div className="mt-14">
          <WhatIsReliquary />
        </div>
        <div className="mt-14">
          <RelicPilgrimageSites />
        </div>
        <div className="mt-14">
          <RelicsAtHome />
        </div>
        <div className="mt-14">
          <WhatIfIHaveRelic />
        </div>
        <div className="mt-14">
          <RelicsBuyingSelling />
        </div>
        <div className="mt-14">
          <RelicsAuthenticity />
        </div>
        <div className="mt-14">
          <RelicsAndHealing />
        </div>
        <div className="mt-14">
          <RelicsForExplorers />
        </div>
        <div className="mt-14">
          <RelicsForFamilies />
        </div>
        <div className="mt-14">
          <RelicsFAQ />
        </div>
        <div className="mt-14">
          <RelicPrayerCards />
        </div>
        <div className="mt-14">
          <RelicVisitReflectionTool />
        </div>
        <div className="mt-14">
          <RelatedRelicTools />
        </div>
        <div className="mt-14">
          <RelicResources />
        </div>
        <div className="mt-14">
          <RelicCopyrightNote />
        </div>
      </main>
    </div>
  );
}
