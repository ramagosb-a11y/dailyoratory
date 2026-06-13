export function SaintsTimeline() {
  const eras = [
    "Apostolic Age",
    "Early Martyrs",
    "Church Fathers",
    "Monastic Age",
    "Medieval Doctors",
    "Missionary Age",
    "Modern Saints",
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Timeline</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saints Timeline</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {eras.map((era) => (
          <article key={era} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{era}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

