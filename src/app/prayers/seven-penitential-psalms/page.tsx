import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { createPageMetadata } from "@/lib/metadata";
import { BeforeConfessionPsalms } from "@/components/prayers/penitential-psalms/BeforeConfessionPsalms";
import { LentenPsalmPractice } from "@/components/prayers/penitential-psalms/LentenPsalmPractice";
import { PenitentialPsalmCards } from "@/components/prayers/penitential-psalms/PenitentialPsalmCards";
import { PenitentialPsalmExternalResource } from "@/components/prayers/penitential-psalms/PenitentialPsalmExternalResource";
import { PenitentialPsalmPrayerCards } from "@/components/prayers/penitential-psalms/PenitentialPsalmPrayerCards";
import { PenitentialPsalmReflectionQuestions } from "@/components/prayers/penitential-psalms/PenitentialPsalmReflectionQuestions";
import { PenitentialPsalmRelatedLinks } from "@/components/prayers/penitential-psalms/PenitentialPsalmRelatedLinks";
import { PenitentialPsalmsHero } from "@/components/prayers/penitential-psalms/PenitentialPsalmsHero";
import { RepentancePathway } from "@/components/prayers/penitential-psalms/RepentancePathway";
import { SevenDayPsalmJourney } from "@/components/prayers/penitential-psalms/SevenDayPsalmJourney";
import { WhatArePenitentialPsalms } from "@/components/prayers/penitential-psalms/WhatArePenitentialPsalms";
import { WhyPrayPenitentialPsalms } from "@/components/prayers/penitential-psalms/WhyPrayPenitentialPsalms";

const pageMetadata = createPageMetadata({
  title: "The Seven Penitential Psalms | Prayers of Repentance and Mercy | Daily Oratory",
  description:
    "Pray the Seven Penitential Psalms — Psalms 6, 32, 38, 51, 102, 130, and 143 — as a Catholic path of repentance, mercy, Confession, Lent, and spiritual renewal.",
  path: "/prayers/seven-penitential-psalms",
  keywords: [
    "Seven Penitential Psalms",
    "Penitential Psalms",
    "Psalm 51",
    "Miserere",
    "Psalm 130",
    "De Profundis",
    "Catholic repentance prayers",
    "Confession preparation",
    "Lent prayers",
    "Catholic Psalms",
    "mercy",
    "contrition",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "The Seven Penitential Psalms",
    description:
      "A Catholic guide to praying the Seven Penitential Psalms for repentance, Confession, Lent, mercy, and conversion.",
  },
};

export default function SevenPenitentialPsalmsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Seven Penitential Psalms",
              description:
                "Pray the Seven Penitential Psalms as a Catholic path of repentance, mercy, Confession, Lent, and spiritual renewal.",
              path: "/prayers/seven-penitential-psalms",
            }),
            buildArticleStructuredData({
              headline: "The Seven Penitential Psalms",
              description:
                "A Catholic guide to praying the Seven Penitential Psalms for repentance, Confession, Lent, mercy, and conversion.",
              path: "/prayers/seven-penitential-psalms",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "The Seven Penitential Psalms", path: "/prayers/seven-penitential-psalms" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "The Seven Penitential Psalms" }]} />

        <div className="mt-8 grid gap-10">
          <PenitentialPsalmsHero />
          <WhatArePenitentialPsalms />
          <WhyPrayPenitentialPsalms />
          <PenitentialPsalmCards />
          <SevenDayPsalmJourney />
          <BeforeConfessionPsalms />
          <LentenPsalmPractice />
          <RepentancePathway />
          <PenitentialPsalmPrayerCards />
          <PenitentialPsalmReflectionQuestions />
          <PenitentialPsalmExternalResource />
          <PenitentialPsalmRelatedLinks />
        </div>
      </main>
    </div>
  );
}
