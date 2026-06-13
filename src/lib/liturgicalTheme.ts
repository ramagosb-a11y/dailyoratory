import type { CSSProperties } from "react";
import { liturgicalThemes, liturgicalThemesByColor } from "@/data/liturgicalThemes";
import type { LiturgicalDashboardModel } from "@/lib/liturgicalLiving";
import type { LiturgicalTheme, LiturgicalThemeColor, LiturgicalThemeCssVariables } from "@/types/liturgicalTheme";
import type { LiturgicalColor, LiturgicalDayRecord } from "@/types/liturgicalLiving";

const feastWordsForRed = ["martyr", "holy spirit", "pentecost", "passion", "palm sunday", "good friday"];
const departedWordsForBlack = ["all souls", "faithful departed", "requiem", "dead"];

export function getLiturgicalThemeByColor(color?: LiturgicalColor | LiturgicalThemeColor | null): LiturgicalTheme {
  if (!color || color === "blue") return getFallbackLiturgicalTheme();
  return liturgicalThemesByColor[color] ?? getFallbackLiturgicalTheme();
}

export function getFallbackLiturgicalTheme() {
  return liturgicalThemesByColor.default;
}

export function getLiturgicalThemeForToday(todayData?: LiturgicalDashboardModel | LiturgicalDayRecord | null): LiturgicalTheme {
  const day = isDashboardModel(todayData) ? todayData.day : todayData;

  if (!day) return getFallbackLiturgicalTheme();

  const explicitColor = normalizeLiturgicalColor(day.colors);
  if (explicitColor) return getLiturgicalThemeByColor(explicitColor);

  const title = `${day.title} ${day.saintOrFeast ?? ""}`.toLowerCase();

  if (title.includes("gaudete") || title.includes("laetare")) return getLiturgicalThemeByColor("rose");
  if (feastWordsForRed.some((word) => title.includes(word))) return getLiturgicalThemeByColor("red");
  if (departedWordsForBlack.some((word) => title.includes(word))) return getLiturgicalThemeByColor("black");

  switch (day.season) {
    case "Easter":
    case "Christmas":
      return getLiturgicalThemeByColor("white");
    case "Ordinary Time":
      return getLiturgicalThemeByColor("green");
    case "Advent":
    case "Lent":
      return getLiturgicalThemeByColor("violet");
    default:
      return getFallbackLiturgicalTheme();
  }
}

export function applyLiturgicalThemeToDocument(theme: LiturgicalTheme) {
  if (typeof document === "undefined") return;

  document.body.dataset.liturgicalTheme = theme.id;
  for (const [name, value] of Object.entries(getLiturgicalThemeCssVariables(theme))) {
    document.body.style.setProperty(name, value);
  }
}

export function getLiturgicalThemeClassName(theme: LiturgicalTheme) {
  return `liturgical-theme-${theme.id}`;
}

export function getLiturgicalBadgeLabel(
  theme: LiturgicalTheme,
  options?: {
    seasonLabel?: string;
    day?: LiturgicalDayRecord;
  },
) {
  const seasonLabel = options?.seasonLabel ?? options?.day?.season;

  if (theme.liturgicalColor === "default") return "Daily Oratory Gold";
  if (!seasonLabel) return theme.label;

  if (theme.liturgicalColor === "white" && (seasonLabel === "Easter" || seasonLabel === "Christmas")) {
    return `${seasonLabel} White / Gold`;
  }

  if (theme.liturgicalColor === "green" && seasonLabel === "Ordinary Time") {
    return "Ordinary Time Green";
  }

  if (theme.liturgicalColor === "violet" && (seasonLabel === "Advent" || seasonLabel === "Lent")) {
    return `${seasonLabel} Violet`;
  }

  return `${seasonLabel} ${theme.label}`.trim();
}

export function isHighContrastTheme(theme: LiturgicalTheme) {
  return theme.foregroundOnPrimary === "#FFFFFF";
}

export function getThemeAwareButtonClasses() {
  return {
    solid: "btn btn-liturgical focus-ring",
    outline: "btn btn-liturgical-outline focus-ring",
    soft: "btn btn-liturgical-soft focus-ring",
  };
}

export function getThemeAwareCardClasses(options?: { parchment?: boolean }) {
  return `${options?.parchment ? "card-parchment" : "card"} liturgical-card-accent`;
}

export function getLiturgicalThemeCssVariables(theme: LiturgicalTheme): LiturgicalThemeCssVariables {
  return {
    "--liturgical-primary": theme.primary,
    "--liturgical-primary-dark": theme.primaryDark,
    "--liturgical-primary-soft": theme.primarySoft,
    "--liturgical-primary-muted": theme.primaryMuted,
    "--liturgical-foreground": theme.foregroundOnPrimary,
    "--liturgical-border": theme.border,
    "--liturgical-glow": theme.glow,
    "--liturgical-gradient-from": theme.gradientFrom,
    "--liturgical-gradient-to": theme.gradientTo,
    "--liturgical-badge-bg": theme.primarySoft,
    "--liturgical-badge-text": theme.primaryDark,
    "--liturgical-button-bg": theme.primary,
    "--liturgical-button-text": theme.foregroundOnPrimary,
    "--liturgical-ring": theme.glow,
  };
}

export function getLiturgicalThemeStyle(theme: LiturgicalTheme): CSSProperties {
  return getLiturgicalThemeCssVariables(theme) as CSSProperties;
}

function normalizeLiturgicalColor(colors?: LiturgicalColor[]) {
  if (!colors?.length) return undefined;

  const prioritized = colors.find((color) => color !== "gold" && color !== "blue") ?? colors[0];
  if (!prioritized || prioritized === "blue") return undefined;
  return prioritized;
}

function isDashboardModel(value?: LiturgicalDashboardModel | LiturgicalDayRecord | null): value is LiturgicalDashboardModel {
  return Boolean(value && "day" in value);
}

export const availableLiturgicalThemes = liturgicalThemes;
