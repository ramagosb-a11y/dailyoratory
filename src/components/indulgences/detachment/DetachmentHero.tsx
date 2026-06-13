import Link from "next/link";

export function DetachmentHero() {
  return (
    <section className="liturgical-page-hero card-parchment p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Plenary indulgence condition</p>
      <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
        Complete Detachment from Sin
      </h1>
      <p className="daily-readable mt-5 max-w-4xl text-base leading-8 text-muted sm:text-lg sm:leading-9">
        Understand what detachment from sin means, why it matters for plenary indulgences, and how to ask
        God for this grace with peace and trust.
      </p>
      <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
        Complete detachment from sin does not mean you will never be tempted again or that you have reached
        spiritual perfection. It means the heart sincerely rejects sin, does not cling to what offends God,
        and desires to belong fully to Christ.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="#prayer-for-detachment" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
          Pray for Detachment
        </Link>
        <Link href="#indulgence-preparation" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Before Seeking an Indulgence
        </Link>
        <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
          Go to Confession Guide
        </Link>
      </div>
    </section>
  );
}
