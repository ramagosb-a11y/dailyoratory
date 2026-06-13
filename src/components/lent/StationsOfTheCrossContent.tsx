"use client";

import { stationsOfTheCross } from "@/data/lent";
import { trackEvent } from "@/lib/analytics";

function buildStationsGuide() {
  return [
    "Stations of the Cross",
    "",
    ...stationsOfTheCross.flatMap((station) => [
      `Station ${station.number}: ${station.title}`,
      station.shortMeditation,
      station.prayer,
      "",
    ]),
    "Closing prayer: Lord Jesus, let the way of the Cross teach me repentance, patience, mercy, and hope. Draw me close to You and prepare my heart for the joy of Easter. Amen.",
  ].join("\n");
}

export function StationsOfTheCrossContent() {
  async function copyGuide() {
    await navigator.clipboard.writeText(buildStationsGuide());
    trackEvent("stations_guide_open", { action: "copy" });
  }

  function printGuide() {
    trackEvent("stations_guide_open", { action: "print" });
    window.print();
  }

  return (
    <div className="grid gap-10">
      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">What are the Stations of the Cross?</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          The Stations of the Cross are a traditional Catholic devotion that walks prayerfully through the Passion of Jesus from condemnation to burial. They help the soul stay near the Lord&apos;s suffering love.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">Why pray the Stations during Lent?</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            During Lent, the Stations teach repentance, patience, gratitude, and compassion. They make the Cross personal without becoming dramatic or despairing.
          </p>
        </article>
        <article className="card-parchment p-6 sm:p-8">
          <h2 className="font-display text-4xl font-semibold text-navy">How to pray at home</h2>
          <p className="daily-readable mt-5 text-base leading-8 text-muted">
            Move slowly, read one station at a time, pause in silence, and let one short prayer or resolve stay with you. A family can pray one or two stations at a time with children if needed.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold text-navy">The Fourteen Stations</h2>
            <p className="daily-readable-muted mt-3 max-w-3xl text-base leading-8 text-muted">
              Original short meditations for Lent, personal prayer, and home use.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button type="button" onClick={copyGuide} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Copy Stations Guide
            </button>
            <button type="button" onClick={printGuide} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Print Stations Guide
            </button>
          </div>
        </div>
        <div className="mt-6 grid gap-5">
          {stationsOfTheCross.map((station) => (
            <article key={station.id} className="rounded-2xl border border-stone bg-ivory/80 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Station {station.number}</p>
              <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{station.title}</h3>
              <p className="daily-card-readable mt-4 text-base leading-7 text-muted">{station.shortMeditation}</p>
              <p className="daily-prayer-readable mt-4 text-base leading-8 text-navy">{station.prayer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Family version</h2>
        <p className="daily-readable mt-5 text-base leading-8 text-muted">
          Families can pray the full devotion or choose a smaller version: read five stations, let each child hold a candle or crucifix, and end with one simple prayer asking Jesus for mercy and love.
        </p>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Related Sorrowful Mysteries links</h2>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="/devotions/holy-rosary/sorrowful-mysteries" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Sorrowful Mysteries
          </a>
          <a href="/devotions/holy-rosary/sorrowful-mysteries/carrying-of-the-cross" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Carrying of the Cross
          </a>
          <a href="/devotions/holy-rosary/sorrowful-mysteries/crucifixion" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
            Crucifixion
          </a>
        </div>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <h2 className="font-display text-4xl font-semibold text-navy">Closing Prayer</h2>
        <p className="daily-prayer-readable mt-5 text-base leading-8 text-navy">
          Lord Jesus, let the way of the Cross teach me repentance, patience, mercy, and hope. Draw me close to You and prepare my heart for the joy of Easter. Amen.
        </p>
      </section>
    </div>
  );
}

