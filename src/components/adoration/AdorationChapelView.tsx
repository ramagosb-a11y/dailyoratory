"use client";

import { useState } from "react";
import {
  formatAdorationDateTime,
  getAdorationLocationLabel,
  getAdorationStatusMeta,
  getAdorationVerificationLabel,
} from "@/lib/adoration";
import type { LiveAdorationStreamRecord } from "@/types/adoration";
import { AdorationEmbed } from "./AdorationEmbed";
import { AdorationPrayerPanel } from "./AdorationPrayerPanel";
import { AdorationReportButton } from "./AdorationReportButton";
import { AdorationStatusBadge } from "./AdorationStatusBadge";

export function AdorationChapelView({ stream }: { stream: LiveAdorationStreamRecord }) {
  const [quietMode, setQuietMode] = useState(false);
  const statusMeta = getAdorationStatusMeta(stream.streamStatus);

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : ""}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <AdorationStatusBadge status={stream.streamStatus} />
              {stream.isTwentyFourSeven ? <span className="season-pill border-gold text-gold">24/7</span> : null}
              {stream.verificationStatus === "verified" ? <span className="season-pill border-success text-success">Verified</span> : null}
              <span className="season-pill">{stream.language}</span>
            </div>
            <h1 className={`font-display mt-5 text-5xl font-semibold leading-none sm:text-6xl ${quietMode ? "text-ivory" : "text-navy"}`}>
              {stream.chapelName}
            </h1>
            <p className={`mt-3 text-base font-semibold ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              {stream.parishOrCommunityName}
            </p>
            <p className={`mt-5 text-lg leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{stream.description}</p>
          </header>

          <AdorationEmbed stream={stream} quietMode={quietMode} />

          {!quietMode ? (
            <>
              <section className="dashboard-card p-5">
                <p className="text-xs font-bold uppercase text-burgundy">Prayer focus</p>
                <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{stream.prayerFocus}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{statusMeta.description}</p>
              </section>
              <AdorationPrayerPanel compact />
            </>
          ) : (
            <p className="rounded-md border border-gold-soft/40 p-4 text-sm leading-7 text-stone-soft">
              Quiet mode keeps the chapel simple. Stay for a few minutes of silence, then close with thanksgiving.
            </p>
          )}
        </div>

        <aside className={quietMode ? "rounded-md border border-gold-soft/40 p-5 lg:sticky lg:top-24" : "dashboard-card p-5 lg:sticky lg:top-24"}>
          <p className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Chapel details</p>
          <button
            type="button"
            onClick={() => setQuietMode((value) => !value)}
            className={quietMode ? "btn btn-outline-inverse focus-ring mt-4 w-full" : "btn btn-primary focus-ring mt-4 w-full"}
            aria-pressed={quietMode}
          >
            {quietMode ? "Leave quiet mode" : "Quiet mode"}
          </button>
          <dl className={`mt-5 grid gap-4 text-sm ${quietMode ? "text-stone-soft" : "text-muted"}`}>
            <Detail label="Location" value={getAdorationLocationLabel(stream)} quietMode={quietMode} />
            <Detail label="Country" value={stream.location.country} quietMode={quietMode} />
            <Detail label="Language" value={stream.language} quietMode={quietMode} />
            <Detail label="Last checked" value={formatAdorationDateTime(stream.lastCheckedAt)} quietMode={quietMode} />
            <Detail label="Verification" value={getAdorationVerificationLabel(stream)} quietMode={quietMode} />
          </dl>
          {!quietMode ? (
            <div className="mt-6 border-t border-stone pt-5">
              <AdorationReportButton streamId={stream.id} />
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

function Detail({ label, value, quietMode }: { label: string; value: string; quietMode: boolean }) {
  return (
    <div className={quietMode ? "border-t border-gold-soft/30 pt-3 first:border-t-0 first:pt-0" : "border-t border-stone pt-3 first:border-t-0 first:pt-0"}>
      <dt className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>{label}</dt>
      <dd className={`mt-1 font-semibold ${quietMode ? "text-ivory" : "text-navy"}`}>{value}</dd>
    </div>
  );
}
