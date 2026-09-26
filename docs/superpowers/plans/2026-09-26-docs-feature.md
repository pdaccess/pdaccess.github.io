# Docs Feature Implementation Plan

> Add a documentation section to PDAccess with admin guides, introduction, and individual doc pages.

**Date:** 2026-09-26
**Status:** Implemented

## Goal

Provide a centralized documentation hub for PDAccess administrators (Security Admin, IAM Admin, PAM Admin) with a listing page and individual doc pages, styled consistently with the landing page aesthetic.

## Architecture

### Content Model
- Markdown files in `content/docs/` directory (managed by `@nuxt/content`)
- Frontmatter fields: `title`, `description`, `author`, `updatedAt`
- Each file becomes a doc page at `/docs/[slug]`

### Routing
- `/docs` — listing page showing all docs as cards
- `/docs/[slug]` — individual doc page rendering markdown content
- Uses existing `landing.vue` layout (dark background, full-width)

### Server API
- `server/api/content/docs.get.ts` — fetches doc listing from content collection
- Returns `{ id, title, description, _path }` for each doc

## Implementation

### Step 1: Content Files

Create markdown files in `content/docs/`:

| File | Title | Audience |
|---|---|---|
| `introduction.md` | Introduction to PDAccess | All users |
| `pam-admin.md` | PAM Administrator Guide | PAM Admins |
| `iam-admin.md` | IAM Administrator Guide | IAM Admins |
| `security-admin.md` | Security Administrator Guide | Security Admins |

### Step 2: Docs Listing Page

Create `pages/docs.vue`:
- Hero section with badge "Documentation", title "Learn How to Use PDAccess"
- Fetch doc list from `/api/content/docs` API
- Display cards in 2-column grid with title, description, NuxtLink to detail page
- Consistent dark theme with grid background and glow effect

### Step 3: Doc Detail Page

Create `pages/docs/[slug].vue`:
- Fetch doc content using `@nuxt/content` `useAsyncData` + `queryContent`
- Render with `ContentDoc` component for markdown rendering
- Use existing prose.css for styled markdown output
- Back to Docs link in header

### Step 4: Server API

Create `server/api/content/docs.get.ts`:
- Query `content/docs/` collection
- Return simplified doc metadata (id, title, description, path)
- Exclude raw markdown body from response

### Step 5: Content Styling

Ensure `assets/css/prose.css` is properly imported in `global.css` for markdown rendering (headings, paragraphs, code blocks, lists, tables).

## Files Created

| Action | File |
|---|---|
| Create | `content/docs/introduction.md` |
| Create | `content/docs/pam-admin.md` |
| Create | `content/docs/iam-admin.md` |
| Create | `content/docs/security-admin.md` |
| Create | `pages/docs.vue` |
| Create | `pages/docs/[slug].vue` |
| Create | `server/api/content/docs.get.ts` |

## Constraints

- Uses existing `@nuxt/content` v2 module
- Follows landing page dark theme (no light mode)
- Content structure follows existing content directory patterns
- No new dependencies

## Verification

1. `npx nuxt dev` — `/docs` loads, shows all 4 doc cards
2. Click a card — `/docs/[slug]` renders markdown content
3. Responsive — grid adapts to mobile (1 column) and desktop (2 columns)
4. Prose styling — markdown headings, code blocks, lists render correctly
