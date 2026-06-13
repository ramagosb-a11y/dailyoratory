import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatholicLifeHero } from "@/components/catholic-life/CatholicLifeHero";
import { CatholicLifeOrientation } from "@/components/catholic-life/CatholicLifeOrientation";
import { CatholicLifeRelatedLinks } from "@/components/catholic-life/CatholicLifeRelatedLinks";
import { CatholicLifeRoadmapTimeline } from "@/components/catholic-life/CatholicLifeRoadmapTimeline";
import { CatholicLifeSectionGrid } from "@/components/catholic-life/CatholicLifeSectionGrid";
import { ChooseYourPathTracks } from "@/components/catholic-life/ChooseYourPathTracks";
import { NotSureWhereToStartCallout } from "@/components/catholic-life/NotSureWhereToStartCallout";
import { WeeklyCatholicRhythm } from "@/components/catholic-life/WeeklyCatholicRhythm";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Life Roadmap | Start Here | Daily Oratory",
  description:
    "A simple Catholic life roadmap for prayer, Mass, Confession, the Eucharist, Mary and the Rosary, Scripture, formation, grace, virtue, suffering, the liturgical year, and family faith.",
  path: "/catholic-life",
  keywords: [
    "Catholic life",
    "Catholic roadmap",
    "start Catholic faith",
    "daily Catholic prayer",
    "Mass",
    "Confession",
    "Eucharist",
    "Rosary",
    "Scripture",
    "Catholic formation",
    "Catholic family faith",
    "liturgical year",
    "returning Catholic",
    "new Catholic",
  ],
});

export default function CatholicLifePage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Life Roadmap",
              description:
                "A simple Catholic life roadmap for prayer, Mass, Confession, the Eucharist, Mary and the Rosary, Scripture, formation, grace, virtue, suffering, the liturgical year, and family faith.",
              path: "/catholic-life",
            }),
            buildArticleStructuredData({
              headline: "Catholic Life Roadmap",
              description:
                "A simple Catholic life roadmap for prayer, Mass, Confession, the Eucharist, Mary and the Rosary, Scripture, formation, grace, virtue, suffering, the liturgical year, and family faith.",
              path: "/catholic-life",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Catholic Life Roadmap", path: "/catholic-life" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Catholic Life Roadmap" }]} />

        <div className="mt-8">
          <CatholicLifeHero />
        </div>

        <div className="mt-14">
          <CatholicLifeOrientation />
        </div>

        <div className="mt-14">
          <CatholicLifeRoadmapTimeline />
        </div>

        <div className="mt-14">
          <CatholicLifeSectionGrid />
        </div>

        <div className="mt-14">
          <ChooseYourPathTracks />
        </div>

        <div className="mt-14">
          <WeeklyCatholicRhythm />
        </div>

        <div className="mt-14">
          <NotSureWhereToStartCallout />
        </div>

        <div className="mt-14">
          <CatholicLifeRelatedLinks />
        </div>
      </main>
    </div>
  );
}
