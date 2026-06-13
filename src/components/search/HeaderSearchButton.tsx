import Link from "next/link";

export function HeaderSearchButton({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <Link
        href="/search"
        className="focus-ring flex items-center gap-2 rounded-full border border-stone bg-parchment/60 px-4 py-2 text-sm font-semibold text-navy"
      >
        <SearchIcon />
        Search
      </Link>
    );
  }

  return (
    <Link
      href="/search"
      className="focus-ring hidden items-center gap-2 rounded-full border border-stone bg-ivory px-3 py-2 text-sm font-semibold text-navy shadow-sm transition hover:bg-parchment lg:inline-flex"
      aria-label="Search Daily Oratory"
    >
      <SearchIcon />
      Search
    </Link>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
