import type { Metadata } from "next";
import Link from "next/link";
import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";
import { formatAdorationDateTime, getAdorationLocationLabel, getAdorationStreamBySlug } from "@/lib/adoration";

const melbourneStream = getAdorationStreamBySlug("eucharistic-adoration-stream-qz8ye61boxm");

const whyPeopleCome = [
  "to remain quietly with Jesus in the Blessed Sacrament",
  "to pray for the Church, family, priests, and the world",
  "to begin or keep a simple Holy Hour",
  "to find a perpetual Adoration stream when they cannot visit a chapel in person",
] as const;

const startHere = [
  "Begin with the Sign of the Cross.",
  "Offer one short prayer of faith in the Real Presence.",
  "Remain quiet for a few minutes before adding many words.",
  "Use Scripture, a Rosary decade, or one simple intention if it helps you focus.",
] as const;

const relatedLinks = [
  { label: "Open the Melbourne Stream", href: "/adoration/eucharistic-adoration-stream-qz8ye61boxm" },
  { label: "Live Adoration Streams", href: "/adoration/live" },
  { label: "How to Make a Holy Hour", href: "/adoration/holy-hour" },
  { label: "Adoration Prayers", href: "/adoration/prayers" },
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "The Holy Mass", href: "/mass" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "Perpetual Adoration in Melbourne | Live Eucharistic Adoration | Daily Oratory",
  description:
    "A Catholic landing page for perpetual Eucharistic Adoration in Melbourne, featuring the St Benedict's live stream, practical prayer help, and links to a Holy Hour guide.",
  path: "/adoration/melbourne",
  keywords: [
    "perpetual adoration Melbourne",
    "eucharistic adoration Melbourne",
    "adoration Melbourne",
    "live adoration Melbourne",
    "St Benedict's Melbourne adoration",
  ],
});

export default function MelbourneAdorationPage() {
 const description = "A Catholic landing page for perpetual Eucharistic Adoration in Melbourne, featuring the St Benedict's live stream, practical prayer help, and links to a Holy Hour guide.";
 return <EditorialPage longform breadcrumbs={[{label:"Pray",href:"/pray"},{label:"Adoration",href:"/adoration"},{label:"Melbourne"}]}>
 <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "Perpetual Adoration in Melbourne",
              description,
              path: "/adoration/melbourne",
            }),
            buildBreadcrumbList([
              { name: "Adoration", path: "/adoration" },
              { name: "Melbourne", path: "/adoration/melbourne" },
            ]),
          ]}
        />
 <EditorialHero compact eyebrow="Prayer across the distance" title="Melbourne Adoration" description="A starting point for prayer with the St Benedict's chapel stream and the life of Eucharistic Adoration." image="/images/editorial/adoration-chapel.webp" imageAlt="" actions={[{label:"Begin guided Adoration",href:"/adoration/companion"},{label:"Begin a guided Holy Hour",href:"/adoration/companion?mode=holy-hour"}]} />
 <AdorationNav compact />
 <p className="mt-3 text-sm leading-7 text-muted">Photograph: Adoration at the Church of the Sacred Heart in Monaco, used as a prayerful illustration. It does not show St Benedict’s in Melbourne.</p>
 <EditorialSection title="The Melbourne chapel stream" eyebrow="St Benedict's">{melbourneStream ? <div className="border-y border-stone py-6"><h3 className="font-display text-3xl text-navy">{melbourneStream.title}</h3><p className="mt-3 text-base leading-8 text-muted">{melbourneStream.description}</p><p className="mt-3 font-semibold text-navy">{getAdorationLocationLabel(melbourneStream)}</p><p className="mt-3 text-sm leading-7 text-muted">Last checked: {formatAdorationDateTime(melbourneStream.lastCheckedAt)}. Recorded review details do not guarantee that the stream is online now.</p><Link href="/adoration/eucharistic-adoration-stream-qz8ye61boxm" className="btn btn-primary focus-ring mt-5">Open the Melbourne stream</Link></div> : <p className="text-base leading-8 text-muted">The Melbourne stream is not currently listed. Browse the live chapel directory for another prayer stream.</p>}<EditorialLinks links={[{label:"Browse other live chapels",href:"/adoration/live"}]} /></EditorialSection>
 <EditorialSection title="Enter prayer without hurry" description="This stream is a prayer aid. If you are able to visit a chapel in person, local parish or diocesan guidance remains the best help for nearby Adoration opportunities."><ol className="list-decimal space-y-3 pl-5 text-base leading-8 text-muted">{startHere.map(item=><li key={item}>{item}</li>)}</ol><EditorialDisclosure title="What perpetual Adoration means"><p className="text-base leading-8 text-muted">Perpetual Adoration means that the Blessed Sacrament is adored continually, often day and night, so that people can remain with Christ in prayer at any hour. A live stream can help those who are homebound, traveling, or unable to reach a chapel.</p><ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8 text-muted">{whyPeopleCome.map(item=><li key={item}>{item}</li>)}</ul></EditorialDisclosure></EditorialSection>
 <EditorialSection title="Let prayer lead back to the Mass" description="Eucharistic Adoration flows from the Mass and leads back to the Mass. A live stream should deepen reverence, silence, thanksgiving, repentance, and love for Christ truly present, not become background content."><EditorialLinks links={[...relatedLinks]} /></EditorialSection>
 </EditorialPage>;
}
