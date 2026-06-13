import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { absoluteUrl, normalizeInternalHref } from "@/lib/url";

type CreatePageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = brand.socialImage,
  imageAlt = `${brand.platformName}: ${brand.tagline}`,
  noIndex = false,
  keywords,
}: CreatePageMetadataInput = {}): Metadata {
  const pageTitle = title ? stripTrailingBrandSegments(title) : brand.defaultSeoTitle;
  const socialTitle = title ? withBrandSuffix(pageTitle) : brand.ogTitle;
  const pageDescription = description ?? brand.defaultSeoDescription;
  const url = getCanonicalUrl(path);
  const imageUrl = getAbsoluteUrl(image);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: socialTitle,
      description: pageDescription,
      url,
      siteName: brand.platformName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: pageDescription,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function getCanonicalUrl(path = "") {
  return absoluteUrl(normalizePath(path));
}

export function getAbsoluteUrl(pathOrUrl: string) {
  return absoluteUrl(pathOrUrl);
}

function stripTrailingBrandSegments(value: string) {
  let title = value.trim().replace(/\s+/g, " ");
  const suffix = `| ${brand.platformName}`;

  while (title.endsWith(suffix)) {
    title = title.slice(0, -suffix.length).trim();
  }

  return title || brand.platformName;
}

function withBrandSuffix(value: string) {
  const title = stripTrailingBrandSegments(value);
  if (title === brand.platformName || title.startsWith(`${brand.platformName} |`)) {
    return title;
  }

  return `${title} | ${brand.platformName}`;
}

function normalizePath(path: string) {
  return normalizeInternalHref(path || "/");
}
