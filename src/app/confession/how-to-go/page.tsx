import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ExaminationNotices } from "@/components/confession/ExaminationNotices";
import { ConfessionReportCta } from "@/components/confession/ConfessionReportCta";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";

const confessionSteps = [
  {
    title: "Prepare with prayer",
    text: "Ask the Holy Spirit for honesty, sorrow, and trust. Use an examination if it helps, but do not wait until you feel perfectly prepared.",
  },
  {
    title: "Go to your parish confession time",
    text: "You may also contact a parish for an appointment, especially if you are returning after a long time or need more time.",
  },
  {
    title: "Begin simply",
    text: "Tell the priest if you are unsure what to say. You can say that you need help making a good confession.",
  },
  {
    title: "Confess clearly",
    text: "Name your sins as honestly and simply as you can. This guide does not label sins as mortal or venial; bring uncertainty to the priest.",
  },
  {
    title: "Receive counsel and penance",
    text: "Listen for a practical next step. Ask for clarification if you do not understand the penance.",
  },
  {
    title: "Receive absolution and begin again",
    text: "Trust the mercy of Christ. After confession, complete your penance and return to prayer with peace.",
  },
];

export const metadata: Metadata = createPageMetadata({
  title: "How to Go to Confession",
  description: "A gentle Catholic guide for going to confession, with a reminder to speak with a priest when unsure.",
  path: "/confession/how-to-go",
});

export default function HowToGoToConfessionPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ConfessionNav />
        <Breadcrumbs items={[{ label: "Confession", href: "/confession" }, { label: "How to Go" }]} />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-6">
            <SectionHeader
              eyebrow="Sacrament of mercy"
              title="How to go to confession"
              summary="A simple, gentle guide for approaching the sacrament. This companion supports preparation, but your priest and parish remain your proper guide."
            />
            <ExaminationNotices compact />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/confession/examination/start" className="btn btn-primary focus-ring">
                Start examination
              </Link>
              <Link href="/confession/prayers" className="btn btn-secondary focus-ring">
                Confession prayers
              </Link>
            </div>
            <ConfessionReportCta />
          </div>

          <ol className="grid gap-4">
            {confessionSteps.map((step, index) => (
              <li key={step.title} className="dashboard-card p-5">
                <p className="text-xs font-bold uppercase text-burgundy">Step {index + 1}</p>
                <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
