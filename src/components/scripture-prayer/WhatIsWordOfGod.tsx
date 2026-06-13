export function WhatIsWordOfGod() {
  const points = [
    "God speaks through Sacred Scripture.",
    "Scripture is inspired by the Holy Spirit.",
    "The Word of God is received in the living Tradition and teaching life of the Church.",
    "Scripture is proclaimed in the Mass.",
    "Scripture forms prayer, doctrine, conversion, and discipleship.",
    "Catholics read Scripture with Christ at the center.",
    "The goal is not only knowledge, but encounter, obedience, love, and transformation.",
  ];

  const emphases = [
    "Scripture reveals God's saving plan.",
    "The Old and New Testaments are united in Christ.",
    "The Gospels hold a special place because they present the life, teaching, Passion, Death, and Resurrection of Jesus.",
    "The Psalms teach the Church how to pray.",
    "The daily Mass readings train the heart to listen with the Church.",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Foundations</p>
        <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
          What is the Word of God?
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted">
          Catholics receive Sacred Scripture as inspired by the Holy Spirit and entrusted to the
          Church. The Word of God is not reduced to private interpretation or mere information. It
          is proclaimed in the liturgy, read within the life of the Church, and meant to bring the
          faithful into deeper faith, conversion, and communion with Christ.
        </p>
        <div className="mt-5 space-y-3">
          {points.map((point) => (
            <div key={point} className="rounded-md border border-stone/70 bg-parchment px-4 py-3">
              <p className="text-sm leading-7 text-muted">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6">
        <p className="text-xs font-bold uppercase text-burgundy">Read with the Church</p>
        <div className="mt-4 space-y-3">
          {emphases.map((point) => (
            <div key={point} className="rounded-md border border-stone/70 bg-ivory px-4 py-3">
              <p className="text-sm leading-7 text-muted">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
