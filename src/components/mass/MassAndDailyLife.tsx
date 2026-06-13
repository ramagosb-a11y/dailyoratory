import Link from "next/link";

const ideas = [
  "Forgive.",
  "Serve.",
  "Pray.",
  "Witness.",
  "Feed the hungry.",
  "Visit the lonely.",
  "Protect Sunday as the Lord's Day.",
  "Keep a weekly Mass reflection journal.",
];

export function MassAndDailyLife() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Mass and daily life</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
        Live what you receive
      </h2>
      <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
        The Mass sends Catholics into the world to live Eucharistic lives. The dismissal is not an
        ending only; it is a mission.
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <article className="card p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {ideas.map((idea) => (
              <div key={idea} className="rounded-xl border border-stone/70 bg-white/70 px-4 py-4 text-sm font-medium text-navy">
                {idea}
              </div>
            ))}
          </div>
        </article>
        <article className="card-parchment p-6">
          <h3 className="font-display text-3xl font-semibold text-navy">Keep going after Sunday</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/formation" className="btn btn-secondary focus-ring justify-center">Formation</Link>
            <Link href="/rule-of-life" className="btn btn-secondary focus-ring justify-center">Rule of Life</Link>
            <Link href="/pathways/works-of-mercy-and-service" className="btn btn-secondary focus-ring justify-center">Works of Mercy</Link>
            <Link href="/reflections/mass-readings" className="btn btn-secondary focus-ring justify-center">Mass Reflections</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
