import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FindMassSection } from "@/components/home/FindMassSection";
import { FooterCta } from "@/components/home/FooterCta";
import { HomeExaminationSpotlight } from "@/components/home/HomeExaminationSpotlight";
import { GrowInFaithSection } from "@/components/home/GrowInFaithSection";
import { HomeHeavenboundSpotlight } from "@/components/home/HomeHeavenboundSpotlight";
import { HomeRosaryCta } from "@/components/home/HomeRosaryCta";
import { HomeDivineMercyCta } from "@/components/home/HomeDivineMercyCta";
import { HomeWayOfCrossCta } from "@/components/home/HomeWayOfCrossCta";
import { HomeLitanyTeaser } from "@/components/home/HomeLitanyTeaser";
import { Hero } from "@/components/home/Hero";
import { TodayInTheChurch } from "@/components/home/TodayInTheChurch";
import { litanyCatalog } from "@/components/contemplative-litanies/data/litanyRegistry";
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
    title: "The Sacred Hours",
    description:
      "A guided journey through the final hours of Christ's earthly life.",
    href: "/holy-week",
    image: "/images/sacred-hours/sacred-hours-hourglass.png",
    imageAlt: "Antique hourglass with falling sand in a candlelit chapel",
  },
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
    title: "Three-Day Fasting Retreat",
    description:
      "A guided three-day retreat of fasting, Scripture, prayer, and consecration with Christ.",
    href: "/fasting-retreat",
    image: "/images/fasting-retreat/01-retreat-opening.webp",
    imageAlt: "Candlelit prayer book prepared for the Three-Day Fasting Retreat",
  },
];

const homeLitanyTeaser = litanyCatalog
  .filter((litany) => litany.status === "available" && Boolean(litany.image))
  .map((litany) => ({
    id: litany.id,
    title: litany.title,
    image: litany.image as string,
    imageAlt: `${litany.title} devotional holy card`,
  }));

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
          <div className="liturgical-home-rule mt-6" aria-hidden="true" />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredContentCards.map((card) => (
              <article key={card.href} className={`liturgical-home-card rounded-3xl p-5${"image" in card ? " sacred-hours-home-card" : ""}`}>
                {"image" in card ? <div className="-mx-5 -mt-5 mb-5 overflow-hidden rounded-t-3xl"><Image src={card.image!} alt={card.imageAlt!} width={1672} height={941} sizes="(max-width: 1279px) 50vw, 25vw" className="aspect-video w-full object-cover" /></div> : null}
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
      <FooterCta />
      <GrowInFaithSection />
      <HomeWayOfCrossCta />
      <HomeHeavenboundSpotlight />
      <HomeRosaryCta />
      <HomeLitanyTeaser collectionHref="/prayers/litanies" litanies={homeLitanyTeaser} />
      <HomeDivineMercyCta />
      <FindMassSection />
    </div>
  );
}
