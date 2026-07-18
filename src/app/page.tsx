import type { Metadata } from "next";
import Link from "next/link";
import { FindMassSection } from "@/components/home/FindMassSection";
import { FooterCta } from "@/components/home/FooterCta";
import { HomeExaminationSpotlight } from "@/components/home/HomeExaminationSpotlight";
import { GrowInFaithSection } from "@/components/home/GrowInFaithSection";
import { HomeHeavenboundSpotlight } from "@/components/home/HomeHeavenboundSpotlight";
import { Hero } from "@/components/home/Hero";
import { TodayInTheChurch } from "@/components/home/TodayInTheChurch";
import { createPageMetadata } from "@/lib/metadata";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Daily Oratory | Catholic Prayer, Scripture, Liturgy, and Formation",
  description:
    "Daily Oratory is a Catholic prayer and formation site inspired by the Holy Spirit, welcoming Catholics, returning Catholics, and anyone exploring the Catholic faith through prayer, Scripture, sacraments, saints, devotions, and spiritual growth.",
  path: "/",
});

const featuredContentCards = [
  {
    title: "The Holy Mass",
    description:
      "Understand the parts of the Mass, its sacred signs, and the mystery of Christ's Eucharistic sacrifice.",
    href: "/mass",
  },
  {
    title: "Eucharistic Miracles",
    description:
      "Discover remarkable Eucharistic miracles and what they reveal about Christ's Real Presence.",
    href: "/eucharistic-miracles",
  },
  {
    title: "Mass Readings Reflections",
    description:
      "Pray with Scripture through reflections on daily Mass readings, Sundays, solemnities, and feast days.",
    href: "/reflections/mass-readings",
  },
  {
    title: "Catholic Homilies",
    description:
      "Listen to Catholic homilies and Gospel reflections that connect Scripture, the Mass, and daily discipleship.",
    href: "/homilies",
  },
];

export default function Home() {
  return (
    <div className="liturgical-home-shell paper-texture">
      <Hero />
      <TodayInTheChurch />
      <section className="mx-auto mt-12 w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="liturgical-home-section p-6 sm:p-8">
          <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.18em]">
            Explore Daily Oratory
          </p>
          <h2 className="font-display mt-3 text-4xl font-semibold text-navy sm:text-5xl">
            Featured Content
          </h2>
          <p className="daily-readable-muted mt-4 max-w-4xl text-base leading-8 text-muted">
            Explore the Mass, Eucharistic miracles, Scripture reflections, and Catholic homilies—all
            gathered to deepen faith and prayer.
          </p>
          <div className="liturgical-home-rule mt-6" aria-hidden="true" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredContentCards.map((card) => (
              <article key={card.href} className="liturgical-home-card rounded-3xl p-5">
                <h3 className="font-display text-2xl font-semibold text-navy">{card.title}</h3>
                <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.description}</p>
                <div className="mt-5">
                  <Link href={card.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                    Explore
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <HomeExaminationSpotlight />
      <GrowInFaithSection />
      <HomeHeavenboundSpotlight />
      <FooterCta />
      <FindMassSection />
    </div>
  );
}
