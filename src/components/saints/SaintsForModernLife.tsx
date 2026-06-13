import Link from "next/link";

export function SaintsForModernLife() {
  const cards = [
    ["Saint Carlo Acutis", "technology and Eucharistic devotion"],
    ["Blessed Pier Giorgio Frassati", "friendship, youth, charity"],
    ["Saint John Paul II", "courage, human dignity, evangelization"],
    ["Saint Teresa of Calcutta", "service to the poor"],
    ["Saint Gianna Beretta Molla", "family, medicine, sacrificial love"],
    ["Saint Maximilian Kolbe", "courage, sacrifice, media apostolate"],
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Modern life</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Saints for Modern Life</h2>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([title, focus]) => (
          <article key={title} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{focus}</p>
          </article>
        ))}
      </div>
      <Link href="/saints?modern=true" className="mt-6 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
        Browse modern saints
      </Link>
    </section>
  );
}

