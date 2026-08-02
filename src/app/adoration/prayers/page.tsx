import type { Metadata } from "next";
import Link from "next/link";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationPrayerPanel } from "@/components/adoration/AdorationPrayerPanel";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Adoration Prayers",
  description: "Simple Daily Oratory prayers for entering, keeping silence, and leaving Eucharistic Adoration.",
  path: "/adoration/prayers",
});

export default function AdorationPrayersPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <AdorationNav />
        <SectionHeader
          eyebrow="Adoration prayers"
          title="Pray simply before the Eucharistic Lord."
          summary="Use these original Daily Oratory prayers before entering a stream, during silence, and before leaving."
        />
        <div className="mt-8">
          <AdorationPrayerPanel />
        </div>
        <section className="mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Guided meditation</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy">
            A Meditation Before the Blessed Sacrament
          </h2>
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            Bring your needs, relationships, gratitude, repentance, and silence before Jesus with help from
            Scripture and the Catechism.
          </p>
          <Link
            href="/adoration/meditation-before-the-blessed-sacrament"
            className="btn btn-secondary focus-ring mt-6 min-h-12 justify-center"
          >
            Open the Meditation
          </Link>
        </section>
        <div className="mt-8 text-center">
          <Link href="/adoration/live" className="btn btn-primary focus-ring">
            Enter Adoration
          </Link>
        </div>
      </main>
    </div>
  );
}
