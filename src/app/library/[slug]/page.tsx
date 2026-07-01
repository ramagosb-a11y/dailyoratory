import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentBody } from "@/components/content/ContentBody";
import { ContentHeader } from "@/components/content/ContentHeader";
import { RelatedContent } from "@/components/content/RelatedContent";
import { getContentHref, getLibraryContentRecords, getPublishedContentBySlug, getRelatedContent } from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return getLibraryContentRecords().map((record) => ({ slug: record.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const record = getPublishedContentBySlug(slug);

  if (!record) {
    return {};
  }

  return createPageMetadata({
    title: record.title,
    description: record.description,
    path: getContentHref(record),
  });
}

export default async function LibraryContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const record = getPublishedContentBySlug(slug);

  if (!record) {
    notFound();
  }

  const related = getRelatedContent(record, 3).filter(
    (item) => item.status === "published" && item.visibility !== "private",
  );

  return (
    <div className="paper-texture">
      <article className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 lg:px-10">
        <ContentHeader record={record} />
        <ContentBody record={record} />
      </article>
      <RelatedContent records={related} />
    </div>
  );
}
