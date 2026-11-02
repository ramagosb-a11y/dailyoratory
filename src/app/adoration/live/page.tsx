import type { Metadata } from "next";
import { EditorialPage, EditorialHero, EditorialSection, EditorialLinks } from "@/components/editorial/Editorial";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationStreamDirectory } from "@/components/adoration/AdorationStreamDirectory";
import { createPageMetadata } from "@/lib/metadata";
import { getLiveAdorationStreams } from "@/lib/adoration";

export const metadata: Metadata = createPageMetadata({
  title: "Live Adoration Streams | Perpetual Eucharistic Adoration",
  description:
    "Browse live and 24/7 perpetual Eucharistic Adoration streams reviewed for Daily Oratory, including verified chapels for quiet prayer.",
  path: "/adoration/live",
});

export default function LiveAdorationPage() {
 return <EditorialPage longform breadcrumbs={[{label:"Pray",href:"/pray"},{label:"Adoration",href:"/adoration"},{label:"Live chapels"}]}>
 <EditorialHero compact eyebrow="A chapel for quiet prayer" title="Live Adoration" description="Browse reviewed chapel streams by language, place, and recorded availability." image="/images/vatican/st-peters-interior.webp" imageAlt="" actions={[{label:"Begin guided Adoration",href:"/adoration/companion"},{label:"Begin a guided Holy Hour",href:"/adoration/companion?mode=holy-hour"}]} />
 <AdorationNav compact />
 <EditorialSection id="live-chapels" title="Find a chapel" description="Review dates and status labels describe the last recorded check. They do not guarantee that a stream is online now. Playback begins only when you choose it."><AdorationStreamDirectory initialStreams={getLiveAdorationStreams()} liveOnly compactFilters /></EditorialSection>
 <EditorialSection title="Stay connected to the sacramental life" description="Live streams are prayer aids, especially when you cannot visit a chapel. Adoration in person and participation in the Mass remain part of Catholic sacramental life."><EditorialLinks links={[{label:"The Melbourne stream",href:"/adoration/melbourne"},{label:"Written Holy Hour guide",href:"/adoration/holy-hour"},{label:"Adoration prayers",href:"/adoration/prayers"},{label:"Learn about the Eucharist",href:"/sacraments/eucharist"}]} /></EditorialSection>
 </EditorialPage>;
}
