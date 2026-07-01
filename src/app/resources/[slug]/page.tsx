import { StaticMovedPage } from "@/components/StaticMovedPage";
import { publishedResources } from "@/lib/resources";

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedResources.map((resource) => ({ slug: resource.slug }));
}

export default async function OldResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <StaticMovedPage title="Resource Moved" destination={`/library/${slug}`} destinationLabel="Library Resource" />;
}
