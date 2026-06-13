import Link from "next/link";

const devotions = [
  { title: "Rosary", href: "/devotions/holy-rosary", note: "Meditate on Christ's mysteries and remain close to His sacramental life." },
  { title: "Eucharistic Adoration", href: "/devotions/eucharistic-adoration", note: "Deepen love for the Eucharist through silence and worship." },
  { title: "Sacred Heart", href: "/devotions/sacred-heart-of-jesus", note: "Ask for conversion, reparation, and frequent confession." },
  { title: "Divine Mercy", href: "/devotions/divine-mercy-chaplet", note: "Grow in trust and return to reconciliation." },
  { title: "Saint Joseph", href: "/devotions/saint-joseph", note: "Pray for family life, fatherhood, work, and vocation." },
  { title: "Holy Souls", href: "/devotions/holy-souls-in-purgatory", note: "Unite prayer for the dead with the Eucharist and indulgences." },
];

export function SacramentsAndDevotions() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacraments and Devotions</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">Devotions should lead us deeper into sacramental life</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {devotions.map((devotion) => (
          <Link key={devotion.title} href={devotion.href} className="rounded-3xl border border-stone-200 bg-ivory/70 p-4 transition hover:border-gold">
            <h3 className="font-semibold text-navy">{devotion.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{devotion.note}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
