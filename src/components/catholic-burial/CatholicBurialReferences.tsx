"use client";

import { catholicBurialReferences } from "@/data/catholicBurial";
import { trackEvent } from "@/lib/analytics";

export function CatholicBurialReferences() {
  return (
    <section>
      <h2 className="font-display text-4xl font-semibold text-navy">Helpful Official References</h2>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {catholicBurialReferences.map((reference) => (
          <article key={reference.id} className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{reference.source}</p>
            <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{reference.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{reference.description}</p>
            <div className="mt-6">
              <a
                href={reference.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("catholic_burial_reference_click", { reference: reference.id })}
                className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
              >
                Open Reference
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="daily-readable-muted mt-5 text-sm leading-7 text-muted">
        Use these as reference links only. Daily Oratory summarizes this topic in original pastoral language and does not reproduce long external text.
      </p>
    </section>
  );
}
