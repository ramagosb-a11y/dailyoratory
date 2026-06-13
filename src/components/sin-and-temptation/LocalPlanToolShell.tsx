"use client";

import { useMemo, useState } from "react";
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
}) {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const preview = useMemo(() => buildCopyText(values), [buildCopyText, values]);

  function setValue(fieldId: string, value: string) {
    setValues((current) => ({ ...current, [fieldId]: value }));
    setSaved(false);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(preview);
      if (copyEventName) trackEvent(copyEventName, { section: storageKey });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  function handlePrint() {
    if (printEventName) trackEvent(printEventName, { section: storageKey });
    window.print();
  }

  function clearPlan() {
    setValues(initialValues);
    setCopied(false);
    setSaved(false);
  }

  function savePlan() {
    window.localStorage.setItem(storageKey, JSON.stringify(values));
    setSaved(true);
  }

  function loadPlan() {
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
              This reflection is stored only in this browser if saved. Daily Oratory does not receive it.
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
        </aside>
      </div>
    </section>
  );
}
