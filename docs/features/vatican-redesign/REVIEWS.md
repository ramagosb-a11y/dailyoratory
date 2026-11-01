# Four review/fix rounds

## Round 1 — baseline, 2026-10-31
Independent reviewers: vatican_design_review (UX/art direction), vatican_engineering_review (frontend/accessibility).

Findings: twenty equally weighted beige sections, text-only hero, imagery absent, oversized heading-only highlight tiles. Recommendations: architectural photo hero; tours near top; image/copy landmark spreads; compact highlights; real timeline; navy pilgrimage panel; quiet sources/FAQ. Preserve all content, official links, event parameters, anchor IDs and video consent boundary. Use real accurately identified photographs with credits. Implemented direction tracked in subsequent rounds.

## Round 2 — source review and fixes
Both independent reviewers confirmed original data/events/links preserved. Fixed generic focus rule overriding ivory hero outline, intro paragraph selector overriding Note typography, DIV anchor targets lacking sticky-header scroll margin, overlarge image sizes. Added distinct detail crop for second basilica tour and reversed museum spread.

## Round 3 — rendered mobile and source review
Both reviewers inspected screenshots and source. Tightened mobile hero (3:2 artwork, smaller action/decorative spacing). Displayed full Sistine ceiling in tour card with contain/mat. Added direct photo-credit links. Recaptured desktop evidence after a viewport capture timing issue; checked actual1425px screenshot width. Baseline browser comparison retains95 original headings and55 original links; no pre-consent iframe.

## Round 4 — desktop/tours/landmark visual review
Both independent reviewers approved desktop hero and Sistine panorama but found the second tour detail crop spilling into its label. Fixed overflow:hidden on tourArt. Added explicit high-contrast filled tour CTA styling. Their verdict: ready for local owner review after this fix and parent validation. Parent verifies final responsive presentation and crop boundaries. Reviews are visual/engineering, not independent theological certification.
