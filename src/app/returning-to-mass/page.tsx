import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const beforeYouGo = [
  "Look up a Sunday Mass time.",
  "Pray one honest sentence asking for peace.",
  "Arrive a little early so you do not feel rushed.",
  "If you have been away a long time, consider Confession soon.",
] as const;

const whatToExpect = [
  "You do not need to remember every response.",
  "You can sit quietly and follow along at your own pace.",
  "If you are unsure about receiving Communion, remain seated or cross your arms and speak with a priest afterward.",
  "The important thing is to begin again with humility and trust.",
] as const;

const simplePlan = [
  "Pray before you leave home.",
  "Attend one Sunday Mass.",
  "Open the Confession guide if you need to return to the sacrament.",
  "Come back the following Sunday and keep going.",
] as const;

const relatedLinks = [
  { label: "The Holy Mass", href: "/mass" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Returning to the Catholic Church", href: "/returning" },
  { label: "What Should I Do?", href: "/what-should-i-do" },
  { label: "Catholic Life Roadmap", href: "/catholic-life" },
  { label: "Prayer Library", href: "/prayers" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Returning to Mass | A Gentle Catholic Guide | Daily Oratory",
  description:
    "A gentle Catholic guide for returning to Mass after time away, with practical steps, what to expect, Communion guidance, and links to Confession and prayer.",
  path: "/returning-to-mass",
  keywords: [
    "returning to Mass",
    "come back to Mass",
    "how to return to Catholic Mass",
    "returning Catholic Mass",
    "first time back at Mass",
  ],
});

export default function ReturningToMassPage() {
  const description =
    "A gentle Catholic guide for returning to Mass after time away, with practical steps, what to expect, Communion guidance, and links to Confession and prayer.";

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Returning to Mass",
              description,
              path: "/returning-to-mass",
            }),
            buildBreadcrumbList([
              { name: "Returning to the Catholic Church", path: "/returning" },
              { name: "Returning to Mass", path: "/returning-to-mass" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Returning", href: "/returning" }, { label: "Returning to Mass" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Returning Catholics</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Returning to Mass
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-lg leading-8 text-navy">
            A gentle Catholic guide for coming back to Sunday Mass after time away.
          </p>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            If you have been away from Mass, you do not need to wait until you feel perfectly ready. Come back with
            humility, prayer, and trust that Christ meets people honestly and patiently.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/mass" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Learn the Mass
            </Link>
            <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Return to Confession
            </Link>
          </div>
        </header>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-navy">Before you go</h2>
            <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
              {beforeYouGo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-3xl font-semibold text-navy">What to expect</h2>
            <ul className="mt-5 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
              {whatToExpect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">If you have not been in years</h2>
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            Start with one Sunday Mass. If you also need to return to Confession, do not let fear keep growing in the
            background. Open the Confession guide, contact a parish if needed, and take one simple next step.
          </p>
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            If you are unsure about receiving Communion, speak with a priest and let his guidance steady you. Returning
            to Mass is not about pretending everything is solved. It is about beginning again with Christ and His Church.
          </p>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">A simple return plan</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {simplePlan.map((item, index) => (
              <article key={item} className="card bg-ivory/80 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-7 text-navy">{item}</p>
              </article>
            ))}
          </div>
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
