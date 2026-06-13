import type { LiturgicalColor, LiturgicalDayRecord } from "@/types/liturgicalLiving";

export type LiturgicalThemeColor = Exclude<LiturgicalColor, "blue"> | "default";

export type LiturgicalTheme = {
  id: string;
  name: string;
  liturgicalColor: LiturgicalThemeColor;
  label: string;
  primary: string;
  primaryDark: string;
  primarySoft: string;
  primaryMuted: string;
  foregroundOnPrimary: string;
  border: string;
  glow: string;
  gradientFrom: string;
  gradientTo: string;
  buttonClass: string;
  badgeClass: string;
  description: string;
  useCases: string[];
  sortOrder: number;
};

export type LiturgicalThemeCssVariables = {
  "--liturgical-primary": string;
  "--liturgical-primary-dark": string;
  "--liturgical-primary-soft": string;
  "--liturgical-primary-muted": string;
  "--liturgical-foreground": string;
  "--liturgical-border": string;
  "--liturgical-glow": string;
  "--liturgical-gradient-from": string;
  "--liturgical-gradient-to": string;
  "--liturgical-badge-bg": string;
  "--liturgical-badge-text": string;
  "--liturgical-button-bg": string;
  "--liturgical-button-text": string;
  "--liturgical-ring": string;
};

export type LiturgicalThemeContextValue = {
  theme: LiturgicalTheme;
  day?: LiturgicalDayRecord;
  seasonLabel?: string;
};
