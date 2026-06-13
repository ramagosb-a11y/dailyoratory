"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { someoneIsDyingSteps } from "@/data/sacramentalEmergency";

export function SomeoneIsDyingSteps() {
  return (
    <section id="someone-is-dying" className="scroll-mt-28 card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Someone Is Dying: What To Do Now</h2>
      <ol className="mt-6 space-y-4">
        {someoneIsDyingSteps.map((step, index) => (
          <li key={step.id} className="flex gap-4">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-sm font-bold text-navy">
              {index + 1}
            </span>
            <div>
              <p className="daily-readable text-base leading-7 text-navy">{step.title}</p>
              <p className="daily-readable-muted mt-1 text-sm leading-7 text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-[1.2rem] border border-gold/25 bg-white/70 p-4">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">What to say when calling</p>
        <p className="daily-readable mt-2 text-sm leading-7 text-muted">
          “I need a Catholic priest. Someone is in danger of death and needs the sacraments.”
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <TrackedLink href="/formation/eschatology/death" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center" eventName="sacramental_emergency_related_link_click" eventParams={{ source: "someone-is-dying", destination: "/formation/eschatology/death" }}>
          Death and Christian Hope
        </TrackedLink>
        <TrackedLink href="#pray-now" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center" eventName="sacramental_emergency_anchor_click" eventParams={{ anchor: "pray-now" }}>
          Prayer with a Dying Person
        </TrackedLink>
        <TrackedLink href="/formation/catholic-burial" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center" eventName="sacramental_emergency_related_link_click" eventParams={{ source: "someone-is-dying", destination: "/formation/catholic-burial" }}>
          Catholic Burial
        </TrackedLink>
      </div>
    </section>
  );
}
