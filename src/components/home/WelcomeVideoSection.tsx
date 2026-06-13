import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { buildYouTubeEmbedUrl, getMediaItemBySlug } from "@/lib/media";

export async function WelcomeVideoSection() {
  const item = await getMediaItemBySlug("website-intro");
  const embedUrl = buildYouTubeEmbedUrl(item?.youtubeVideoId);

  if (!item || !embedUrl) {
    return null;
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pb-8 lg:px-10">
      <div className="rounded-md border border-stone bg-ivory p-5 shadow-soft sm:p-7">
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">Welcome</p>
            <h2 className="font-display mt-3 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
              Welcome to Daily Oratory
            </h2>
          </div>
          <YouTubeEmbed title={item.title} embedUrl={embedUrl} description={item.shortDescription} />
        </div>
      </div>
    </section>
  );
}
