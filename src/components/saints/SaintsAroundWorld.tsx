export function SaintsAroundWorld() {
  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Around the world</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saints Around the World</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {["Middle East", "North Africa", "Europe", "Americas", "Asia", "Oceania"].map((region) => (
          <article key={region} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{region}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              This is a starter map of holiness, not a complete historical catalog.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

