import { TodayInTheChurchClient } from "@/components/home/TodayInTheChurchClient";
import { getApprovedSaintEntries } from "@/lib/saintOfTheDay";
import { getCurrentSiteIsoDate } from "@/lib/staticDailyContent";

export async function TodayInTheChurch() {
  const saintEntries = await getApprovedSaintEntries();

  return (
    <TodayInTheChurchClient
      initialIsoDate={getCurrentSiteIsoDate()}
      saintEntries={saintEntries}
    />
  );
}
