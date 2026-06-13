import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const comparisonCards = [
  {
    title: "Fasting",
    description: "Eating less, usually according to Church discipline and the person's real condition in life.",
  },
  {
    title: "Abstinence",
    description: "Avoiding meat or another required food according to Church discipline and local norms.",
  },
  {
    title: "Personal Sacrifice",
    description: "Freely giving up something good, such as sweets, entertainment, unnecessary spending, or screen time.",
  },
  {
    title: "Penance",
    description: "A practice of repentance and conversion offered to God with humility and love.",
  },
] as const;

const goodFastTraits = [
  "simple",
  "realistic",
  "hidden rather than showy",
  "joined to prayer",
  "joined to charity",
  "focused on conversion",
  "not harmful to health",
  "not chosen from pride",
] as const;

const goodFastExamples = [
  "eat more simply",
  "avoid unnecessary snacks",
  "give up a comfort food",
  "reduce entertainment",
  "limit social media",
  "avoid gossip",
  "reduce unnecessary spending",
  "give the saved money to charity",
  "pray before meals",
  "read Scripture instead of scrolling",
] as const;

const commonMistakes = [
  "Treating Lent like a diet",
  "Choosing something impossible",
  "Becoming proud of sacrifice",
  "Becoming discouraged after failure",
  "Ignoring prayer and charity",
  "Judging others",
  "Risking health unnecessarily",
];

const fastingPlans = [
  {
    title: "Gentle",
    steps: [
      "pray before meals",
      "avoid one unnecessary snack",
      "give one small comfort to God",
      "offer one act of charity",
    ],
  },
  {
    title: "Moderate",
    steps: [
      "simple meals on Fridays",
      "reduce sweets or entertainment",
      "attend Stations of the Cross",
      "give saved money to the poor",
    ],
  },
  {
    title: "Traditional",
    steps: [
      "follow Church fasting days carefully",
      "abstain on Fridays",
      "add extra prayer",
      "go to Confession",
      "practice almsgiving",
    ],
  },
] as const;

const faqs = [
  {
    question: "Is Catholic fasting the same as dieting?",
    answer:
      "No. Catholic fasting is a spiritual practice ordered toward prayer, repentance, self-denial, and charity.",
  },
  {
    question: "What is the difference between fasting and abstinence?",
    answer:
      "Fasting usually means eating less. Abstinence usually means refraining from meat or another required food.",
  },
  {
    question: "What if I cannot fast for health reasons?",
    answer:
      "Do not endanger your health. Ask a priest, doctor, or trusted advisor and choose another form of penance.",
  },
  {
    question: "What should I do if I fail at my Lenten fast?",
    answer: "Begin again with humility. Lent is about conversion, not perfection.",
  },
  {
    question: "Should I tell people what I gave up?",
    answer:
      "Usually it is better to keep sacrifice simple and humble unless sharing is necessary or truly helpful.",
  },
] as const;

const relatedLinks = [
  { label: "Lent Guide", href: "/liturgical-living/lent" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Sin and Temptation", href: "/sin-and-temptation" },
  { label: "Grace", href: "/formation/grace" },
  { label: "Mass Readings", href: "/reflections/mass-readings" },
  { label: "What Should I Do?", href: "/what-should-i-do" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Fasting and Abstinence Guide | Lent | Daily Oratory",
  description:
    "A practical Catholic guide to fasting and abstinence during Lent, including Ash Wednesday, Good Friday, Fridays of Lent, simple sacrifices, spiritual purpose, and pastoral cautions.",
  path: "/liturgical-living/lent/fasting-and-abstinence",
  keywords: [
    "Catholic fasting",
    "Catholic abstinence",
    "Lent fasting",
    "Ash Wednesday fasting",
    "Good Friday fasting",
    "Fridays of Lent",
    "Lenten sacrifice",
  ],
});

export default function FastingAndAbstinencePage() {
  const description =
    "A practical Catholic guide to fasting and abstinence during Lent, including Ash Wednesday, Good Friday, Fridays of Lent, simple sacrifices, spiritual purpose, and pastoral cautions.";

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Fasting and Abstinence Guide",
              description,
              path: "/liturgical-living/lent/fasting-and-abstinence",
            }),
            buildBreadcrumbList([
              { name: "Liturgical Living", path: "/liturgical-living" },
              { name: "Lent", path: "/liturgical-living/lent" },
              { name: "Fasting and Abstinence", path: "/liturgical-living/lent/fasting-and-abstinence" },
            ]),
          ]}
        />

        <Breadcrumbs
          items={[
            { label: "Liturgical Living", href: "/liturgical-living" },
            { label: "Lent", href: "/liturgical-living/lent" },
            { label: "Fasting and Abstinence" },
          ]}
        />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Lent</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Catholic Fasting and Abstinence Guide
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-lg leading-8 text-navy">
            A practical guide to fasting, abstinence, sacrifice, and hunger for God during Lent.
          </p>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            Catholic fasting is not a diet, punishment, or spiritual competition. It is a humble way to turn the
            body and heart toward God, remember the poor, resist selfishness, and prepare for Easter.
          </p>
        </header>

        <section className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="What Is Catholic Fasting?" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Fasting usually means reducing the amount of food eaten. It is a bodily prayer that helps train
              desire, reminds us that we depend on God, and teaches the soul to hunger for Him more than comfort.
              It bears the best fruit when it is joined to prayer and charity.
            </p>
          </article>

          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="What Is Abstinence?" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Abstinence usually means refraining from meat. It is traditionally practiced on Fridays of Lent as
              a shared sign of penance. Local rules may vary, so Catholics should check their bishops&apos; conference,
              diocese, or parish guidance.
            </p>
          </article>
        </section>

        <section className="mt-10">
          <SectionHeading title="Fasting vs. Abstinence vs. Personal Sacrifice" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {comparisonCards.map((card) => (
              <article key={card.title} className="card-parchment p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="When Do Catholics Fast During Lent?" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              In many places, Catholics fast on Ash Wednesday and Good Friday and abstain from meat on Fridays of
              Lent. Exact obligations can depend on age, health, country, and the local bishops&apos; conference.
            </p>
            <p className="liturgical-callout mt-4 text-sm leading-7 text-navy">
              This page is a general spiritual guide, not a replacement for official diocesan guidance.
            </p>
          </article>

          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="Who May Be Excused?" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Some people may be excused or should adapt fasting because of age, illness, pregnancy, nursing,
              eating disorders, medical conditions, hard labor, or other serious reasons.
            </p>
            <p className="liturgical-callout liturgical-callout-warning mt-4 text-sm leading-7 text-navy">
              If fasting would harm your health, endanger recovery, or worsen a serious condition, speak with a
              priest, doctor, or trusted advisor and choose another form of penance.
            </p>
          </article>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="How to Choose a Good Lenten Fast" />
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            A good fast should be simple, realistic, and joined to prayer and charity. It should help conversion,
            not become a performance, a hidden source of pride, or a burden that harms health.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">A good fast should be</p>
              <ul className="mt-3 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
                {goodFastTraits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Simple examples</p>
              <ul className="mt-3 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
                {goodFastExamples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <SectionHeading title="Common Mistakes" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commonMistakes.map((mistake) => (
              <article key={mistake} className="card-parchment p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{mistake}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
                  Keep Lent practical, humble, and peaceful so sacrifice leads to love rather than strain or pride.
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="What If I Fail?" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Begin again. Lent is about conversion, not perfection. If you break your fast, do not spiral into
              discouragement. Pray, make a small act of humility, and continue.
            </p>
          </article>

          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="Fasting and the Poor" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Lenten fasting should open the heart to charity. What is saved through simplicity can become mercy
              for someone else through almsgiving, service, or quiet generosity.
            </p>
          </article>
        </section>

        <section className="mt-10">
          <SectionHeading title="Simple Fasting Plans" />
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {fastingPlans.map((plan) => (
              <article key={plan.title} className="card-parchment p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Plan</p>
                <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{plan.title}</h3>
                <ul className="mt-4 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
                  {plan.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="Fasting Prayer" />
          <div className="mt-5 rounded-[28px] border border-stone/80 bg-ivory/80 p-5">
            <p className="daily-prayer-readable text-base leading-8 text-navy">
              Lord Jesus,
              <br />
              teach me to hunger for You more than comfort.
              <br />
              Let this fast make my heart humble, merciful, and free.
              <br />
              When I feel weakness, remind me to pray.
              <br />
              When I fail, lead me back to Your mercy.
              <br />
              May my small sacrifice become love.
              <br />
              Amen.
            </p>
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="Questions Catholics Often Ask" />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="card bg-ivory/80 p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{faq.question}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="Related Guides" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card dashboard-card focus-ring flex min-h-24 items-center p-5 transition hover:-translate-y-0.5 hover:border-gold">
                <span className="font-display text-2xl font-semibold leading-tight text-navy">{link.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>;
}
