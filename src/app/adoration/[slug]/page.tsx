import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdorationNav } from "@/components/adoration/AdorationNav";
import { AdorationQuietRoom } from "@/components/adoration/AdorationQuietRoom";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DailyReturnPrompt } from "@/components/retention/DailyReturnPrompt";
import { StructuredDataScript } from "@/components/seo/StructuredDataScript";
import { createPageMetadata } from "@/lib/metadata";
import { getAdorationStreamBySlug, getLiveAdorationStreams, getPublishedAdorationStreams } from "@/lib/adoration";
import {
  buildAdorationStreamVideoStructuredData,
  buildBreadcrumbList,
  buildWebPageStructuredData,
} from "@/lib/structuredData";
import type { LiveAdorationStreamRecord } from "@/types/adoration";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedAdorationStreams().map((stream) => ({ slug: stream.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stream = getAdorationStreamBySlug(slug);

  if (!stream) return {};

  const description = buildAdorationStreamSeoDescription(stream);

  return createPageMetadata({
    title: stream.title,
    description,
    path: `/adoration/${stream.slug}`,
  });
}

export default async function AdorationChapelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stream = getAdorationStreamBySlug(slug);

  if (!stream) {
    notFound();
  }

  const path = `/adoration/${stream.slug}`;
  const description = buildAdorationStreamSeoDescription(stream);

  return (
    <div className="paper-texture">
      <main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <StructuredDataScript
          data={[
            buildWebPageStructuredData({
              name: stream.title,
              description,
              path,
            }),
            buildAdorationStreamVideoStructuredData(stream, description),
            buildBreadcrumbList([
              { name: "Adoration", path: "/adoration" },
              { name: stream.chapelName, path },
            ]),
          ]}
        />
        <AdorationNav />
        <Breadcrumbs items={[{ label: "Adoration", href: "/adoration" }, { label: stream.chapelName }]} />
        <div className="mt-8">
          <AdorationQuietRoom streams={getLiveAdorationStreams()} initialStreamId={stream.id} />
        </div>
        <div className="mt-10">
          <DailyReturnPrompt
            eyebrow="Adoration rhythm"
            title="Return for another quiet visit."
            summary="Keep a simple Holy Hour rhythm: open the stream, remain with Jesus in silence, and close with thanksgiving."
            primaryHref="/adoration"
            primaryLabel="Find More Streams"
            secondaryHref="/today"
            secondaryLabel="Open Today's Guide"
          />
        </div>
      </main>
    </div>
  );
}

function buildAdorationStreamSeoDescription(stream: LiveAdorationStreamRecord) {
  const location = [stream.location.city, stream.location.region].filter(Boolean).join(", ");
  const verification = stream.verificationStatus === "verified" ? "verified " : "";
  const availability = stream.isTwentyFourSeven ? "24/7 " : "";

  return `Pray with this ${verification}${availability}Eucharistic Adoration livestream from ${stream.parishOrCommunityName} in ${location}, with a quiet Holy Hour guide and source link.`;
}
