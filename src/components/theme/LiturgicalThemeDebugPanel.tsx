"use client";

import { useLiturgicalTheme } from "@/components/theme/LiturgicalThemeProvider";

export function LiturgicalThemeDebugPanel() {
  const { theme, day, seasonLabel } = useLiturgicalTheme();

  if (process.env.NODE_ENV === "production") return null;

  return (
    <aside className="fixed bottom-4 right-4 z-50 hidden rounded-md border border-stone bg-ivory/95 p-3 text-xs text-navy shadow-xl xl:block">
      <p className="font-semibold">Liturgical theme: {theme.label}</p>
      <p>Day: {day?.title ?? "Unavailable"}</p>
      <p>Season: {seasonLabel ?? day?.season ?? "Unknown"}</p>
    </aside>
  );
}
