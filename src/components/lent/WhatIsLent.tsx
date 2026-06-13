export function WhatIsLent() {
  const points = [
    "Lent prepares the Church for Easter.",
    "It is marked by prayer, fasting, and almsgiving.",
    "It begins on Ash Wednesday.",
    "It leads into Holy Week and the Paschal Triduum.",
    "It calls us to repentance and Confession.",
    "It helps us detach from sin and grow in charity.",
    "It should lead to Easter joy, not discouragement.",
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">What Is Lent?</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Lent is the penitential season before Easter. It recalls Christ&apos;s forty days in the desert and invites Christians to repentance, conversion, and renewal. Lent is not simply about giving something up; it is about returning to God with the whole heart.
      </p>
      <ul className="daily-card-readable mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

