import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SaintProfileBody } from "@/components/saints/SaintProfileBody";
import { SaintProfileHero } from "@/components/saints/SaintProfileHero";
import { SaintProfileTracker } from "@/components/saints/SaintProfileTracker";
import { createPageMetadata } from "@/lib/metadata";
import { getApprovedSaints, getSaintBySlug } from "@/lib/saints";

export async function generateStaticParams() {
  return getApprovedSaints().map((saint) => ({ slug: saint.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const saint = getSaintBySlug(slug);

  if (!saint) {
    return createPageMetadata({
      title: "Saint Profile",
      description: "Learn about Catholic saints and their witness to holiness.",
      path: `/saints/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: `${saint.name} | Catholic Saints`,
    description: `Learn about ${saint.name}, their feast day, virtues, patronage, life, prayer, and how to imitate their holiness today.`,
    path: `/saints/${saint.slug}`,
  });
}

export default async function SaintProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const saint = getSaintBySlug(slug);

  if (!saint) notFound();

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <SaintProfileTracker saintName={saint.name} pagePath={`/saints/${saint.slug}`} />
        <SaintProfileHero saint={saint} />
        <SaintProfileBody saint={saint} />
      </section>
    </div>
  );
}
