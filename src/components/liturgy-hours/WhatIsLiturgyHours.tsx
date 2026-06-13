export function WhatIsLiturgyHours() {
  const points = [
    "It is official liturgical prayer of the Church.",
    "It is centered on the Psalms.",
    "It joins personal prayer to the prayer of Christ and His Church.",
    "Clergy and many religious are obliged to pray it.",
    "Lay Catholics are also encouraged to pray it.",
    "It can be prayed alone, with family, in parish groups, or in religious communities.",
    "It teaches Catholics to pray with Scripture throughout the day.",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Begin here</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          What is the Liturgy of the Hours?
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          The Liturgy of the Hours, also called the Divine Office, is the daily prayer of the
          Church. It sanctifies the day by marking different hours with psalms, Scripture, hymns,
          intercessions, and prayers.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          It is one of the Church&apos;s great schools of prayer. By praying the hours, Catholics learn
          to speak with God using the words of Scripture, especially the Psalms, and to place work,
          suffering, gratitude, and rest inside the Church&apos;s praise.
        </p>
      </div>
      <div className="card p-6">
        <div className="space-y-3">
          {points.map((point) => (
            <div key={point} className="rounded-md border border-stone/70 bg-parchment px-4 py-3">
              <p className="text-sm leading-7 text-muted">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-muted">
          You do not have to pray every hour to begin. Many lay Catholics start with Morning
          Prayer, Evening Prayer, or Night Prayer.
        </p>
      </div>
    </section>
  );
}
