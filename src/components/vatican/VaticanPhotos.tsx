import Image from "next/image";
import styles from "./VaticanPage.module.css";

export const vaticanPhotos = {
  basilicaInterior: { src: "/images/vatican/st-peters-interior.webp", alt: "Sunlight entering the nave of Saint Peter’s Basilica above the marble floor and monumental arches", title: "Saint Peter’s Basilica interior", author: "MarcusObal", source: "https://commons.wikimedia.org/wiki/File:Saint_Peter%27s_Basilica.JPG", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
  basilica: { src: "/images/vatican/st-peters.webp", alt: "The dome and façade of Saint Peter’s Basilica behind the obelisk in Saint Peter’s Square", title: "Saint Peter’s Basilica", author: "Didier Moïse", source: "https://commons.wikimedia.org/wiki/File:St._Peter%27s_Basilica_in_Vatican_City.jpg", license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/" },
  museums: { src: "/images/vatican/gallery-maps.webp", alt: "The painted ceiling and map-lined corridor of the Gallery of Maps in the Vatican Museums", title: "Gallery of Maps", author: "Richard Mortel", source: "https://commons.wikimedia.org/wiki/File:Gallery_of_the_Maps,_Vatican_Museums_(3)_(48759327626).jpg", license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/" },
  sistine: { src: "/images/vatican/sistine.webp", alt: "Michelangelo’s frescoes across the Sistine Chapel ceiling", title: "Sistine Chapel ceiling", author: "Qypchak / Amandajm", source: "https://commons.wikimedia.org/wiki/File:CAPPELLA_SISTINA_Ceiling.jpg", license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/" },
};

export type VaticanPhotoKey = keyof typeof vaticanPhotos;

export function VaticanPhoto({ photo, panoramic = false }: { photo: VaticanPhotoKey; panoramic?: boolean }) {
  const image = vaticanPhotos[photo];
  return <figure className={`${styles.photo} ${panoramic ? styles.panoramic : ""}`}>
    <div className={styles.photoFrame}><Image src={image.src} alt={image.alt} fill quality={85} sizes={panoramic ? "(max-width: 1376px) 100vw, 1296px" : "(max-width: 767px) 100vw, (max-width: 1376px) 50vw, 650px"} /></div>
    <figcaption>{image.title} <span>· </span><a href="#photo-credits">Photo credits</a></figcaption>
  </figure>;
}

export function VaticanPhotoCredits() {
  return <section id="photo-credits" className={styles.credits} aria-labelledby="photo-credits-title">
    <h2 id="photo-credits-title">Photography credits</h2>
    <p>Photographs resized and converted to WebP; display crops vary by screen. Each photograph retains its listed license.</p>
    <ul>{Object.values(vaticanPhotos).map(photo => <li key={photo.src}><a href={photo.source}>{photo.title}</a> — {photo.author}, <a href={photo.licenseUrl}>{photo.license}</a>.</li>)}</ul>
  </section>;
}
