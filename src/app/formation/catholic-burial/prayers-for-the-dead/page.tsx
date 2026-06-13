import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatholicBurialRelatedLinks } from "@/components/catholic-burial/CatholicBurialRelatedLinks";
import { TrackedBurialPrayerCard } from "@/components/catholic-burial/TrackedBurialPrayerCard";
import { prayersForTheDead } from "@/data/catholicBurial";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Prayers for the Dead | Daily Oratory",
  description:
    "Catholic prayers for deceased loved ones, souls in Purgatory, cemetery visits, anniversaries, and funeral remembrance.",
  path: "/formation/catholic-burial/prayers-for-the-dead",
});

export default function PrayersForTheDeadPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Catholic Burial", href: "/formation/catholic-burial" },
            { label: "Prayers for the Dead" },
          ]}
        />

        <section className="card-parchment mt-8 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic prayer and remembrance</p>
          <h1 className="font-display mt-3 text-5xl font-semibold text-navy">Prayers for the Dead</h1>
          <p className="daily-readable mt-4 text-lg leading-8 text-muted">Catholic prayers of mercy, hope, and remembrance.</p>
        </section>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Why Catholics pray for the dead</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Catholics pray for the dead because love does not end at death. The Church entrusts the deceased to God&apos;s mercy, prays for their purification if needed, and asks that they be brought into the joy of Heaven.
            </p>
          </section>
        </div>

        <div className="mt-14 grid gap-6">
          {prayersForTheDead.map((prayer) => (
            <TrackedBurialPrayerCard key={prayer.id} title={prayer.title} prayer={prayer.prayer} prayerId={prayer.id} />
          ))}
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">How to offer Masses for the dead</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              One of the most meaningful things Catholics can do for the deceased is request Masses for their soul. Contact the parish office, ask about Mass intentions, and continue to remember the person in prayer beyond the funeral itself.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/mass-intentions" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Mass Intentions for the Dead
              </Link>
              <Link href="/formation/catholic-burial/planning-a-catholic-funeral" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Plan a Catholic Funeral
              </Link>
              <Link href="/indulgences" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Indulgences
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <CatholicBurialRelatedLinks />
        </div>
      </main>
    </div>
  );
}
