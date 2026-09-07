# Image optimization workflow

Apply this workflow whenever a feature adds or changes images, before deploying.

## Inventory

- Inspect `.png`, `.jpg`, and `.jpeg` assets in `public/`, `src/`, and feature-specific asset folders.
- Identify files larger than 1 MB.
- Do not reconvert WebP or AVIF files.
- Leave favicons, tiny icons, sprites, logos, and images requiring exact pixel fidelity unchanged unless their use has been reviewed.

## Convert

- Use the existing `sharp` dependency when available.
- Prefer WebP for general-purpose images at quality 85–90.
- Use AVIF for photographic or large artwork at quality 75–85 when browser support is verified.
- Preserve dimensions, aspect ratio, transparency, and visual framing. Never upscale.
- Keep the optimized file beside the source with the same base name and the new extension.

## Update references

- Search source, components, CSS, metadata, route data, JSON, and Markdown for every old image path.
- Update `next/image`, `<img>`, CSS backgrounds, Open Graph metadata, structured data, and dynamic image paths.
- Confirm that deployed code does not reference an original file that will be removed.
- Remove an oversized original from the deployment path only after references are updated. Keep an editable source copy outside the deployment path when needed.

## Validate

- Run the repository's lint, type-check, test, and production build commands.
- Test every affected route locally and check for image 404s, hydration errors, broken layouts, unexpected cropping, and lost transparency.
- Compare optimized images with their originals for visual quality.
- Report converted files, original and optimized sizes, bytes saved, percentage saved, and intentionally unchanged files.
- Stop before deployment if validation fails.

## Deploy

- Deploy only the verified build to the requested environment.
- Verify deployment status, affected live routes, and optimized image responses in Production.
- Recheck Vercel Deployment Storage after its usage calculation refreshes.
