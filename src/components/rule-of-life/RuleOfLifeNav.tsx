import { SectionJumpNav } from "@/components/SectionJumpNav";

export const ruleOfLifeLinks = [
  { label: "Overview", href: "/rule-of-life" },
  { label: "Builder", href: "/rule-of-life/builder" },
  { label: "My rule", href: "/rule-of-life/my-rule" },
  { label: "Templates", href: "/rule-of-life/templates" },
  { label: "Daily Examen", href: "/daily-examen" },
  { label: "Print", href: "/rule-of-life/print" },
] as const;

export function RuleOfLifeNav() {
  return <SectionJumpNav ariaLabel="Rule of life navigation" mobileTitle="Open the rule of life outline" items={ruleOfLifeLinks} />;
}
