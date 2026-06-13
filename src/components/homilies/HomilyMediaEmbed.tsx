import { MediaEmbed } from "@/components/media/MediaEmbed";
import type { HomilyItem } from "@/types/homilies";

export function HomilyMediaEmbed({ item }: { item: HomilyItem }) {
  return <MediaEmbed item={item} />;
}
