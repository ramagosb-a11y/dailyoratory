const pathwaySteps = [
  {
    title: "Conviction",
    description: "The Holy Spirit gently reveals where the soul needs mercy.",
  },
  {
    title: "Contrition",
    description: "The heart becomes sorry for sin because sin wounds love.",
  },
  {
    title: "Confession",
    description: "The soul brings sin to Christ in the Sacrament of Reconciliation.",
  },
  {
    title: "Mercy",
    description: "God forgives, restores, and strengthens.",
  },
  {
    title: "Renewal",
    description: "The heart begins again with grace.",
  },
  {
    title: "Conversion",
    description: "The soul turns more fully toward God.",
  },
] as const;

export function RepentancePathway() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">The Path of Repentance</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pathwaySteps.map((step, index) => (
          <article key={step.title} className="card-parchment p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">{index + 1}. {step.title}</p>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
