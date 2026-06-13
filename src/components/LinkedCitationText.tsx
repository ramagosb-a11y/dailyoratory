import { linkCitationText } from "@/lib/citationLinks";

type LinkedCitationTextProps = {
  text: string;
  className?: string;
};

export function LinkedCitationText({ text, className }: LinkedCitationTextProps) {
  return <span className={className}>{linkCitationText(text)}</span>;
}
