import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { getPrayerGuidePage, prayerGuidePages } from "@/data/prayerGuidePages";
import { createPageMetadata } from "@/lib/metadata";
import { buildArticleStructuredData, buildBreadcrumbList, buildWebPageStructuredData } from "@/lib/structuredData";

export const dynamicParams = false;

export function generateStaticParams() {
  return prayerGuidePages.map((guide) => ({ slug: guide.slug }));
}

type PrayerGuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PrayerGuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPrayerGuidePage(slug);

  if (!guide) {
    return {};
  }

  const pageMetadata = createPageMetadata({
    title: guide.metadataTitle,
    description: guide.description,
    path: `/prayers/${guide.slug}`,
    keywords: guide.keywords,
  });

  return {
    ...pageMetadata,
    openGraph: {
      ...pageMetadata.openGraph,
      title: guide.title,
      description: guide.description,
    },
    twitter: {
      ...pageMetadata.twitter,
      title: guide.title,
      description: guide.description,
    },
  };
}

export default async function PrayerGuideDynamicPage({ params }: PrayerGuidePageProps) {
  const { slug } = await params;
  const guide = getPrayerGuidePage(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: guide.title,
              description: guide.description,
              path: `/prayers/${guide.slug}`,
            }),
            buildArticleStructuredData({
              headline: guide.title,
              description: guide.description,
              path: `/prayers/${guide.slug}`,
              keywords: guide.keywords,
            }),
            buildBreadcrumbList([
              { name: "Pray", path: "/pray" },
              { name: "Prayer Library", path: "/prayers" },
              { name: guide.title, path: `/prayers/${guide.slug}` },
            ]),
          ]}
        />

        <Breadcrumbs items={[{ label: "Pray", href: "/pray" }, { label: "Prayer Library", href: "/prayers" }, { label: guide.title }]} />

        <header className="liturgical-page-hero mt-8 card-parchment p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{guide.eyebrow}</p>
          <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">{guide.title}</h1>
          <p className="daily-readable-muted mt-5 max-w-4xl text-base leading-8 text-muted">{guide.subtitle}</p>
          <p className="daily-readable mt-4 max-w-4xl text-base leading-8 text-muted">{guide.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {guide.cta ? (
              <Link href={guide.cta.href} className="btn btn-primary focus-ring daily-button-readable min-h-12 justify-center">
                {guide.cta.label}
              </Link>
            ) : null}
            <Link href="/prayers" className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
              Prayer Library
            </Link>
          </div>
        </header>

        <div className="mt-10 grid gap-10">
          {guide.sections.map((section) => (
            <section key={`${guide.slug}-${section.title}`} className="card-parchment p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">{section.eyebrow}</p>
              <h2 className="font-display mt-3 text-4xl font-semibold text-navy">{section.title}</h2>

              {section.paragraphs?.length ? (
                <div className="daily-readable-muted mt-5 grid gap-4 text-base leading-8 text-muted">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.bullets?.length ? (
                <ul className="daily-readable mt-5 grid gap-3 text-base leading-8 text-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {section.cards?.length ? (
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {section.cards.map((card) => (
                    <article key={card.title} className="rounded-3xl border border-stone bg-ivory/80 p-5">
                      {card.meta ? <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{card.meta}</p> : null}
                      <h3 className="font-display mt-3 text-2xl font-semibold text-navy">{card.title}</h3>
                      <p className="daily-card-readable mt-3 text-sm leading-7 text-muted">{card.summary}</p>
                      {card.href ? (
                        <div className="mt-5">
                          <Link href={card.href} className="btn btn-secondary focus-ring daily-button-readable min-h-12 justify-center">
                            Open Guide
                          </Link>
                        </div>
                      ) : null}
                    </article>
                  ))}
                </div>
              ) : null}
            </section>
          ))}

          <section className="card-parchment p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Related links</p>
            <h2 className="font-display mt-3 text-4xl font-semibold text-navy">Continue in Prayer</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {guide.relatedLinks.map((link) => (
                <Link
                  key={`${guide.slug}-${link.href}`}
                  href={link.href}
                  className="focus-ring rounded-3xl border border-stone bg-ivory/80 px-5 py-4 text-base font-semibold text-navy transition hover:border-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
