const stages = [
  { title: "Birth and new life", sacrament: "Baptism", note: "The beginning of life in Christ and the Church." },
  { title: "Strengthening", sacrament: "Confirmation", note: "The Holy Spirit seals and strengthens for mission." },
  { title: "Nourishment", sacrament: "Eucharist", note: "Christ feeds the Church with His own life." },
  { title: "Mercy and restoration", sacrament: "Reconciliation", note: "Christ forgives and heals after sin." },
  { title: "Sickness and suffering", sacrament: "Anointing", note: "The Church accompanies the sick with strength and peace." },
  { title: "Family and covenant", sacrament: "Matrimony", note: "Grace for faithful and fruitful married love." },
  { title: "Service and shepherding", sacrament: "Holy Orders", note: "Christ serves His Church through ordained ministry." },
];

export function SacramentalLifeMap() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacramental Life Map</p>
      <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A lifelong rhythm of grace</h2>
      <p className="mt-4 text-base leading-8 text-muted">
        Sacramental life is not a checklist to finish. It is a lifelong rhythm in which Christ gives grace
        for birth, growth, nourishment, mercy, suffering, family life, and service.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage) => (
          <article key={stage.sacrament} className="rounded-3xl border border-stone-200 bg-ivory/70 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{stage.title}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-navy">{stage.sacrament}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{stage.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
