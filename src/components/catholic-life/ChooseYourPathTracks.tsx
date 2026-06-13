"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { catholicLifeTracks } from "@/data/catholicLifeRoadmap";

export function ChooseYourPathTracks() {
  return (
    <section>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Choose your path</p>
      <h2 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">Choose Your Path</h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {catholicLifeTracks.map((track) => (
          <article key={track.id} className="card-parchment p-6 sm:p-7">
            <h3 className="font-display text-3xl font-semibold text-navy">{track.title}</h3>
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{track.description}</p>
            <ol className="mt-5 space-y-3">
              {track.steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-7 text-muted">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-ivory text-xs font-bold text-navy">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 space-y-3">
              {track.links.map((link) => (
                <TrackedLink
                  key={link.id}
                  href={link.href}
                  className="block rounded-[1.2rem] border border-stone/70 bg-white/70 px-4 py-3 transition hover:border-burgundy/40"
                  eventName="catholic_life_track_click"
                  eventParams={{ track: track.id, destination: link.href }}
                >
                  <span className="block text-sm font-semibold text-navy">{link.label}</span>
                  <span className="daily-readable-muted mt-1 block text-sm leading-6 text-muted">{link.description}</span>
                </TrackedLink>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
