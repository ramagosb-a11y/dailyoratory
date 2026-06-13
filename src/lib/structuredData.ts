import { brand } from "@/config/brand";
import { getAbsoluteUrl } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/url";
import type { LiveAdorationStreamRecord } from "@/types/adoration";

export type StructuredDataBreadcrumbItem = {
  name: string;
  path?: string;
};

type WebPageStructuredDataInput = {
  name: string;
  description: string;
  path: string;
};

type ArticleStructuredDataInput = {
  headline: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildBreadcrumbList(items: StructuredDataBreadcrumbItem[]) {
  const listItems = items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    ...(item.path ? { item: getAbsoluteUrl(item.path) } : {}),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };
}

export function buildWebPageStructuredData({
  name,
  description,
  path,
}: WebPageStructuredDataInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: getAbsoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: brand.platformName,
      url: absoluteUrl("/"),
    },
    inLanguage: "en-US",
  };
}

export function buildArticleStructuredData({
  headline,
  description,
  path,
  keywords,
}: ArticleStructuredDataInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: getAbsoluteUrl(path),
    author: {
      "@type": "Organization",
      name: brand.platformName,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: brand.platformName,
      url: absoluteUrl("/"),
    },
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    inLanguage: "en-US",
  };
}

export function buildAdorationStreamVideoStructuredData(
  stream: LiveAdorationStreamRecord,
  description = stream.description,
) {
  const videoId = extractYouTubeVideoId(stream.embedUrl) ?? extractYouTubeVideoId(stream.streamUrl);
  const path = `/adoration/${stream.slug}`;
  const isLiveBroadcast = stream.streamStatus === "live-now" || stream.streamStatus === "available-24-7";

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: stream.title,
    description,
    thumbnailUrl: [videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : getAbsoluteUrl(brand.socialImage)],
    uploadDate: stream.createdAt,
    dateModified: stream.updatedAt,
    embedUrl: stream.embedUrl,
    contentUrl: stream.streamUrl,
    url: getAbsoluteUrl(path),
    isFamilyFriendly: true,
    inLanguage: getLanguageCode(stream.language),
    about: [
      { "@type": "Thing", name: "Eucharistic Adoration" },
      { "@type": "Thing", name: "Catholic prayer" },
    ],
    publisher: {
      "@type": "Organization",
      name: brand.platformName,
      url: absoluteUrl("/"),
    },
    spatialCoverage: {
      "@type": "Place",
      name: getAdorationLocationName(stream),
    },
    ...(isLiveBroadcast
      ? {
          publication: {
            "@type": "BroadcastEvent",
            isLiveBroadcast: true,
            startDate: stream.createdAt,
          },
        }
      : {}),
  };
}

function getLanguageCode(language: LiveAdorationStreamRecord["language"]) {
  const codes: Record<LiveAdorationStreamRecord["language"], string> = {
    English: "en",
    Spanish: "es",
    Latin: "la",
    French: "fr",
    Polish: "pl",
    Multilingual: "mul",
  };

  return codes[language];
}

function getAdorationLocationName(stream: LiveAdorationStreamRecord) {
  return [stream.location.city, stream.location.region, stream.location.country].filter(Boolean).join(", ");
}

function extractYouTubeVideoId(value: string) {
  if (/^[A-Za-z0-9_-]{6,64}$/.test(value)) return value;

  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase().replace(/^www\./, "");
    if (hostname === "youtu.be") return sanitizeYouTubeId(url.pathname.split("/").filter(Boolean)[0]);

    if (hostname === "youtube.com" || hostname === "m.youtube.com" || hostname === "youtube-nocookie.com") {
      if (url.pathname === "/watch") return sanitizeYouTubeId(url.searchParams.get("v") ?? "");

      const parts = url.pathname.split("/").filter(Boolean);
      const embedIndex = parts.findIndex((part) => part === "embed" || part === "live" || part === "shorts");
      return sanitizeYouTubeId(embedIndex >= 0 ? parts[embedIndex + 1] : "");
    }

    return null;
  } catch {
    return null;
  }
}

function sanitizeYouTubeId(value: string | undefined) {
  if (!value) return null;
  const id = value.trim();
  return /^[A-Za-z0-9_-]{6,64}$/.test(id) ? id : null;
}
