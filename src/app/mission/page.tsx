import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "The Mission of the Church",
  description:
    "Learn how the Church prays, forms vocations, spreads the Gospel, and serves the poor, with ways to pray, discern, give, and support Catholic mission.",
  path: "/mission",
  keywords: [
    "mission of the Church",
    "Catholic mission",
    "Catholic vocations",
    "Catholic evangelization",
    "pray for vocations",
    "support Catholic mission",
  ],
});

const prayerLinks = [
  { label: "The Holy Mass", href: "/mass" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Liturgy of the Hours", href: "/liturgy-of-the-hours" },
  { label: "Holy Rosary", href: "/rosary" },
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "Daily Rule of Life", href: "/rule-of-life" },
];

const gospelActions = [
  "Pray daily for the missions and for those who have not yet heard the Gospel with clarity.",
  "Invite someone to Mass, Adoration, or a simple time of prayer.",
  "Learn the faith well so you can speak the truth with humility and peace.",
  "Support faithful Catholic apostolates with discernment and charity.",
  "Serve the hungry, sick, poor, lonely, and children in need with practical mercy.",
];

const supportCards = [
  {
    title: "Pray for missionaries and vocations",
    body:
      "Offer daily prayer for priests, seminarians, religious, catechists, missionaries, and families who are trying to live the Gospel faithfully.",
  },
  {
    title: "Support seminarians and priestly formation",
    body:
      "Consider helping future priests receive sound human, spiritual, intellectual, and pastoral formation as they prepare to serve the Church.",
  },
  {
    title: "Help children receive education",
    body:
      "Catholic mission often includes schools, catechesis, and patient formation for children who need stability, learning, and hope.",
  },
  {
    title: "Help provide food, water, medicine, and care",
    body:
      "Material works of mercy can protect vulnerable families and witness to Christ's love in places marked by hardship, illness, or isolation.",
  },
  {
    title: "Support missionary priests in difficult places",
    body:
      "Some priests serve communities with few resources, long travel distances, and significant pastoral needs. Prayer and prudent material support can strengthen that work.",
  },
];

export default function MissionPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Mission of the Church",
              description:
                "Learn how the Church prays, forms vocations, spreads the Gospel, and serves the poor, with ways to pray, discern, give, and support Catholic mission.",
              path: "/mission",
            }),
            buildArticleStructuredData({
              headline: "The Mission of the Church",
              description:
                "Learn how the Church prays, forms vocations, spreads the Gospel, and serves the poor, with ways to pray, discern, give, and support Catholic mission.",
              path: "/mission",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "About", path: "/about" },
              { name: "Mission", path: "/mission" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Mission" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Mission</p>
          <h1 className="font-display mt-3 max-w-5xl text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Pray with the Church. Listen for your vocation. Help spread the Gospel.
          </h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            The Church&apos;s mission begins in worship and flows outward into witness, service, formation, and charity. Daily Oratory exists to help that mission take root in ordinary Catholic life through prayer, reverence, and steady fidelity.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/begin-in-prayer" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Begin in prayer
            </Link>
            <Link href="/formation" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Explore vocation and formation
            </Link>
          </div>
        </header>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Rooted in worship</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">How the Church prays</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Catholic mission is never separate from prayer. The Church is formed at the altar, nourished by Sacred Scripture, taught by the rhythm of the liturgy, and strengthened through daily habits of devotion, repentance, mercy, and silence before God.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            The Mass, the Liturgy of the Hours, the Rosary, Eucharistic Adoration, daily prayer, and works of mercy help Christians remain close to Christ so that their witness is truthful, peaceful, and fruitful.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {prayerLinks.map((link) => (
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

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Call and holiness</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Vocation and the call to holiness</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Every Christian is called to holiness. That call is lived in different ways: marriage, priesthood, consecrated life, the permanent diaconate, and generous single life offered to God in love and service.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            Vocation should be approached prayerfully, never anxiously or under pressure. Ask the Lord for clarity, remain close to the sacraments, seek wise pastoral guidance, and trust that faithful discernment often grows slowly through peace, sacrifice, and obedience.
          </p>
          <div className="liturgical-callout liturgical-callout-pastoral mt-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-burgundy">A gentle intention</p>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
              Pray for priests, seminarians, religious, families, catechists, missionaries, and young people who are listening for God&apos;s will.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/ocia" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Becoming Catholic
              </Link>
              <Link href="/formation" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Catholic Formation
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Witness and mercy</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Spread the Gospel</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Evangelization means bearing witness to Jesus Christ through prayer, truth, charity, sacramental life, teaching, patience, and mercy. The Gospel is not spread by noise alone, but by lives shaped by conversion and love.
          </p>
          <ul className="daily-readable mt-6 grid gap-3 text-base leading-8 text-muted">
            {gospelActions.map((action) => (
              <li key={action} className="rounded-3xl border border-stone bg-ivory/70 px-5 py-4">
                {action}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Support mission</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Support Catholic mission</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Some forms of support are spiritual and hidden. Others are practical and material. Both can serve the Church when offered with prudence, charity, and a sincere desire to help Christ be known and loved.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {supportCards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.body}</p>
              </article>
            ))}
            <article className="rounded-3xl border border-gold/60 bg-ivory/90 p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">External Catholic option</p>
              <h3 className="font-display mt-3 text-2xl font-semibold text-navy">Missionary Society of St. Paul</h3>
              <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
                One Catholic missionary option to prayerfully consider is the Missionary Society of St. Paul. Their mission pages describe opportunities to support seminarian formation, school apostolates, orphans, medicine for the sick, food for the hungry, water for the thirsty, and priests serving difficult mission areas.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mspfathers.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Visit MSP Fathers (external)
                </a>
                <a
                  href="https://mspfathers.org/project-partner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  View project partners (external)
                </a>
              </div>
            </article>
          </div>
          <div className="liturgical-callout liturgical-callout-warning mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-burgundy">Discernment note</p>
            <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
              Daily Oratory does not process donations for external apostolates. Please review any organization&apos;s mission, leadership, financial practices, and donation page before giving.
            </p>
          </div>
        </section>

        <section className="mt-10 prayer-card p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Original Daily Oratory prayer</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A prayer for the mission of the Church</h2>
          <div className="mt-6 rounded-[1.5rem] border border-stone/70 bg-white/70 p-5">
            <p className="daily-prayer-readable text-sm text-navy">
              Lord Jesus Christ,
              {"\n"}send laborers into Your harvest and keep Your Church faithful in prayer.
              {"\n"}Teach us to worship with reverence, to hear Your call with trust, to love the poor with generosity, and to proclaim the Gospel with humility and courage.
              {"\n"}Strengthen priests, families, missionaries, catechists, and all who serve in hidden ways.
              {"\n"}Make our daily lives a quiet offering for Your glory and the salvation of souls.
              {"\n"}Amen.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
