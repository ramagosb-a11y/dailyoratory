import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { whatShouldIDoCards } from "@/data/whatShouldIDo";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "What Should I Do? | Daily Oratory",
  description:
    "Find a gentle Catholic starting point for prayer, Confession, the Rosary, grief, anxiety, returning to Mass, Lent, and daily Catholic life.",
  path: "/what-should-i-do",
  keywords: [
    "Catholic help",
    "what should I do Catholic",
    "start praying",
    "return to Confession",
    "serious sin",
    "fear of death",
    "Catholic grief",
    "return to Mass",
    "Rosary",
    "prepare for Lent",
  ],
});

const groupedCards = [
  {
    title: "Prayer and Beginnings",
    items: whatShouldIDoCards.filter((card) => card.category === "Prayer and Beginnings"),
  },
  {
    title: "Mercy and Healing",
    items: whatShouldIDoCards.filter((card) => card.category === "Mercy and Healing"),
  },
  {
    title: "Death and Grief",
    items: whatShouldIDoCards.filter((card) => card.category === "Death and Grief"),
  },
  {
    title: "Learning the Faith",
    items: whatShouldIDoCards.filter((card) => card.category === "Learning the Faith"),
  },
  {
    title: "Liturgical Life",
    items: whatShouldIDoCards.filter((card) => card.category === "Liturgical Life"),
  },
].filter((group) => group.items.length > 0);

export default function WhatShouldIDoPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "What Should I Do?",
              description:
                "Find a gentle Catholic starting point for prayer, Confession, the Rosary, grief, anxiety, returning to Mass, Lent, and daily Catholic life.",
              path: "/what-should-i-do",
            }),
            buildArticleStructuredData({
              headline: "What Should I Do?",
              description:
                "Find a gentle Catholic starting point for prayer, Confession, the Rosary, grief, anxiety, returning to Mass, Lent, and daily Catholic life.",
              path: "/what-should-i-do",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Start Here", path: "/catholic-life" },
              { name: "What Should I Do?", path: "/what-should-i-do" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Start Here", href: "/catholic-life" }, { label: "What Should I Do?" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Start Here</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">What Should I Do?</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A gentle Catholic guide for finding the next faithful step when you are unsure where to begin.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            Sometimes the hardest part of the spiritual life is not knowing where to start. Choose the situation that
            sounds closest to where you are, then take one simple next step.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/prayers" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Start Praying
            </Link>
            <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Go to Confession Guide
            </Link>
            <Link href="/catholic-life" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Catholic Life Roadmap
            </Link>
          </div>
        </header>

        <section className="liturgical-callout liturgical-callout-warning mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Urgent help</p>
          <h2 className="font-display mt-3 text-3xl font-semibold text-navy">If someone is in immediate danger</h2>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            If there is immediate danger, risk of self-harm, a medical emergency, or someone is dying, call local
            emergency services first. Then contact a priest, parish office, or hospital chaplain as soon as possible.
          </p>
          <div className="mt-6">
            <Link href="/sacramental-emergency" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Sacramental Emergency
            </Link>
          </div>
        </section>

        {groupedCards.map((group) => (
          <section key={group.title} className="mt-10">
            <div className="mb-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{group.title}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {group.items.map((card) => (
                <article key={card.id} className="card-parchment p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{card.category}</p>
                  <h2 className="font-display mt-3 text-3xl font-semibold text-navy">{card.title}</h2>
                  <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{card.summary}</p>
                  <div className="mt-6 rounded-3xl border border-gold-soft/40 bg-gold-soft/20 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">One next step</p>
                    <p className="mt-2 text-sm leading-7 text-navy">{card.firstStep}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {card.links.map((link, index) => (
                      <Link
                        key={`${card.id}-${link.href}`}
                        href={link.href}
                        className={
                          index === 0
                            ? "btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
                            : "rounded-full border border-stone px-4 py-3 text-sm font-semibold text-navy transition hover:border-gold"
                        }
                      >
                        {index === 0 ? link.label : link.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">One small step today</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">You do not need to solve everything today.</h2>
          <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
            <li>Pray one honest sentence to God.</li>
            <li>Choose one guide from this page.</li>
            <li>Contact your parish if you need Confession, Anointing, or sacramental help.</li>
            <li>Return tomorrow and take the next step.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
