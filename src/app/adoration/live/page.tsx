import type { Metadata } from "next";
import Link from "next/link";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationStreamDirectory } from "@/components/adoration/AdorationStreamDirectory";
import { SectionHeader } from "@/components/section-header";
import { createPageMetadata } from "@/lib/metadata";
import { getAdorationLocationLabel, getAdorationStreamHref, getFeaturedAdorationStream, getLiveAdorationStreams } from "@/lib/adoration";

export const metadata: Metadata = createPageMetadata({
  title: "Live Adoration Streams | Perpetual Eucharistic Adoration",
  description:
    "Browse live and 24/7 perpetual Eucharistic Adoration streams reviewed for Daily Oratory, including verified chapels for quiet prayer.",
  path: "/adoration/live",
});

export default function LiveAdorationPage() {
  const featuredStream = getFeaturedAdorationStream();

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <AdorationNav />
        <SectionHeader
          eyebrow="Live Adoration"
          title="Enter a chapel that is available now."
          summary="Filter by language, country, verified status, and 24/7 availability. Streams open without autoplay audio and can help you find perpetual Adoration more quickly."
        />
        {featuredStream ? (
          <section className="card-parchment mt-8 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Featured chapel</p>
            <h2 className="font-display mt-2 text-3xl font-semibold text-navy">{featuredStream.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              If you are looking for perpetual Adoration, including common searches around Melbourne Adoration, start here and then compare other live chapels below.
            </p>
            <p className="mt-2 text-sm font-semibold text-navy">{getAdorationLocationLabel(featuredStream)}</p>
            <div className="mt-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href={getAdorationStreamHref(featuredStream)} className="btn liturgical-button focus-ring justify-center">
                  Open Featured Chapel
                </Link>
                <Link href="/adoration/melbourne" className="btn btn-secondary focus-ring justify-center">
                  Melbourne Adoration Guide
                </Link>
              </div>
            </div>
          </section>
        ) : null}
        <div className="mt-8">
          <AdorationStreamDirectory initialStreams={getLiveAdorationStreams()} liveOnly />
        </div>
      </main>
    </div>
  );
}
