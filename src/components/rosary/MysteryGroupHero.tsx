import Link from "next/link";
import { RosaryCard, getRosaryAccentClasses } from "@/components/rosary/RosaryUi";
import type { RosaryMysteryGroup } from "@/types/rosary";

export function MysteryGroupHero({ group }: { group: RosaryMysteryGroup }) {
  return (
    <section className={`rounded-md border p-6 shadow-soft sm:p-8 ${getRosaryAccentClasses(group.colorAccent)}`}>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Mystery group</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {group.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-navy">{group.description}</p>
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

        <RosaryCard
          title="Traditional days"
          description={group.traditionalDays.join(" and ")}
          accent={group.colorAccent}
        >
          <p className="text-sm leading-7 text-muted">
            Keep a simple weekly rhythm with these mysteries, or pray them any day you need their light and fruit.
          </p>
        </RosaryCard>
      </div>
    </section>
  );
}
