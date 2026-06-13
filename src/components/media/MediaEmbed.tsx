import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  buildGoogleDrivePreviewUrl,
  buildGoogleSlidesEmbedUrl,
  buildYouTubeEmbedUrl,
  buildYouTubePlaylistEmbedUrl,
  extractGoogleDriveFileId,
} from "@/lib/media";
import type { MediaItem } from "@/types/media";
import { GoogleDrivePreview } from "./GoogleDrivePreview";
import { GoogleSlidesEmbed } from "./GoogleSlidesEmbed";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function MediaEmbed({ item }: { item: MediaItem }) {
  const slidesEmbedUrl = item.googleSlidesEmbedUrl ?? buildGoogleSlidesEmbedUrl(item.googleSlidesUrl);
  const driveFileId = item.googleDriveFileId ?? extractGoogleDriveFileId(item.googleDriveFileUrl);
  const drivePreviewUrl = buildGoogleDrivePreviewUrl(driveFileId ?? undefined);

  switch (item.mediaType) {
    case "youtube-video": {
      const embedUrl = buildYouTubeEmbedUrl(item.youtubeVideoId);
      return embedUrl ? <YouTubeEmbed title={item.title} embedUrl={embedUrl} description={item.shortDescription} /> : null;
    }
    case "youtube-playlist": {
      const embedUrl = buildYouTubePlaylistEmbedUrl(item.youtubePlaylistId);
      return embedUrl ? (
        <div className="grid gap-4">
          <YouTubeEmbed title={item.title} embedUrl={embedUrl} description={item.shortDescription} />
          <div className="card-parchment p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">Playlist note</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              YouTube playlist embeds begin on the first video in the playlist player. Use the playlist controls
              to continue through the full collection, or open the playlist directly on YouTube.
            </p>
          </div>
        </div>
      ) : null;
    }
    case "google-slides":
      return <GoogleSlidesEmbed title={item.title} embedUrl={slidesEmbedUrl} slidesUrl={item.googleSlidesUrl} />;
    case "google-drive-file":
    case "pdf":
      return <GoogleDrivePreview title={item.title} previewUrl={drivePreviewUrl} sourceUrl={item.googleDriveFileUrl} />;
    case "google-drive-image":
    case "external-image":
      return item.imageUrl ? (
        <div className="card-parchment overflow-hidden p-4">
          <div className="overflow-hidden rounded-md border border-stone bg-parchment">
            <img src={item.imageUrl} alt={item.altText} className="h-auto w-full object-cover" loading="lazy" />
          </div>
          {item.sourceUrl ? (
            <TrackedLink
              href={item.sourceUrl}
              external
              eventName="media_external_open"
              eventParams={{ page_path: "/media", media_type: item.mediaType }}
              className="btn btn-secondary focus-ring mt-5"
            >
              Open Original Image
            </TrackedLink>
          ) : null}
        </div>
      ) : (
        <div className="card-parchment p-6 text-sm leading-7 text-muted">No public image is available for this media item yet.</div>
      );
    default:
      return (
        <div className="card-parchment p-6 text-sm leading-7 text-muted">
          This media type currently opens through its original source instead of an on-page embed.
        </div>
      );
  }
}
