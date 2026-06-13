export function CatholicCremationTeaching() {
  const points = [
    "Cremated remains should be placed in a worthy vessel.",
    "They should be buried or entombed in a cemetery, mausoleum, or columbarium.",
    "They should not ordinarily be kept at home.",
    "They should not be scattered on land, at sea, or in the air.",
    "They should not be divided among family members.",
    "They should not be made into jewelry, keepsakes, art, or mementos.",
    "Families should follow parish, diocesan, and cemetery guidance.",
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Catholic Teaching on Cremation</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The Catholic Church permits cremation, provided it is not chosen as a denial of the resurrection, the
        immortality of the soul, or Christian faith. Even when cremation is chosen, the Church asks that the
        cremated remains be treated with the same respect given to the body.
      </p>
      <ul className="daily-card-readable mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-6 rounded-3xl border border-gold/40 bg-cream/80 p-5">
        <p className="daily-readable-muted text-sm leading-7 text-muted">
          If a family already has ashes at home or is unsure what to do, they should contact a parish priest or
          Catholic cemetery for help arranging reverent interment. This should be handled with mercy, not shame.
        </p>
      </div>
    </section>
  );
}

