"use client";

import Link from "next/link";
import { RuleSummary } from "@/components/rule-of-life/RuleSummary";
import {
  clearRuleOfLife,
  exportRuleAsJson,
  exportRuleAsText,
  useSavedRuleOfLife,
} from "@/lib/ruleOfLifeStorage";

export function MyRuleView() {
  const rule = useSavedRuleOfLife();

  if (!rule) {
    return (
      <div className="dashboard-card p-6 text-center">
        <p className="text-xs font-bold uppercase text-burgundy">No saved rule yet</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy">Build a daily rule of life.</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted">
          Start small. The builder will save your rule on this device using localStorage.
        </p>
        <Link href="/rule-of-life/builder" className="btn btn-primary focus-ring mt-6">
          Open builder
        </Link>
      </div>
    );
  }

  function clearSavedRule() {
    clearRuleOfLife();
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-start">
      <section>
        <div className="dashboard-card mb-6 p-6">
          <p className="text-xs font-bold uppercase text-burgundy">My rule</p>
          <h1 className="font-display mt-2 text-5xl font-semibold leading-tight text-navy">{rule.title}</h1>
          <p className="mt-3 text-sm leading-7 text-muted">
            Keep this rule gently. Adjust what becomes heavy, and return to prayer without shame when a day falls apart.
          </p>
        </div>
        <RuleSummary rule={rule} />
      </section>

      <aside className="dashboard-card p-5 lg:sticky lg:top-24">
        <p className="text-xs font-bold uppercase text-burgundy">Local actions</p>
        <div className="mt-4 grid gap-3">
          <Link href="/rule-of-life/builder" className="btn btn-primary focus-ring">
            Edit in builder
          </Link>
          <Link href="/rule-of-life/print" className="btn btn-secondary focus-ring">
            Print view
          </Link>
          <button type="button" onClick={() => download("daily-oratory-rule.txt", exportRuleAsText(rule), "text/plain")} className="btn btn-secondary focus-ring">
            Export text
          </button>
          <button type="button" onClick={() => download("daily-oratory-rule.json", exportRuleAsJson(rule), "application/json")} className="btn btn-secondary focus-ring">
            Export JSON
          </button>
          <button type="button" onClick={clearSavedRule} className="btn btn-secondary focus-ring">
            Clear local rule
          </button>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted">
          Version 1 stores this rule only in your browser on this device.
        </p>
      </aside>
    </div>
  );
}

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
