const steps = [
  ["2 minutes", "Morning Offering"],
  ["5 minutes", "Angelus or short prayer"],
  ["10 minutes", "One decade of the Rosary"],
  ["15 minutes", "Divine Mercy Chaplet"],
  ["20 minutes", "Scripture and prayer"],
  ["30 minutes", "Rosary or Stations of the Cross"],
  ["60 minutes", "Holy Hour"],
];

export function StartSmallGuide() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Start small</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Start small
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map(([time, suggestion]) => (
          <article key={time} className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">{time}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{suggestion}</h3>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Begin with one devotion. Let it deepen slowly rather than trying to do everything at once.
      </p>
    </section>
  );
}
