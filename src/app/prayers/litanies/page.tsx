import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

type LitanyLink = {
  label: string;
  href: string;
  external?: boolean;
};

type LitanyCard = {
  title: string;
  category: string;
  summary: string;
  links?: LitanyLink[];
};

const pageMetadata = createPageMetadata({
  title: "Catholic Litanies | How to Pray a Litany | Daily Oratory",
  description:
    "Learn what Catholic litanies are, how to pray them, when to use them, and explore traditional litanies to Jesus, Mary, the saints, humility, the dying, and the Holy Spirit.",
  path: "/prayers/litanies",
  keywords: [
    "Catholic litanies",
    "litany",
    "how to pray a litany",
    "Litany of Loreto",
    "Litany of Humility",
    "Litany of the Saints",
    "St. Joseph litany",
    "Sacred Heart litany",
    "Holy Spirit litany",
    "prayers for dying",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Catholic Litanies",
    description:
      "Learn what Catholic litanies are, how to pray them, when to use them, and which traditional litanies fit different seasons and needs.",
  },
  twitter: {
    ...pageMetadata.twitter,
    title: "Catholic Litanies",
    description:
      "Learn what Catholic litanies are, how to pray them, when to use them, and which traditional litanies fit different seasons and needs.",
  },
};

const whyLitaniesMatter = [
  "They teach perseverance in prayer.",
  "They help when the heart is distracted.",
  "They give words to sorrow, hope, repentance, and trust.",
  "They join personal prayer to the prayer of the Church.",
  "They help families and groups pray together.",
  "They invite the intercession of Mary and the saints.",
];

const whenToPray = [
  "During Lent",
  "Before or after Confession",
  "During Eucharistic Adoration",
  "During family prayer",
  "When anxious or discouraged",
  "When someone is sick or dying",
  "During Marian devotion",
  "During novenas",
  "On feast days of saints",
  "When asking for humility, mercy, or protection",
];

const commonLitanies: LitanyCard[] = [
  {
    title: "Litany of the Sacred Heart of Jesus",
    category: "Jesus / Mercy / Reparation",
    summary: "A traditional litany honoring the merciful Heart of Jesus and asking to be formed by His love.",
    links: [
      { label: "Daily Oratory Guide", href: "/prayers/novena-to-the-sacred-heart-of-jesus" },
      { label: "Official USCCB Text", href: "https://www.usccb.org/prayers/litany-sacred-heart-jesus", external: true },
    ],
  },
  {
    title: "Litany of the Holy Name of Jesus",
    category: "Jesus / Holy Name",
    summary: "A litany invoking the Holy Name of Jesus with reverence, trust, and love.",
    links: [{ label: "Official USCCB Text", href: "https://www.usccb.org/prayers/litany-holy-name-jesus", external: true }],
  },
  {
    title: "Litany of the Precious Blood",
    category: "Jesus / Passion / Redemption",
    summary: "A litany honoring the Precious Blood of Christ and His saving Passion.",
  },
  {
    title: "Litany of Loreto",
    category: "Mary / Marian Prayer",
    summary: "A beloved Marian litany invoking Mary under many titles and asking for her intercession.",
  },
  {
    title: "Litany of St. Joseph",
    category: "Saints / Family / Work / Protection",
    summary: "A litany asking the intercession of St. Joseph, guardian of Jesus and Mary.",
    links: [{ label: "Official USCCB Text", href: "https://www.usccb.org/prayers/litany-saint-joseph", external: true }],
  },
  {
    title: "Litany of the Saints",
    category: "Saints / Church / Intercession",
    summary: "A solemn litany invoking the saints and asking God for mercy, often used in major liturgies.",
  },
  {
    title: "Litany of Humility",
    category: "Repentance / Humility / Lent",
    summary: "A searching prayer asking Jesus for freedom from pride, fear, comparison, and the desire to be praised.",
  },
  {
    title: "Litany for the Dying",
    category: "Death / Mercy / Sacramental Emergency",
    summary: "A prayerful litany for accompanying someone near death with trust in Christ's mercy.",
  },
  {
    title: "Litany of the Holy Spirit",
    category: "Holy Spirit / Pentecost / Discernment",
    summary: "A prayer asking the Holy Spirit for light, wisdom, courage, consolation, and renewal.",
  },
  {
    title: "Litany of Trust",
    category: "Trust / Anxiety / Surrender",
    summary: "A devotional litany asking Jesus for deeper trust; because modern versions may be copyrighted, Daily Oratory treats it as a guide rather than reproducing full text here.",
  },
];

const litaniesByNeed = [
  {
    title: "I need mercy",
    summary: "Turn to Christ's mercy with repeated petitions that soften the heart and strengthen repentance.",
    links: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Confession Guide", href: "/confession" },
    ],
    note: "Sacred Heart, Holy Name of Jesus, and the Litany of Humility are especially fitting.",
  },
  {
    title: "I am anxious",
    summary: "Choose a repeated prayer that steadies the heart and slows fear.",
    links: [
      { label: "Come, Holy Spirit", href: "/prayers" },
      { label: "Prayer Library", href: "/prayers" },
    ],
    note: "The Litany of Trust guide, the Holy Spirit, the Hail Mary, and the Memorare are gentle places to begin.",
  },
  {
    title: "I need humility",
    summary: "Ask Jesus to free you from pride, self-comparison, and the need to be praised.",
    links: [{ label: "Prayer Library", href: "/prayers" }],
    note: "The Litany of Humility is the clearest place to start.",
  },
  {
    title: "I am praying for my family",
    summary: "Let repeated prayer gather the household in trust, mercy, and intercession.",
    links: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
    ],
    note: "The Litany of St. Joseph and the Litany of Loreto are especially fitting.",
  },
  {
    title: "I am preparing for Confession",
    summary: "Repeated petitions can lead the heart into honest repentance without panic.",
    links: [
      { label: "Confession Guide", href: "/confession" },
      { label: "Prayer Library", href: "/prayers" },
    ],
    note: "The Litany of Humility and the Act of Contrition fit well here.",
  },
  {
    title: "I am praying during Lent",
    summary: "Litanies can keep repentance steady and focused through the whole season.",
    links: [
      { label: "Lent Guide", href: "/liturgical-living/lent" },
      { label: "Fasting and Abstinence", href: "/liturgical-living/lent/fasting-and-abstinence" },
    ],
    note: "The Litany of Humility, Precious Blood, and Sacred Heart are especially fitting during Lent.",
  },
  {
    title: "Someone is dying",
    summary: "Stay close, pray simply, and entrust the dying person to Christ's mercy.",
    links: [
      { label: "Sacramental Emergency", href: "/sacramental-emergency" },
      { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" },
    ],
    note: "The Litany for the Dying and Eternal Rest are natural companion prayers.",
  },
  {
    title: "I need courage",
    summary: "Ask for strength, fidelity, and the grace to remain close to Christ under pressure.",
    links: [
      { label: "Prayer Library", href: "/prayers" },
      { label: "Sin and Temptation", href: "/sin-and-temptation" },
    ],
    note: "The Litany of the Saints, a Holy Spirit litany, and the St. Michael prayer are all fitting.",
  },
  {
    title: "I want to pray with Mary",
    summary: "Repeated Marian invocation teaches confidence, tenderness, and steady intercession.",
    links: [
      { label: "The Angelus", href: "/prayers/angelus" },
      { label: "Regina Caeli", href: "/prayers/regina-caeli" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
    ],
    note: "The Litany of Loreto, the Memorare, the Angelus, and the Regina Caeli belong naturally together.",
  },
];

const sevenDayPractice = [
  { day: "Day 1", practice: "Pray one short litany response slowly: 'Lord, have mercy.'" },
  { day: "Day 2", practice: "Pray a Marian litany or Marian prayer." },
  { day: "Day 3", practice: "Pray the Litany of Humility or one short humility prayer." },
  { day: "Day 4", practice: "Pray for someone sick, suffering, or dying." },
  { day: "Day 5", practice: "Pray a litany asking the Holy Spirit for guidance." },
  { day: "Day 6", practice: "Pray with the saints and ask for intercession." },
  { day: "Day 7", practice: "End with thanksgiving and one concrete act of charity." },
];

const faqItems = [
  {
    question: "What is a Catholic litany?",
    answer:
      "A litany is a repeated prayer of invocations and responses, often asking for mercy, intercession, protection, or help.",
  },
  {
    question: "Can I pray a litany alone?",
    answer: "Yes. When praying alone, you can pray both the invocation and the response.",
  },
  {
    question: "Are litanies only for church?",
    answer: "No. Litanies can be prayed in church, at home, with family, during devotions, or privately.",
  },
  {
    question: "Which litany should I start with?",
    answer:
      "Start with a simple need: mercy, humility, Mary's intercession, the Holy Spirit, or prayer for someone who is sick or dying.",
  },
  {
    question: "Are all litanies official Church prayers?",
    answer:
      "Some litanies are official or widely traditional, while others are devotional. Daily Oratory summarizes them carefully and avoids reproducing modern copyrighted texts without permission.",
  },
];

const relatedLinks = [
  { label: "Prayer Library", href: "/prayers" },
  { label: "The Angelus", href: "/prayers/angelus" },
  { label: "Regina Caeli", href: "/prayers/regina-caeli" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Holy Rosary", href: "/devotions/holy-rosary" },
  { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" },
  { label: "Sacramental Emergency", href: "/sacramental-emergency" },
  { label: "Sin and Temptation", href: "/sin-and-temptation" },
  { label: "Lent Guide", href: "/liturgical-living/lent" },
];

export default function LitaniesPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Litanies",
              description:
                "Learn what Catholic litanies are, how to pray them, when to use them, and explore traditional litanies to Jesus, Mary, the saints, humility, the dying, and the Holy Spirit.",
              path: "/prayers/litanies",
            }),
            buildArticleStructuredData({
              headline: "Catholic Litanies",
              description:
                "A beginner-friendly Catholic guide to what litanies are, how to pray them, when to use them, and which traditional litanies fit different needs and seasons.",
              path: "/prayers/litanies",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Prayer Library", path: "/prayers" },
              { name: "Catholic Litanies", path: "/prayers/litanies" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Prayer Library", href: "/prayers" }, { label: "Catholic Litanies" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer Guide</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Catholic Litanies</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A simple guide to one of the Church&apos;s most beautiful forms of repeated, responsive prayer.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            A litany is a prayer of repeated petitions, invocations, and responses. It helps the heart pray steadily when words are hard to find, and it teaches us to ask for mercy, intercession, protection, healing, humility, and hope.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#common-litanies" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Explore Common Litanies
            </Link>
            <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Prayer Library
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-10">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What it is</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">What Is a Litany?</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>A litany is a repeated form of prayer.</p>
              <p>It often has an invocation followed by a response such as &quot;pray for us,&quot; &quot;have mercy on us,&quot; &quot;deliver us,&quot; or &quot;grant us peace.&quot;</p>
              <p>Litanies can be prayed alone, with family, in a parish, or during devotions.</p>
              <p>The repetition is not empty. It helps the heart remain steady before God when attention feels weak or words feel small.</p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to pray</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">How to Pray a Litany</h2>
            <ol className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              <li>Begin with the Sign of the Cross.</li>
              <li>Choose a litany for the need or season.</li>
              <li>Pray slowly, not mechanically.</li>
              <li>Let the repeated response become simple and sincere.</li>
              <li>Pause after a line that touches your heart.</li>
              <li>End with a short prayer of trust.</li>
            </ol>
            <div className="liturgical-callout liturgical-callout-pastoral mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">A simple pattern</p>
              <div className="daily-readable mt-4 grid gap-3 text-base leading-8 text-muted">
                <p><span className="font-semibold text-navy">Leader:</span> Lord, have mercy.</p>
                <p><span className="font-semibold text-navy">Response:</span> Lord, have mercy.</p>
                <p><span className="font-semibold text-navy">Leader:</span> Holy Mary, Mother of God.</p>
                <p><span className="font-semibold text-navy">Response:</span> Pray for us.</p>
                <p><span className="font-semibold text-navy">Leader:</span> From all evil.</p>
                <p><span className="font-semibold text-navy">Response:</span> Deliver us, Lord.</p>
              </div>
              <p className="daily-readable-muted mt-4 text-base leading-8 text-muted">
                If praying alone, simply pray both the invocation and the response.
              </p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Why it helps</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Why Catholics Pray Litanies</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyLitaniesMatter.map((reason) => (
                <article key={reason} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <p className="daily-card-readable text-base leading-7 text-muted">{reason}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Good moments to begin</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">When to Pray a Litany</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {whenToPray.map((item) => (
                <article key={item} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <p className="text-base font-semibold leading-7 text-navy">{item}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="common-litanies" className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Common prayer guides</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Common Catholic Litanies</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Daily Oratory keeps long litany texts on dedicated pages when appropriate and otherwise offers guide summaries here so the page remains reverent, readable, and copyright-safe. When an official public text is verified, it is linked below.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {commonLitanies.map((litany) => (
                <article key={litany.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{litany.category}</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{litany.title}</h3>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{litany.summary}</p>
                  {litany.links?.length ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {litany.links.map((link) =>
                        link.external ? (
                          <a
                            key={`${litany.title}-${link.href}`}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="focus-ring inline-flex rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={`${litany.title}-${link.href}`}
                            href={link.href}
                            className="focus-ring inline-flex rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                          >
                            {link.label}
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Which litany fits?</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Litanies by Need</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {litaniesByNeed.map((card) => (
                <article key={card.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.summary}</p>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.note}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {card.links.map((link) => (
                      <Link
                        key={`${card.title}-${link.href}`}
                        href={link.href}
                        className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">A simple beginning</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A Seven-Day Litany Practice</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {sevenDayPractice.map((item) => (
                <article key={item.day} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{item.day}</p>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.practice}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Seasonal prayer</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Litanies and the Liturgical Year</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p><span className="font-semibold text-navy">Lent:</span> litanies of humility, repentance, mercy, and the Passion are especially fitting.</p>
              <p><span className="font-semibold text-navy">Easter:</span> litanies can become prayers of praise and trust in the risen Christ.</p>
              <p><span className="font-semibold text-navy">Pentecost:</span> prayers and litanies to the Holy Spirit are especially fitting.</p>
              <p><span className="font-semibold text-navy">Marian months and devotions:</span> the Litany of Loreto and other Marian prayers are especially fitting.</p>
              <p><span className="font-semibold text-navy">November:</span> litanies and prayers for the dead and dying are especially fitting.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Lent Guide", href: "/liturgical-living/lent" },
                { label: "Fasting and Abstinence", href: "/liturgical-living/lent/fasting-and-abstinence" },
                { label: "Regina Caeli", href: "/prayers/regina-caeli" },
                { label: "Prayer Library", href: "/prayers" },
                { label: "Prayers for the Dead", href: "/formation/catholic-burial/prayers-for-the-dead" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Common questions</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">FAQ</h2>
            <div className="mt-8 grid gap-5">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <h3 className="font-display text-2xl font-semibold text-navy">{item.question}</h3>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related guides</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Continue in Prayer</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="focus-ring rounded-3xl border border-stone bg-ivory/80 px-5 py-4 text-base font-semibold text-navy transition hover:border-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
