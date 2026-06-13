import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { PathwayStepControls } from "@/components/pathways/PathwayProgressControls";
import { PathwaysNav } from "@/components/pathways/PathwaysNav";
import { getContentById } from "@/lib/content";
import type { DailyOratoryContentRecord } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  getNextPathwayStep,
  getPathwayBySlug,
  getPathwayHref,
  getPathwayStep,
  getPathwayStepHref,
  getPreviousPathwayStep,
  getPublishedPathways,
} from "@/lib/pathways";

export function generateStaticParams() {
  return getPublishedPathways().flatMap((pathway) =>
    pathway.modules.map((step) => ({
      slug: pathway.slug,
      stepSlug: step.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; stepSlug: string }>;
}): Promise<Metadata> {
  const { slug, stepSlug } = await params;
  const pathway = getPathwayBySlug(slug);
  const step = pathway ? getPathwayStep(pathway, stepSlug) : undefined;

  if (!pathway || !step) return {};

  return createPageMetadata({
    title: `${step.title} | ${pathway.title}`,
    description: step.description,
    path: getPathwayStepHref(pathway, step),
  });
}

export default async function PathwayStepPage({
  params,
}: {
  params: Promise<{ slug: string; stepSlug: string }>;
}) {
  const { slug, stepSlug } = await params;
  const pathway = getPathwayBySlug(slug);
  const step = pathway ? getPathwayStep(pathway, stepSlug) : undefined;

  if (!pathway || !step) {
    notFound();
  }

  const previousStep = getPreviousPathwayStep(pathway, step);
  const nextStep = getNextPathwayStep(pathway, step);
  const related = step.relatedResourceIds
    .map((id) => getContentById(id))
    .filter((item): item is DailyOratoryContentRecord => Boolean(item))
    .filter((item) => item.status === "published" && item.visibility !== "private");

  return (
    <div className="paper-texture">
      <article className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <PathwaysNav />
        <Breadcrumbs
          items={[
            { label: "Pathways", href: "/pathways" },
            { label: pathway.title, href: getPathwayHref(pathway) },
            { label: step.title },
          ]}
        />
        <header className="mt-8">
          <p className="text-xs font-bold uppercase text-burgundy">
            {pathway.title} / {step.timeframe}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{step.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{step.description}</p>
        </header>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_18rem] lg:items-start">
          <div className="content-card p-5 sm:p-7">
            <section className="content-prose space-y-6">
              <div>
                <p className="text-xs font-bold uppercase text-burgundy">Teaching</p>
                <p className="mt-2">{step.teaching}</p>
              </div>
              <div className="prayer-card p-5">
                <p className="text-xs font-bold uppercase text-burgundy">Scripture reference</p>
                <p className="font-display mt-2 text-3xl font-semibold text-navy">{step.scriptureReference}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-burgundy">Prayer prompt</p>
                <blockquote>{step.prayerPrompt}</blockquote>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-burgundy">Practice</p>
                <p className="mt-2 font-semibold text-navy">{step.practice}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-burgundy">Reflection questions</p>
                <ul className="mt-3 list-disc space-y-2">
                  {step.reflectionQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
          <aside className="grid gap-5 lg:sticky lg:top-24">
            <PathwayStepControls pathway={pathway} step={step} nextStep={nextStep} />
            <div className="dashboard-card p-5">
              <p className="text-xs font-bold uppercase text-burgundy">Step navigation</p>
              <div className="mt-4 grid gap-3">
                {previousStep ? (
                  <Link href={getPathwayStepHref(pathway, previousStep)} className="btn btn-secondary focus-ring">
                    Previous step
                  </Link>
                ) : null}
                <Link href={getPathwayHref(pathway)} className="btn btn-secondary focus-ring">
                  Pathway overview
                </Link>
                {nextStep ? (
                  <Link href={getPathwayStepHref(pathway, nextStep)} className="btn btn-primary focus-ring">
                    Next step
                  </Link>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </article>
      <RelatedContent records={related} />
    </div>
  );
}
