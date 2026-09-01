import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContemplativeLitanyShell } from "@/components/contemplative-litanies/ContemplativeLitanyShell";
import { litanySlugMap } from "@/components/contemplative-litanies/data/litanyRegistry";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(litanySlugMap).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const litany = litanySlugMap[slug];
  if (!litany) return {};
  return {
    title: litany.title,
    description: litany.shortDescription,
    alternates: { canonical: `/prayers/litanies/${litany.slug}` },
  };
}

export default async function ContemplativeLitanyPage({ params }: Props) {
  const { slug } = await params;
  const litany = litanySlugMap[slug];
  if (!litany) notFound();

  return (
    <div className="min-h-screen bg-ivory">
      <div className="border-b border-stone/60 bg-ivory/95 px-5 py-3 sm:px-8">
        <Link href="/prayers/litanies" className="focus-ring text-xs font-semibold uppercase tracking-[0.18em] text-navy">
          ← All Litanies
        </Link>
      </div>
      <ContemplativeLitanyShell litany={litany} />
    </div>
  );
}
