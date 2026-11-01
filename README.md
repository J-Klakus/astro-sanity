# Astro + Sanity landing page starter

An Astro 5 landing page boilerplate with content managed in Sanity. Pages are built from a `page` document and rendered block by block, so editors can compose layouts without touching code. The repo also includes a blog, global site settings, SEO metadata, a sitemap, and a Sanity Studio.

## What is included

- Dynamic pages generated from Sanity `page` documents
- A block renderer that maps each Sanity section `_type` to an Astro component
- Blog detail pages with Portable Text, author, categories, and images
- Global site settings for title, description, and tagline
- Canonical, Open Graph, and Twitter meta tags
- Sitemap and `robots.txt`
- Sanity Studio with a custom desk structure for globals, blogs, and pages
- Tailwind CSS 4, Poppins and Inter fonts, `astro-icon`
- Draft content in development, published content in production

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Astro 5.16 |
| CMS | Sanity 3.91 with `@sanity/astro` 3.2 |
| Styling | Tailwind CSS 4 |
| Language | TypeScript |
| Content rendering | `astro-portabletext` |
| Icons | `astro-icon` |
| Sliders | Glide.js |
| Deployment | Any static host, Vercel config included |

## Requirements

- Node.js 20 or newer
- pnpm
- A Sanity project and dataset

## Quick start

```bash
pnpm install
cd sanity
pnpm install
cd ..
```

### 1. Connect your Sanity project

The repo points at the original demo project `cbebllo4` with the `production` dataset. Replace it in all three places:

- `astro.config.mjs`
- `sanity/sanity.cli.ts`
- `sanity/sanity.config.ts`

Also update `site` in `astro.config.mjs` to your production URL. The sitemap, canonical tags, and `robots.txt` use that value.

Add `http://localhost:4321` to the CORS origins for your project in the Sanity dashboard.

### 2. Start the Studio

```bash
cd sanity
pnpm dev
```

The Studio runs at <http://localhost:3333> by default.

### 3. Create the required content

The site expects a few singleton documents before it will render:

- **Site Settings**: title, description, tagline
- **Navbar**: menu items and call-to-action button
- **Footer**: description, link sections, and social links
- **Page** with the slug `index`: the home page

`src/pages/[...slug].astro` builds one route for every `page` document. A page with the slug `index` becomes `/`.

### 4. Start the site

```bash
pnpm dev
```

The site runs at <http://localhost:4321>.

### 5. Build

```bash
pnpm build
```

This runs `astro check` and then `astro build`. The static output goes to `dist/`.

## Content model

| Document | Purpose |
| --- | --- |
| `page` | Page title, description, slug, and an ordered `sections` array |
| `blogs` | Blog title, slug, author, categories, images, publish date, Portable Text body |
| `author` | Blog author name and image |
| `category` | Blog category title |
| `siteSettings` | Global title, description, and tagline |
| `navbar` | Navigation links and header button, read by `Navbar.astro` |
| `footer` | Footer copy, link columns, and social links, read by `Footer.astro` |

Shared object schemas in `sanity/schemaTypes/` include `Button`, `ImageText`, `testimonials`, and `blockContent`.

## How the page builder works

`src/pages/[...slug].astro` fetches every `page` document and passes its `sections` array to `src/shared/Page.astro`.

`Page.astro` eagerly imports every `.astro` file under `src/components/`, derives a component name from each path, and renders the component whose name matches the section `_type`. A section named `HeroVideo` in Sanity therefore renders `src/components/HeroVideo.astro`.

To add a block:

1. Create the Sanity object schema in `sanity/schemaTypes/`.
2. Register it in `sanity/schemaTypes/index.ts`.
3. Add it to the `sections` array in `sanity/schemaTypes/page.ts`.
4. Create a matching Astro component in `src/components/`.

`NEWSANITYBLOCK.md` walks through the same process with examples.

## Project structure

```text
/
├── sanity/                     # Sanity Studio
│   ├── schemaTypes/            # Document and object schemas
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── src/
│   ├── assets/                 # Local images used by the design
│   ├── components/             # Sections, header, footer, shared UI
│   ├── icons/                  # SVG icons used by astro-icon
│   ├── layouts/                # Layout and PageLayout
│   ├── pages/
│   │   ├── [...slug].astro     # Sanity-driven pages
│   │   ├── blogs/[slug].astro  # Blog detail route
│   │   └── robots.txt.ts
│   ├── shared/Page.astro       # Section renderer
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

## Scripts

### Site

| Command | Action |
| --- | --- |
| `pnpm dev` | Start the Astro dev server on port 4321 |
| `pnpm build` | Type-check and build the static site |
| `pnpm preview` | Preview the production build |
| `pnpm astro ...` | Run Astro CLI commands |

### Studio

Run these from `sanity/`.

| Command | Action |
| --- | --- |
| `pnpm dev` | Start Sanity Studio locally |
| `pnpm build` | Build the Studio |
| `pnpm deploy` | Deploy the Studio to Sanity hosting |

## Deployment

The site is fully static. Deploy `dist/` to Vercel, Netlify, Cloudflare Pages, or any static host.

For Vercel, import the repository and use:

- Build command: `pnpm build`
- Output directory: `dist`

Set the production URL in `astro.config.mjs` so canonical links and the sitemap resolve correctly.

Deploy the Studio separately with `cd sanity && pnpm deploy`, or host it anywhere that can run the Sanity CLI build.

## Known gaps

This repo is a starter, not a finished site. A few pieces referenced by the code are not included yet:

- `sanity/schemaTypes/index.ts` does not register `navbar` or `footer` documents, but `Navbar.astro` and `Footer.astro` both fetch them. Add those schemas before running the site with real content.
- `page.ts` lists many section types (`HeroVideo`, `Features`, `Faq`, `PricingFeatures`, and others) that do not have schemas or matching components in this repo. Add them as needed, or trim the list.
- `src/pages/blogs/[slug].astro` imports `src/components/BlogsAside.astro`, which is not in the repository. Create that component or remove the import.
- The default meta image is `/blog-placeholder-1.jpg`, which is not in `public/`. Set a real image in `src/components/BaseHead.astro` or per page.
- No license file is included. Add one before distributing the project.

## License

No license has been declared for this repository.
