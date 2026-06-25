# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, hot reload)
npm run build      # Production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

No test suite is configured.

## Architecture

This is a single-page React portfolio site built with Vite, Tailwind CSS, and Three.js.

**Data flow:** All portfolio content lives in `src/data.jsx` as a single exported object. `App.jsx` imports it and passes it as a `data` prop to every section component. To add or update portfolio content (projects, skills, certifications, awards, etc.), edit only `src/data.jsx`.

**Layout structure in `App.jsx`:**
- `ThreeBackground` renders a fixed, full-viewport Three.js canvas (`z-index: -1`) via `.full-screen-background-container` in `index.css`. It stays fixed while the user scrolls.
- The main content sits at `z-index: 10` above the canvas.
- Sections are ordered: Hero → TypewriterEffect → About → Skills → Projects → Education → Certifications → HonorsAndAwards → Contact, with `Footer` at the bottom.

**`ThreeBackground` (`src/components/ThreeBackground.jsx`):** Uses `@react-three/fiber` with 40,000 animated particles that cycle through blue hues. The particle group revolves and moves forward continuously, looping seamlessly. Color is computed per-particle per-frame using `useFrame` — avoid adding expensive operations inside this loop.

**Styling:** Tailwind CSS with custom tokens defined in `tailwind.config.js`:
- `primary-dark` (#000000), `component-bg` (#0a0a0a), `secondary-light` (#cbd5e0), `accent-blue` (#3b82f6)
- Custom fonts: `Inter` (sans) and `Fira Code` (mono)
- Custom `blink` animation for the typewriter cursor

**Path alias:** `@` resolves to `./src` (configured in `vite.config.js`).

**No routing** — this is a single scrollable page with anchor-based navigation via section `id` attributes.
