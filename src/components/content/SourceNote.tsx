type SourceNoteProps = {
  label?: string;
  sourceName?: string;
  sourceUrl?: string;
  notes?: string;
};

export function SourceNote({ label = "Source note", sourceName, sourceUrl, notes }: SourceNoteProps) {
  if (!sourceName && !sourceUrl && !notes) return null;

  return (
    <aside className="mt-5 border-t border-stone pt-4 text-xs leading-6 text-muted" aria-label={label}>
      <p className="font-bold uppercase tracking-[0.12em] text-burgundy">{label}</p>
      {sourceName || sourceUrl ? (
        <p className="mt-2">
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm font-semibold text-navy underline">
              {sourceName ?? sourceUrl}
            </a>
          ) : (
            <span className="font-semibold text-navy">{sourceName}</span>
          )}
        </p>
      ) : null}
      {notes ? <p className="mt-2">{notes}</p> : null}
    </aside>
  );
}
