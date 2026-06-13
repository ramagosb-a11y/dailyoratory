import { SectionJumpNav } from "@/components/SectionJumpNav";
import { rosaryLinks } from "@/lib/rosary";

export function RosaryNav() {
  return <SectionJumpNav ariaLabel="Rosary navigation" mobileTitle="Open the Rosary guide outline" items={rosaryLinks} />;
}
