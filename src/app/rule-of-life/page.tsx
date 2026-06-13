import type { Metadata } from "next";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import Link from "next/link";
import { RuleOfLifeNav } from "@/components/rule-of-life/RuleOfLifeNav";
import { SectionHeader } from "@/components/section-header";
import { ruleOfLifePracticeOptions } from "@/data/ruleOfLife";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Daily Rule of Life",
  description: "Build a simple Catholic rhythm of prayer, Scripture, virtue, sacraments, reflection, and works of mercy.",
  path: "/rule-of-life",
});

const pillars = [
  "Prayer",
  "Scripture",
  "Virtue",
  "Sacraments",
  "Reflection",
  "Works of mercy",
] as const;

export default function RuleOfLifePage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <RuleOfLifeNav />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Daily Rule of Life</p>
            <h1 className="font-display mt-3 text-5xl font-semibold leading-none text-navy sm:text-6xl">
              Build a daily rule of life with peace.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              A rule of life is a simple Catholic rhythm that helps prayer become more concrete. It should serve love of Christ, not become a burden.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/rule-of-life/builder"
                className="btn btn-primary focus-ring"
                eventName="rule_of_life_start"
                eventParams={{
                  entry_point: "rule-of-life-overview",
                }}
              >
                Build my rule
              </TrackedLink>
              <Link href="/rule-of-life/templates" className="btn btn-secondary focus-ring">
                Browse templates
              </Link>
              <Link href="/body-soul-spirit" className="btn btn-secondary focus-ring">
                Interior temple
              </Link>
              <Link href="/daily-examen" className="btn btn-secondary focus-ring">
                Daily Examen
              </Link>
            </div>
          </div>
          <div className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">What the builder includes</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar} className="card-parchment p-4">
                  <p className="text-sm font-bold text-navy">{pillar}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">
              Version 1 saves only to localStorage on your device. No account, no tracking, no pressure.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <SectionHeader
            eyebrow="Practices"
            title="Choose small, faithful practices"
            summary="The builder offers familiar Catholic practices and helps you keep them realistic for your current season."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ruleOfLifePracticeOptions.slice(0, 12).map((practice) => (
              <article key={practice.id} className="card p-5">
                <p className="text-xs font-bold uppercase text-burgundy">{practice.cadence}</p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-navy">{practice.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{practice.description}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
