# Rhodah Jerono — Portfolio

Warm-cream personal portfolio for Rhodah Jerono (software × data), implemented in
**React + Vite + TypeScript** from the Claude Design handoff (`Rhodah Portfolio.dc.html`).

## Run

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/App.tsx` — page composition (Nav → Hero → About → Experience → Work → Archive → Footer)
- `src/components/` — one file per section
- `src/data/portfolio.ts` — **all copy and links** (skills, experience, featured work, archive, socials)
- `src/index.css` — design tokens + all section styles
- `public/assets/` — sticker illustrations + favicon
- `public/uploads/` — résumé PDF

## Editing content

Everything user-facing lives in `src/data/portfolio.ts`. Notable spots:

- **Social links** — `SOCIALS`. GitHub is real; LinkedIn/Twitter/Instagram are placeholders
  until the real URLs are supplied.
- **Résumé / email** — `CONTACT`.
- **KSL card image** — the featured "KSL Recognition Model" card shows a striped placeholder
  until a real screenshot is added. In `src/components/Work.tsx`, set `KSL_IMAGE` to a path
  (e.g. `'/assets/ksl-model.png'`) and drop the file in `public/assets/`.

## Theme

The design ships an accent-color knob. Change `--accent` in `src/index.css` (`:root`):

- Moss green `#5E7A4E` (default)
- Terracotta `#B4552D`
- Ochre `#B08A2E`
