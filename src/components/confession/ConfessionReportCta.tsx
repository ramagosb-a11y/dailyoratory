import Link from "next/link";

export function ConfessionReportCta({ className = "" }: { className?: string }) {
  return (
    <section className={`card-parchment p-5 sm:p-6 ${className}`.trim()}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Private review</p>
      <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">
        Return to your saved examination report.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        Open the report section to review marked prompts and notes saved only on this device. If you are unsure how to
        confess something, bring it simply and honestly to a priest.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/confession/examination#report"
          className="btn btn-gold focus-ring min-h-12 justify-center"
          aria-label="Review saved examination report on the guided examination page"
        >
          Review report
        </Link>
        <Link href="/confession/examination/start" className="btn btn-secondary focus-ring min-h-12 justify-center">
          Continue examination
        </Link>
        <Link href="/confession/examination/print" className="btn btn-secondary focus-ring min-h-12 justify-center">
          Open print-safe page
        </Link>
      </div>
      <p className="mt-4 text-sm leading-7 text-muted">
        Private to this browser. No confession details are sent to a server.
      </p>
    </section>
  );
}
