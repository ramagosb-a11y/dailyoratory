import Link from "next/link";

export function SaintsWorksOfMercy() {
  const saints = [
    "Saint Vincent de Paul",
    "Saint Teresa of Calcutta",
    "Saint Martin de Porres",
    "Saint Damien of Molokai",
    "Saint Elizabeth of Hungary",
    "Saint Camillus de Lellis",
    "Saint Katharine Drexel",
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Mercy</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saints Who Lived Mercy</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {saints.map((name) => (
          <article key={name} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{name}</h3>
          </article>
        ))}
      </div>
      <Link href="/pathways/works-of-mercy-and-service" className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
        Works of Mercy and Service
      </Link>
    </section>
  );
}

