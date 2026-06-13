const principles = [
  "Not fear, but holy vigilance",
  "Not speculation, but trust in Christ",
  "Not despair, but conversion",
  "Not curiosity only, but prayer",
  "Not world-event panic, but faithful discipleship",
  "Not private obsession, but sacramental life",
] as const;

export function EschatologyWithoutFear() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">How Catholics Should Approach the Last Things</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The last things are serious, but they are not meant to paralyze the soul. Catholic teaching on death,
        judgment, Heaven, Hell, Purgatory, resurrection, and Christ's return should lead us to live
        differently today: with repentance, love, prayer, mercy, and hope.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {principles.map((item) => (
          <article key={item} className="rounded-2xl border border-stone bg-ivory/80 p-4">
            <p className="daily-card-readable text-base leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
