import Link from "next/link";

export function MassHomeCard() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-6 sm:px-8 lg:px-10">
      <div className="card-parchment flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-burgundy">Learn</p>
          <h2 className="mt-2 font-display text-4xl font-semibold text-navy">The Holy Mass</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            Learn the parts of the Mass, the meaning of the altar, tabernacle, sacred vessels,
            Eucharistic sacrifice, Real Presence, and how to participate more prayerfully.
          </p>
        </div>
        <Link href="/mass" className="btn btn-primary focus-ring w-full justify-center sm:w-auto">
          Understand the Mass
        </Link>
      </div>
    </section>
  );
}
