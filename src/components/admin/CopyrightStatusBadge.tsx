export type CopyrightBadgeStatus =
  | "Original"
  | "Public Domain"
  | "Licensed"
  | "Used with Permission"
  | "Short Quotation"
  | "Needs Review"
  | "Replace Recommended"
  | "Do Not Publish";

const statusClassNames: Record<CopyrightBadgeStatus, string> = {
  Original: "border-success text-success bg-success/5",
  "Public Domain": "border-success text-success bg-success/5",
  Licensed: "border-navy text-navy bg-ivory",
  "Used with Permission": "border-navy text-navy bg-ivory",
  "Short Quotation": "border-gold text-gold bg-gold-soft/40",
  "Needs Review": "border-burgundy text-burgundy bg-burgundy/5",
  "Replace Recommended": "border-gold text-gold bg-gold-soft/40",
  "Do Not Publish": "border-burgundy text-burgundy bg-burgundy/10",
};

export function CopyrightStatusBadge({ status }: { status: CopyrightBadgeStatus }) {
  return (
    <span className={`inline-flex rounded-sm border px-2 py-1 text-xs font-bold uppercase tracking-[0.08em] ${statusClassNames[status]}`}>
      {status}
    </span>
  );
}
