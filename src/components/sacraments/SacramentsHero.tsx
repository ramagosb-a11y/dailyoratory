import Link from "next/link";
import { SacramentParishReminder } from "@/components/sacraments/SacramentParishReminder";

export function SacramentsHero() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Sacraments</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
          The Seven Sacraments
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          Encounter Christ&apos;s grace through the sacramental life of the Church.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted">
          The sacraments are sacred signs instituted by Christ and entrusted to the Church. They heal,
          strengthen, nourish, forgive, consecrate, and send us into Christian life.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          If you are not Catholic or are exploring the Catholic faith, these pages can help you
          understand what Catholics believe about the sacraments. For receiving sacraments or
          entering the Church, contact a local Catholic parish.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="#explore-sacraments" className="btn btn-primary focus-ring">
            Explore the sacraments
          </Link>
          <Link href="/sacraments/prepare" className="btn btn-secondary focus-ring">
            Start preparation companion
          </Link>
        </div>
      </div>
      <SacramentParishReminder />
    </section>
  );
}
