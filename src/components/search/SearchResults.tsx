import { SearchResultCard } from "@/components/search/SearchResultCard";
import type { SearchItem } from "@/types/search";

export function SearchResults({ items, query }: { items: SearchItem[]; query: string }) {
  return (
    <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <SearchResultCard key={`${item.type}-${item.id}`} item={item} query={query} />
      ))}
    </div>
  );
}
