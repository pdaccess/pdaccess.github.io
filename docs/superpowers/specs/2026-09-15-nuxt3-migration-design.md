# Nuxt 3 Migration Design Spec

> Migrating PDAccess website from Nuxt 2 (Vue 2) to Nuxt 3 (Vue 3) with modernized dependencies.

**Date:** 2026-09-15
**Status:** Approved

## Problem

The PDAccess website runs on Nuxt 2.14.7 with Vue 2, which is incompatible with Node 22 (the current runtime). The `esm` module dependency crashes on Node 22 with `Function.prototype.apply was called on undefined`. Nuxt 2 has reached end-of-life and its ecosystem is no longer maintained.

## Goal

Migrate the entire PDAccess website to Nuxt 3 with Vue 3 Composition API, modern dependencies, and a working build on Node 22. All existing pages, content, and features must be preserved.

## Scope

- **In scope:** All 15+ pages, all content sections (products, solutions, changelogs, blog, legal, hr), chat widget, contact forms, SEO meta tags, Tailwind styling, Mautic integration
- **Out of scope:** Backend services (authws, ws, pvault, etc.), CI/CD pipeline changes, hosting infrastructure changes

## Architecture

### Framework: Nuxt 3

- Nuxt 3.4+ with Nitro engine
- Vue 3 Composition API with `<script setup>` throughout
- Static site generation via `nitro generate`
- No SSR (matches current `ssr: false` behavior)

### Content: @nuxt/content v2

- Replaces `@nuxt/content` v1
- Content stored in `content/` directory (project root, not `src/content/`)
- New query API: `useContentHelpers()`, `useCollection()`, `queryContent()`
- YAML frontmatter preserved from existing markdown files
- Remark plugins (emoji, footnotes) built into content v2

### CSS: Tailwind CSS v3

- Keep existing `tailwind.config.js` (colors, fonts, shadows all compatible)
- Keep existing `postcss.config.js`
- Keep `src/assets/css/global.css` → `assets/css/global.css`
- Use `@nuxtjs/tailwindcss` module for Nuxt 3 integration

### Icons: Font Awesome v6 + Vue 3

- Replace `@fortawesome/vue-fontawesome` v0.1 with v3
- Update icon packages to v6: `@fortawesome/free-solid-svg-icons`, `@fortawesome/free-brands-svg-icons`
- Keep same icon usage patterns (`['fab', 'github']`, `['fa', 'envelope']`)

### Chat: Custom Component

- Replace `vue-beautiful-chat` with a lightweight custom `<ChatWidget />` component
- Keep Slack webhook integration (existing `sendMessage` logic in `main.vue`)
- Composition API implementation
- Same visual appearance (red theme, launcher button)

### Removed Dependencies

| Old Package | Reason | Replacement |
|---|---|---|
| `@nuxtjs/axios` | Nuxt 3 has native fetch | `useFetch()` / `useAsyncData()` |
| `@nuxtjs/pwa` | Deprecated, not needed | None |
| `vue-axios` | No longer needed | Native fetch |
| `vue-beautiful-chat` | Replaced with custom widget | `components/ChatWidget.vue` |
| `vue-markdown` | Not actively used | None |
| `vue-meta` | Built into Nuxt 3 | `useHead()` |
| `vue-scroll-reveal` | Not actively used | None |
| `vue-scrollto` | Not actively used | None |
| `vue-infinite-slide-bar` | Not actively used | None |
| `babel-runtime` | Nuxt 2 polyfill | None |
| `core-js` | Nuxt 2 polyfill | None |
| `remark-emoji` | Built into @nuxt/content v2 | None |
| `remark-footnotes` | Built into @nuxt/content v2 | None |

### Added Dependencies

| Package | Purpose |
|---|---|
| `nuxt@^3.15` | Nuxt 3 framework |
| `@nuxt/content` | Content management (v2) |
| `@nuxtjs/tailwindcss` | Tailwind integration |
| `@fortawesome/vue-fontawesome@^3` | Vue 3 Font Awesome |
| `@fortawesome/free-solid-svg-icons@^6` | Icon set v6 |
| `@fortawesome/free-brands-svg-icons@^6` | Brand icons v6 |

## Component Migration Map

### Layouts

| Old | New | Changes |
|---|---|---|
| `src/layouts/main.vue` | `layouts/default.vue` | `<script setup>`, `useHead()` for SEO, custom ChatWidget |
| `src/layouts/error.vue` | `layouts/error.vue` | `<script setup>` |

### Shared Components

| Old | New | Changes |
|---|---|---|
| `src/components/Header.vue` | `components/Header.vue` | `<script setup>`, `useScroll()` composable |
| `src/components/Footer.vue` | `components/Footer.vue` | `<script setup>` |
| `src/components/Section.vue` | `components/Section.vue` | `<script setup>`, `defineProps` |
| `src/components/global/Author.vue` | `components/global/Author.vue` | `<script setup>` |
| `src/components/global/PrevNext.vue` | `components/global/PrevNext.vue` | `<script setup>` |
| N/A | `components/ChatWidget.vue` | New — custom chat component |

### View Components

| Old | New | Changes |
|---|---|---|
| `src/views/MainDetail.vue` | `components/MainDetail.vue` | `<script setup>`, reactive data |
| `src/views/Content.vue` | `components/ContentCard.vue` | Extracted to reusable card |
| `src/views/Price.vue` | `components/Price.vue` | `<script setup>` |
| `src/views/Timeline.vue` | `components/Timeline.vue` | `<script setup>` |

### Pages

| Old Route | New Route | Content Source |
|---|---|---|
| `src/pages/index.vue` | `pages/index.vue` | Static |
| `src/pages/about.vue` | `pages/about.vue` | Static |
| `src/pages/getstarted.vue` | `pages/getstarted.vue` | Static |
| `src/pages/products.vue` | `pages/products/index.vue` | `content/product/` |
| `src/pages/product/_slug.vue` | `pages/products/[slug].vue` | `content/product/` |
| `src/pages/solutions.vue` | `pages/solutions/index.vue` | `content/solution/` |
| `src/pages/solution/_slug.vue` | `pages/solutions/[slug].vue` | `content/solution/` |
| `src/pages/contacts.vue` | `pages/contacts.vue` | Static + form |
| `src/pages/sales.vue` | `pages/sales.vue` | Static + form |
| `src/pages/privacy.vue` | `pages/legal/privacy.vue` | `content/legal/` |
| `src/pages/hr.vue` | `pages/hr/index.vue` | `content/hr/` |
| `src/pages/hr/_slug.vue` | `pages/hr/[slug].vue` | `content/hr/` |
| `src/pages/changelogs.vue` | `pages/changelogs/index.vue` | `content/changelog/` |
| `src/pages/changelogs/_slug.vue` | `pages/changelogs/[slug].vue` | `content/changelog/` |
| `src/pages/thanks.vue` | `pages/thanks.vue` | Static |
| `src/pages/contacts.vue` | `pages/contacts.vue` | Static |

Note: `src/pages/privacy.vue` references `/terms` link but no `terms.vue` page exists. Add `pages/legal/terms.vue` from `content/legal/terms_and_conditions.md`.

### Content Directory

```
content/                          (migrated from src/content/)
├── product/                      (4 files)
├── solution/                     (6 files)
├── changelog/                    (8 files)
├── blog/                         (5 files)
├── legal/                        (4 files)
└── hr/                           (2 files)
```

## API Migration Reference

### Nuxt 2 → Nuxt 3

| Nuxt 2 | Nuxt 3 |
|---|---|
| `asyncData({ $content })` | `useAsyncData()` + `queryContent()` |
| `this.$axios.post()` | `useFetch()` or `$fetch()` |
| `this.$tracking()` | `useNuxtApp().$tracking()` or composable |
| `layout: 'main'` | `definePageMeta({ layout: 'default' })` |
| `head()` | `useHead()` |
| `require('@/assets/...')` | `useAsset()` or direct `/public/` paths |
| `@/` alias | Auto-resolved, or `~/` for project root |
| `beforeDestroy()` | `onBeforeUnmount()` |
| `mounted()` | `onMounted()` |
| `created()` | `onCreated()` |

### Content v1 → Content v2

| Content v1 | Content v2 |
|---|---|
| `$content('product').fetch()` | `queryContent('product').find()` |
| `$content('product', slug).fetch()` | `queryContent('product').where({ _path: slug }).first()` |
| `$content().only(['title', 'description'])` | `queryContent().only(['title', 'description'])` |
| `@nuxt/content` markdown plugins | Configured in `nuxt.config` `content.markdown` |

## New File Structure

```
├── app.vue                          # Root wrapper (replaces app.html)
├── nuxt.config.ts                   # Nuxt 3 config
├── tailwind.config.js               # Kept (compatible)
├── postcss.config.js                # Kept
├── package.json                     # Updated dependencies
├── components/
│   ├── Header.vue
│   ├── Footer.vue
│   ├── Section.vue
│   ├── MainDetail.vue
│   ├── ContentCard.vue
│   ├── Price.vue
│   ├── Timeline.vue
│   ├── ChatWidget.vue
│   └── global/
│       ├── Author.vue
│       └── PrevNext.vue
├── layouts/
│   ├── default.vue
│   └── error.vue
├── pages/
│   ├── index.vue
│   ├── about.vue
│   ├── getstarted.vue
│   ├── products/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── solutions/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── changelogs/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── blog/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── hr/
│   │   ├── index.vue
│   │   └── [slug].vue
│   ├── legal/
│   │   ├── privacy.vue
│   │   └── terms.vue
│   ├── contacts.vue
│   ├── sales.vue
│   ├── thanks.vue
├── content/                         # Migrated from src/content/
│   ├── product/
│   ├── solution/
│   ├── changelog/
│   ├── blog/
│   ├── legal/
│   └── hr/
├── assets/
│   ├── css/global.css
│   ├── logos/
│   ├── backgrounds/
│   ├── animations/
│   ├── refs/
│   └── screen/
├── composables/
│   ├── useScroll.ts
│   └── useChat.ts
├── plugins/
│   ├── track.client.ts
│   └── main.client.ts
├── public/                          # Static assets (favicon, etc.)
├── Dockerfile
└── README.md
```

## Key Implementation Details

### SEO / Meta Tags

All SEO meta tags from `Header.vue.head()` and `nuxt.config.js` will be consolidated into `useHead()` calls in `layouts/default.vue` and per-page `useHead()` where page-specific titles/descriptions are needed.

### Mautic Form Integration

The demo request form on `index.vue` posts to `https://m.pdaccess.com/form/submit?formId=10` via axios. This will be replaced with native `$fetch()` in Nuxt 3.

### Chat Widget

The chat widget sends messages to a Slack webhook (currently empty URL). The new `ChatWidget.vue` component will:
- Use Composition API with `ref()`/`reactive()`
- Keep the same red color scheme
- Maintain Slack webhook integration (URL to be configured)
- Replace `vue-beautiful-chat` dependency

### Image Assets

`require('@/assets/...')` patterns will be replaced with:
- Images in `assets/` → imported via `import ... from '@/assets/...'` (Nuxt 3 handles this)
- Or moved to `public/` for direct URL access (e.g., `/logos/logo_pda_b.svg`)

### Screen/Shots Directory

Screenshots referenced in components (`@/assets/screen/...`) need to be verified — the `assets/` directory currently has `logos/`, `backgrounds/`, `animations/`, `refs/` but no `screen/` folder. These images may be missing from the repo.

## Constraints

- Node 18.3+ required (Node 22 recommended)
- All existing markdown frontmatter must be preserved
- URL routes must remain compatible (slug-based routes)
- Mautic form endpoint must remain unchanged
- Slack webhook URL (if configured) must be preserved
- No breaking changes to public-facing URLs

## Testing Strategy

1. **Build verification:** `npx nuxt build` succeeds without errors
2. **Static generation:** `npx nuxt generate` produces valid output in `.output/public/`
3. **Page-by-page visual check:** All 15+ pages render correctly
4. **Content rendering:** All markdown files (20+ files) render with correct frontmatter
5. **Form submission:** Mautic demo request form submits successfully
6. **Chat widget:** Chat opens/closes, message send attempts webhook
7. **SEO meta tags:** Verify `<title>`, `<meta description>`, Open Graph tags on all pages
8. **Responsive layout:** Header mobile menu, grid layouts on all breakpoints
