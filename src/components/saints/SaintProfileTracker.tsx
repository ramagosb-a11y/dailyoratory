"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function SaintProfileTracker({ saintName, pagePath }: { saintName: string; pagePath: string }) {
  useEffect(() => {
    trackEvent("saint_profile_open", {
      saint_name: saintName,
      page_path: pagePath,
    });
  }, [pagePath, saintName]);

  return null;
}
