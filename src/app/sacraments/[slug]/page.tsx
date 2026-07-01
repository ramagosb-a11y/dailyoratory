import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SacramentCard } from "@/components/sacraments/SacramentCard";
import { SacramentCompanionDetail } from "@/components/sacraments/SacramentCompanionDetail";
import { SacramentsNav } from "@/components/sacraments/SacramentsNav";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import {
  getPublishedSacramentCompanions,
  getRelatedSacramentCompanions,
  getSacramentCompanionBySlug,
} from "@/lib/sacraments";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedSacramentCompanions().map((companion) => ({ slug: companion.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const companion = getSacramentCompanionBySlug(slug);

  if (!companion) return {};

  return createPageMetadata({
    title: companion.title,
    description: companion.description,
    path: companion.route,
  });
}

export default async function SacramentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const companion = getSacramentCompanionBySlug(slug);

  if (!companion) {
    notFound();
  }

  const related = getRelatedSacramentCompanions(companion, 3);

  return (
    <div className="paper-texture">
      <section className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <SacramentsNav />
        <Breadcrumbs items={[{ label: "Sacraments", href: "/sacraments" }, { label: companion.title }]} />
        <div className="mt-8">
          <SacramentCompanionDetail companion={companion} />
        </div>

        {related.length ? (
          <section className="mt-14">
            <SectionHeader
              eyebrow="Related"
              title="Other preparation companions"
              summary="Continue with nearby sacramental formation when it helps your parish conversation."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((item) => (
                <SacramentCard key={item.slug} companion={item} />
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </div>
  );
}
