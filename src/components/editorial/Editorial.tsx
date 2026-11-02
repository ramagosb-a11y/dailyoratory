import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { editorialImages } from "@/data/editorialImages";
import styles from "./Editorial.module.css";
import { EditorialAnchorReveal } from "./EditorialAnchorReveal";

type Destination = { label: string; href: string };
const photosBySource = new Map(Object.values(editorialImages).map((photo) => [photo.src, photo]));

function PhotoCredit({ src }: { src: string }) {
  const photo = photosBySource.get(src);
  if (!photo) return null;
  return (
    <span className={styles.credit}>
      <a href={photo.sourceUrl}>{photo.credit}</a> · {photo.licenseUrl ? <a href={photo.licenseUrl}>{photo.license}</a> : photo.license} · Resized and cropped
    </span>
  );
}

export function EditorialPage({ children, breadcrumbs, longform = false }: { children: ReactNode; breadcrumbs: { label: string; href?: string }[]; longform?: boolean }) {
  return (
    <div className={`${styles.page} ${longform ? styles.longform : ""}`}>
      {longform && <EditorialAnchorReveal />}
      <div className={styles.container}><Breadcrumbs items={breadcrumbs} />{children}</div>
    </div>
  );
}

export function EditorialHero({ eyebrow, title, description, image, imageAlt, actions, credit, compact = false }: { eyebrow: string; title: string; description: string; image: string; imageAlt: string; actions: Destination[]; credit?: ReactNode; compact?: boolean }) {
  const photo = photosBySource.get(image);
  return (
    <header className={`${styles.hero} ${compact ? styles.compact : ""}`}>
      <div className={styles.heroArt}>
        <Image src={image} alt={photo?.alt ?? imageAlt} fill preload quality={85} sizes="(max-width: 760px) 100vw, 65vw" />
      </div>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.heroDescription}>{description}</p>
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <Link className={index === 0 ? styles.primary : styles.secondary} href={action.href} key={action.href}>
              {action.label}<span aria-hidden="true"> ↗</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.heroCredit}>{credit ?? <PhotoCredit src={image} />}</div>
    </header>
  );
}

export function EditorialSection({ id, eyebrow, title, description, children }: { id?: string; eyebrow?: string; title: string; description?: string; children: ReactNode }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeading}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function EditorialGrid({ children }: { children: ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export function EditorialCard({ title, description, href, image, eyebrow }: { title: string; description: string; href: string; image?: string; eyebrow?: string }) {
  return (
    <article className={styles.card}>
      {image && (
        <div className={styles.cardArt}>
          <Image src={image} alt="" fill quality={85} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
        </div>
      )}
      <div className={styles.cardCopy}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h3><Link href={href}>{title}<span aria-hidden="true"> ↗</span></Link></h3>
        <p>{description}</p>
      </div>
      {image && <div className={styles.cardCredit}><PhotoCredit src={image} /></div>}
    </article>
  );
}

export function EditorialDisclosure({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <details id={id} className={styles.disclosure}>
      <summary>{title}</summary>
      <div className={styles.disclosureBody}>{children}</div>
    </details>
  );
}

export function EditorialPhoto({ src, alt, caption }: { src: string; alt: string; caption?: ReactNode }) {
  const photo = photosBySource.get(src);
  return (
    <figure className={styles.photo}>
      <div className={styles.photoArt}>
        <Image src={src} alt={photo?.alt ?? alt} fill quality={85} sizes="(max-width: 760px) 100vw, 60vw" />
      </div>
      <figcaption>{caption && <span>{caption} </span>}<PhotoCredit src={src} /></figcaption>
    </figure>
  );
}

export function EditorialLinks({ links }: { links: Destination[] }) {
  return (
    <ul className={styles.links}>
      {links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}<span aria-hidden="true"> ↗</span></Link></li>)}
    </ul>
  );
}
