import Link from "next/link";

export function FormationHomeCard() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10">
      <div className="grid gap-6 rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Catholic Formation</p>
          <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Grow in Catholic formation
          </h2>
        </div>
        <div>
          <p className="text-sm leading-7 text-muted">
            Grow in doctrine, virtue, prayer, Scripture, sacraments, and daily discipleship through guided Catholic formation pathways.
          </p>
          <Link href="/formation" className="btn btn-primary focus-ring mt-5 w-full justify-center sm:w-auto">
            Begin Formation
          </Link>
        </div>
      </div>
    </section>
  );
}
