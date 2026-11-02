import { EditorialPage, EditorialHero, EditorialSection, EditorialLinks, EditorialDisclosure } from "@/components/editorial/Editorial";
import type { Metadata } from "next";
import { DailyPrayerActions } from "@/components/pray/DailyPrayerActions";
import { createPageMetadata } from "@/lib/metadata";
import { getDailyPrayerModel } from "@/lib/dailyPrayer";

export const revalidate = 86400;

export const metadata: Metadata = createPageMetadata({
  title: "Today's Suggested Prayer",
  description:
    "Pray with a Daily Oratory suggested prayer shaped by today's liturgical day, Church season, and the rhythm of Catholic worship.",
  path: "/pray/today",
  keywords: [
    "today's prayer",
    "daily catholic prayer",
    "liturgical prayer",
    "daily oratory prayer",
    "prayer for today",
  ],
});

export default function TodayPrayerPage() {
  const prayer = getDailyPrayerModel();
  const prayerParagraphs = prayer.prayerBody.split("\n\n");

  return (
    <EditorialPage longform breadcrumbs={[{ label: "Pray", href: "/pray" }, { label: "Today’s Prayer" }]}>
      <EditorialHero compact eyebrow="Today’s suggested prayer" title={prayer.prayerTitle} description={prayer.liturgicalTitle} image="/images/editorial/pray.webp" imageAlt="A quiet invitation to daily prayer" actions={[{ label: "Begin the prayer", href: "#daily-prayer" }]} />
      <article id="daily-prayer" className="mx-auto mt-10 max-w-3xl border-y border-stone py-8 sm:py-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-burgundy">An original Daily Oratory suggested prayer</p>
        <p className="mb-7 text-base leading-8 text-muted">{prayer.prayerLead}</p>
        <div className="space-y-6">{prayerParagraphs.map((paragraph, index) => <p key={index} className="whitespace-pre-line font-serif text-xl leading-10 text-navy">{paragraph}</p>)}</div>
        <DailyPrayerActions prayerText={prayer.prayerTextForCopy} />
      </article>
      <EditorialSection eyebrow="One faithful response" title="Pray this into life"><div className="space-y-4">{prayer.prompts.map((prompt) => <p key={prompt} className="border-l-2 border-gold pl-5 text-base leading-8 text-muted">{prompt}</p>)}</div><EditorialDisclosure title="A simple way to pray"><ol className="list-decimal space-y-3 pl-5 text-base leading-8 text-muted"><li>Begin slowly and place yourself before God.</li><li>Read the prayer once through without rushing.</li><li>Stay with one line that draws you back to Christ.</li><li>Let the prayer become one quiet act of fidelity today.</li></ol></EditorialDisclosure></EditorialSection>
      <EditorialSection eyebrow="Keep praying with the Church" title="Continue gently"><EditorialLinks links={prayer.relatedLinks} /></EditorialSection>
    </EditorialPage>
  );
}
