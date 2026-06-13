"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/section-header";

const sections = [
  {
    title: "You are welcome",
    body: "If you are returning after time away, you are not alone. Christ and His Church still invite you forward.",
  },
  {
    title: "Start gently",
    body: "Begin with one real step: prayer, Mass, Confession, or a conversation with a priest.",
  },
  {
    title: "Returning to the Catholic faith takes time",
    body: "You do not need to solve every question before coming back. The Church meets people one faithful step at a time.",
  },
  {
    title: "Return to Mass",
    body: "If you are Catholic, begin again with Sunday Mass and let the rhythm of worship steady your heart.",
  },
  {
    title: "Return to Confession",
    body: "Confession is a place of mercy and healing. If you are unsure how to begin, a priest can help you gently.",
  },
  {
    title: "Speak with a priest",
    body: "A parish priest can help with Confession, marriage questions, sacramental questions, and any situation that feels complicated.",
  },
  {
    title: "What if I forgot the prayers?",
    body: "That is okay. You can return even if you do not remember every response or prayer.",
  },
  {
    title: "What if I have marriage or family questions?",
    body: "Bring them honestly to a priest or parish. Catholic pastoral care is meant for real lives, not idealized situations.",
  },
];

const practicalSteps = [
  {
    title: "If you have been away for years",
    body: "Start with prayer, then open the Confession guide and look up a nearby parish Mass time.",
    links: [
      { label: "Confession Guide", href: "/confession" },
      { label: "What Should I Do?", href: "/what-should-i-do" },
    ],
  },
  {
    title: "If you feel nervous about Mass",
    body: "Go quietly, sit where you can follow more easily, and let the Church carry you through the liturgy.",
    links: [
      { label: "The Holy Mass", href: "/mass" },
      { label: "Catholic Life Roadmap", href: "/catholic-life" },
    ],
  },
  {
    title: "If you have questions about belief",
    body: "Begin with a short answer, then keep learning without trying to master everything in a day.",
    links: [
      { label: "Catholic Q&A", href: "/catholic-answers" },
      { label: "Formation", href: "/formation" },
    ],
  },
  {
    title: "If your situation feels complicated",
    body: "A priest can help you sort through marriage, sacramental, or family questions with clarity and mercy.",
    links: [
      { label: "Sacraments", href: "/sacraments" },
      { label: "Prayer Library", href: "/prayers" },
    ],
  },
] as const;

const relatedLinks = [
  { label: "What Should I Do?", href: "/what-should-i-do" },
  { label: "Catholic Life Roadmap", href: "/catholic-life" },
  { label: "Catholic Q&A", href: "/catholic-answers" },
  { label: "Confession Guide", href: "/confession" },
  { label: "Prayer Library", href: "/prayers" },
  { label: "The Holy Mass", href: "/mass" },
] as const;

const returnPlan = [
  "Day 1: Pray honestly and ask God for courage.",
  "Day 2: Read the guide to the Mass.",
  "Day 3: Look over the Confession guide.",
  "Day 4: Read one Gospel passage.",
  "Day 5: Write down any questions or concerns.",
  "Day 6: Attend Mass.",
  "Day 7: Contact a parish or priest.",
] as const;

const returningPrayer = `Lord Jesus,
thank You for not giving up on me.

Lead me back with mercy,
remove fear and shame,
and help me begin again in peace.

Amen.`;

export function ReturningCatholicGuide() {
  const [copied, setCopied] = useState(false);

  async function copyPlan() {
    try {
      await navigator.clipboard.writeText(["7-Day Return Plan", "", ...returnPlan.map((item) => `- ${item}`)].join("\n"));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-14">
      <section className="liturgical-gradient-soft overflow-hidden rounded-md border border-stone bg-parchment px-6 py-8 shadow-soft sm:px-8 sm:py-10">
        <div className="max-w-3xl">
          <p className="liturgical-section-eyebrow text-xs font-bold uppercase tracking-[0.16em]">Returning Catholics</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
            Coming Home to the Catholic Church
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            A welcoming guide for returning Catholics with steps for Mass, Confession, prayer, parish contact, and
            rebuilding Catholic spiritual life.
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="card-parchment p-5">
            <h2 className="font-display text-2xl font-semibold text-navy">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{section.body}</p>
          </section>
        ))}
      </div>

      <section>
        <SectionHeader eyebrow="Return plan" title="7-Day Return Plan" />
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {returnPlan.map((item) => (
            <article key={item} className="card-parchment p-5 text-sm leading-7 text-muted">
              {item}
            </article>
          ))}
        </div>
        <button type="button" onClick={copyPlan} className="btn liturgical-button focus-ring mt-6 justify-center">
          {copied ? "Return plan copied" : "Copy Return Plan"}
        </button>
      </section>

      <section>
        <SectionHeader eyebrow="Practical next steps" title="How to come back without panic" />
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {practicalSteps.map((step) => (
            <article key={step.title} className="card-parchment p-5">
              <h2 className="font-display text-2xl font-semibold text-navy">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{step.body}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {step.links.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-full border border-stone px-4 py-2 text-sm font-semibold text-navy transition hover:border-gold">
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Prayer" title="Prayer for Returning Catholics" />
        <div className="card-parchment mt-7 p-6 sm:p-8">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-8 text-muted">{returningPrayer}</pre>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="Keep going" title="Related guides for returning Catholics" />
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="card dashboard-card focus-ring flex min-h-24 items-center p-5 transition hover:-translate-y-0.5 hover:border-gold">
              <span className="font-display text-2xl font-semibold leading-tight text-navy">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link href="/confession" className="btn liturgical-button focus-ring justify-center">Confession Guide</Link>
        <Link href="/mass" className="btn btn-secondary focus-ring justify-center">The Holy Mass</Link>
        <Link href="/ocia" className="btn btn-secondary focus-ring justify-center">OCIA</Link>
        <Link href="/sacraments" className="btn btn-secondary focus-ring justify-center">Sacraments</Link>
      </section>
    </div>
  );
}
