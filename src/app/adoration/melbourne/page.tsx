import type { Metadata } from "next";
import Link from "next/link";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { getAdorationLocationLabel, getAdorationStreamBySlug } from "@/lib/adoration";

const melbourneStream = getAdorationStreamBySlug("eucharistic-adoration-stream-qz8ye61boxm");

const whyPeopleCome = [
  "to remain quietly with Jesus in the Blessed Sacrament",
  "to pray for the Church, family, priests, and the world",
  "to begin or keep a simple Holy Hour",
  "to find a perpetual Adoration stream when they cannot visit a chapel in person",
] as const;

const startHere = [
  "Begin with the Sign of the Cross.",
  "Offer one short prayer of faith in the Real Presence.",
  "Remain quiet for a few minutes before adding many words.",
  "Use Scripture, a Rosary decade, or one simple intention if it helps you focus.",
] as const;

const relatedLinks = [
  { label: "Open the Melbourne Stream", href: "/adoration/eucharistic-adoration-stream-qz8ye61boxm" },
  { label: "Live Adoration Streams", href: "/adoration/live" },
  { label: "How to Make a Holy Hour", href: "/adoration/holy-hour" },
  { label: "Adoration Prayers", href: "/adoration/prayers" },
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "The Holy Mass", href: "/mass" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Perpetual Adoration in Melbourne | Live Eucharistic Adoration | Daily Oratory",
  description:
    "A Catholic landing page for perpetual Eucharistic Adoration in Melbourne, featuring the St Benedict's live stream, practical prayer help, and links to a Holy Hour guide.",
  path: "/adoration/melbourne",
  keywords: [
    "perpetual adoration Melbourne",
    "eucharistic adoration Melbourne",
    "adoration Melbourne",
    "live adoration Melbourne",
    "St Benedict's Melbourne adoration",
  ],
});

export default function MelbourneAdorationPage() {
  const description =
    "A Catholic landing page for perpetual Eucharistic Adoration in Melbourne, featuring the St Benedict's live stream, practical prayer help, and links to a Holy Hour guide.";

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Perpetual Adoration in Melbourne",
              description,
              path: "/adoration/melbourne",
            }),
            buildBreadcrumbList([
              { name: "Adoration", path: "/adoration" },
              { name: "Melbourne", path: "/adoration/melbourne" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Adoration", href: "/adoration" }, { label: "Melbourne" }]} />
        <AdorationNav />

        <header className="mt-8 card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Eucharistic Adoration</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Perpetual Adoration in Melbourne
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-lg leading-8 text-navy">
            A simple Catholic starting point for those looking for perpetual Eucharistic Adoration in Melbourne.
          </p>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            If you are looking for a live Adoration stream from Melbourne, Daily Oratory currently highlights a
            verified perpetual Adoration stream from St Benedict&apos;s. Use this page to enter prayer simply, learn
            what perpetual Adoration is, and keep the experience connected to Mass, reverence, and the sacramental life.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/adoration/eucharistic-adoration-stream-qz8ye61boxm" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Open the Melbourne Stream
            </Link>
            <Link href="/adoration/holy-hour" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              How to Make a Holy Hour
            </Link>
          </div>
        </header>

        {melbourneStream ? (
          <section className="mt-10 card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">Featured stream</h2>
            <h3 className="font-display mt-4 text-3xl font-semibold text-navy">{melbourneStream.title}</h3>
            <p className="mt-3 text-base leading-8 text-muted">{melbourneStream.description}</p>
            <p className="mt-3 text-sm font-semibold text-navy">{getAdorationLocationLabel(melbourneStream)}</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              This stream is treated as a prayer aid. If you are able to visit a chapel in person, local parish or diocesan
              guidance remains the best help for nearby Adoration opportunities.
            </p>
          </section>
        ) : null}

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-navy">What perpetual Adoration means</h2>
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Perpetual Adoration means that the Blessed Sacrament is adored continually, often day and night, so that
              people can remain with Christ in prayer at any hour. A live stream can help those who are homebound,
              traveling, or unable to reach a chapel.
            </p>
            <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
              {whyPeopleCome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-navy">How to begin simply</h2>
            <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
              {startHere.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="daily-card-readable mt-5 text-base leading-8 text-muted">
              If you only have a short time, begin anyway. A few faithful minutes in quiet prayer can still become a real
              offering to the Lord.
            </p>
          </article>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Keep it connected to Catholic life</h2>
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            Eucharistic Adoration flows from the Mass and leads back to the Mass. A live stream should deepen reverence,
            silence, thanksgiving, repentance, and love for Christ truly present, not become background content.
          </p>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Related guides</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card dashboard-card focus-ring flex min-h-24 items-center p-5 transition hover:-translate-y-0.5 hover:border-gold">
                <span className="font-display text-2xl font-semibold leading-tight text-navy">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
