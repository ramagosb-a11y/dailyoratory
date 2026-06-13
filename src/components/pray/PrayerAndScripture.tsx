import { TrackedLink } from "@/components/analytics/TrackedLink";
import { prayerAndScriptureLinks } from "@/lib/prayer";

export function PrayerAndScripture() {
  return (
    <section>
      <p className="liturgical-section-eyebrow">Prayer with the Word of God</p>
      <h2 className="font-display mt-2 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
        Scripture gives prayer a voice.
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
        The Psalms, Gospels, prophets, and daily Mass readings teach the heart how to listen and
        respond to God.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {prayerAndScriptureLinks.map((link) =>
          link.external ? (
            <TrackedLink
              key={link.href}
              href={link.href}
              external
              className="btn btn-secondary focus-ring justify-center"
              eventName="external_prayer_resource_click"
              eventParams={{
                resource_name: link.label,
                resource_url: link.href,
                page_path: "/pray",
                section: "prayer-and-scripture",
              }}
            >
              {link.label}
            </TrackedLink>
          ) : (
            <TrackedLink
              key={link.href}
              href={link.href}
              className="btn btn-secondary focus-ring justify-center"
              eventName="prayer_tool_click"
              eventParams={{
                tool_name: link.label,
                destination: link.href,
                page_path: "/pray",
                section: "prayer-and-scripture",
              }}
            >
              {link.label}
            </TrackedLink>
          ),
        )}
      </div>
    </section>
  );
}
