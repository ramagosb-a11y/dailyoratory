import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AudioAndAccessibility } from "@/components/liturgy-hours/AudioAndAccessibility";
import { BeginnerPath } from "@/components/liturgy-hours/BeginnerPath";
import { HoursExplainedGrid } from "@/components/liturgy-hours/HoursExplainedGrid";
import { LiturgyHoursAndMass } from "@/components/liturgy-hours/LiturgyHoursAndMass";
import { LiturgyHoursCopyrightNote } from "@/components/liturgy-hours/LiturgyHoursCopyrightNote";
import { LiturgyHoursFAQ } from "@/components/liturgy-hours/LiturgyHoursFAQ";
import { LiturgyHoursHero } from "@/components/liturgy-hours/LiturgyHoursHero";
import { LiturgyHoursTrustedSources } from "@/components/liturgy-hours/LiturgyHoursTrustedSources";
import { PrayerRhythmCards } from "@/components/liturgy-hours/PrayerRhythmCards";
import { PrayTheHoursTogether } from "@/components/liturgy-hours/PrayTheHoursTogether";
import { RelatedLiturgyHoursTools } from "@/components/liturgy-hours/RelatedLiturgyHoursTools";
import { SanctifyTheDay } from "@/components/liturgy-hours/SanctifyTheDay";
import { TodaysOfficeLinks } from "@/components/liturgy-hours/TodaysOfficeLinks";
import { TypicalHourStructure } from "@/components/liturgy-hours/TypicalHourStructure";
import { WhatIsLiturgyHours } from "@/components/liturgy-hours/WhatIsLiturgyHours";
import { WhyPrayTheHours } from "@/components/liturgy-hours/WhyPrayTheHours";
import { WorldPrayerGlobe } from "@/components/liturgy-hours/WorldPrayerGlobe";
import { createPageMetadata } from "@/lib/metadata";
import { getLiturgyHours, getLiturgyHoursFaqs, getLiturgyHoursResources, getPrayerRhythms } from "@/lib/liturgyOfTheHours";

export const metadata: Metadata = createPageMetadata({
  title: "Liturgy of the Hours",
  description:
    "Learn how to pray the Liturgy of the Hours, the daily prayer of the Church, with beginner guidance for Catholics, returning Catholics, and anyone curious about how the Church prays.",
  path: "/liturgy-of-the-hours",
  keywords: [
    "Liturgy of the Hours",
    "Divine Office",
    "Catholic daily prayer",
    "Morning Prayer",
    "Evening Prayer",
    "Night Prayer",
    "Lauds",
    "Vespers",
    "Compline",
    "DivineOffice.org",
    "Breviary",
    "Psalms",
  ],
});

export default function LiturgyOfTheHoursPage() {
  const hours = getLiturgyHours();
  const faqs = getLiturgyHoursFaqs();
  const resources = getLiturgyHoursResources();
  const rhythms = getPrayerRhythms();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Liturgy of the Hours" }]} />

        <div className="mt-8">
          <LiturgyHoursHero />
        </div>

        <div className="mt-10 rounded-md border border-stone bg-ivory p-5">
          <p className="text-sm leading-7 text-muted">
            The liturgical texts and local celebrations of the Church follow approved books,
            calendars, and norms. Daily Oratory helps you learn and begin prayerfully, but the full
            office texts should be prayed from an approved source such as DivineOffice.org, a
            breviary, or another trusted Catholic resource.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted">
            If you are exploring the Catholic faith, the Liturgy of the Hours is a beautiful way to
            discover how the Church prays with the Psalms and sanctifies the day.
          </p>
        </div>

        <div className="mt-14">
          <WorldPrayerGlobe />
        </div>

        <div className="mt-14">
          <WhatIsLiturgyHours />
        </div>

        <div className="mt-14">
          <WhyPrayTheHours />
        </div>

        <div className="mt-14">
          <HoursExplainedGrid hours={hours} />
        </div>

        <div className="mt-14">
          <TypicalHourStructure />
        </div>

        <div className="mt-14">
          <BeginnerPath />
        </div>

        <div className="mt-14">
          <PrayerRhythmCards rhythms={rhythms} />
        </div>

        <div className="mt-14">
          <TodaysOfficeLinks hours={hours} />
        </div>

        <div className="mt-14">
          <AudioAndAccessibility />
        </div>

        <div className="mt-14">
          <LiturgyHoursFAQ faqs={faqs} />
        </div>

        <div className="mt-14">
          <LiturgyHoursAndMass />
        </div>

        <div className="mt-14">
          <SanctifyTheDay />
        </div>

        <div className="mt-14">
          <PrayTheHoursTogether />
        </div>

        <div className="mt-14">
          <RelatedLiturgyHoursTools />
        </div>

        <div className="mt-14">
          <LiturgyHoursTrustedSources resources={resources} />
        </div>

        <div className="mt-14">
          <LiturgyHoursCopyrightNote />
        </div>
      </main>
    </div>
  );
}
