import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BeginnerCatechismPaths } from "@/components/catechism/BeginnerCatechismPaths";
import { CatechismAndMass } from "@/components/catechism/CatechismAndMass";
import { CatechismAndMoralLife } from "@/components/catechism/CatechismAndMoralLife";
import { CatechismAndPrayer } from "@/components/catechism/CatechismAndPrayer";
import { CatechismAndScripture } from "@/components/catechism/CatechismAndScripture";
import { CatechismCopyrightNote } from "@/components/catechism/CatechismCopyrightNote";
import { CatechismDailyLife } from "@/components/catechism/CatechismDailyLife";
import { CatechismFAQ } from "@/components/catechism/CatechismFAQ";
import { CatechismForDifferentUsers } from "@/components/catechism/CatechismForDifferentUsers";
import { CatechismHero } from "@/components/catechism/CatechismHero";
import { CatechismReadingPlan } from "@/components/catechism/CatechismReadingPlan";
import { CatechismStudyMethod } from "@/components/catechism/CatechismStudyMethod";
import { CatechismTopicFinder } from "@/components/catechism/CatechismTopicFinder";
import { CompendiumSection } from "@/components/catechism/CompendiumSection";
import { FourPillars } from "@/components/catechism/FourPillars";
import { HowToUseCatechism } from "@/components/catechism/HowToUseCatechism";
import { OfficialCatechismResources } from "@/components/catechism/OfficialCatechismResources";
import { RelatedCatechismTools } from "@/components/catechism/RelatedCatechismTools";
import { WhatIsCatechism } from "@/components/catechism/WhatIsCatechism";
import { WhyCatechismMatters } from "@/components/catechism/WhyCatechismMatters";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catechism of the Catholic Church",
  description:
    "Learn what the Catechism of the Catholic Church is, how it is organized, how to use it, and where to read official Vatican and USCCB Catechism resources.",
  path: "/catechism",
  keywords: [
    "Catechism of the Catholic Church",
    "CCC",
    "Catholic teaching",
    "Catholic doctrine",
    "Catholic faith",
    "Compendium of the Catechism",
    "four pillars of the Catechism",
    "Catholic formation",
    "OCIA",
    "Catholic study guide",
  ],
});

export default function CatechismPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Catechism" }]} />

        <div className="mt-8">
          <CatechismHero />
        </div>

        <div className="mt-14">
          <WhatIsCatechism />
        </div>

        <div className="mt-14">
          <WhyCatechismMatters />
        </div>

        <div className="mt-14">
          <FourPillars />
        </div>

        <div className="mt-14">
          <HowToUseCatechism />
        </div>

        <div className="mt-14">
          <CatechismTopicFinder />
        </div>

        <div className="mt-14">
          <BeginnerCatechismPaths />
        </div>

        <div className="mt-14">
          <CatechismDailyLife />
        </div>

        <div className="mt-14">
          <CatechismAndScripture />
        </div>

        <div className="mt-14">
          <CatechismAndMass />
        </div>

        <div className="mt-14">
          <CatechismAndPrayer />
        </div>

        <div className="mt-14">
          <CatechismAndMoralLife />
        </div>

        <div className="mt-14">
          <CompendiumSection />
        </div>

        <div className="mt-14">
          <CatechismReadingPlan />
        </div>

        <div className="mt-14">
          <CatechismStudyMethod />
        </div>

        <div className="mt-14">
          <CatechismFAQ />
        </div>

        <div className="mt-14">
          <CatechismForDifferentUsers />
        </div>

        <div className="mt-14">
          <RelatedCatechismTools />
        </div>

        <div className="mt-14">
          <OfficialCatechismResources />
        </div>

        <div className="mt-14">
          <CatechismCopyrightNote />
        </div>
      </main>
    </div>
  );
}
