import Link from "next/link";

const days = [
  ["Palm Sunday", "Christ enters Jerusalem and the Church begins the great week of the Passion."],
  ["Spy Wednesday", "A quieter day that invites examination of betrayal, repentance, and fidelity."],
  ["Holy Thursday", "The Church remembers the Last Supper, the priesthood, and the gift of the Eucharist."],
  ["Good Friday", "The faithful venerate the Cross and contemplate the Lord's Passion and death."],
  ["Holy Saturday", "A day of silence and waiting at the tomb in hope."],
  ["Easter Vigil", "The Church keeps watch in darkness until the light of the Resurrection breaks forth."],
  ["Easter Sunday", "Christ is risen, and the long discipline of Lent opens into joy."],
];

export function HolyWeekGuideContent() {
  return (
    <div className="grid gap-10">
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What is Holy Week?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Holy Week is the Church&apos;s most sacred week. It begins with Palm Sunday and leads the faithful through the Passion, death, burial, and Resurrection of Jesus Christ.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        {days.map(([title, description]) => (
          <article key={title} className="card-parchment p-6 sm:p-8">
            <h2 className="font-display text-4xl font-semibold text-navy">{title}</h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">{description}</p>
          </article>
        ))}
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Family Holy Week plan</h2>
        <ul className="daily-card-readable mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
          <li>Read the Gospel for Palm Sunday together.</li>
          <li>Choose one quieter evening during Holy Week.</li>
          <li>Pray the Stations of the Cross on Good Friday if possible.</li>
          <li>Attend parish liturgies as your circumstances allow.</li>
          <li>Let Holy Saturday include silence, gratitude, and patient hope.</li>
        </ul>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Related links</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/liturgical-living/lent/stations-of-the-cross" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Stations of the Cross
          </Link>
          <Link href="/devotions/holy-rosary/sorrowful-mysteries" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Sorrowful Mysteries
          </Link>
          <Link href="/liturgical-living/seasons#easter" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Easter in the Liturgical Year
          </Link>
        </div>
      </section>
    </div>
  );
}

