"use client";

import { markIntentionPrayed, usePrayerIntentionStore } from "@/lib/prayerIntentionStorage";

export function PrayerCountButton({ intentionId, baseCount }: { intentionId: string; baseCount: number }) {
  const store = usePrayerIntentionStore();
  const hasPrayed = store.prayedIntentionIds.includes(intentionId);
  const count = baseCount + (hasPrayed ? 1 : 0);

  return (
    <div className="grid gap-2">
      <button
        type="button"
        onClick={() => markIntentionPrayed(intentionId)}
        disabled={hasPrayed}
        className="btn btn-primary focus-ring disabled:cursor-not-allowed disabled:border-stone disabled:bg-stone disabled:text-navy"
        aria-pressed={hasPrayed}
      >
        {hasPrayed ? "Prayer recorded locally" : "I prayed for this"}
      </button>
      <p className="text-xs font-semibold text-muted" aria-live="polite">
        {count} prayer{count === 1 ? "" : "s"} offered
      </p>
    </div>
  );
}
