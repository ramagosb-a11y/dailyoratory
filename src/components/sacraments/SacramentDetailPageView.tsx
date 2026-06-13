import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SacramentBiblicalRoots } from "@/components/sacraments/SacramentBiblicalRoots";
import { SacramentCatechismReferences } from "@/components/sacraments/SacramentCatechismReferences";
import { SacramentCommonQuestions } from "@/components/sacraments/SacramentCommonQuestions";
import { SacramentDetailHero } from "@/components/sacraments/SacramentDetailHero";
import { SacramentGraceSection } from "@/components/sacraments/SacramentGraceSection";
import { SacramentMeaningSection } from "@/components/sacraments/SacramentMeaningSection";
import { SacramentParishReminder } from "@/components/sacraments/SacramentParishReminder";
import { SacramentPastoralBoundaryNote } from "@/components/sacraments/SacramentPastoralBoundaryNote";
import { SacramentPrayerSection } from "@/components/sacraments/SacramentPrayerSection";
import { SacramentPreparationGuide } from "@/components/sacraments/SacramentPreparationGuide";
import { SacramentRelatedTools } from "@/components/sacraments/SacramentRelatedTools";
import { SacramentTrustedResources } from "@/components/sacraments/SacramentTrustedResources";
import { getPreparationCompanionForSacrament, getRelatedSacraments } from "@/lib/sacraments";
import type { Sacrament } from "@/types/sacraments";

export function SacramentDetailPageView({
  sacrament,
  boundaryKind = "general",
  ctaLabel,
  extraSection,
}: {
  sacrament: Sacrament;
  boundaryKind?: "general" | "medical" | "canonical" | "vocation";
  ctaLabel: string;
  extraSection?: ReactNode;
}) {
  const companion = getPreparationCompanionForSacrament(sacrament.id);
  const relatedSacraments = getRelatedSacraments(sacrament.id);

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Sacraments", href: "/sacraments" }, { label: sacrament.name }]} />
        <div className="mt-8 grid gap-8">
          <SacramentDetailHero
            sacrament={sacrament}
            ctaLabel={ctaLabel}
            ctaHref={companion?.route ?? "/sacraments/prepare"}
          />
          <SacramentMeaningSection sacrament={sacrament} />
          <SacramentGraceSection sacrament={sacrament} />
          <SacramentBiblicalRoots sacrament={sacrament} />
          <SacramentCatechismReferences sacrament={sacrament} />
          <SacramentPreparationGuide sacrament={sacrament} />
          {extraSection}
          <div className="grid gap-5 lg:grid-cols-2">
            <SacramentParishReminder />
            <SacramentPastoralBoundaryNote kind={boundaryKind} />
          </div>
          <SacramentCommonQuestions sacrament={sacrament} />
          <SacramentPrayerSection sacrament={sacrament} />
          <SacramentTrustedResources sacramentId={sacrament.id} />
          <SacramentRelatedTools sacramentId={sacrament.id} />

          {relatedSacraments.length ? (
            <section className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">Related sacraments</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {relatedSacraments.map((item) => (
                  <Link key={item.id} href={`/sacraments/${item.slug}`} className="season-pill bg-ivory px-3 py-2 text-navy">
                    {item.name}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="rounded-3xl border border-stone-200 bg-white/70 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Source and copyright notes</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              This page uses original Daily Oratory summaries, Scripture references, Catechism paragraph
              references, and outbound links to official or trusted Catholic resources. It does not reproduce
              long copyrighted Church texts.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
