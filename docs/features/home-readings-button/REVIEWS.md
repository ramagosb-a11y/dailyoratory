# Reviews — homepage readings button

Revision r1, 2026-11-01.

Independent reviewer readings_button_review inspected the existing implementation, proposed direction, actual code diff and rendered desktop/mobile screenshots. Design and code approved: no blocking findings. Ivory label minimum contrast against lightest navy gradient stop calculated at 11.29:1. Decorative icons remain subordinate to the readable two-line label. Dedicated variant leaves shared theme/action styles unchanged.

Browser verification by implementation owner: 1440/768/390/320 widths, 200% root text, focus against all eight simulated liturgical background colors, reduced-motion transform suppression, full accessible name, preserved destination, and successful navigation. No browser runtime errors. Evidence: output/playwright/home-readings-button/report.json and context screenshots. These are targeted checks, not a complete assistive-technology certification.

Label, href, reflection_open event and parameters unchanged. No new theological content, analytics, personal input, data storage, images or dependencies.

## Revision r2 review

Owner requested exact original size because r1 made the block uneven. Independent reviewer readings_button_review inspected the revised component and finish-only CSS and approved subject to browser comparison. Original shared layout restored, no custom width/padding/font/display/min-height changes; decorative chevron is absolute within original padding. Browser comparison temporarily replaced only the class with the original shared class and asserted exact width/height equality, passing at 1440, 768, 390 and 320px. Actual height is 50px throughout; desktop width 249.5px, mobile widths 350px/280px. 200% text, eight liturgical backgrounds, focus/reduced-motion and navigation also pass. Evidence: output/playwright/home-readings-button-r2/report.json and screenshots. No runtime errors.
