# Nuxt 3 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the PDAccess website from Nuxt 2 (Vue 2) to Nuxt 3 (Vue 3) with all pages, content, and features preserved.

**Architecture:** Nuxt 3 with Nitro engine, Vue 3 Composition API, @nuxt/content v2, Tailwind CSS v3, custom chat widget. Static site generation via `nitro generate`. All existing pages, content, forms, and SEO preserved.

**Tech Stack:** Nuxt 3.15+, Vue 3.4+, @nuxt/content v2, Tailwind CSS v3, Font Awesome v6, Node 18.3+

**Spec:** docs/superpowers/specs/2026-09-15-nuxt3-migration-design.md

## Global Constraints

- Node 18.3+ required (Node 22 recommended)
- All existing markdown frontmatter must be preserved verbatim
- URL routes must remain compatible (slug-based routes, all public URLs preserved)
- Mautic form endpoints must remain unchanged (formId 2, 6, 7, 10)
- Slack webhook URL placeholder preserved in chat widget
- No breaking changes to public-facing URLs
- Keep dark theme color palette exactly as defined in tailwind.config.js

---

### Task 1: Project Scaffolding

**Files:**
- Modify: `package.json`
- Create: `nuxt.config.ts`
- Create: `app.vue`
- Modify: `tailwind.config.js`
- Modify: `postcss.config.js`

**Interfaces:**
- Consumes: None (first task)
- Produces: Project structure ready for component migration

- [ ] **Step 1: Write new package.json**

Replace the entire `package.json` with:

```json
{
  "name": "pdaccess",
  "private": true,
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "nuxt dev --hostname localhost --port 3000",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview"
  },
  "dependencies": {
    "@nuxt/content": "^2.13.0",
    "@nuxtjs/tailwindcss": "^6.12.0",
    "@fortawesome/fontawesome-svg-core": "^6.5.0",
    "@fortawesome/free-solid-svg-icons": "^6.5.0",
    "@fortawesome/free-brands-svg-icons": "^6.5.0",
    "@fortawesome/vue-fontawesome": "^3.0.0"
  },
  "devDependencies": {
    "nuxt": "^3.15.0",
    "vue": "^3.4.0",
    "typescript": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0"
  }
}
```

- [ ] **Step 2: Write nuxt.config.ts**

Create `nuxt.config.ts` with the full Nuxt 3 config (see spec for exact content).

- [ ] **Step 3: Write app.vue**

Create `app.vue` at project root:

```vue
<template>
  <div>
    <NuxtLayout />
  </div>
</template>
```

- [ ] **Step 4: Update tailwind.config.js**

Update `content` array to include `src/**/*.vue` (keep existing as-is since we keep `srcDir: 'src/'`).

- [ ] **Step 5: Update postcss.config.js**

Replace with:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

- [ ] **Step 6: Create directory structure**

```bash
mkdir -p composables server/api
```

- [ ] **Step 7: Clean install and verify build**

```bash
rm -rf node_modules package-lock.json
npm install
npx nuxt build
```

Expected: Build succeeds with no errors.

- [ ] **Step 8: Commit**

```bash
git add package.json nuxt.config.ts app.vue tailwind.config.js postcss.config.js
git add composables/ server/
git commit -m "chore: scaffold Nuxt 3 project structure"
```

---

### Task 2: Migrate Content Files

**Files:**
- Create: `content/product/` (4 files)
- Create: `content/solution/` (6 files)
- Create: `content/changelog/` (8 files)
- Create: `content/blog/` (5 files)
- Create: `content/legal/` (4 files)
- Create: `content/hr/` (2 files)

**Interfaces:**
- Consumes: None
- Produces: Content directory structure ready for @nuxt/content v2

- [ ] **Step 1: Create content directory and move all files**

```bash
mkdir -p content/{product,solution,changelog,blog,legal,hr}
mv src/content/product/* content/product/
mv src/content/solution/* content/solution/
mv src/content/changelog/* content/changelog/
mv src/content/blog/* content/blog/
mv src/content/legal/* content/legal/
mv src/content/hr/* content/hr/
rm -rf src/content/
```

- [ ] **Step 2: Verify all files moved correctly**

```bash
find content/ -name "*.md" | wc -l
# Expected: 29 files
```

- [ ] **Step 3: Commit**

```bash
git add content/
git commit -m "chore: migrate content files to content/ directory for @nuxt/content v2"
```

---

### Task 3: Migrate Static Assets

**Files:**
- Create: `public/` directory structure
- Move: `src/static/` → `public/`
- Move: `src/assets/` → `assets/`

**Interfaces:**
- Consumes: None
- Produces: All static assets accessible at correct URLs

- [ ] **Step 1: Create public directory and move static files**

```bash
mkdir -p public
mv src/static/* public/
rm -rf src/static/
```

- [ ] **Step 2: Move assets to project root**

```bash
mv src/assets/* assets/
rmdir src/assets
```

- [ ] **Step 3: Verify asset paths in config**

Update `nuxt.config.ts` CSS import from `@/assets/css/global.css` to `~/assets/css/global.css`.

- [ ] **Step 4: Commit**

```bash
git add public/ assets/
git commit -m "chore: migrate static assets to public/ and assets/ directories"
```

---

### Task 4: Migrate Composables and Plugins

**Files:**
- Create: `composables/useScroll.ts`
- Create: `composables/useChat.ts`
- Create: `plugins/track.client.ts`
- Create: `plugins/main.client.ts`

**Interfaces:**
- Consumes: None
- Produces: Plugin system and composables ready for page migration

- [ ] **Step 1: Write composables/useScroll.ts**

```ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll(threshold: number = 20) {
  const isScrolled = ref(false)

  function handleScroll() {
    isScrolled.value = window.scrollY > threshold
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScrolled }
}
```

- [ ] **Step 2: Write composables/useChat.ts**

```ts
import { ref } from 'vue'

export function useChat() {
  const isOpen = ref(false)
  const messageList = ref<any[]>([])
  const newMessagesCount = ref(0)

  function openChat() {
    isOpen.value = true
    newMessagesCount.value = 0
  }

  function closeChat() {
    isOpen.value = false
  }

  async function sendMessage(msg: string) {
    const SLACK_WEBHOOK_URL = ''
    if (!msg || !SLACK_WEBHOOK_URL) return

    const data = {
      channel: '#chatbot',
      username: 'PDAccess Site Visitor',
      text: msg,
      icon_emoji: ':bomb:'
    }

    try {
      await $fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify({ payload: JSON.stringify(data) }),
        headers: { 'Content-Type': 'application/json' }
      })
      messageList.value = [...messageList.value, { text: msg }]
      if (!isOpen.value) {
        newMessagesCount.value++
      }
    } catch (err) {
      console.error('Chat send failed:', err)
    }
  }

  return { isOpen, messageList, newMessagesCount, openChat, closeChat, sendMessage }
}
```

- [ ] **Step 3: Write plugins/track.client.ts**

```ts
export default defineNuxtPlugin((nuxtApp) => {
  let mauticLoaded = false

  nuxtApp.provide('tracking', () => {
    if (typeof window === 'undefined') return

    if (!mauticLoaded) {
      const script = document.createElement('script')
      script.src = 'https://m.pdaccess.com/mtc.js'
      script.async = true
      document.body.appendChild(script)
      mauticLoaded = true

      script.onload = () => {
        if (typeof window.mtc !== 'undefined') {
          window.mtc('send', 'pageview')
        }
      }
    } else {
      if (typeof window.mtc !== 'undefined') {
        window.mtc('send', 'pageview')
      }
    }
  })
})
```

- [ ] **Step 4: Write plugins/main.client.ts**

```ts
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(fas, fab)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
```

- [ ] **Step 5: Commit**

```bash
git add composables/ plugins/
git commit -m "feat: add Nuxt 3 composables and plugins"
```

---

### Task 5: Migrate Layouts

**Files:**
- Create: `layouts/default.vue`
- Create: `layouts/error.vue`

**Interfaces:**
- Consumes: `components/Header.vue`, `components/Footer.vue`, `components/Section.vue`, `components/ChatWidget.vue`
- Produces: Layout system for all pages

- [ ] **Step 1: Write layouts/default.vue**

Migrate from `src/layouts/main.vue`. Use `<script setup>`, `useHead()` for SEO meta tags. Include `<Header />`, `<NuxtPage />`, `<ChatWidget />`, `<Footer />`.

- [ ] **Step 2: Write layouts/error.vue**

Migrate from `src/layouts/error.vue`. Use `<script setup>`, show 404 message with Section component.

- [ ] **Step 3: Commit**

```bash
git add layouts/
git commit -m "feat: migrate layouts to Nuxt 3 with Composition API"
```

---

### Task 6: Migrate Shared Components

**Files:**
- Create: `components/Section.vue`
- Create: `components/Header.vue`
- Create: `components/Footer.vue`
- Create: `components/ChatWidget.vue`
- Create: `components/global/Author.vue`
- Create: `components/global/PrevNext.vue`

**Interfaces:**
- Consumes: `composables/useScroll.ts`
- Produces: All shared UI components for page use

- [ ] **Step 1: Write components/Section.vue**

Migrate from `src/components/Section.vue`. Use `<script setup>`, `defineProps<{full?: boolean, background?: string}>()`.

- [ ] **Step 2: Write components/Header.vue**

Migrate from `src/components/Header.vue`. Use `<script setup>`, `useScroll()` composable, `ref` for mobile menu state. Replace `require('@/assets/...')` with `/logos/...` paths. Replace `head()` with `useHead()` in `layouts/default.vue`.

- [ ] **Step 3: Write components/Footer.vue**

Migrate from `src/components/Footer.vue`. Use `<script setup>`. Replace `require()` with `/logos/...` paths. Update `/terms` → `/legal/terms`, `/privacy` → `/legal/privacy`.

- [ ] **Step 4: Write components/ChatWidget.vue**

New component replacing `vue-beautiful-chat`. Custom lightweight chat widget with red theme, launcher button, message input. Uses `useChat()` composable.

- [ ] **Step 5: Write components/global/Author.vue**

Migrate from `src/components/global/Author.vue`. Use `<script setup>`, `defineProps<{author: Object}>()`.

- [ ] **Step 6: Write components/global/PrevNext.vue**

Migrate from `src/components/global/PrevNext.vue`. Use `<script setup>`, `defineProps<{prev?: object, next?: object, base: string}>()`.

- [ ] **Step 7: Commit**

```bash
git add components/
git commit -m "feat: migrate shared components to Nuxt 3 with Composition API"
```

---

### Task 7: Migrate View Components

**Files:**
- Create: `components/MainDetail.vue`
- Create: `components/ContentCard.vue`
- Create: `components/Price.vue`
- Create: `components/Timeline.vue`

**Interfaces:**
- Consumes: `components/Section.vue`
- Produces: View components used by pages

- [ ] **Step 1: Write components/MainDetail.vue**

Migrate from `src/views/MainDetail.vue`. Use `<script setup>`, `ref()` for reactive data. Replace `require('@/assets/...')` with `/refs/...` and `/animations/...` paths.

- [ ] **Step 2: Write components/ContentCard.vue**

Migrate from `src/views/Content.vue`. Extract each card as a reusable component. Use `<script setup>`. Replace `require('@/assets/screen/...')` with `/screen/...` paths.

- [ ] **Step 3: Write components/Price.vue**

Migrate from `src/views/Price.vue`. Use `<script setup>`. Replace `require()` with `/icons/...` paths.

- [ ] **Step 4: Write components/Timeline.vue**

Migrate from `src/views/Timeline.vue`. Use `<script setup>`.

- [ ] **Step 5: Commit**

```bash
git add components/MainDetail.vue components/ContentCard.vue components/Price.vue components/Timeline.vue
git commit -m "feat: migrate view components to Nuxt 3 with Composition API"
```

---

### Task 8: Migrate Form Components

**Files:**
- Create: `components/forms/ContactForm.vue`
- Create: `components/forms/Sales.vue`
- Create: `components/forms/CVForm.vue`

**Interfaces:**
- Consumes: None
- Produces: Form components for contacts, sales, and job application pages

- [ ] **Step 1: Write components/forms/ContactForm.vue**

Migrate from `src/components/forms/ContactForm.vue`. Use `<script setup>`. Replace axios with `$fetch()`. Keep Mautic formId=7 endpoint. Replace Bulma SCSS imports with Tailwind classes.

- [ ] **Step 2: Write components/forms/Sales.vue**

Migrate from `src/components/forms/Sales.vue`. Use `<script setup>`. Replace axios with `$fetch()`. Keep Mautic formId=2 endpoint. Replace Bulma SCSS with Tailwind.

- [ ] **Step 3: Write components/forms/CVForm.vue**

Migrate from `src/components/forms/CVForm.vue`. Use `<script setup>`. Replace axios with `$fetch()`. Keep Mautic formId=6 endpoint. Replace Bulma SCSS with Tailwind.

- [ ] **Step 4: Commit**

```bash
git add components/forms/
git commit -m "feat: migrate form components to Nuxt 3 with Composition API"
```

---

### Task 9: Migrate Pages - Static Pages

**Files:**
- Create: `src/pages/index.vue`
- Create: `src/pages/about.vue`
- Create: `src/pages/getstarted.vue`
- Create: `src/pages/thanks.vue`
- Create: `src/pages/contacts.vue`
- Create: `src/pages/sales.vue`
- Create: `src/pages/hr.vue`

**Interfaces:**
- Consumes: All components from Tasks 5-8
- Produces: Static pages ready for content-driven pages

- [ ] **Step 1: Write src/pages/index.vue**

Migrate from `src/pages/index.vue`. Use `<script setup>`, `definePageMeta({ layout: 'default' })`. Replace `asyncData` with `useAsyncData()`. Replace `$content` with `queryContent()`. Replace `$axios` with `$fetch()`. Replace `$tracking()` with `useNuxtApp().$tracking()`.

- [ ] **Step 2: Write src/pages/about.vue**

Migrate from `src/pages/about.vue`. Use `<script setup>`. Load content from `queryContent('legal', 'us')`.

- [ ] **Step 3: Write src/pages/getstarted.vue**

Migrate from `src/pages/getstarted.vue`. Use `<script setup>`. Load content from `queryContent('legal', 'get_started')`.

- [ ] **Step 4: Write src/pages/thanks.vue**

Migrate from `src/pages/thanks.vue`. Simple static page with `<script setup>`.

- [ ] **Step 5: Write src/pages/contacts.vue**

Migrate from `src/pages/contacts.vue`. Use `<script setup>`. Render `<ContactForm />`.

- [ ] **Step 6: Write src/pages/sales.vue**

Migrate from `src/pages/sales.vue`. Use `<script setup>`. Render `<Sales />`.

- [ ] **Step 7: Write src/pages/hr.vue**

Migrate from `src/pages/hr.vue`. Use `<script setup>`. Load job content from `queryContent('hr')`. Render `<CVForm />`.

- [ ] **Step 8: Commit**

```bash
git add src/pages/index.vue src/pages/about.vue src/pages/getstarted.vue src/pages/thanks.vue src/pages/contacts.vue src/pages/sales.vue src/pages/hr.vue
git commit -m "feat: migrate static pages to Nuxt 3 with Composition API"
```

---

### Task 10: Migrate Pages - Content-Driven Pages

**Files:**
- Create: `src/pages/products/index.vue`
- Create: `src/pages/products/[slug].vue`
- Create: `src/pages/solutions/index.vue`
- Create: `src/pages/solutions/[slug].vue`
- Create: `src/pages/changelogs/index.vue`
- Create: `src/pages/changelogs/[slug].vue`
- Create: `src/pages/blog/index.vue`
- Create: `src/pages/blog/[slug].vue`
- Create: `src/pages/hr/index.vue`
- Create: `src/pages/hr/[slug].vue`
- Create: `src/pages/legal/privacy.vue`
- Create: `src/pages/legal/terms.vue`

**Interfaces:**
- Consumes: `@nuxt/content` v2 API, `components/global/PrevNext.vue`
- Produces: All content-driven pages with dynamic routing

- [ ] **Step 1: Write src/pages/products/index.vue**

Migrate from `src/pages/products.vue`. Use `<script setup>`. Use `queryContent('product').find()` to load products. Render product cards with `NuxtLink` to `[slug].vue`.

- [ ] **Step 2: Write src/pages/products/[slug].vue**

Migrate from `src/pages/product/_slug.vue`. Use `<script setup>`. Use `useRoute()` to get slug. Use `queryContent('product').where({ _path: route.params.slug }).first()`. Render with `ContentDoc` component.

- [ ] **Step 3: Write src/pages/solutions/index.vue**

Migrate from `src/pages/solutions.vue`. Use `<script setup>`. Use `queryContent('solution').sort({ time: -1 }).find()`.

- [ ] **Step 4: Write src/pages/solutions/[slug].vue**

Migrate from `src/pages/solution/_slug.vue`. Same pattern as products/[slug].vue but with `queryContent('solution')`.

- [ ] **Step 5: Write src/pages/changelogs/index.vue**

Migrate from `src/pages/changelogs.vue`. Use `<script setup>`. Use `queryContent('changelog').sort({ time: -1 }).find()`.

- [ ] **Step 6: Write src/pages/changelogs/[slug].vue**

Migrate from `src/pages/changelog/_slug.vue`. Use `queryContent('changelog').where({ _path: route.params.slug }).first()`.

- [ ] **Step 7: Write src/pages/blog/index.vue**

Migrate from `src/pages/blogs.vue`. Use `<script setup>`. Use `queryContent('blog').sort({ time: -1 }).find()`.

- [ ] **Step 8: Write src/pages/blog/[slug].vue**

Migrate from `src/pages/blog/_slug.vue`. Use `queryContent('blog').where({ _path: route.params.slug }).first()`.

- [ ] **Step 9: Write src/pages/hr/index.vue**

Migrate from `src/pages/hr.vue`. Use `<script setup>`. List job listings from `queryContent('hr')`.

- [ ] **Step 10: Write src/pages/hr/[slug].vue**

Migrate from `src/pages/hr/_slug.vue`. Use `queryContent('hr').where({ _path: route.params.slug }).first()`.

- [ ] **Step 11: Write src/pages/legal/privacy.vue**

Migrate from `src/pages/privacy.vue`. Use `queryContent('legal', 'privacy').first()`.

- [ ] **Step 12: Write src/pages/legal/terms.vue**

New page. Migrate from `src/pages/terms.vue`. Use `queryContent('legal', 'terms_and_conditions').first()`.

- [ ] **Step 13: Commit**

```bash
git add src/pages/products/ src/pages/solutions/ src/pages/changelogs/ src/pages/blog/ src/pages/hr/ src/pages/legal/
git commit -m "feat: migrate content-driven pages to Nuxt 3 with Composition API"
```

---

### Task 11: Update Dockerfile and Nginx Config

**Files:**
- Modify: `Dockerfile`
- Modify: `pdaccess.app.conf`

**Interfaces:**
- Consumes: Build output from `nuxt generate`
- Produces: Docker deployment ready for Nuxt 3 static output

- [ ] **Step 1: Update Dockerfile**

Update to use Node 22, install with npm, run `nuxt generate`. Output goes to `.output/public/`.

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

FROM nginx:alpine
COPY --from=build /app/.output/public /app
COPY pdaccess.app.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

- [ ] **Step 2: Update pdaccess.app.conf**

Update nginx config for Nuxt 3 static output (SPA fallback).

- [ ] **Step 3: Commit**

```bash
git add Dockerfile pdaccess.app.conf
git commit -m "chore: update Dockerfile and nginx config for Nuxt 3"
```

---

### Task 12: Cleanup and Final Verification

**Files:**
- Delete: `src/containers/`
- Delete: `src/router/`
- Delete: `babel.config.js`
- Delete: `src/assets/bulma/`
- Delete: `yarn.lock`
- Delete: `save/` (if no longer needed)

**Interfaces:**
- Consumes: All previous tasks
- Produces: Clean Nuxt 3 project

- [ ] **Step 1: Remove deprecated files**

```bash
rm -rf src/containers/ src/router/ src/assets/bulma/ babel.config.js yarn.lock save/
```

- [ ] **Step 2: Run full build**

```bash
npm run build
npm run generate
```

Expected: Both commands succeed without errors.

- [ ] **Step 3: Verify output**

```bash
ls .output/public/
# Should contain: index.html, _nuxt/, favicon/, logos/, etc.
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: cleanup deprecated files, finalize Nuxt 3 migration"
```
