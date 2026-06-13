import { SectionJumpNav } from "@/components/SectionJumpNav";
import { confessionNavLinks } from "@/lib/confession";

export function ConfessionNav() {
  return (
    <SectionJumpNav
      ariaLabel="Confession preparation"
      mobileTitle="Open the Confession guide outline"
      items={confessionNavLinks.map((item) => ({ href: item.href, label: item.title }))}
    />
  );
}
