"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { applyLiturgicalThemeToDocument, getLiturgicalThemeClassName, getLiturgicalThemeStyle } from "@/lib/liturgicalTheme";
import type { LiturgicalThemeContextValue } from "@/types/liturgicalTheme";

const LiturgicalThemeContext = createContext<LiturgicalThemeContextValue | null>(null);

export function LiturgicalThemeProvider({
  value,
  children,
}: {
  value: LiturgicalThemeContextValue;
  children: React.ReactNode;
}) {
  const style = useMemo(() => getLiturgicalThemeStyle(value.theme), [value.theme]);
  const className = useMemo(() => getLiturgicalThemeClassName(value.theme), [value.theme]);

  useEffect(() => {
    applyLiturgicalThemeToDocument(value.theme);
  }, [value.theme]);

  return (
    <LiturgicalThemeContext.Provider value={value}>
      <div data-liturgical-theme={value.theme.id} className={`${className} flex min-h-full flex-col`} style={style}>
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
