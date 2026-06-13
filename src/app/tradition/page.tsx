import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { TraditionHero } from "@/components/tradition/TraditionHero";
import { WhatIsSacredTradition } from "@/components/tradition/WhatIsSacredTradition";
import { TraditionNotOldCustoms } from "@/components/tradition/TraditionNotOldCustoms";
import { ScriptureAndTradition } from "@/components/tradition/ScriptureAndTradition";
import { ScriptureTraditionMagisterium } from "@/components/tradition/ScriptureTraditionMagisterium";
import { DepositOfFaith } from "@/components/tradition/DepositOfFaith";
import { BigTAndSmallTTradition } from "@/components/tradition/BigTAndSmallTTradition";
import { DoctrineDisciplineDevotionCustom } from "@/components/tradition/DoctrineDisciplineDevotionCustom";
import { TraditionClassifier } from "@/components/tradition/TraditionClassifier";
import { WhereWeSeeTradition } from "@/components/tradition/WhereWeSeeTradition";
import { TraditionEarlyChurch } from "@/components/tradition/TraditionEarlyChurch";
import { ApostolicSuccession } from "@/components/tradition/ApostolicSuccession";
import { TraditionAndMass } from "@/components/tradition/TraditionAndMass";
import { TraditionAndBible } from "@/components/tradition/TraditionAndBible";
import { TraditionFAQ } from "@/components/tradition/TraditionFAQ";
import { TraditionForExplorers } from "@/components/tradition/TraditionForExplorers";
import { TraditionAndHolySpirit } from "@/components/tradition/TraditionAndHolySpirit";
import { TraditionStudyPath } from "@/components/tradition/TraditionStudyPath";
import { TraditionTimeline } from "@/components/tradition/TraditionTimeline";
import { TraditionDailyLife } from "@/components/tradition/TraditionDailyLife";
import { RelatedTraditionTools } from "@/components/tradition/RelatedTraditionTools";
import { TraditionResources } from "@/components/tradition/TraditionResources";
import { TraditionCopyrightNote } from "@/components/tradition/TraditionCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "Sacred Tradition in the Catholic Church",
  description:
    "Understand Sacred Tradition, Scripture, the Magisterium, apostolic succession, the Church Fathers, and how the Catholic faith is handed on through the Holy Spirit.",
  path: "/tradition",
  keywords: [
    "Sacred Tradition",
    "Catholic Tradition",
    "Scripture and Tradition",
    "Magisterium",
    "deposit of faith",
    "apostolic succession",
    "Catholic teaching",
    "Church Fathers",
    "Dei Verbum",
    "Catholic faith",
    "Catholic doctrine",
  ],
});

export default function TraditionPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Sacred Tradition" }]} />

        <div className="mt-8">
          <TraditionHero />
        </div>
        <div className="mt-14">
          <WhatIsSacredTradition />
        </div>
        <div className="mt-14">
          <TraditionNotOldCustoms />
        </div>
        <div className="mt-14">
          <ScriptureAndTradition />
        </div>
        <div className="mt-14">
          <ScriptureTraditionMagisterium />
        </div>
        <div className="mt-14">
          <DepositOfFaith />
        </div>
        <div className="mt-14">
          <BigTAndSmallTTradition />
        </div>
        <div className="mt-14">
          <DoctrineDisciplineDevotionCustom />
        </div>
        <div className="mt-14">
          <TraditionClassifier />
        </div>
        <div className="mt-14">
          <WhereWeSeeTradition />
        </div>
        <div className="mt-14">
          <TraditionEarlyChurch />
        </div>
        <div className="mt-14">
          <ApostolicSuccession />
        </div>
        <div className="mt-14">
          <TraditionAndMass />
        </div>
        <div className="mt-14">
          <TraditionAndBible />
        </div>
        <div className="mt-14">
          <TraditionFAQ />
        </div>
        <div className="mt-14">
          <TraditionForExplorers />
        </div>
        <div className="mt-14">
          <TraditionAndHolySpirit />
        </div>
        <div className="mt-14">
          <TraditionStudyPath />
        </div>
        <div className="mt-14">
          <TraditionTimeline />
        </div>
        <div className="mt-14">
          <TraditionDailyLife />
        </div>
        <div className="mt-14">
          <RelatedTraditionTools />
        </div>
        <div className="mt-14">
          <TraditionResources />
        </div>
        <div className="mt-14">
          <TraditionCopyrightNote />
        </div>
      </main>
    </div>
  );
}
