"use client";

import { useEffect, useMemo, useState } from "react";
import { getCurrentPrayerRhythmSuggestion, getSuggestedHourForCurrentTime, getWorldPrayerLocations } from "@/lib/liturgyOfTheHours";

const locations = getWorldPrayerLocations();

function projectPoint(latitude: number, longitude: number) {
  const x = ((longitude + 180) / 360) * 100;
  const y = ((90 - latitude) / 180) * 100;
  return { x, y };
}

export function WorldPrayerGlobe() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  const suggestion = useMemo(() => (now ? getSuggestedHourForCurrentTime(now) : null), [now]);
  const rhythm = useMemo(() => (now ? getCurrentPrayerRhythmSuggestion(now) : null), [now]);

  return (
    <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="card overflow-hidden p-6">
        <p className="text-xs font-bold uppercase text-burgundy">World at prayer</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          The Church prays around the world
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          When you pray the Liturgy of the Hours, you are not praying alone. Priests, deacons,
          religious communities, seminarians, families, and lay Catholics across the world are
          praying the psalms and canticles of the Church throughout the day.
        </p>
        <div className="mt-6 rounded-md border border-stone/70 bg-navy/95 p-4 text-ivory">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <svg
                viewBox="0 0 100 100"
                role="img"
                aria-label="Illustrative globe showing Catholics praying the Liturgy of the Hours across the world."
                className="mx-auto block w-full max-w-[28rem]"
              >
                <defs>
                  <radialGradient id="globeGlow" cx="50%" cy="45%" r="65%">
                    <stop offset="0%" stopColor="#f7f1e4" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0d243d" stopOpacity="1" />
                  </radialGradient>
                  <clipPath id="globeClip">
                    <circle cx="50" cy="50" r="38" />
                  </clipPath>
                </defs>
                <circle cx="50" cy="50" r="38" fill="url(#globeGlow)" stroke="#d4b06a" strokeWidth="0.8" />
                <g clipPath="url(#globeClip)" opacity="0.35" stroke="#d8c7a1" strokeWidth="0.35" fill="none">
                  <ellipse cx="50" cy="50" rx="30" ry="38" />
                  <ellipse cx="50" cy="50" rx="18" ry="38" />
                  <ellipse cx="50" cy="50" rx="8" ry="38" />
                  <ellipse cx="50" cy="50" rx="38" ry="30" />
                  <ellipse cx="50" cy="50" rx="38" ry="18" />
                  <ellipse cx="50" cy="50" rx="38" ry="8" />
                </g>
                {locations.map((location) => {
                  const point = projectPoint(location.latitude, location.longitude);
                  return (
                    <g key={location.id}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="1.6"
                        fill="#f4d47f"
                        className="motion-safe:animate-pulse motion-reduce:animate-none"
                      />
                      <circle cx={point.x} cy={point.y} r="3.5" fill="#f4d47f" opacity="0.18" />
                    </g>
                  );
                })}
              </svg>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                Illustrative view - not live user data
              </p>
            </div>
            <div>
              <div className="rounded-md border border-gold/40 bg-ivory/10 p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold">
                  Suggested prayer for this time
                </p>
                <h3 className="font-display mt-2 text-3xl font-semibold text-ivory">
                  {suggestion?.title ?? "A suggested hour will appear here"}
                </h3>
                <p className="mt-2 text-sm leading-7 text-parchment">
                  {suggestion
                    ? `${suggestion.shortDescription} Times are simple suggestions for beginners, not strict rules.`
                    : "Based on your local time, this page will suggest one approachable hour to begin with."}
                </p>
                <p className="mt-4 text-sm font-semibold text-gold">
                  {rhythm ? `Helpful rhythm: ${rhythm.title}` : "Helpful rhythm: loading"}
                </p>
              </div>
              <div className="mt-4 space-y-2 text-sm leading-7 text-parchment">
                <p>Many Catholics pray these hours daily around the world.</p>
                <p>Join the prayer of the Church today.</p>
                <p>You are joining the Church&apos;s daily rhythm of praise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Illustrative regions</p>
        <div className="mt-4 space-y-3">
          {locations.map((location) => (
            <div key={location.id} className="rounded-md border border-stone/70 bg-parchment px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold text-navy">{location.label}</h3>
                <span className="season-pill">{location.region}</span>
              </div>
              <p className="mt-2 text-sm leading-7 text-muted">{location.prayerLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
