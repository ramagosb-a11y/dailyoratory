import { MorningPrayerExperience } from "@/components/morning-prayer/MorningPrayerExperience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Guided Morning Prayer",
  description: "Begin the day with a guided Catholic morning prayer journey of offering, repentance, spiritual communion, protection, and family intercession.",
  path: "/morning-prayer",
  image: "/images/morning-prayers/morning-offering.png",
  imageAlt: "Jesus and Mary receiving the offering of a new day in union with the Holy Mass",
  keywords: ["Catholic morning prayer", "morning offering", "guided morning prayer", "daily Catholic prayer"],
});

export default function MorningPrayerPage() {
  return <MorningPrayerExperience />;
}
