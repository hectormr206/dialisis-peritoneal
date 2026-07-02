# Icon design sources

`icon.svg` and `icon-maskable.svg` are the vector source of truth for every
icon file shipped under `public/` (favicons, Apple touch icons, Android/MS
tile icons, and the two `manifest.json` maskable entries). Both are 512x512
viewBox SVGs — a water drop with a heart, representing peritoneal dialysis
care.

## Palette

- Background gradient: `#2563eb` -> `#1d4ed8` (top-left to bottom-right),
  matching the app's accessible-blue accent token (`--section-*-accent`,
  skip-link, focus rings).
- Drop: `#ffffff`, with a `#dbeafe` highlight ellipse at 90% opacity.
- Heart: `#059669`.

## Two variants, two purposes

- `icon.svg` — the drop fills nearly the full 512x512 canvas edge-to-edge.
  Used for standard (non-maskable) icons: favicons, Apple touch icons,
  Android/MS tile icons.
- `icon-maskable.svg` — identical artwork, but wrapped in a
  `translate + scale(0.72) + translate` transform that shrinks it to a
  **72% safe-zone** centered in the canvas. This follows the
  [maskable icon spec](https://web.dev/articles/maskable-icon): OS icon
  masks (circle, squircle, rounded square, etc.) can crop up to ~20% off
  each edge, so anything meaningful has to stay inside the middle 80%
  circle. 0.72 gives extra margin beyond the strict minimum so the drop's
  highlight and the heart never get clipped on aggressive masks (e.g. iOS's
  circular mask). Used only for the two `icon-maskable-*.png` entries in
  `public/manifest.json` that declare `"purpose": "maskable"`.

## Regenerating the PNG/ICO set

Every file in `public/` derived from these sources is a rasterized PNG (or
an ICO container around one). To regenerate the full set:

1. Rasterize `icon.svg` at each of the sizes below (any SVG rasterizer
   works — e.g. a headless-browser screenshot via Playwright/Puppeteer
   navigated to the SVG, or a CLI tool like `resvg`/`sharp`/`svgexport`):
   - Favicons: 16, 32, 96 (`favicon-{size}x{size}.png`)
   - Android: 36, 48, 72, 96, 144, 192 (`android-icon-{size}x{size}.png`)
   - Apple touch: 57, 60, 72, 76, 114, 120, 144, 152, 180
     (`apple-icon-{size}x{size}.png`), plus a 512 export saved as both
     `apple-icon.png` and `apple-icon-precomposed.png`
   - MS tiles: 70, 144, 150, 310 (`ms-icon-{size}x{size}.png`)
   - PWA manifest: 512 (`icon-512.png`)
2. Rasterize `icon-maskable.svg` at 192 and 512
   (`icon-maskable-192.png`, `icon-maskable-512.png`) for the maskable
   entries in `public/manifest.json`.
3. Build `favicon.ico` by taking the 48px PNG rasterization of `icon.svg`
   and wrapping it in an ICO container (e.g. `png-to-ico` or ImageMagick's
   `convert favicon-48.png favicon.ico`) — a single 48px frame is enough
   for current browser requirements.

All generated PNGs/ICO live in `public/` and are referenced from
`public/index.html` (`<link rel="shortcut icon">`,
`<link rel="apple-touch-icon">`) and `public/manifest.json` (`icons`
array). Neither `icon.svg` nor `icon-maskable.svg` is imported or built by
webpack — they exist only as the editable source for this regeneration
recipe.
