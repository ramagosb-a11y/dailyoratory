import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AngelsAndLiturgyOfHours } from "@/components/angels/AngelsAndLiturgyOfHours";
import { AngelsCopyrightNote } from "@/components/angels/AngelsCopyrightNote";
import { AngelsFAQ } from "@/components/angels/AngelsFAQ";
import { AngelsForExplorers } from "@/components/angels/AngelsForExplorers";
import { AngelsForFamilies } from "@/components/angels/AngelsForFamilies";
import { AngelsHero } from "@/components/angels/AngelsHero";
import { AngelsInCreation } from "@/components/angels/AngelsInCreation";
import { AngelsInMass } from "@/components/angels/AngelsInMass";
import { AngelsInSacredArt } from "@/components/angels/AngelsInSacredArt";
import { AngelsInScripture } from "@/components/angels/AngelsInScripture";
import { AngelsSpiritualProtection } from "@/components/angels/AngelsSpiritualProtection";
import { AngelPrayerCards } from "@/components/angels/AngelPrayerCards";
import { AngelResources } from "@/components/angels/AngelResources";
import { AngelStudyPath } from "@/components/angels/AngelStudyPath";
import { AngelTeachingSeries } from "@/components/angels/AngelTeachingSeries";
import { ArchangelsSection } from "@/components/angels/ArchangelsSection";
import { AvoidSuperstitionOccult } from "@/components/angels/AvoidSuperstitionOccult";
import { ChoirsOfAngels } from "@/components/angels/ChoirsOfAngels";
import { FallenAngelsSection } from "@/components/angels/FallenAngelsSection";
import { FeastsOfAngels } from "@/components/angels/FeastsOfAngels";
import { GuardianAngelsComparison } from "@/components/angels/GuardianAngelsComparison";
import { GuardianAngelsSection } from "@/components/angels/GuardianAngelsSection";
import { RelatedAngelTools } from "@/components/angels/RelatedAngelTools";
import { WhatAreAngels } from "@/components/angels/WhatAreAngels";
import { createPageMetadata } from "@/lib/metadata";

const baseMetadata = createPageMetadata({
  title: "Angels and Guardian Angels",
  description:
    "Learn what the Catholic Church teaches about angels, guardian angels, archangels, the choirs of angels, fallen angels, angels in creation, and angels in the Mass.",
  path: "/angels",
  keywords: [
    "Catholic angels",
    "guardian angels",
    "archangels",
    "Saint Michael",
    "Saint Gabriel",
    "Saint Raphael",
    "choirs of angels",
    "fallen angels",
    "angels in the Mass",
    "angels in Scripture",
    "Catholic teaching on angels",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Angels and the Invisible World",
    description:
      "A Catholic guide to angels, guardian angels, archangels, choirs of angels, fallen angels, Scripture, worship, and the Mass.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Angels and the Invisible World | Daily Oratory",
    description:
      "A Catholic guide to angels, guardian angels, archangels, choirs of angels, fallen angels, Scripture, worship, and the Mass.",
  },
};

export default function AngelsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Angels and the Invisible World" }]} />

        <div className="mt-8">
          <AngelsHero />
        </div>
        <div className="mt-14">
          <WhatAreAngels />
        </div>
        <div className="mt-14">
          <AngelsInCreation />
        </div>
        <div className="mt-14">
          <AngelsInScripture />
        </div>
        <div className="mt-14">
          <AngelTeachingSeries />
        </div>
        <div className="mt-14">
          <ArchangelsSection />
        </div>
        <div className="mt-14">
          <GuardianAngelsSection />
        </div>
        <div className="mt-14">
          <GuardianAngelsComparison />
        </div>
        <div className="mt-14">
          <ChoirsOfAngels />
        </div>
        <div className="mt-14">
          <AngelsInMass />
        </div>
        <div className="mt-14">
          <AngelsAndLiturgyOfHours />
        </div>
        <div className="mt-14">
          <AngelsSpiritualProtection />
        </div>
        <div className="mt-14">
          <FallenAngelsSection />
        </div>
        <div className="mt-14">
          <AvoidSuperstitionOccult />
        </div>
        <div className="mt-14">
          <AngelsForFamilies />
        </div>
        <div className="mt-14">
          <FeastsOfAngels />
        </div>
        <div className="mt-14">
          <AngelsInSacredArt />
        </div>
        <div className="mt-14">
          <AngelsFAQ />
        </div>
        <div className="mt-14">
          <AngelsForExplorers />
        </div>
        <div className="mt-14">
          <AngelPrayerCards />
        </div>
        <div className="mt-14">
          <AngelStudyPath />
        </div>
        <div className="mt-14">
          <RelatedAngelTools />
        </div>
        <div className="mt-14">
          <AngelResources />
        </div>
        <div className="mt-14">
          <AngelsCopyrightNote />
        </div>
      </main>
    </div>
  );
}
