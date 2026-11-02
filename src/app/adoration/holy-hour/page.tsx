import type { Metadata } from "next";
import { EditorialPage, EditorialHero, EditorialSection, EditorialDisclosure, EditorialLinks } from "@/components/editorial/Editorial";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { HolyHourGuide } from "@/components/adoration/HolyHourGuide";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

const shortVisitHelp = [
  "If you only have 10 to 15 minutes, begin anyway.",
  "A shorter visit made faithfully is better than waiting for a perfect hour that never comes.",
  "You can build toward a full Holy Hour over time.",
] as const;

const relatedLinks = [
  { label: "Eucharistic Adoration", href: "/adoration" },
  { label: "Live Adoration Streams", href: "/adoration/live" },
  { label: "Adoration Prayers", href: "/adoration/prayers" },
  { label: "The Holy Mass", href: "/mass" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "Catholic Q&A", href: "/catholic-answers" },
] as const;

export const metadata: Metadata = createPageMetadata({
  title: "How to Make a Holy Hour | Eucharistic Adoration Guide | Daily Oratory",
  description:
    "A simple Catholic guide to making a Holy Hour in Eucharistic Adoration, with a practical structure, help for beginners, and encouragement for shorter visits.",
  path: "/adoration/holy-hour",
  keywords: [
    "how to make a holy hour",
    "Holy Hour",
    "Eucharistic Adoration guide",
    "how to pray in adoration",
    "holy hour prayer",
  ],
});

export default function HolyHourPage() {
 const description = "A simple Catholic guide to making a Holy Hour in Eucharistic Adoration, with a practical structure, help for beginners, and encouragement for shorter visits.";
 return <EditorialPage longform breadcrumbs={[{label:"Pray",href:"/pray"},{label:"Adoration",href:"/adoration"},{label:"Holy Hour"}]}>
 <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: "How to Make a Holy Hour",
              description,
              path: "/adoration/holy-hour",
            }),
            buildBreadcrumbList([
              { name: "Adoration", path: "/adoration" },
              { name: "How to Make a Holy Hour", path: "/adoration/holy-hour" },
            ]),
          ]}
        />
 <EditorialHero compact eyebrow="Give Christ your time" title="A Holy Hour" description="Give Christ your time with reverence, honesty, and a willing heart. Follow the complete written guide at your own pace." image="/images/editorial/eucharist.webp" imageAlt="" actions={[{label:"Begin a guided Holy Hour",href:"/adoration/companion?mode=holy-hour"},{label:"Begin guided Adoration",href:"/adoration/companion"}]} />
 <AdorationNav compact />
 <EditorialSection title="The complete written guide" eyebrow="Pray at your own pace"><HolyHourGuide pagePath="/adoration/holy-hour" /></EditorialSection>
 <EditorialSection title="There is room for your ordinary life"><EditorialDisclosure title="If you are easily distracted"><p className="text-base leading-8 text-muted">Bring one small plan with you: a Gospel passage, a prayer intention, or one simple question for the Lord. When your mind wanders, return gently without harshness. A distracted Holy Hour can still be a faithful one.</p></EditorialDisclosure><EditorialDisclosure title="If you only have a short visit"><ul className="list-disc space-y-3 pl-5 text-base leading-8 text-muted">{shortVisitHelp.map(item=><li key={item}>{item}</li>)}</ul></EditorialDisclosure><EditorialDisclosure title="For your first Holy Hour"><p className="text-base leading-8 text-muted">Keep your first Holy Hour simple. Begin with silence, open a short Scripture passage, pray a little, and allow a few quiet minutes with Jesus. You do not need to force deep feelings. Faithful presence is already prayer.</p></EditorialDisclosure></EditorialSection>
 <EditorialSection title="Continue in prayer"><EditorialLinks links={[...relatedLinks]} /></EditorialSection>
 </EditorialPage>;
}
