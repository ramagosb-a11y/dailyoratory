import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatholicBurialRelatedLinks } from "@/components/catholic-burial/CatholicBurialRelatedLinks";
import { CatholicFuneralRitesOverview } from "@/components/catholic-burial/CatholicFuneralRitesOverview";
import { CremationAndFuneralMass } from "@/components/catholic-burial/CremationAndFuneralMass";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Funeral Rites | Daily Oratory",
  description:
    "Understand the Vigil, Funeral Mass, Rite of Committal, Scripture, music, and Catholic funeral planning.",
  path: "/formation/catholic-burial/funeral-rites",
});

export default function CatholicFuneralRitesPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Catholic Burial", href: "/formation/catholic-burial" },
            { label: "Funeral Rites" },
          ]}
        />

        <section className="card-parchment mt-8 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic funeral formation</p>
          <h1 className="font-display mt-3 text-5xl font-semibold text-navy">Catholic Funeral Rites</h1>
          <p className="daily-readable mt-4 text-lg leading-8 text-muted">The Vigil, Funeral Mass, and Rite of Committal.</p>
        </section>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Why Catholic funeral rites matter</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Catholic funeral rites gather grief, prayer, memory, and hope into the Church&apos;s worship. They honor the body, commend the deceased to God, and strengthen the living with the promise of Christ.
            </p>
          </section>
        </div>

        <div className="mt-14">
          <CatholicFuneralRitesOverview />
        </div>

        <div className="mt-14">
          <section className="grid gap-5 lg:grid-cols-2">
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">Funeral liturgy outside Mass</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                In some situations, a funeral liturgy outside Mass may be used according to pastoral need and local norms. Families should speak with the parish about what is appropriate.
              </p>
            </article>
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">Scripture, music, and parish guidance</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Readings and music should help the Church pray with hope in Christ. The parish can guide families toward choices that fit the liturgy and the needs of the community.
              </p>
            </article>
          </section>
        </div>

        <div className="mt-14">
          <CremationAndFuneralMass />
        </div>

        <div className="mt-14">
          <section className="grid gap-5 lg:grid-cols-2">
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">How family and friends can participate</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Loved ones can join in prayer, support the liturgy, help with planning, greet mourners, and continue praying for the soul after the rites are complete.
              </p>
            </article>
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">Funeral planning questions</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Ask the parish about the funeral liturgy, readings, music, cremation norms, committal, and any local cemetery or diocesan requirements before finalizing arrangements.
              </p>
              <div className="mt-6">
                <Link href="/formation/catholic-burial/planning-a-catholic-funeral" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                  Open Planning Guide
                </Link>
              </div>
            </article>
          </section>
        </div>

        <div className="mt-14">
          <CatholicBurialRelatedLinks />
        </div>
      </main>
    </div>
  );
}

