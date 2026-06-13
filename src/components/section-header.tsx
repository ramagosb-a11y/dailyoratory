import { PageEyebrow, SectionSubtitle, SectionTitle } from "@/components/ui/Typography";

export function SectionHeader({
  eyebrow,
  title,
  summary,
}: {
  eyebrow?: string;
  title: string;
  summary?: string;
}) {
  return (
    <div>
      {eyebrow ? <PageEyebrow>{eyebrow}</PageEyebrow> : null}
      <SectionTitle>{title}</SectionTitle>
      {summary ? <SectionSubtitle className="max-w-3xl">{summary}</SectionSubtitle> : null}
    </div>
  );
}
