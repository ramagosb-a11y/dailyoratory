const steps = [
  "Encounter Christ",
  "Learn the Creed",
  "Pray daily",
  "Receive the sacraments",
  "Read Scripture",
  "Practice virtue",
  "Examine conscience",
  "Serve with charity",
  "Discern vocation and mission",
  "Persevere with the Church",
];

export function FormationLadder() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Roadmap</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          The formation ladder
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">
          The ladder is not rigid. Catholics often move back and forth through these steps as they grow.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {steps.map((step, index) => (
          <article key={step} className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{step}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
