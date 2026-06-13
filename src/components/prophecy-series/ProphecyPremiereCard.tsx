"use client";

import { useEffect, useMemo, useState } from "react";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import {
  prophecySeriesPlaylistUrl,
  prophecySeriesPremiereDate,
  prophecySeriesPremiereDisplayDate,
  prophecySeriesPremiereDisplayTime,
} from "@/data/prophecySeries";

function getCountdownParts() {
  const target = new Date(prophecySeriesPremiereDate).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return { diff, days, hours, minutes };
}

export function ProphecyPremiereCard() {
  const [countdown, setCountdown] = useState(getCountdownParts);

  useEffect(() => {
    const interval = window.setInterval(() => setCountdown(getCountdownParts()), 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const statusLabel = useMemo(() => {
    if (countdown.diff <= 0) return "Now available";
    return `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m until premiere`;
  }, [countdown]);

  return (
    <section className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <SectionHeader
          eyebrow="Premiere"
          title="Series Premiere"
          summary="The first episode premieres June 7 at 6:00 PM CST. After that, a new episode will release every Sunday at 6:00 PM CST for 12 weeks."
        />
      </div>
      <div className="card-parchment flex flex-col justify-between p-6 sm:p-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Premiere time</p>
          <p className="font-display mt-3 text-4xl font-semibold leading-none text-navy sm:text-5xl">
            {prophecySeriesPremiereDisplayDate}
          </p>
          <p className="mt-4 text-lg font-semibold text-navy">{prophecySeriesPremiereDisplayTime}</p>
          <p className="mt-4 rounded-full border border-gold/50 bg-ivory px-4 py-2 text-sm font-semibold text-burgundy">
            {statusLabel}
          </p>
        </div>
        <TrackedLink
          href={prophecySeriesPlaylistUrl}
          external
          eventName="prophecy_series_playlist_click"
          eventParams={{ section: "premiere-card", destination: prophecySeriesPlaylistUrl }}
          className="btn btn-liturgical daily-button-readable mt-6 min-h-12 justify-center"
        >
          Open YouTube Playlist
        </TrackedLink>
      </div>
    </section>
  );
}
