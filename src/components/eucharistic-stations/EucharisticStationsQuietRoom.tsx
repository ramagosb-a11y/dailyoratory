"use client";

import { useState } from "react";

const stream = {
  title: "The Stations of the Eucharist: Visio Divina",
  author: "Gospel Movements",
  description:
    "A prayerful video meditation on the Fourteen Stations of the Eucharist, helping the faithful contemplate the Real Presence of Christ and the mystery of the Holy Eucharist.",
  watchUrl: "https://youtu.be/T72FnPcM1QU?si=FbD-SFFKWIapFFUX",
  embedUrl: "https://www.youtube-nocookie.com/embed/T72FnPcM1QU?autoplay=0&rel=0&modestbranding=1",
};

const refrain = {
  leader: "O Sacrament most Holy, O Sacrament Divine",
  response: "All praise and all thanksgiving, be every moment Thine.",
};

const stations = [
  "The Sacrifice of Abel",
  "The Sacrifice of Abraham",
  "The Offering of Melchizedek",
  "The Jewish Passover",
  "The Manna from Heaven",
  "The Ark of the Covenant",
  "Bethlehem, House of Bread",
  "St. John the Baptist Points to the Lamb of God",
  "The Wedding Feast at Cana",
  "Multiplication of the Loaves",
  "Bread of Life Discourse",
  "The Last Supper",
  "Emmaus",
  "The Wedding Feast of the Lamb",
].map((title, index) => ({
  title: `Station ${index + 1}: ${title}`,
  theme: [
    "Offer the first and best of your life to God.",
    "Trust the Father who provides the Lamb.",
    "Contemplate Christ the eternal Priest and King.",
    "Give thanks for the Blood of the Lamb.",
    "Receive Christ as food for the journey.",
    "Adore the Lord who dwells among His people.",
    "Welcome the Bread of Life with wonder.",
    "Behold Jesus, the Lamb of God.",
    "Ask Christ to transform your heart.",
    "Let the Lord satisfy your deepest hunger.",
    "Listen again to the promise of the Bread of Life.",
    "Enter the mystery of the first Mass.",
    "Recognize the risen Lord in the Breaking of the Bread.",
    "Hope for the wedding feast of the Lamb.",
  ][index],
  reflection:
    "Read the station title slowly, watch the meditation with reverence, and let this mystery draw your attention toward Jesus truly present in the Holy Eucharist.",
  prayer:
    "Lord Jesus, deepen my faith in Your Real Presence, purify my heart, and teach me to receive You with gratitude, humility, and love. Amen.",
}));

const formationNotes = [
  "Institution of the Eucharist: Jesus establishes the Eucharist at the Last Supper, giving Himself under the forms of bread and wine.",
  "Preparation for the Eucharist: We prepare to receive worthily through repentance, confession when needed, and a heart turned toward Christ.",
  "Real Presence of Christ: In the Most Blessed Sacrament, Jesus Christ is truly, really, and substantially present.",
  "Communion of Saints: The Eucharist unites the whole Church, living and deceased, in the offering of Christ.",
  "Eucharistic Adoration: Adoration deepens love for Jesus present in the Blessed Sacrament.",
  "Spiritual Nourishment: Holy Communion preserves, increases, and renews the life of grace.",
  "Eucharist and Mission: The Eucharist sends us forth to love Christ in the poor and vulnerable.",
  "Thanksgiving and Eucharist: Eucharist means thanksgiving, praise, sacrifice, presence, and communion.",
  "Eucharist and Community: The Eucharist makes the Church and deepens unity among believers.",
  "Eucharistic Sacrifice: The sacrifice of Christ and the sacrifice of the Eucharist are one single sacrifice.",
  "Eucharistic Communion: Holy Communion draws the faithful into intimate union with Christ.",
  "Healing through the Eucharist: The Eucharist cleanses from past sins and preserves from future sins.",
  "Mary and the Eucharist: With Mary and all the saints, the Church offers the Eucharistic sacrifice.",
  "Eucharistic Hope: The Eucharist is a pledge of the heavenly banquet and eternal life with God.",
];

export function EucharisticStationsQuietRoom() {
  const [quietMode, setQuietMode] = useState(true);

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : "rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-6"}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <span className="season-pill border-gold text-gold">Eucharist</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Fourteen Stations</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Visio Divina</span>
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              Eucharistic quiet room
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
            Quiet mode keeps the meditation simple. Watch, pray, and move through the stations slowly with thanksgiving
            for Jesus truly present in the Most Holy Eucharist.
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
            <Detail label="Meditation" value="Fourteen Stations of the Eucharist" quietMode={quietMode} />
            <Detail label="Focus" value="Real Presence" quietMode={quietMode} />
          </dl>
          {!quietMode ? (
            <a href={stream.watchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring mt-6 w-full">
              Open on YouTube
            </a>
          ) : null}
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
          The Fourteen Stations of the Eucharist
        </p>
        <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
          A journey of faith before the Blessed Sacrament.
        </h2>
        <p className={`mt-4 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          This devotional meditation is inspired by Catholic Eucharistic tradition, including the spirituality of St.
          Peter Julian Eymard and the Church's long-standing devotion to the Real Presence of Christ in the Holy
          Eucharist.
        </p>
        <p className={`mt-3 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          This page uses original Daily Oratory station prompts and links to an external video meditation. Do not
          reproduce any full authored booklet or external station text here unless permission or public-domain status is
          documented.
        </p>
      </div>

      <div className="mt-7 grid gap-4">
        {stations.map((station) => (
          <article key={station.title} className={quietMode ? "rounded-md border border-gold-soft/30 p-5" : "card p-5"}>
            <p className={`text-xs font-bold uppercase tracking-[0.14em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Station</p>
            <h3 className={`font-display mt-2 text-3xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
              {station.title}
            </h3>
            <div className={`mt-4 rounded-md border p-4 text-sm leading-7 ${quietMode ? "border-gold-soft/30 text-stone-soft" : "border-stone bg-ivory text-muted"}`}>
              <p>
                <span className="font-bold">Leader: </span>
                {refrain.leader}
              </p>
              <p>
                <span className="font-bold">Response: </span>
                {refrain.response} {station.theme}
              </p>
            </div>
            <p className={`mt-4 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>{station.reflection}</p>
            <p className={`mt-4 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
              <span className={`font-bold ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Let us pray: </span>
              {station.prayer}
            </p>
          </article>
        ))}
      </div>

      <article className={quietMode ? "mt-6 rounded-md border border-gold-soft/40 p-5" : "mt-6 card-parchment p-5"}>
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
          Eucharistic formation notes
        </p>
        <h3 className={`font-display mt-2 text-3xl font-semibold ${quietMode ? "text-ivory" : "text-navy"}`}>
          Grow in Eucharistic devotion.
        </h3>
        <div className={`mt-4 grid gap-3 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          {formationNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
          <p>
            Practices for growth include frequent reception of Holy Communion, Eucharistic Adoration, study and
            reflection, community involvement, and service to others inspired by the grace of the Eucharist.
          </p>
          <p>
            May this journey bring you closer to the heart of Jesus in the Eucharist, filling you with His love and peace.
          </p>
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
