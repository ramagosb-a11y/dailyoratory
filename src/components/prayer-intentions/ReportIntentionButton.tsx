"use client";

import { useState } from "react";
import { reportPrayerIntention, usePrayerIntentionStore } from "@/lib/prayerIntentionStorage";
import type { PrayerIntentionReportReason } from "@/types/prayerIntentions";

const reportReasons: { value: PrayerIntentionReportReason; label: string }[] = [
  { value: "personal-information", label: "Contains personal information" },
  { value: "unsafe-or-emergency", label: "May need immediate attention" },
  { value: "uncharitable", label: "Uncharitable or unsuitable wording" },
  { value: "spam", label: "Spam or duplicate" },
  { value: "other", label: "Other concern" },
];

export function ReportIntentionButton({ intentionId }: { intentionId: string }) {
  const store = usePrayerIntentionStore();
  const existingReport = store.reportedIntentions.find((report) => report.intentionId === intentionId);
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState<PrayerIntentionReportReason>("personal-information");
  const [note, setNote] = useState("");

  function submitReport() {
    reportPrayerIntention({ intentionId, reason, note });
    setIsOpen(false);
    setNote("");
  }

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)} className="text-link focus-ring text-sm">
        {existingReport ? "Concern noted locally" : "Report concern"}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-end bg-navy/55 p-4 sm:items-center sm:justify-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`report-${intentionId}-title`}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-md border border-stone bg-ivory p-5 shadow-lifted"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-burgundy">Moderation concern</p>
                <h2 id={`report-${intentionId}-title`} className="font-display mt-1 text-3xl font-semibold text-navy">
                  Help keep the wall reverent and safe.
                </h2>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="focus-ring rounded-sm px-2 py-1 text-sm font-bold text-navy">
                Close
              </button>
            </div>

            <div className="mt-5 grid gap-4">
              <label className="grid gap-2">
                <span className="form-label">Reason</span>
                <select
                  value={reason}
                  onChange={(event) => setReason(event.target.value as PrayerIntentionReportReason)}
                  className="form-field focus-ring"
                >
                  {reportReasons.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2">
                <span className="form-label">Optional note for moderators</span>
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  className="form-field textarea-field focus-ring"
                  placeholder="Briefly describe the concern without adding private details."
                />
              </label>
              <p className="rounded-md border border-stone bg-parchment p-3 text-xs leading-5 text-muted">
                In this mock version, reports are stored locally in your browser. A backend should send this to a
                moderation queue before launch.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={submitReport} className="btn btn-primary focus-ring">
                  Submit report
                </button>
                <button type="button" onClick={() => setIsOpen(false)} className="btn btn-secondary focus-ring">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
