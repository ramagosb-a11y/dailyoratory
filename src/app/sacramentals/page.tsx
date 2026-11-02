import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks, EditorialGrid, EditorialCard } from "@/components/editorial/Editorial";
import { SacramentalFinderTool } from "@/components/sacramentals/SacramentalFinderTool";
import { CommonSacramentalsGrid } from "@/components/sacramentals/CommonSacramentalsGrid";
import { GetSacramentalsBlessed } from "@/components/sacramentals/GetSacramentalsBlessed";
import { DisposeBlessedObjects } from "@/components/sacramentals/DisposeBlessedObjects";
import { SacramentalPrayerCards } from "@/components/sacramentals/SacramentalPrayerCards";
import { WhereToPurchaseSacramentals } from "@/components/sacramentals/WhereToPurchaseSacramentals";
import { SacramentalAffiliateDisclosure } from "@/components/sacramentals/SacramentalAffiliateDisclosure";
import { PurchaseDiscernmentGuide } from "@/components/sacramentals/PurchaseDiscernmentGuide";
import { SacramentalsFAQ } from "@/components/sacramentals/SacramentalsFAQ";
import { SacramentalResources } from "@/components/sacramentals/SacramentalResources";
import { SacramentalCopyrightNote } from "@/components/sacramentals/SacramentalCopyrightNote";


export const metadata: Metadata = createPageMetadata({
  title: "Catholic Sacramentals | Holy Water, Rosaries, Medals, Scapulars, and Blessings",
  description:
    "Learn what Catholic sacramentals are, how they differ from sacraments, how to use holy water, rosaries, medals, scapulars, candles, crucifixes, and where to purchase sacramentals.",
  path: "/sacramentals",
  keywords: [
    "Catholic sacramentals",
    "holy water",
    "Catholic rosary",
    "blessed medals",
    "scapular",
    "Saint Benedict Medal",
    "crucifix",
    "Catholic candles",
    "sacramentals vs sacraments",
    "blessed objects",
    "Catholic blessings",
    "where to buy sacramentals",
  ],
});

export default function SacramentalsPage() {
  return (
    <EditorialPage longform breadcrumbs={[{ label: "Learn", href: "/learn" }, { label: "Sacramentals" }]}>
      <EditorialHero compact eyebrow="Faith in ordinary life" title="Small signs. A life turned toward God." description="Explore holy water, rosaries, medals, sacred images, and blessings within the prayer and sacramental life of the Church." image="/images/editorial/sacramentals.webp" imageAlt="Catholic prayer and devotion" actions={[{ label: "Find a prayer companion", href: "#sacramental-finder-section" }, { label: "Explore sacramentals", href: "#common-sacramentals" }]} />
      <EditorialSection id="what-are-sacramentals" eyebrow="Understand" title="Sacred signs within the Church’s prayer">
        <div className="max-w-3xl space-y-4 text-base leading-8 text-muted"><p>Sacramentals are sacred signs given by the Church to help us turn ordinary life toward God. Through the Church’s intercession, they foster a readiness to receive and cooperate with grace.</p><p>Their role differs from that of the sacraments. A blessed object is not a lucky charm: it does not force God to act or guarantee protection.</p><p>Keep Christ at the center. Let devotion lead toward prayer, charity, repentance, and the sacraments, rather than fear or obsession with evil.</p></div>
        <EditorialLinks links={[{ label: "Catechism 1667–1676", href: "https://www.vatican.va/content/catechism/en/part_two/section_two/chapter_four/article_1.html" }, { label: "Explore the seven sacraments", href: "/sacraments" }]} />
      </EditorialSection>
      <EditorialSection id="sacramental-finder-section" eyebrow="Begin simply" title="Find a way to pray">
        <SacramentalFinderTool />
      </EditorialSection>
      <EditorialSection eyebrow="Explore" title="Sacramentals for daily life">
        <EditorialGrid>
          <EditorialCard title="The Rosary" description="Beads that help keep the rhythm of a familiar prayer." href="/devotions/holy-rosary" image="/images/editorial/sacramentals.webp" />
          <EditorialCard title="Holy water" description="A holy-water font at Saint Mary Church in Chillicothe, Ohio." href="#common-sacramentals" image="/images/editorial/holy-water.webp" />
          <EditorialCard title="The crucifix" description="A crucifix at Saint Nicholas Catholic Church in Zanesville, Ohio." href="#common-sacramentals" image="/images/editorial/crucifix.webp" />
        </EditorialGrid>
        <CommonSacramentalsGrid />
        <EditorialLinks links={[{ label: "The Rosary", href: "/rosary" }, { label: "Prayer library", href: "/prayers" }, { label: "The liturgical year", href: "/liturgical-year" }]} />
      </EditorialSection>
      <EditorialSection eyebrow="Use with reverence" title="Blessing, care, and good judgment">
        <GetSacramentalsBlessed />
        <EditorialDisclosure title="Caring for a damaged or worn blessed object"><DisposeBlessedObjects /></EditorialDisclosure>
        <p className="max-w-3xl text-base leading-8 text-muted">For a family starting simply, a crucifix, a prayer card, or a Rosary can support a modest place of prayer at home. Teach children reverent use; keep the focus on God rather than accumulating objects.</p>
      </EditorialSection>
      <EditorialSection eyebrow="Prayer" title="Let the sign become a prayer">
        <p className="text-sm leading-7 text-muted">Original Daily Oratory devotional prayers.</p>
        <SacramentalPrayerCards />
      </EditorialSection>
      <EditorialSection eyebrow="Trusted guidance" title="Learn more, choose carefully">
        <EditorialDisclosure title="Purchasing with discernment"><WhereToPurchaseSacramentals /><SacramentalAffiliateDisclosure /><PurchaseDiscernmentGuide /></EditorialDisclosure>
        <EditorialDisclosure title="Common questions"><SacramentalsFAQ /></EditorialDisclosure>
        <SacramentalResources />
        <SacramentalCopyrightNote />
      </EditorialSection>
    </EditorialPage>
  );
}
