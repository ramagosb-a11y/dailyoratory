import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SacramentDetailPageView } from "@/components/sacraments/SacramentDetailPageView";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("baptism")!));

export default function BaptismPage() {
  const sacrament = getSacramentBySlug("baptism");
  if (!sacrament) notFound();

  const extraSection = (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Infant Baptism and family faith</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          The Church baptizes infants because Baptism is grace and new life, not a reward for maturity.
          Parents and godparents promise to help the child grow in Catholic faith, worship, and discipleship.
        </p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Adult Baptism and OCIA</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Adults preparing for Baptism usually do so through parish OCIA, where catechesis, prayer,
          discernment, and initiation unfold with the Church.
        </p>
      </article>
    </section>
  );

  return <SacramentDetailPageView sacrament={sacrament} ctaLabel="Open Baptism Preparation Companion" extraSection={extraSection} />;
}
