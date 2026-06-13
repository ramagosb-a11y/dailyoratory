"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { searchQuickLinks } from "@/data/searchIndex";

type SiteSearchBarProps = {
  variant?: "hero" | "compact" | "header";
  defaultValue?: string;
  showQuickLinks?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
};

export function SiteSearchBar({
  variant = "compact",
  defaultValue = "",
  showQuickLinks = false,
  placeholder = "Search Daily Oratory...",
  autoFocus = false,
  className = "",
}: SiteSearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  const fieldClasses = useMemo(() => {
    if (variant === "header") {
      return "h-11 rounded-full border border-stone bg-ivory px-11 pr-20 text-sm text-navy shadow-sm";
    }

    if (variant === "hero") {
      return "h-14 rounded-full border border-stone bg-ivory px-12 pr-24 text-base text-navy shadow-sm";
    }

    return "h-12 rounded-full border border-stone bg-ivory px-11 pr-20 text-sm text-navy shadow-sm";
  }, [variant]);

  const submitLabel = variant === "header" ? "Go" : "Search";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <label htmlFor={`site-search-${variant}`} className="sr-only">
          Search Daily Oratory
        </label>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>
        <input
          id={`site-search-${variant}`}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          aria-label="Search Daily Oratory"
          className={`focus-ring w-full ${fieldClasses}`}
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="focus-ring absolute right-20 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted transition hover:bg-parchment hover:text-navy"
          >
            <span aria-hidden="true" className="text-lg leading-none">
              ×
            </span>
          </button>
        ) : null}
        <button
          type="submit"
          className="focus-ring absolute right-1.5 top-1/2 inline-flex h-10 items-center rounded-full bg-gold px-4 text-sm font-semibold text-navy transition hover:brightness-95"
        >
          {submitLabel}
        </button>
      </form>
      {showQuickLinks ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuickLinks.map((link) => (
            <Link key={link.href} href={link.href} className="focus-ring season-pill transition hover:border-gold hover:text-navy">
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
