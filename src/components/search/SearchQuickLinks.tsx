import Link from "next/link";
import { searchQuickLinks } from "@/data/searchIndex";

export function SearchQuickLinks() {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {searchQuickLinks.map((link) => (
        <Link key={link.href} href={link.href} className="focus-ring season-pill transition hover:border-gold hover:text-navy">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
