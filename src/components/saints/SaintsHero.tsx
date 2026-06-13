import Link from "next/link";

export function SaintsHero() {
  return (
    <section className="grid gap-8 rounded-[2rem] border border-stone/70 bg-[linear-gradient(135deg,rgba(255,248,236,0.96),rgba(247,240,224,0.92))] px-6 py-10 shadow-[0_24px_80px_rgba(7,26,45,0.08)] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
      <div>
        <p className="liturgical-section-eyebrow">Saints</p>
        <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
          Friends of God, witnesses of holiness, and companions on the way to Christ.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
          The saints show us what grace can do in ordinary lives, heroic lives, hidden lives,
          joyful lives, suffering lives, and missionary lives. They do not replace Christ; they
          point us to Him.
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
          If you are new to this part of Catholic belief, this section can help you understand the
          communion of saints and how saintly lives point us toward Christ rather than away from Him.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/saints/finder" className="btn liturgical-button focus-ring justify-center">
            Find a Saint Companion
          </Link>
          <Link href="#featured-saints" className="btn btn-secondary focus-ring justify-center">
            Explore the Saints
          </Link>
          <Link href="/saints/saint-of-the-day" className="btn btn-secondary focus-ring justify-center">
            Saint of the Day
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
          Catholics honor the saints and ask their intercession, but worship belongs to God alone.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "Holiness in every state of life",
            description: "Parents, students, workers, priests, contemplatives, converts, and martyrs all show what grace can do.",
          },
          {
            title: "Intercession, not superstition",
            description: "Saints pray with the Church. They do not replace Christ or guarantee outcomes.",
          },
          {
            title: "Formation through imitation",
            description: "Their witness should move us toward prayer, sacraments, Scripture, and works of mercy.",
          },
          {
            title: "A library for real life",
            description: "Find saints by virtue, feast day, life need, patronage, confirmation, and daily discipleship.",
          },
        ].map((card) => (
          <article key={card.title} className="card-parchment liturgical-card-accent p-5">
            <h2 className="font-display text-2xl font-semibold text-navy">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhatAreSaints() {
  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Foundations</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">What Are Saints?</h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Saints are holy men and women who lived in friendship with God and now share in the life
        of heaven. The Church canonizes certain saints as public witnesses of holiness, but every
        Christian is called to become holy.
      </p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Catholics do not worship saints. We honor them as friends of God and ask their prayers. If
        you are exploring this belief for the first time, begin with that distinction.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          "Saints are not distant superheroes. They were real people with struggles, wounds, conversions, and missions.",
          "They followed Christ in many different ways: as mothers, students, workers, priests, religious, scholars, missionaries, and martyrs.",
          "Their lives help us see what holiness looks like in daily life, suffering, service, and joy.",
          "Their witness encourages us to keep going when prayer is dry, virtue is hard, or conversion feels slow.",
          "Their prayers remind us that the Church includes both heaven and earth in Christ.",
          "The goal is not only admiration. The goal is imitation through grace.",
        ].map((item) => (
          <article key={item} className="card-parchment p-5">
            <p className="text-sm leading-7 text-muted">{item}</p>
          </article>
        ))}
      </div>
      <div className="card-parchment mt-6 p-5">
        <p className="font-display text-2xl font-semibold text-navy">
          “Formation is not simply knowing more about holy people. It is becoming more available to God.”
        </p>
      </div>
    </section>
  );
}

export function WhyAskSaintsToPray() {
  return (
    <section className="mt-16">
      <p className="liturgical-section-eyebrow">Intercession</p>
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy sm:text-5xl">
        Why Catholics Ask Saints to Pray for Us
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        Catholics ask saints for intercession because the saints are alive in Christ. Just as we ask
        friends on earth to pray for us, we ask the friends of God in heaven to pray for us.
      </p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          "Worship is for God alone.",
          "Honor given to saints glorifies God’s grace in them.",
          "Saints intercede; God answers prayer.",
          "Saint devotion should lead us back to Christ.",
          "Healthy devotion bears fruit in sacraments, virtue, and charity.",
        ].map((item) => (
          <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
            {item}
          </article>
        ))}
      </div>
      <div className="mt-6">
        <Link href="#saints-faq" className="text-sm font-semibold text-navy underline decoration-gold underline-offset-4">
          Learn more in Common Questions About Saints
        </Link>
      </div>
    </section>
  );
}
