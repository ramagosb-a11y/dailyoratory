import Link from "next/link";
import { ParishReminder } from "@/components/sacraments/ParishReminder";
import { SacramentChecklistControls, SacramentPreparationControls } from "@/components/sacraments/SacramentPreparationControls";
import { SacramentReflectionFields } from "@/components/sacraments/SacramentReflectionFields";
import type { SacramentCompanionRecord } from "@/types/sacramentCompanion";

export function SacramentCompanionDetail({ companion }: { companion: SacramentCompanionRecord }) {
  return (
    <div className="grid gap-10">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">{companion.sacrament}</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{companion.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{companion.overview}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/sacraments/prepare" className="btn btn-primary focus-ring">
              Prepare with guidance
            </Link>
            <Link href="/sacraments/print" className="btn btn-secondary focus-ring">
              Print/export plan
            </Link>
          </div>
        </div>
        <div className="grid gap-5">
          <SacramentPreparationControls companion={companion} />
          <ParishReminder compact />
        </div>
      </div>

      <section className="grid gap-5 lg:grid-cols-3">
        <div className="dashboard-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Best for</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
            {companion.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Parish checklist</p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
            {companion.parishChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Prayer practice</p>
          <p className="mt-3 text-sm font-semibold leading-7 text-navy">{companion.prayerPractice}</p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <SacramentChecklistControls companion={companion} />
        <div className="grid gap-6">
          <SacramentReflectionFields companion={companion} />
          <section className="prayer-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Prayers</p>
            <div className="mt-4 grid gap-4">
              {companion.prayers.map((prayer) => (
                <article key={prayer.id}>
                  <h2 className="font-display text-3xl font-semibold leading-tight text-navy">{prayer.title}</h2>
                  <p className="prayer-response mt-3">{prayer.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
