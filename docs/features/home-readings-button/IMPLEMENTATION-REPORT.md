# Implementation report — homepage readings button

Revision r1; 2026-11-01; implemented and independently reviewed locally. Owner requested the screenshot-identified Daily Readings and Reflections button stand out and look stunning.

Added a dedicated navy/ivory/gold button variant with existing serif typography, small decorative open-book SVG, arrow medallion, inset border, depth and restrained hover/pressed treatment. At narrow widths the label wraps naturally. Focus has two-color separation; reduced motion disables transitions and translation. Shared buttons, liturgical backgrounds and saint card are unchanged. Visible/accessibility label, destination, analytics event/parameters and all theological copy are unchanged.

Independent reviewer readings_button_review approved both actual code and desktop/mobile screenshots with no blockers. Label contrast minimum 11.29:1. Lead browser checks passed at 1440, 768, 390, 320px; 200% text; focus across eight simulated liturgical colors; reduced motion; correct navigation and no runtime errors. Lint, typecheck, production build, build image/client-store guards, rendering postbuild guard and diff whitespace checks passed.

Evidence: output/playwright/home-readings-button/{before.png,after-1440-context.png,after-390-context.png,focus-mobile-context.png,report.json}. Browser reproduction: node scripts/check-home-readings-button.cjs (uses existing development server 3014 for the updated source and production 3022 for initial comparison).

The verified production build is served locally at http://127.0.0.1:3022/. Refresh the homepage and view Today in the Church. No deployment, commit or push performed. Existing eight-page redesign and unrelated work preserved. No new image, dependency, storage or service introduced.

## Revision r2 — original dimensions restored

Owner correction supersedes the large r1 design. Restored original shared layout and label typography; removed inline icons and widened/taller styling. Retained navy gradient, fine gold border/inset line, ivory type, small in-padding chevron and restrained depth. Hover no longer lifts the button. Exact browser width/height comparisons to the original shared class pass at 1440/768/390/320px, with 50px height and original responsive sizing. Lint/typecheck passed; independent review approved. Browser evidence is now output/playwright/home-readings-button-r2/. Production-build log: output/home-readings-button-r2-build.log. No production deployment or change to other controls.
