import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { angelusPrayerText } from "@/data/prayers";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pageMetadata = createPageMetadata({
  title: "The Angelus Prayer | When Catholics Pray the Angelus | Daily Oratory",
  description:
    "Learn the Angelus prayer, when Catholics traditionally pray it, why it honors the Incarnation, and how to pray it in daily life outside the Easter season.",
  path: "/prayers/angelus",
  keywords: [
    "Angelus",
    "Angelus prayer",
    "Catholic noon prayer",
    "Marian prayer",
    "Incarnation",
    "Annunciation",
    "daily Catholic prayer",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "The Angelus Prayer",
    description:
      "Learn the Angelus prayer, when Catholics traditionally pray it, and how it honors the Incarnation throughout the day.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "The Angelus Prayer",
    description:
      "Learn the Angelus prayer, when Catholics traditionally pray it, and how it honors the Incarnation throughout the day.",
  },
};

const practiceSteps = [
  "Begin with the Sign of the Cross.",
  "Pray the versicle and response.",
  "Pray a Hail Mary after each of the three verses.",
  "Pray the concluding prayer.",
  "End with the Sign of the Cross.",
];

const simplePractice = [
  "Pray at noon if three times a day is too much at first.",
  "Set a quiet reminder instead of waiting for the perfect mood.",
  "Pray slowly enough to notice the mystery of the Word made flesh.",
  "Let one line stay with you through work, family life, or study.",
  "Families can pray a simple shared version together.",
];

const relatedLinks = [
  { label: "Regina Caeli", href: "/prayers/regina-caeli" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Holy Rosary", href: "/devotions/holy-rosary" },
  { label: "Liturgical Living", href: "/liturgical-living" },
  { label: "Easter Season", href: "/liturgical-living" },
];

export default function AngelusPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Angelus",
              description:
                "Learn the Angelus prayer, when Catholics traditionally pray it, why it honors the Incarnation, and how to pray it in daily life outside the Easter season.",
              path: "/prayers/angelus",
            }),
            buildArticleStructuredData({
              headline: "The Angelus",
              description:
                "A Catholic guide to the Angelus prayer, its daily rhythm, and its place outside the Easter season.",
              path: "/prayers/angelus",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Prayer Library", path: "/prayers" },
              { name: "The Angelus", path: "/prayers/angelus" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Prayer Library", href: "/prayers" }, { label: "The Angelus" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Marian Prayer</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">The Angelus</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A traditional Catholic prayer honoring the Incarnation, usually prayed morning, noon, and evening outside the Easter season.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            The Angelus pauses the day to remember the mystery of the Incarnation: the Word became flesh and dwelt among us. It is
            traditionally prayed three times a day, except during the Easter season, when it is replaced by the Regina Caeli.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#angelus-text" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Pray the Angelus
            </Link>
            <Link href="/prayers/regina-caeli" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Easter Prayer: Regina Caeli
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-10">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What it is</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">What Is the Angelus?</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>The Angelus is a traditional Catholic prayer centered on the Annunciation and Incarnation.</p>
              <p>It recalls Mary&apos;s yes to God and the coming of Christ into the world.</p>
              <p>Its simple structure uses short verses, three Hail Marys, and a concluding prayer.</p>
              <p>By praying it faithfully, Catholics learn to let ordinary hours return to Jesus.</p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Daily rhythm</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">When Is the Angelus Prayed?</h2>
            <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              <li>Traditionally it is prayed three times a day: morning, noon, and evening.</li>
              <li>It is often associated with bells calling Christians to pause and pray.</li>
              <li>Common times are 6:00 AM, 12:00 PM, and 6:00 PM, though families can adapt the rhythm.</li>
              <li>It is generally prayed outside the Easter season.</li>
              <li>During the Easter season, Catholics traditionally pray the Regina Caeli instead.</li>
            </ul>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pray it simply</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">How to Pray the Angelus</h2>
            <ol className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              {practiceSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <div id="angelus-text">
            <PrayerCard
              eyebrow="Prayer text"
              title="The Angelus Prayer Text"
              note="Copy only the prayer text if you want to keep it nearby for noon prayer or family prayer."
              prayer={angelusPrayerText}
              copyLabel="Copy Prayer"
              copiedLabel="Copied"
            />
          </div>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why it matters</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Why the Angelus Matters</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>It brings the mystery of Christ into ordinary time and ordinary duties.</p>
              <p>It teaches recollection in the middle of work, family life, and distraction.</p>
              <p>It honors Mary by leading us more deeply to Jesus.</p>
              <p>It joins Scripture, devotion, and daily life in one short prayer.</p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">A practical beginning</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Simple Angelus Practice</h2>
            <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              {simplePractice.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">During the Easter season</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Pray the Regina Caeli Instead</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              From Easter through Pentecost, the Angelus is traditionally replaced by the Regina Caeli, a joyful Marian prayer celebrating the Resurrection.
            </p>
            <div className="mt-6">
              <Link href="/prayers/regina-caeli" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Regina Caeli
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related links</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Continue in Prayer</h2>
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
