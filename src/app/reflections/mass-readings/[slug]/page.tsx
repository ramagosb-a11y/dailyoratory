import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MassReflectionPostLayout } from "@/components/reflections/MassReflectionPostLayout";
import { getRelatedContent } from "@/lib/content";
import {
  getNextReflectionData,
  getPreviousReflectionData,
  getMassReadingsReflectionsData,
  getReflectionBySlugData,
  getReflectionMediaData,
} from "@/lib/massReadingsReflections";
import { createPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export const revalidate = false;
const staticSource = { cacheMode: "static" } as const;

export async function generateStaticParams() {
  return (await getMassReadingsReflectionsData(staticSource))
    .filter((reflection) => reflection.status === "published" || reflection.status === "scheduled")
    .map((reflection) => ({ slug: reflection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const reflection = await getReflectionBySlugData(slug, staticSource);

  if (!reflection) return {};

  return createPageMetadata({
    title: `${reflection.title} | ${reflection.liturgicalDay}`,
    description: reflection.shortDescription,
    path: `/reflections/mass-readings/${reflection.slug}`,
  });
}

export default async function MassReadingsReflectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const reflection = await getReflectionBySlugData(slug, staticSource);

  if (!reflection || (reflection.status !== "published" && reflection.status !== "scheduled")) {
    notFound();
  }

  const related = getRelatedContent(reflection, 3).filter(
    (item) => item.status === "published" && item.visibility !== "private",
  );
  const [media, previousReflection, nextReflection] = await Promise.all([
    getReflectionMediaData(reflection, staticSource),
    getPreviousReflectionData(reflection.reflectionDate, staticSource),
    getNextReflectionData(reflection.reflectionDate, staticSource),
  ]);

  return (
    <MassReflectionPostLayout
      reflection={reflection}
      related={related}
      media={media}
      previousReflection={previousReflection}
      nextReflection={nextReflection}
    />
  );
}
