"use client";

import Link from "next/link";
import { getSaintById } from "@/lib/saints";
import {
  removeSaintCompanion,
  saveSaintCompanionNote,
  useSaintCompanionStore,
} from "@/lib/saintCompanionStorage";

export function SavedSaintCompanionsView() {
  const store = useSaintCompanionStore();
  const companions = store.companions
    .map((companion) => ({ companion, saint: getSaintById(companion.saintId) }))
    .filter((item): item is { companion: typeof store.companions[number]; saint: NonNullable<ReturnType<typeof getSaintById>> } => Boolean(item.saint));

  if (companions.length === 0) {
    return (
      <div className="dashboard-card p-6 text-center">
        <p className="text-xs font-bold uppercase text-burgundy">No saved companions yet</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Find a saint companion.</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
          Save saints you may want to pray with, learn from, or return to during this season.
        </p>
        <Link href="/saints/finder" className="btn btn-primary focus-ring mt-6">
          Open finder
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {companions.map(({ companion, saint }) => (
        <article key={saint.id} className="card p-5">
          <p className="text-xs font-bold uppercase text-burgundy">Saved companion</p>
          <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{saint.title}</h2>
          <p className="mt-3 text-sm leading-7 text-muted">{saint.encouragement}</p>
          <p className="mt-4 rounded-md border border-stone bg-parchment p-3 text-sm font-semibold leading-7 text-navy">
            {saint.prayerPrompt}
          </p>
          <label className="mt-4 grid gap-2">
            <span className="form-label">Private note</span>
            <textarea
              value={companion.note}
              onChange={(event) => saveSaintCompanionNote(saint.id, event.target.value)}
              className="form-field textarea-field focus-ring"
              placeholder="Why do you want to ask this saint's intercession?"
            />
          </label>
          <div className="mt-5 flex flex-col gap-3">
            <Link href={`/saints/${saint.slug}`} className="btn btn-primary focus-ring">
              View profile
            </Link>
            <button type="button" onClick={() => removeSaintCompanion(saint.id)} className="btn btn-secondary focus-ring">
              Remove companion
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
