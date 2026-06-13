async function main() {
  const moduleUrl = new URL("../src/lib/indexnow.ts", import.meta.url);
  const { submitUrlsToIndexNow } = (await import(moduleUrl.href)) as typeof import("../src/lib/indexnow");
  const urls = process.argv.slice(2);

  if (!urls.length) {
    console.error(
      "Usage: npm run indexnow -- https://dailyoratory.faith/bible https://dailyoratory.faith/devotions/holy-rosary",
    );
    process.exitCode = 1;
    return;
  }

  const result = await submitUrlsToIndexNow(urls);

  if (!result.ok) {
    console.error(
      `IndexNow submission failed. submitted=${result.submittedCount} status=${result.status ?? "n/a"} reason=${result.reason ?? "unknown"}`,
    );
    if (result.skipped.length) {
      console.error(`Skipped URLs:\n${result.skipped.join("\n")}`);
    }
    process.exitCode = 1;
    return;
  }

  console.log(
    `IndexNow submission succeeded. submitted=${result.submittedCount} status=${result.status ?? "n/a"}`,
  );
  if (result.skipped.length) {
    console.log(`Skipped URLs:\n${result.skipped.join("\n")}`);
  }
}

void main();
