import { SectionJumpNav } from "@/components/SectionJumpNav";
import { sacramentBasePages } from "@/lib/sacraments";

export function SacramentsNav() {
  return <SectionJumpNav ariaLabel="Sacrament preparation" mobileTitle="Open the sacraments guide outline" items={sacramentBasePages} />;
}
