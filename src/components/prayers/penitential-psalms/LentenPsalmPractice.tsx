export function LentenPsalmPractice() {
  const rhythm = [
    "Monday: Psalm 6",
    "Tuesday: Psalm 32",
    "Wednesday: Psalm 38",
    "Thursday: Psalm 51",
    "Friday: Psalm 102",
    "Saturday: Psalm 130",
    "Sunday: Psalm 143",
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">A Lenten Way to Pray the Penitential Psalms</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        During Lent, the Seven Penitential Psalms can become a weekly rhythm of repentance and mercy.
      </p>
      <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {rhythm.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="daily-readable-muted mt-5 text-base leading-8 text-muted">
        Optional practice: Pray one Psalm each day, then ask: “Lord, where are You calling me to repentance,
        mercy, and deeper love?”
      </p>
    </section>
  );
}
