# Deskgoo — Animated Studio Website

Animated marketing site for Deskgoo built with **Next.js 16 + React 19 + Tailwind CSS v4 + Motion (Framer Motion)**.
Design language inspired by Linear (dark theme, restraint), Stripe (gradient accents), and Trionn / Lazarev / Lama Lama (bold type, marquees, playful motion).

<img width="1350" height="611" alt="image" src="https://github.com/user-attachments/assets/4b1518ea-0644-4400-afbc-f135d42e9c65" />

Live demo: https://deskgoo-flax.vercel.app/

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- Motion (Framer Motion)
- TypeScript

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # lint the code
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

## Reusable components

- `Reveal` (`components/Reveal.tsx`): scroll-triggered fade and slide-in wrapper for any element.
- `Magnetic` (`components/Magnetic.tsx`): makes buttons and links follow the cursor with a magnetic pull.
- Preloader (`components/???.tsx`): 0→100% counter with a logo reveal on first load.
- Marquee (`components/???.tsx`): angled, infinitely scrolling text strip.

## Structure

- `app/` — layout (fonts, metadata), globals.css (Tailwind v4 theme, keyframes, helpers), page
- `components/` — one file per section + shared primitives (`Reveal`, `Magnetic`)

Edit copy/stats/testimonials directly inside the matching component file.

## Contributing

Issues and PRs welcome. Run `npm run lint` before opening a PR.

## License

MIT
