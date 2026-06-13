import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BodySoulForExplorers } from "@/components/body-soul-spirit/BodySoulForExplorers";
import { BodySoulSpiritCopyrightNote } from "@/components/body-soul-spirit/BodySoulSpiritCopyrightNote";
import { BodySoulSpiritFAQ } from "@/components/body-soul-spirit/BodySoulSpiritFAQ";
import { BodySoulSpiritHero } from "@/components/body-soul-spirit/BodySoulSpiritHero";
import { BodySoulSpiritResources } from "@/components/body-soul-spirit/BodySoulSpiritResources";
import { BodySoulTechnology } from "@/components/body-soul-spirit/BodySoulTechnology";
import { BodyTempleHolySpirit } from "@/components/body-soul-spirit/BodyTempleHolySpirit";
import { ConfessionCleansesTemple } from "@/components/body-soul-spirit/ConfessionCleansesTemple";
import { DailyTempleCare } from "@/components/body-soul-spirit/DailyTempleCare";
import { EucharistAndSoul } from "@/components/body-soul-spirit/EucharistAndSoul";
import { GraceLightWithin } from "@/components/body-soul-spirit/GraceLightWithin";
import { HealingAfterSin } from "@/components/body-soul-spirit/HealingAfterSin";
import { HolySpiritWithin } from "@/components/body-soul-spirit/HolySpiritWithin";
import { HumanPersonBodySoul } from "@/components/body-soul-spirit/HumanPersonBodySoul";
import { InteriorTempleCheckup } from "@/components/body-soul-spirit/InteriorTempleCheckup";
import { InteriorTempleMap } from "@/components/body-soul-spirit/InteriorTempleMap";
import { InteriorTemplePrayerCards } from "@/components/body-soul-spirit/InteriorTemplePrayerCards";
import { RelatedBodySoulSpiritTools } from "@/components/body-soul-spirit/RelatedBodySoulSpiritTools";
import { SinDimsTemple } from "@/components/body-soul-spirit/SinDimsTemple";
import { SoulInteriorTemple } from "@/components/body-soul-spirit/SoulInteriorTemple";
import { createPageMetadata } from "@/lib/metadata";

const baseMetadata = createPageMetadata({
  title: "Body, Soul, and Spirit | The Interior Temple of God | Daily Oratory",
  description:
    "Understand the Catholic view of body and soul, the soul as an interior temple, grace as light, sin as darkness, Confession as cleansing, and the Holy Spirit dwelling within.",
  path: "/body-soul-spirit",
  keywords: [
    "body soul spirit",
    "Catholic soul",
    "temple of the Holy Spirit",
    "interior temple",
    "grace and sin",
    "confession cleanses the soul",
    "mortal sin",
    "venial sin",
    "Catholic formation",
    "Holy Spirit within",
    "Eucharist and soul",
    "examination of conscience",
  ],
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Body, Soul, and Spirit",
    description:
      "A Catholic formation guide to the body as temple of the Holy Spirit, the soul as an interior temple, grace, sin, Confession, Eucharist, and daily holiness.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Body, Soul, and Spirit",
    description:
      "A Catholic formation guide to the body as temple of the Holy Spirit, the soul as an interior temple, grace, sin, Confession, Eucharist, and daily holiness.",
  },
};

export default function BodySoulSpiritPage() {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Learn", href: "/learn" }, { label: "Body, Soul, and Spirit" }]} />

        <div className="mt-8">
          <BodySoulSpiritHero />
        </div>

        <div className="mt-14">
          <HumanPersonBodySoul />
        </div>

        <div className="mt-14">
          <BodyTempleHolySpirit />
        </div>

        <div className="mt-14">
          <SoulInteriorTemple />
        </div>

        <div className="mt-14">
          <GraceLightWithin />
        </div>

        <div className="mt-14">
          <SinDimsTemple />
        </div>

        <div className="mt-14">
          <ConfessionCleansesTemple />
        </div>

        <div className="mt-14">
          <InteriorTempleCheckup />
        </div>

        <div className="mt-14">
          <DailyTempleCare />
        </div>

        <div className="mt-14">
          <EucharistAndSoul />
        </div>

        <div className="mt-14">
          <HolySpiritWithin />
        </div>

        <div className="mt-14">
          <InteriorTempleMap />
        </div>

        <div className="mt-14">
          <BodySoulTechnology />
        </div>

        <div className="mt-14">
          <HealingAfterSin />
        </div>

        <div className="mt-14">
          <BodySoulForExplorers />
        </div>

        <div className="mt-14">
          <InteriorTemplePrayerCards />
        </div>

        <div className="mt-14">
          <BodySoulSpiritFAQ />
        </div>

        <div className="mt-14">
          <RelatedBodySoulSpiritTools />
        </div>

        <div className="mt-14">
          <BodySoulSpiritResources />
        </div>

        <div className="mt-14">
          <BodySoulSpiritCopyrightNote />
        </div>
      </main>
    </div>
  );
}
