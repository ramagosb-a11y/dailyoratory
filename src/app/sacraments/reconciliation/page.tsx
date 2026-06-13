import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SacramentDetailPageView } from "@/components/sacraments/SacramentDetailPageView";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("reconciliation")!));

export default function ReconciliationPage() {
  const sacrament = getSacramentBySlug("reconciliation");
  if (!sacrament) notFound();

  const extraSection = (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Why confess to a priest?</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Christ entrusted the ministry of reconciliation to His Church. In confession, the priest serves in
          Christ&apos;s name and within the Church&apos;s sacramental life.
        </p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Returning after a long time</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          You do not need a perfect script. A priest can help you begin simply, honestly, and peacefully if
          it has been many years.
        </p>
      </article>
    </section>
  );

  return <SacramentDetailPageView sacrament={sacrament} ctaLabel="Open Reconciliation Companion" extraSection={extraSection} />;
}
