import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SacramentDetailPageView } from "@/components/sacraments/SacramentDetailPageView";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("matrimony")!));

export default function MatrimonyPage() {
  const sacrament = getSacramentBySlug("matrimony");
  if (!sacrament) notFound();

  const extraSection = (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Contact your parish early</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Marriage preparation, documents, timelines, and difficult canonical questions all belong with the
          parish and often need more time than couples expect.
        </p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Prayer and honest conversation</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Engaged couples should pray together and speak honestly about faith, children, forgiveness,
          finances, family life, and the shape of their future home.
        </p>
      </article>
    </section>
  );

  return <SacramentDetailPageView sacrament={sacrament} boundaryKind="canonical" ctaLabel="Open Matrimony Companion" extraSection={extraSection} />;
}
