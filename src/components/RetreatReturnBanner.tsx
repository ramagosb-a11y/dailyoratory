"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RETREAT_HANDOFF_KEY } from "@/lib/fastingRetreatState";
import s from "./RetreatReturnBanner.module.css";
const paths = [
  "/rosary/visual-meditation",
  "/adoration/companion",
  "/confession/examination-companion",
  "/prayers/litanies/",
  "/prayers/angelus",
  "/divine-mercy/chaplet",
];
type ReturnPlace = { step: string; chapter: string; at: number };
function valid(value: unknown): value is ReturnPlace {
  if (!value || typeof value !== "object") return false;
  const p = value as ReturnPlace;
  return (
    typeof p.step === "string" &&
    /^(welcome|preparation|day-[123]|closing)-[a-z-]+$/.test(p.step) &&
    ["welcome", "preparation", "day-1", "day-2", "day-3", "closing"].includes(
      p.chapter,
    ) &&
    p.step.startsWith(p.chapter + "-") &&
    typeof p.at === "number" &&
    Date.now() - p.at < 6 * 60 * 60 * 1000
  );
}
export default function RetreatReturnBanner() {
  const pathname = usePathname();
  const [place, setPlace] = useState<ReturnPlace | null>(null);
  const allowed = paths.some(
    (p) => pathname === p || (p.endsWith("/") && pathname.startsWith(p)),
  );
  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      if (!allowed) {
        setPlace(null);
        return;
      }
      try {
        const query = new URLSearchParams(location.search).get("retreat");
        const chapter = query?.match(
          /^(welcome|preparation|day-[123]|closing)-/,
        )?.[1];
        const candidate =
          query && chapter
            ? { step: query, chapter, at: Date.now() }
            : JSON.parse(sessionStorage.getItem(RETREAT_HANDOFF_KEY) || "null");
        if (valid(candidate)) {
          setPlace(candidate);
          try {
            sessionStorage.setItem(
              RETREAT_HANDOFF_KEY,
              JSON.stringify(candidate),
            );
          } catch {}
        } else setPlace(null);
      } catch {
        setPlace(null);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [pathname, allowed]);
  if (!allowed || !place) return null;
  const label = place.chapter
    .replace("day-", "Day ")
    .replace(/^preparation$/, "Preparation")
    .replace(/^welcome$/, "Welcome")
    .replace(/^closing$/, "Closing");
  return (
    <aside className={s.banner} aria-label="Return to fasting retreat">
      <a
        href={
          "/fasting-retreat#" +
          new URLSearchParams({ day: place.chapter, step: place.step })
        }
      >
        ← Return to {label} retreat <span>Your place is waiting</span>
      </a>
      <button
        aria-label="Dismiss retreat return link"
        onClick={() => {
          setPlace(null);
          try {
            sessionStorage.removeItem(RETREAT_HANDOFF_KEY);
            const url = new URL(location.href);
            url.searchParams.delete("retreat");
            history.replaceState(null, "", url);
          } catch {}
        }}
      >
        ×
      </button>
    </aside>
  );
}


