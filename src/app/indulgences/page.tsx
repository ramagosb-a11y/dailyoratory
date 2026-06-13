import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BeforeIndulgencedWorkPanel } from "@/components/indulgences/BeforeIndulgencedWorkPanel";
import { CommonIndulgencedWorks } from "@/components/indulgences/CommonIndulgencedWorks";
import { DetachmentComparisonCards } from "@/components/indulgences/DetachmentComparisonCards";
import { DetachmentFromSinGuide } from "@/components/indulgences/DetachmentFromSinGuide";
import { DetachmentPracticeSteps } from "@/components/indulgences/DetachmentPracticeSteps";
import { DetachmentPrayerCards } from "@/components/indulgences/DetachmentPrayerCards";
import { DetachmentReflectionQuestions } from "@/components/indulgences/DetachmentReflectionQuestions";
import { EverydayIndulgencePrayerRoutine } from "@/components/indulgences/EverydayIndulgencePrayerRoutine";
import { GainIndulgenceTodayChecklist } from "@/components/indulgences/GainIndulgenceTodayChecklist";
import { HealingNotEarningSection } from "@/components/indulgences/HealingNotEarningSection";
import { HolySoulsIndulgenceSection } from "@/components/indulgences/HolySoulsIndulgenceSection";
import { IndulgenceBuilder } from "@/components/indulgences/IndulgenceBuilder";
import { IndulgenceFAQ } from "@/components/indulgences/IndulgenceFAQ";
import { IndulgenceMorningRoutine } from "@/components/indulgences/IndulgenceMorningRoutine";
import { IndulgenceTypeCards } from "@/components/indulgences/IndulgenceTypeCards";
import { IndulgencesHero } from "@/components/indulgences/IndulgencesHero";
import { IndulgencesPageNav } from "@/components/indulgences/IndulgencesPageNav";
import { JubileeIndulgenceGuide } from "@/components/indulgences/JubileeIndulgenceGuide";
import { OfferIndulgenceForCards } from "@/components/indulgences/OfferIndulgenceForCards";
import { OfficialSourcesList } from "@/components/indulgences/OfficialSourcesList";
import { PastoralNote } from "@/components/indulgences/PastoralNote";
import { PlenaryConditionsChecklist } from "@/components/indulgences/PlenaryConditionsChecklist";
import { PlenaryIndulgencePreparationChecklist } from "@/components/indulgences/PlenaryIndulgencePreparationChecklist";
import { PlenaryOrPartialExplainer } from "@/components/indulgences/PlenaryOrPartialExplainer";
import { RelatedDailyOratoryTools } from "@/components/indulgences/RelatedDailyOratoryTools";
import { SpiritualPracticeCards } from "@/components/indulgences/SpiritualPracticeCards";
import { TodaysIndulgenceOpportunity } from "@/components/indulgences/TodaysIndulgenceOpportunity";
import { WhatIsIndulgenceSection } from "@/components/indulgences/WhatIsIndulgenceSection";
import { YearOfSaintFrancisIndulgenceGuide } from "@/components/indulgences/YearOfSaintFrancisIndulgenceGuide";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

const pageMetadata = createPageMetadata({
  title: "Catholic Indulgences Guide",
  description:
    "Learn what Catholics mean by indulgences, how this teaching relates to mercy and repentance, and how to approach the topic slowly and faithfully if it is new to you.",
  path: "/indulgences",
  keywords: [
    "Catholic indulgences",
    "plenary indulgence",
    "partial indulgence",
    "Jubilee 2025 indulgence",
    "Year of Saint Francis 2026 indulgence",
    "Saint Francis indulgence 2026",
    "detachment from sin",
    "Holy Father's intentions",
    "souls in purgatory",
    "Manual of Indulgences",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  title: "Catholic Indulgences Guide | Daily Oratory",
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Catholic Indulgences Guide",
    description:
      "A practical Catholic guide to indulgences, Jubilee 2025, the 2026 Year of Saint Francis, detachment from sin, prayers for the Holy Father's intentions, and daily works of mercy.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "Catholic Indulgences Guide",
    description:
      "A practical Catholic guide to indulgences, Jubilee 2025, the 2026 Year of Saint Francis, detachment from sin, prayers for the Holy Father's intentions, and daily works of mercy.",
  },
};

export default function IndulgencesPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Indulgences" }]} />

        <div className="mt-8">
          <IndulgencesHero />
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-8">
          <aside>
            <IndulgencesPageNav />
          </aside>
          <div className="grid gap-8 sm:gap-10">
            <WhatIsIndulgenceSection />
            <HealingNotEarningSection />
            <IndulgenceTypeCards />
            <GainIndulgenceTodayChecklist />
            <PlenaryConditionsChecklist />
            <section className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Usual conditions</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Complete Detachment from Sin</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                One of the usual conditions for a plenary indulgence is interior detachment from all sin, even
                venial sin. Learn what this means, what it does not mean, and how to ask for this grace with
                peace and trust.
              </p>
              <div className="mt-6">
                <Link
                  href="/indulgences/detachment-from-sin"
                  className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Learn About Detachment
                </Link>
              </div>
            </section>
            <section className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer and devotion</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Prayers and Devotions with Indulgences</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Explore traditional Catholic prayers and devout works associated with indulgences, including the Rosary,
                Stations of the Cross, Eucharistic Adoration, Scripture reading, and prayers for the dead.
              </p>
              <div className="mt-6">
                <Link
                  href="/indulgences/prayers-and-devotions"
                  className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Explore Prayers and Devotions
                </Link>
              </div>
            </section>
            <section className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer for the departed</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Purgatory and Praying for the Dead</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Indulgences are closely tied to charity for the faithful departed. Learn how Catholic teaching on
                Purgatory, purification, prayer, and mercy gives deeper meaning to indulgenced works.
              </p>
              <div className="mt-6">
                <Link
                  href="/formation/eschatology/purgatory"
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Learn About Purgatory
                </Link>
              </div>
            </section>
            <section className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related prayer</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Prayers for the Dead and Catholic Burial</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Learn how Catholic burial, prayer for the dead, and reverent interment express hope in mercy, purification, and resurrection.
              </p>
              <div className="mt-6">
                <Link
                  href="/formation/catholic-burial/prayers-for-the-dead"
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Pray for the Dead
                </Link>
              </div>
            </section>
            <DetachmentFromSinGuide />
            <DetachmentComparisonCards />
            <DetachmentPracticeSteps />
            <DetachmentReflectionQuestions />
            <DetachmentPrayerCards />
            <PlenaryIndulgencePreparationChecklist />
            <EverydayIndulgencePrayerRoutine />
            <IndulgenceMorningRoutine />
            <BeforeIndulgencedWorkPanel />
            <TodaysIndulgenceOpportunity />
            <OfferIndulgenceForCards />
            <HolySoulsIndulgenceSection />
            <IndulgenceBuilder />
            <PlenaryOrPartialExplainer />
            <CommonIndulgencedWorks />
            <JubileeIndulgenceGuide />
            <YearOfSaintFrancisIndulgenceGuide />
            <SpiritualPracticeCards />
            <IndulgenceFAQ />
            <OfficialSourcesList />
            <RelatedDailyOratoryTools />
            <PastoralNote />
          </div>
        </div>
      </main>
    </div>
  );
}
