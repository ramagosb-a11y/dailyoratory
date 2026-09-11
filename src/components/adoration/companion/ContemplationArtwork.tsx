"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { CompanionArtwork } from '@/data/companionArtwork';
import styles from './AdorationCompanion.module.css';

export function ContemplationArtwork({ artwork, title }: { artwork: CompanionArtwork; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function show() {
    dialog.current?.showModal();
    setOpen(true);
  }
  return <figure className={styles.contemplationArtwork}>
    <button type="button" className={styles.artworkPreview} onClick={show} aria-label={`Enlarge artwork: ${title}`}>
      <Image key={artwork.src} src={artwork.src} alt={artwork.alt} width={1536} height={1024} unoptimized />
    </button>
    <figcaption><span>{artwork.caption}</span><button type="button" onClick={show}>View for contemplation</button></figcaption>
    <dialog ref={dialog} className={styles.artworkDialog} aria-label={`${title} — contemplation artwork`} onClose={() => setOpen(false)} onKeyDown={event => {
      if (event.key === 'Tab') {
        event.preventDefault();
        event.currentTarget.querySelector('button')?.focus();
      }
    }} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <header><span>{title}</span><button type="button" autoFocus onClick={() => dialog.current?.close()}>Close image</button></header>
      {open ? <Image src={artwork.src} alt={artwork.alt} width={1536} height={1024} unoptimized className={styles.contemplationFullImage} /> : null}
      <p>{artwork.caption}</p>
    </dialog>
  </figure>;
}
