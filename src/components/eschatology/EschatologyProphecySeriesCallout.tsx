"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";

export function EschatologyProphecySeriesCallout() {
  return (
    <section className="card-parchment p-6 sm:p-8">
      <h2 className="font-display text-4xl font-semibold text-navy">Connected to the Prophecy Series</h2>
      <p className="daily-readable mt-5 text-base leading-8 text-muted">
        The Prophecy Series can help viewers think about Scripture, hope, vigilance, and the final fulfillment
        of God's plan. This Eschatology section provides the doctrinal foundation: Christ has died, Christ is
        risen, Christ will come again.
      </p>
      <div className="mt-6">
        <TrackedLink
          href="/prophecy-series"
          eventName="prophecy_series_from_eschatology_click"
          eventParams={{ section: "eschatology-prophecy-callout", destination: "/prophecy-series" }}
          className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
        >
          Watch the Prophecy Series
        </TrackedLink>
      </div>
      <div className="mt-6 rounded-2xl border border-gold/40 bg-ivory/70 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-burgundy">Caution</p>
        <p className="daily-readable-muted mt-3 text-base leading-8 text-muted">
          Catholic reflection on prophecy should always remain rooted in Scripture, the Catechism, the
          sacraments, humility, and trust in Christ. Avoid fear-based speculation or date-setting.
        </p>
      </div>
    </section>
  );
}
