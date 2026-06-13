import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BeginnerReadingPlan } from "@/components/church-fathers/BeginnerReadingPlan";
import { ChurchFatherGroupSection } from "@/components/church-fathers/ChurchFatherGroupSection";
import { ChurchFatherResearchSources } from "@/components/church-fathers/ChurchFatherResearchSources";
import { ChurchFatherTopicGrid } from "@/components/church-fathers/ChurchFatherTopicGrid";
import { ChurchFathersHero } from "@/components/church-fathers/ChurchFathersHero";
import { FatherOfTheWeek } from "@/components/church-fathers/FatherOfTheWeek";
import { FathersAndMassSection } from "@/components/church-fathers/FathersAndMassSection";
import { GreatFathersCallout } from "@/components/church-fathers/GreatFathersCallout";
import { RelatedChurchFatherTools } from "@/components/church-fathers/RelatedChurchFatherTools";
import { WhatAreChurchFathers } from "@/components/church-fathers/WhatAreChurchFathers";
import { WhyFathersMatter } from "@/components/church-fathers/WhyFathersMatter";
import {
  getBeginnerReadingPlan,
  getChurchFathersByGroup,
  getChurchFatherTopics,
  getFatherOfTheWeek,
  getGreatChurchFathers,
  getTraditionGroupDescription,
} from "@/lib/churchFathers";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Church Fathers Library",
  description:
    "Discover the Church Fathers, early Christian witnesses who taught Scripture, sacraments, prayer, doctrine, and holiness, with accessible guidance for Catholics and curious learners alike.",
  path: "/church-fathers",
});

export default function ChurchFathersPage() {
  const topics = getChurchFatherTopics();
  const plan = getBeginnerReadingPlan();
  const fatherOfTheWeek = getFatherOfTheWeek();
  const greatFathers = getGreatChurchFathers();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Church Fathers" }]} />

        <div className="mt-8">
          <ChurchFathersHero />
        </div>

        <div className="mt-14">
          <WhatAreChurchFathers />
        </div>

        <div className="mt-14">
          <WhyFathersMatter />
        </div>

        <div className="mt-14">
          <GreatFathersCallout fathers={greatFathers} />
        </div>

        <div className="mt-14 space-y-14">
          <ChurchFatherGroupSection
            id="apostolic-fathers"
            title="Apostolic Fathers"
            description={getTraditionGroupDescription("apostolic-fathers")}
            fathers={getChurchFathersByGroup("apostolic-fathers")}
          />
          <ChurchFatherGroupSection
            id="greek-fathers"
            title="Greek Fathers"
            description={getTraditionGroupDescription("greek-fathers")}
            fathers={getChurchFathersByGroup("greek-fathers")}
          />
          <ChurchFatherGroupSection
            id="latin-fathers"
            title="Latin Fathers"
            description={getTraditionGroupDescription("latin-fathers")}
            fathers={getChurchFathersByGroup("latin-fathers")}
          />
          <ChurchFatherGroupSection
            id="syriac-eastern-witnesses"
            title="Syriac and Eastern Witnesses"
            description={getTraditionGroupDescription("syriac-eastern-witnesses")}
            fathers={getChurchFathersByGroup("syriac-eastern-witnesses")}
          />
        </div>

        <div className="mt-14">
          <ChurchFatherTopicGrid topics={topics} />
        </div>

        <div className="mt-14">
          <BeginnerReadingPlan plan={plan} />
        </div>

        <div className="mt-14">
          <FathersAndMassSection />
        </div>

        <div className="mt-14">
          <FatherOfTheWeek father={fatherOfTheWeek} />
        </div>

        <div className="mt-14">
          <ChurchFatherResearchSources />
        </div>

        <div className="mt-14">
          <RelatedChurchFatherTools />
        </div>

        <div className="mt-14 rounded-md border border-stone bg-ivory p-6">
          <p className="text-xs font-bold uppercase text-burgundy">Editorial note</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Daily Oratory uses original summaries and trusted outbound links here. This page is
            meant to invite research and prayerful study, not replace careful reading of the
            Fathers themselves.
          </p>
        </div>
      </main>
    </div>
  );
}
