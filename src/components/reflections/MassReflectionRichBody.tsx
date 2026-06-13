import type { ReactNode } from "react";

export function MassReflectionRichBody({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph, index) => {
        const key = `${index}-${paragraph.slice(0, 24)}`;
        const trimmed = paragraph.trim();
        const previous = index > 0 ? paragraphs[index - 1]?.trim() ?? "" : "";
        const previousWasHeading = /^(\d+)\.\s+(.+)$/.test(previous);

        if (!trimmed) return null;

        const numberedHeading = trimmed.match(/^(\d+)\.\s+(.+)$/);
        if (numberedHeading) {
          return (
            <section
              key={key}
              className="mt-10 rounded-md border border-gold/50 bg-parchment/85 px-5 py-5 shadow-soft"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-burgundy">
                Section {numberedHeading[1]}
              </p>
              <h2 className="font-display mt-3 text-[2rem] font-semibold leading-tight text-navy sm:text-[2.5rem]">
                {renderInlineFormatting(numberedHeading[2])}
              </h2>
            </section>
          );
        }

        if (trimmed.startsWith(">")) {
          return (
            <blockquote
              key={key}
              className="rounded-r-md border-l-4 border-gold bg-parchment/70 px-5 py-4 font-display text-2xl leading-10 text-navy"
            >
              {renderInlineFormatting(trimmed.replace(/^>\s?/, ""))}
            </blockquote>
          );
        }

        const lines = trimmed
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        if (lines.length > 1 && lines.every((line) => /^[-•*]\s+/.test(line))) {
          return (
            <ul key={key} className="space-y-3 pl-6 text-base leading-8 text-navy marker:text-gold">
              {lines.map((line, lineIndex) => (
                <li key={`${key}-${lineIndex}`}>{renderInlineFormatting(line.replace(/^[-•*]\s+/, ""))}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={key}
            className={
              index === 0
                ? "rounded-md border-l-4 border-gold/70 bg-parchment/55 px-5 py-4 font-display text-[1.45rem] leading-10 text-navy sm:text-[1.7rem]"
                : previousWasHeading
                  ? "text-[1.12rem] leading-9 text-navy"
                  : "text-[1.04rem] leading-8 text-navy/90"
            }
          >
            {renderInlineFormatting(trimmed)}
          </p>
        );
      })}
    </>
  );
}

function renderInlineFormatting(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*([^*]+)\*\*|__([^_]+)__|\*([^*]+)\*|_([^_]+)_)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[2]) {
      nodes.push(
        <strong key={`strong-${match.index}`} className="font-semibold text-navy">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      nodes.push(
        <span
          key={`underline-${match.index}`}
          className="underline decoration-gold decoration-2 underline-offset-4"
        >
          {match[3]}
        </span>,
      );
    } else if (match[4] || match[5]) {
      nodes.push(
        <em key={`em-${match.index}`} className="italic text-burgundy">
          {match[4] ?? match[5]}
        </em>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}
