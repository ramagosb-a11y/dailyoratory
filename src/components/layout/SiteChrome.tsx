"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { LiturgicalPageTheme } from "@/components/LiturgicalPageTheme";

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
  const hideSiteChrome = immersivePrayerRoute || standaloneCompanionRoute;

  return (
    <>
      {!hideSiteChrome && <Header />}
      <main
        id="main-content"
        className={immersivePrayerRoute ? "flex-1 way-of-cross-page-shell" : "flex-1"}
      >
        <LiturgicalPageTheme>{children}</LiturgicalPageTheme>
      </main>
    </>
  );
}
