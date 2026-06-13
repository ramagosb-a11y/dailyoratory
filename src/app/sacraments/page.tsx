import type { Metadata } from "next";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { AskYourParishChecklist } from "@/components/sacraments/AskYourParishChecklist";
import { FamilySacramentalHomeGuide } from "@/components/sacraments/FamilySacramentalHomeGuide";
import { SacramentCard } from "@/components/sacraments/SacramentCard";
import { SacramentComparisonTable } from "@/components/sacraments/SacramentComparisonTable";
import { SacramentFAQHub } from "@/components/sacraments/SacramentFAQHub";
import { SacramentGroupCards } from "@/components/sacraments/SacramentGroupCards";
import { SacramentalJourneySelector } from "@/components/sacraments/SacramentalJourneySelector";
import { SacramentalLifeMap } from "@/components/sacraments/SacramentalLifeMap";
import { SacramentsAndChurchFathers } from "@/components/sacraments/SacramentsAndChurchFathers";
import { SacramentsAndDevotions } from "@/components/sacraments/SacramentsAndDevotions";
import { SacramentsHero } from "@/components/sacraments/SacramentsHero";
import { WhatAreSacraments } from "@/components/sacraments/WhatAreSacraments";
import { createPageMetadata } from "@/lib/metadata";
import { getSacraments } from "@/lib/sacraments";
import { buildArticleStructuredData, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "The Seven Sacraments | Daily Oratory",
  description:
    "Learn what Catholics believe about the seven sacraments, their meaning, grace, preparation, and how explorers and returning Catholics can understand them more clearly.",
  path: "/sacraments",
  keywords: [
    "Catholic sacraments",
    "seven sacraments",
    "Baptism",
    "Confirmation",
    "Eucharist",
    "Reconciliation",
    "Anointing of the Sick",
    "Matrimony",
    "Holy Orders",
    "OCIA",
  ],
});

export default function SacramentsPage() {
  const sacraments = getSacraments();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Seven Sacraments",
              description:
                "Learn what Catholics believe about the seven sacraments, their meaning, grace, preparation, and how explorers and returning Catholics can understand them more clearly.",
              path: "/sacraments",
            }),
            buildArticleStructuredData({
              headline: "The Seven Sacraments",
              description:
                "Learn what Catholics believe about the seven sacraments, their meaning, grace, preparation, and how explorers and returning Catholics can understand them more clearly.",
              path: "/sacraments",
              keywords: metadata.keywords as string[] | undefined,
            }),
          ]}
        />
        <SacramentsHero />

        <div className="mt-14 grid gap-10">
          <WhatAreSacraments />
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Grace</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Sacraments and Grace</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Each sacrament gives grace proper to its purpose. Learn how sacramental grace strengthens Christian life.
            </p>
            <div className="mt-6">
              <a href="/formation/grace/sacramental-grace" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Explore Sacramental Grace
              </a>
            </div>
          </section>
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">End-of-life formation</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Catholic Burial and Funeral Rites</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Learn how the Church honors the body, prays for the dead, guides cremation decisions, and accompanies families with hope in the resurrection.
            </p>
            <div className="mt-6">
              <a href="/formation/catholic-burial" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Catholic Burial Guidance
              </a>
            </div>
          </section>
          <SacramentGroupCards />

          <section id="explore-sacraments" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {sacraments.map((sacrament) => (
              <SacramentCard key={sacrament.id} sacrament={sacrament} />
            ))}
          </section>

          <SacramentalJourneySelector />
          <SacramentalLifeMap />
          <SacramentComparisonTable />
          <SacramentFAQHub />
          <SacramentsAndChurchFathers />
          <SacramentsAndDevotions />
          <FamilySacramentalHomeGuide />
          <AskYourParishChecklist />
        </div>
      </section>
    </div>
  );
}
