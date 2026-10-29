"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { LiturgicalPageTheme } from "@/components/LiturgicalPageTheme";
import RetreatReturnBanner from "@/components/RetreatReturnBanner";

function isImmersivePrayerRoute(pathname: string | null) {
  const route = pathname?.replace(/\/+$/, "");
  return route === "/way-of-cross" || route === "/holy-week";
}

function isStandaloneCompanionRoute(pathname: string | null) {
  return pathname?.replace(/\/+$/, "") === "/confession/examination-companion";
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const immersivePrayerRoute = isImmersivePrayerRoute(pathname);
  const standaloneCompanionRoute = isStandaloneCompanionRoute(pathname);
  const retreatRoute = pathname?.replace(/\/+$/, "") === "/fasting-retreat";
  const strongholdsRoute = pathname === "/strongholds" || pathname?.startsWith("/strongholds/");
  const armorRoute = pathname?.replace(/\/+$/, "") === "/armor-of-god";
  const hideSiteChrome = immersivePrayerRoute || standaloneCompanionRoute || retreatRoute || strongholdsRoute || armorRoute;

  return (
    <>
      <RetreatReturnBanner />
      {!hideSiteChrome ? (
        <Suspense
          fallback={(
            <div
              aria-hidden="true"
              className="site-header h-20 border-b border-stone bg-ivory"
            />
          )}
        >
          <Header />
        </Suspense>
      ) : null}
      <main
        id="main-content"
        className={immersivePrayerRoute ? "flex-1 way-of-cross-page-shell" : "flex-1"}
      >
        {retreatRoute || strongholdsRoute || armorRoute ? children : <LiturgicalPageTheme>{children}</LiturgicalPageTheme>}
      </main>
    </>
  );
}
