"use client";

import { useState } from "react";
import {
  formatAdorationDateTime,
  getAdorationLocationLabel,
  getAdorationStatusMeta,
  getAdorationVerificationLabel,
  getSafeAdorationEmbed,
} from "@/lib/adoration";
import type { LiveAdorationStreamRecord } from "@/types/adoration";
import { trackEvent } from "@/lib/analytics";
import { AdorationReportButton } from "./AdorationReportButton";

const adorationHymns = [
  {
    title: "O Saving Victim",
    body: [
      "O saving Victim, open wide",
      "The gate of heaven to us below.",
      "Our foes press on from every side;",
      "Your aid supply, your strength bestow.",
      "To your great name be endless praise,",
      "Immortal Godhead, One in Three;",
      "O grant us endless length of days",
      "In our true native land with thee.",
      "Amen.",
    ],
  },
  {
    title: "Tantum Ergo",
    body: [
      "Down in adoration falling,",
      "This great Sacrament we hail;",
      "Over ancient forms of worship",
      "Newer rites of grace prevail;",
      "Faith will tell us Christ is present,",
      "When our human senses fail.",
      "To the everlasting Father,",
      "And the Son who made us free,",
      "And the Spirit, God proceeding",
      "From them Each eternally,",
      "Be salvation, honor, blessing,",
      "Might and endless majesty.",
      "Amen.",
    ],
  },
  {
    title: "Holy God, We Praise Thy Name",
    body: [
      "Holy God, we praise thy name;",
      "Lord of all, we bow before thee;",
      "All on earth thy scepter claim;",
      "All in heaven above adore thee.",
      "Infinite thy vast domain,",
      "Everlasting is thy reign.",
      "Hark, the loud celestial hymn;",
      "Angel choirs above are raising;",
      "Cherubim and Seraphim,",
      "In unceasing chorus praising,",
      'Fill the heavens with sweet accord: "Holy, holy, holy, Lord!"',
    ],
  },
];

export function AdorationQuietRoom({
  streams,
  initialStreamId,
}: {
  streams: LiveAdorationStreamRecord[];
  initialStreamId?: string;
}) {
  const [quietMode, setQuietMode] = useState(true);
  const [selectedStreamId, setSelectedStreamId] = useState(initialStreamId ?? streams[0]?.id ?? "");
  const stream = streams.find((item) => item.id === selectedStreamId) ?? streams[0];
  const safeEmbed = stream ? getSafeAdorationEmbed(stream) : null;
  const statusMeta = stream ? getAdorationStatusMeta(stream.streamStatus) : null;

  if (!stream) {
    return (
      <section className="dashboard-card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Live Adoration</p>
        <h1 className="font-display mt-3 text-5xl font-semibold leading-tight text-navy">No streams are available.</h1>
        <p className="mt-4 text-base leading-8 text-muted">
          Return soon for reviewed Eucharistic Adoration streams, or remain here in quiet prayer with the Lord.
        </p>
      </section>
    );
  }

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : "rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-6"}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <span className={stream.isTwentyFourSeven ? "season-pill border-gold text-gold" : "season-pill"}>{stream.isTwentyFourSeven ? "24/7" : "Live"}</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Eucharistic Adoration</span>
              {stream.verificationStatus === "verified" ? <span className="season-pill border-success text-success">Verified</span> : null}
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>{stream.language}</span>
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              Live Adoration quiet room
            </p>
            <h1 className={`font-display mt-3 text-4xl font-semibold leading-tight sm:text-6xl ${quietMode ? "text-ivory" : "text-navy"}`}>
              {stream.chapelName}
            </h1>
            <p className={`mt-3 text-base font-semibold ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              {stream.parishOrCommunityName}
            </p>
            <p className={`mt-5 text-lg leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{stream.description}</p>
          </header>

          <div className={`overflow-hidden rounded-md border ${quietMode ? "border-gold bg-navy" : "border-stone bg-navy"}`}>
            {safeEmbed ? (
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={safeEmbed.embedUrl}
                  title={`${stream.chapelName} Adoration stream`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="p-6">
                <p className={quietMode ? "text-stone-soft" : "text-ivory"}>This stream needs review before it can be embedded.</p>
              </div>
            )}
          </div>

          {!quietMode ? (
            <section className="dashboard-card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Prayer focus</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{stream.prayerFocus}</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                {statusMeta?.description ?? "Enter this chapel with reverence and remain with Jesus in quiet prayer."}
              </p>
            </section>
          ) : (
            <p className="rounded-md border border-gold-soft/40 p-4 text-sm leading-7 text-stone-soft">
              Quiet mode keeps the Adoration room simple. Begin when ready, remain with Jesus in silence, and close with
              thanksgiving before leaving.
            </p>
          )}

          <section className={quietMode ? "rounded-md border border-gold-soft/40 p-5" : "dashboard-card p-5"}>
            <p className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Choose an Adoration stream</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {streams.map((item) => {
                const selected = item.id === stream.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedStreamId(item.id);
                      trackEvent("adoration_stream_open", { page_path: "/adoration", stream_name: item.chapelName });
                    }}
                    className={`focus-ring rounded-md border p-4 text-left transition ${
                      selected
                        ? quietMode
                          ? "border-gold bg-gold/10"
                          : "border-gold bg-gold-soft"
                        : quietMode
                          ? "border-gold-soft/40 hover:border-gold"
                          : "border-stone bg-ivory hover:border-gold"
                    }`}
                    aria-pressed={selected}
                  >
                    <span className={`block text-sm font-bold ${quietMode ? "text-ivory" : "text-navy"}`}>{item.chapelName}</span>
                    <span className={`mt-2 block text-xs leading-5 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
                      {item.parishOrCommunityName}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        <aside className={quietMode ? "rounded-md border border-gold-soft/40 p-5 lg:sticky lg:top-24" : "dashboard-card p-5 lg:sticky lg:top-24"}>
          <p className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Room details</p>
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
            <Detail label="Language" value={stream.language} quietMode={quietMode} />
            <Detail label="Last checked" value={formatAdorationDateTime(stream.lastCheckedAt)} quietMode={quietMode} />
            <Detail label="Verification" value={getAdorationVerificationLabel(stream)} quietMode={quietMode} />
          </dl>
          {!quietMode ? (
            <div className="mt-6 grid gap-3 border-t border-stone pt-5">
              <a href={stream.streamUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring w-full">
                Open source stream
              </a>
              <AdorationReportButton streamId={stream.id} />
            </div>
          ) : null}
        </aside>
      </div>

      <AdorationPrayerGuide quietMode={quietMode} />
    </div>
  );
}

function AdorationPrayerGuide({ quietMode }: { quietMode: boolean }) {
  return (
    <section className={quietMode ? "mt-8 rounded-md border border-gold-soft/40 p-5 sm:p-6" : "mt-8 dashboard-card p-5 sm:p-6"}>
      <div className="max-w-3xl">
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
          Adoration prayers
        </p>
        <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
          Pray before Christ in the Eucharist.
        </h2>
        <p className={`mt-4 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Keep these hymns close while you remain in the quiet room. They may be used at the beginning or end of prayer,
          or simply read slowly as an act of Eucharistic love.
        </p>
        <p className={`mt-3 text-xs leading-6 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Source note: these are traditional Eucharistic hymn texts. The exact English translation source should remain
          documented before adding more hymn lyrics.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {adorationHymns.map((prayer) => (
          <article key={prayer.title} className={quietMode ? "rounded-md border border-gold-soft/30 p-5" : "card p-5"}>
            <h3 className={`font-display text-3xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
              {prayer.title}
            </h3>
            <div className={`mt-4 grid gap-2 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
              {prayer.body.map((line, index) => (
                <p key={`${prayer.title}-${index}`}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
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
