import Link from "next/link";

export function SacramentsAndChurchFathers() {
  const links = [
    { label: "Church Fathers", href: "/church-fathers", description: "See how the early Church witnessed to sacramental life." },
    { label: "Eucharist in the Fathers", href: "/church-fathers", description: "Begin with Ignatius of Antioch, Justin Martyr, and Cyril of Jerusalem." },
    { label: "Baptism in the Fathers", href: "/church-fathers", description: "Read early witnesses on new birth, catechesis, and initiation." },
  ];

  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacraments and the Church Fathers</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">The early Church still helps us see clearly</h2>
      <p className="mt-4 text-base leading-8 text-muted">
        The early Church Fathers give powerful witness to Baptism, the Eucharist, Confession, bishops,
        Christian marriage, prayer for the sick, and apostolic tradition. They help Catholics see continuity
        between the early Church and sacramental life today.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="rounded-3xl border border-stone-200 bg-ivory/70 p-4 transition hover:border-gold">
            <h3 className="font-semibold text-navy">{link.label}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
