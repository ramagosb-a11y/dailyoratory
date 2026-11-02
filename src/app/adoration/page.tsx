import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { EditorialPage, EditorialHero, EditorialSection, EditorialGrid, EditorialCard, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationPortal } from "@/components/adoration/AdorationPortal";
import { WhatIsAdoration } from "@/components/adoration/WhatIsAdoration";
import { FirstTimeAdoration } from "@/components/adoration/FirstTimeAdoration";
import { AdorationPrayerPathSelector } from "@/components/adoration/AdorationPrayerPathSelector";
import { AdorationScriptureCards } from "@/components/adoration/AdorationScriptureCards";
import { AdorationPrayerCards } from "@/components/adoration/AdorationPrayerCards";
import { AdorationFAQ } from "@/components/adoration/AdorationFAQ";
import { AdorationEtiquette } from "@/components/adoration/AdorationEtiquette";
import { FindAdorationNearYou } from "@/components/adoration/FindAdorationNearYou";
import { AdorationResources } from "@/components/adoration/AdorationResources";
import { AdorationCopyrightNote } from "@/components/adoration/AdorationCopyrightNote";

export const metadata: Metadata = createPageMetadata({
  title: "Live Eucharistic Adoration and Prayer",
  description:
    "Pray before Jesus in Eucharistic Adoration with live and 24/7 perpetual adoration streams, a Holy Hour guide, beginner instructions, Scripture, prayers, and Catholic resources.",
  path: "/adoration",
  keywords: [
    "Eucharistic Adoration",
    "Adoration live stream",
    "perpetual adoration",
    "live Eucharistic Adoration",
    "perpetual adoration Melbourne",
    "Holy Hour",
    "Blessed Sacrament",
    "Catholic prayer",
    "Real Presence",
    "Eucharist",
    "Adoration prayers",
    "how to pray in Adoration",
  ],
});

export default function AdorationPage() {
 return <EditorialPage longform breadcrumbs={[{label:"Pray",href:"/pray"},{label:"Adoration"}]}>
 <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Eucharistic Adoration",
              description:
                "Pray before Jesus in Eucharistic Adoration with live and 24/7 perpetual adoration streams, a Holy Hour guide, beginner instructions, Scripture, prayers, and Catholic resources.",
              path: "/adoration",
            }),
            buildArticleStructuredData({
              headline: "Eucharistic Adoration",
              description:
                "Pray before Jesus in Eucharistic Adoration with live and 24/7 perpetual adoration streams, a Holy Hour guide, beginner instructions, Scripture, prayers, and Catholic resources.",
              path: "/adoration",
              keywords: metadata.keywords as string[] | undefined,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Adoration", path: "/adoration" },
            ]),
          ]}
        />
 <EditorialHero eyebrow="Remain with Christ" title="Eucharistic Adoration" description="Make room for silence, prayer, and the presence of Jesus in the Blessed Sacrament." image="/images/editorial/adoration-chapel.webp" imageAlt="" actions={[{label:"Begin guided Adoration",href:"/adoration/companion"},{label:"Begin a guided Holy Hour",href:"/adoration/companion?mode=holy-hour"}]} />
 <AdorationNav compact />
 <EditorialSection title="A place to pray" eyebrow="Live chapel"><p className="mb-6 max-w-3xl text-base leading-8 text-muted">Stream details reflect the latest recorded review, not a real-time availability guarantee. Start playback when you are ready; if a chapel is unavailable, browse another stream.</p><AdorationPortal /></EditorialSection>
 <EditorialSection id="holy-hour-guide" title="Find your way into prayer" eyebrow="Go gently"><EditorialGrid>
 <EditorialCard title="The written Holy Hour guide" description="A complete structure for adoration, thanksgiving, mercy, Scripture, intercession, and surrender." href="/adoration/holy-hour#holy-hour-guide" image="/images/editorial/eucharist.webp" />
 <EditorialCard title="A meditation before the Blessed Sacrament" description="Bring your whole life to prayer through ten quiet movements." href="/adoration/meditation-before-the-blessed-sacrament" image="/images/editorial/pray.webp" />
 <EditorialCard title="Prayers for Adoration" description="Find familiar words for worship, trust, thanksgiving, and love." href="/adoration/prayers" image="/images/editorial/learn.webp" />
 </EditorialGrid></EditorialSection>
 <EditorialSection title="If this is your first visit" eyebrow="Welcome"><WhatIsAdoration /><EditorialDisclosure id="how-to-pray" title="How to begin with reverence"><FirstTimeAdoration /><AdorationEtiquette /></EditorialDisclosure></EditorialSection>
 <EditorialSection title="Bring what is on your heart" eyebrow="Prayer and Scripture"><AdorationPrayerPathSelector /><EditorialDisclosure title="Pray with Scripture"><AdorationScriptureCards /></EditorialDisclosure><EditorialDisclosure title="Traditional prayers before the Blessed Sacrament"><AdorationPrayerCards /></EditorialDisclosure></EditorialSection>
 <EditorialSection title="Return to the life of the Church" eyebrow="Beyond the screen" description="A live stream is a prayer aid. For those able to visit, seek Adoration in a chapel and remain connected to Mass and the sacramental life."><FindAdorationNearYou /><EditorialLinks links={[{label:"Melbourne Adoration",href:"/adoration/melbourne"},{label:"Browse live chapels",href:"/adoration/live"},{label:"The Holy Mass",href:"/mass"},{label:"The Eucharist",href:"/sacraments/eucharist"}]} /></EditorialSection>
 <EditorialSection title="Questions and trusted guidance"><AdorationFAQ /><EditorialDisclosure title="Sources and further reading"><AdorationResources /></EditorialDisclosure><AdorationCopyrightNote /></EditorialSection>
 </EditorialPage>;
}
