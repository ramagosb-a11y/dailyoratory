import { SectionJumpNav } from "@/components/SectionJumpNav";
import { saintLinks } from "@/lib/saints";

export function SaintsNav() {
  return <SectionJumpNav ariaLabel="Saint companion navigation" mobileTitle="Open the saints guide outline" items={saintLinks} />;
}
