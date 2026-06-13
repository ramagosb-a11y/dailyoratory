import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FamilyHero } from "@/components/family/FamilyHero";
import { WhatIsDomesticChurch } from "@/components/family/WhatIsDomesticChurch";
import { FamilyAuthorityAsService } from "@/components/family/FamilyAuthorityAsService";
import { FamilyMissionCards } from "@/components/family/FamilyMissionCards";
import { FamilyRuleOfLifeBuilder } from "@/components/family/FamilyRuleOfLifeBuilder";
import { FamilyPrayerStarter } from "@/components/family/FamilyPrayerStarter";
import { HomePrayerCorner } from "@/components/family/HomePrayerCorner";
import { FamilyBlessings } from "@/components/family/FamilyBlessings";
import { FamilyAndSacraments } from "@/components/family/FamilyAndSacraments";
import { MakeSundayDifferent } from "@/components/family/MakeSundayDifferent";
import { FruitsInFamilyLife } from "@/components/family/FruitsInFamilyLife";
import { FamilyVirtueOfWeek } from "@/components/family/FamilyVirtueOfWeek";
import { FamilyConversationStarters } from "@/components/family/FamilyConversationStarters";
import { ParentsFirstTeachers } from "@/components/family/ParentsFirstTeachers";
import { DifficultFamilySeasons } from "@/components/family/DifficultFamilySeasons";
import { FamilyTechnologyRule } from "@/components/family/FamilyTechnologyRule";
import { FamilyWorksOfMercy } from "@/components/family/FamilyWorksOfMercy";
import { LiturgicalLivingAtHome } from "@/components/family/LiturgicalLivingAtHome";
import { FamilyScriptureMassReadings } from "@/components/family/FamilyScriptureMassReadings";
import { SaintsForFamilies } from "@/components/family/SaintsForFamilies";
import { FamilyPrayerCards } from "@/components/family/FamilyPrayerCards";
import { FamilySafetyNote } from "@/components/family/FamilySafetyNote";
import { FamilyForExplorers } from "@/components/family/FamilyForExplorers";
import { RelatedFamilyTools } from "@/components/family/RelatedFamilyTools";
import { FamilyResources } from "@/components/family/FamilyResources";
import { FamilyCopyrightNote } from "@/components/family/FamilyCopyrightNote";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "The Domestic Church | Catholic Family Prayer and Formation",
  description:
    "Build a Catholic home of prayer, love, mercy, Scripture, sacraments, family virtue, liturgical living, and the Fruits of the Holy Spirit.",
  path: "/family",
  keywords: [
    "domestic church",
    "Catholic family",
    "family prayer",
    "Catholic parenting",
    "family rule of life",
    "Catholic home",
    "family formation",
    "fruits of the Holy Spirit",
    "Catholic marriage",
    "liturgical living at home",
  ],
});

export default function FamilyPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "The Domestic Church" }]} />

        <div className="mt-8">
          <FamilyHero />
        </div>
        <div className="mt-14">
          <WhatIsDomesticChurch />
        </div>
        <div className="mt-14">
          <FamilyAuthorityAsService />
        </div>
        <div className="mt-14">
          <FamilyMissionCards />
        </div>
        <div className="mt-14">
          <FamilyRuleOfLifeBuilder />
        </div>
        <div className="mt-14">
          <FamilyPrayerStarter />
        </div>
        <div className="mt-14">
          <HomePrayerCorner />
        </div>
        <div className="mt-14">
          <FamilyBlessings />
        </div>
        <div className="mt-14">
          <FamilyAndSacraments />
        </div>
        <div className="mt-14">
          <MakeSundayDifferent />
        </div>
        <div className="mt-14">
          <FruitsInFamilyLife />
        </div>
        <div className="mt-14">
          <FamilyVirtueOfWeek />
        </div>
        <div className="mt-14">
          <FamilyConversationStarters />
        </div>
        <div className="mt-14">
          <ParentsFirstTeachers />
        </div>
        <div className="mt-14">
          <DifficultFamilySeasons />
        </div>
        <div className="mt-14">
          <FamilyTechnologyRule />
        </div>
        <div className="mt-14">
          <FamilyWorksOfMercy />
        </div>
        <div className="mt-14">
          <LiturgicalLivingAtHome />
        </div>
        <div className="mt-14">
          <FamilyScriptureMassReadings />
        </div>
        <div className="mt-14">
          <SaintsForFamilies />
        </div>
        <div className="mt-14">
          <FamilyPrayerCards />
        </div>
        <div className="mt-14">
          <FamilySafetyNote />
        </div>
        <div className="mt-14">
          <FamilyForExplorers />
        </div>
        <div className="mt-14">
          <RelatedFamilyTools />
        </div>
        <div className="mt-14">
          <FamilyResources />
        </div>
        <div className="mt-14">
          <FamilyCopyrightNote />
        </div>
      </main>
    </div>
  );
}
