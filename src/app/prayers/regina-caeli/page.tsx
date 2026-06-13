import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { reginaCaeliPrayerText } from "@/data/prayers";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pageMetadata = createPageMetadata({
  title: "Regina Caeli Prayer | Easter Marian Prayer | Daily Oratory",
  description:
    "Learn the Regina Caeli prayer, when Catholics pray it during the Easter season, and how it replaces the Angelus from Easter through Pentecost.",
  path: "/prayers/regina-caeli",
  keywords: [
    "Regina Caeli",
    "Regina Coeli",
    "Queen of Heaven prayer",
    "Easter Marian prayer",
    "Angelus during Easter",
    "Catholic Easter prayer",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Regina Caeli Prayer",
    description:
      "Learn the Regina Caeli prayer, when Catholics pray it during Easter, and how it replaces the Angelus through Pentecost.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "Regina Caeli Prayer",
    description:
      "Learn the Regina Caeli prayer, when Catholics pray it during Easter, and how it replaces the Angelus through Pentecost.",
  },
};

const practiceSteps = [
  "Begin with the Sign of the Cross.",
  "Pray the versicles and responses.",
  "Pray the concluding prayer.",
  "End with the Sign of the Cross.",
];

const simplePractice = [
  "Pray it at noon during Easter if you want one simple seasonal habit.",
  "Add it after morning prayer or before dinner as a family.",
  "Use it in place of the Angelus until Pentecost.",
  "Pray it with joy, even if Easter feels quieter than Christmas.",
];

const relatedLinks = [
  { label: "The Angelus", href: "/prayers/angelus" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Holy Rosary", href: "/devotions/holy-rosary" },
  { label: "Easter Season", href: "/liturgical-living" },
  { label: "Liturgical Living", href: "/liturgical-living" },
];

export default function ReginaCaeliPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Regina Caeli",
              description:
                "Learn the Regina Caeli prayer, when Catholics pray it during the Easter season, and how it replaces the Angelus from Easter through Pentecost.",
              path: "/prayers/regina-caeli",
            }),
            buildArticleStructuredData({
              headline: "Regina Caeli",
              description:
                "A Catholic guide to the Regina Caeli, the Easter Marian prayer prayed in place of the Angelus.",
              path: "/prayers/regina-caeli",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Prayer Library", path: "/prayers" },
              { name: "Regina Caeli", path: "/prayers/regina-caeli" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Prayer Library", href: "/prayers" }, { label: "Regina Caeli" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Easter Marian Prayer</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Regina Caeli</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A joyful Marian prayer traditionally prayed during the Easter season in place of the Angelus.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            The Regina Caeli, meaning “Queen of Heaven,” is the Church&apos;s Easter song to Mary. It rejoices that the Son she bore has risen,
            and it is traditionally prayed from Easter through Pentecost instead of the Angelus.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#regina-caeli-text" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Pray the Regina Caeli
            </Link>
            <Link href="/prayers/angelus" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Outside Easter: The Angelus
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-10">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What it is</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">What Is the Regina Caeli?</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>Regina Caeli means “Queen of Heaven.”</p>
              <p>It is a Marian antiphon of the Easter season.</p>
              <p>It rejoices in the Resurrection of Jesus and the joy given to the world through Him.</p>
              <p>It is traditionally prayed in place of the Angelus during Eastertide.</p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Seasonal rhythm</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">When Is the Regina Caeli Prayed?</h2>
            <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              <li>It is traditionally prayed during the Easter season.</li>
              <li>It replaces the Angelus from Easter Sunday through Pentecost.</li>
              <li>It can be prayed morning, noon, and evening, following the same rhythm as the Angelus.</li>
              <li>Beginners and families can also pray it once a day with devotion.</li>
            </ul>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pray it simply</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">How to Pray the Regina Caeli</h2>
            <ol className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              {practiceSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <div id="regina-caeli-text">
            <PrayerCard
              eyebrow="Prayer text"
              title="Regina Caeli Prayer Text"
              note="Copy only the prayer text if you want to keep it handy through Easter and Pentecost."
              prayer={reginaCaeliPrayerText}
              copyLabel="Copy Prayer"
              copiedLabel="Copied"
            />
          </div>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why it matters</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Why the Regina Caeli Matters</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>It teaches Easter joy instead of leaving Easter as a single feast day.</p>
              <p>It honors Mary in the light of the Resurrection of her Son.</p>
              <p>It helps daily prayer stay centered on the living Christ.</p>
              <p>It keeps the Easter season lived and remembered in ordinary hours.</p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">A practical beginning</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Simple Regina Caeli Practice</h2>
            <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              {simplePractice.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Outside the Easter season</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Return to the Angelus</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Outside the Easter season, Catholics traditionally return to the Angelus, which honors the Annunciation and Incarnation of Christ.
            </p>
            <div className="mt-6">
              <Link href="/prayers/angelus" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                The Angelus
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related links</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Continue in Easter Prayer</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded-3xl border border-stone bg-ivory/80 px-5 py-4 text-base font-semibold text-navy transition hover:border-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
