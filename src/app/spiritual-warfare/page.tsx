import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Catholic Spiritual Warfare and Deliverance",
  description:
    "A calm Catholic guide to spiritual warfare, ordinary means of grace, when to seek parish or diocesan help, and how to approach deliverance without fear or sensationalism.",
  path: "/spiritual-warfare",
  keywords: [
    "Catholic spiritual warfare",
    "deliverance",
    "ordinary means of grace",
    "temptation",
    "confession",
    "spiritual direction",
    "parish priest",
    "diocesan help",
    "exorcism",
    "sacramentals",
  ],
});

const ordinaryMeans = [
  {
    title: "Prayer",
    body:
      "Begin with simple, faithful prayer: the Our Father, the Psalms, the Rosary, quiet prayer before God, and short acts of trust during moments of fear or temptation.",
  },
  {
    title: "Confession",
    body:
      "Frequent Confession helps the soul face sin honestly, receive mercy, break harmful patterns, and return to grace with peace rather than panic.",
  },
  {
    title: "Mass and Eucharistic Adoration",
    body:
      "The Christian life is anchored in Christ Himself. Stay close to Sunday Mass, Holy Communion according to the Church's discipline, and time before the Blessed Sacrament.",
  },
  {
    title: "Scripture",
    body:
      "Sacred Scripture steadies the mind and heart. Read with the Church, especially passages that strengthen trust, repentance, perseverance, and hope in Jesus Christ.",
  },
  {
    title: "Forgiveness and repentance",
    body:
      "Resentment, hidden sin, and refusal to repent can deepen spiritual turmoil. Ask the Lord for light, forgive where you can, and turn away from grave sin and occult practices.",
  },
  {
    title: "Sacramentals used faithfully",
    body:
      "Holy water, blessed medals, crucifixes, scapulars, and blessed salt are helps to faith when used reverently. They are never charms or substitutes for conversion and sacramental life.",
  },
];

const helpSignals = [
  "Persistent spiritual fear, grave distress, or confusion that does not lessen through ordinary prayer and sacramental life.",
  "Past involvement with occult practices, divination, curses, seances, ritual magic, or other spiritually dangerous activity.",
  "A pattern of isolation, secrecy, or panic that needs careful pastoral accompaniment rather than online self-diagnosis.",
];

const relatedLinks = [
  { label: "Confession Guide", href: "/confession", description: "Prepare for sacramental mercy and return to grace peacefully." },
  { label: "Guided Examination", href: "/confession/examination", description: "Examine your conscience carefully before Confession." },
  { label: "Sin, Temptation, and Conversion", href: "/sin-and-temptation", description: "Understand temptation, repentance, mercy, and growth in holiness." },
  {
    label: "Resisting Temptation",
    href: "/sin-and-temptation/resisting-temptation",
    description: "Take practical Catholic steps when temptation appears.",
  },
  { label: "Prayer Library", href: "/prayers", description: "Find Catholic prayers for daily life, fear, repentance, and trust." },
  { label: "Eucharistic Adoration", href: "/adoration", description: "Spend quiet time before Jesus in the Blessed Sacrament." },
  {
    label: "Sacramental Emergency Guide",
    href: "/sacramental-emergency",
    description: "Know what to do when someone urgently needs a priest or sacramental help.",
  },
  { label: "Catholic Formation", href: "/formation", description: "Grow in doctrine, virtue, prayer, and steady discipleship." },
];

export default function SpiritualWarfarePage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Catholic Spiritual Warfare and Deliverance",
              description:
                "A calm Catholic guide to spiritual warfare, ordinary means of grace, when to seek parish or diocesan help, and how to approach deliverance without fear or sensationalism.",
              path: "/spiritual-warfare",
            }),
            buildArticleStructuredData({
              headline: "Catholic Spiritual Warfare and Deliverance",
              description:
                "A calm Catholic guide to spiritual warfare, ordinary means of grace, when to seek parish or diocesan help, and how to approach deliverance without fear or sensationalism.",
              path: "/spiritual-warfare",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Spiritual Warfare", path: "/spiritual-warfare" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Spiritual Warfare" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic guidance</p>
          <h1 className="font-display mt-3 max-w-5xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Catholic Spiritual Warfare and Deliverance
          </h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            Christ is Lord. Catholic spiritual warfare begins not with fear, but with grace: prayer, repentance,
            the sacraments, Scripture, parish life, and steady trust in Jesus Christ. The Church teaches us to take
            spiritual danger seriously without becoming fascinated by it.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            Most spiritual struggle is the ordinary Christian battle against temptation, discouragement, sin, and
            confusion. That is different from extraordinary demonic activity. Do not try to diagnose yourself, and
            do not treat alarming online material as a substitute for calm pastoral guidance.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#ordinary-means" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Begin with ordinary means of grace
            </Link>
            <Link href="#seek-help" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Learn when to seek help
            </Link>
          </div>
        </header>

        <section id="ordinary-means" className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Begin here</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Begin with ordinary means of grace</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            The ordinary Catholic path is the first and most important response to spiritual struggle. Before looking
            for specialized help, remain close to the ordinary life of grace that Christ gave His Church.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ordinaryMeans.map((item) => (
              <article key={item.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{item.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="liturgical-callout liturgical-callout-pastoral mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-burgundy">A steady reminder</p>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
              Spiritual warfare is part of ordinary Christian discipleship. Staying close to Christ usually looks
              quiet and faithful: prayer, worship, repentance, honesty, humility, and perseverance in the Church.
            </p>
          </div>
        </section>

        <section id="seek-help" className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pastoral discernment</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">When to seek help</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Some concerns should be brought to a priest, spiritual director, or diocesan office with humility and
            patience. The goal is discernment, not drama.
          </p>
          <ul className="daily-readable mt-6 grid gap-3 text-base leading-8 text-muted">
            {helpSignals.map((signal) => (
              <li key={signal} className="rounded-3xl border border-stone bg-ivory/70 px-5 py-4">
                {signal}
              </li>
            ))}
          </ul>
          <p className="daily-readable mt-6 max-w-4xl text-base leading-8 text-muted">
            A parish priest can help you begin calmly. In more serious cases, he may direct you to a diocesan office
            or other appropriate Church authority. This is the Church&apos;s ordinary path for discernment.
          </p>
          <div className="liturgical-callout liturgical-callout-warning mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-burgundy">Medical and mental-health caution</p>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
              Distressing symptoms, intrusive thoughts, hallucinations, self-harm concerns, panic, trauma symptoms,
              or danger to yourself or others should be addressed with qualified medical or mental-health
              professionals. If the situation is urgent, contact emergency services immediately.
            </p>
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Church authority</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Deliverance and exorcism</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            The Church distinguishes pastoral prayer, spiritual accompaniment, and deliverance ministry from solemn
            exorcism. Solemn exorcism is governed by Church authority and is never something a person should attempt
            privately.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            Confession, Anointing of the Sick, deliverance ministry, and exorcism all require appropriate priestly or
            diocesan guidance. Deliverance is not a substitute for the sacraments, parish care, mental-health care,
            or emergency help.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            If you are troubled, stay close to the Church, avoid private experiments, and ask for help with humility.
            Christ protects His people through the means He has entrusted to His Church.
          </p>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">External deliverance resource</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">External deliverance resource</h2>
          <div className="mt-6 rounded-3xl border border-gold/60 bg-ivory/90 p-5 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-burgundy">External website</p>
            <h3 className="font-display mt-3 text-2xl font-semibold text-navy">Be Battle Ready: Deliverance</h3>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
              For further discernment, Daily Oratory links to Be Battle Ready&apos;s deliverance page as an external
              resource. Daily Oratory does not copy or host that material here.
            </p>
            <div className="mt-5">
              <TrackedLink
                href="https://bebattleready.org/deliverance"
                external
                className="btn btn-gold focus-ring daily-button-readable min-h-12 justify-center"
                eventName="media_external_open"
                eventParams={{ page_path: "/spiritual-warfare", media_type: "external-deliverance-resource" }}
              >
                Visit Be Battle Ready: Deliverance
              </TrackedLink>
            </div>
            <p className="daily-card-readable mt-4 text-sm leading-7 text-muted">
              Daily Oratory links to this resource for further discernment; users should still seek parish, diocesan,
              medical, or emergency help when appropriate.
            </p>
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Keep close to grace</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Related Daily Oratory resources</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            These Daily Oratory pages can help you stay rooted in prayer, repentance, sacramental life, and peaceful
            Catholic formation.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-3xl border border-stone bg-ivory/80 px-5 py-4 transition hover:border-gold"
              >
                <span className="block font-display text-2xl font-semibold text-navy">{link.label}</span>
                <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{link.description}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
