"use client";

import { useId, useMemo, useState } from "react";
import {
  getLastConfessionDateState,
  overviewStorageKey,
  useGuidedExamenStore,
} from "@/lib/guidedExaminationStorage";

export function LastConfessionDateControl({ compact = false }: { compact?: boolean }) {
  const [overviewStore, setOverviewStore, storageAvailable] = useGuidedExamenStore(overviewStorageKey);
  const [dateMessage, setDateMessage] = useState("");
  const helperId = useId();
  const summaryId = useId();
  const liveId = useId();
  const fieldId = useId();

  const dateState = useMemo(
    () => getLastConfessionDateState(overviewStore.lastConfessionDate ?? ""),
    [overviewStore.lastConfessionDate],
  );

  function saveDate(formData: FormData) {
    const nextDate = String(formData.get("lastConfessionDate") ?? "");
    setOverviewStore({
      ...overviewStore,
      lastConfessionDate: nextDate,
    });
    setDateMessage("Saved on this device.");
  }

  function clearDate() {
    setOverviewStore({
      ...overviewStore,
      lastConfessionDate: "",
    });
    setDateMessage("Date cleared from this device.");
  }

  return (
    <section className={`${compact ? "card-parchment" : "dashboard-card"} p-5 sm:p-6`}>
      <p className="text-xs font-bold uppercase text-burgundy">Private preparation</p>
      <h2 className={`${compact ? "text-2xl sm:text-3xl" : "text-3xl"} font-display mt-2 font-semibold text-navy`}>
        Date of last Confession
      </h2>
      <p id={helperId} className="mt-3 text-sm leading-7 text-muted">
        Saved only on this device. Clear it when finished if you share this device.
      </p>
      <form
        action={saveDate}
        className={`mt-4 grid gap-3 ${compact ? "lg:grid-cols-[minmax(0,1fr)_auto_auto]" : "sm:grid-cols-[minmax(0,1fr)_auto_auto]"}`}
      >
        <label htmlFor={fieldId} className="grid gap-2">
          <span className="form-label">Date of last Confession</span>
          <input
            key={overviewStore.updatedAt || overviewStore.lastConfessionDate || "last-confession-date"}
            id={fieldId}
            name="lastConfessionDate"
            type="date"
            defaultValue={overviewStore.lastConfessionDate ?? ""}
            className="form-field focus-ring min-h-12"
            aria-describedby={`${helperId} ${summaryId} ${liveId}`}
          />
        </label>
        <button type="submit" className="btn btn-primary focus-ring min-h-12 self-end">
          {overviewStore.lastConfessionDate ? "Update date" : "Save date"}
        </button>
        <button type="button" onClick={clearDate} className="btn btn-secondary focus-ring min-h-12 self-end">
          Clear date
        </button>
      </form>
      <p id={summaryId} className={`mt-4 text-sm leading-7 ${dateState.warning ? "text-burgundy" : "text-muted"}`}>
        {dateState.warning ?? dateState.summary}
      </p>
      <p id={liveId} aria-live="polite" className="mt-2 text-sm leading-7 text-muted">
        {dateMessage}
      </p>
      {!storageAvailable ? (
        <p className="mt-3 rounded-md border border-burgundy/30 bg-ivory p-3 text-sm leading-6 text-burgundy">
          LocalStorage is unavailable, so this date may not persist after refresh.
        </p>
      ) : null}
    </section>
  );
}
