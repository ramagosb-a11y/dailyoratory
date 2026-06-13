import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SeasonGuideSection } from "@/components/liturgical-living/SeasonGuideSection";
import { SeasonOAntiphonsCallout } from "@/components/liturgical-living/SeasonOAntiphonsCallout";
import { createPageMetadata } from "@/lib/metadata";
import { getSeasonGuideBySlug } from "@/lib/liturgicalSeasonsGuide";

export const metadata: Metadata = createPageMetadata({
  title: "Christmas Season | Daily Oratory",
  description:
    "Live the Christmas season with joy, prayer, wonder, and a heart prepared through Advent longing and the O Antiphons.",
  path: "/liturgical-living/christmas",
});

export default function ChristmasPage() {
  const guide = getSeasonGuideBySlug("christmas");
  if (!guide) notFound();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Liturgical Year", href: "/liturgical-living" }, { label: "Christmas" }]} />
        <div className="mt-8 grid gap-8">
          <header className="dashboard-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Liturgical season</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Christmas Season</h1>
            <p className="daily-readable mt-5 max-w-4xl text-xl leading-9 text-muted">
              Receive the mystery of the Word made flesh with joy, wonder, gratitude, and peace.
            </p>
          </header>
          <SeasonOAntiphonsCallout
            title="From Advent longing to Christmas joy"
            description="The O Antiphons prepare the heart in the final days before Christmas by calling upon Christ as Wisdom, Lord, Root of Jesse, Key of David, Radiant Dawn, King of Nations, and Emmanuel."
            buttonLabel="Pray the O Antiphons"
          />
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Epiphany</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Epiphany: Christ Revealed to the Nations</h2>
            <p className="daily-readable-muted mt-4 max-w-3xl text-base leading-8 text-muted">
              After Christmas, Epiphany invites us to follow the Magi, worship Christ the King, bless our homes, and
              carry His light into the world.
            </p>
            <div className="mt-6">
              <Link
                href="/liturgical-living/christmas/epiphany"
                className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
              >
                Explore Epiphany
              </Link>
            </div>
          </section>
          <SeasonGuideSection guide={guide} />
        </div>
      </main>
    </div>
  );
}
