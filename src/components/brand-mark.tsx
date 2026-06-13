import Link from "next/link";
import { brand } from "@/config/brand";

export function BrandMark() {
  return (
    <Link href="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-md">
      <span
        aria-hidden="true"
        className="grid h-11 w-11 place-items-center rounded-md border border-gold/50 bg-navy text-gold shadow-sm"
      >
        <span className="font-display text-xl font-bold">O</span>
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold uppercase text-navy">Daily</span>
        <span className="block text-xs font-semibold uppercase text-muted">Oratory</span>
        <span className="sr-only">{brand.platformName}</span>
      </span>
    </Link>
  );
}
