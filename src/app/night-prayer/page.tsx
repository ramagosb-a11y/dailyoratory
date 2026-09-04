import { NightPrayerExperience } from "@/components/night-prayer/NightPrayerExperience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Prayer for Protection During Sleep",
  description: "Entrust the night to Jesus Christ with a guided Catholic prayer for protection, peaceful sleep, the Our Father, and the prayer to Saint Michael.",
  path: "/night-prayer",
  image: "/images/night-prayer/guardian-angel-protection-girl.png",
  imageAlt: "A Guardian Angel keeping watch over a sleeping girl beneath a crucifix",
  keywords: ["Catholic night prayer", "prayer for protection during sleep", "Saint Michael prayer", "Guardian Angel prayer", "prayer before bed"],
});

export default function NightPrayerPage() {
  return <NightPrayerExperience />;
}
