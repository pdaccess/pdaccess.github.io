# PDAccess Nuxt 3 Roadmap

## Completed Items

### 1. Install and configure shadcn-vue
- Installed dependencies: `class-variance-authority`, `clsx`, `tailwind-merge`, `radix-vue`
- Initialized shadcn-vue project with: `--template nuxt --template nuxt --base reka --base-color neutral --icon-library lucide --font inter`
- Created UI components: Button, Card, Badge, Input, Label, Separator, Textarea, Skeleton
- Replaced custom CSS components with shadcn-vue equivalents in index.vue, Footer.vue, Section.vue, ContentCard.vue, MainDetail.vue
- Updated nuxt.config.ts to auto-import shadcn-vue components from `~/components/ui`
- Fixed HTMLAttributes/HTMLButtonAttributes type errors in components

### 2. Fix day/night theme configuration
- Fixed CSS selector `.dark html` → `html.dark` in global.css
- Replaced hardcoded `bg-dark-950 text-dark-100` with theme-responsive classes in default.vue
- Updated Header.vue to use `bg-background/90 dark:bg-dark-950/90` instead of isDark checks
- Updated Footer.vue to use `bg-card dark:bg-dark-900` instead of isDark checks
- Updated Section.vue to use `bg-gradient-to-br from-background via-card to-muted dark:from-dark-950 dark:via-dark-900 dark:to-dark-950`
- Updated MainDetail.vue to use `bg-background text-foreground dark:bg-dark-950 dark:text-dark-100`
- Replaced all `isDark ? 'dark-class' : 'light-class'` patterns with `dark:` Tailwind variants
- Updated all text colors to use `text-foreground`, `text-muted-foreground`, `text-card-foreground` etc.

### 3. Move reference pictures to page level
- Reference pictures are already positioned inside MainDetail.vue component
- The component displays partner logos from `/refs/` directory
- Pictures are shown in a grid layout with hover effects

### 4. Restore blog pages content
- Blog pages exist in `/content/blog/` directory
- `/blogs.vue` page queries content and displays blog cards
- Blog posts are rendered via NuxtContent with markdown support
- Build successful with all pages working

### 5. Document 90% confidence rule
- Added to this roadmap file
- Rule: Be 90% confident before making changes. If you have a question, ask with [] brackets inside plan file

### 6. Migrate from Nuxt 2 to Nuxt 3
- Migrated entire codebase from Nuxt 2/Vue 2 to Nuxt 3/Vue 3
- Replaced Options API with Composition API (`<script setup lang="ts">`) throughout
- Migrated `@nuxt/content` v1 → v2 (content files moved from `src/content/` → `content/`)
- Updated Font Awesome from v0 → v3, icon packages to v6
- Replaced `vue-beautiful-chat` with custom `ChatWidget.vue` component
- Replaced `@nuxtjs/axios` with native `$fetch()` and `useFetch()`
- Removed deprecated dependencies (`@nuxtjs/pwa`, `vue-meta`, `babel-runtime`, `core-js`, etc.)
- Updated Dockerfile for Node 22 + Nuxt 3 static build
- All 15+ pages migrated, all 30+ content files preserved
- See: `docs/superpowers/specs/2026-09-15-nuxt3-migration-design.md`
- Plan: `docs/superpowers/plans/2026-09-15-nuxt3-migration.md`

### 7. Add shadcn-vue extended UI components
- Created 24 new UI components for landing page:
  - Tabs, Accordion, Switch, Progress, Table (8 components), NavigationMenu (6 components)
- Created cloud provider SVG icon components: AWS, Azure, GCP, On-Prem
- Registered all components in `nuxt.config.ts`
- Added custom animations to `global.css`: `glow-pulse`, `float`, `gradient-shift`

### 8. Redesign landing page with deep-space cyber security aesthetic
- Complete replacement of `pages/index.vue`
- Interactive terminal mockup with typing animation
- Bento grid for unified infrastructure showcase
- Hybrid cloud operations interface with live metrics
- Risk mitigation FAQ accordion (6 questions)
- New `layouts/landing.vue` for full dark theme pages
- See: `docs/superpowers/specs/2026-09-18-landing-page-redesign-design.md`
- Plan: `docs/superpowers/plans/2026-09-18-landing-page-redesign.md`

### 9. Add documentation section
- Created documentation hub at `/docs` with listing page
- Created individual doc pages at `/docs/[slug]`
- Added 4 doc content files: introduction, pam-admin, iam-admin, security-admin
- Created server API `server/api/content/docs.get.ts` for doc listing
- Uses existing `@nuxt/content` v2 with prose.css styling

## In Progress

_None_

## Planned

### 1. Blog image support
- Blog posts support `image` frontmatter field
- Images display in `/uploads/blog/{image}` path
- Need to verify upload mechanism and CDN configuration

### 2. Docs detail page styling
- Ensure `prose.css` provides good markdown rendering
- Consider adding syntax highlighting (currently `highlight: false` in nuxt.config)
- Consider adding table of contents sidebar for long docs

### 3. SEO enhancements
- Per-page meta tags on all content-driven pages
- Open Graph images for social sharing
- Sitemap generation via `@nuxtjs/sitemap`

### 4. Contact form improvements
- Mautic forms work but could use Tailwind styling overhaul
- Add reCAPTCHA or honeypot spam protection
- Add form validation feedback

## Key Files

- `pages/` — All page routes
- `components/` — Shared UI components
- `components/ui/` — shadcn-vue component library
- `components/icons/` — Cloud provider SVG icons
- `layouts/` — default.vue, error.vue, landing.vue
- `composables/` — useScroll, useChat, useTheme
- `plugins/` — track.client.ts, fontawesome.ts
- `content/` — Markdown content (products, solutions, changelogs, blog, legal, hr, docs)
- `server/api/` — Nitro API routes for content fetching
- `assets/css/global.css` — Theme variables, custom animations, prose styling
- `nuxt.config.ts` — Nuxt 3 configuration

## Known Issues

- Mautic forms in ContactForm.vue use custom classes and should remain unchanged (external integration)
- `ssr: true` in nuxt.config.ts but pages use static generation — consider setting `ssr: false` if not using SSR
- Runtime config variable named `VUE_APP_PDACCESS_API_URL` (old Nuxt 2 env var pattern) — consider renaming to `PDACCESS_API_URL`
- `@nuxt/image` module imported but no images use `useImage()` or `<NuxtImg>` — consider removing if unused
