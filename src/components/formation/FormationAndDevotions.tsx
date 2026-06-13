import Link from "next/link";

const examples = [
  "Rosary: meditation on Christ with Mary",
  "Divine Mercy: trust in mercy",
  "Sacred Heart: love and reparation",
  "Adoration: Eucharistic love",
  "Liturgy of the Hours: daily rhythm of Church prayer",
];

export function FormationAndDevotions() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Devotions</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Devotions that form the heart
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Devotions are not replacements for the Mass or sacraments. They help extend prayer into
        daily life and form the heart in love, repentance, reparation, trust, and perseverance.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {examples.map((example) => (
          <article key={example} className="rounded-md border border-stone/70 bg-parchment px-4 py-4">
            <p className="text-sm leading-7 text-muted">{example}</p>
          </article>
        ))}
      </div>
      <Link href="/devotions" className="btn btn-secondary focus-ring mt-6 justify-center">
        Explore Devotions
      </Link>
    </section>
  );
}
