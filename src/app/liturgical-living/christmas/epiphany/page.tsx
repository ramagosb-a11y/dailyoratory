import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ChristmasToEpiphanyPathway } from "@/components/liturgical-living/epiphany/ChristmasToEpiphanyPathway";
import { EpiphanyExternalResources } from "@/components/liturgical-living/epiphany/EpiphanyExternalResources";
import { EpiphanyHero } from "@/components/liturgical-living/epiphany/EpiphanyHero";
import { EpiphanyHouseBlessingSection } from "@/components/liturgical-living/epiphany/EpiphanyHouseBlessingSection";
import { EpiphanyPrayerGuide } from "@/components/liturgical-living/epiphany/EpiphanyPrayerGuide";
import { EpiphanyReflectionQuestions } from "@/components/liturgical-living/epiphany/EpiphanyReflectionQuestions";
import { EpiphanyRelatedLinks } from "@/components/liturgical-living/epiphany/EpiphanyRelatedLinks";
import { EpiphanyScriptureSection } from "@/components/liturgical-living/epiphany/EpiphanyScriptureSection";
import { FamilyEpiphanyNight } from "@/components/liturgical-living/epiphany/FamilyEpiphanyNight";
import { FollowTheStarCards } from "@/components/liturgical-living/epiphany/FollowTheStarCards";
import { HomeBlessingBuilder } from "@/components/liturgical-living/epiphany/HomeBlessingBuilder";
import { MagiGiftCards } from "@/components/liturgical-living/epiphany/MagiGiftCards";
import { WhatIsEpiphany } from "@/components/liturgical-living/epiphany/WhatIsEpiphany";
import {
  epiphanyFamilyNightSteps,
  epiphanyGifts,
  epiphanyJourneySteps,
  epiphanyPrayerText,
  epiphanyReflectionQuestions,
  epiphanyRelatedLinks,
} from "@/data/epiphany";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Epiphany of the Lord | Christmas Season | Daily Oratory",
  description:
    "Learn and pray the Epiphany of the Lord: follow the Magi, understand gold, frankincense, and myrrh, bless your home, and carry Christ’s light into the world.",
  path: "/liturgical-living/christmas/epiphany",
  keywords: [
    "Epiphany",
    "Epiphany of the Lord",
    "Catholic Epiphany",
    "Three Kings",
    "Magi",
    "gold frankincense myrrh",
    "Epiphany house blessing",
    "chalk blessing",
    "Christmas season",
    "Matthew 2",
  ],
});

export default function EpiphanyPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Liturgical Year", href: "/liturgical-living" },
            { label: "Christmas", href: "/liturgical-living/christmas" },
            { label: "Epiphany" },
          ]}
        />

        <div className="mt-8 grid gap-8">
          <EpiphanyHero />
          <WhatIsEpiphany />
          <EpiphanyScriptureSection />
          <FollowTheStarCards steps={epiphanyJourneySteps} />
          <MagiGiftCards gifts={epiphanyGifts} />
          <EpiphanyPrayerGuide prayerText={epiphanyPrayerText} />
          <EpiphanyHouseBlessingSection />
          <HomeBlessingBuilder />
          <ChristmasToEpiphanyPathway />
          <FamilyEpiphanyNight steps={epiphanyFamilyNightSteps} />
          <EpiphanyReflectionQuestions questions={epiphanyReflectionQuestions} />
          <EpiphanyRelatedLinks links={epiphanyRelatedLinks} />
          <EpiphanyExternalResources />
        </div>
      </main>
    </div>
  );
}
