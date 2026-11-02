import assert from "node:assert/strict";
import test from "node:test";
import { dailyPrayerDayTitle } from "./dailyPrayerTitle.ts";

test("All Souls PDF color artifact is omitted from the prayer title", () => {
  assert.equal(dailyPrayerDayTitle("The Commemoration of All the Faithful Departed violet or white or"), "The Commemoration of All the Faithful Departed");
});
test("Other calendar titles and legitimate color words remain untouched", () => {
  for (const title of ["All Saints", "The Commemoration of All the Faithful Departed", "Saint Rose of Lima", "A white rose", "Violet or white", ""]) assert.equal(dailyPrayerDayTitle(title), title);
});
test("The dashboard’s All Souls observance suffix is preserved", () => {
  assert.equal(dailyPrayerDayTitle("The Commemoration of All the Faithful Departed violet or white or (All Souls’ Day)"), "The Commemoration of All the Faithful Departed (All Souls’ Day)");
});
