const reasons = [
  "Pray with the whole Church",
  "Sanctify the day",
  "Learn to pray the Psalms",
  "Enter the rhythm of Scripture",
  "Unite work, rest, and prayer",
  "Grow in discipline and peace",
  "Join the prayer of priests, religious, and lay faithful",
  "Prepare for Mass and extend the grace of the liturgy into daily life",
];

export function WhyPrayTheHours() {
  return (
    <section>
      <div>
        <p className="text-xs font-bold uppercase text-burgundy">Why it matters</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          Why pray the Liturgy of the Hours?
        </h2>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => (
          <article key={reason} className="card p-5">
            <h3 className="font-display text-3xl font-semibold text-navy">{reason}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              The hours train the heart to return to God through praise, Scripture, intercession,
              and a steady rhythm of recollection.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
