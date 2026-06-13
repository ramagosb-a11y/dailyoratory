const points = [
  "The Mass is worship, sacrifice, meal, memorial, and communion.",
  "The Mass makes present Christ's one sacrifice in a sacramental way.",
  "The Mass unites the Church on earth with the worship of heaven.",
  "The Eucharist is the source and summit of Christian life.",
  "The Mass forms us to become what we receive.",
];

export function WhyMassMatters() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why the Mass matters</p>
      <div className="mt-3 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
            The center of Catholic worship
          </h2>
          <p className="mt-4 text-base leading-8 text-muted">
            The Mass is the central act of Catholic worship. It is where the Church hears the Word
            of God, joins Christ&apos;s offering to the Father, receives the Eucharist, and is sent
            forth to live the Gospel.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            Understanding the Mass helps the faithful participate with greater reverence,
            attention, gratitude, and love.
          </p>
        </div>
        <div className="card-parchment p-6">
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-7 text-muted">
                <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
