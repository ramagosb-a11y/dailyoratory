import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { PathwayStartControls } from "@/components/pathways/PathwayProgressControls";
import { PathwayStepTimeline } from "@/components/pathways/PathwayStepTimeline";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { SectionHeader } from "@/components/section-header";
import { getRelatedContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import { getPathwayBySlug, getPathwayHref, getPublishedPathways } from "@/lib/pathways";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPathways().map((pathway) => ({ slug: pathway.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pathway = getPathwayBySlug(slug);

  if (!pathway) return {};

  return createPageMetadata({
    title: pathway.title,
    description: pathway.description,
    path: getPathwayHref(pathway),
  });
}

export default async function PathwayDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pathway = getPathwayBySlug(slug);

  if (!pathway) {
    notFound();
  }

  const related = getRelatedContent(pathway, 3).filter(
    (item) => item.status === "published" && item.visibility !== "private",
  );

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <Breadcrumbs items={[{ label: "Pathways", href: "/pathways" }, { label: pathway.title }]} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-burgundy">{pathway.estimatedDuration}</p>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{pathway.title}</h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{pathway.overview}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {pathway.modules[0] ? (
                <Link href={`/pathways/${pathway.slug}/steps/${pathway.modules[0].slug}`} className="btn btn-primary focus-ring">
                  Begin step one
                </Link>
              ) : null}
              <Link href="/pathways/my-pathways" className="btn btn-secondary focus-ring">
                My pathways
              </Link>
            </div>
          </div>
          <PathwayStartControls pathway={pathway} />
        </div>

        <section className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="dashboard-card p-5 lg:col-span-1">
            <p className="text-xs font-bold uppercase text-burgundy">Spiritual goal</p>
            <p className="mt-2 text-lg font-bold leading-7 text-navy">{pathway.spiritualGoal}</p>
          </div>
          <div className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Best for</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {pathway.bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="dashboard-card p-5">
            <p className="text-xs font-bold uppercase text-burgundy">Fruits to seek</p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              {pathway.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <SectionHeader
            eyebrow="Step Timeline"
            title="Move one step at a time"
            summary="Each step includes teaching, Scripture, prayer, practice, and reflection questions. Keep the pace peaceful and repeat a step when needed."
          />
          <PathwayStepTimeline pathway={pathway} />
        </section>
      </section>
      <RelatedContent records={related} />
    </div>
  );
}
