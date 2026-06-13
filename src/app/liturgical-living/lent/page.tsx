import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pillars = [
  {
    title: "Prayer",
    summary:
      "Make more room for God through daily prayer, Scripture, the Rosary, Mass, Adoration, and quiet reflection.",
    links: [
      { label: "Pray", href: "/pray" },
      { label: "Prayer Library", href: "/prayers" },
      { label: "Holy Rosary", href: "/devotions/holy-rosary" },
      { label: "Mass Readings", href: "/reflections/mass-readings" },
    ],
  },
  {
    title: "Fasting",
    summary:
      "Catholic fasting teaches the body and heart to hunger for God. Learn the difference between fasting, abstinence, sacrifice, and self-denial.",
    links: [{ label: "Fasting and Abstinence", href: "/liturgical-living/lent/fasting-and-abstinence" }],
  },
  {
    title: "Almsgiving",
    summary:
      "Give with love. Lent calls Catholics to mercy, generosity, service, and concern for the poor in quiet, concrete ways.",
    links: [{ label: "Catholic Life Roadmap", href: "/catholic-life" }],
  },
] as const;

const importantDays = [
  {
    title: "Ash Wednesday",
    summary: "Lent begins with ashes, repentance, and the call to return to the Gospel with humility.",
  },
  {
    title: "Fridays of Lent",
    summary: "The Fridays of Lent invite abstinence, penance, mercy, and prayerful remembrance of the Lord's Passion.",
  },
  {
    title: "Laetare Sunday",
    summary: "This Sunday brings a note of hope in the middle of Lent and reminds the Church that Easter joy is drawing near.",
  },
  {
    title: "Palm Sunday",
    summary: "Holy Week opens with Christ's entry into Jerusalem and the solemn reading of the Passion.",
  },
  {
    title: "Holy Thursday",
    summary: "The Church remembers the Eucharist, the priesthood, and the Lord's commandment of love.",
  },
  {
    title: "Good Friday",
    summary: "The Church keeps silence, fasting, and prayer at the foot of the Cross.",
  },
  {
    title: "Holy Saturday",
    summary: "The Church waits in stillness and hope at the tomb, trusting in the coming Resurrection.",
  },
  {
    title: "Easter Vigil",
    summary: "The Vigil proclaims Christ's victory over death and leads the Church into Easter joy.",
  },
] as const;

const practices = [
  { label: "Attend Mass more intentionally.", href: "/reflections/mass-readings" },
  { label: "Go to Confession.", href: "/confession" },
  { label: "Pray the Stations of the Cross.", href: "/way-of-cross" },
  { label: "Read the daily Mass readings.", href: "/reflections/mass-readings" },
  { label: "Choose one simple fast.", href: "/liturgical-living/lent/fasting-and-abstinence" },
  { label: "Practice one act of mercy.", href: "/catholic-life" },
  { label: "Reduce distractions.", href: "/sin-and-temptation" },
  { label: "Pray for conversion.", href: "/formation/grace" },
] as const;

const dailyPlan = [
  "Morning offering",
  "One short Scripture reading",
  "One concrete sacrifice",
  "One act of charity",
  "Nightly examination",
] as const;

const weeklyPlan = [
  "Friday abstinence or a chosen penance",
  "Stations of the Cross",
  "Confession when needed",
  "Sunday Mass",
  "Review the week with God",
] as const;

const deeperLinks = [
  { label: "Fasting and Abstinence", href: "/liturgical-living/lent/fasting-and-abstinence" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Holy Rosary", href: "/devotions/holy-rosary" },
  { label: "Sin and Temptation", href: "/sin-and-temptation" },
  { label: "Grace", href: "/formation/grace" },
  { label: "Mass Readings", href: "/reflections/mass-readings" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Lent Guide | Prayer, Fasting, Almsgiving, and Holy Week | Daily Oratory",
  description:
    "A Catholic guide to Lent with prayer, fasting, abstinence, almsgiving, Confession, Stations of the Cross, Holy Week, and simple ways to return to God.",
  path: "/liturgical-living/lent",
  keywords: [
    "Catholic Lent guide",
    "Lent",
    "prayer fasting almsgiving",
    "Ash Wednesday",
    "Holy Week",
    "Confession",
    "Stations of the Cross",
  ],
});

export default function LentPage() {
  const description =
    "A Catholic guide to Lent with prayer, fasting, abstinence, almsgiving, Confession, Stations of the Cross, Holy Week, and simple ways to return to God.";

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Lent Guide",
              description,
              path: "/liturgical-living/lent",
            }),
            buildBreadcrumbList([
              { name: "Liturgical Living", path: "/liturgical-living" },
              { name: "Lent", path: "/liturgical-living/lent" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Liturgical Living", href: "/liturgical-living" }, { label: "Lent Guide" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Liturgical Living</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Catholic Lent Guide
          </h1>
          <p className="daily-readable mt-4 max-w-3xl text-lg leading-8 text-navy">
            A season of prayer, fasting, almsgiving, repentance, and return to God.
          </p>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            Lent is not only about giving something up. It is a forty-day invitation to turn back to the Lord,
            simplify the heart, receive mercy, pray more faithfully, and prepare for Easter.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/liturgical-living/lent/fasting-and-abstinence" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Learn About Fasting
            </Link>
            <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Return to Confession
            </Link>
          </div>
        </header>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="What Is Lent?" />
          <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
            Lent is the Church&apos;s penitential season of preparation for Easter. It emphasizes prayer, fasting,
            and almsgiving while inviting repentance, conversion, Confession, and renewed discipleship. It is not
            a season of spiritual performance or discouragement, but a season of mercy and honest return.
          </p>
        </section>

        <section className="mt-10">
          <SectionHeading title="The Three Pillars of Lent" />
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card-parchment p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pillar</p>
                <h3 className="font-display mt-3 text-3xl font-semibold text-navy">{pillar.title}</h3>
                <p className="daily-card-readable mt-4 text-base leading-8 text-muted">{pillar.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {pillar.links.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <SectionHeading title="Important Days of Lent" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {importantDays.map((day) => (
              <article key={day.title} className="card-parchment p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{day.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{day.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="Lenten Practices" />
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {practices.map((practice) => (
              <Link key={practice.label} href={practice.href} className="card dashboard-card focus-ring block p-5 transition hover:-translate-y-0.5 hover:border-gold">
                <p className="daily-card-readable text-base leading-8 text-navy">{practice.label}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="card-parchment p-6 sm:p-8">
            <SectionHeading title="A Simple Weekly Lent Plan" />
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Daily</p>
                <ul className="mt-3 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
                  {dailyPlan.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Weekly</p>
                <ul className="mt-3 space-y-3 pl-5 text-base leading-7 text-muted marker:text-gold list-disc">
                  {weeklyPlan.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="liturgical-callout liturgical-callout-pastoral">
            <SectionHeading title="Lent Without Scrupulosity" />
            <p className="daily-card-readable mt-4 text-base leading-8 text-muted">
              Lent should lead to humility, mercy, and love, not panic or self-hatred. If you struggle with
              scrupulosity or anxiety, choose a simple practice, stay close to prayer and the sacraments, and
              follow the guidance of a trusted priest or spiritual director.
            </p>
            <div className="mt-6">
              <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Open the Confession Guide
              </Link>
            </div>
          </article>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <SectionHeading title="Go Deeper This Lent" />
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {deeperLinks.map((link) => (
              <Link key={link.href} href={link.href} className="card dashboard-card focus-ring flex min-h-28 items-center p-5 transition hover:-translate-y-0.5 hover:border-gold">
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
