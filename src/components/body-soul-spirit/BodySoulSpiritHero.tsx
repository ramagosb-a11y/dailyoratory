import Link from "next/link";
import { bodySoulSpiritHero } from "@/data/bodySoulSpiritPage";

export function BodySoulSpiritHero() {
  return (
    <section className="card-parchment overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
            {bodySoulSpiritHero.eyebrow}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {bodySoulSpiritHero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">
            {bodySoulSpiritHero.subtitle}
          </p>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-muted">
            {bodySoulSpiritHero.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="#interior-temple" className="btn btn-gold focus-ring justify-center">
              Enter the Interior Temple
            </Link>
            <Link href="/confession" className="btn btn-secondary focus-ring justify-center">
              Cleanse the Temple through Confession
            </Link>
            <Link href="/daily-examen" className="btn btn-secondary focus-ring justify-center">
              Pray the Daily Examen
            </Link>
          </div>
        </div>

        <aside className="rounded-[1.5rem] border border-gold/35 bg-ivory/90 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Hero note</p>
          <p className="mt-3 text-sm leading-7 text-muted">{bodySoulSpiritHero.note}</p>
        </aside>
      </div>
    </section>
  );
}
