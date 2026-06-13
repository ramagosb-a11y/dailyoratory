import { LinkedCitationText } from "@/components/LinkedCitationText";

export function DevotionDetailSection({
  eyebrow,
  title,
  paragraphs,
  items,
}: {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
}) {
  return (
    <section className="card-parchment p-6">
      {eyebrow ? <p className="text-xs font-bold uppercase text-burgundy">{eyebrow}</p> : null}
      <h2 className="font-display mt-2 text-4xl font-semibold text-navy">{title}</h2>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-sm leading-7 text-muted">
          <LinkedCitationText text={paragraph} />
        </p>
      ))}
      {items?.length ? (
        <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
          {items.map((item) => (
            <li key={item} className="border-l-2 border-gold pl-4">
              <LinkedCitationText text={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
