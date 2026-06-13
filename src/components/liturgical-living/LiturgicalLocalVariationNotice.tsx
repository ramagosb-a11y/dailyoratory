export function LiturgicalLocalVariationNotice({
  title = "Local variation matters",
  note,
}: {
  title?: string;
  note: string;
}) {
  return (
    <div className="dashboard-card border-l-4 border-l-gold p-4 sm:p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-burgundy">{title}</p>
      <p className="mt-2 text-sm leading-7 text-navy">{note}</p>
    </div>
  );
}
