import { LitanyData, LitanyCardInfo } from '../types';
import { sacredHeartLitany } from './litanies/sacredHeart';
import { saintJosephLitany } from './litanies/saintJoseph';
import { loretoLitany } from './litanies/loreto';
import { holyNameLitany } from './litanies/holyName';
import { preciousBloodLitany } from './litanies/preciousBlood';
import { saintsLitany } from './litanies/saints';
import { humilityLitany } from './litanies/humility';

export {
  sacredHeartLitany,
  saintJosephLitany,
  loretoLitany,
  holyNameLitany,
  preciousBloodLitany,
  saintsLitany,
  humilityLitany,
};

export const litanies: Record<string, LitanyData> = {
  sacredHeart: sacredHeartLitany,
  saintJoseph: saintJosephLitany,
  loreto: loretoLitany,
  holyName: holyNameLitany,
  preciousBlood: preciousBloodLitany,
  saints: saintsLitany,
  humility: humilityLitany,
};

export const litanySlugMap: Record<string, LitanyData> = {
  'sacred-heart': sacredHeartLitany,
  'saint-joseph': saintJosephLitany,
  'loreto': loretoLitany,
  'holy-name': holyNameLitany,
  'precious-blood': preciousBloodLitany,
  'saints': saintsLitany,
  'humility': humilityLitany,
};

export const litanyCatalog: LitanyCardInfo[] = [
  // CHRIST
  {
    id: 'sacred-heart',
    slug: 'sacred-heart',
    title: 'Litany of the Sacred Heart of Jesus',
    subtitle: 'Heart of Jesus, have mercy on us',
    shortDescription: 'Eight contemplative movements through the mysteries, love, and titles of the Heart of Christ.',
    category: 'christ',
    status: 'available',
    movementsCount: 8,
    route: '/litanies/sacred-heart',
    image: sacredHeartLitany.heroImage,
    iconType: 'heart',
    colorTheme: sacredHeartLitany.colorTheme,
  },
  {
    id: 'holy-name',
    slug: 'holy-name',
    title: 'Litany of the Most Holy Name of Jesus',
    subtitle: 'Jesus, Son of David, have mercy on us',
    shortDescription: 'An ancient invocation honoring the salvific power, sweetness, and majesty of the Name of Christ.',
    category: 'christ',
    status: 'available',
    movementsCount: 7,
    route: '/litanies/holy-name',
    image: holyNameLitany.heroImage,
    iconType: 'monogram',
    colorTheme: holyNameLitany.colorTheme,
  },
  {
    id: 'precious-blood',
    slug: 'precious-blood',
    title: 'Litany of the Most Precious Blood of Jesus',
    subtitle: 'Price of our redemption, save us',
    shortDescription: 'Meditation on the life-giving stream of grace poured out for the salvation of the world.',
    category: 'christ',
    status: 'available',
    movementsCount: 7,
    route: '/litanies/precious-blood',
    image: preciousBloodLitany.heroImage,
    iconType: 'chalice',
    colorTheme: preciousBloodLitany.colorTheme,
  },

  // MARY & SAINTS
  {
    id: 'loreto',
    slug: 'loreto',
    title: 'Litany of Loreto',
    subtitle: 'Litany of the Blessed Virgin Mary',
    shortDescription: 'Mystical titles and poetic praises of the Mother of God, invoking her maternal intercession.',
    category: 'mary-saints',
    status: 'available',
    movementsCount: 7,
    route: '/litanies/loreto',
    image: loretoLitany.heroImage,
    iconType: 'marian',
    colorTheme: loretoLitany.colorTheme,
  },
  {
    id: 'saint-joseph',
    slug: 'saint-joseph',
    title: 'Litany of Saint Joseph',
    subtitle: 'Terror of demons, pray for us',
    shortDescription: 'A quiet journey through the virtues, titles, and silent guardianship of the Foster Father of Jesus.',
    category: 'mary-saints',
    status: 'available',
    movementsCount: 6,
    route: '/litanies/saint-joseph',
    image: saintJosephLitany.heroImage,
    iconType: 'lily',
    colorTheme: saintJosephLitany.colorTheme,
  },
  {
    id: 'saints',
    slug: 'saints',
    title: 'Litany of the Saints',
    subtitle: 'All holy men and women of God, pray for us',
    shortDescription: 'The ancient choral litany connecting our earthly pilgrimage with the celestial triumph of heaven.',
    category: 'mary-saints',
    status: 'available',
    movementsCount: 10,
    route: '/litanies/saints',
    image: saintsLitany.heroImage,
    iconType: 'crown',
    colorTheme: saintsLitany.colorTheme,
  },

  // SPIRITUAL FORMATION
  {
    id: 'humility',
    slug: 'humility',
    title: 'Litany of Humility',
    subtitle: 'Deliver me, Jesus',
    shortDescription: 'A prayer for freedom from pride, vanity, and the fear of humiliation, seeking pure charity in Christ.',
    category: 'spiritual-formation',
    status: 'available',
    movementsCount: 5,
    route: '/litanies/humility',
    image: humilityLitany.heroImage,
    iconType: 'basin',
    colorTheme: humilityLitany.colorTheme,
  },
];
