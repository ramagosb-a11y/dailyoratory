import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SacramentCompanionDetail } from "@/components/sacraments/SacramentCompanionDetail";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentCompanionBySlug } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata({
  title: "First Communion Companion | Catholic Sacraments | Daily Oratory",
  description:
    "A First Communion preparation companion rooted in reverence for the Eucharist, family prayer, and parish guidance.",
  path: "/sacraments/first-communion",
});

export default function FirstCommunionPage() {
  const companion = getSacramentCompanionBySlug("first-communion");
  if (!companion) notFound();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Sacraments", href: "/sacraments" }, { label: "First Communion" }]} />
        <div className="mt-8 rounded-3xl border border-gold/40 bg-ivory/80 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">First Communion</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            First Communion preparation belongs within the wider mystery of the Eucharist. Use the companion
            below, and also spend time with the full <Link href="/sacraments/eucharist" className="font-semibold text-navy underline-offset-4 hover:underline">Eucharist page</Link>.
          </p>
        </div>
        <div className="mt-8">
          <SacramentCompanionDetail companion={companion} />
        </div>
      </section>
    </div>
  );
}
