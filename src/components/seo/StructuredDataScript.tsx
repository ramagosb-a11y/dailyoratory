type StructuredDataValue = Record<string, unknown> | Array<Record<string, unknown>>;

export function StructuredDataScript({ data }: { data: StructuredDataValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
