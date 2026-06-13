import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SacramentParishReminder } from "@/components/sacraments/SacramentParishReminder";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sponsor and Godparent Guide | Catholic Sacraments | Daily Oratory",
  description:
    "Prepare to accompany another person as a baptism godparent or confirmation sponsor with prayer, example, and faithful witness.",
  path: "/sacraments/sponsor-godparent",
});

export default function SponsorGodparentPage() {
  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <Breadcrumbs items={[{ label: "Sacraments", href: "/sacraments" }, { label: "Sponsor and Godparent Guide" }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Sponsor and Godparent Guide</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">Accompany another person with prayer and example</h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Sponsors and godparents are not honorary titles. They are witnesses meant to encourage a real
              Catholic life through presence, prayer, and faithful example.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/sacraments/prepare" className="btn btn-primary focus-ring">
                Open Sponsor/Godparent Companion
              </Link>
              <Link href="/saints/finder" className="btn btn-secondary focus-ring">
                Find a saint companion
              </Link>
            </div>
          </div>
          <SacramentParishReminder />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <section className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">Baptism godparent</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              A godparent helps the baptized person grow in the faith and should remain present beyond the day
              of celebration.
            </p>
          </section>
          <section className="card-parchment p-6">
            <h2 className="font-display text-3xl font-semibold text-navy">Confirmation sponsor</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              A sponsor helps the candidate follow Christ with mature Catholic witness, prayer, and practical support.
            </p>
          </section>
        </div>

        <section className="mt-5 card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Common questions</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <li>What are the parish requirements for sponsors or godparents?</li>
            <li>How can I remain present after the sacrament is celebrated?</li>
            <li>What prayer can I offer for the candidate or child?</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
