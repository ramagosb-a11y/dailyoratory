import type { Metadata } from "next";
import { Suspense } from "react";
import Script from "next/script";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { AnalyticsPageTracker } from "@/components/analytics/AnalyticsPageTracker";
import { LiturgicalThemeProvider } from "@/components/theme/LiturgicalThemeProvider";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { brand } from "@/config/brand";
import { getLiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import { getLiturgicalThemeForToday } from "@/lib/liturgicalTheme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const googleAnalyticsId = "G-FPKXBSX0QY";

export const metadata: Metadata = {
  metadataBase: new URL(brand.canonicalUrl),
  applicationName: brand.platformName,
  title: {
    default: brand.defaultSeoTitle,
    template: `%s | ${brand.platformName}`,
  },
  description: brand.defaultSeoDescription,
  alternates: {
    canonical: brand.canonicalUrl,
  },
  authors: [{ name: brand.platformName, url: brand.canonicalUrl }],
  creator: brand.platformName,
  publisher: brand.platformName,
  category: "Catholic prayer and formation",
  openGraph: {
    title: brand.ogTitle,
    description: brand.ogDescription,
    url: brand.canonicalUrl,
    siteName: brand.platformName,
    images: [
      {
        url: brand.socialImage,
        width: 1200,
        height: 630,
        alt: `${brand.platformName}: ${brand.tagline}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.ogTitle,
    description: brand.ogDescription,
    images: [brand.socialImage],
  },
  robots: {
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
  verification: process.env.NEXT_PUBLIC_BING_VERIFICATION
    ? {
        other: {
          "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
        },
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dashboardModel = getLiturgicalDashboardModel();
  const theme = getLiturgicalThemeForToday(dashboardModel);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            var campaignParams = new URLSearchParams(window.location.search);
            var safeCampaignValue = function(value, allowedValues) {
              var normalized = value && value.toLowerCase();
              return normalized && value.length <= 40 && /^[a-z0-9][a-z0-9._-]*$/i.test(value) && allowedValues.indexOf(normalized) !== -1
                ? normalized
                : undefined;
            };
            var campaignSource = safeCampaignValue(campaignParams.get('utm_source'),
              ['google', 'bing', 'yahoo', 'duckduckgo', 'facebook', 'instagram', 'youtube', 'tiktok', 'x', 'newsletter', 'parish', 'email', 'referral', 'qr', 'direct']);
            var campaignMedium = safeCampaignValue(campaignParams.get('utm_medium'),
              ['organic', 'cpc', 'paid', 'social', 'email', 'newsletter', 'referral', 'qr', 'none', 'affiliate', 'display']);
            var safePageReferrer = '';
            try {
              var referrerUrl = new URL(document.referrer);
              safePageReferrer = referrerUrl.origin + referrerUrl.pathname;
            } catch {}
            gtag('config', '${googleAnalyticsId}', Object.assign({
              send_page_view: false,
              page_location: window.location.origin + window.location.pathname,
              page_referrer: safePageReferrer
            },
              campaignSource ? { campaign_source: campaignSource } : {},
              campaignMedium ? { campaign_medium: campaignMedium } : {}
            ));
          `}
        </Script>
        <a
          href="#main-content"
          className="focus-ring sr-only z-50 rounded-md bg-ivory px-4 py-2 text-sm font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <LiturgicalThemeProvider
          value={{
            theme,
            day: dashboardModel.day,
            seasonLabel: dashboardModel.season.title,
          }}
        >
          <Suspense fallback={null}>
            <AnalyticsPageTracker />
          </Suspense>
          <SiteChrome>{children}</SiteChrome>
        </LiturgicalThemeProvider>
      </body>
    </html>
  );
}
