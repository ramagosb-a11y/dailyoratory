import { SectionJumpNav } from "@/components/SectionJumpNav";
import { prayerIntentionLinks } from "@/lib/prayerIntentions";

export function PrayerIntentionsNav() {
  return (
    <SectionJumpNav
      ariaLabel="Prayer intention navigation"
      mobileTitle="Open the prayer intentions outline"
      items={prayerIntentionLinks}
    />
  );
}
