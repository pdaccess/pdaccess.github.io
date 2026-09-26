# Landing Page Redesign Design Spec

> Replacing the existing `pages/index.vue` with a premium, deep-space cyber security landing page.

**Date:** 2026-09-18
**Status:** Implemented

## Problem

The existing PDAccess homepage uses a generic layout that doesn't reflect the product's security positioning. The site needs a compelling first impression that conveys zero-trust, enterprise-grade privileged access management.

## Goal

Create a visually striking, interactive landing page that positions PDAccess as a premium cyber security product with a deep-space aesthetic. The page should showcase product capabilities through interactive mockups rather than static text.

## Scope

- **In scope:** Complete replacement of `pages/index.vue`, new UI components for the landing page, custom animations, cloud provider SVG icons, landing layout
- **Out of scope:** Changes to other pages, backend API changes, SEO restructuring beyond the landing page

## Architecture

### Aesthetic: Deep-Space Cyber Security

- **Background:** `#0a0a0f` (neutral-950) — near-black with slight blue tint
- **Borders:** `#1e293b` (slate-800) — ultra-fine, subtle borders
- **Accent:** `#06b6d4` (cyan-500) — electric cyan for interactive elements
- **Text:** `#f8fafc` (slate-50) on dark, `#1e293b` (slate-800) on light
- **Effects:** Grid overlay (`bg-grid`), radial cyan glow (`bg-gradient-radial`), glow-pulse animation

### Component Pattern

- All components use `<script setup lang="ts">` with TypeScript strict mode
- No `any` types — all props typed explicitly
- All UI components follow shadcn-vue patterns (`cn()` utility, `class` prop)
- Custom SVG icons inline for cloud providers (AWS, Azure, GCP, On-Prem)
- Tailwind CSS utility classes only — no custom CSS files for the page itself

### Layout Structure (5 Sections)

```
1. Global Navigation Bar
   - Fixed top nav with backdrop blur
   - Logo + NavigationMenu (Products dropdown, Hybrid Cloud, Compliance)
   - Sign In (ghost button) + Deploy button (cyan)

2. Hero Section
   - Badge: "Vaultless & Open-Source PAM"
   - H1: "One Click to Bridge Any Cloud Asset. Zero Trust Required."
   - CTA: Start Free Trial + View Documentation
   - Interactive terminal mockup with typing animation (simulates SSH/RDP/SQL connections)

3. Unified Infrastructure — Bento Grid
   - Card 1 (wide): Multi-Cloud Unified Bridge with 4 cloud provider icons + asset counts
   - Card 2: Privileged Session Management (feature list with checkmarks)
   - Card 3: Linux Direct Audit (mock terminal output)
   - Card 4 (wide): SAPM Password Vault (3 feature boxes)

4. Hybrid Cloud Operations Interface
   - Tabs: Cloud Inventory | Session Control Proxy
   - Inventory tab: Table of environments + Least Privilege switch + Progress bars
   - Sessions tab: Active connections list + Revoke buttons + Metrics cards

5. Risk Mitigation FAQ
   - Accordion with expandable questions about credential proxying, compliance, and integration
```

## UI Components Required

| Component | Source | Purpose |
|---|---|---|
| Button | `@/components/ui/button/Button` | CTA buttons, ghost/outline variants |
| Badge | `@/components/ui/badge/Badge` | Section labels, featured tags |
| Card (+Header/Title/Desc/Content/Footer) | `@/components/ui/card/*` | Bento grid cards, feature boxes |
| Tabs (+List/Trigger/Content) | `@/components/ui/tabs/*` | Cloud Inventory vs Session Control |
| Accordion (+Item/Trigger/Content) | `@/components/ui/accordion/*` | FAQ section |
| Switch | `@/components/ui/switch/Switch` | Least Privilege toggle |
| Progress | `@/components/ui/progress/Progress` | Connection/bandwidth trackers |
| Table (+Header/Body/Row/Cell) | `@/components/ui/table/*` | Cloud inventory table, session list |
| NavigationMenu (+List/Item/Trigger/Content/Link) | `@/components/ui/navigation-menu/*` | Global nav dropdowns |

## Cloud Provider Icons

Four inline SVG icon components:

| Icon | File | Color |
|---|---|---|
| AWS | `components/icons/AwsIcon.vue` | Orange |
| Azure | `components/icons/AzureIcon.vue` | Blue |
| GCP | `components/icons/GcpIcon.vue` | Yellow |
| On-Prem | `components/icons/OnPremIcon.vue` | Green |

## Custom Animations (global.css additions)

| Animation | Keyframes | Usage |
|---|---|---|
| `glow-pulse` | opacity 0.5 ↔ 1 over 3s | Hero radial gradient |
| `float` | translateY 0 ↔ -10px over 6s | Floating elements |
| `gradient-shift` | background-position 0% ↔ 100% over 8s | Gradient backgrounds |

## Data & State

### Terminal Mockup
- 3 connection scenarios (SSH to AWS, RDP to Azure, SQL to GCP)
- Typing animation: 30ms per character, loops continuously
- Hydration-safe: client-only rendering with `isClient` flag

### Cloud Inventory
- 5 environments: AWS Production, Azure Enterprise, GCP Analytics, On-Prem, AWS Staging
- Asset counts per environment (247, 183, 94, 312, 56)

### Live Metrics
- Active connections: fluctuates 15-99
- Bandwidth usage: fluctuates 20-100%
- Updated every 2 seconds with random walk

### FAQ Content
- 6 questions covering: zero-knowledge proxying, compliance frameworks, identity provider integration, on-premises deployment, credential rotation, supported protocols

## Responsive Breakpoints

- Mobile: single column, stacked layout
- sm (640px): 2-column grid for bento cards
- md (768px): responsive header, larger text
- lg (1024px): 4-column bento grid, wide cards
- xl (1280px): max container width, spacing

## Constraints

- No new npm dependencies beyond existing stack
- All components self-contained in existing shadcn-vue patterns
- TypeScript strict mode enforced
- Dark theme only (landing layout forces `html.dark`)
- Static site generation compatible (no SSR dependencies)

## Testing Strategy

1. `npx nuxt typecheck` — no TypeScript errors in new components
2. `npx nuxt dev` — page loads, terminal typing works, tabs switch, accordion expands
3. Responsive check on all breakpoints
4. Hover states on all interactive elements

## Files Created/Modified

| Action | File |
|---|---|
| Create | `components/ui/tabs/Tabs.vue`, `TabsList.vue`, `TabsTrigger.vue`, `TabsContent.vue` |
| Create | `components/ui/accordion/Accordion.vue`, `AccordionItem.vue`, `AccordionTrigger.vue`, `AccordionContent.vue` |
| Create | `components/ui/switch/Switch.vue` |
| Create | `components/ui/progress/Progress.vue` |
| Create | `components/ui/table/Table.vue`, `TableHeader.vue`, `TableBody.vue`, `TableFooter.vue`, `TableCaption.vue`, `TableHead.vue`, `TableRow.vue`, `TableCell.vue` |
| Create | `components/ui/navigation-menu/NavigationMenu.vue`, `NavigationMenuList.vue`, `NavigationMenuItem.vue`, `NavigationMenuTrigger.vue`, `NavigationMenuContent.vue`, `NavigationMenuLink.vue` |
| Create | `components/icons/AwsIcon.vue`, `AzureIcon.vue`, `GcpIcon.vue`, `OnPremIcon.vue` |
| Create | `layouts/landing.vue` |
| Create | `assets/css/global.css` additions (animations) |
| Modify | `nuxt.config.ts` (register new component paths) |
| Replace | `pages/index.vue` (complete replacement) |
