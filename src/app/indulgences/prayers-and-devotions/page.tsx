import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { PrayerCard } from "@/components/ui/PrayerCard";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { indulgencedPrayerItems, officialIndulgenceDocuments } from "@/data/indulgencedPrayers";

const pageMetadata = createPageMetadata({
  title: "Prayers and Devotions with Indulgences | Daily Oratory",
  description:
    "A Catholic guide to prayers and devotions associated with indulgences, including the Rosary, Stations of the Cross, Eucharistic Adoration, Scripture reading, prayers for the dead, and traditional prayers.",
  path: "/indulgences/prayers-and-devotions",
  keywords: [
    "Catholic indulgenced prayers",
    "prayers with indulgences",
    "plenary indulgence",
    "partial indulgence",
    "Rosary indulgence",
    "Stations of the Cross indulgence",
    "Eucharistic Adoration indulgence",
    "prayers for the dead",
    "detachment from sin",
  ],
});

export const metadata: Metadata = {
  ...pageMetadata,
  openGraph: {
    ...pageMetadata.openGraph,
    title: "Prayers and Devotions with Indulgences",
    description:
      "A Catholic guide to prayers and devotions traditionally associated with indulgences, mercy, repentance, and deeper union with Christ.",
  },
};

const prayerGroups = [
  "Daily and Basic Catholic Prayers",
  "Marian Prayers",
  "Eucharistic Prayers and Devotions",
  "Holy Spirit Prayers",
  "Passion, Mercy, and Repentance",
  "Prayers for the Dead",
  "Saint and Protection Prayers",
  "Scripture and Teaching Devotions",
] as const;

const groupedItems = prayerGroups.map((group) => ({
  group,
  items: indulgencedPrayerItems.filter((item) => item.group === group),
}));

const detachmentPrayer = `Lord Jesus,
I believe in Your mercy.
Teach me to love You more than sin,
to desire grace more than comfort,
and to return to You whenever I fall.
Detach my heart from what wounds love,
and unite me more deeply to Your Cross and Resurrection.
Amen.`;

const eternalRestPrayer = `Eternal rest grant unto them, O Lord,
and let perpetual light shine upon them.
May they rest in peace.
Amen.`;

const relatedGuides = [
  { label: "What Is an Indulgence?", href: "/indulgences" },
  { label: "Detachment from Sin", href: "/indulgences/detachment-from-sin" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Holy Rosary", href: "/devotions/holy-rosary" },
  { label: "Lent Guide", href: "/liturgical-living/lent" },
  { label: "Fasting and Abstinence", href: "/liturgical-living/lent/fasting-and-abstinence" },
  { label: "Grace", href: "/formation/grace" },
  { label: "Purgatory", href: "/formation/eschatology/purgatory" },
];

export default function IndulgencePrayersAndDevotionsPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Prayers and Devotions with Indulgences",
              description:
                "A Catholic guide to prayers and devotions associated with indulgences, including the Rosary, Stations of the Cross, Eucharistic Adoration, Scripture reading, prayers for the dead, and traditional prayers.",
              path: "/indulgences/prayers-and-devotions",
            }),
            buildArticleStructuredData({
              headline: "Prayers and Devotions with Indulgences",
              description:
                "A clear Catholic guide to prayers and devotions traditionally associated with indulgences, mercy, repentance, and deeper union with Christ.",
              path: "/indulgences/prayers-and-devotions",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Learn", path: "/learn" },
              { name: "Indulgences", path: "/indulgences" },
              { name: "Prayers and Devotions with Indulgences", path: "/indulgences/prayers-and-devotions" },
            ]),
          ]}
        />

        <Breadcrumbs
          items={[
            { label: "Learn", href: "/learn" },
            { label: "Indulgences", href: "/indulgences" },
            { label: "Prayers and Devotions with Indulgences" },
          ]}
        />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Indulgences and Prayer</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Prayers and Devotions with Indulgences
          </h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A Catholic guide to prayers and devout works traditionally associated with indulgences, mercy, repentance, and deeper union with Christ.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            The Church attaches indulgences to certain prayers and devout works to encourage conversion, charity, worship, and love for God.
            Indulgences are not magic or shortcuts. They belong to a life of grace, repentance, Confession, Holy Communion, prayer, and detachment from sin.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#official-documents" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Official Documents
            </Link>
            <Link href="#prayer-groups" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Browse Prayers and Devotions
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-10">
          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What this page is</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A guide, not the final norm</h2>
            <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
              <p>
                This page is a guide to prayers and devotions traditionally associated with indulgences. It is not a replacement for the official
                Manual of Indulgences, the Catechism, Canon Law, or guidance from a priest.
              </p>
              <p>
                The point is to help you pray with peace and clarity, not to turn indulgences into a system of pressure, fear, or counting.
              </p>
            </div>
            <div className="mt-6 rounded-3xl border border-stone bg-ivory/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Official-source note</p>
              <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
                For exact norms and official grants, consult the Church&apos;s official documents and the Manual of Indulgences.
              </p>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">What is an indulgence?</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Mercy, healing, and the communion of saints</h2>
            <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              <li>Sin wounds the soul and has consequences.</li>
              <li>God forgives sin through Christ, especially through Baptism and Confession.</li>
              <li>An indulgence concerns the temporal effects of sin, not the guilt of sin.</li>
              <li>Indulgences may be partial or plenary.</li>
              <li>They can be applied to oneself or to the faithful departed according to Church teaching.</li>
              <li>They should lead to humility, mercy, prayer, and conversion.</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/indulgences" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                What Is an Indulgence?
              </Link>
              <Link href="/indulgences/detachment-from-sin" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Detachment from Sin
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Usual conditions</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Usual Conditions for a Plenary Indulgence</h2>
            <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
              <li>Sacramental Confession</li>
              <li>Holy Communion</li>
              <li>Prayer for the intentions of the Holy Father</li>
              <li>Complete detachment from all sin, even venial sin</li>
              <li>Completion of the indulgenced prayer or devout work</li>
            </ul>
            <div className="mt-6 rounded-3xl border border-stone bg-ivory/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-burgundy">Pastoral note</p>
              <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">
                If the full conditions are not met, the indulgence may be partial where the Church provides. If you struggle with scrupulosity,
                do not obsess over whether you completed everything perfectly. Follow the Church&apos;s guidance, make a sincere act of faith, and speak
                with a trusted confessor.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/confession" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Confession Guide
              </Link>
              <Link href="/indulgences/detachment-from-sin" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Detachment from Sin
              </Link>
            </div>
          </section>

          <section id="official-documents" className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Official Church Documents</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Read the Church directly</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {officialIndulgenceDocuments.map((document) => (
                <a
                  key={document.id}
                  href={document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-3xl border border-stone bg-ivory/80 p-5 transition hover:border-gold"
                >
                  <h3 className="font-display text-2xl font-semibold text-navy">{document.title}</h3>
                  <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{document.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-burgundy">Open official document</span>
                </a>
              ))}
            </div>
          </section>

          <section id="prayer-groups" className="grid gap-8">
            <div className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Prayers and devotions associated with indulgences</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Pray with the Church, not with anxiety</h2>
              <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
                These prayers and devout works are often listed in the Church&apos;s devotional life and may be connected with indulgences under the Church&apos;s norms.
                Not every prayer automatically grants a plenary indulgence, and circumstances matter.
              </p>
            </div>

            {groupedItems.map(({ group, items }) => (
              <section key={group} className="card-parchment p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{group}</p>
                <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {items.map((item) => (
                    <article key={item.id} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{item.typeLabel}</p>
                      <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{item.title}</h3>
                      <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.summary}</p>
                      <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{item.note}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-stone px-3 py-1 text-xs font-semibold text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5">
                        <Link href={item.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                          Open guide
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to pray with indulgences</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A simple step-by-step path</h2>
            <ol className="daily-readable mt-5 grid gap-4 text-base leading-8 text-muted">
              <li>Begin with repentance and trust in God&apos;s mercy.</li>
              <li>Go to Confession regularly.</li>
              <li>Receive Holy Communion reverently.</li>
              <li>Choose one prayer or devout work.</li>
              <li>Pray for the Pope&apos;s intentions.</li>
              <li>Ask God for detachment from sin.</li>
              <li>Offer the indulgence for yourself or for the faithful departed.</li>
            </ol>
          </section>

          <PrayerCard
            eyebrow="Prayer for detachment"
            title="Prayer for Detachment from Sin"
            note="Use this prayer gently. Ask for freedom from sin with humility, not with pressure."
            prayer={detachmentPrayer}
            copyLabel="Copy Prayer"
            copiedLabel="Copied"
          />

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">For the faithful departed</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">A beautiful act of charity</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Indulgences may be applied to the dead by way of prayerful suffrage. This is a beautiful act of charity for the souls in purgatory.
            </p>
            <div className="mt-6 rounded-3xl border border-stone bg-ivory/80 p-5">
              <p className="whitespace-pre-line text-base leading-8 text-navy">{eternalRestPrayer}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/formation/eschatology/purgatory" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Purgatory
              </Link>
              <Link href="/formation/catholic-burial" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Catholic Burial
              </Link>
              <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Prayer Library
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Avoiding scrupulosity</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Choose peace, mercy, and conversion</h2>
            <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
              Indulgences should lead to peace, mercy, and conversion. If you become anxious, compulsive, or fearful about indulgences, speak with a trusted priest or confessor and choose simple practices.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/confession" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                Confession Guide
              </Link>
              <Link href="/indulgences/detachment-from-sin" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                Detachment from Sin
              </Link>
            </div>
          </section>

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related guides</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Continue with Daily Oratory</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {relatedGuides.map((link) => (
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
