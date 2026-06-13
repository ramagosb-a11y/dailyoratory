import type { ElementType, ReactNode } from "react";

export function LiturgicalThemeAccent({
  children,
  as: Tag = "div",
  className = "",
  variant = "soft",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: "soft" | "line" | "badge";
}) {
  const variantClassName =
    variant === "line"
      ? "liturgical-accent-border border-l-2 pl-4"
      : variant === "badge"
        ? "liturgical-badge inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
        : "liturgical-accent-soft rounded-md";

  return <Tag className={`${variantClassName} ${className}`.trim()}>{children}</Tag>;
}
