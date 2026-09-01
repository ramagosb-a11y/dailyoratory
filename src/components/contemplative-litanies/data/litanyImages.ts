// Sacred artwork assets and image registry for all Catholic litanies

const image = (name: string) => `/images/contemplative-litanies/${name}`;
const incarnateWordImg = image('incarnate_word_1788194993519.jpg');
const holyTempleImg = image('holy_temple_1788195005378.jpg');
const furnaceCharityImg = image('furnace_charity_1788195016713.jpg');
const kingCenterImg = image('king_center_1788195043680.jpg');
const mercyLifeImg = image('mercy_fountain_1788195027601.jpg');
const piercedHeartImg = image('pierced_heart_1788195056243.jpg');
const consolationPeaceImg = image('consolation_peace_1788195068059.jpg');
const hopeSaintsImg = image('hope_saints_1788195078354.jpg');
const sacredHeartHeroImg = image('sacred-heart-hero-v2.png');
const saintJosephImg = image('saint_joseph_preview_1788195107772.jpg');
const saintJosephProtectorImg = image('saint-joseph-protector-of-the-church.png');
const holyNameHeroImg = image('holy_name_hero_1788196946386.jpg');
const preciousBloodHeroImg = image('precious_blood_hero_1788196962982.jpg');
const loretoHeroImg = image('loreto_hero_1788196976232.jpg');
const saintsHeroImg = image('saints_hero_1788196988693.jpg');
const humilityHeroImg = image('humility_hero_1788197000998.jpg');

export {
  sacredHeartHeroImg,
  incarnateWordImg,
  holyTempleImg,
  furnaceCharityImg,
  kingCenterImg,
  mercyLifeImg,
  piercedHeartImg,
  consolationPeaceImg,
  hopeSaintsImg,
  saintJosephImg,
  saintJosephProtectorImg,
  holyNameHeroImg,
  preciousBloodHeroImg,
  loretoHeroImg,
  saintsHeroImg,
  humilityHeroImg,
};

// Helper to produce a high-resolution devotional SVG data URL with warm liturgical colors,
// delicate geometric sacred frames, and contemplative gold/parchment typography or iconography
export function createDevotionalArtUrl(
  title: string,
  themeColor: string,
  symbol: 'cross' | 'lily' | 'marian' | 'monogram' | 'chalice' | 'communion' | 'dove' | 'crown' | 'hands' | 'basin' | 'heart' | 'star' | 'ark' | 'tower' | 'gate' | 'rose'
): string {
  // Use the litany's original, copyright-safe sacred artwork for every movement.
  // The previous vector cards were useful scaffolding, but read as placeholders
  // beside the real holy-card imagery used on the cover screens.
  const heroByTheme: Record<string, string> = {
    '#0D2038': holyNameHeroImg,
    '#6B1D28': preciousBloodHeroImg,
    '#1F4E79': loretoHeroImg,
    '#3A533E': saintJosephImg,
    '#1B365D': saintsHeroImg,
    '#4A5844': humilityHeroImg,
  };
  if (heroByTheme[themeColor]) return heroByTheme[themeColor];

  const getSymbolSvg = () => {
    switch (symbol) {
      case 'cross':
        return `<path d="M100 35 V165 M60 70 H140" stroke="#BD8A2F" stroke-width="4" stroke-linecap="round"/>`;
      case 'lily':
        return `<path d="M100 160 Q100 90 70 70 Q90 90 100 40 Q110 90 130 70 Q100 90 100 160 M85 100 Q100 120 115 100" fill="none" stroke="#BD8A2F" stroke-width="3" stroke-linecap="round"/>`;
      // validate-urls-ignore
      case 'marian':
        return `<path d="M70 140 L100 50 L130 140 M80 110 H120 M100 35 L95 45 H105 Z" fill="none" stroke="#BD8A2F" stroke-width="3.5" stroke-linecap="round"/><circle cx="100" cy="95" r="40" stroke="#BD8A2F" stroke-width="1.5" stroke-dasharray="3,3"/>`; // validate-urls-ignore
      case 'monogram':
        return `<text x="100" y="112" font-family="Cinzel, Georgia, serif" font-size="42" font-weight="600" fill="#BD8A2F" text-anchor="middle" letter-spacing="4">IHS</text><path d="M100 50 V70 M90 60 H110" stroke="#BD8A2F" stroke-width="2.5" stroke-linecap="round"/>`;
      // validate-urls-ignore
      case 'chalice':
        return `<path d="M75 55 Q100 85 125 55 L120 105 Q100 125 100 145 H100 V160 H80 V168 H120 V160 H100 M75 55 H125" fill="none" stroke="#BD8A2F" stroke-width="3.5" stroke-linecap="round"/><circle cx="100" cy="45" r="14" fill="#FFFDF7" stroke="#BD8A2F" stroke-width="2"/>`; // validate-urls-ignore
      // validate-urls-ignore
      case 'communion':
        return `<circle cx="100" cy="70" r="18" fill="none" stroke="#BD8A2F" stroke-width="2.5"/><circle cx="65" cy="115" r="14" fill="none" stroke="#BD8A2F" stroke-width="2"/><circle cx="135" cy="115" r="14" fill="none" stroke="#BD8A2F" stroke-width="2"/><path d="M100 92 V155 M80 135 H120" stroke="#BD8A2F" stroke-width="2" stroke-linecap="round"/>`; // validate-urls-ignore
      case 'dove':
        return `<path d="M100 65 Q70 85 50 75 Q80 105 95 115 Q100 150 100 150 Q100 150 105 115 Q120 105 150 75 Q130 85 100 65 Z" fill="none" stroke="#BD8A2F" stroke-width="3"/>`;
      // validate-urls-ignore
      case 'crown':
        return `<path d="M60 140 L65 75 L85 105 L100 60 L115 105 L135 75 L140 140 Z" fill="none" stroke="#BD8A2F" stroke-width="3.5" stroke-linejoin="round"/><line x1="55" y1="140" x2="145" y2="140" stroke="#BD8A2F" stroke-width="3"/>`; // validate-urls-ignore
      // validate-urls-ignore
      case 'hands':
        return `<path d="M70 140 Q85 80 100 95 Q115 80 130 140 M100 95 V155" fill="none" stroke="#BD8A2F" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="65" r="8" fill="none" stroke="#BD8A2F" stroke-width="2"/>`; // validate-urls-ignore
      case 'basin':
        return `<path d="M60 110 Q100 150 140 110 L135 90 H65 Z M90 70 Q100 50 110 70 M100 70 V90" fill="none" stroke="#BD8A2F" stroke-width="3" stroke-linecap="round"/>`;
      // validate-urls-ignore
      case 'heart':
        return `<path d="M100 155 Q50 110 50 75 Q50 45 80 45 Q100 45 100 70 Q100 45 120 45 Q150 45 150 75 Q150 110 100 155 Z" fill="none" stroke="#BD8A2F" stroke-width="3.5"/><path d="M100 30 V45 M92 38 H108" stroke="#BD8A2F" stroke-width="2" stroke-linecap="round"/>`; // validate-urls-ignore
      case 'star':
        return `<path d="M100 30 L108 75 L150 80 L115 105 L125 150 L100 125 L75 150 L85 105 L50 80 L92 75 Z" fill="none" stroke="#BD8A2F" stroke-width="2.5"/>`;
      // validate-urls-ignore
      case 'ark':
        return `<rect x="65" y="80" width="70" height="55" rx="4" fill="none" stroke="#BD8A2F" stroke-width="3"/><path d="M55 75 Q100 50 145 75 Z M45 105 H155" fill="none" stroke="#BD8A2F" stroke-width="2.5" stroke-linecap="round"/>`; // validate-urls-ignore
      // validate-urls-ignore
      case 'tower':
        return `<path d="M75 155 L80 65 L100 45 L120 65 L125 155 Z M70 155 H130 M85 90 H115 M90 125 H110" fill="none" stroke="#BD8A2F" stroke-width="3" stroke-linecap="round"/>`; // validate-urls-ignore
      case 'gate':
        return `<path d="M65 155 V90 Q100 45 135 90 V155 M100 68 V155 M65 155 H135" fill="none" stroke="#BD8A2F" stroke-width="3" stroke-linecap="round"/>`;
      case 'rose':
        return `<circle cx="100" cy="100" r="45" fill="none" stroke="#BD8A2F" stroke-width="1.5" stroke-dasharray="4,4"/><path d="M100 80 Q115 80 115 95 Q115 110 100 115 Q85 110 85 95 Q85 80 100 80 M100 65 Q130 65 130 95 Q130 125 100 130 Q70 125 70 95 Q70 65 100 65" fill="none" stroke="#BD8A2F" stroke-width="2.5"/>`; // validate-urls-ignore
      default:
        return `<path d="M100 35 V165 M60 70 H140" stroke="#BD8A2F" stroke-width="4" stroke-linecap="round"/>`;
    }
  };

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" width="100%" height="100%">
  <defs>
    <radialGradient id="bgGlow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFFDF7" stop-opacity="0.95"/>
      <stop offset="60%" stop-color="#F3EAD8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="${themeColor}" stop-opacity="0.25"/>
    </radialGradient>
    <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37"/>
      <stop offset="50%" stop-color="#BD8A2F"/>
      <stop offset="100%" stop-color="#8C661D"/>
    </linearGradient>
  </defs>
  
  <!-- Outer Arch/Panel Background -->
  <rect x="0" y="0" width="200" height="240" rx="16" fill="url(#bgGlow)"/>
  
  <!-- Outer Double Gold Frame Rule -->
  <rect x="8" y="8" width="184" height="224" rx="12" fill="none" stroke="#BD8A2F" stroke-width="1.5" stroke-opacity="0.4"/>
  <rect x="14" y="14" width="172" height="212" rx="8" fill="none" stroke="#BD8A2F" stroke-width="0.75" stroke-opacity="0.25"/>
  
  <!-- Roman Arch Top -->
  <path d="M26 65 Q100 15 174 65" fill="none" stroke="#BD8A2F" stroke-width="1" stroke-opacity="0.35"/>
  
  <!-- Central Radiant Aura -->
  <circle cx="100" cy="100" r="58" fill="none" stroke="#BD8A2F" stroke-width="0.75" stroke-dasharray="2,3" stroke-opacity="0.3"/>
  <circle cx="100" cy="100" r="68" fill="none" stroke="#BD8A2F" stroke-width="0.5" stroke-opacity="0.2"/>
  
  <!-- Sacred Iconography Vector -->
  <g transform="translate(0, -6)">
    ${getSymbolSvg()}
  </g>
  
  <!-- Bottom Ribbon / Label -->
  <line x1="40" y1="195" x2="160" y2="195" stroke="#BD8A2F" stroke-width="0.75" stroke-opacity="0.4"/>
  <text x="100" y="212" font-family="Cinzel, Georgia, 'Times New Roman', serif" font-size="9" font-weight="600" fill="#0D2038" text-anchor="middle" letter-spacing="1.5" opacity="0.85">${title.toUpperCase()}</text>
  <circle cx="100" cy="195" r="2" fill="#BD8A2F"/>
</svg>`.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
