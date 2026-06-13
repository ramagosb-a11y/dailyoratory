import Link from "next/link";

export function LentForFamiliesContent() {
  const practices = [
    "Set up a small family prayer corner with a crucifix, candle, and purple cloth.",
    "Choose one family sacrifice that is simple and doable.",
    "Pray one short prayer or one decade of the Rosary together.",
    "Read the Sunday Gospel before Mass.",
    "Attend Stations of the Cross when possible.",
  ];

  const holyWeek = [
    "Plan Palm Sunday reverently and simply.",
    "Choose one Good Friday practice: Stations, silence, or a family Gospel reading.",
    "Let Holy Saturday include quiet waiting and preparation for Easter joy.",
  ];

  return (
    <div className="grid gap-10">
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">How families can live Lent</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Lent at home does not need to be complicated. Small, steady practices often teach children and adults more deeply than ambitious plans that become overwhelming.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Family prayer corner</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            A crucifix, purple cloth, candle, or Bible can make the season more visible and help children understand that something sacred is happening in the home.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Simple family sacrifices</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {practices.map((practice) => (
              <li key={practice}>{practice}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Lenten calendar</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Mark Fridays, a family Confession day, one day for almsgiving, and the beginning of Holy Week so the season has a gentle rhythm.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Children and fasting note</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Children should not be pushed into unhealthy fasting. Choose age-appropriate sacrifices like less screen time, simpler treats, extra kindness, or helping with chores.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Stations of the Cross at home</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Families can pray a shorter version by choosing a few stations, holding a crucifix, and speaking one simple prayer after each stop.
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Family Confession plan</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Pick one parish time or reconciliation service ahead of time. Children learn peace from seeing parents return to mercy without fear.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Holy Week at home</h2>
          <ul className="daily-card-readable mt-5 list-disc space-y-2 pl-5 text-base leading-7 text-muted">
            {holyWeek.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Easter preparation</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Let family Lent end by preparing for joy: clean the prayer space, plan Easter worship, and speak openly about the Resurrection as the goal of all the season&apos;s sacrifices.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Related links</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/liturgical-living/lent" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Back to Lent
          </Link>
          <Link href="/liturgical-living/lent/stations-of-the-cross" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Stations of the Cross
          </Link>
          <Link href="/family" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Family and Domestic Church
          </Link>
        </div>
      </section>
    </div>
  );
}
