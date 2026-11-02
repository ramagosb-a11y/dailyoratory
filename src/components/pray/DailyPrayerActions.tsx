"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function DailyPrayerActions({ prayerText }: { prayerText: string }) {
  const [message, setMessage] = useState("");
  async function copyPrayer() {
    try {
      await navigator.clipboard.writeText(prayerText);
      trackEvent("prayer_copy", { page_path: "/pray/today", prayer_type: "daily-liturgical-prayer" });
      setMessage("Prayer copied. Your clipboard contains a separate copy.");
    } catch { setMessage("Copy is unavailable. Select the prayer text and copy it manually."); }
  }
  function printPrayer() {
    try { window.print(); setMessage("Print dialog requested. You can cancel without printing."); }
    catch { setMessage("Printing is unavailable in this browser. You can copy the prayer instead."); }
  }
  return <div className="mt-8"><div className="flex flex-col gap-3 sm:flex-row"><button type="button" onClick={copyPrayer} className="btn liturgical-button focus-ring justify-center">Copy Prayer</button><button type="button" onClick={printPrayer} className="btn btn-secondary focus-ring justify-center">Print Prayer</button></div><p role="status" aria-live="polite" className="mt-3 text-sm leading-7 text-muted">{message}</p></div>;
}
