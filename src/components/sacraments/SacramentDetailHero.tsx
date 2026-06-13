import Link from "next/link";
import type { Sacrament } from "@/types/sacraments";

export function SacramentDetailHero({ sacrament, ctaLabel, ctaHref }: { sacrament: Sacrament; ctaLabel: string; ctaHref: string }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{sacrament.formalName}</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{sacrament.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{sacrament.shortDescription}</p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{sacrament.longDescription}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href={ctaHref} className="btn btn-primary focus-ring">
            {ctaLabel}
          </Link>
          <Link href="/sacraments/prepare" className="btn btn-secondary focus-ring">
            Preparation companion
          </Link>
        </div>
      </div>
      <div className="card-parchment p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Grace Focus</p>
        <p className="mt-3 text-sm font-semibold leading-7 text-navy">{sacrament.graceFocus}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Visible Sign</p>
        <p className="mt-3 text-sm leading-7 text-muted">{sacrament.visibleSign}</p>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Ordinary Minister</p>
        <p className="mt-3 text-sm leading-7 text-muted">{sacrament.ordinaryMinister}</p>
      </div>
    </section>
  );
}
