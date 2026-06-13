const mercySteps = [
  "Notice the temptation or sin.",
  "Do not despair.",
  "Turn toward God immediately.",
  "Make an act of contrition.",
  "Avoid the near occasion.",
  "Seek Confession when needed.",
  "Choose the opposite virtue.",
  "Keep returning to mercy.",
];

export function MercyPath() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The mercy path</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A simple path back to grace</h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-2">
        {mercySteps.map((step, index) => (
          <li key={step} className="rounded-2xl border border-stone bg-ivory/80 p-4">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Step {index + 1}</span>
            <p className="daily-card-readable mt-3 text-base leading-7 text-muted">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
