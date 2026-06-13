import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getSaintForDate } from "@/lib/saintOfTheDay";

type TodaySaintCompanionCardProps = {
  cardClassName: string;
  cardEyebrowClassName: string;
  cardHeadingClassName: string;
  cardCopyClassName: string;
  cardLinkClassName: string;
};

export async function TodaySaintCompanionCard({
  cardClassName,
  cardEyebrowClassName,
  cardHeadingClassName,
  cardCopyClassName,
  cardLinkClassName,
}: TodaySaintCompanionCardProps) {
  const entry = await getSaintForDate(new Date());
  const destination = entry ? `/saints/saint-of-the-day?date=${entry.dateKey}` : "/saints/saint-of-the-day";

  return (
    <article className={`rounded-md border p-4 ${cardClassName}`}>
      <p className={`text-xs font-bold uppercase ${cardEyebrowClassName}`}>SAINT OF THE DAY</p>
      <h3 className={`font-display mt-2 text-3xl font-semibold ${cardHeadingClassName}`}>Meet today&apos;s saint</h3>
      <p className={`mt-2 text-sm leading-6 ${cardCopyClassName}`}>
        {entry ? `${entry.name}. ${entry.shortDescription}` : "A holy witness for today&apos;s prayer, virtue, and daily life."}
      </p>
      <TrackedLink
        href={destination}
        className={`focus-ring mt-5 inline-flex items-center justify-center rounded-md border border-gold bg-gold px-4 py-3 text-sm font-semibold text-navy transition hover:bg-gold-soft ${cardLinkClassName}`}
        eventName="saint_of_day_learn_more_click"
        eventParams={{
          destination,
          page_path: "/",
          source_section: "today-saint-of-the-day",
          saint_slug: entry?.slug,
          date_key: entry?.dateKey,
        }}
      >
        Learn About Today&apos;s Saint
      </TrackedLink>
    </article>
  );
}
