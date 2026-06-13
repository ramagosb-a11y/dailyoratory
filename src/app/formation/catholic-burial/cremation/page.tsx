import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CatholicBurialRelatedLinks } from "@/components/catholic-burial/CatholicBurialRelatedLinks";
import { CatholicCremationTeaching } from "@/components/catholic-burial/CatholicCremationTeaching";
import { PracticesToAvoid } from "@/components/catholic-burial/PracticesToAvoid";
import { TrackedBurialPrayerCard } from "@/components/catholic-burial/TrackedBurialPrayerCard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Cremation Guide | Daily Oratory",
  description:
    "Learn Catholic teaching on cremation, ashes, burial, columbariums, scattering, keeping ashes at home, and reverent care for cremated remains.",
  path: "/formation/catholic-burial/cremation",
});

const prayer = "Lord Jesus, teach us to honor the bodies of the faithful departed with reverence and hope. Guide our family in making choices that reflect faith in the resurrection and trust in Your mercy. Amen.";

export default function CatholicCremationPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Formation", href: "/formation" },
            { label: "Catholic Burial", href: "/formation/catholic-burial" },
            { label: "Cremation" },
          ]}
        />

        <section className="card-parchment mt-8 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic burial guidance</p>
          <h1 className="font-display mt-3 text-5xl font-semibold text-navy">Catholic Cremation Guide</h1>
          <p className="daily-readable mt-4 text-lg leading-8 text-muted">What Catholics should know about cremation, ashes, and reverent burial.</p>
        </section>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Is cremation allowed for Catholics?</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Yes. The Church permits cremation when it is not chosen for reasons contrary to Christian faith. The decision should still reflect reverence for the body and hope in the resurrection.
            </p>
          </section>
        </div>

        <div className="mt-14">
          <section className="grid gap-5 lg:grid-cols-2">
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">Why the Church still prefers burial</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Burial continues to express in a particularly visible way that the body is not discarded. It rests in hope, awaiting the resurrection of the dead in Christ.
              </p>
            </article>
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">How cremated remains should be treated</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Cremated remains should be handled with the same reverence shown to the body itself: carefully, prayerfully, and with a plan for sacred interment.
              </p>
            </article>
          </section>
        </div>

        <div className="mt-14">
          <CatholicCremationTeaching />
        </div>

        <div className="mt-14">
          <PracticesToAvoid />
        </div>

        <div className="mt-14">
          <section className="grid gap-5 lg:grid-cols-2">
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">Cremation before or after the Funeral Mass</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                When possible, the Church prefers that the body be present for the Funeral Mass and cremation take place afterward. If cremation has already happened, the cremated remains may still be present for the rites according to diocesan norms.
              </p>
            </article>
            <article className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-4xl font-semibold text-navy">What to do if ashes are already at home</h2>
              <p className="daily-readable mt-5 text-base leading-8 text-muted">
                Contact a parish priest or Catholic cemetery for help arranging reverent burial or placement in a columbarium. This should be approached with mercy, pastoral peace, and a desire to do the next faithful thing.
              </p>
            </article>
          </section>
        </div>

        <div className="mt-14">
          <section className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Questions to ask your parish or funeral director</h2>
            <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
              <li>Can the body be present for the Funeral Mass before cremation?</li>
              <li>What diocesan or parish norms apply if cremation happens before the funeral rites?</li>
              <li>What cemetery or columbarium options are available for reverent interment?</li>
              <li>What vessel or urn is suitable for Catholic funeral rites and interment?</li>
              <li>What timelines should the family follow so burial and liturgy can be arranged well?</li>
            </ul>
            <div className="mt-6">
              <Link href="/formation/catholic-burial/planning-a-catholic-funeral" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Plan a Catholic Funeral
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-14">
          <TrackedBurialPrayerCard title="Prayer for Reverent Burial" prayer={prayer} prayerId="reverent-burial" />
        </div>

        <div className="mt-14">
          <CatholicBurialRelatedLinks />
        </div>
      </main>
    </div>
  );
}
