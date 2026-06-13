import { SectionJumpNav } from "@/components/SectionJumpNav";
import { virtueTrackerLinks } from "@/lib/virtueTracker";

export function VirtueTrackerNav() {
  return <SectionJumpNav ariaLabel="Virtue tracker navigation" mobileTitle="Open the virtue tracker outline" items={virtueTrackerLinks} />;
}
