import Link from "next/link";

type DailyReturnPromptProps = {
  eyebrow?: string;
  title?: string;
  summary?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function DailyReturnPrompt({
  eyebrow = "Daily rhythm",
  title = "Return tomorrow for the next small step.",
  summary = "Keep the habit simple: open Today's guide, pray with the Church, and let one reflection carry into the day.",
  primaryHref = "/today",
  primaryLabel = "Open Today's Guide",
  secondaryHref = "/reflections/mass-readings",
  secondaryLabel = "Read Mass Reflections",
}: DailyReturnPromptProps) {
  return (
    <section className="rounded-md border border-gold/30 bg-ivory p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>
          <p className="daily-readable mt-4 text-base leading-8 text-muted">{summary}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link href={primaryHref} className="btn btn-primary focus-ring min-h-12 justify-center whitespace-normal text-center">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className="btn btn-secondary focus-ring min-h-12 justify-center whitespace-normal text-center">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
