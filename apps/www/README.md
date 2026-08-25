# temporary-homepage
A temporary homepage until we decide how we want to market ourselves.

## Image assets

Responsive variants are committed so deployment builds do not regenerate them.
After changing a source image, run:

```sh
pnpm --filter @equal-sons/www generate:images
```

Commit both `public/assets/generated` and `src/generated/responsive-images.ts`.
Vite optimizes the remaining raster assets during production builds.
