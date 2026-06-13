import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";

const miraclesUrl = "https://www.miracolieucaristici.org/en/liste/list.html";

const reflectionCards = [
  {
    title: "Begin with reverence",
    body: "Approach the accounts as an invitation to deeper Eucharistic faith, not as a spectacle. Let wonder become adoration.",
  },
  {
    title: "Return to the Mass",
    body: "Eucharistic miracles point back to the ordinary miracle of every valid Mass: Christ truly present, given for the life of the world.",
  },
  {
    title: "Pray with the Church",
    body: "When an account stirs questions, receive it within Catholic teaching, parish life, confession, and love for the Blessed Sacrament.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "Eucharistic Miracles",
  description:
    "A Daily Oratory launch page for learning about Eucharistic miracles and opening the external Eucharistic miracles catalog for prayerful study.",
  path: "/eucharistic-miracles",
});

export default function EucharisticMiraclesPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Eucharistic Miracles" }]} />

        <section className="mt-8 rounded-md bg-navy p-5 text-ivory sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="season-pill border-gold text-gold">Eucharist</span>
                <span className="season-pill border-gold-soft text-gold-soft">Real Presence</span>
                <span className="season-pill border-gold-soft text-gold-soft">Study and prayer</span>
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">Eucharistic miracles</p>
              <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-ivory sm:text-6xl">
                Contemplate signs of Christ's Eucharistic presence.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-soft">
                Daily Oratory links to the Eucharistic miracles catalog as a quiet doorway for prayerful study. These
                accounts can help the heart return with deeper faith to the Holy Sacrifice of the Mass, Eucharistic
                Adoration, and thanksgiving before the Lord.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={miraclesUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-inverse focus-ring">
                  Open Eucharistic miracles catalog
                </a>
                <Link href="/adoration" className="btn btn-outline-inverse focus-ring">
                  Enter Adoration
                </Link>
              </div>
            </div>

            <aside className="rounded-md border border-gold-soft/40 p-5">
              <p className="text-xs font-bold uppercase text-gold-soft">Before you begin</p>
              <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-ivory">Let study become prayer.</h2>
              <p className="mt-4 text-sm leading-7 text-stone-soft">
                Make the Sign of the Cross, ask for faith in the Real Presence, and read slowly. The goal is not curiosity
                alone, but love for Jesus in the Eucharist.
              </p>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-3">
          {reflectionCards.map((card) => (
            <article key={card.title} className="card p-5">
              <h2 className="font-display text-3xl font-semibold leading-tight text-navy">{card.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">{card.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-8 rounded-md border border-stone bg-ivory p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Prayerful use</p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy">
              A simple way to use the catalog.
            </h2>
          </div>
          <ol className="grid list-decimal gap-3 pl-5 text-sm leading-7 text-muted">
            <li>Choose one Eucharistic miracle account and read it slowly.</li>
            <li>Pause over the place, date, witness, and what the account invites you to consider.</li>
            <li>Pray an act of faith: "My Lord and my God."</li>
            <li>Return to the Mass and Eucharistic Adoration with renewed gratitude.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
