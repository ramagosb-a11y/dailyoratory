"use client";

import { useMemo, useState } from "react";
import { readPrivatePlan, writePrivatePlan, removePrivatePlan } from "./safePlanStorage";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type ToolField = {
  id: string;
  label: string;
  placeholder: string;
  multiline?: boolean;
};

export function LocalPlanToolShell({
  eyebrow,
  title,
  summary,
  storageKey,
  fields,
  initialValues,
  buildCopyText,
  copyEventName,
  printEventName,
  safeStorage = false,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  storageKey: string;
  fields: ToolField[];
  initialValues: Record<string, string>;
  buildCopyText: (values: Record<string, string>) => string;
  copyEventName?: AnalyticsEventName;
  printEventName?: AnalyticsEventName;
  safeStorage?: boolean;
}) {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState("");
  const preview = useMemo(() => buildCopyText(values), [buildCopyText, values]);

  function setValue(fieldId: string, value: string) {
    setValues((current) => ({ ...current, [fieldId]: value }));
    setSaved(false);
    if (safeStorage) setStatus("");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(preview);
      if (!safeStorage && copyEventName) trackEvent(copyEventName, { section: storageKey });
      setCopied(true);
      if (safeStorage) setStatus("Plan copied. Clearing this form does not erase clipboard or printed copies.");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      if (safeStorage) setStatus("Copy is unavailable. Select the plan text and copy it manually.");
    }
  }

  function handlePrint() {
    if (!safeStorage && printEventName) trackEvent(printEventName, { section: storageKey });
    if (!safeStorage) { window.print(); return; }
    try { window.print(); setStatus("Print dialog requested. Printed copies remain separate from browser storage."); }
    catch { setStatus("Printing is unavailable. You can copy the plan instead."); }
  }

  function clearPlan() {
    if (safeStorage) {
      setValues(initialValues); setCopied(false); setSaved(false);
      const result = removePrivatePlan(() => window.localStorage, storageKey);
      setStatus(result.ok ? "Plan cleared from this form and browser storage. Clipboard and printed copies are separate." : result.message);
      return;
    }
    setValues(initialValues);
    setCopied(false);
    setSaved(false);
  }

  function savePlan() {
    if (safeStorage) {
      const result = writePrivatePlan(() => window.localStorage, storageKey, values, initialValues);
      setSaved(result.ok); setStatus(result.ok ? "Plan saved only in this browser. It is not encrypted by this tool." : result.message);
      return;
    }
    window.localStorage.setItem(storageKey, JSON.stringify(values));
    setSaved(true);
  }

  function loadPlan() {
    if (safeStorage) {
      const result = readPrivatePlan(() => window.localStorage, storageKey, initialValues);
      if (!result.ok) { setSaved(false); setStatus(result.message); return; }
      if (!result.value) { setStatus("No saved plan was found in this browser. Your current entries are unchanged."); return; }
      setValues(result.value); setSaved(true); setCopied(false); setStatus("Saved plan loaded from this browser.");
      return;
    }
    const savedValue = window.localStorage.getItem(storageKey);
    if (!savedValue) return;
    try {
      setValues({ ...initialValues, ...JSON.parse(savedValue) });
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }

  return (
    <section className="card-parchment p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{eyebrow}</p>
      <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy">{title}</h2>
      <p className="daily-readable-muted mt-4 max-w-3xl text-base leading-8 text-muted">{summary}</p>

      <div className="mt-6 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <form className="dashboard-card p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4">
            {fields.map((field) => (
              <label key={field.id} className="grid gap-2">
                <span className="daily-readable text-sm font-semibold text-navy">{field.label}</span>
                {field.multiline !== false ? (
                  <textarea
                    value={values[field.id] ?? ""}
                    onChange={(event) => setValue(field.id, event.target.value)}
                    className="form-field focus-ring daily-card-readable min-h-24"
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input
                    value={values[field.id] ?? ""}
                    onChange={(event) => setValue(field.id, event.target.value)}
                    className="form-field focus-ring daily-card-readable min-h-12"
                    placeholder={field.placeholder}
                  />
                )}
              </label>
            ))}
            <div className="rounded-md border border-stone bg-parchment px-4 py-3 text-xs leading-6 text-muted">
              {safeStorage ? "Saving is optional and manual. Entries stay in this browser; anyone using this browser profile may be able to read saved data. Clear removes this saved plan, but not clipboard or printed copies." : "This reflection is stored only in this browser if saved. Daily Oratory does not receive it."}
            </div>
          </div>
        </form>

        <aside className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Generated reflection</p>
          <pre className="daily-card-readable mt-4 whitespace-pre-wrap text-sm leading-7 text-muted">{preview}</pre>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={handleCopy} className="btn btn-primary focus-ring daily-button-readable justify-center">
              {copied ? "Copied" : "Copy Plan"}
            </button>
            <button type="button" onClick={handlePrint} className="btn btn-secondary focus-ring daily-button-readable justify-center">
              Print Plan
            </button>
            <button type="button" onClick={savePlan} className="btn btn-secondary focus-ring daily-button-readable justify-center">
              {saved ? "Saved in browser" : "Save in browser"}
            </button>
            <button type="button" onClick={loadPlan} className="btn btn-secondary focus-ring daily-button-readable justify-center">
              Load saved
            </button>
            <button type="button" onClick={clearPlan} className="btn btn-secondary focus-ring daily-button-readable justify-center">
              Clear
            </button>
          </div>
          {safeStorage && <p role="status" aria-live="polite" className="mt-4 text-sm leading-7 text-muted">{status}</p>}
        </aside>
      </div>
    </section>
  );
}
