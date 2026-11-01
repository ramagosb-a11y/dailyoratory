import type { ReactNode } from "react";
import styles from "@/components/pope/PopePage.module.css";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { PopeHero } from "@/components/pope/PopeHero";
import { CurrentPopeCard } from "@/components/pope/CurrentPopeCard";
import { WhatIsPope } from "@/components/pope/WhatIsPope";
import { WhyPeterMatters } from "@/components/pope/WhyPeterMatters";
import { PopeRoles } from "@/components/pope/PopeRoles";
import { PapalInfallibilityExplainer } from "@/components/pope/PapalInfallibilityExplainer";
import { LevelsOfPapalTeaching } from "@/components/pope/LevelsOfPapalTeaching";
import { PapalDocumentsLibrary } from "@/components/pope/PapalDocumentsLibrary";
import { FeaturedPapalDocuments } from "@/components/pope/FeaturedPapalDocuments";
import { PapalTimeline } from "@/components/pope/PapalTimeline";
import { HowPopeIsChosen } from "@/components/pope/HowPopeIsChosen";
import { PopeBishopsCouncils } from "@/components/pope/PopeBishopsCouncils";
import { PopeAndMagisterium } from "@/components/pope/PopeAndMagisterium";
import { PopeFAQ } from "@/components/pope/PopeFAQ";
import { PopeForExplorers } from "@/components/pope/PopeForExplorers";
import { PrayerForHolyFather } from "@/components/pope/PrayerForHolyFather";
import { PopesMonthlyIntentions } from "@/components/pope/PopesMonthlyIntentions";
import { ReadPapalDocumentsPrayerfully } from "@/components/pope/ReadPapalDocumentsPrayerfully";
import { PapalDocumentsByTheme } from "@/components/pope/PapalDocumentsByTheme";
import { PopeDailyLife } from "@/components/pope/PopeDailyLife";
import { PopeOfficialSources } from "@/components/pope/PopeOfficialSources";
import { RelatedPopeTools } from "@/components/pope/RelatedPopeTools";
import { PopeCopyrightNote } from "@/components/pope/PopeCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "The Pope and the Papacy",
  description:
    "Understand the Pope's role as Bishop of Rome, successor of Saint Peter, visible sign of unity, papal documents, papal teaching, and how to pray for the Holy Father.",
  path: "/pope",
  keywords: [
    "Pope",
    "papacy",
    "Pope Leo XIV",
    "Bishop of Rome",
    "successor of Peter",
    "papal documents",
    "encyclicals",
    "apostolic exhortations",
    "papal infallibility",
    "Magisterium",
    "Vatican",
    "Holy Father",
  ],
});


const chapters = [
  { id: "pope-foundations", label: "Foundations", title: "Understanding the papacy" },
  { id: "pope-teaching", label: "Teaching", title: "Faith, teaching & unity" },
  { id: "pope-documents", label: "Documents", title: "Explore the papal library" },
  { id: "pope-history", label: "History", title: "A living succession" },
  { id: "pope-prayer", label: "Prayer", title: "From understanding to prayer" },
];

function Chapter({ index, children }: { index: number; children: ReactNode }) {
  const chapter = chapters[index];
  return <section id={chapter.id} className={styles.chapter} aria-labelledby={chapter.id + "-title"}>
    <header className={styles.chapterHeading}><span className={styles.chapterNumber} aria-hidden="true">0{index + 1}</span><h2 id={chapter.id + "-title"}>{chapter.title}</h2></header>
    <div className={styles.chapterContent}>{children}</div>
  </section>;
}

export default function PopePage() {
  return <div className={styles.page}>
    <main className={styles.main}>
      <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "The Pope" }]} />
      <PopeHero />
      <nav className={styles.chapterNav} aria-label="Explore the Pope page">
        {chapters.map((chapter, index) => <a key={chapter.id} href={"#" + chapter.id}><span aria-hidden="true">0{index + 1}</span>{chapter.label}</a>)}
      </nav>
      <CurrentPopeCard />
      <Chapter index={0}><WhatIsPope /><WhyPeterMatters /><PopeRoles /><PopeForExplorers /></Chapter>
      <Chapter index={1}><PapalInfallibilityExplainer /><LevelsOfPapalTeaching /><PopeBishopsCouncils /><PopeAndMagisterium /><PopeFAQ /></Chapter>
      <Chapter index={2}><PapalDocumentsLibrary /><FeaturedPapalDocuments /><ReadPapalDocumentsPrayerfully /><PapalDocumentsByTheme /></Chapter>
      <Chapter index={3}><PapalTimeline /><HowPopeIsChosen /><PopeDailyLife /></Chapter>
      <Chapter index={4}><PrayerForHolyFather /><PopesMonthlyIntentions /><PopeOfficialSources /><RelatedPopeTools /></Chapter>
      <div className={styles.closing}><PopeCopyrightNote /></div>
      <p id="pope-photo-credit" className={styles.credits}>Photography: <a href="https://commons.wikimedia.org/wiki/File:St._Peter%27s_Basilica_in_Vatican_City.jpg">Saint Peter’s Basilica</a> by Didier Moïse, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Resized and converted to WebP; cropped for display.</p>
    </main>
  </div>;
}
