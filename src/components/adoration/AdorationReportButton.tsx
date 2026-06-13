"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { saveAdorationReport, useAdorationStore } from "@/lib/adorationStorage";
import type { AdorationReportReason } from "@/types/adoration";

export function AdorationReportButton({ streamId }: { streamId: string }) {
  const store = useAdorationStore();
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState<AdorationReportReason>("broken-stream");
  const [note, setNote] = useState("");
  const localReportCount = store.reports.filter((report) => report.streamId === streamId).length;

  function submitReport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveAdorationReport(streamId, reason, note);
    setNote("");
    setIsOpen(false);
  }

  return (
    <div className="grid gap-3">
      <button type="button" onClick={() => setIsOpen((value) => !value)} className="btn btn-secondary focus-ring">
        Report broken stream
      </button>
      {localReportCount ? (
        <p className="text-xs font-semibold text-muted" aria-live="polite">
          {localReportCount} local report{localReportCount === 1 ? "" : "s"} saved
        </p>
      ) : null}
      {isOpen ? (
        <form onSubmit={submitReport} className="rounded-md border border-stone bg-parchment p-4">
          <label className="grid gap-2">
            <span className="form-label">Reason</span>
            <select
              value={reason}
              onChange={(event) => setReason(event.target.value as AdorationReportReason)}
              className="form-field focus-ring"
            >
              <option value="broken-stream">Broken stream</option>
              <option value="wrong-location">Wrong location</option>
              <option value="irreverent-content">Irreverent content</option>
              <option value="privacy">Privacy concern</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="mt-3 grid gap-2">
            <span className="form-label">Note</span>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              className="form-field textarea-field focus-ring min-h-24"
              maxLength={300}
              placeholder="What should editors check?"
            />
          </label>
          <button type="submit" className="btn btn-primary focus-ring mt-3" disabled={!note.trim()}>
            Save report locally
          </button>
        </form>
      ) : null}
    </div>
  );
}
