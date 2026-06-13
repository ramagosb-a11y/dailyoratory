import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SacramentDetailPageView } from "@/components/sacraments/SacramentDetailPageView";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("holy-orders")!));

export default function HolyOrdersPage() {
  const sacrament = getSacramentBySlug("holy-orders");
  if (!sacrament) notFound();

  const extraSection = (
    <section className="grid gap-5 lg:grid-cols-2">
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Bishop, priest, and deacon</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Holy Orders is one sacrament lived in three degrees. Bishops, priests, and deacons each serve the
          Church according to their proper office and mission.
        </p>
      </article>
      <article className="card-parchment p-6">
        <h2 className="font-display text-3xl font-semibold text-navy">Begin discernment in the Church</h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Start with prayer, sacramental life, spiritual direction, a trusted priest, and the diocesan
          vocation director. Discernment matures with the Church, not apart from her.
        </p>
      </article>
    </section>
  );

  return <SacramentDetailPageView sacrament={sacrament} boundaryKind="vocation" ctaLabel="Open Holy Orders Discernment Companion" extraSection={extraSection} />;
}
