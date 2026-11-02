/** Remove one known PDF-extraction artifact without changing the calendar source. */
export function dailyPrayerDayTitle(title: string): string {
  const artifact = "The Commemoration of All the Faithful Departed violet or white or";
  const canonical = "The Commemoration of All the Faithful Departed";
  // The dashboard can append its existing parenthesized observance name.
  return title === artifact || title.startsWith(`${artifact} (`)
    ? canonical + title.slice(artifact.length)
    : title;
}
