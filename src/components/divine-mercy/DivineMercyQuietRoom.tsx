"use client";

import { useState } from "react";

const mercyStreams = [
  {
    id: "divine-mercy-in-song",
    title: "Divine Mercy in Song Prayer Room 24/7 | The Chaplet of Divine Mercy in Song",
    shortTitle: "Divine Mercy in Song",
    author: "Trish Short",
    description:
      "Enter a 24/7 Divine Mercy prayer room with the Chaplet of Divine Mercy in song. Pray for mercy, conversion, the dying, and the whole world.",
    watchUrl: "https://www.youtube.com/live/QFi2WVGfXMQ?si=pGdZUGI_YOj5Mkfw",
    embedUrl: "https://www.youtube-nocookie.com/embed/QFi2WVGfXMQ?autoplay=0&rel=0&modestbranding=1",
    language: "English",
  },
];

const chapletSections = [
  {
    title: "1. Sign of the Cross",
    body: ["In the name of the Father, and of the Son, and of the Holy Spirit. Amen."],
  },
  {
    title: "2. Opening Recollection",
    note: "Optional. Use an approved Divine Mercy prayer source if praying the full traditional opening.",
    body: [
      "Pause before Christ with trust. Ask for mercy for yourself, for sinners, for the dying, and for the whole world.",
      "Offer this Chaplet with confidence in the mercy of Jesus and with a desire for conversion of heart.",
    ],
  },
  {
    title: "3. Our Father",
    body: [
      "Our Father, who art in heaven, hallowed be thy name; thy kingdom come, thy will be done on earth as it is in heaven.",
      "Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.",
      "Amen.",
    ],
  },
  {
    title: "4. Hail Mary",
    body: [
      "Hail, Mary, full of grace, the Lord is with you; blessed are you among women, and blessed is the fruit of your womb, Jesus.",
      "Holy Mary, Mother of God, pray for us sinners now and at the hour of our death.",
      "Amen.",
    ],
  },
  {
    title: "5. The Apostles' Creed",
    body: [
      "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead.",
      "I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting.",
      "Amen.",
    ],
  },
  {
    title: "6. For Each of the Five Decades",
    body: [
      "On each Our Father bead of the rosary, pray:",
      "Offer to the Father the Body and Blood, Soul and Divinity of Jesus Christ in atonement for sins.",
    ],
  },
  {
    title: "7. On Each of the Ten Hail Mary Beads",
    body: ["Invoke the mercy of Jesus through His sorrowful Passion for yourself and for the whole world."],
  },
  {
    title: "8. Repeat for the Remaining Decades",
    body: [
      "Continue the same pattern for all five decades, slowly and with trust.",
    ],
  },
  {
    title: "9. Conclusion",
    body: ["Close with the traditional Divine Mercy conclusion from an approved prayer source, or remain in silence asking God for mercy."],
  },
  {
    title: "10. Closing Prayer",
    note: "Optional.",
    body: [
      "Jesus, I trust in You. Increase my faith, deepen my repentance, and teach me to receive and share Your mercy. Amen.",
    ],
  },
];

export function DivineMercyQuietRoom() {
  const [quietMode, setQuietMode] = useState(true);
  const [selectedStreamId, setSelectedStreamId] = useState(mercyStreams[0].id);
  const stream = mercyStreams.find((item) => item.id === selectedStreamId) ?? mercyStreams[0];

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : "rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-6"}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <span className="season-pill border-gold text-gold">24/7</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Divine Mercy</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Chaplet</span>
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              Divine Mercy quiet room
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
            Quiet mode keeps the Chaplet room simple. Begin when ready, pray for mercy with trust, and commend the whole
            world to the Heart of Jesus.
          </p>

          <section className={quietMode ? "rounded-md border border-gold-soft/40 p-5" : "dashboard-card p-5"}>
            <p className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Choose a Divine Mercy stream</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {mercyStreams.map((item) => {
                const selected = item.id === stream.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedStreamId(item.id)}
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
                    <span className={`block text-sm font-bold ${quietMode ? "text-ivory" : "text-navy"}`}>{item.shortTitle}</span>
                    <span className={`mt-2 block text-xs leading-5 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{item.author}</span>
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
            <Detail label="Source" value={stream.author} quietMode={quietMode} />
            <Detail label="Status" value="24/7 live stream" quietMode={quietMode} />
            <Detail label="Prayer" value="Divine Mercy Chaplet" quietMode={quietMode} />
            <Detail label="Language" value={stream.language} quietMode={quietMode} />
          </dl>
          {!quietMode ? (
            <a href={stream.watchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring mt-6 w-full">
              Open on YouTube
            </a>
          ) : null}
        </aside>
      </div>

      <ChapletPrayerGuide quietMode={quietMode} />
    </div>
  );
}

function ChapletPrayerGuide({ quietMode }: { quietMode: boolean }) {
  return (
    <section className={quietMode ? "mt-8 rounded-md border border-gold-soft/40 p-5 sm:p-6" : "mt-8 dashboard-card p-5 sm:p-6"}>
      <div className="max-w-3xl">
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
          Chaplet prayers
        </p>
        <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
          Pray the Divine Mercy Chaplet.
        </h2>
        <p className={`mt-4 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Keep the prayers nearby while using the quiet room. The Chaplet is a prayer of trust in Jesus and intercession
          for mercy upon the whole world.
        </p>
        <p className={`mt-3 text-xs leading-6 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Copyright note: this guide uses traditional prayers and original Daily Oratory summaries. For the full official
          Divine Mercy Chaplet text and Diary-based optional prayers, use an approved printed or official source.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {chapletSections.map((section) => (
          <article key={section.title} className={quietMode ? "rounded-md border border-gold-soft/30 p-5" : "card p-5"}>
            <h3 className={`font-display text-3xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
              {section.title}
            </h3>
            {section.note ? (
              <p className={`mt-2 text-xs font-bold uppercase leading-5 ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
                {section.note}
              </p>
            ) : null}
            <div className={`mt-4 grid gap-3 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
              {section.body.map((line) => (
                <p key={line}>{line}</p>
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
