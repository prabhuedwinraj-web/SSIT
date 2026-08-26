# SechPoint SSIT — Homepage (React)

React (Vite) port of the `SSIT Homepage v2.dc` design canvas.

## Run

```bash
npm install
npm run dev      # http://localhost:5180
```

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build
```

## What's inside

- `src/App.jsx` — the full homepage. The `.dc` template's `{{ }}` bindings,
  `sc-if`/`sc-for` directives and its `DCLogic` state class are ported to React
  state + hooks. A small `st()` helper turns the design's inline CSS strings
  into React style objects so styling stays 1:1 with the original.
- `src/liquid-grid.js` — the hero's interactive "liquid grid" canvas
  (a `<liquid-grid>` web component), unchanged from the source design.
- `src/index.css` — fonts, scroll-reveal animation, keyframes, and the
  `:hover` rules that replace the design's `style-hover` attribute.
- `public/assets/sechpoint-logo.svg` — brand logo.

## Sections (in order)

Header + mega-menu → Hero → Opening statement → 01 Value pillars (interactive,
Pillar 2 auto-plays Identify→Recover) → 02 What we deliver → 03 Business
outcomes → 04 Proof (placeholders, not for publication) → 05 FAQ (accordion)
→ Closing CTA → Footer.

## Configurable props (`<App />`)

- `accent` (default `#00baeb`)
- `lifecycleAutoplay` (default `true`)
- `showProof` (default `true`)
