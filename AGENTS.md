<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Required image workflow

When a feature adds or changes images, follow [`.codex/workflows/image-optimization.md`](.codex/workflows/image-optimization.md) before deployment. Convert eligible oversized PNG/JPEG assets to high-quality WebP or AVIF, update every reference, validate locally, and report storage savings before deploying.
