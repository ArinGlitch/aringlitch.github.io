# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Personal portfolio website built with Vite, React, TypeScript/JavaScript, Tailwind CSS, and shadcn/ui. Deployed to GitHub Pages via GitHub Actions.

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server at localhost:8080
npm run build  # Production build to ./dist
npm run lint   # Run ESLint on TypeScript files
npm run preview # Preview production build
```

## Architecture

### Entry Points
- `src/main.jsx` / `src/main.tsx` → `src/App.tsx` → `src/pages/Index.jsx`
- Active page components are in JSX; TSX versions are boilerplate templates

### Directory Structure
- `src/components/` - Custom section components (Hero, About, Education, Projects, Experience, Contact, Footer)
- `src/components/ui/` - shadcn/ui primitives (do not edit directly; managed via `npx shadcn-ui@latest add <component>`)
- `src/pages/` - Route pages (Index, NotFound)
- `src/hooks/` - Custom React hooks (use-mobile, use-toast)
- `src/lib/utils.ts` - Utility functions including `cn()` for className merging
- `public/assets/` - Static files (profile image, CV PDF)

### Path Aliases
`@/*` maps to `src/*` (configured in tsconfig.json and vite.config.ts)

### Styling
- Tailwind CSS with CSS variables for theming (defined in `src/index.css`)
- Custom accent colors: `accent-green` (#00ff88), `accent-cyan` (#00ffff)
- Custom component classes: `.btn-primary`, `.btn-secondary`, `.section-padding`, `.project-card`, `.skill-tag`
- Font: Poppins (configured in tailwind.config.ts)

### Deployment
Pushes to `main` trigger automatic deployment to GitHub Pages via `.github/workflows/deploy.yml`.
