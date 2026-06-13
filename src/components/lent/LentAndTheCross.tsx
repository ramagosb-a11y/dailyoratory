import Link from "next/link";

export function LentAndTheCross() {
  const links = [
    { label: "Sorrowful Mysteries", href: "/devotions/holy-rosary/sorrowful-mysteries" },
    { label: "Crucifixion Meditation", href: "/devotions/holy-rosary/sorrowful-mysteries/crucifixion" },
    { label: "Stations of the Cross", href: "/liturgical-living/lent/stations-of-the-cross" },
    { label: "Holy Week", href: "/liturgical-living/lent/holy-week" },
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Lent Leads to the Cross</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        Every Lenten practice should lead the heart closer to Jesus. Fasting without charity becomes empty. Prayer without repentance becomes shallow. Almsgiving without love becomes performance. Lent teaches us to stand with Christ at the Cross and receive the mercy that flows from His sacrifice.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="dashboard-card p-4 text-sm font-semibold text-navy transition hover:border-gold">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

