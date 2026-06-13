"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";

export function BeforeConfessionPsalms() {
  return (
    <section id="before-confession" className="card-parchment scroll-mt-28 p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Pray the Penitential Psalms Before Confession</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The Penitential Psalms can help prepare the heart for the Sacrament of Reconciliation. They do not
        replace Confession, but they can lead the soul into honesty, contrition, humility, and trust in God's
        mercy.
      </p>
      <ol className="daily-card-readable mt-5 list-decimal space-y-3 pl-5 text-base leading-7 text-muted">
        <li>Begin with the Sign of the Cross.</li>
        <li>Pray Psalm 51 slowly.</li>
        <li>Ask the Holy Spirit to reveal what needs mercy.</li>
        <li>Examine your conscience.</li>
        <li>Name sins honestly and simply.</li>
        <li>Make an act of contrition.</li>
        <li>Go to Confession.</li>
        <li>After Confession, pray Psalm 32 in thanksgiving.</li>
      </ol>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <TrackedLink
          href="/confession"
          eventName="penitential_psalms_confession_click"
          eventParams={{ section: "before-confession", destination: "/confession" }}
          className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Confession Guide
        </TrackedLink>
        <TrackedLink
          href="/confession/examination"
          eventName="penitential_psalms_confession_click"
          eventParams={{ section: "before-confession", destination: "/confession/examination" }}
          className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Examination of Conscience
        </TrackedLink>
        <TrackedLink
          href="/pray"
          eventName="penitential_psalms_confession_click"
          eventParams={{ section: "before-confession", destination: "/pray" }}
          className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Act of Contrition
        </TrackedLink>
      </div>
    </section>
  );
}
