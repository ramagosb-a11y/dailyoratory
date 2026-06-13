export function SaintVirtueBadge({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-full border border-stone bg-ivory px-3 py-1 ${className}`}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-burgundy">
        {label}
      </span>
      <span className="ml-2 text-xs font-semibold text-navy">{value}</span>
    </div>
  );
}
