import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { createPageMetadata } from "@/lib/metadata";
import { DetachmentBuilder } from "@/components/indulgences/detachment/DetachmentBuilder";
import { DetachmentComparisonCards } from "@/components/indulgences/detachment/DetachmentComparisonCards";
import { DetachmentExternalResource } from "@/components/indulgences/detachment/DetachmentExternalResource";
import { DetachmentFAQ } from "@/components/indulgences/detachment/DetachmentFAQ";
import { DetachmentHero } from "@/components/indulgences/detachment/DetachmentHero";
import { DetachmentIndulgenceConnection } from "@/components/indulgences/detachment/DetachmentIndulgenceConnection";
import { DetachmentPracticeSteps } from "@/components/indulgences/detachment/DetachmentPracticeSteps";
import { DetachmentPrayerCards } from "@/components/indulgences/detachment/DetachmentPrayerCards";
import { DetachmentReflectionQuestions } from "@/components/indulgences/detachment/DetachmentReflectionQuestions";
import { DetachmentRelatedLinks } from "@/components/indulgences/detachment/DetachmentRelatedLinks";
import { DetachmentSacramentsSection } from "@/components/indulgences/detachment/DetachmentSacramentsSection";
import { PlenaryIndulgenceChecklist } from "@/components/indulgences/detachment/PlenaryIndulgenceChecklist";
import { SevenDayDetachmentPractice } from "@/components/indulgences/detachment/SevenDayDetachmentPractice";
import { WhatIsDetachment } from "@/components/indulgences/detachment/WhatIsDetachment";
import Link from "next/link";

const pageMetadata = createPageMetadata({
  title: "Complete Detachment from Sin | Plenary Indulgence Guide | Daily Oratory",
  description:
    "Learn what complete detachment from sin means, why it matters for plenary indulgences, and how to ask God for this grace through Confession, Eucharist, prayer, virtue, and conversion.",
  path: "/indulgences/detachment-from-sin",
  keywords: [
    "detachment from sin",
    "complete detachment from sin",
    "plenary indulgence condition",
    "Catholic indulgences",
    "venial sin",
    "conversion",
    "Confession",
    "Eucharist",
    "spiritual freedom",
    "resisting temptation",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Complete Detachment from Sin",
    description:
      "A gentle Catholic guide to detachment from sin, plenary indulgences, prayer, conversion, Confession, Eucharist, and spiritual freedom.",
  },
};

export default function DetachmentFromSinPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Complete Detachment from Sin",
              description:
                "Learn what complete detachment from sin means, why it matters for plenary indulgences, and how to ask God for this grace through Confession, Eucharist, prayer, virtue, and conversion.",
              path: "/indulgences/detachment-from-sin",
            }),
            buildArticleStructuredData({
              headline: "Complete Detachment from Sin",
              description:
                "A gentle Catholic guide to detachment from sin, plenary indulgences, prayer, conversion, Confession, Eucharist, and spiritual freedom.",
              path: "/indulgences/detachment-from-sin",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Indulgences", path: "/indulgences" },
              { name: "Complete Detachment from Sin", path: "/indulgences/detachment-from-sin" },
            ]),
          ]}
        />
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Indulgences", href: "/indulgences" },
            { label: "Complete Detachment from Sin" },
          ]}
        />

        <div className="mt-8 grid gap-10">
          <DetachmentHero />
          <WhatIsDetachment />
          <DetachmentIndulgenceConnection />
          <DetachmentComparisonCards />
          <DetachmentSacramentsSection />
          <DetachmentPracticeSteps />
          <DetachmentReflectionQuestions />
          <DetachmentBuilder />
          <SevenDayDetachmentPractice />
          <DetachmentPrayerCards />
          <PlenaryIndulgenceChecklist />
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Repentance and mercy</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Pray the Seven Penitential Psalms</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Pray the Seven Penitential Psalms for repentance and detachment, especially before Confession,
              during Lent, or whenever you are asking God to free your heart from sin.
            </p>
            <div className="mt-6">
              <Link href="/prayers/seven-penitential-psalms" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Begin the Penitential Psalms
              </Link>
            </div>
          </section>
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayers and devotions associated with indulgences</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Let prayer train the heart for detachment</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Detachment from sin is one of the usual conditions for a plenary indulgence. The Church also encourages many prayers and devout works
              that draw the soul toward repentance, worship, charity, and love for God.
            </p>
            <div className="mt-6">
              <Link href="/indulgences/prayers-and-devotions" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Explore Prayers and Devotions with Indulgences
              </Link>
            </div>
          </section>
          <DetachmentFAQ />
          <DetachmentExternalResource />
          <DetachmentRelatedLinks />
        </div>
      </main>
    </div>
  );
}
