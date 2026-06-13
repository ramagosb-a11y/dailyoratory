import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionJumpNav } from "@/components/SectionJumpNav";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pagePath = "/prayers/novena-to-the-sacred-heart-of-jesus";
const pageTitle = "Novena to the Sacred Heart of Jesus | Daily Oratory";
const pageDescription =
  "Learn about the Novena to the Sacred Heart of Jesus, when it is prayed, how it connects to love, mercy, reparation, the Eucharist, and where to pray the official USCCB novena.";
const usccbNovenaUrl = "https://www.usccb.org/novena-sacred-heart-jesus";
const usccbLitanyUrl =
  "https://www.usccb.org/prayer-and-worship/prayers-and-devotions/litanies/litany-of-the-sacred-heart-of-jesus.cfm";
const dilexitNosUrl = "https://www.vatican.va/content/francesco/en/encyclicals/documents/20241024-enciclica-dilexit-nos.html";
const ascensionStudyPlanUrl =
  "https://app.ascensionpress.com/study-plans/e3526c35-0210-4a91-8f10-498b062d67f2?_branch_match_id=1527743530337698689&utm_source=admin&utm_medium=share_plan&_branch_referrer=H4sIAAAAAAAAAwXBTQuCMBgA4H%2FTbUoXy0A6RCYGamqSXsbaXj8wt7ENmzv023ue0RipT77%2FmfjsEU2B60lwRKT0qFj8ilAFLAGiTCZW4OSMZxtlzf5Spi7I4kPeIRcTVj%2FsbWsXWzobhv3aJPjFSAElw%2FnRpLxtqidzqAjmzY535NVUdmOy%2BynoQamJD%2FitxFeDiq5sgD9B6PMBlAAAAA%3D%3D&_kx=NV1CRJz6NF7OZ-zFadTQxGyYmxRzx99fvVH_XdaPeRd_O8tJnYVSUdz-P6kyxhK-.TcpZhH";

const pageKeywords = [
  "Novena to the Sacred Heart of Jesus",
  "Sacred Heart novena",
  "Sacred Heart of Jesus",
  "First Friday",
  "June devotion",
  "reparation",
  "consecration",
  "Heart of Jesus",
  "USCCB Sacred Heart novena",
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

const jumpLinks = [
  { label: "What it is", href: "#what-is-the-novena" },
  { label: "When", href: "#when-prayed" },
  { label: "Nine themes", href: "#nine-themes" },
  { label: "Sacred Heart", href: "#sacred-heart-devotion" },
  { label: "Eucharist", href: "#sacred-heart-eucharist" },
  { label: "Reparation", href: "#sacred-heart-reparation" },
  { label: "How to pray", href: "#how-to-pray" },
  { label: "Prayer", href: "#daily-oratory-prayer" },
  { label: "Practices", href: "#practices" },
  { label: "Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
] as const;

const dayThemes = [
  {
    day: "Day 1",
    title: "Heart of Jesus, aflame with love for us",
    summary: "Begin by asking the Heart of Jesus to set your heart on fire with His love.",
    action: "Spend ten quiet minutes with the Gospel and ask Jesus to teach you His compassion.",
  },
  {
    day: "Day 2",
    title: "Heart of Jesus, source of justice and love",
    summary: "The love of Christ moves us toward justice, mercy, and care for the vulnerable.",
    action: "Choose one concrete act of charity or mercy today.",
  },
  {
    day: "Day 3",
    title: "Heart of Jesus, worthy of all praise",
    summary: "The Sacred Heart is adored most deeply when we praise Jesus in the Eucharist.",
    action: "Visit a church, attend Mass, or make a quiet act of adoration.",
  },
  {
    day: "Day 4",
    title: "Heart of Jesus, patient and full of mercy",
    summary: "The Heart of Jesus is patient and merciful toward sinners.",
    action: "Pray for the grace to forgive, repent, and trust mercy.",
  },
  {
    day: "Day 5",
    title: "Heart of Jesus, fountain of life and holiness",
    summary: "From the pierced Heart of Christ flows life, holiness, and renewal.",
    action: "Ask Jesus for the grace to become holy in one ordinary duty today.",
  },
  {
    day: "Day 6",
    title: "Heart of Jesus, atonement for our sins",
    summary: "Devotion to the Sacred Heart includes reparation for sin and love offered back to Jesus.",
    action: "Make a small sacrifice and offer it in reparation.",
  },
  {
    day: "Day 7",
    title: "Heart of Jesus, source of all consolation",
    summary: "The Heart of Jesus consoles the wounded, weary, and sorrowful.",
    action: "Pray for someone who is suffering and offer one act of comfort.",
  },
  {
    day: "Day 8",
    title: "Jesus, gentle and humble of heart",
    summary: "Jesus is gentle and humble of heart, and He invites us to learn from Him.",
    action: "Practice humility in one conversation or hidden task.",
  },
  {
    day: "Day 9",
    title: "Consecration to the Sacred Heart of Jesus",
    summary: "Consecration entrusts the heart, home, family, and nation to the love and reign of Jesus.",
    action: "Renew your personal dedication to Christ and ask Him to reign in your heart.",
  },
] as const;

const sacredHeartPrayer = `Sacred Heart of Jesus,
burning with love for us,
make my heart more like Yours.
Teach me mercy,
purify my desires,
heal what sin has wounded,
and draw me closer to You
in the Eucharist, in prayer, and in love for others.
Amen.`;

const practices = [
  {
    title: "Pray the novena for nine days",
    summary: "Choose a steady daily time and return to the same intention with perseverance and trust.",
  },
  {
    title: "Attend Mass",
    summary: "Let devotion to the Heart of Jesus lead you to the Eucharistic sacrifice of Christ.",
  },
  {
    title: "Spend time in Eucharistic Adoration",
    summary: "Adoration gives the heart room to be quiet before the self-giving love of Jesus.",
  },
  {
    title: "Go to Confession",
    summary: "Sacred Heart devotion is deeply connected to mercy, repentance, and restored grace.",
  },
  {
    title: "Practice a work of mercy",
    summary: "The love of Christ becomes concrete when it reaches the poor, lonely, wounded, or burdened.",
  },
  {
    title: "Make an act of reparation",
    summary: "Offer prayer, sacrifice, penance, or charity as love repairing what sin has wounded.",
  },
  {
    title: "Place an image of the Sacred Heart in the home",
    summary: "A holy image can remind the household that Christ is the center of love, mercy, and peace.",
  },
  {
    title: "Pray the Litany of the Sacred Heart",
    summary: "The litany gives the heart repeated language for praise, mercy, reparation, and trust.",
  },
  {
    title: "Observe First Fridays if appropriate",
    summary: "First Friday devotion can form a monthly rhythm of Communion, reparation, and love for Jesus.",
  },
] as const;

const internalResourceLinks = [
  { label: "Prayer Library", href: "/prayers", summary: "Find Catholic prayers and devotional guides for daily life." },
  { label: "Catholic Litanies", href: "/prayers/litanies", summary: "Learn how litanies help the heart pray steadily." },
  { label: "The Eucharist", href: "/sacraments/eucharist", summary: "Understand the Real Presence, Holy Communion, and Eucharistic worship." },
  { label: "Confession Guide", href: "/confession", summary: "Return to mercy, contrition, absolution, and penance." },
  { label: "Act of Contrition", href: "/prayers", summary: "Find contrition prayers in the Prayer Library." },
  { label: "Anima Christi", href: "/prayers", summary: "Find this Eucharistic prayer in the Prayer Library." },
  { label: "Litany of Humility", href: "/prayers/litany-of-humility", summary: "Pray for freedom from pride, fear, and comparison." },
  { label: "Come, Holy Spirit", href: "/prayers/come-holy-spirit", summary: "Ask the Holy Spirit to kindle divine love." },
  { label: "Sin and Temptation", href: "/sin-and-temptation", summary: "Grow in conversion, virtue, and resistance to sin." },
  { label: "Catholic Life Roadmap", href: "/catholic-life", summary: "Keep devotion connected to Mass, prayer, sacraments, and daily charity." },
] as const;

const externalResourceLinks = [
  {
    label: "USCCB Novena to the Sacred Heart of Jesus",
    href: usccbNovenaUrl,
    summary: "The official USCCB novena page with daily prayers, reflections, and actions.",
  },
  {
    label: "USCCB Litany of the Sacred Heart of Jesus",
    href: usccbLitanyUrl,
    summary: "The official USCCB page for the Litany of the Sacred Heart of Jesus.",
  },
  {
    label: "Vatican Dilexit Nos",
    href: dilexitNosUrl,
    summary: "Pope Francis' encyclical on the human and divine love of the Heart of Jesus Christ.",
  },
  {
    label: "Ascension Sacred Heart Study Plan",
    href: ascensionStudyPlanUrl,
    summary: "An Ascension study plan for going deeper into the Sacred Heart of Jesus through guided Catholic formation.",
  },
] as const;

const faqItems = [
  {
    question: "What is the Novena to the Sacred Heart of Jesus?",
    answer:
      "It is nine days of prayer focused on the love, mercy, reparation, and consecration associated with the Heart of Jesus.",
  },
  {
    question: "When is the Sacred Heart novena prayed?",
    answer:
      "The USCCB novena is listed for June 3-11. Catholics may also pray a Sacred Heart novena before the Solemnity of the Sacred Heart, on First Fridays, during June, or whenever seeking deeper love for Christ.",
  },
  {
    question: "What is the Sacred Heart devotion about?",
    answer:
      "It is a devotion to the love of Jesus Christ, symbolized by His Heart, calling the faithful to mercy, conversion, Eucharistic love, and reparation.",
  },
  {
    question: "Can I pray the novena if I miss a day?",
    answer: "Yes. Continue with humility and trust. A novena is an act of prayer, not a superstition.",
  },
  {
    question: "Should I use the USCCB novena text?",
    answer:
      "Daily Oratory links to the official USCCB novena and provides a guide to help readers understand and pray the devotion.",
  },
] as const;

export default function SacredHeartNovenaPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Novena to the Sacred Heart of Jesus",
              description: pageDescription,
              path: pagePath,
            }),
            buildArticleStructuredData({
              headline: "Novena to the Sacred Heart of Jesus",
              description: pageDescription,
              path: pagePath,
              keywords: pageKeywords,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Prayer Library", path: "/prayers" },
              { name: "Novena to the Sacred Heart of Jesus", path: pagePath },
            ]),
          ]}
        />

        <Breadcrumbs
          items={[
            { label: "Pray", href: "/pray" },
            { label: "Prayer Library", href: "/prayers" },
            { label: "Novena to the Sacred Heart of Jesus" },
          ]}
        />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sacred Heart Devotion</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Novena to the Sacred Heart of Jesus
          </h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A nine-day prayer of love, mercy, reparation, consolation, and consecration to the Heart of Christ.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            The Sacred Heart of Jesus reveals the burning love of Christ for humanity. A novena to the Sacred Heart
            invites Catholics to pray for nine days with trust, repentance, mercy, and renewed love for Jesus,
            especially through the themes of His Heart, His Eucharistic presence, and His compassion for the world.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={usccbNovenaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
            >
              Pray the USCCB Novena
            </a>
            <Link href="#nine-themes" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              See the Nine Themes
            </Link>
            <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Prayer Library
            </Link>
          </div>
        </header>

        <div className="mt-8">
          <SectionJumpNav ariaLabel="Sacred Heart novena sections" items={jumpLinks} />
        </div>

        <div className="grid gap-10">
          <section id="what-is-the-novena" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What it is</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">What Is the Novena to the Sacred Heart?</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>A novena is nine days of prayer offered with perseverance, humility, and trust.</p>
              <p>
                Sacred Heart devotion focuses on the human and divine love of Jesus Christ. His Heart represents mercy,
                compassion, sacrifice, and burning love.
              </p>
              <p>
                This devotion often includes prayer, reparation, Eucharistic adoration, Confession, acts of mercy, and
                consecration. It asks the faithful to love Jesus in return and to let His mercy shape ordinary life.
              </p>
              <p>
                The USCCB Sacred Heart novena offers nine daily reflections and prayers. Daily Oratory summarizes the
                devotion here in original words and sends readers to the official source for the full novena text.
              </p>
            </div>

            <div className="liturgical-callout liturgical-callout-prayer mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Official source</p>
              <h3 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">
                Pray the Official USCCB Novena
              </h3>
              <p className="daily-readable-muted mt-4 text-base leading-8 text-muted">
                The United States Conference of Catholic Bishops provides a Novena to the Sacred Heart of Jesus with
                daily prayers, reflections, and actions.
              </p>
              <div className="mt-5">
                <a
                  href={usccbNovenaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center"
                >
                  Pray the USCCB Novena
                </a>
              </div>
            </div>
          </section>

          <section id="when-prayed" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">When to pray</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">When Is This Novena Prayed?</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>
                The USCCB novena is listed for June 3-11 and leads toward the consecration of the United States to the
                Sacred Heart of Jesus according to the USCCB page.
              </p>
              <p>
                Catholics may also pray a Sacred Heart novena before the Solemnity of the Most Sacred Heart of Jesus, on
                First Fridays, during June, or whenever seeking deeper love, mercy, and reparation.
              </p>
              <p>June is traditionally associated with devotion to the Sacred Heart.</p>
            </div>
            <div className="liturgical-callout liturgical-callout-pastoral mt-6">
              <p className="daily-readable-muted text-base leading-8 text-muted">
                Liturgical dates may vary by year. Check your parish calendar or diocesan liturgical calendar for the
                current date of the Solemnity of the Most Sacred Heart of Jesus.
              </p>
            </div>
          </section>

          <section id="nine-themes" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Nine days</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">The Nine Themes of the USCCB Novena</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              These cards summarize the USCCB daily themes in Daily Oratory&apos;s own words. Use the official USCCB page
              for the daily prayers, reflections, and actions.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {dayThemes.map((theme) => (
                <article key={theme.day} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{theme.day}</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold leading-tight text-navy">{theme.title}</h3>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{theme.summary}</p>
                  <div className="mt-4 rounded-2xl border border-stone bg-parchment/70 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-burgundy">Suggested action</p>
                    <p className="daily-card-readable mt-2 text-sm leading-7 text-muted">{theme.action}</p>
                  </div>
                  <div className="mt-5">
                    <a
                      href={usccbNovenaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center"
                    >
                      Pray on USCCB
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="sacred-heart-devotion" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Devotion</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">What Is Devotion to the Sacred Heart?</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>Sacred Heart devotion is centered on the love of Jesus Christ.</p>
              <p>
                It is not sentimentality. It leads to conversion, mercy, Eucharistic love, reparation, and works of mercy.
              </p>
              <p>
                The devotion invites the faithful to love Jesus in return, to trust His mercy, and to let His Heart form
                their own hearts.
              </p>
              <p>
                The modern spread of the devotion is associated with St. Margaret Mary Alacoque and the visions of the
                Sacred Heart.
              </p>
            </div>
          </section>

          <section id="sacred-heart-eucharist" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Eucharistic love</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Sacred Heart and the Eucharist</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>The Sacred Heart points to Christ&apos;s self-giving love.</p>
              <p>The Eucharist is the sacramental gift of Christ Himself: Body, Blood, Soul, and Divinity.</p>
              <p>
                Adoration before the Blessed Sacrament is a fitting way to pray with the Sacred Heart because the same
                Jesus who loved us with a human and divine Heart gives Himself in the Eucharist.
              </p>
              <p>Holy Communion should lead to deeper love, mercy, conversion, and charity toward neighbor.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "The Eucharist", href: "/sacraments/eucharist" },
                { label: "Anima Christi", href: "/prayers" },
                { label: "Act of Spiritual Communion", href: "/prayers" },
                { label: "Prayer Before the Blessed Sacrament", href: "/prayers" },
                { label: "Adoration", href: "/adoration" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section id="sacred-heart-reparation" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Reparation</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Sacred Heart and Reparation</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>Reparation means offering love, prayer, sacrifice, and repentance in response to sin.</p>
              <p>It is not despair or self-hatred. It is love repairing what sin has wounded.</p>
              <p>
                Confession, penance, acts of charity, First Friday devotion, and Eucharistic prayer are common ways
                Catholics connect reparation with the Sacred Heart.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Confession Guide", href: "/confession" },
                { label: "Act of Contrition", href: "/prayers" },
                { label: "Litany of Humility", href: "/prayers/litany-of-humility" },
                { label: "Sin and Temptation", href: "/sin-and-temptation" },
                { label: "Prayers and Devotions with Indulgences", href: "/indulgences/prayers-and-devotions" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section id="how-to-pray" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Simple steps</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">How to Pray This Novena</h2>
            <ol className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              <li>Choose nine consecutive days.</li>
              <li>Begin with the Sign of the Cross.</li>
              <li>Read the daily theme.</li>
              <li>Pray the official USCCB prayer for that day using the external USCCB link.</li>
              <li>Spend a few minutes in silence.</li>
              <li>Choose one small act of love, mercy, or reparation.</li>
              <li>End with a short prayer to the Sacred Heart.</li>
            </ol>
            <div className="liturgical-callout liturgical-callout-pastoral mt-6">
              <p className="daily-readable-muted text-base leading-8 text-muted">
                If you miss a day, do not quit. Continue the novena with humility and trust.
              </p>
            </div>
          </section>

          <section id="daily-oratory-prayer" className="scroll-mt-24">
            <PrayerCard
              eyebrow="Daily Oratory original prayer"
              title="Short Prayer to the Sacred Heart"
              prayer={sacredHeartPrayer}
              note="This short prayer is original to Daily Oratory. The copy button copies only this prayer text."
              copyLabel="Copy Prayer"
              copiedLabel="Prayer copied."
            />
          </section>

          <section id="practices" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Practical devotion</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Sacred Heart Practices</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {practices.map((practice) => (
                <article key={practice.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-navy">{practice.title}</h3>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{practice.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="resources" className="scroll-mt-24 card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related resources</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Related Sacred Heart Resources</h2>
            <div className="mt-8 grid gap-6 xl:grid-cols-2">
              <div>
                <h3 className="font-display text-3xl font-semibold text-navy">Official external sources</h3>
                <div className="mt-5 grid gap-4">
                  {externalResourceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring rounded-3xl border border-stone bg-ivory/80 p-5 transition hover:border-gold"
                    >
                      <span className="block text-base font-semibold text-navy">{link.label}</span>
                      <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{link.summary}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl font-semibold text-navy">Daily Oratory guides</h3>
                <div className="mt-5 grid gap-4">
                  {internalResourceLinks.map((link) => (
                    <Link
                      key={`${link.label}-${link.href}`}
                      href={link.href}
                      className="focus-ring rounded-3xl border border-stone bg-ivory/80 p-5 transition hover:border-gold"
                    >
                      <span className="block text-base font-semibold text-navy">{link.label}</span>
                      <span className="daily-card-readable mt-2 block text-sm leading-7 text-muted">{link.summary}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="scroll-mt-24 card-parchment p-6 sm:p-8">
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
        </div>
      </main>
    </div>
  );
}
