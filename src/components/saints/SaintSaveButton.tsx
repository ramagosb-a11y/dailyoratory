"use client";

import {
  removeSaintCompanion,
  saveSaintCompanion,
  useSaintCompanionStore,
} from "@/lib/saintCompanionStorage";

export function SaintSaveButton({ saintId }: { saintId: string }) {
  const store = useSaintCompanionStore();
  const saved = store.companions.some((companion) => companion.saintId === saintId);

  return (
    <button
      type="button"
      onClick={() => (saved ? removeSaintCompanion(saintId) : saveSaintCompanion(saintId))}
      className={`btn focus-ring ${saved ? "btn-secondary" : "btn-primary"}`}
    >
      {saved ? "Saved companion" : "Save companion"}
    </button>
  );
}
