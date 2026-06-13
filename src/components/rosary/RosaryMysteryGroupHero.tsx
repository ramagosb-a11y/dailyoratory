import Link from "next/link";
import { getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import type { RosaryMysteryGroup } from "@/types/rosary";

export function RosaryMysteryGroupHero({ group }: { group: RosaryMysteryGroup }) {
  return (
    <section className={`rounded-md border p-6 shadow-soft sm:p-8 ${getRosaryAccentClasses(group.colorAccent)}`}>
      <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Mystery group</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {group.heroTitle}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">{group.heroSubtitle}</p>
          <p className="mt-6 max-w-4xl text-sm leading-8 text-muted">{group.theme}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/rosary" className="btn btn-gold focus-ring justify-center">
              Pray the Rosary Live
            </Link>
            <Link href="/devotions/holy-rosary" className="btn btn-secondary focus-ring justify-center">
              Back to the Holy Rosary Guide
            </Link>
          </div>
        </div>

        <aside className="card-parchment p-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Traditional days</p>
          <p className="mt-3 font-display text-3xl font-semibold text-navy">{group.traditionalDays.join(" and ")}</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Pray these mysteries on their traditional days, or return to them whenever their grace is what
            your heart most needs.
          </p>
          <div className="mt-6 rounded-md border border-gold/35 bg-ivory/85 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">How to pray one full set</p>
            <ol className="mt-3 space-y-2 text-sm leading-7 text-muted">
              <li>1. Begin with the Rosary opening prayers.</li>
              <li>2. Move through all five mysteries of this group in order.</li>
              <li>3. Ask for the fruit of each mystery as you pray the decade slowly.</li>
              <li>4. End with the Hail Holy Queen and the closing Rosary prayer.</li>
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
