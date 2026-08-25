# Unused template source

This directory preserves pages, components, layouts, data, hooks, and types
from the purchased frontend template that are not reachable from the active
`src/main.tsx` import graph.

Files retain their original path beneath `src/`. To restore one, move it back
to the matching location under `apps/www/src/`, along with any archived
dependencies it imports.

This directory is intentionally outside the app's TypeScript and Vite build.
