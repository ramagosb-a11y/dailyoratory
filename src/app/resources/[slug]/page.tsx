import { redirect } from "next/navigation";
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
  redirect(`/library/${slug}`);
}
