"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function ShareMediaButton() {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        if (typeof window === "undefined") return;
        try {
          await navigator.clipboard.writeText(window.location.href);
        } catch {
          return;
        }
        setCopied(true);
        trackEvent("media_share_copy", { page_path: window.location.pathname });
        window.setTimeout(() => setCopied(false), 2000);
      }}
      className="btn btn-secondary focus-ring"
    >
      {copied ? "Link Copied" : "Copy Link"}
    </button>
  );
}
