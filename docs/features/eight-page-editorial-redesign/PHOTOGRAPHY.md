# Editorial redesign photography

Revision: redesign-r1. Prepared 2026-11-01. All thirteen assets are documentary photographs sourced from Wikimedia Commons. None are generated images or staged reconstructions represented as documentary rites. Metadata was retrieved from the Commons imageinfo API and retained in `public/images/editorial/provenance.json`.

Images are decoded, auto-oriented, resized inside 1600 × 1600 without upscaling and encoded as WebP at quality 85 using the existing Sharp dependency. Original composition and aspect ratio are preserved; the page controls its display crop. The seven later images plus Pray were retrieved using Commons-provided 1600px derivatives; their original-file byte counts are API metadata, not local download sizes. Original downloads are not shipped.

## Source and license ledger

Each displayed photo must credit its creator and link to its Commons source; CC images must also link to the license. Resizing and WebP conversion are modifications. Any display crop is also a modification. BY-SA photographs and adapted crops remain available under their stated BY-SA license; that obligation applies to the image, not unrelated site code.

| Asset | Creator / credit | License | Source | Original bytes | WebP bytes | Dimensions |
| --- | --- | --- | --- | ---: | ---: | --- |
| learn.webp | Jorge Royan | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Commons](https://commons.wikimedia.org/wiki/File:Austria_-_Admont_Abbey_Library_-_1307.jpg) | 4,805,826 | 436,572 | 1600 × 1070 |
| pray.webp | James Chan | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) | [Commons](https://commons.wikimedia.org/wiki/File:Bible-706641.jpg) | 3,311,125 | 115,212 | 1067 × 1600 |
| formation.webp | H. Zell | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) | [Commons](https://commons.wikimedia.org/wiki/File:Abbaye_Saint-Michel_de_Cuxa_-_Cloister_01.jpg) | 24,919,123 | 689,902 | 1600 × 1059 |
| catechism.webp | MPSchneiderLC | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:Catechism_of_the_Catholic_Church_in_front_of_a_tree.jpg) | 3,359,344 | 389,128 | 1600 × 1600 |
| news.webp | Timothy A. Gonsalves | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:Peters_Square_Sunrise_Vatican_Rome_Sep19_R16_01827.jpg) | 7,885,719 | 176,364 | 1600 × 1067 |
| indulgences.webp | Alvesgaspar | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:S._Pietro_May_2022-15.jpg) | 29,623,311 | 686,144 | 1600 × 1172 |
| holy-orders.webp | Vít Kobza | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:Pavel_Konzbul,_biskupsk%C3%A9_sv%C4%9Bcen%C3%AD_01.jpg) | 2,404,710 | 327,230 | 1600 × 1068 |
| baptism.webp | NancyHeise | Public domain | [Commons](https://commons.wikimedia.org/wiki/File:Baptism_in_a_Catholic_Church_DSC02749.JPG) | 2,884,551 | 165,554 | 1600 × 1200 |
| confirmation.webp | Feldbrahi | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:Firmung_Neviges_2022.jpg) | 3,276,800 | 159,240 | 1600 × 1064 |
| eucharist.webp | Nheyob | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:Saint_John_Neumann_Church_(Sunbury,_Ohio)_-_monstrance_holding_Christ_in_the_Eucharist_during_adoration.jpg) | 2,665,905 | 523,074 | 1275 × 1600 |
| reconciliation.webp | Bjankuloski06 | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) | [Commons](https://commons.wikimedia.org/wiki/File:Confessional,_St_Mary%27s_Catholic_Church,_Northcote.jpg) | 22,520,700 | 262,932 | 1600 × 1067 |
| anointing.webp | The Metropolitan Museum of Art | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) | [Commons](https://commons.wikimedia.org/wiki/File:Chrismatory_MET_DT231367.jpg) | 1,452,527 | 185,490 | 1600 × 1280 |
| matrimony.webp | H. Michael Miley | [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0) | [Commons](https://commons.wikimedia.org/wiki/File:Wedding_cord_ceremony.jpg) | 4,521,676 | 204,002 | 1600 × 1067 |

Total original-file sizes: **113,631,317 bytes**. Deployed WebP total: **4,320,844 bytes**. Reduction against source originals: **109,310,473 bytes (96.2%)**. These are asset-storage savings, not a promise about browser transfer or hosting charges.

## Context and intentional limitations

- Holy Orders depicts the actual Catholic episcopal consecration of Pavel Konzbul in Brno, 29 June 2016, photographed by Vít Kobza. It illustrates Holy Orders through its episcopal degree; do not label it a priestly or diaconal ordination.
- Baptism and Confirmation show actual Catholic rites. The wedding cord photo illustrates a marriage-liturgical custom, not a universal requirement for Matrimony.
- The Anointing image is explicitly symbolic: a historic French chrismatory from The Metropolitan Museum of Art. It does not depict a sick person being anointed or establish which oil is presently held in it.
- Catechism depicts the Canadian edition; it is not a screenshot of official Vatican text. Pray is a generic devotional photograph, not a claim about a particular Catholic Bible translation.
- Indulgences depicts Saint Peter’s dome for visual context; it does not imply that visiting the pictured place automatically obtains an indulgence.
- All source/creator/license metadata above was verified from the source description metadata on the review date. Original WebP assets were visually inspected in a contact sheet for subject accuracy and quality. No source is claimed to endorse Daily Oratory.
- Existing unprovenanced chapel-library asset was not reused. Small icons, logos, sprites and unrelated images were intentionally untouched.

## Verification

Sharp successfully decoded all thirteen final assets. Maximum dimension is 1600px, no upscaling, no oversized PNG/JPEG added. The integration owner must run repository images:check, lint, typecheck, build and affected-route crop/loading/credit checks before release.
