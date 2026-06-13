import type { Metadata } from "next";
import Link from "next/link";
import { PathwayCard } from "@/components/pathways/PathwayCard";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { SectionHeader } from "@/components/section-header";
import { getFeaturedPathways, getPublishedPathways } from "@/lib/pathways";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Spiritual Growth Pathways",
  description:
    "Guided Catholic formation tracks for prayer, confession, Rosary, Mass, liturgical living, virtue, healing, Scripture, Adoration, family prayer, mercy, and mission.",
  path: "/pathways",
});

export default function PathwaysPage() {
  const featured = getFeaturedPathways(6);
  const pathways = getPublishedPathways();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">Spiritual Growth Pathways</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Walk a guided Catholic path with peace.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              Choose a formation track for prayer, confession, the Rosary, Mass, liturgical living, virtue, healing, Scripture, Adoration,
              family prayer, works of mercy, or missionary discipleship.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/pathways/start" className="btn btn-primary focus-ring">
                Find my starting point
              </Link>
              <Link href="/pathways/my-pathways" className="btn btn-secondary focus-ring">
                My pathways
              </Link>
            </div>
          </div>
          <div className="dashboard-card p-6">
            <p className="text-xs font-bold uppercase text-burgundy">Formation posture</p>
            <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy">No account. No pressure. One next step.</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Progress saves only to localStorage on your device. The language stays gentle: these tracks support conversion without turning
              holiness into a score.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Pray", "Reflect", "Practice"].map((item) => (
                <div key={item} className="card-parchment p-4">
                  <p className="text-sm font-bold text-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-14">
          <SectionHeader
            eyebrow="Featured"
            title="Begin with a tested path"
            summary="These pathways are useful starting places for individuals, families, parish groups, prayer communities, and formation teams."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((pathway) => (
              <PathwayCard key={pathway.slug} pathway={pathway} />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <SectionHeader
            eyebrow="All Pathways"
            title="Formation tracks for daily Catholic life"
            summary="Each pathway includes a spiritual goal, step timeline, teaching, Scripture reference, prayer prompt, practice, reflection questions, and related resources."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pathways.map((pathway) => (
              <Link key={pathway.slug} href={`/pathways/${pathway.slug}`} className="card resource-card focus-ring p-5">
                <p className="text-xs font-bold uppercase text-burgundy">{pathway.estimatedDuration}</p>
                <h2 className="font-display mt-2 text-3xl font-semibold leading-tight text-navy">{pathway.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{pathway.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
