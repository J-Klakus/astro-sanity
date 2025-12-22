# Claude Code Configuration

## Package Manager
This project uses **pnpm** as the package manager. Use `pnpm` commands instead of `npm`.

## Development Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build the project (includes type checking)
- `pnpm preview` - Preview the built project
- `pnpm astro` - Run Astro CLI commands

## Project Setup
- Astro v5.11.1 with TypeScript
- Tailwind CSS v4.1.11
- Additional packages: swiper, astro-icon etc.

## Astro Icon Usage
This project uses `astro-icon` exclusively for SVG icons. Place icons in `src/icons/` directory and use them as components:

```astro
<Icon name="filename" />
```

For example, for `src/icons/logo.svg`:
```astro
<Icon name="logo" />
```

## Component Scaffolding
Create new Astro components in the `src/components/` directory with `.astro` extension. Components can be either:

### Astro Component (.astro)
```astro
---
// Component logic (TypeScript)
const { title, description } = Astro.props;
---

<!-- Component template using Tailwind classes only -->
<div class="h-screen w-screen bg-white p-4 rounded-lg">
  <h1 class="text-2xl font-bold text-gray-900">{title}</h1>
  <p class="text-gray-600 mt-2">{description}</p>
</div>
```

### Styling Guidelines
**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually striking and memorable
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.

- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.

- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

- **Use Tailwind utility classes** for all styling (preferred approach)
- **Avoid `<style>` tags** unless absolutely necessary
- **Use CSS variables** from `src/styles/global.css` when custom values are needed:
  ```css
  /* In global.css */
  @theme {
    --font-sans: var(--font-poppins);
    --color-text: oklch(10.98% 0.01 270.31);
    --color-base-100: oklch(99.43% 0.001 286.38);
  }
  ```
- **Apply variables** using Tailwind:
  ```astro
  <div class="bg-base-100 text-text">
    Content
  </div>
  ```

### Layout Components
For reusable layouts, place in `src/layouts/` directory.

### Component Organization
- `src/components/` - Main components
- `src/components/reusable/` - Reusable UI components
- `src/icons/` - SVG icons for use with astro-icon

## Animations
This project uses **tailwindcss-motion** for animations (preferred over other animation libraries).

### Animation Guidelines
- **Use tailwindcss-motion classes** for all animations
- **Avoid custom CSS animations** unless absolutely necessary
- **Use built-in animation utilities** like `motion-preset-slide-left motion-delay-[1300ms] motion-ease-spring-bouncier`, etc.

Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.

### Common Animation Classes
```astro
<!-- Fade in animation -->
<div class="motion-preset-fade-in">Content</div>

<!-- Slide in animation -->
<div class="motion-preset-slide-left">Content</div>

<!-- Bounce animation -->
<div class="motion-preset-bounce">Content</div>

<!-- Pulse animation -->
<div class="motion-preset-pulse">Content</div>

<!-- With delay and easing -->
<div class="motion-preset-fade-in motion-delay-[1300ms] motion-ease-spring-bouncier">Content</div>
```

### Animation Configuration
Animations are configured in `astro.config.mjs` using the tailwindcss-motion plugin.

### Intersection Observer Usage
Use the `intersect:` variant for animations triggered when elements come into view. This is particularly useful for sections below the fold:

```astro
<!-- Animate when element comes into view -->
<div class="motion-preset-fade-in intersect:animate-fade-in">Content</div>

<!-- Style changes on intersection -->
<div class="bg-cyan-500 intersect:bg-indigo-600 transition-colors">Content</div>

<!-- Complex animation with intersection -->
<div class="motion-preset-slide-left intersect:motion-preset-slide-right motion-delay-[1300ms]">Content</div>
```

**Best Practice:** Apply intersection animations to any section that appears below the fold to improve perceived performance and user experience.

