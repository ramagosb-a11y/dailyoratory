import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SacramentParishReminder } from "@/components/sacraments/SacramentParishReminder";
import { SacramentPastoralBoundaryNote } from "@/components/sacraments/SacramentPastoralBoundaryNote";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "OCIA | Catholic Sacraments | Daily Oratory",
  description:
    "Learn about OCIA, the parish journey for adults becoming Catholic or completing initiation, with prayerful preparation and trusted Catholic guidance.",
  path: "/sacraments/ocia",
});

export default function OciaPage() {
  const stages = [
    "Inquiry and honest questions",
    "Catechesis and parish formation",
    "Liturgical rites and discernment",
    "Reception of the sacraments of initiation according to the Church's order",
  ];

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Sacraments", href: "/sacraments" }, { label: "OCIA" }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">OCIA</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">A parish journey into the Catholic Church</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Some parishes may still use the term RCIA. OCIA serves adults becoming Catholic, baptized
              Christians entering full communion, and Catholics completing initiation.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/sacraments/prepare" className="btn btn-primary focus-ring">
                Open OCIA Companion
              </Link>
              <Link href="/pathways" className="btn btn-secondary focus-ring">
                Explore pathways
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <SacramentParishReminder />
            <SacramentPastoralBoundaryNote />
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <section className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">Who is OCIA for?</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              <li>Unbaptized adults</li>
              <li>Baptized Christians entering full communion with the Catholic Church</li>
              <li>Catholics completing Confirmation and Eucharist</li>
            </ul>
          </section>
          <section className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">Stages of the journey</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {stages.map((stage) => (
                <li key={stage}>{stage}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-5 card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Questions to ask a parish</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-2 text-sm leading-7 text-muted">
            <li>When does inquiry begin?</li>
            <li>What if I am baptized but not Catholic?</li>
            <li>What if I am Catholic but never confirmed?</li>
            <li>What sacramental records should I bring?</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
