import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SeasonGuideSection } from "@/components/liturgical-living/SeasonGuideSection";
import { SeasonOAntiphonsCallout } from "@/components/liturgical-living/SeasonOAntiphonsCallout";
import { createPageMetadata } from "@/lib/metadata";
import { getSeasonGuideBySlug } from "@/lib/liturgicalSeasonsGuide";

export const metadata: Metadata = createPageMetadata({
  title: "Advent | Daily Oratory",
  description:
    "Learn how to live Advent with prayer, watchfulness, the O Antiphons, confession, Scripture, and hopeful preparation for Christmas.",
  path: "/liturgical-living/advent",
});

export default function AdventPage() {
  const guide = getSeasonGuideBySlug("advent");
  if (!guide) notFound();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Liturgical Year", href: "/liturgical-living" }, { label: "Advent" }]} />
        <div className="mt-8 grid gap-8">
          <header className="dashboard-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Liturgical season</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Advent</h1>
            <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">
              A season of longing, watchfulness, and hopeful preparation for Christ&apos;s coming.
            </p>
          </header>
          <SeasonGuideSection guide={guide} />
          <SeasonOAntiphonsCallout
            title="Final seven days of Advent"
            description="From December 17–23, pray the O Antiphons as a daily preparation for Christmas."
            buttonLabel="Begin the O Antiphons"
          />
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Hopeful watchfulness</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">The Second Coming of Christ</h2>
            <p className="daily-readable mt-5 max-w-4xl text-base leading-8 text-muted">
              Advent prepares the heart for Christ&apos;s coming in history, in grace, and in glory. Learn how
              the Church approaches the Second Coming with vigilance, peace, repentance, and hope rather than
              panic or speculation.
            </p>
            <div className="mt-6">
              <Link
                href="/formation/eschatology/second-coming"
                className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
              >
                Learn About the Second Coming
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
