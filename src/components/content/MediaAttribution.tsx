type MediaAttributionProps = {
  title?: string;
  creator?: string;
  sourceUrl?: string;
  license?: string;
  licenseUrl?: string;
  altText?: string;
};

export function MediaAttribution({ title = "Media", creator, sourceUrl, license, licenseUrl, altText }: MediaAttributionProps) {
  if (!creator && !sourceUrl && !license && !altText) return null;

  return (
    <figcaption className="mt-3 rounded-md border border-stone bg-ivory p-3 text-xs leading-6 text-muted">
      <span className="font-bold uppercase tracking-[0.12em] text-burgundy">{title} attribution</span>
      {creator ? <span className="ml-2">Creator: {creator}.</span> : null}
      {sourceUrl ? (
        <span className="ml-2">
          Source:{" "}
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm font-semibold text-navy underline">
            open source
          </a>
          .
        </span>
      ) : null}
      {license ? (
        <span className="ml-2">
          License:{" "}
          {licenseUrl ? (
            <a href={licenseUrl} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-sm font-semibold text-navy underline">
              {license}
            </a>
          ) : (
            license
          )}
          .
        </span>
      ) : null}
      {altText ? <span className="ml-2">Alt text: {altText}</span> : null}
    </figcaption>
  );
}
