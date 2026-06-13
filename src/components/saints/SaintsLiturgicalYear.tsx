import Link from "next/link";

export function SaintsLiturgicalYear() {
  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Liturgical year</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Saints in the Church Year
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        The Church remembers saints throughout the liturgical year. Their feast days help Catholics
        see holiness in every season.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ["Saint feast calendar", "/saints/calendar"],
          ["Saint of the Day", "/saints/saint-of-the-day"],
          ["Month-by-month highlights", "/today"],
          ["Seasons and feast connections", "/liturgical-living/seasons"],
        ].map(([title, href]) => (
          <Link key={title} href={href} className="card-parchment liturgical-card-accent block p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Feast days and liturgical ranks can vary by country, diocese, parish, and religious calendar.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SaintsAndSacraments() {
  const cards = [
    ["Saints who loved the Eucharist", "/sacraments/eucharist"],
    ["Saints of confession and mercy", "/confession"],
    ["Saints for baptismal identity", "/sacraments/baptism"],
    ["Saints for confirmation courage", "/sacraments/confirmation"],
    ["Saints for marriage and family", "/sacraments/matrimony"],
    ["Saints for the sick", "/sacraments/anointing"],
    ["Saints for vocations", "/sacraments/holy-orders"],
  ];

  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Sacraments</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Saints and the Sacraments
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Saints are not decorative extras around the sacraments. They show what sacramental grace
        can look like in actual human lives.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(([title, href]) => (
          <Link key={title} href={href} className="card-parchment p-5">
            <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SaintsDailyLife() {
  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Daily life</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Holiness in Daily Life</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Saints were parents, students, workers, teachers, priests, converts, scholars, caregivers,
        artists, missionaries, and hidden servants. Their holiness grew in ordinary duties as well as heroic moments.
      </p>
      <div className="mt-7 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="card-parchment liturgical-card-accent p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">How to imitate a saint this week</h3>
          <ol className="mt-4 space-y-2 text-sm leading-7 text-muted">
            <li>1. Choose one saint.</li>
            <li>2. Learn one fact about their life.</li>
            <li>3. Pray for their intercession.</li>
            <li>4. Practice one virtue they lived.</li>
            <li>5. Do one work of mercy.</li>
            <li>6. Thank God for His grace in their life.</li>
          </ol>
        </article>
        <article className="card-parchment p-5">
          <h3 className="font-display text-2xl font-semibold text-navy">Real states of life</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            The saints help us stop imagining holiness as a single personality type. There are
            saints for the grieving, the energetic, the contemplative, the scholar, the penitent,
            the parent, the elderly, the young, and the worker.
          </p>
        </article>
      </div>
    </section>
  );
}
