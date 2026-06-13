const pathway = [
  ["God calls", "Grace begins with God’s initiative."],
  ["The soul responds", "The person turns toward God with faith, repentance, or desire."],
  ["Grace heals", "God begins to cleanse wounds, sin, fear, and disorder."],
  ["Grace strengthens", "The soul receives help to resist sin and choose the good."],
  ["Grace sanctifies", "The person grows in holiness and charity."],
  ["Grace bears fruit", "The soul begins to love, serve, forgive, and witness more freely."],
  ["Grace leads to glory", "The life of grace is ordered toward eternal communion with God."],
] as const;

export function GracePathway() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">The Path of Grace</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {pathway.map(([title, description], index) => (
          <article key={title} className="dashboard-card p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Stage {index + 1}</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
