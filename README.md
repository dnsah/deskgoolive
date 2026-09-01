# Deskgoo — Animated Studio Website

Animated marketing site for Deskgoo built with **Next.js 16 + React 19 + Tailwind CSS v4 + Motion (Framer Motion)**.
Design language inspired by Linear (dark theme, restraint), Stripe (gradient accents), and Trionn / Lazarev / Lama Lama (bold type, marquees, playful motion).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Highlights

- Preloader with 0→100% counter and logo reveal
- Custom cursor follower (blend-difference ring, expands over links)
- Hero: masked line-by-line headline reveal, drifting gradient orbs, parallax, floating tech chips, magnetic CTAs
- Angled infinite marquee strip
- Services: full-width hover rows with fill sweep, rotating arrow, tags
- Statement: scroll-driven word-by-word text reveal
- Process cards, animated stat counters, testimonial cards
- CTA with glow + magnetic email button, footer with giant outlined wordmark
- Reduced-motion support, mobile menu with circular clip reveal

## Structure

- `app/` — layout (fonts, metadata), globals.css (Tailwind v4 theme, keyframes, helpers), page
- `components/` — one file per section + shared primitives (`Reveal`, `Magnetic`)

Edit copy/stats/testimonials directly inside the matching component file.
