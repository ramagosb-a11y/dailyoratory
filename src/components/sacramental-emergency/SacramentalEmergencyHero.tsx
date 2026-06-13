import Link from "next/link";

export function SacramentalEmergencyHero() {
  return (
    <section className="liturgical-page-hero card-parchment p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Urgent Catholic help</p>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Sacramental Emergency Guide
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-xl leading-9 text-muted">
            What to do when someone is dying, seriously ill, needs a priest, needs Confession, or needs the sacraments urgently.
          </p>
          <p className="daily-readable-muted mt-5 max-w-3xl text-base leading-8 text-muted">
            In urgent moments, keep things simple: call for help, contact a priest, pray calmly, and trust Jesus.
            This guide points you to practical next steps for Anointing of the Sick, Confession, Viaticum, and prayer when a priest cannot arrive.
          </p>
        </div>
        <div className="rounded-[1.75rem] border border-gold/25 bg-white/75 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-burgundy">Quick actions</p>
          <div className="mt-4 flex flex-col gap-3">
            <a href="#someone-is-dying" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">Someone Is Dying</a>
            <a href="#need-a-priest" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">Need a Priest</a>
            <a href="#pray-now" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">Pray Now</a>
            <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">Confession Guide</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
