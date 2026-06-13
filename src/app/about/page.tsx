import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { brand, brandSystem } from "@/config/brand";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `${brand.platformName} is a Catholic digital sanctuary inspired by the Holy Spirit, welcoming Catholics, returning Catholics, and anyone who wants to pray, learn, and explore the riches of the Catholic faith.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="About"
          title="A Catholic digital sanctuary inspired by the Holy Spirit"
          summary="Daily Oratory is a Catholic digital sanctuary inspired by the Holy Spirit and created for anyone who wants to pray, learn, and grow closer to God through the riches of the Catholic faith."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Inspired by the Holy Spirit", "Daily Oratory hopes to help visitors respond to grace through prayer, Scripture, sacramental life, and daily fidelity."],
            ["Rooted in the Catholic faith", "Prayer, Scripture, the Mass, sacraments, saints, devotion, and the liturgical year remain clearly Catholic and clearly explained."],
            ["Welcoming to seekers", "Resources are written for practicing Catholics, returning Catholics, families, Christians, and anyone curious about Catholic prayer and spiritual life."],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-md border border-stone bg-ivory p-5 shadow-sm">
              <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-md border border-stone bg-ivory p-6 shadow-sm">
          <h2 className="font-display text-4xl font-semibold text-navy">Mission</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Our mission is to help Catholics, returning Catholics, and all who are curious about the
            Catholic faith discover a daily rhythm of prayer, Scripture, sacramental life, formation,
            and spiritual growth. Through these practices, we pray that the Fruits of the Holy Spirit
            may grow in daily life.
          </p>
          <div className="mt-5">
            <Link href="/mission" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Read The Mission of the Church
            </Link>
          </div>
        </div>
        <div className="mt-10 rounded-md border border-stone bg-ivory p-6 shadow-sm">
          <h2 className="font-display text-4xl font-semibold text-navy">Brand Direction</h2>
          <p className="mt-4 text-sm leading-7 text-muted">{brand.description}</p>
          <dl className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <dt className="text-xs font-bold uppercase text-burgundy">Logo Concept</dt>
              <dd className="mt-2 text-sm leading-7 text-muted">{brandSystem.logoConcept}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase text-burgundy">Photography</dt>
              <dd className="mt-2 text-sm leading-7 text-muted">{brandSystem.photography}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 rounded-md border border-stone bg-ivory p-6 shadow-sm">
          <p className="text-xs font-bold uppercase text-burgundy">Pastoral disclaimer</p>
          <p className="mt-3 text-sm leading-7 text-muted">
            Daily Oratory is a Catholic formation and prayer resource. It does not replace the Mass,
            sacraments, parish life, priestly counsel, spiritual direction, or official Church
            teaching. For personal sacramental or pastoral questions, contact a Catholic parish or
            priest.
          </p>
        </div>
      </section>
    </div>
  );
}
