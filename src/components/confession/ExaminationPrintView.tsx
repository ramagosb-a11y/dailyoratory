"use client";

import Link from "next/link";
import { useState } from "react";
import {
  buildGuidedExaminationReportText,
  clearAllGuidedExaminationData,
  useGuidedExaminationReport,
} from "@/lib/guidedExaminationStorage";

export function ExaminationPrintView() {
  const report = useGuidedExaminationReport();
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const text = buildGuidedExaminationReportText(report);

  async function copyText() {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage("Report text copied from this device.");
    } catch {
      setCopyMessage("Unable to copy report text on this browser.");
    }
  }

  function printPage() {
    window.print();
  }

  function clearLocalReport() {
    clearAllGuidedExaminationData();
    setCopyMessage("Local report cleared from this device.");
  }

  if (!report.hasReportData) {
    return (
      <div className="mx-auto grid max-w-4xl gap-6">
        <section className="dashboard-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase text-burgundy">Private print room</p>
          <h1 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">
            Confession Companion Report
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">No local examination report was found on this device.</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Return to the guided examination to prepare your report.
          </p>
          <div className="confession-print-room-chrome mt-6">
            <Link href="/confession/examination" className="btn btn-primary focus-ring min-h-12 justify-center">
              Return to examination
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
      <aside className="dashboard-card confession-print-room-chrome p-5 sm:p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Private print room</p>
        <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Intentional printing only</h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          This page is generated from information saved only on this device. Close this tab and clear the report when
          finished if you share this device.
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">
          Nothing will print unless you choose the print button or your browser&apos;s print command.
        </p>
        <div className="confession-print-room-actions mt-5 grid gap-3">
          <button type="button" onClick={printPage} className="btn btn-primary focus-ring min-h-12">
            Print this page
          </button>
          <button type="button" onClick={copyText} className="btn btn-secondary focus-ring min-h-12">
            Copy text
          </button>
          <Link href="/confession/examination#report" className="btn btn-secondary focus-ring min-h-12 justify-center">
            Return to examination
          </Link>
          <button type="button" onClick={clearLocalReport} className="btn btn-secondary focus-ring min-h-12">
            Clear local report
          </button>
        </div>
        <p aria-live="polite" className="mt-3 text-sm leading-7 text-muted">
          {copyMessage ?? ""}
        </p>
      </aside>

      <article className="content-card confession-print-room-report p-6 sm:p-8">
        <p className="confession-print-room-chrome text-xs font-bold uppercase text-burgundy">Daily Oratory</p>
        <h1 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">Confession Companion Report</h1>
        <p className="confession-print-room-chrome mt-4 rounded-md border border-burgundy/30 bg-parchment p-4 text-sm leading-7 text-muted">
          This page is generated from information saved only on this device. Close this tab and clear the report when
          finished if you share this device.
        </p>

        <section className="mt-6 grid gap-6">
          <div className="rounded-md border border-stone bg-background p-4">
            <p className="text-sm font-semibold leading-7 text-navy">{report.openingLine}</p>
            <p className="mt-2 text-sm leading-7 text-muted">{report.lastConfessionSummary}</p>
          </div>

          {report.currentStateOfLife.length ? (
            <section>
              <h2 className="font-display text-3xl font-semibold text-navy">Current state of life</h2>
              <ul className="mt-3 grid gap-2">
                {report.currentStateOfLife.map((item) => (
                  <li key={item} className="rounded-md border border-stone bg-background px-4 py-3 text-sm leading-7 text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {report.paths.map((path) => (
            <section key={path.id} className="grid gap-4">
              <h2 className="font-display text-3xl font-semibold text-navy">{path.title}</h2>
              {path.sections.map((section) => (
                <div key={section.id} className="rounded-md border border-stone bg-background p-4">
                  <h3 className="text-lg font-semibold text-navy">{section.title}</h3>
                  <ul className="mt-3 grid gap-3">
                    {section.prompts.map((prompt) => (
                      <li key={prompt.id} className="border-l-2 border-gold pl-4 text-sm leading-7 text-navy">
                        {prompt.marked ? <p>{prompt.text}</p> : null}
                        {prompt.note ? (
                          <p className="mt-1 text-muted">
                            <span className="font-semibold text-burgundy">Note: </span>
                            {prompt.note}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          ))}

          <section className="rounded-md border border-stone bg-background p-4">
            <p className="text-sm leading-7 text-navy">{report.pastoralNote}</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              This guide is only an aid to preparation. The priest can help you if you are unsure what to say.
            </p>
          </section>

          <section className="rounded-md border border-stone bg-background p-4">
            <h2 className="font-display text-3xl font-semibold text-navy">Act of Contrition</h2>
            <p className="mt-3 text-sm leading-7 text-navy">{report.actOfContrition}</p>
          </section>
        </section>
      </article>
    </div>
  );
}
