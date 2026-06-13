const items = [
  {
    title: "Scattering ashes",
    explanation: "The Church asks that cremated remains be placed in a sacred resting place, not scattered.",
  },
  {
    title: "Keeping ashes at home",
    explanation:
      "Ordinarily, ashes should not be kept permanently in a private home. Contact a priest or Catholic cemetery if you need help.",
  },
  {
    title: "Dividing ashes",
    explanation:
      "Cremated remains should not be divided among relatives or placed in multiple personal objects.",
  },
  {
    title: "Jewelry or keepsakes",
    explanation:
      "Cremated remains should not be turned into jewelry, art, decorations, or mementos.",
  },
  {
    title: "Practices that deny Christian faith",
    explanation:
      "Any choice made to deny the resurrection, reject Christian hope, or treat the body as meaningless is contrary to Catholic faith.",
  },
];

export function PracticesToAvoid() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">Practices Catholics Should Avoid</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="card-parchment p-6 sm:p-8">
            <h3 className="font-display text-3xl font-semibold text-navy">{item.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{item.explanation}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

