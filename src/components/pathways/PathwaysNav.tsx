import { SectionJumpNav } from "@/components/SectionJumpNav";
import { pathwayBasePages } from "@/lib/pathways";

export function PathwaysNav() {
  return <SectionJumpNav ariaLabel="Spiritual Growth Pathways" mobileTitle="Open the pathways outline" items={pathwayBasePages} />;
}
