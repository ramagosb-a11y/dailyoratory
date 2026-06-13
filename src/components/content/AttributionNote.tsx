type AttributionNoteProps = {
  attributionText?: string;
  sourceName?: string;
  sourceUrl?: string;
  license?: string;
  className?: string;
};

export function AttributionNote({ attributionText, sourceName, sourceUrl, license, className = "" }: AttributionNoteProps) {
  if (!attributionText && !sourceName && !sourceUrl && !license) return null;

  return (
    <aside className={`mt-6 rounded-md border border-stone bg-parchment p-4 text-xs leading-6 text-muted ${className}`} aria-label="Content attribution">
      <p className="font-bold uppercase tracking-[0.12em] text-burgundy">Attribution</p>
      {attributionText ? <p className="mt-2">{attributionText}</p> : null}
      {sourceName || sourceUrl ? (
        <p className="mt-2">
          Source:{" "}
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm font-semibold text-navy underline">
              {sourceName ?? sourceUrl}
            </a>
          ) : (
            <span className="font-semibold text-navy">{sourceName}</span>
          )}
        </p>
      ) : null}
      {license ? <p className="mt-2">License: {license}</p> : null}
    </aside>
  );
}
