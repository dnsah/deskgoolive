
## Project
Deskgoo is an animated marketing site built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Motion (Framer Motion).

## Commands
- `npm install` to install dependencies
- `npm run dev` to start the dev server at http://localhost:3000
- `npm run build` to create a production build
- `npm run lint` to lint the code

## Structure
- `app/`: layout, global styles (Tailwind v4 theme), and the page
- `components/`: one file per section, plus shared primitives (`Reveal`, `Magnetic`)
- `lib/`: shared helpers
- `public/`: static assets

## Conventions
- Use TypeScript and functional React components.
- Every animation must respect `prefers-reduced-motion`.
- Animate `transform` and `opacity` where possible for performance.
- Interactive elements must be keyboard accessible with visible focus states.
- Run `npm run lint` and `npm run build` before submitting changes.
