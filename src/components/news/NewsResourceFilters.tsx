"use client";

type FilterOption = {
  value: string;
  label: string;
};

export function NewsResourceFilters({
  activeFilter,
  onChange,
  options,
}: {
  activeFilter: string;
  onChange: (value: string) => void;
  options: FilterOption[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.value === activeFilter;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`focus-ring rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
              active
                ? "border-[var(--liturgical-primary)] bg-[var(--liturgical-primary-soft)] text-navy"
                : "border-stone bg-ivory text-muted hover:border-burgundy hover:text-burgundy"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
