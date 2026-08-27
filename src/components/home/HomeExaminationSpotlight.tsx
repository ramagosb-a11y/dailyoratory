import Link from "next/link";

export function HomeExaminationSpotlight() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
      <div className="liturgical-home-toolspotlight overflow-hidden rounded-[1.75rem] border p-6 text-ivory shadow-soft sm:p-8 lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">Featured tool</p>
          <h2 className="font-display mt-3 max-w-4xl text-4xl font-semibold leading-tight text-ivory sm:text-5xl">
            Make a guided examination of conscience with peace and honesty.
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-parchment">
            When you need a concrete Catholic next step before Confession, this tool helps you slow down, examine your heart clearly, and prepare without spiraling.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/confession/examination-companion"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-gold bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-gold-soft"
            >
              Open Examination Tool
            </Link>
            <Link
              href="/confession"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-gold-soft px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-ivory/10"
            >
              Read Confession Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
