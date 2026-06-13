import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConfessionReportCta } from "@/components/confession/ConfessionReportCta";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Confession Guide",
  description:
    "A simple Catholic confession guide with prayers, what to say, and gentle help for Catholics returning to confession or anyone who wants to understand the Sacrament of Reconciliation.",
  path: "/confession",
});

const guideSections = [
  {
    title: "Prayer Before Confession",
    paragraphs: [
      "Come Holy Spirit, into my soul. Enlighten my mind that I may know the sins I ought to confess, and grant me your grace to confess them fully, humbly, and with a contrite heart. Help me to firmly resolve not to commit them again. O Blessed Virgin, Mother of my Redeemer, intercede for me through the Passion of Your Son, that I may obtain the grace to make a good confession. All you blessed Angels and Saints of God, pray for me, a sinner, that I may repent from my sins, and that my heart may be forever united with yours in eternal love. Amen.",
    ],
  },
  {
    title: "During Confession",
    paragraphs: [
      '"In the name of the Father, and of the Son, and of the Holy Spirit Amen. Forgive me, Father, for I have sinned. My last confession was ? (weeks, months, years) ago."',
    ],
    prompts: [
      {
        label: "My Current State of Life",
        text: "Currently: (Going to 2-5 Masses per week, monthly confessions...)",
      },
      {
        label: "Sins Since My Last Confession",
        text: "List:",
      },
      {
        label: "Sins of the Past That Were Never Confessed",
        text: "List:",
      },
    ],
  },
  {
    title: "Act of Contrition",
    paragraphs: [
      "My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, I have sinned against you whom I should love above all things. I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin. Our Savior Jesus Christ suffered and died for us. In his name, my God, have mercy.",
      "Amen.",
    ],
  },
  {
    title: "Performing Your Penance",
    paragraphs: [
      "Pay close attention to the penance that the priest gives you. For after you have thanked the Lord for absolving your sins, it is time to perform your penance. Follow his instructions, and take his advice into consideration. By doing exactly as he instructs, you will be showing that you truly are remorseful for your actions, and wanting to be absolved of your sins.",
    ],
  },
  {
    title: "Prayer After Confession",
    paragraphs: [
      "My dearest Jesus, I have told all my sins to the best of my ability. I have sincerely tried to make a good confession and I know that you have forgiven me. Thank you dear Jesus! Your divine heart is full of love and mercy for poor sinners. I love You dear Jesus; you are so good to me. My loving Saviour, I shall try to keep from sin and to love You more each day. Dearest Mother Mary, pray for me and help me to keep all my promises. Protect me and do not let me fall back into sin. Dear God, help me to lead a good life. Without Your grace I can do nothing.",
      "Amen!",
    ],
  },
];

export default function ConfessionPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Confession Guide",
              description:
                "A simple Catholic confession guide with prayers, what to say, and gentle help for Catholics returning to confession or anyone who wants to understand the Sacrament of Reconciliation.",
              path: "/confession",
            }),
            buildArticleStructuredData({
              headline: "Confession Guide",
              description:
                "A simple Catholic confession guide with prayers, what to say, and gentle help for Catholics returning to confession or anyone who wants to understand the Sacrament of Reconciliation.",
              path: "/confession",
            }),
            buildBreadcrumbList([{ name: "Confession", path: "/confession" }]),
          ]}
        />
        <Breadcrumbs items={[{ label: "Confession" }]} />

        <header className="mt-8 border-b border-stone/70 pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacrament of mercy</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Confession Guide
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
            A simple guide for prayer, preparation, confession, contrition, penance, and thanksgiving.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            If you are Catholic and returning to confession, this guide can help you prepare. If
            you are not Catholic but curious about confession, this page explains why the Sacrament
            of Reconciliation is central to Catholic life.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/confession/examination/start" className="btn btn-primary focus-ring">
              Start examination
            </Link>
            <Link href="/confession/how-to-go" className="btn btn-secondary focus-ring">
              How to go
            </Link>
            <Link href="/body-soul-spirit" className="btn btn-secondary focus-ring">
              Interior temple
            </Link>
            <Link href="/daily-examen" className="btn btn-secondary focus-ring">
              Daily Examen
            </Link>
          </div>
        </header>

        <ConfessionReportCta className="mt-8" />

        <div className="mt-10 space-y-8">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Start here</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Returning Catholics Path
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              If you have been away from the Church, begin with mercy, then return to Mass, prayer,
              Scripture, and steady Catholic life one faithful step at a time.
            </p>
            <div className="mt-6">
              <Link href="/catholic-life" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Open the Catholic Life Roadmap
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Grace</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Confession Restores Grace
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Mortal sin destroys sanctifying grace, but the Sacrament of Reconciliation restores the soul to grace
              through Christ’s mercy.
            </p>
            <div className="mt-6">
              <Link href="/formation/grace/sanctifying-grace" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Sanctifying Grace
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Eternal life</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Confession Prepares the Soul to Live and Die in Grace
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Confession helps the Christian prepare for judgment with repentance, peace, and trust in Jesus Christ.
              The goal is not fear, but mercy, truth, and readiness to meet the Lord.
            </p>
            <div className="mt-6">
              <Link href="/formation/eschatology/judgment" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Judgment and Mercy
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Conversion</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Detachment from Sin
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Confession helps the heart reject sin more sincerely and return to God with peace. Learn how
              complete detachment from sin relates to conversion, indulgences, prayer, and the sacramental life.
            </p>
            <div className="mt-6">
              <Link href="/indulgences/detachment-from-sin" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Learn About Detachment from Sin
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Before confession</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Pray Before Confession: The Seven Penitential Psalms
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              These ancient Psalms can help lead the heart into honesty, contrition, mercy, and gratitude
              before and after the Sacrament of Reconciliation.
            </p>
            <div className="mt-6">
              <Link href="/prayers/seven-penitential-psalms#before-confession" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Pray Before Confession
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Urgent sacramental need</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Need Confession urgently?
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              If serious sin or danger of death is involved, contact a priest or parish directly, make an act of contrition,
              and use the emergency guide for simple next steps.
            </p>
            <div className="mt-6">
              <Link href="/sacramental-emergency#urgent-confession" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Urgent Confession Steps
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related priority guides</p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
              Keep mercy connected to prayer and daily Catholic life
            </h2>
            <p className="daily-readable mt-5 text-base leading-8 text-muted">
              Confession belongs to a larger Catholic path of prayer, formation, mercy, and practical next steps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Prayer Library", href: "/prayers" },
                { label: "Catholic Life Roadmap", href: "/catholic-life" },
                { label: "Catholic Q&A", href: "/catholic-answers" },
                { label: "What Should I Do?", href: "/what-should-i-do" },
                { label: "Sacred Heart Novena", href: "/prayers/novena-to-the-sacred-heart-of-jesus" },
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

          {guideSections.map((section) => (
            <section key={section.title} className="card-parchment p-6 sm:p-8">
              <h2 className="font-display text-3xl font-semibold leading-tight text-navy sm:text-4xl">
                {section.title}
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-9 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.prompts ? (
                <div className="mt-7 grid gap-4">
                  {section.prompts.map((prompt) => (
                    <div key={prompt.label} className="rounded-sm border border-stone bg-ivory/75 p-4">
                      <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-burgundy">{prompt.label}</h3>
                      <p className="mt-3 text-base leading-7 text-muted">{prompt.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
