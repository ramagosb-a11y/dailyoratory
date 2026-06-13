import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { SacramentDetailPageView } from "@/components/sacraments/SacramentDetailPageView";
import { createPageMetadata } from "@/lib/metadata";
import { getSacramentBySlug, getSacramentDetailMetadata } from "@/lib/sacraments";

export const metadata: Metadata = createPageMetadata(getSacramentDetailMetadata(getSacramentBySlug("confirmation")!));

const confirmationPlaylistUrl = "https://www.youtube.com/playlist?list=PL8juc41KfKjBCW59KRXU-tlHPUFa0ooLl";
const confirmationPlaylistEmbedUrl =
  "https://www.youtube-nocookie.com/embed/videoseries?list=PL8juc41KfKjBCW59KRXU-tlHPUFa0ooLl&rel=0&modestbranding=1";

export default function ConfirmationPage() {
  const sacrament = getSacramentBySlug("confirmation");
  if (!sacrament) notFound();

  const extraSection = (
    <>
      <section className="grid gap-5 lg:grid-cols-2">
        <article className="card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Gifts of the Holy Spirit</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Confirmation strengthens baptismal grace and disposes the faithful to live with wisdom, courage,
            reverence, understanding, counsel, knowledge, and holy fear of the Lord.
          </p>
        </article>
        <article className="card-parchment p-6">
          <h2 className="font-display text-3xl font-semibold text-navy">Sponsor and saint guidance</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            A sponsor accompanies the candidate by prayer and example. Many parishes also encourage saint study
            so the candidate can see mature Christian witness more clearly.
          </p>
        </article>
      </section>

      <section className="card-parchment p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Watch and prepare</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl font-semibold text-navy">Confirmation playlist</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              Watch Daily Oratory videos on Confirmation to deepen your understanding of the Holy Spirit,
              sacramental grace, Christian witness, and life in the Church.
            </p>
          </div>
          <TrackedLink
            href={confirmationPlaylistUrl}
            external
            eventName="media_external_open"
            eventParams={{ page_path: "/sacraments/confirmation", media_type: "youtube-playlist" }}
            className="btn btn-secondary daily-button-readable min-h-12 justify-center sm:w-auto"
          >
            Open playlist on YouTube
          </TrackedLink>
        </div>
        <div className="mt-6">
          <YouTubeEmbed
            title="Daily Oratory Confirmation YouTube playlist"
            embedUrl={confirmationPlaylistEmbedUrl}
            description="Use this playlist for personal preparation, sponsor conversations, parish formation, or a quiet review of the sacrament after receiving Confirmation."
          />
        </div>
      </section>
    </>
  );

  return <SacramentDetailPageView sacrament={sacrament} ctaLabel="Open Confirmation Companion" extraSection={extraSection} />;
}
