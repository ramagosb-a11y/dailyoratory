import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getTopPrayers } from "@/lib/prayer";
import { getMediaItemBySlug } from "@/lib/media";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { TopPrayerCards } from "@/components/pray/TopPrayerCards";
import { ChoosePrayerByNeed } from "@/components/pray/ChoosePrayerByNeed";
import { PrayerRhythmBuilder } from "@/components/pray/PrayerRhythmBuilder";
import { SeasonalMarianPrayerCard } from "@/components/prayers/SeasonalMarianPrayerCard";
import { WhatIsPrayer } from "@/components/pray/WhatIsPrayer";
import { PrayerLevels } from "@/components/pray/PrayerLevels";
import { PrayerTypesGrid } from "@/components/pray/PrayerTypesGrid";
import { PrayerForBeginners } from "@/components/pray/PrayerForBeginners";
import { PrayerObstacles } from "@/components/pray/PrayerObstacles";
import { PrayerMediaFeature } from "@/components/pray/PrayerMediaFeature";
import { PrayerFAQ } from "@/components/pray/PrayerFAQ";
import { ExternalPrayerResources } from "@/components/pray/ExternalPrayerResources";
import { PrayerCopyrightNote } from "@/components/pray/PrayerCopyrightNote";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Prayer",
  description:
    "Begin praying with Catholic prayers, learn the levels and types of prayer, build a daily prayer rhythm, and explore trusted Catholic prayer resources.",
  path: "/pray",
  keywords: [
    "Catholic prayer",
    "how to pray",
    "Catholic prayers",
    "levels of prayer",
    "vocal prayer",
    "meditation",
    "contemplative prayer",
    "Rosary",
    "Liturgy of the Hours",
    "Eucharistic Adoration",
    "prayer rhythm",
  ],
});

export default async function PrayPage() {
  const [prayers, featuredPrayerTalk] = await Promise.all([Promise.resolve(getTopPrayers()), getMediaItemBySlug("levels-of-prayer")]);
  return (
    <EditorialPage breadcrumbs={[{ label: "Pray" }]}>
      <EditorialHero eyebrow="A quiet place to begin" title="Come to Prayer" description="Begin where you are. Find words for this moment, return to a familiar devotion, or make room for a simple daily rhythm." image="/images/editorial/pray.webp" imageAlt="" actions={[{ label: "Begin praying", href: "#prayers-for-today" }, { label: "Browse the prayer library", href: "#prayer-library" }]} />
      <SectionJumpNav ariaLabel="Prayer sections" items={[{ label: "Pray now", href: "#prayers-for-today" }, { label: "Your need", href: "#prayer-by-need" }, { label: "Your rhythm", href: "#prayer-rhythm-builder" }, { label: "Library", href: "#prayer-library" }, { label: "Learn to pray", href: "#learn-to-pray" }, { label: "Questions", href: "#questions" }]} />
      <TopPrayerCards prayers={prayers} />
      <div className="mt-14"><ChoosePrayerByNeed /></div>
      <div className="mt-14"><PrayerRhythmBuilder /></div>
      <EditorialSection id="prayer-library" title="A life nourished by prayer" eyebrow="Find your next prayer"><EditorialGrid>
        <EditorialCard title="The Holy Rosary" description="Pray with Mary and contemplate the mysteries of Christ." href="/rosary" image="/images/editorial/pray.webp" />
        <EditorialCard title="Eucharistic Adoration" description="Spend time with Jesus in the Blessed Sacrament." href="/adoration" image="/images/editorial/eucharist.webp" />
        <EditorialCard title="Pray with Scripture" description="Read slowly, reflect, and respond to the Word of God." href="/library/scripture-prayer" image="/images/editorial/learn.webp" />
      </EditorialGrid><EditorialDisclosure title="A Marian prayer for this season"><SeasonalMarianPrayerCard /></EditorialDisclosure><EditorialLinks links={[{ label: "Browse all prayers", href: "/library" }, { label: "Litanies", href: "/prayers/litanies" }, { label: "The Seven Penitential Psalms", href: "/prayers/seven-penitential-psalms" }, { label: "Prayers for the dead", href: "/formation/catholic-burial/prayers-for-the-dead" }, { label: "Family prayer", href: "/liturgical-living/family" }, { label: "Community prayer intentions", href: "/prayer-intentions" }, { label: "The weekly Catholic rhythm", href: "/catholic-life#weekly-rhythm" }]} /></EditorialSection>
      <EditorialSection id="learn-to-pray" title="Grow in the friendship of prayer" eyebrow="For beginners and returning hearts">
        <EditorialDisclosure title="Begin with the basics"><WhatIsPrayer /><PrayerForBeginners /></EditorialDisclosure>
        <EditorialDisclosure title="Explore the levels and types of prayer"><PrayerLevels /><PrayerTypesGrid /></EditorialDisclosure>
        <EditorialDisclosure title="When prayer feels difficult"><PrayerObstacles /></EditorialDisclosure>
        {featuredPrayerTalk ? <PrayerMediaFeature item={featuredPrayerTalk} /> : null}
      </EditorialSection>
      <EditorialSection id="questions" title="Guidance for the journey" eyebrow="Questions and trusted resources"><PrayerFAQ /><EditorialDisclosure title="Explore trusted prayer resources"><ExternalPrayerResources /></EditorialDisclosure><PrayerCopyrightNote /></EditorialSection>
    </EditorialPage>
  );
}
