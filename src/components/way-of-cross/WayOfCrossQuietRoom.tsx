"use client";

import { useState } from "react";

const stream = {
  title: "The Way of the Cross: Visio Divina",
  author: "Gospel Movements",
  description:
    "A visual meditation for praying the Way of the Cross with Christ, using the traditional stations and St. Alphonsus Liguori's prayerful reflections.",
  watchUrl: "https://youtu.be/6Kt_gFpTdBk?si=RxNJWCYhyutfXijZ",
  embedUrl: "https://www.youtube-nocookie.com/embed/6Kt_gFpTdBk?autoplay=0&rel=0&modestbranding=1",
};

const refrain = {
  celebrant: "We adore You, O Christ, and we praise You.",
  people: "Because by Your holy Cross and Resurrection, You have redeemed the world.",
  closingCelebrant: "You, who suffered wounds for us,",
  closingPeople: "Christ Jesus, have mercy on us.",
};

const stations = [
  {
    title: "The First Station: Jesus Is Condemned to Die",
    meditation:
      "Recall how Jesus was scourged and crowned with thorns, and how He was then unjustly condemned by Pilate to die on the Cross.",
    prayer:
      "Adorable Jesus, it was not Pilate; it was my own sins that condemned you to death. I pray you, by the merits of your sorrowful journey to Calvary, to assist my soul on its journey to eternity.",
  },
  {
    title: "The Second Station: Jesus Carries His Cross",
    meditation:
      "Recall how the heavy Cross was laid upon Jesus' bruised shoulders. He accepts it meekly, even joyously, because by that Cross He wills to redeem the world.",
    prayer:
      "O Jesus, by the merit of Your Cross, grant me the grace to accept meekly and cheerfully the difficulties in my life, that, by so doing, I may always be ready to take up my cross and follow You.",
  },
  {
    title: "The Third Station: Jesus Falls the First Time",
    meditation:
      "Laboring under the weight of the Cross, Jesus slowly sets forth on the way to Calvary. His agony in the garden has exhausted His Body; He is sore with blows and wounds; His strength fails Him; He falls to the ground under the Cross.",
    prayer:
      "It was for my sins, my Jesus, that You bore the heavy burden of Your Cross and fell under its weight. Let my remembrance of these sufferings make me careful, lest I fall into mortal sin.",
  },
  {
    title: "The Fourth Station: Jesus Meets His Sorrowful Mother",
    meditation:
      "Recall the meeting between Son and Mother on the way to Calvary. How oppressive that experience must have been for both of them. What a sword of anguish must have pierced Mary's maternal heart.",
    prayer:
      "My Jesus, by the compassion which You felt for Your Mother, have compassion on me, and permit me to share in her intercession with You. O Mary, afflicted Mother, intercede for me with your Son, that by His sufferings I may be saved from the wrath which is to come.",
  },
  {
    title: "The Fifth Station: Simon Helps Jesus Carry His Cross",
    meditation:
      "Recall how, as Jesus' strength continued to fail, He became unable to go on; and how the soldiers then seized Simon of Cyrene and forced him to help Jesus carry His Cross.",
    prayer:
      "O Lord Jesus, let me also bear Your Cross; let me glory in nothing else. Let the temptations of this world be crucified to me, and I to them. Let me not shrink from suffering; let me rather rejoice to be counted worthy of suffering for Your Name's sake.",
  },
  {
    title: "The Sixth Station: Veronica Wipes the Face of Jesus",
    meditation:
      "Recall how Veronica, seeing Jesus so afflicted, His face soiled with sweat and blood, offered Him her veil. Jesus took the veil, wiped His face, and left imprinted on the cloth the image of His Divine Countenance.",
    prayer:
      "O Jesus, may the remembrance of Your suffering move me to hatred for my sins; may it stir up in me a more fervent love for You. Let the image of Your Countenance be impressed upon my mind, until I am made over in Your likeness.",
  },
  {
    title: "The Seventh Station: Jesus Falls the Second Time",
    meditation:
      "Recall how Jesus' struggle to go on increased His pain and cost Him a constantly greater loss of blood, until His strength failed a second time, and He fell upon the ground again.",
    prayer:
      "O Jesus, lying prostrate again under the burden of my sins, how often have I offended You in the past? Let me for the future rather die than ever offend You again.",
  },
  {
    title: "The Eighth Station: Jesus Meets the Women of Jerusalem",
    meditation:
      "Recall how some holy women of Jerusalem, upon seeing Jesus stumbling along and bathed in His own blood, wept with compassion. To them Jesus said: Do not weep for Me; weep for your children.",
    prayer:
      "O Lord Jesus, I grieve for Your sufferings, too, and for my sins which caused You to suffer. Let me mourn that I may be comforted. Let me escape the awful judgment that awaits those who reject or neglect You in this earthly life.",
  },
  {
    title: "The Ninth Station: Jesus Falls the Third Time",
    meditation:
      "Jesus, arriving exhausted at the foot of Calvary, falls for the third time. His weakness was extreme and the cruelty of His executioners was excessive; they tried to hasten His steps when He hardly had strength to move.",
    prayer:
      "O Lord Jesus, I pray You, by the merits of this third painful fall, to forgive my frequent falls into sin and my slowness to rise and return again to You. Let the remembrance of Your sufferings make me hate my sins more and more.",
  },
  {
    title: "The Tenth Station: Jesus Is Stripped of His Garments",
    meditation:
      "Recall now how Jesus arrived at the place of His Crucifixion. The soldiers tore His clothes from His bleeding Body, leaving Him exposed to the cold, rude stare of the scoffing crowd.",
    prayer:
      "Innocent Jesus, by Your torment in being stripped of your clothing, help me to put off every inordinate attachment to the things of earth, so that I may give all my love to You, who are all worthy of my love.",
  },
  {
    title: "The Eleventh Station: Jesus Is Nailed to the Cross",
    meditation:
      "Recall how Jesus lies down upon His Cross, and how He extends His arms to offer up the sacrifice of His Life for our salvation. The soldiers nail Him, hands and feet, to His gibbet. And then they raise it, leaving Him to die upon it in terrible anguish.",
    prayer: "My crucified Jesus, bind my heart to Your Cross, and let it remain there always, never again to forsake You.",
  },
  {
    title: "The Twelfth Station: Jesus Dies on the Cross",
    meditation:
      "Recall how Jesus agonized for three hours, dying upon the Cross. Then, overcome at last, His Body sagged limply; His head fell forward upon His chest; and He handed over His Spirit.",
    prayer:
      "O Jesus, I devoutly honor that Holy Cross upon which You loved me even unto death. In Your death is all my hope. From this time forward, let me live only for You; when I come to die, let me die loving You alone.",
  },
  {
    title: "The Thirteenth Station: Jesus Is Taken Down from the Cross",
    meditation:
      "Recall how two of His disciples, Joseph and Nicodemus, took Jesus' body down from His Cross, and how they laid Him in the arms of His stricken Mother. She received Him with tenderness, pressing Him close to her afflicted heart.",
    prayer: "My crucified Jesus, bind my heart to Your Cross, and let it remain there always, never again to forsake You.",
  },
  {
    title: "The Fourteenth Station: Jesus Is Placed in the Sepulchre",
    meditation:
      "The Body of her dearly beloved Son is taken from His Mother and laid in the tomb. The tomb is closed, and the lifeless Body remains until the hour of its glorious Resurrection.",
    prayer:
      "O Jesus, lying buried in the tomb, I reverently kiss the stone that encloses You. But on the third day, You rose in glory. By the Resurrection, call me too to rise in glory on the last day, to be forever united with You.",
  },
];

export function WayOfCrossQuietRoom() {
  const [quietMode, setQuietMode] = useState(true);

  return (
    <div className={quietMode ? "rounded-md bg-navy p-4 text-ivory sm:p-6" : "rounded-md border border-stone bg-parchment p-5 shadow-soft sm:p-6"}>
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
        <div className="grid gap-8">
          <header className={quietMode ? "border-b border-gold-soft/40 pb-8" : "border-b border-stone pb-8"}>
            <div className="flex flex-wrap gap-2">
              <span className="season-pill border-gold text-gold">Stations of the Cross</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Lent and Fridays</span>
              <span className={quietMode ? "season-pill border-gold-soft text-gold-soft" : "season-pill"}>Passion of Christ</span>
            </div>
            <p className={`mt-6 text-xs font-bold uppercase tracking-[0.18em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>
              Way of the Cross quiet room
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

          <p className={quietMode ? "rounded-md border border-gold-soft/40 p-4 text-sm leading-7 text-stone-soft" : "dashboard-card p-5 text-sm leading-7 text-muted"}>
            Prepare yourself for prayer. Close your eyes, breathe slowly, and ask for the grace to enter the mystery of
            the Cross with repentance, love, and trust in the mercy of Christ.
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
            <Detail label="Prayer" value="St. Alphonsus Liguori's Way of the Cross" quietMode={quietMode} />
            <Detail label="Stations" value="Fourteen" quietMode={quietMode} />
            <Detail label="Video" value="No autoplay" quietMode={quietMode} />
          </dl>
          {!quietMode ? (
            <a href={stream.watchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary focus-ring mt-6 w-full">
              Open on YouTube
            </a>
          ) : null}
        </aside>
      </div>

      <WayOfCrossGuide quietMode={quietMode} />
    </div>
  );
}

function WayOfCrossGuide({ quietMode }: { quietMode: boolean }) {
  return (
    <section className={quietMode ? "mt-8 rounded-md border border-gold-soft/40 p-5 sm:p-6" : "mt-8 dashboard-card p-5 sm:p-6"}>
      <div className="max-w-3xl">
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>St. Alphonsus Liguori's Way of the Cross</p>
        <h2 className={`font-display mt-3 text-4xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>
          Walk with Christ to Calvary.
        </h2>
        <p className={`mt-4 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Prayer text credited to St. Alphonsus Liguori. Move slowly from station to station. Kneel, stand, or remain
          seated as you are able, keeping your attention on the Passion and Death of the Lord.
        </p>
        <p className={`mt-3 text-xs leading-6 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          Source note: St. Alphonsus is public domain, but the exact English edition or translation should be confirmed
          before reusing this text in print or other redistributed formats.
        </p>
      </div>

      <article className={quietMode ? "mt-6 rounded-md border border-gold-soft/30 p-5" : "mt-6 card-parchment p-5"}>
        <h3 className={`font-display text-3xl font-semibold ${quietMode ? "text-ivory" : "text-navy"}`}>Opening Prayer</h3>
        <p className={`mt-4 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          O Jesus, my adorable savior, I seek Your forgiveness and mercy for myself and for my loved ones, for those
          hardened by sin, and all the faithful departed. Wash away my sins and those of the whole world through the
          infinite merits of Your Passion. Give me the grace to enter more deeply into the mystery of Your Cross, so that
          sharing in your suffering and death, I may experience a deep sorrow for my sins and be ready to embrace
          willingly, even with joy, all the sufferings and humiliations of this life and pilgrimage.
        </p>
      </article>

      <div className="mt-7 grid gap-4">
        {stations.map((station, index) => (
          <article key={station.title} className={quietMode ? "rounded-md border border-gold-soft/30 p-5" : "card p-5"}>
            <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Station {index + 1}</p>
            <h3 className={`font-display mt-2 text-3xl font-semibold leading-tight ${quietMode ? "text-ivory" : "text-navy"}`}>{station.title}</h3>
            <div className={`mt-4 grid gap-3 text-base leading-8 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
              <p><strong>Celebrant:</strong> {refrain.celebrant}</p>
              <p><strong>People:</strong> {refrain.people}</p>
              <p><strong>Meditation:</strong> {station.meditation}</p>
              <p><strong>Prayer:</strong> {station.prayer}</p>
              <p><strong>Celebrant:</strong> {refrain.closingCelebrant}</p>
              <p><strong>People:</strong> {refrain.closingPeople}</p>
              <p className="text-sm">Spend a few moments contemplating this station. Close with a simple prayer, such as the Lord's Prayer.</p>
            </div>
          </article>
        ))}
      </div>

      <article className={quietMode ? "mt-6 rounded-md border border-gold-soft/40 p-5" : "mt-6 card-parchment p-5"}>
        <p className={`text-xs font-bold uppercase tracking-[0.16em] ${quietMode ? "text-gold-soft" : "text-burgundy"}`}>Exercise of the Way of the Cross</p>
        <h3 className={`font-display mt-2 text-3xl font-semibold ${quietMode ? "text-ivory" : "text-navy"}`}>Viae Crucis exercitium</h3>
        <div className={`mt-4 grid gap-3 text-sm leading-7 ${quietMode ? "text-stone-soft" : "text-muted"}`}>
          <p>
            A plenary indulgence is granted to the faithful who make the pious exercise of the Way of the Cross. If, for
            some reasonable cause, the Stations are interrupted, a partial indulgence may be gained for each Station.
          </p>
          <p>
            The pious exercise recalls the sufferings which the divine Redeemer endured while going from the praetorium
            of Pilate to Mount Calvary, where He died on the Cross for our salvation.
          </p>
          <ol className="grid list-decimal gap-2 pl-5">
            <li>The pious exercise must be done before legitimately erected stations of the Way of the Cross.</li>
            <li>Fourteen crosses are required, customarily accompanied by fourteen pictures or images.</li>
            <li>Nothing more is required than a pious meditation on the Passion and Death of the Lord.</li>
            <li>
              Movement from one station to the next is ordinarily required; those impeded can gain the same indulgence by
              spending at least one half hour in pious reading and meditation on the Passion and Death of our Lord Jesus Christ.
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
