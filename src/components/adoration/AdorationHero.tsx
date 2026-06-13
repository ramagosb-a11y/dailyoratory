import Link from "next/link";

export function AdorationHero() {
  return (
    <section className="liturgical-page-hero card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Eucharistic Adoration</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Pray before Jesus in the Blessed Sacrament.
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">
        Enter live and perpetual Adoration with reverence, or learn how to begin if this is new to you.
      </p>
      <p className="mt-4 max-w-4xl text-base leading-8 text-muted">
        Catholics believe Jesus Christ is truly present in the Eucharist: Body, Blood, Soul, and Divinity. Eucharistic
        Adoration flows from the Mass and leads back to the Mass, inviting worship, silence, love, repentance, and
        deeper communion with Christ.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/adoration/live" className="btn btn-primary focus-ring justify-center">Browse Live Adoration</Link>
        <Link href="/adoration/holy-hour" className="btn btn-secondary focus-ring justify-center">How to Make a Holy Hour</Link>
      </div>
    </section>
  );
}
