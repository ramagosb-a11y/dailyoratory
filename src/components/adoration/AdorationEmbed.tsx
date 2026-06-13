import { getSafeAdorationEmbed } from "@/lib/adoration";
import type { LiveAdorationStreamRecord } from "@/types/adoration";

export function AdorationEmbed({ stream, quietMode = false }: { stream: LiveAdorationStreamRecord; quietMode?: boolean }) {
  const safeEmbed = getSafeAdorationEmbed(stream);

  if (!safeEmbed) {
    return (
      <div className="flex aspect-video items-center justify-center rounded-md border border-stone bg-parchment p-6 text-center">
        <div>
          <p className="text-xs font-bold uppercase text-burgundy">Stream unavailable</p>
          <p className="mt-2 text-sm leading-7 text-muted">This stream URL needs editor review before it can be embedded.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-md border ${quietMode ? "border-gold bg-navy" : "border-stone bg-navy"}`}>
      <iframe
        title={`${stream.chapelName} Adoration stream`}
        src={safeEmbed.embedUrl}
        className="aspect-video w-full"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allow="fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
