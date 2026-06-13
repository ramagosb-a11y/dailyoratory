"use client";

import { useState } from "react";

const rosaryVideos = [
  {
    id: "latin-chant-rosary",
    title: "Gregorian Chant Rosary in Latin Prayer Room | Sanctum Rosarium in Chant | Latin Rosary",
    shortTitle: "Latin chant Rosary",
    author: "Journey Deeper",
    description:
      "In this Gregorian Chant Rosary in Latin Prayer Room, pray the Rosary in Latin chant. This 24/7 live stream offers a constant quiet place for Marian prayer.",
    watchUrl: "https://www.youtube.com/live/DBBMCgUqQqE?si=I3YELKqYxV9Avc0b",
    embedUrl: "https://www.youtube-nocookie.com/embed/DBBMCgUqQqE?autoplay=0&rel=0&modestbranding=1",
    language: "Latin chant",
  },
  {
    id: "all-mysteries-rosary",
    title: "24/7 Holy Rosary | All 20 Mysteries | Guided Prayer with Beads",
    shortTitle: "All 20 Mysteries",
    author: "The Power of Prayer",
    description:
      "Pray through all 20 mysteries of the Holy Rosary with a continuous guided prayer stream, suitable for quiet prayer, family prayer, and daily Marian devotion.",
    watchUrl: "https://www.youtube.com/live/Ui329D2BJ20?si=-kabk8aecsLqZThf",
    embedUrl: "https://www.youtube-nocookie.com/embed/Ui329D2BJ20?autoplay=0&rel=0&modestbranding=1",
    language: "English",
  },
];

const rosaryPrayers = [
  {
    title: "The Apostles' Creed",
    body: [
      "I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting.",
      "Amen.",
    ],
  },
  {
    title: "The Our Father",
    body: [
      "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread, and forgive us our trespasses as we forgive those who trespass against us, and lead us not into temptation, but deliver us from evil.",
      "Amen.",
    ],
  },
  {
    title: "The Hail Mary",
    body: [
      "Hail Mary, full of grace, the Lord is with you; blessed are you among women, and blessed is the fruit of your womb, Jesus. Holy Mary, Mother of God, pray for us sinners now and at the hour of our death.",
      "Amen.",
    ],
  },
  {
    title: "The Glory Be",
    body: [
      "Glory be to the Father, the Son, and the Holy Spirit; as it was in the beginning, is now, and ever shall be, world without end.",
      "Amen.",
    ],
  },
  {
    title: "Fatima Prayer",
    body: [
      "O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to heaven, especially those most in need of Thy mercy.",
    ],
  },
  {
    title: "The Hail Holy Queen",
    body: [
      "Hail, holy Queen, mother of mercy, our life, our sweetness, and our hope. To you we cry, poor banished children of Eve; to you we send up our sighs, mourning and weeping in this valley of tears. Turn, then, most gracious advocate, your eyes of mercy toward us; and after this, our exile, show unto us the blessed fruit of your womb, Jesus. O clement, O loving, O sweet Virgin Mary.",
      "V. Pray for us, O holy Mother of God.",
      "R. That we may be made worthy of the promises of Christ.",
    ],
  },
  {
    title: "The Closing Prayer to the Rosary",
    body: [
      "Let us pray: O God, whose Only Begotten Son, by his life, Death, and Resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord.",
      "Amen.",
    ],
  },
];

export function RosaryQuietRoom() {
  const [quietMode, setQuietMode] = useState(true);
  const [selectedVideoId, setSelectedVideoId] = useState("all-mysteries-rosary");
  const rosaryVideo = rosaryVideos.find((video) => video.id === selectedVideoId) ?? rosaryVideos[0];

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : "rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-6"}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <span className={quietMode ? "season-pill border-gold text-gold" : "season-pill border-gold text-gold"}>24/7</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Live Rosary</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Latin chant</span>
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              Rosary quiet room
            </p>
            <h1 className={`font-display mt-3 text-4xl font-semibold leading-tight sm:text-6xl ${quietMode ? "text-ivory" : "text-navy"}`}>
              {rosaryVideo.title}
            </h1>
            <p className={`mt-3 text-base font-semibold ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>{rosaryVideo.author}</p>
            <p className={`mt-5 text-lg leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{rosaryVideo.description}</p>
          </header>

          <div className={`overflow-hidden rounded-md border ${quietMode ? "border-gold bg-navy" : "border-stone bg-navy"}`}>
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={rosaryVideo.embedUrl}
                title={rosaryVideo.title}
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {!quietMode ? (
            <section className="dashboard-card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Prayer focus</p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-navy">Pray the Rosary with Mary.</h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Settle into the mysteries of Christ with a quiet heart. The video is embedded without autoplay so you can
                begin prayer intentionally.
              </p>
            </section>
          ) : (
            <p className="rounded-md border border-gold-soft/40 p-4 text-sm leading-7 text-stone-soft">
              Quiet mode keeps the Rosary room simple. Begin when ready, pray at your pace, and remain with Mary in the
              mysteries of Christ.
            </p>
          )}

          <section className={quietMode ? "rounded-md border border-gold-soft/40 p-5" : "dashboard-card p-5"}>
            <p className={`text-xs font-bold uppercase ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Choose a Rosary stream</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {rosaryVideos.map((video) => {
                const selected = video.id === rosaryVideo.id;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => setSelectedVideoId(video.id)}
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
                    <span className={`block text-sm font-bold ${quietMode ? "text-ivory" : "text-navy"}`}>{video.shortTitle}</span>
                    <span className={`mt-2 block text-xs leading-5 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{video.author}</span>
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
            <Detail label="Source" value={rosaryVideo.author} quietMode={quietMode} />
            <Detail label="Status" value="24/7 live stream" quietMode={quietMode} />
            <Detail label="Prayer" value="Holy Rosary" quietMode={quietMode} />
            <Detail label="Language" value={rosaryVideo.language} quietMode={quietMode} />
          </dl>
          {!quietMode ? (
            <a
              href={rosaryVideo.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary focus-ring mt-6 w-full"
            >
              Open on YouTube
            </a>
          ) : null}
        </aside>
      </div>

      <RosaryPrayerGuide quietMode={quietMode} />
    </div>
  );
}

function RosaryPrayerGuide({ quietMode }: { quietMode: boolean }) {
  return (
    <section className={quietMode ? "mt-8 rounded-md border border-gold-soft/40 p-5 sm:p-6" : "mt-8 dashboard-card p-5 sm:p-6"}>
      <div className="max-w-3xl">
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Rosary prayers</p>
        <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
          Pray with the words of the Rosary.
        </h2>
        <p className={`mt-4 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Keep these prayers nearby while using either Rosary quiet room. Move slowly, meditate on the mysteries, and
          let the prayer draw your heart to Christ through Mary.
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        {rosaryPrayers.map((prayer) => (
          <article key={prayer.title} className={quietMode ? "rounded-md border border-gold-soft/30 p-5" : "card p-5"}>
            <h3 className={`font-display text-3xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
              {prayer.title}
            </h3>
            <div className={`mt-4 grid gap-3 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
              {prayer.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>

      <article className={quietMode ? "mt-6 rounded-md border border-gold-soft/40 p-5" : "mt-6 card-parchment p-5"}>
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
          Recitation of the Marian Rosary
        </p>
        <h3 className={`font-display mt-2 text-3xl font-semibold ${quietMode ? "text-ivory" : "text-navy"}`}>
          Rosarii marialis recitatio
        </h3>
        <div className={`mt-4 grid gap-3 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          <p>
            A plenary indulgence is granted if the Rosary is recited in a church or public oratory, or in a family group,
            a religious Community, or pious Association; a partial indulgence is granted in other circumstances.
          </p>
          <p>
            The Rosary is a formula of prayer made up of decades of Hail Marys with an Our Father before each decade,
            accompanied by pious meditation on the mysteries of our Redemption.
          </p>
          <ol className="grid list-decimal gap-2 pl-5">
            <li>The recitation of a third part only of the Rosary suffices, but the five decades must be recited continuously.</li>
            <li>The vocal recitation must be accompanied by pious meditation on the mysteries.</li>
            <li>
              In public recitation, the mysteries must be announced in the manner customary in the place; for private
              recitation, it suffices if the vocal recitation is accompanied by meditation on the mysteries.
            </li>
            <li>
              For those belonging to the Oriental rites, the Patriarchs can determine other prayers in honor of the
              Blessed Virgin Mary; to those prayers are accorded the same indulgences as for the Rosary.
            </li>
          </ol>
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
