import { getLiturgicalBadgeLabel } from "@/lib/liturgicalTheme";
import type { LiturgicalTheme } from "@/types/liturgicalTheme";
import type { LiturgicalDayRecord } from "@/types/liturgicalLiving";

export function LiturgicalThemeBadge({
  theme,
  seasonLabel,
  day,
  className = "",
}: {
  theme: LiturgicalTheme;
  seasonLabel?: string;
  day?: LiturgicalDayRecord;
  className?: string;
}) {
  return (
    <span
      className={`liturgical-badge inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${className}`.trim()}
    >
      {getLiturgicalBadgeLabel(theme, { seasonLabel, day })}
    </span>
  );
}
