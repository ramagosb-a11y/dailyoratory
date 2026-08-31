import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import {
  DIVINE_MERCY_CHAPLET_SOURCE,
  DIVINE_MERCY_HOUR_SOURCE,
  DIVINE_MERCY_INDULGENCE_SOURCE,
} from "@/data/divineMercyChaplet";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const pagePath = "/divine-mercy";
const pageDescription =
  "Pray the Divine Mercy Chaplet step by step, learn about the 3 PM Hour of Great Mercy and Divine Mercy Sunday, and find trusted Catholic sources.";

export const metadata: Metadata = createPageMetadata({
  title: "Divine Mercy Chaplet | Pray Step by Step",
  description: pageDescription,
  path: pagePath,
  keywords: ["Divine Mercy Chaplet", "how to pray Divine Mercy Chaplet", "3 PM Hour of Mercy", "Divine Mercy Sunday", "Saint Faustina", "Jesus I trust in You", "Catholic prayer"],
});

export default function DivineMercyPage() {
  return (
    <div className="paper-texture">
      <StructuredDataScript data={[
        buildWebPageStructuredData({ name: "Divine Mercy Chaplet", description: pageDescription, path: pagePath }),
        buildBreadcrumbList([{ name: "Pray", path: "/pray" }, { name: "Divine Mercy", path: pagePath }]),
      ]} />
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Divine Mercy" }]} />

        <section className="mt-8 overflow-hidden rounded-md bg-navy text-ivory shadow-soft">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">Jesus, I trust in You</p>
              <h1 className="font-display mt-4 text-4xl font-semibold leading-tight sm:text-6xl">Pray the Divine Mercy Chaplet.</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-soft">
                Move through the Chaplet one prayer and one bead at a time. Begin manually, pray at your own pace, and entrust yourself and the whole world to the mercy of Jesus Christ.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/divine-mercy/chaplet" className="btn btn-gold focus-ring justify-center">Pray the Chaplet</Link>
                <a href="#how-to-pray" className="btn btn-outline-inverse focus-ring justify-center">Learn How to Pray</a>
              </div>
              <p className="mt-5 text-sm leading-6 text-stone-soft">No account is needed. Optional intentions remain only in the current prayer session and are never saved or sent.</p>
            </div>
            <div className="relative min-h-[28rem] border-t border-gold-soft/20 lg:border-l lg:border-t-0">
              <Image src="/images/divine-mercy/christ-rays-v1.0.1.png" alt="Original devotional artwork of Christ in sacred light with red and pale rays" fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover object-top" preload />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              <p className="absolute inset-x-0 bottom-5 px-5 text-center font-display text-lg text-gold-soft">Jesus, I trust in You.</p>
            </div>
          </div>
        </section>

        <section id="how-to-pray" className="mt-12 scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">How to pray</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">A simple pattern on Rosary beads.</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-muted">The Chaplet is prayed on ordinary five-decade Rosary beads. Begin with the Sign of the Cross and opening prayers, pray the Our Father, Hail Mary, and Apostles’ Creed, then offer each of the five decades for mercy upon us and the whole world.</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["1", "Opening prayers", "Begin with the Sign of the Cross and the customary opening prayers."],
              ["2", "Three familiar prayers", "Pray the Our Father, Hail Mary, and Apostles’ Creed."],
              ["3", "Five decades", "Use each large bead and its ten smaller beads to pray the Chaplet’s central petitions."],
              ["4", "Holy God", "After five decades, pray the concluding invocation three times and close in trust."],
            ].map(([number, title, description]) => (
              <article key={number} className="card-parchment p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">{number}</span>
                <h3 className="font-display mt-4 text-2xl font-semibold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-muted">Prayer wording in the companion follows the Marian Fathers’ published guide. Review the complete sequence at the <a className="text-link" href={DIVINE_MERCY_CHAPLET_SOURCE} target="_blank" rel="noreferrer">official Divine Mercy Chaplet guide<span className="sr-only"> (opens in a new tab)</span></a>.</p>
        </section>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section id="hour-of-mercy" className="card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">3 PM Hour of Great Mercy</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Remember the Passion of Christ.</h2>
            <p className="mt-4 text-base leading-8 text-muted">The Hour of Great Mercy is a daily remembrance of Christ’s death at three in the afternoon. If duties permit, pause to contemplate His Passion, pray for sinners and the whole world, make the Stations of the Cross, or spend a moment before the Blessed Sacrament. The Chaplet is fitting at this hour, but it is not the only way to observe it.</p>
            <a className="btn btn-secondary focus-ring mt-6 justify-center" href={DIVINE_MERCY_HOUR_SOURCE} target="_blank" rel="noreferrer">Read the Source Guide<span className="sr-only"> (opens in a new tab)</span></a>
          </section>

          <section id="divine-mercy-sunday" className="card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Second Sunday of Easter</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Divine Mercy Sunday.</h2>
            <p className="mt-4 text-base leading-8 text-muted">The Church celebrates Divine Mercy Sunday on the Octave Day of Easter. The Apostolic Penitentiary grants a plenary indulgence under the usual conditions to the faithful who fulfill the prescribed work in honor of Divine Mercy. This ecclesial indulgence is distinct from Diary-based descriptions of the devotion’s “great grace.”</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn btn-primary focus-ring justify-center" href={DIVINE_MERCY_INDULGENCE_SOURCE} target="_blank" rel="noreferrer">Read the Vatican Decree<span className="sr-only"> (opens in a new tab)</span></a>
              <a className="btn btn-secondary focus-ring justify-center" href="https://thedivinemercy.org/celebrate/greatgrace" target="_blank" rel="noreferrer">Marian Fathers’ Guide<span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </section>
        </div>

        <section className="mt-12 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Receive mercy. Become merciful.</p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Let the Chaplet lead into Catholic life.</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-muted">Divine Mercy calls us toward repentance, trust, the sacramental life of the Church, forgiveness of others, and concrete works of mercy. This prayer companion supports that life; it does not replace Mass, Confession, parish life, or pastoral counsel.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/confession" className="btn btn-primary focus-ring justify-center">Prepare for Confession</Link>
            <Link href="/mass" className="btn btn-secondary focus-ring justify-center">Learn About the Mass</Link>
            <Link href="/saints/saint-faustina-kowalska" className="btn btn-secondary focus-ring justify-center">Meet Saint Faustina</Link>
          </div>
        </section>

        <section className="mt-12 border-t border-stone pt-8">
          <h2 className="font-display text-3xl font-semibold text-navy">Trusted sources</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-7 text-muted">
            <li><a className="text-link" href={DIVINE_MERCY_CHAPLET_SOURCE} target="_blank" rel="noreferrer">Marian Fathers: How to Recite the Chaplet</a></li>
            <li><a className="text-link" href={DIVINE_MERCY_INDULGENCE_SOURCE} target="_blank" rel="noreferrer">Apostolic Penitentiary: Indulgences Attached to Devotions in Honour of Divine Mercy</a></li>
            <li><a className="text-link" href="https://thedivinemercy.org/house/copyright" target="_blank" rel="noreferrer">Marian Fathers: Copyright and Permissions Guidance</a></li>
          </ul>
          <p className="mt-5 text-xs leading-6 text-muted">Version 1.0.1 · Original Daily Oratory artwork. The companion’s explanatory copy is original; linked official sources remain authoritative for prayer wording, permissions, and indulgence conditions.</p>
        </section>
      </main>
    </div>
  );
}
