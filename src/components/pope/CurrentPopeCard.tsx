import { TrackedLink } from "@/components/analytics/TrackedLink";
import { getCurrentPope } from "@/lib/pope";
import styles from "./CurrentPopeCard.module.css";

export function CurrentPopeCard() {
  const pope = getCurrentPope();
  const pontificateStart = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(pope.pontificateStart));

  return (
    <section className={styles.panel} aria-labelledby="current-pope-heading">
      <div className={styles.masthead}>
        <p className={styles.eyebrow}>Current pope</p>
        <h2 id="current-pope-heading" className="font-display">The Current Pope</h2>
      </div>
      <article className={styles.layout}>
        <div className={styles.biography}>
          <p className={styles.ordinal}>{pope.ordinal} Pope of the Catholic Church</p>
          <h3 className={`font-display ${styles.name}`}>{pope.papalName}</h3>
          <p className={styles.title}>{pope.title}</p>
          <p className={styles.description}>{pope.shortDescription}</p>
          <dl className={styles.facts}>
            <div>
              <dt>Beginning of pontificate</dt>
              <dd>{pontificateStart}</dd>
            </div>
            <div>
              <dt>Official title</dt>
              <dd>Bishop of Rome</dd>
            </div>
          </dl>
        </div>
        <div className={styles.resources}>
          <p className={styles.sourceNote}>This information is sourced from the official Vatican page.</p>
          {pope.documentLinks.map((link, index) => (
            <TrackedLink
              key={link.href}
              href={link.href}
              external
              className={`focus-ring ${styles.resourceLink} ${index === 0 ? styles.featuredLink : ""}`}
              eventName="pope_resource_click"
              eventParams={{ resource_name: link.label, resource_url: link.href, page_path: "/pope", section: "current-pope" }}
            >
              <span>{link.label}</span>
              <span aria-hidden="true" className={styles.arrow}>↗</span>
            </TrackedLink>
          ))}
        </div>
      </article>
    </section>
  );
}
