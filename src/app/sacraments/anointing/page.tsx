import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SacramentDetailPageView } from "@/components/sacraments/SacramentDetailPageView";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("anointing")!));

export default function AnointingPage() {
  const sacrament = getSacramentBySlug("anointing");
  if (!sacrament) notFound();

  const extraSection = (
    <section className="grid gap-5 lg:grid-cols-3">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">When to call a priest</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Call when someone is seriously ill, facing surgery, weakened by frailty or age, or in another grave
          need of the Church&apos;s strengthening prayer.
        </p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Viaticum and last rites</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          When possible, the sick may also receive confession and Holy Communion as Viaticum. Families should
          ask the parish or chaplain what pastoral care is available.
        </p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Catholic end-of-life and burial guidance</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Families facing serious illness, death, burial, or cremation decisions can use the Catholic burial guide for gentle pastoral help alongside parish guidance.
        </p>
        <div className="mt-5">
          <a href="/formation/catholic-burial" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Catholic Burial Guidance
          </a>
        </div>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Need Anointing urgently?</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          If someone is seriously ill, in danger of death, or needs a priest after hours, use the sacramental
          emergency guide for clear next steps.
        </p>
        <div className="mt-5">
          <a href="/sacramental-emergency#anointing-of-the-sick" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Urgent Anointing Guide
          </a>
        </div>
      </article>
    </section>
  );

  return <SacramentDetailPageView sacrament={sacrament} boundaryKind="medical" ctaLabel="Open Anointing Companion" extraSection={extraSection} />;
}
