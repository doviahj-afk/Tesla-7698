# Tesla Story — Design System

A dark, cinematic, Apple-product-page-style scroll article on Tesla's history and present.

## Vibe
Full-bleed imagery, huge type, deep black backgrounds, scroll-triggered reveals (fade + rise + subtle scale), sticky pinned sections. Minimal chrome. Every section breathes. Dramatic like Tesla's own site meets Apple's storytelling scroll.

## Color
- `--bg`: #000000 (pure black base)
- `--bg-soft`: #0a0a0a / #111111 (section variation)
- `--fg`: #f5f5f7 (Apple off-white text)
- `--muted`: #86868b (secondary text, Apple gray)
- `--accent`: #e31937 (Tesla red — used sparingly for emphasis, numbers, links)
- Gradients: radial black-to-charcoal glows behind hero text; image bottom fades to black for seamless section joins.

## Typography
- Font: **Inter Display / system SF stack** — actually use a clean geometric sans. Load via Google Fonts: use **"Manrope"** for display + body (avoids overused Inter, still Apple-clean).
- Hero headlines: clamp(2.8rem, 8vw, 7rem), weight 800, tight tracking (-0.03em), line-height 1.02.
- Section titles: clamp(2rem, 5vw, 4rem), weight 700.
- Body: 1.125–1.375rem, weight 400, line-height 1.6, muted color, max-width ~44ch/60ch.
- Eyebrows/labels: uppercase, 0.85rem, letter-spacing 0.2em, accent or muted.
- Big stat numbers: clamp(3rem, 10vw, 8rem), weight 800.

## Layout
- Single long scroll page. Full viewport height hero sections with full-bleed images.
- Alternating: full-bleed image sections (text overlaid, centered or bottom-left) and centered editorial text blocks on black.
- Timeline: vertical center line with alternating year cards.
- Stats band: 3-4 large animated counters.
- Max content width 1200px for text sections; images go edge to edge.
- Generous vertical rhythm: sections min-h-screen or py-32.

## Motion (Motion library)
- Scroll reveal: opacity 0→1, y 40→0, on `whileInView`, once, ease-out, ~0.7s, staggered children.
- Hero: parallax image scale (useScroll + useTransform), headline fades/rises on load.
- Pinned/sticky image sections with text that changes on scroll where tasteful.
- Sticky top nav bar: transparent → blurred black on scroll.
- Smooth, slow, confident. No bouncy micro-interactions.

## Components
- Sticky glass nav (logo wordmark "TESLA" letter-spaced + progress).
- Full-bleed `HeroSection`, `ImageStorySection`, `TextSection`, `Timeline`, `StatBand`, `Footer` with source credits + image source links.

## Imagery
Local /images: roadster.jpg, model3.jpg, cybertruck.jpg, gigafactory.jpg, optimus.jpg, musk.jpg, models.jpg. All darkened with overlays for text legibility.

## Footer
Sources cited with real external hyperlinks (Wikipedia, Tesla.com, image credits to Wikimedia Commons).
