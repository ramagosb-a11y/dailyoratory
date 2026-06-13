import Link from "next/link";

const ideas = [
  "Read the daily Mass readings",
  "Pray one Psalm",
  "Practice Lectio Divina",
  "Memorize one verse monthly",
  "Read a Gospel slowly",
  "Use Scripture for examination of conscience",
];

export function FormationAndScripture() {
  return (
    <section className="card p-6">
      <p className="text-xs font-bold uppercase text-burgundy">Word of God</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Let the Word of God form you
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        Scripture shapes the mind, purifies the heart, and teaches the soul to hear God.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ideas.map((idea) => (
          <article key={idea} className="rounded-md border border-stone/70 bg-parchment px-4 py-4">
            <p className="text-sm leading-7 text-muted">{idea}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/library/scripture-prayer" className="btn btn-primary focus-ring justify-center">
          Scripture Prayer
        </Link>
        <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">
          Mass Readings Reflections
        </Link>
      </div>
    </section>
  );
}
