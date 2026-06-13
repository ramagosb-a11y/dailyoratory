import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CommonSacramentalsGrid } from "@/components/sacramentals/CommonSacramentalsGrid";
import { DisposeBlessedObjects } from "@/components/sacramentals/DisposeBlessedObjects";
import { GetSacramentalsBlessed } from "@/components/sacramentals/GetSacramentalsBlessed";
import { HowToUseSacramentals } from "@/components/sacramentals/HowToUseSacramentals";
import { PurchaseDiscernmentGuide } from "@/components/sacramentals/PurchaseDiscernmentGuide";
import { RelatedSacramentalTools } from "@/components/sacramentals/RelatedSacramentalTools";
import { SacramentalAffiliateDisclosure } from "@/components/sacramentals/SacramentalAffiliateDisclosure";
import { SacramentalCopyrightNote } from "@/components/sacramentals/SacramentalCopyrightNote";
import { SacramentalFinderTool } from "@/components/sacramentals/SacramentalFinderTool";
import { SacramentalPrayerCards } from "@/components/sacramentals/SacramentalPrayerCards";
import { SacramentalResources } from "@/components/sacramentals/SacramentalResources";
import { SacramentalsFAQ } from "@/components/sacramentals/SacramentalsFAQ";
import { SacramentalsForExplorers } from "@/components/sacramentals/SacramentalsForExplorers";
import { SacramentalsForFamilies } from "@/components/sacramentals/SacramentalsForFamilies";
import { SacramentalsHero } from "@/components/sacramentals/SacramentalsHero";
import { SacramentalsInHome } from "@/components/sacramentals/SacramentalsInHome";
import { SacramentalsLiturgicalYear } from "@/components/sacramentals/SacramentalsLiturgicalYear";
import { SacramentalsNotMagic } from "@/components/sacramentals/SacramentalsNotMagic";
import { SacramentalsSpiritualProtection } from "@/components/sacramentals/SacramentalsSpiritualProtection";
import { SacramentsVsSacramentals } from "@/components/sacramentals/SacramentsVsSacramentals";
import { StarterSacramentals } from "@/components/sacramentals/StarterSacramentals";
import { WhatAreSacramentals } from "@/components/sacramentals/WhatAreSacramentals";
import { WhereToPurchaseSacramentals } from "@/components/sacramentals/WhereToPurchaseSacramentals";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Sacramentals | Holy Water, Rosaries, Medals, Scapulars, and Blessings",
  description:
    "Learn what Catholic sacramentals are, how they differ from sacraments, how to use holy water, rosaries, medals, scapulars, candles, crucifixes, and where to purchase sacramentals.",
  path: "/sacramentals",
  keywords: [
    "Catholic sacramentals",
    "holy water",
    "Catholic rosary",
    "blessed medals",
    "scapular",
    "Saint Benedict Medal",
    "crucifix",
    "Catholic candles",
    "sacramentals vs sacraments",
    "blessed objects",
    "Catholic blessings",
    "where to buy sacramentals",
  ],
});

export default function SacramentalsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Sacramentals" }]} />

        <div className="mt-8">
          <SacramentalsHero />
        </div>
        <div className="mt-14">
          <WhatAreSacramentals />
        </div>
        <div className="mt-14">
          <SacramentsVsSacramentals />
        </div>
        <div className="mt-14">
          <SacramentalsNotMagic />
        </div>
        <div className="mt-14">
          <CommonSacramentalsGrid />
        </div>
        <div className="mt-14">
          <HowToUseSacramentals />
        </div>
        <div className="mt-14">
          <GetSacramentalsBlessed />
        </div>
        <div className="mt-14">
          <DisposeBlessedObjects />
        </div>
        <div className="mt-14">
          <SacramentalsInHome />
        </div>
        <div className="mt-14">
          <SacramentalsSpiritualProtection />
        </div>
        <div className="mt-14">
          <SacramentalsLiturgicalYear />
        </div>
        <div className="mt-14">
          <StarterSacramentals />
        </div>
        <div className="mt-14">
          <WhereToPurchaseSacramentals />
          <SacramentalAffiliateDisclosure />
        </div>
        <div className="mt-14">
          <PurchaseDiscernmentGuide />
        </div>
        <div className="mt-14">
          <SacramentalsForFamilies />
        </div>
        <div className="mt-14">
          <SacramentalsForExplorers />
        </div>
        <div className="mt-14">
          <SacramentalsFAQ />
        </div>
        <div className="mt-14">
          <SacramentalPrayerCards />
        </div>
        <div className="mt-14">
          <SacramentalFinderTool />
        </div>
        <div className="mt-14">
          <RelatedSacramentalTools />
        </div>
        <div className="mt-14">
          <SacramentalResources />
        </div>
        <div className="mt-14">
          <SacramentalCopyrightNote />
        </div>
      </main>
    </div>
  );
}
