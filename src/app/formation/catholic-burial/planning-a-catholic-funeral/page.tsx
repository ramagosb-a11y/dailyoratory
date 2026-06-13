import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatholicBurialRelatedLinks } from "@/components/catholic-burial/CatholicBurialRelatedLinks";
import { CatholicFuneralPlanningTool } from "@/components/catholic-burial/CatholicFuneralPlanningTool";
import { FuneralPlanningChecklist } from "@/components/catholic-burial/FuneralPlanningChecklist";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Planning a Catholic Funeral | Daily Oratory",
  description:
    "A practical Catholic funeral planning guide for families, including parish contact, funeral rites, cremation guidance, committal, and prayers for the dead.",
  path: "/formation/catholic-burial/planning-a-catholic-funeral",
});

export default function PlanningCatholicFuneralPage() {
  const sections = [
    "Start with the parish",
    "Contact the funeral home",
    "Decide burial or cremation with Catholic guidance",
    "Plan the Vigil",
    "Plan the Funeral Mass or liturgy",
    "Choose readings with parish help",
    "Choose appropriate music",
    "Plan the Rite of Committal",
    "Arrange burial, mausoleum, or columbarium placement",
    "Request Masses for the deceased",
  ];

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Catholic Burial", href: "/formation/catholic-burial" },
            { label: "Planning a Catholic Funeral" },
          ]}
        />

        <section className="card-parchment mt-8 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic funeral preparation</p>
          <h1 className="font-display mt-3 text-5xl font-semibold text-navy">Planning a Catholic Funeral</h1>
          <p className="daily-readable mt-4 text-lg leading-8 text-muted">A practical guide for families preparing Catholic funeral arrangements.</p>
        </section>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <div className="grid gap-3">
              {sections.map((section, index) => (
                <div key={section} className="rounded-2xl border border-stone bg-ivory/80 px-4 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Step {index + 1}</p>
                  <p className="daily-card-readable mt-2 text-base leading-7 text-muted">{section}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">After the funeral</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Request Masses for the Deceased</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              A meaningful next step after the funeral is to continue requesting Masses for the deceased, especially near anniversaries, months of remembrance, and family milestones.
            </p>
            <div className="mt-6">
              <a href="/mass-intentions" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Open Mass Intentions Guide
              </a>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <FuneralPlanningChecklist />
        </div>

        <div className="mt-14">
          <CatholicFuneralPlanningTool />
        </div>

        <div className="mt-14">
          <CatholicBurialRelatedLinks />
        </div>
      </main>
    </div>
  );
}
