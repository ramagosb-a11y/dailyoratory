import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConfessionNav } from "@/components/confession/ConfessionNav";
import { ConfessionReportCta } from "@/components/confession/ConfessionReportCta";
import { ExaminationNotices } from "@/components/confession/ExaminationNotices";
import { confessionMoralDiscernmentNote, confessionPastoralNote } from "@/data/confession";
import type { ConfessionGuideTopicRecord } from "@/types/confession";

export function ConfessionArticlePage({ topic }: { topic: ConfessionGuideTopicRecord }) {
  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <ConfessionNav />
        <Breadcrumbs items={[{ label: "Confession", href: "/confession" }, { label: topic.title }]} />

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <article className="content-card p-6 sm:p-8">
            <p className="text-xs font-bold uppercase text-burgundy">{topic.eyebrow}</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              {topic.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{topic.summary}</p>
            {topic.slug === "resisting-temptation" ? (
              <section className="mt-8 rounded-3xl border border-gold/50 bg-white/75 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sin, temptation, and conversion</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Daily Oratory now has a broader section on sin, temptation, Confession, and spiritual growth for
                  people who want a fuller path of mercy, resistance, and healing.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Open the full section", href: "/sin-and-temptation", description: "Start the full Catholic guide on sin, temptation, and conversion." },
                    { title: "New resisting temptation page", href: "/sin-and-temptation/resisting-temptation", description: "Use the newer practical guide and emergency plan tool." },
                    { title: "Venial and mortal sin", href: "/sin-and-temptation/venial-and-mortal-sin", description: "Understand the distinction with clarity and peace." },
                    { title: "Confession Guide", href: "/confession", description: "Return to the sacrament of mercy with confidence." },
                    { title: "Guided Examination", href: "/confession/examination", description: "Prepare honestly in a private local-only flow." },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="focus-ring rounded-2xl border border-stone bg-ivory p-4 hover:border-gold">
                      <span className="block font-display text-2xl font-semibold text-navy">{link.title}</span>
                      <span className="mt-2 block text-sm leading-6 text-muted">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            <ConfessionReportCta className="mt-8" />

            <div className="sacred-divider my-8" />

            <div className="content-prose resource-markdown space-y-8">
              {topic.sections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.items ? (
                    <ul className="list-disc space-y-2">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </article>

          <aside className="grid gap-4">
            <ExaminationNotices compact />
            <section className="card-parchment p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Pastoral note</p>
              <p className="mt-3 text-sm leading-7 text-muted">{confessionPastoralNote}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{confessionMoralDiscernmentNote}</p>
              <p className="mt-3 text-sm leading-7 text-muted">{topic.pastoralNote}</p>
            </section>
            <section className="card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Next faithful steps</p>
              <div className="mt-4 grid gap-3">
                {topic.practices.map((practice) => (
                  <Link key={practice.href} href={practice.href} className="focus-ring rounded-md border border-stone bg-ivory p-3 hover:border-gold">
                    <span className="block font-display text-2xl font-semibold text-navy">{practice.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">{practice.description}</span>
                  </Link>
                ))}
              </div>
            </section>
            <section className="card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Related resources</p>
              <div className="mt-4 grid gap-3">
                {topic.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="focus-ring rounded-sm text-sm font-semibold leading-6 text-navy hover:text-burgundy">
                    {link.title}
                    <span className="block font-normal text-muted">{link.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
