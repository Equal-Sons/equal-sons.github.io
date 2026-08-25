# Equal Sons website

## Image assets

Responsive source images live under `src/assets/images` and are imported by the
data or component that uses them. Add the imagetools query to each import:

```ts
import image from "../assets/images/example.jpg?responsive";
```

Pass the imported object to `ResponsiveImage` or store it directly in page data.
The centralized policy emits 480/960/1440/1920 widths in AVIF, WebP, and the
source image's fallback format.

Vite generates the variants during the build and caches transforms under
`node_modules/.cache/imagetools`. Generated files are not committed.
