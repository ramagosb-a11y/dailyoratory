"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  applyLiturgicalThemeToDocument,
  getLiturgicalThemeClassName,
  getLiturgicalThemeForToday,
  getLiturgicalThemeStyle,
} from "@/lib/liturgicalTheme";
import { getStaticLiturgicalDashboardModel } from "@/lib/staticDailyContent";
import type { LiturgicalThemeContextValue } from "@/types/liturgicalTheme";

const LiturgicalThemeContext = createContext<LiturgicalThemeContextValue | null>(null);

export function LiturgicalThemeProvider({
  value,
  children,
}: {
  value: LiturgicalThemeContextValue;
  children: React.ReactNode;
}) {
  const [activeValue, setActiveValue] = useState(value);
  const style = useMemo(() => getLiturgicalThemeStyle(activeValue.theme), [activeValue.theme]);
  const className = useMemo(() => getLiturgicalThemeClassName(activeValue.theme), [activeValue.theme]);

  useEffect(() => {
    function refreshTheme() {
      const model = getStaticLiturgicalDashboardModel();
      setActiveValue({
        theme: getLiturgicalThemeForToday(model.day),
        day: model.day,
        seasonLabel: model.season.title,
      });
    }

    refreshTheme();
    const intervalId = window.setInterval(refreshTheme, 15 * 60 * 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    applyLiturgicalThemeToDocument(activeValue.theme);
  }, [activeValue.theme]);

  return (
    <LiturgicalThemeContext.Provider value={activeValue}>
      <div data-liturgical-theme={activeValue.theme.id} className={`${className} flex min-h-full flex-col`} style={style}>
        {children}
      </div>
    </LiturgicalThemeContext.Provider>
  );
}

export function useLiturgicalTheme() {
  const context = useContext(LiturgicalThemeContext);

  if (!context) {
    throw new Error("useLiturgicalTheme must be used within LiturgicalThemeProvider");
  }

  return context;
}
