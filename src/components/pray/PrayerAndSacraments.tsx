import { prayerAndSacramentsCards } from "@/lib/prayer";

export function PrayerAndSacraments() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Prayer and the sacraments</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Personal prayer belongs inside sacramental life.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        The Mass, Eucharist, Confession, and the other sacraments are not additions to prayer.
        They are the heart of Catholic life.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {prayerAndSacramentsCards.map((card) => (
          <article key={card.title} className="card p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {card.links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-semibold text-navy underline-offset-4 hover:underline">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
