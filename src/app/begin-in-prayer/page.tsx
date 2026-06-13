import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { beginInPrayerSections } from "@/data/beginInPrayer";
import { prayerLibraryItems } from "@/data/prayers";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const metadata: Metadata = createPageMetadata({
  title: "Begin in Prayer | Daily Oratory",
  description:
    "Start praying with a simpler Catholic prayer page: morning prayers, mercy prayers, Marian prayers, evening prayers, and a gentle next step into daily prayer.",
  path: "/begin-in-prayer",
  keywords: [
    "begin in prayer",
    "start praying catholic",
    "morning prayer catholic",
    "evening prayer catholic",
    "marian prayers",
    "catholic beginner prayer",
  ],
});

const prayerMap = new Map(prayerLibraryItems.map((item) => [item.id, item]));

const quickLinks = [
  { label: "Prayer Library", href: "/prayers" },
  { label: "Holy Rosary", href: "/devotions/holy-rosary" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Catholic Q&A", href: "/catholic-answers" },
];

const openingPrayers = [
  {
    title: "Sign of the Cross",
    body: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
  },
  {
    title: "Offering of Indulgences",
    body: `Lord Jesus, through Mary's hands,
I offer You all the indulgences I may gain today.
Please apply them, according to Your holy will,
for a loved one, for my soul,
or for a soul in Purgatory.

May Your mercy be glorified in all things.
Amen.`,
  },
  {
    title: "Morning Offering",
    body: `O Jesus, through the Immaculate Heart of Mary,
I offer You my prayers, works, joys, and sufferings of this day
in union with the Holy Sacrifice of the Mass throughout the world.

I offer them for all the intentions of Your Sacred Heart:
the salvation of souls,
reparation for sin,
and the reunion of all Christians.

I offer them for the intentions of our bishops,
of all the Apostleship of Prayer,
and in particular for those recommended by our Holy Father this month.

Amen.`,
  },
  {
    title: "Detachment from Sin",
    body: `Lord Jesus,
detach my heart from all sin and every disordered attachment.
Let me choose You above all things.
Amen.`,
  },
  {
    title: "Act of Contrition",
    body: `O my God, I repent with my whole heart of all my sins, and I detest them, because I have deserved the loss of heaven and the pains of hell, but most of all because I have offended you, infinite Goodness. I firmly purpose with the help of your grace, which I pray you to grant me now and always, to do penance and rather to die than offend you again. I purpose also to receive the holy Sacraments during my life and at my death.`,
  },
  {
    title: "Act of Spiritual Communion",
    body: `My Jesus, I believe that you are in the Blessed Sacrament. I love you above all things, and I long for you in my soul. Since I cannot now receive you sacramentally, come at least spiritually into my heart. As though you have already come, I embrace you and unite myself entirely to you; never permit me to be separated from you.`,
  },
  {
    title: "Prayer to One's Guardian Angel",
    body: `Angel of God, my guardian dear, to whom God's love commits me here, ever this day be at my side, to light and guard, to rule and guide.
Amen.`,
  },
  {
    title: "St. Michael Prayer",
    body: `St. Michael the Archangel, defend us in battle. Be our defense against the wickedness and snares of the Devil. May God rebuke him, we humbly pray, and do thou, O Prince of the heavenly hosts, by the power of God, thrust into hell Satan, and all the evil spirits, who prowl about the world seeking the ruin of souls.
Amen.`,
  },
  {
    title: "Prayer for Mother and Father",
    body: `Lord Jesus,
bless my mother and father.
Strengthen them in faith, protect them in every need,
and reward their love, sacrifices, and care.
Draw them close to Your Heart
and keep them in Your peace.
Amen.`,
  },
  {
    title: "Prayer for Wife or Husband",
    body: `Lord Jesus,
bless my wife or husband with peace, strength, and fidelity.
Deepen our love, heal what is strained,
and teach us to serve one another with patience and charity.
Keep our home close to You.
Amen.`,
  },
  {
    title: "Prayer for Children",
    body: `Lord Jesus,
watch over the children You have placed in my care.
Guard their hearts, guide their steps,
and help them grow in wisdom, charity, and holy joy.
Amen.`,
  },
];

export default function BeginInPrayerPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Begin in Prayer",
              description:
                "Start praying with a simpler Catholic prayer page: morning prayers, mercy prayers, Marian prayers, evening prayers, and a gentle next step into daily prayer.",
              path: "/begin-in-prayer",
            }),
            buildArticleStructuredData({
              headline: "Begin in Prayer",
              description:
                "Start praying with a simpler Catholic prayer page: morning prayers, mercy prayers, Marian prayers, evening prayers, and a gentle next step into daily prayer.",
              path: "/begin-in-prayer",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Begin in Prayer", path: "/begin-in-prayer" },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Begin in Prayer" }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Start Here</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            Begin in Prayer
          </h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">
            A simpler place to start praying without searching, filtering, or deciding between too many options.
          </p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">
            Choose one small prayer section below, pray slowly, and let it be enough for today. When you want the full searchable collection,
            the Prayer Library is still there for you.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="#prayer-sections" className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
              Start Here
            </Link>
            <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Open Prayer Library
            </Link>
          </div>
        </header>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Pray first</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Begin with these first prayers</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            If you do not know where to begin, start here slowly. These prayers are meant to be prayed right away, without searching or filtering.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {openingPrayers.map((prayer) => (
              <article key={prayer.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{prayer.title}</h3>
                <div className="mt-4 rounded-[1.5rem] border border-stone/70 bg-white/70 p-4">
                  <p className="daily-readable whitespace-pre-line text-sm leading-7 text-navy">{prayer.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to use this page</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Less clicking. More praying.</h2>
          <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
            <li>Pick one section that fits the moment you are in.</li>
            <li>Begin with one prayer, not five.</li>
            <li>If a prayer has its own guide page, you can go deeper from there.</li>
            <li>When you want the full collection, use the Prayer Library at the bottom.</li>
          </ul>
        </section>

        <section id="prayer-sections" className="mt-10 space-y-8">
          {beginInPrayerSections.map((section) => {
            const prayers = section.prayerIds.map((id) => prayerMap.get(id)).filter((item) => Boolean(item));

            return (
              <section key={section.id} className="card-parchment p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{section.eyebrow}</p>
                <h2 className="font-display mt-3 text-4xl font-semibold text-navy">{section.title}</h2>
                <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">{section.description}</p>
                <div className="mt-8 grid gap-5 lg:grid-cols-3">
                  {prayers.map((prayer) => (
                    <article key={prayer!.id} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{prayer!.category}</p>
                      <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{prayer!.title}</h3>
                      <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{prayer!.summary}</p>
                      {prayer!.text ? (
                        <div className="mt-5 rounded-[1.5rem] border border-stone/70 bg-white/70 p-4">
                          <p className="daily-readable whitespace-pre-line text-sm leading-7 text-navy">{prayer!.text}</p>
                        </div>
                      ) : null}
                      <div className="mt-5 flex flex-wrap gap-3">
                        {prayer!.href ? (
                          <Link href={prayer!.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                            Open Guide
                          </Link>
                        ) : null}
                        {prayer!.relatedLinks?.[0] ? (
                          <Link
                            href={prayer!.relatedLinks[0].href}
                            className="rounded-full border border-stone/70 px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold"
                          >
                            {prayer!.relatedLinks[0].label}
                          </Link>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </section>

        <section className="mt-10 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Go deeper</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Need the full library?</h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            When you want more categories, seasonal prayers, litanies, novenas, Psalms, and the full searchable collection, go to the Prayer Library.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {quickLinks.map((link) => (
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
      </main>
    </div>
  );
}
