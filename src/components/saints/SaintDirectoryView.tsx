import { SaintCard } from "@/components/saints/SaintCard";
import { getPublishedSaints } from "@/lib/saints";

export function SaintDirectoryView() {
  const saints = getPublishedSaints();

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {saints.map((saint) => (
        <SaintCard key={saint.id} saint={saint} />
      ))}
    </div>
  );
}
