import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { ExploreHero } from "@/components/explore/ExploreHero";
import { StartWithBasics } from "@/components/explore/StartWithBasics";
import { ChooseStartingPoint } from "@/components/explore/ChooseStartingPoint";
import { CatholicBeliefsPlainEnglish } from "@/components/explore/CatholicBeliefsPlainEnglish";
import { CommonMisunderstandings } from "@/components/explore/CommonMisunderstandings";
import { FirstTimeMassPreview } from "@/components/explore/FirstTimeMassPreview";
import { OciaPreview } from "@/components/explore/OciaPreview";
import { ReturningPreview } from "@/components/explore/ReturningPreview";
import { ExploreFAQ } from "@/components/explore/ExploreFAQ";
import { SeekerPrayerCard } from "@/components/explore/SeekerPrayerCard";
import { GentleFirstWeek } from "@/components/explore/GentleFirstWeek";
import { RelatedExploreTools } from "@/components/explore/RelatedExploreTools";

export const metadata: Metadata = createPageMetadata({
  title: "Explore the Catholic Faith",
  description:
    "A welcoming guide for anyone curious about Catholicism, the Mass, prayer, Scripture, sacraments, Mary, saints, OCIA, and Catholic spiritual life.",
  path: "/explore",
  keywords: [
    "explore Catholic faith",
    "Catholicism for beginners",
    "returning Catholics",
    "first time at Mass",
    "OCIA",
    "Catholic beliefs",
    "Catholic prayer",
    "Mass",
    "Mary and saints",
  ],
});

export default function ExplorePage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Explore the Catholic Faith" }]} />
        <div className="mt-8">
          <ExploreHero />
        </div>
        <div className="mt-14">
          <StartWithBasics />
        </div>
        <div className="mt-14">
          <ChooseStartingPoint />
        </div>
        <div className="mt-14">
          <CatholicBeliefsPlainEnglish />
        </div>
        <div className="mt-14">
          <CommonMisunderstandings />
        </div>
        <div className="mt-14">
          <FirstTimeMassPreview />
        </div>
        <div className="mt-14">
          <OciaPreview />
        </div>
        <div className="mt-14">
          <ReturningPreview />
        </div>
        <div className="mt-14">
          <ExploreFAQ />
        </div>
        <div className="mt-14">
          <SeekerPrayerCard />
        </div>
        <div className="mt-14">
          <GentleFirstWeek />
        </div>
        <div className="mt-14">
          <RelatedExploreTools />
        </div>
      </main>
    </div>
  );
}
