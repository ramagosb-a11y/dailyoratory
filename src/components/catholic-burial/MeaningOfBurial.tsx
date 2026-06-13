export function MeaningOfBurial() {
  const points = [
    "The body should be treated with respect and charity.",
    "Burial expresses hope in the resurrection of the body.",
    "The Church prays for the soul of the deceased.",
    "Catholic funerals comfort the living and intercede for the dead.",
    "The cemetery or columbarium is a sacred place of memory, prayer, and hope.",
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Why Catholic Burial Matters</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Catholic burial is not only a cultural custom. It is an act of faith. The Church treats the body with
        reverence because the body belongs to the person, was created by God, and is destined for resurrection.
        Funeral rites proclaim that death is real, grief is real, but Christ has conquered death.
      </p>
      <ul className="daily-card-readable mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}

