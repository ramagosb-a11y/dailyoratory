import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AlreadyHaveAshesPastoralNote } from "@/components/catholic-burial/AlreadyHaveAshesPastoralNote";
import { BurialDispositionCards } from "@/components/catholic-burial/BurialDispositionCards";
import { CatholicBurialHero } from "@/components/catholic-burial/CatholicBurialHero";
import { CatholicBurialReferences } from "@/components/catholic-burial/CatholicBurialReferences";
import { CatholicBurialRelatedLinks } from "@/components/catholic-burial/CatholicBurialRelatedLinks";
import { CatholicCremationTeaching } from "@/components/catholic-burial/CatholicCremationTeaching";
import { CatholicFuneralRitesOverview } from "@/components/catholic-burial/CatholicFuneralRitesOverview";
import { CremationAndFuneralMass } from "@/components/catholic-burial/CremationAndFuneralMass";
import { FuneralPlanningChecklist } from "@/components/catholic-burial/FuneralPlanningChecklist";
import { MeaningOfBurial } from "@/components/catholic-burial/MeaningOfBurial";
import { PrayerForDeceasedLovedOne } from "@/components/catholic-burial/PrayerForDeceasedLovedOne";
import { PracticesToAvoid } from "@/components/catholic-burial/PracticesToAvoid";
import { PrayingForTheDead } from "@/components/catholic-burial/PrayingForTheDead";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Burial, Cremation, and Funeral Rites | Daily Oratory",
  description:
    "A Catholic guide to burial, cremation, funeral rites, prayers for the dead, and planning a Catholic funeral with hope in the resurrection.",
  path: "/formation/catholic-burial",
  keywords: [
    "Catholic burial",
    "Catholic cremation",
    "Catholic funeral rites",
    "cremated remains",
    "ashes",
    "Catholic funeral planning",
    "prayers for the dead",
    "resurrection of the body",
    "Catholic cemetery",
  ],
});

export default function CatholicBurialPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Catholic Burial" },
          ]}
        />

        <div className="mt-8">
          <CatholicBurialHero />
        </div>

        <div className="mt-14">
          <MeaningOfBurial />
        </div>

        <div className="mt-14">
          <section>
            <h2 className="font-display text-4xl font-semibold text-navy">Burial, Cremation, and Other Forms of Disposition</h2>
            <div className="mt-6">
              <BurialDispositionCards />
            </div>
          </section>
        </div>

        <div className="mt-14">
          <CatholicCremationTeaching />
        </div>

        <div className="mt-14">
          <PracticesToAvoid />
        </div>

        <div className="mt-14">
          <AlreadyHaveAshesPastoralNote />
        </div>

        <div className="mt-14">
          <CatholicFuneralRitesOverview />
        </div>

        <div className="mt-14">
          <CremationAndFuneralMass />
        </div>

        <div className="mt-14">
          <PrayingForTheDead />
        </div>

        <div className="mt-14">
          <PrayerForDeceasedLovedOne />
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Urgent help</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A Loved One Is Dying</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              If serious illness or danger of death is present, contact a priest early, ask about Anointing and Confession,
              and use the urgent sacramental guide for practical next steps.
            </p>
            <div className="mt-6">
              <a href="/sacramental-emergency" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Sacramental Emergency Guide
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <FuneralPlanningChecklist />
        </div>

        <div className="mt-14">
          <CatholicBurialReferences />
        </div>

        <div className="mt-14">
          <CatholicBurialRelatedLinks />
        </div>
      </main>
    </div>
  );
}
