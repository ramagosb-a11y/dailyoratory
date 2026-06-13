"use client";

import { TrackedLink } from "@/components/analytics/TrackedLink";
import { SectionHeader } from "@/components/section-header";
import {
  prophecySeriesPlaylistUrl,
  prophecySeriesPremiereDisplayDate,
  prophecySeriesPremiereDisplayTime,
} from "@/data/prophecySeries";
import { trackEvent } from "@/lib/analytics";

export function ProphecySubscribeCTA() {
  async function handleShare() {
    try {
      trackEvent("prophecy_series_share_click", {
        section: "subscribe-cta",
        destination: prophecySeriesPlaylistUrl,
      });

      if (navigator.share) {
        await navigator.share({
          title: "Prophecy Series | Daily Oratory",
          text: "Watch the Daily Oratory Prophecy Series and follow new Sunday episodes.",
          url: prophecySeriesPlaylistUrl,
        });
        return;
      }

      await navigator.clipboard.writeText(prophecySeriesPlaylistUrl);
    } catch {
      return;
    }
  }

  return (
    <section className="mt-14 rounded-[2rem] border border-gold/50 bg-[linear-gradient(135deg,rgba(120,25,44,0.08),rgba(214,174,84,0.15),rgba(249,244,233,0.96))] px-6 py-10 shadow-soft sm:px-8">
      <SectionHeader
        eyebrow="Do Not Miss It"
        title="Do Not Miss an Episode"
        summary={`The Prophecy Series premieres ${prophecySeriesPremiereDisplayDate} at ${prophecySeriesPremiereDisplayTime}, with a new episode every Sunday at 6:00 PM CST. Open the playlist, like the videos, subscribe, and turn on notifications so you receive alerts when each episode drops.`}
      />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <TrackedLink
          href={prophecySeriesPlaylistUrl}
          external
          eventName="prophecy_series_playlist_click"
          eventParams={{ section: "subscribe-cta", destination: prophecySeriesPlaylistUrl }}
          className="btn btn-liturgical daily-button-readable min-h-12 justify-center"
        >
          Watch the Playlist
        </TrackedLink>
        <TrackedLink
          href={prophecySeriesPlaylistUrl}
          external
          eventName="prophecy_series_subscribe_click"
          eventParams={{ section: "subscribe-cta", destination: prophecySeriesPlaylistUrl }}
          className="btn btn-secondary daily-button-readable min-h-12 justify-center"
        >
          Subscribe and Set Notifications
        </TrackedLink>
        <button
          type="button"
          onClick={handleShare}
          className="btn btn-secondary daily-button-readable min-h-12 justify-center"
        >
          Share This Series
        </button>
      </div>
    </section>
  );
}
