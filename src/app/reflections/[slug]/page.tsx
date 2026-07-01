import { redirect } from "next/navigation";
import { getPublishedMassReadingsReflectionsData } from "@/lib/massReadingsReflections";

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getPublishedMassReadingsReflectionsData()).map((reflection) => ({ slug: reflection.slug }));
}

export default async function ReflectionDetailRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/reflections/mass-readings/${slug}`);
}
