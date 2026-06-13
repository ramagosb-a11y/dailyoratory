import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pageTitle = "The Eucharist | Catholic Guide to the Real Presence and Holy Communion | Daily Oratory";
const pageDescription =
  "A Catholic guide to the Eucharist, the Real Presence of Jesus, the Mass, Holy Communion, Adoration, Confession, and how to receive with faith and reverence.";
const pagePath = "/sacraments/eucharist";
const pageKeywords = [
  "Eucharist",
  "Holy Communion",
  "Real Presence",
  "Catholic Mass",
  "Blessed Sacrament",
  "Adoration",
  "transubstantiation",
  "Communion",
  "Eucharistic prayer",
];

const baseMetadata = createPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
  keywords: pageKeywords,
});

export const metadata: Metadata = {
  ...baseMetadata,
  title: {
    absolute: pageTitle,
  },
  openGraph: {
    ...baseMetadata.openGraph,
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    ...baseMetadata.twitter,
    title: pageTitle,
    description: pageDescription,
  },
};

const anchorLinks = [
  { label: "Meaning", href: "#what-is-the-eucharist" },
  { label: "Real Presence", href: "#real-presence" },
  { label: "Mass", href: "#mass" },
  { label: "Communion", href: "#holy-communion" },
  { label: "Prepare", href: "#prepare" },
  { label: "Adoration", href: "#adoration" },
  { label: "Questions", href: "#questions" },
];

const foundationPoints = [
  "The Eucharist is the sacrament of the Body and Blood of Christ.",
  "At Mass, bread and wine become the Body and Blood of Jesus.",
  "The outward appearances remain bread and wine, but the reality is changed.",
  "The Eucharist is Christ's presence, sacrifice, meal, and communion.",
  "Catholics receive the Eucharist as a gift, not as a reward for being perfect.",
];

const fourWays = [
  {
    title: "Presence",
    body: "The Eucharist is Jesus truly present: Body, Blood, Soul, and Divinity.",
  },
  {
    title: "Sacrifice",
    body: "The Mass makes present Christ's one sacrifice on the Cross.",
  },
  {
    title: "Communion",
    body: "Holy Communion unites us with Christ and with the Church.",
  },
  {
    title: "Thanksgiving",
    body: "The word Eucharist means thanksgiving; the Church gives thanks to the Father through Christ.",
  },
];

const communionFruits = [
  "Deepens union with Jesus.",
  "Strengthens charity.",
  "Helps us resist sin and live as disciples.",
  "Calls us to unity with the Church.",
];

const preparationChecklist = [
  "Be Catholic and properly prepared.",
  "Believe what the Church teaches about the Eucharist.",
  "Be in a state of grace.",
  "Fast according to current Church discipline where applicable.",
  "Reconcile serious sin through Confession before receiving.",
  "Approach with reverence and humility.",
  "Pray before Mass and after Communion.",
];

const cannotReceiveReasons = [
  "Not Catholic.",
  "Not yet prepared.",
  "Conscious of serious sin.",
  "Needing Confession.",
  "Marriage or canonical situations that need pastoral clarification.",
  "Personal discernment.",
  "Health or other circumstances.",
];

const adorationSteps = [
  "Enter quietly.",
  "Make the Sign of the Cross.",
  "Tell Jesus you are there.",
  "Sit in silence.",
  "Read a Gospel passage.",
  "Pray slowly.",
  "End with thanksgiving.",
];

const dailyLifePractices = [
  "Gratitude.",
  "Charity.",
  "Forgiveness.",
  "Service to the poor.",
  "Unity with the Church.",
  "Resistance to sin.",
  "Sunday worship.",
  "Hope in suffering.",
];

const afterMassQuestions = [
  "What grace did I receive?",
  "Where is Christ asking me to love?",
  "What sin or selfishness must I surrender?",
  "Who needs mercy from me this week?",
];

const commonQuestions = [
  {
    question: "Is the Eucharist just a symbol?",
    answer:
      "Catholics believe the Eucharist is a sacramental sign, but not merely a symbol. It truly is the Body and Blood of Christ under the appearances of bread and wine.",
  },
  {
    question: "Is Jesus sacrificed again at every Mass?",
    answer:
      "No. The Mass makes present Christ's one sacrifice on Calvary; it does not repeat it as a new sacrifice.",
  },
  {
    question: "Why can't everyone receive Communion?",
    answer:
      "Holy Communion expresses real union with Christ and His Church. For that reason, Catholics are called to receive only when properly prepared and in communion with the Church.",
  },
  {
    question: "What if I missed Mass or have serious sin?",
    answer:
      "Speak with a priest and go to Confession before receiving Communion if you are conscious of serious sin.",
  },
  {
    question: "What should I do after Communion?",
    answer:
      "Pray in thanksgiving. Speak to Jesus simply, ask for grace, and remain recollected.",
  },
  {
    question: "What if I feel nothing?",
    answer:
      "The Eucharist is real even when emotions are quiet. Faith is deeper than feelings.",
  },
];

const eucharisticPrayerLinks = [
  { label: "Anima Christi", href: "/prayers" },
  { label: "Act of Spiritual Communion", href: "/prayers" },
  { label: "Prayer Before Mass", href: "/prayers" },
  { label: "Prayer After Communion", href: "/prayers" },
  { label: "Prayer Before the Blessed Sacrament", href: "/prayers" },
  { label: "Sacred Heart Novena", href: "/prayers/novena-to-the-sacred-heart-of-jesus" },
  { label: "O Sacrum Convivium", href: "/prayers/o-sacrum-convivium" },
  { label: "Tantum Ergo", href: "/prayers/tantum-ergo" },
  { label: "O Salutaris Hostia", href: "/prayers/o-salutaris-hostia" },
];

const scriptureReferences = [
  "John 6",
  "Luke 22:14-20",
  "Matthew 26:26-28",
  "Mark 14:22-24",
  "1 Corinthians 10:16-17",
  "1 Corinthians 11:23-29",
  "Acts 2:42",
];

const catechismReferences = [
  "CCC 1322-1419",
  "CCC 1324",
  "CCC 1333",
  "CCC 1356-1381",
  "CCC 1374",
  "CCC 1376",
  "CCC 1385",
  "CCC 1391-1401",
  "CCC 1415",
];

const relatedGuides = [
  { label: "Catholic Life Roadmap", href: "/catholic-life" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Mass Readings", href: "/reflections/mass-readings" },
  { label: "Sacred Heart Novena", href: "/prayers/novena-to-the-sacred-heart-of-jesus" },
  { label: "Act of Spiritual Communion", href: "/prayers" },
  { label: "Anima Christi", href: "/prayers" },
  { label: "Grace", href: "/formation/grace" },
  { label: "Sin and Temptation", href: "/sin-and-temptation" },
  { label: "What Should I Do?", href: "/what-should-i-do" },
  { label: "Catholic Q&A", href: "/catholic-answers" },
  { label: "The Holy Mass", href: "/mass" },
  { label: "Eucharistic Adoration", href: "/adoration" },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: commonQuestions.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function EucharistPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "The Eucharist",
              description: pageDescription,
              path: pagePath,
            }),
            buildArticleStructuredData({
              headline: "The Eucharist",
              description: pageDescription,
              path: pagePath,
              keywords: pageKeywords,
            }),
            buildBreadcrumbList([
              { name: "Sacraments", path: "/sacraments" },
              { name: "The Eucharist", path: pagePath },
            ]),
            faqStructuredData,
          ]}
        />

        <Breadcrumbs items={[{ label: "Sacraments", href: "/sacraments" }, { label: "The Eucharist" }]} />

        <header className="liturgical-page-hero mt-8 overflow-hidden rounded-3xl border border-gold/25 bg-white/80 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catholic Formation</p>
              <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
                The Eucharist
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
                The Real Presence of Jesus Christ, given to the Church in the Mass and received in Holy Communion.
              </p>
              <p className="mt-5 max-w-4xl text-base leading-8 text-muted">
                The Eucharist is not only a symbol, a reminder, or a holy meal. Catholics believe that Jesus Christ is
                truly present - Body, Blood, Soul, and Divinity - under the appearances of bread and wine. The Eucharist
                is the source and summit of the Christian life because it is Christ Himself.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/mass" className="btn btn-primary focus-ring daily-button-readable justify-center">
                  See How It Fits in the Mass
                </Link>
                <Link href="/confession" className="btn btn-secondary focus-ring daily-button-readable justify-center">
                  Confession Guide
                </Link>
              </div>
            </div>
            <aside className="rounded-3xl border border-gold/30 bg-ivory/80 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">A quiet summary</p>
              <p className="mt-4 font-display text-3xl font-semibold leading-tight text-navy">
                The Eucharist is Christ Himself.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                The Church approaches this mystery with faith, reverence, thanksgiving, and humble love.
              </p>
            </aside>
          </div>
        </header>

        <div className="mt-8">
          <SectionJumpNav
            ariaLabel="Eucharist page navigation"
            mobileTitle="Open the Eucharist guide outline"
            items={anchorLinks}
          />
        </div>

        <div className="mt-12 grid gap-10">
          <section id="what-is-the-eucharist" className="card-parchment scroll-mt-24 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Meaning</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">What Is the Eucharist?</h2>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 text-base leading-8 text-muted">
                <p>
                  The Eucharist is the sacrament of the Body and Blood of Christ. At Mass, by Christ&apos;s word and the
                  power of the Holy Spirit, bread and wine become the Body and Blood of Jesus. The appearances remain
                  bread and wine, but the deepest reality is changed.
                </p>
                <p>
                  For Catholics, the Eucharist is not one idea among many. It is Christ&apos;s presence, Christ&apos;s sacrifice,
                  the sacred meal of the Church, and the communion by which believers are united more deeply to Him.
                </p>
              </div>
              <ul className="grid gap-3">
                {foundationPoints.map((item) => (
                  <li key={item} className="rounded-3xl border border-stone-200 bg-ivory/80 px-4 py-3 text-sm leading-7 text-navy">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <CitationList items={["John 6", "Luke 22:19-20", "1 Corinthians 11:23-29", "CCC 1324", "CCC 1374"]} />
          </section>

          <section id="real-presence" className="grid scroll-mt-24 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Real Presence</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Jesus Is Truly Present</h2>
              <div className="mt-5 grid gap-4 text-base leading-8 text-muted">
                <p>
                  Catholics believe Jesus is truly, really, and substantially present in the Eucharist. Christ is
                  present to His Church in many ways: in the Word, in prayer, in the poor, in the gathered faithful, and
                  in the sacraments. But His Eucharistic presence is unique.
                </p>
                <p>
                  The Eucharist is not merely a sign pointing to Jesus. It is Jesus sacramentally present. The word often
                  used for this mystery is transubstantiation: the substance becomes Christ&apos;s Body and Blood, while the
                  appearances of bread and wine remain.
                </p>
              </div>
              <CitationList items={["John 6:51", "John 6:53-56", "Matthew 26:26-28", "CCC 1376"]} />
            </article>
            <aside className="rounded-3xl border border-gold/30 bg-burgundy p-6 text-white shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">Remember</p>
              <p className="mt-4 font-display text-3xl font-semibold leading-tight">
                The Eucharist still looks, tastes, and feels like bread and wine, but by Christ&apos;s word and the power of
                the Holy Spirit, the reality has changed.
              </p>
            </aside>
          </section>

          <section id="mass" className="card-parchment scroll-mt-24 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">The Mass</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Why the Mass Matters</h2>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <div className="grid gap-4 text-base leading-8 text-muted">
                <p>
                  The Eucharist happens in the Mass. In the Mass, the Church hears God&apos;s Word, offers herself with
                  Christ, and receives Christ in Holy Communion. The two great parts are the Liturgy of the Word and the
                  Liturgy of the Eucharist.
                </p>
                <p>
                  Catholics do not believe Jesus is sacrificed again as a new sacrifice. The Mass makes present the one
                  sacrifice of Calvary sacramentally. The Cross is not repeated. The Church is drawn into the one saving
                  sacrifice of Christ.
                </p>
              </div>
              <div className="rounded-3xl border border-gold/30 bg-ivory/80 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">A key distinction</p>
                <p className="mt-4 text-base font-semibold leading-8 text-navy">
                  The Mass does not repeat Calvary; it makes the one sacrifice present.
                </p>
                <Link href="/mass" className="mt-5 inline-flex text-sm font-semibold text-navy underline-offset-4 hover:underline">
                  Open the Mass guide
                </Link>
              </div>
            </div>
            <CitationList items={["Luke 22:19", "1 Corinthians 10:16-17", "CCC 1366-1367"]} />
          </section>

          <section className="scroll-mt-24" id="four-ways">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Four ways to understand</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Presence, Sacrifice, Communion, Thanksgiving</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {fourWays.map((item) => (
                <article key={item.title} className="card-parchment p-6">
                  <h3 className="font-display text-3xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="holy-communion" className="grid scroll-mt-24 gap-5 lg:grid-cols-[1fr_0.9fr]">
            <article className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Holy Communion</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Receiving the Body and Blood of Christ</h2>
              <div className="mt-5 grid gap-4 text-base leading-8 text-muted">
                <p>
                  Holy Communion is receiving the Body and Blood of Christ. Communion deepens union with Jesus,
                  strengthens charity, helps us resist sin, and draws us into visible unity with the Church.
                </p>
                <p>
                  This is why Catholics receive Communion with reverence rather than casually. The gift is deeply
                  personal, but it is never private in isolation from the Church.
                </p>
              </div>
            </article>
            <aside className="card-parchment p-6">
              <h3 className="font-display text-3xl font-semibold text-navy">What Communion strengthens</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                {communionFruits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
            <Callout>
              The Eucharist is not a prize for the perfect. It is food for the journey. But because it is truly Christ,
              Catholics are called to receive with faith, reverence, and a properly disposed heart.
            </Callout>
          </section>

          <section id="prepare" className="card-parchment scroll-mt-24 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Before Communion</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Preparing to Receive Communion</h2>
            <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-gold/30 bg-ivory/80 p-5">
                <p className="text-base font-semibold leading-8 text-navy">
                  Serious sin should be brought to sacramental Confession before receiving Holy Communion. This is not
                  meant to create panic. It is a call to mercy, truth, and reverence before Christ.
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  If you are unsure whether you should receive Communion, speak with a priest. Do not panic, and do not
                  try to solve serious questions only through online searching.
                </p>
              </div>
              <Checklist items={preparationChecklist} />
            </div>
            <CitationList items={["1 Corinthians 11:27-29", "CCC 1385", "CCC 1457"]} />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/confession" className="btn btn-primary focus-ring daily-button-readable">
                Confession Guide
              </Link>
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable">
                Act of Contrition
              </Link>
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable">
                Prayer Before Mass
              </Link>
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable">
                Prayer After Communion
              </Link>
            </div>
          </section>

          <section id="cannot-receive" className="grid scroll-mt-24 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">When not receiving</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">If You Cannot Receive Communion</h2>
              <div className="mt-5 grid gap-4 text-base leading-8 text-muted">
                <p>
                  Some people at Mass do not receive Communion at a particular liturgy for different reasons. They may
                  not be Catholic, may not yet be prepared, may need Confession, or may be sorting through a pastoral or
                  canonical situation with a priest.
                </p>
                <p>
                  Not receiving Communion at a particular Mass does not mean you are rejected by God. You can still pray,
                  listen to the Word, make a spiritual communion, and take the next faithful step.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/prayers" className="btn btn-primary focus-ring daily-button-readable">
                  Act of Spiritual Communion
                </Link>
              </div>
            </article>
            <Checklist items={cannotReceiveReasons} />
            <Callout>
              If you cannot receive Communion, you can still pray and make an Act of Spiritual Communion.
            </Callout>
          </section>

          <section id="adoration" className="card-parchment scroll-mt-24 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Blessed Sacrament</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Eucharistic Adoration</h2>
            <div className="mt-5 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="grid gap-4 text-base leading-8 text-muted">
                <p>
                  Because Jesus remains present in the Eucharist after Mass, Catholics adore Him in the Blessed
                  Sacrament. Adoration is prayer before Jesus truly present. It can be silent, simple, and peaceful.
                </p>
                <p>
                  Beginners can sit quietly, speak honestly to Jesus, read Scripture, pray the Rosary, or simply be with
                  Him. The point is not to perform perfectly, but to remain with Christ in faith and love.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/adoration" className="btn btn-primary focus-ring daily-button-readable">
                    Open Adoration
                  </Link>
                  <Link href="/adoration/holy-hour" className="btn btn-secondary focus-ring daily-button-readable">
                    Holy Hour Guide
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-ivory/80 p-5">
                <h3 className="font-display text-3xl font-semibold text-navy">How to begin Adoration</h3>
                <ol className="mt-4 grid gap-3 text-sm leading-7 text-muted">
                  {adorationSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable">
                Anima Christi
              </Link>
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable">
                Act of Spiritual Communion
              </Link>
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable">
                Prayer Before the Blessed Sacrament
              </Link>
            </div>
          </section>

          <section id="daily-life" className="grid scroll-mt-24 gap-5 lg:grid-cols-2">
            <article className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">After Mass</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Eucharist and Daily Life</h2>
              <p className="mt-5 text-base leading-8 text-muted">
                The Eucharist should shape how Catholics live. Communion with Christ becomes gratitude, charity,
                forgiveness, service, unity with the Church, resistance to sin, Sunday worship, and hope in suffering.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {dailyLifePractices.map((item) => (
                  <span key={item} className="season-pill border-gold/40 bg-ivory px-3 py-2 text-navy">
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article className="card-parchment p-6 sm:p-8">
              <h3 className="font-display text-3xl font-semibold text-navy">After Mass, ask</h3>
              <ul className="mt-5 grid gap-3 text-base leading-8 text-muted">
                {afterMassQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section id="questions" className="scroll-mt-24">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Questions</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Common Misunderstandings</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {commonQuestions.map((item) => (
                <article key={item.question} className="card-parchment p-6">
                  <h3 className="font-display text-2xl font-semibold text-navy">{item.question}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="prayers" className="card-parchment scroll-mt-24 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayer library</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Eucharistic Prayers</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">
              These prayers help Catholics prepare for Mass, remain in thanksgiving after Communion, and adore Jesus in
              the Blessed Sacrament.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {eucharisticPrayerLinks.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="focus-ring rounded-3xl border border-stone-200 bg-ivory/80 px-5 py-4 text-sm font-semibold leading-6 text-navy transition hover:border-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section id="references" className="grid scroll-mt-24 gap-5 lg:grid-cols-2">
            <article className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Scripture</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Scripture for Eucharistic Prayer</h2>
              <ReferenceGrid items={scriptureReferences} />
            </article>
            <article className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Catechism</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Catechism to Read</h2>
              <ReferenceGrid items={catechismReferences} />
            </article>
          </section>

          <section id="related" className="card-parchment scroll-mt-24 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Daily Oratory</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Related Guides</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedGuides.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  className="focus-ring rounded-3xl border border-stone-200 bg-ivory/80 px-5 py-4 text-sm font-semibold leading-6 text-navy transition hover:border-gold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-stone-200 bg-white/70 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Source and copyright notes</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              This page uses original Daily Oratory summaries, Scripture references, Catechism paragraph references, and
              internal Daily Oratory links. It does not reproduce long copyrighted Church texts.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

function CitationList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2" aria-label="References">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-gold/30 bg-white/70 px-3 py-1 text-xs font-semibold text-burgundy">
          {item}
        </span>
      ))}
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="rounded-3xl border border-stone-200 bg-ivory/80 px-4 py-3 text-sm leading-7 text-navy">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:col-span-2 rounded-3xl border border-gold/30 bg-white/80 p-5">
      <p className="text-base font-semibold leading-8 text-navy">{children}</p>
    </div>
  );
}

function ReferenceGrid({ items }: { items: string[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <span key={item} className="rounded-2xl border border-stone-200 bg-ivory/80 px-4 py-3 text-sm font-semibold text-navy">
          {item}
        </span>
      ))}
    </div>
  );
}
