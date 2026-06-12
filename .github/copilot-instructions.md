# Copilot instructions for `stelf-site`

## Project shape

- This is an Astro + Starlight documentation site.
- Content lives in `src/content/docs/` and becomes routes from file names.
- `src/content.config.ts` defines the docs collection with Starlight's `docsLoader()` and `docsSchema()`.
- `astro.config.mjs` defines the Starlight sidebar and site metadata.

## Commands

- `npm install` — install dependencies.
- `npm run dev` / `npm start` — start the local dev server.
- `npm run build` — build the production site.
- `npm run preview` — preview the built site locally.
- `npm run astro -- check` — run Astro's checks.
- `npm run astro -- --help` — see available Astro CLI commands.

## Validation

- There is no dedicated test script in `package.json`.
- There is no dedicated lint script in `package.json`.
- Use `npm run astro -- check` for the closest project validation, and `npm run build` for the full production build path.

## Content conventions

- Docs pages are MDX files with frontmatter.
- Most pages use `title`; some also use `description`.
- `guides/` pages are task-oriented walkthroughs.
- `reference/` pages are concise explanatory pages.
- `reference/Archive/` contains legacy/reference content and still follows normal Starlight content rules.
- Keep routes aligned with filenames; renaming a file changes its URL.

## Site structure

- `astro.config.mjs` controls the visible navigation, so new doc sections usually require updating the sidebar there.
- `src/content/docs/reference/` uses automatic sidebar generation for the directory.
- Images and other local assets belong in `src/assets/`; static files belong in `public/`.

## Writing style

- Follow the existing Starlight tone: concise, direct, and documentation-first.
- Use MDX when you need embedded components or richer formatting.
- Prefer updating existing docs structure rather than introducing new site patterns unless the change requires it.
