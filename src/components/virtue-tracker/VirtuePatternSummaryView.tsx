"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { getViceLabel, getVirtueLabel, summarizeVirtuePatterns } from "@/lib/virtueTracker";
import { useVirtueTrackerStore } from "@/lib/virtueTrackerStorage";

export function VirtuePatternSummaryView() {
  const store = useVirtueTrackerStore();
  const patterns = summarizeVirtuePatterns(store.checkIns);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <aside className="dashboard-card p-5">
        <p className="text-xs font-bold uppercase text-burgundy">Pattern summary</p>
        <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">Notice without measuring your holiness.</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          These summaries count what you chose to notice. They are invitations to prayer, not grades.
        </p>
        <Link href="/virtue-tracker/check-in" className="btn btn-primary focus-ring mt-5">
          Add check-in
        </Link>
      </aside>

      <section className="grid gap-5">
        <PatternCard title="Virtues you have focused on" empty="No virtue focus saved yet.">
          {patterns.frequentVirtues.map((item) => (
            <PatternRow key={item.value} label={item.label} count={item.count} />
          ))}
        </PatternCard>
        <PatternCard title="Struggles you have noticed" empty="No struggles saved yet.">
          {patterns.frequentStruggles.map((item) => (
            <PatternRow key={item.value} label={item.label} count={item.count} />
          ))}
        </PatternCard>
        <PatternCard title="Recent next steps" empty="No next steps saved yet.">
          {patterns.nextSteps.map((step) => (
            <p key={step} className="rounded-md border border-stone bg-ivory p-3 text-sm leading-7 text-navy">
              {step}
            </p>
          ))}
        </PatternCard>
        <PatternCard title="Contrary virtue reminders" empty="Notice a struggle to see related contrary virtues.">
          {patterns.frequentStruggles.slice(0, 4).map((item) => (
            <p key={item.value} className="rounded-md border border-stone bg-parchment p-3 text-sm leading-7 text-navy">
              {getViceLabel(item.value)} invites {store.checkIns
                .flatMap((checkIn) => checkIn.viceStruggles.includes(item.value) ? checkIn.virtueFocus : [])
                .map(getVirtueLabel)
                .filter(Boolean)
                .slice(0, 3)
                .join(", ") || "a concrete contrary virtue"}.
            </p>
          ))}
        </PatternCard>
      </section>
    </div>
  );
}

function PatternCard({ title, empty, children }: { title: string; empty: string; children: ReactNode }) {
  const items = Array.isArray(children) ? children.filter(Boolean) : children;

  return (
    <section className="dashboard-card p-5">
      <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
      <div className="mt-4 grid gap-3">{Array.isArray(items) && items.length === 0 ? <p className="text-sm leading-7 text-muted">{empty}</p> : items}</div>
    </section>
  );
}

function PatternRow({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-md border border-stone bg-ivory p-3">
      <span className="text-sm font-bold text-navy">{label}</span>
      <span className="season-pill">{count} check-in{count === 1 ? "" : "s"}</span>
    </div>
  );
}
