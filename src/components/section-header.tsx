import { PageEyebrow, SectionSubtitle, SectionTitle } from "@/components/ui/Typography";

export function SectionHeader({
  eyebrow,
  title,
  summary,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  summary?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div>
      {eyebrow ? <PageEyebrow>{eyebrow}</PageEyebrow> : null}
      <SectionTitle as={as}>{title}</SectionTitle>
      {summary ? <SectionSubtitle className="max-w-3xl">{summary}</SectionSubtitle> : null}
    </div>
  );
}
