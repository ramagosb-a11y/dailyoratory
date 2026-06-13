const steps = [
  "Opening verse",
  "Hymn",
  "Psalmody",
  "Scripture reading",
  "Response",
  "Canticle or intercessions, depending on the hour",
  "Lord's Prayer",
  "Concluding prayer",
];

export function TypicalHourStructure() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Structure</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          How the prayer is structured
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          Each hour has a rhythm. The exact structure varies by hour, but many include an opening
          verse, hymn, psalms, Scripture reading, response, Gospel canticle or prayer,
          intercessions, the Lord&apos;s Prayer, and a concluding prayer.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <article key={step} className="card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
            <h3 className="font-display mt-2 text-3xl font-semibold text-navy">{step}</h3>
          </article>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-muted">
        Do not worry if the structure feels confusing at first. Follow along slowly using
        DivineOffice.org or an approved app or book. The rhythm becomes familiar with practice.
      </p>
    </section>
  );
}
