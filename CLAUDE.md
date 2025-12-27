# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo for Equal Sons containing:

- **www**: Legacy React + Vite marketing website (being phased out)
- **www-astro**: New Astro-based marketing website with React islands for interactivity
- **www-form-api**: Cloudflare Workers API for form submissions

The project uses pnpm workspaces, Turborepo for build orchestration, and Biome for linting/formatting.

## Repository Structure

```
apps/
├── www/                    # LEGACY: React + Vite frontend (being phased out)
├── www-astro/             # NEW: Astro + React islands frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/        # Headers, footers (React islands)
│   │   │   └── back-to-top.tsx # Scroll-to-top button
│   │   ├── components-react/  # All migrated React components
│   │   ├── layouts/
│   │   │   └── BaseLayout.astro # Main layout with global styles
│   │   ├── pages/             # Astro pages (file-based routing)
│   │   │   ├── index.astro    # Home
│   │   │   ├── services.astro # Services
│   │   │   ├── contact.astro  # Contact
│   │   │   └── 404.astro      # Not found
│   │   ├── styles/
│   │   │   └── global.scss    # Global SCSS imports
│   │   ├── data/              # Static data and content
│   │   ├── hooks/             # Custom React hooks
│   │   ├── types/             # TypeScript type definitions
│   │   └── utils/             # Utility functions
│   ├── public/                # Static assets (images, CSS, favicons)
│   └── .env                   # Environment variables (PUBLIC_CONTACT_SERVER_URL, PUBLIC_TURNSTILE_KEY)
│
└── www-form-api/          # Cloudflare Workers API (Hono framework)
    ├── src/
    │   ├── index.ts       # Main API routes and handlers
    │   ├── bindings.ts    # Cloudflare bindings type definitions
    │   ├── Emailer.ts     # Email sending service (SendGrid)
    │   ├── emailGenerator.ts  # Email template generation
    │   ├── AppError.ts    # Custom error handling
    │   └── middlewares.ts # Hono middleware
    ├── wrangler.jsonc     # Cloudflare Workers configuration
    └── .dev.vars          # Local development secrets
```

## Development Commands

**Monorepo-level commands** (run from root):

```bash
pnpm install              # Install all dependencies
pnpm dev                  # Start all apps in development mode
pnpm build                # Build all apps
pnpm lint                 # Run Biome linting on all apps
pnpm test                 # Run tests (if configured)
pnpm deploy               # Deploy all apps
```

**Frontend - Legacy React (apps/www)** - DEPRECATED:

```bash
cd apps/www
pnpm dev                  # Start Vite dev server (default: http://localhost:5173)
pnpm build                # TypeScript check + Vite production build
pnpm lint                 # Run ESLint
pnpm preview              # Preview production build locally
```

**Frontend - Astro (apps/www-astro)** - CURRENT:

```bash
cd apps/www-astro
pnpm dev                  # Start Astro dev server (default: http://localhost:4321)
pnpm build                # Build for production
pnpm preview              # Preview production build locally
```

**Form API (apps/www-form-api)**:

```bash
cd apps/www-form-api
pnpm dev                  # Start Wrangler dev server (default: http://localhost:8787)
pnpm deploy               # Deploy to Cloudflare Workers production
```

## Architecture

### Frontend - Astro (www-astro) - CURRENT

- **Framework**: Astro 5 with React integration
- **Rendering**: Static Site Generation (SSG) with React islands for interactivity
- **Routing**: File-based routing (no React Router needed)
- **Styling**: Bootstrap 5 + SASS with global styles
- **Form Handling**: React Hook Form + Zod validation (React island)
- **Security**: Cloudflare Turnstile for bot protection
- **Key Libraries**:
  - GSAP for animations
  - WOW.js for scroll animations
  - React Scroll Parallax for effects
  - React Slick for carousels
  - All React components work as islands

**React Islands Strategy**:

- `client:load` - Interactive components that need immediate hydration (Header, BackToTop)
- `client:visible` - Components that can wait until visible (ContactForm, FAQs, Marquee)
- No directive - Static Astro components (Footer, Breadcrumbs)

**Important**: Components in `src/components-react/` are all migrated from the legacy React site. They use regular `<a>` tags instead of React Router's `<NavLink>`.

### Frontend - Legacy React (www) - DEPRECATED

This is the old React + Vite site. It's kept for reference but **use www-astro for all new work**.

### Form API (www-form-api)

- **Framework**: Hono (lightweight web framework)
- **Runtime**: Cloudflare Workers
- **Validation**: Zod schemas with `@hono/zod-validator`
- **Email**: SendGrid API for transactional emails
- **Security**: Cloudflare Turnstile verification on `/submit` endpoint

The API exposes:

- `GET /` - Health check endpoint
- `POST /submit` - Contact form submission with Turnstile validation

**Important**: The router uses chained routing for proper RPC type inference. When adding routes, be aware that they inherit path context from previous handlers.

### Type Sharing

The www-form-api exports `ContactApiType` (apps/www-form-api/src/index.ts:101) which can be used for type-safe API clients in the frontend.

## Environment Configuration

**Astro Frontend (.env in apps/www-astro)**:

```bash
PUBLIC_CONTACT_SERVER_URL="http://localhost:8787"  # Form API endpoint
PUBLIC_ENV="development"                            # Environment name
PUBLIC_TURNSTILE_KEY="..."                          # Cloudflare Turnstile site key
```

**Note**: Astro uses `PUBLIC_` prefix for client-side environment variables (not `VITE_`).

**Legacy React Frontend (.env in apps/www)** - DEPRECATED:

```bash
VITE_CONTACT_SERVER_URL="http://localhost:8787"
VITE_ENV="development"
VITE_TURNSTILE_KEY="..."
```

**API (.dev.vars in apps/www-form-api)**:
Contains secrets. For production, these are configured via Cloudflare Workers secrets.

## Code Style

- **Formatting**: Biome with tab indentation, double quotes
- **Imports**: Use import type syntax (enabled via Biome rule)
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **Non-null assertions**: Allowed (Biome rule disabled)

Run `pnpm lint` at root to check all packages.

## Deployment

- **Frontend**: Deployed to Vercel (configured via vercel.json)
- **API**: Deployed to Cloudflare Workers
  - Development: Uses local wrangler.jsonc vars
  - Production: Uses `env.production` config with custom domain `www-form-api.equalsons.com`

## Common Patterns

### Adding a New Page to Astro Site

1. Create `.astro` file in `apps/www-astro/src/pages/` (e.g., `about.astro`)
2. Import `BaseLayout` and necessary components
3. Use React components as islands with appropriate `client:*` directives
4. File-based routing means `/about.astro` → `/about` URL

Example:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import HeaderThree from '../components/layout/headers/header.tsx';
import FooterSeven from '../components/layout/footer/footer-seven.tsx';
---

<BaseLayout title="About" description="About Equal Sons">
 <HeaderThree client:load />
 <!-- Your content here -->
 <FooterSeven />
</BaseLayout>
```

### Adding React Components to Astro

1. Add component to `apps/www-astro/src/components-react/`
2. Ensure it uses `<a href="">` instead of `<NavLink to="">`
3. Import relative paths correctly (one level deeper than in React app)
4. Use appropriate `client:*` directive when importing in `.astro` files

### Adding API Endpoints

1. Add route to chain in `apps/www-form-api/src/index.ts`
2. Create Zod schema for validation
3. Export updated type for frontend consumption
4. Remember chained routing inherits paths from previous handlers

### Form Integration

Forms use React Hook Form + Zod with Turnstile protection as React islands. See `apps/www-astro/src/components-react/contact/contact-form.tsx` for reference implementation.
