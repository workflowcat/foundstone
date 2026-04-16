# Foundstone Capital — site

Production site for Foundstone Capital Ltd (Limassol, Cyprus).
Live at [foundstonecap.com](https://foundstonecap.com).

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (inline theme, custom stone + amber palette)
- **framer-motion** for scroll-triggered animations
- **EB Garamond · Playfair Display · Inter** via `next/font`
- **Vercel** for hosting + analytics

Everything in the site is statically prerendered. No backend, no database, no API routes.

## Structure

```
src/
├── app/                          # Next.js App Router routes
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout + metadata
│   ├── globals.css               # Tailwind theme tokens
│   ├── icon.svg                  # Favicon (serif F with amber rule)
│   ├── opengraph-image.tsx       # OG card generator (1200×630)
│   ├── robots.ts / sitemap.ts    # SEO
│   ├── about/                    # Company origin story
│   ├── services/                 # 9 practice areas + engagement shapes
│   ├── contact/                  # Email CTA, registered office, HE number
│   ├── notes/                    # Long-form essays (4 notes)
│   ├── privacy/ · terms/         # Legal
│   └── _not-found/
├── components/
│   ├── logo.tsx                  # Single source of truth for wordmark
│   ├── navigation.tsx            # Fixed top nav with scroll state
│   ├── footer.tsx                # Three-column footer with registration
│   ├── animate.tsx               # FadeIn / StaggerChildren / StaggerItem
│   ├── geometric-bg.tsx          # Hero geometric field + StrataDivider
│   ├── note-icons.tsx            # 4 icon SVGs for the notes index
│   ├── note-illustrations.tsx    # Large in-note illustrations
│   ├── note-figure.tsx           # Image-with-caption wrapper
│   ├── constraint-illustration.tsx
│   ├── engagement-diagrams.tsx   # Advisory/Embedded/Project/Transition
│   └── scaling-illustrations.tsx
└── data/
    ├── practices.ts              # 9 practice areas (name, tagline, deliverables)
    └── notes.ts                  # Note index (single source of truth)
```

## Development

```bash
pnpm install
pnpm dev                          # http://localhost:3000
pnpm build && pnpm start          # production build
pnpm lint
```

The project is committed to `pnpm` — `pnpm-lock.yaml` is the lockfile. Don't mix in `npm install`.

## Deployment

Pushes to `main` auto-deploy to production via Vercel's GitHub integration.

The production domain `foundstonecap.com` is served by the Vercel project `foundstone` (team `workflowcats-projects`). DNS is at Cloudflare with `A @ 216.198.79.1` and `CNAME www cname.vercel-dns.com`, both **DNS only** (no Cloudflare proxy).

### Environment variables

None currently. The site is fully static; all content lives in the repo.

### Preview deployments

Every push to any branch produces a Vercel preview URL. Open the PR on GitHub and Vercel will post the preview link as a comment.

## Content editing

Most edits don't require touching React. The frequently-edited content is isolated:

| File | What lives here |
|---|---|
| `src/data/practices.ts` | The 9 practice areas, their taglines and deliverables |
| `src/data/notes.ts` | Note index: date, title, excerpt, read time |
| `src/app/notes/<slug>/page.tsx` | The long-form article body |
| `src/app/about/page.tsx` | Origin story |
| `src/app/contact/page.tsx` | Registered office, email, HE number |

Layout, navigation, and the wordmark live in `src/components/`. Theme colors and fonts are in `src/app/globals.css` under `@theme inline`.

## Brand

- Wordmark: `FOUNDSTONE CAPITAL` in EB Garamond small caps, tracking `0.18em`, cream on stone. Used site-wide via `<Logo>`.
- Palette: cold stone backgrounds (`#0A0A0F` → `#44444F`), warm cream text (`#E8E6E3`), amber accent (`#C49A6C`).
- No images of people, no logos of clients, no pop-ups.

## License

All content copyright Foundstone Capital Ltd. Code is private; the repo is not open-source.
