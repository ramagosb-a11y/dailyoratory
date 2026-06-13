"use client";

import { useState } from "react";

const stream = {
  title: "Stations of the Resurrection | Via Lucis Meditation",
  author: "Gospel Movements",
  description:
    "A quiet Via Lucis meditation for walking with the Risen Christ through the Fourteen Stations of the Resurrection.",
  watchUrl: "https://youtu.be/xh75L5a3Vvs?si=ZJxgZuimj4zoRDKl",
  embedUrl: "https://www.youtube-nocookie.com/embed/xh75L5a3Vvs?autoplay=0&rel=0&modestbranding=1",
};

const prayerBookUrl = "https://rccav.org/wp-content/uploads/2023/05/Way-of-Light-Prayer-Book-Final.pdf";

const stations = [
  "Jesus Rises from the Dead",
  "The Disciples Discover the Empty Tomb",
  "The Risen Lord Appears to Mary Magdalene",
  "Jesus Appears on the Road to Emmaus",
  "Jesus Is Known in the Breaking of the Bread",
  "Jesus Appears to His Disciples",
  "Jesus Gives the Disciples His Peace and the Power to Forgive Sins",
  "Jesus Strengthens the Faith of Thomas",
  "Jesus Appears by the Sea of Tiberias",
  "Jesus Forgives Peter and Entrusts Him to Feed His Sheep",
  "Jesus Commissions the Disciples on the Mountain",
  "Jesus Ascends to the Father",
  "Mary and the Disciples Wait in Prayer",
  "The Holy Spirit Descends at Pentecost",
];

export function ResurrectionStationsQuietRoom() {
  const [quietMode, setQuietMode] = useState(true);

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : "rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-6"}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <span className="season-pill border-gold text-gold">Easter</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Via Lucis</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Fourteen Stations</span>
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              Resurrection quiet room
            </p>
            <h1 className={`font-display mt-3 text-4xl font-semibold leading-tight sm:text-6xl ${quietMode ? "text-ivory" : "text-navy"}`}>
              {stream.title}
            </h1>
            <p className={`mt-3 text-base font-semibold ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>{stream.author}</p>
            <p className={`mt-5 text-lg leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{stream.description}</p>
          </header>

          <div className={`overflow-hidden rounded-md border ${quietMode ? "border-gold bg-navy" : "border-stone bg-navy"}`}>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={stream.embedUrl}
                title={stream.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <p className={quietMode ? "rounded-md border border-gold-soft/40 p-4 text-sm leading-7 text-stone-soft" : "card-parchment p-4 text-sm leading-7 text-muted"}>
            Quiet mode keeps the meditation simple. Walk station by station with the Risen Christ and ask Him to renew
            your faith, hope, and love.
          </p>
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
            <Detail label="Source" value={stream.author} quietMode={quietMode} />
            <Detail label="Meditation" value="Fourteen Stations of the Resurrection" quietMode={quietMode} />
            <Detail label="Devotion" value="Via Lucis" quietMode={quietMode} />
          </dl>
          <div className="mt-6 grid gap-3">
            <a href={prayerBookUrl} target="_blank" rel="noopener noreferrer" className={quietMode ? "btn btn-outline-inverse focus-ring w-full" : "btn btn-primary focus-ring w-full"}>
              Open prayer booklet
            </a>
            {!quietMode ? (
              <a href={stream.watchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring w-full">
                Open on YouTube
              </a>
            ) : null}
          </div>
        </aside>
      </div>

      <StationsGuide quietMode={quietMode} />
    </div>
  );
}

function StationsGuide({ quietMode }: { quietMode: boolean }) {
  return (
    <section className={quietMode ? "mt-8 rounded-md border border-gold-soft/40 p-5 sm:p-6" : "mt-8 dashboard-card p-5 sm:p-6"}>
      <div className="max-w-3xl">
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
          The Fourteen Stations of the Resurrection
        </p>
        <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
          Walk the Way of Light.
        </h2>
        <p className={`mt-4 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Use the linked Way of Light prayer booklet for the full prayers and reflections while the video guides the
          meditation.
        </p>
        <a href={prayerBookUrl} target="_blank" rel="noopener noreferrer" className={quietMode ? "btn btn-outline-inverse focus-ring mt-5 inline-flex" : "btn btn-primary focus-ring mt-5 inline-flex"}>
          Open Way of Light Prayer Book
        </a>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {stations.map((station, index) => (
          <article key={station} className={quietMode ? "rounded-md border border-gold-soft/30 p-4" : "card p-4"}>
            <p className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Station {index + 1}</p>
            <h3 className={`font-display mt-2 text-2xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
              {station}
            </h3>
          </article>
        ))}
      </div>

      <article className={quietMode ? "mt-6 rounded-md border border-gold-soft/40 p-5" : "mt-6 card-parchment p-5"}>
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Credit</p>
        <div className={`mt-3 grid gap-3 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          <p>
            The Via Lucis is a modern Catholic devotion developed in the 20th century and widely promoted by Fr. Sabino
            Palumbieri, S.D.B. It has also been encouraged by the Church as a meaningful Easter devotion.
          </p>
          <p>May this meditation help you walk with the Risen Christ and be renewed in faith, hope, and love.</p>
        </div>
      </article>
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
