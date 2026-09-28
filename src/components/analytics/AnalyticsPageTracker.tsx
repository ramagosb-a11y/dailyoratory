"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPageView } from "@/lib/analytics";
import { getAnalyticsPagePath } from "@/lib/analyticsPrivacy";

export function AnalyticsPageTracker() {
  const pathname = usePathname();
  const previousPathRef = useRef<string | null>(null);

  useEffect(() => {
    const pagePath = getAnalyticsPagePath(pathname);
    const previousPath = previousPathRef.current;
    if (previousPath === pagePath) return;

    const referrer = previousPath
      ? `${window.location.origin}${previousPath}`
      : document.referrer;

    trackPageView(pagePath, document.title, referrer);
    previousPathRef.current = pagePath;
  }, [pathname]);

  return null;
}
