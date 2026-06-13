import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { DailyExamenCopyrightNote } from "@/components/daily-examen/DailyExamenCopyrightNote";
import { DailyExamenFAQ } from "@/components/daily-examen/DailyExamenFAQ";
import { DailyExamenGuide } from "@/components/daily-examen/DailyExamenGuide";
import { DailyExamenHero } from "@/components/daily-examen/DailyExamenHero";
import { DailyExamenResources } from "@/components/daily-examen/DailyExamenResources";
import { ExamenJournalPrompts } from "@/components/daily-examen/ExamenJournalPrompts";
import { ExamenJournalTool } from "@/components/daily-examen/ExamenJournalTool";
import { ExamenSituations } from "@/components/daily-examen/ExamenSituations";
import { ExamenVsExamination } from "@/components/daily-examen/ExamenVsExamination";
import { FamilyExamen } from "@/components/daily-examen/FamilyExamen";
import { GuidedExamenPrayer } from "@/components/daily-examen/GuidedExamenPrayer";
import { NightPrayerConnection } from "@/components/daily-examen/NightPrayerConnection";
import { QuickExamen } from "@/components/daily-examen/QuickExamen";
import { RelatedDailyExamenTools } from "@/components/daily-examen/RelatedDailyExamenTools";
import { WhatIsDailyExamen } from "@/components/daily-examen/WhatIsDailyExamen";
import { DailyReturnPrompt } from "@/components/retention/DailyReturnPrompt";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const baseMetadata = createPageMetadata({
  title: "Daily Examen | End the Day in Prayer | Daily Oratory",
  description:
    "Pray the Daily Examen with a clear Catholic guide for gratitude, review, repentance, forgiveness, and peaceful surrender to God at the end of the day.",
  path: "/daily-examen",
  keywords: [
    "Daily Examen",
    "Catholic Examen",
    "Ignatian Examen",
    "night prayer",
    "end the day in prayer",
    "examination of conscience",
    "gratitude prayer",
    "Catholic reflection",
    "prayer before bed",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Daily Examen",
    description:
      "A peaceful Catholic guide to ending the day with gratitude, mercy, reflection, and trust in the Holy Spirit.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Daily Examen",
    description:
      "A peaceful Catholic guide to ending the day with gratitude, mercy, reflection, and trust in the Holy Spirit.",
  },
};

export default function DailyExamenPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Daily Examen",
              description:
                "Pray the Daily Examen with a clear Catholic guide for gratitude, review, repentance, forgiveness, and peaceful surrender to God at the end of the day.",
              path: "/daily-examen",
            }),
            buildArticleStructuredData({
              headline: "Daily Examen",
              description:
                "Pray the Daily Examen with a clear Catholic guide for gratitude, review, repentance, forgiveness, and peaceful surrender to God at the end of the day.",
              path: "/daily-examen",
              keywords: baseMetadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Daily Examen", path: "/daily-examen" },
            ]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Daily Examen" }]} />

        <div className="mt-8">
          <DailyExamenHero />
        </div>

        <div className="mt-14">
          <DailyExamenGuide />
        </div>

        <div className="mt-14">
          <DailyReturnPrompt
            eyebrow="Evening rhythm"
            title="End tomorrow with the same gentle review."
            summary="A short Examen works best as a steady habit: gratitude, review, mercy, and trust before sleep."
            primaryHref="/daily-examen"
            primaryLabel="Return to the Examen"
            secondaryHref="/today"
            secondaryLabel="Open Today's Guide"
          />
        </div>

        <div className="mt-14">
          <QuickExamen />
        </div>

        <div className="mt-14">
          <GuidedExamenPrayer />
        </div>

        <div className="mt-14">
          <WhatIsDailyExamen />
        </div>

        <div className="mt-14">
          <ExamenVsExamination />
        </div>

        <div className="mt-14">
          <ExamenSituations />
        </div>

        <div className="mt-14">
          <FamilyExamen />
        </div>

        <div className="mt-14">
          <ExamenJournalPrompts />
        </div>

        <div className="mt-14">
          <ExamenJournalTool />
        </div>

        <div className="mt-14">
          <NightPrayerConnection />
        </div>

        <div className="mt-14">
          <DailyExamenFAQ />
        </div>

        <div className="mt-14">
          <RelatedDailyExamenTools />
        </div>

        <div className="mt-14">
          <DailyExamenResources />
        </div>

        <div className="mt-14">
          <DailyExamenCopyrightNote />
        </div>
      </main>
    </div>
  );
}
