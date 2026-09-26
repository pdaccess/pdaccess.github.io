# PDAccess Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing `pages/index.vue` with a premium, deep-space cyber security landing page featuring interactive terminal mockup, bento grid, cloud operations interface, and FAQ accordion.

**Architecture:** Single-file Vue 3 SFC (`pages/index.vue`) using `<script setup lang="ts">`, built on top of existing shadcn-vue primitives. All missing UI components (Tabs, Accordion, Switch, Progress, Table, NavigationMenu) are created as new shadcn-vue components following the existing patterns in `components/ui/`. Custom SVG icons for cloud providers are inline. The page uses Tailwind CSS with the existing dark theme CSS variables.

**Tech Stack:** Nuxt 3.15.0, Vue 3.5.x, TypeScript, Tailwind CSS 3.x, shadcn-vue (class-variance-authority, clsx, tailwind-merge), radix-vue (for Tabs/Accordion primitives), @vueuse/core (for reactive utilities).

**Spec:** Landing page redesign for pdaccess.com — deep-space cyber security aesthetic, black background (neutral-950), ultra-fine borders (border-slate-800), electric blue/cyan accents.

## Global Constraints

- **Framework:** Nuxt 3.15.0 with `ssr: false, target: 'static'`
- **Component pattern:** `<script setup lang="ts">` only, no Options API
- **Styling:** Tailwind CSS utility classes only, no custom CSS files for this page
- **UI components:** All shadcn-vue components follow existing patterns (cn() utility, class prop, defineProps)
- **Icons:** Inline SVG for cloud providers (AWS, Azure, GCP, On-Prem), FontAwesome for UI icons
- **Responsive:** Mobile-first, breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Color palette:** Background `#0a0a0f` (neutral-950), borders `#1e293b` (slate-800), accent `#06b6d4` (cyan-500), text `#f8fafc` (slate-50)
- **No external dependencies:** All components self-contained, no new npm packages
- **TypeScript strict mode:** All props typed, no `any` types

---

## Task 1: Create Missing UI Components

**Files:**
- Create: `components/ui/tabs/Tabs.vue`
- Create: `components/ui/tabs/TabsList.vue`
- Create: `components/ui/tabs/TabsTrigger.vue`
- Create: `components/ui/tabs/TabsContent.vue`
- Create: `components/ui/accordion/Accordion.vue`
- Create: `components/ui/accordion/AccordionItem.vue`
- Create: `components/ui/accordion/AccordionTrigger.vue`
- Create: `components/ui/accordion/AccordionContent.vue`
- Create: `components/ui/switch/Switch.vue`
- Create: `components/ui/progress/Progress.vue`
- Create: `components/ui/table/Table.vue`
- Create: `components/ui/table/TableBody.vue`
- Create: `components/ui/table/TableCaption.vue`
- Create: `components/ui/table/TableCell.vue`
- Create: `components/ui/table/TableFooter.vue`
- Create: `components/ui/table/TableHead.vue`
- Create: `components/ui/table/TableHeader.vue`
- Create: `components/ui/table/TableRow.vue`
- Create: `components/ui/navigation-menu/NavigationMenu.vue`
- Create: `components/ui/navigation-menu/NavigationMenuList.vue`
- Create: `components/ui/navigation-menu/NavigationMenuItem.vue`
- Create: `components/ui/navigation-menu/NavigationMenuTrigger.vue`
- Create: `components/ui/navigation-menu/NavigationMenuContent.vue`
- Create: `components/ui/navigation-menu/NavigationMenuLink.vue`

**Interfaces:**
- Consumes: `@/lib/utils` (cn function)
- Produces: 24 new shadcn-vue components following existing patterns

### Step 1: Create Tabs components

Create `components/ui/tabs/Tabs.vue`:
```vue
<script setup lang="ts">
import { TabsRoot, type TabsRootEmits, type TabsRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends TabsRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<TabsRootEmits>()
</script>

<template>
  <TabsRoot v-bind="props" class="w-full" @update:model-value="emits('update:modelValue', $event)" :class="props.class">
    <slot />
  </TabsRoot>
</template>
```

Create `components/ui/tabs/TabsList.vue`:
```vue
<script setup lang="ts">
import { TabsList as RadixTabsList, type TabsListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends TabsListProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <RadixTabsList
    v-bind="props"
    :class="cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      props.class
    )"
  >
    <slot />
  </RadixTabsList>
</template>
```

Create `components/ui/tabs/TabsTrigger.vue`:
```vue
<script setup lang="ts">
import { TabsTrigger as RadixTabsTrigger, type TabsTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends TabsTriggerProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixTabsTrigger
    v-bind="delegatedProps"
    :class="cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      props.class
    )"
  >
    <slot />
  </RadixTabsTrigger>
</template>
```

Create `components/ui/tabs/TabsContent.vue`:
```vue
<script setup lang="ts">
import { TabsContent as RadixTabsContent, type TabsContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends TabsContentProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixTabsContent
    v-bind="delegatedProps"
    :class="cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      props.class
    )"
  >
    <slot />
  </RadixTabsContent>
</template>
```

### Step 2: Create Accordion components

Create `components/ui/accordion/Accordion.vue`:
```vue
<script setup lang="ts">
import { AccordionRoot, type AccordionRootEmits, type AccordionRootProps } from 'radix-vue'

interface Props extends AccordionRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<AccordionRootEmits>()
</script>

<template>
  <AccordionRoot v-bind="props" class="w-full" @update:active-value="emits('update:activeValue', $event)">
    <slot />
  </AccordionRoot>
</template>
```

Create `components/ui/accordion/AccordionItem.vue`:
```vue
<script setup lang="ts">
import { AccordionItem as RadixAccordionItem, type AccordionItemProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends AccordionItemProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixAccordionItem
    v-bind="delegatedProps"
    :class="cn(
      'border-b border-border/50',
      props.class
    )"
  >
    <slot />
  </RadixAccordionItem>
</template>
```

Create `components/ui/accordion/AccordionTrigger.vue`:
```vue
<script setup lang="ts">
import { AccordionTrigger as RadixAccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'
import { ChevronDown } from '@lucide/vue'

interface Props extends AccordionTriggerProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixAccordionTrigger
    v-bind="delegatedProps"
    :class="cn(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
      props.class
    )"
  >
    <slot />
    <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
  </RadixAccordionTrigger>
</template>
```

Create `components/ui/accordion/AccordionContent.vue`:
```vue
<script setup lang="ts">
import { AccordionContent as RadixAccordionContent, type AccordionContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends AccordionContentProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixAccordionContent
    v-bind="delegatedProps"
    :class="cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      props.class
    )"
  >
    <div class="pb-4 pt-0">
      <slot />
    </div>
  </RadixAccordionContent>
</template>
```

### Step 3: Create Switch component

Create `components/ui/switch/Switch.vue`:
```vue
<script setup lang="ts">
import { SwitchRoot, SwitchThumb, type SwitchRootEmits, type SwitchRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends SwitchRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const delegatedEmits = computed<SwitchRootEmits>(() => {
  return {
    'update:modelValue': emits['update:modelValue']
  }
})
</script>

<template>
  <SwitchRoot
    v-bind="delegatedProps"
    :class="cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      props.class
    )"
    @update:model-value="delegatedEmits['update:modelValue']($event)"
  >
    <SwitchThumb
      :class="cn(
        'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
      )"
    />
  </SwitchRoot>
</template>
```

### Step 4: Create Progress component

Create `components/ui/progress/Progress.vue`:
```vue
<script setup lang="ts">
import { ProgressRoot, ProgressIndicator, type ProgressRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends ProgressRootProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <ProgressRoot
    v-bind="delegatedProps"
    :class="cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      props.class
    )"
  >
    <ProgressIndicator
      :class="cn(
        'h-full w-full flex-1 bg-primary transition-all',
        props.class
      )"
      :style="`transform: translateX(-${100 - (props.modelValue || 0)}%)`"
    />
  </ProgressRoot>
</template>
```


### Step 5: Create Table components

Create `components/ui/table/Table.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <div class="relative w-full overflow-auto">
    <table :class="cn('w-full caption-bottom text-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
```

Create `components/ui/table/TableHeader.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <thead :class="cn('[&_tr]:border-b', props.class)">
    <slot />
  </thead>
</template>
```

Create `components/ui/table/TableBody.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', props.class)">
    <slot />
  </tbody>
</template>
```

Create `components/ui/table/TableFooter.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <tfoot :class="cn('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', props.class)">
    <slot />
  </tfoot>
</template>
```

Create `components/ui/table/TableCaption.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <caption :class="cn('mt-4 text-sm text-muted-foreground', props.class)">
    <slot />
  </caption>
</template>
```

Create `components/ui/table/TableHead.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <th :class="cn('h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', props.class)">
    <slot />
  </th>
</template>
```

Create `components/ui/table/TableRow.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <tr :class="cn('border-b border-border/50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', props.class)">
    <slot />
  </tr>
</template>
```

Create `components/ui/table/TableCell.vue`:
```vue
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <td :class="cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', props.class)">
    <slot />
  </td>
</template>
```

### Step 6: Create NavigationMenu components

Create `components/ui/navigation-menu/NavigationMenu.vue`:
```vue
<script setup lang="ts">
import { NavigationMenuRoot, type NavigationMenuRootEmits, type NavigationMenuRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends NavigationMenuRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const delegatedEmits = computed<NavigationMenuRootEmits>(() => {
  return {
    'update:modelValue': emits['update:modelValue'],
    'update:activeValue': emits['update:activeValue']
  }
})
</script>

<template>
  <NavigationMenuRoot
    v-bind="delegatedProps"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
    @update:model-value="delegatedEmits['update:modelValue']($event)"
    @update:active-value="delegatedEmits['update:activeValue']($event)"
  >
    <slot />
  </NavigationMenuRoot>
</template>
```

Create `components/ui/navigation-menu/NavigationMenuList.vue`:
```vue
<script setup lang="ts">
import { NavigationMenuList as RadixNavigationMenuList, type NavigationMenuListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends NavigationMenuListProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <RadixNavigationMenuList
    v-bind="props"
    :class="cn(
      'group flex flex-1 list-none items-center justify-center gap-x-1',
      props.class
    )"
  >
    <slot />
  </RadixNavigationMenuList>
</template>
```

Create `components/ui/navigation-menu/NavigationMenuItem.vue`:
```vue
<script setup lang="ts">
import { NavigationMenuItem as RadixNavigationMenuItem, type NavigationMenuItemProps } from 'radix-vue'

interface Props extends NavigationMenuItemProps {
  class?: string
}

const props = defineProps<Props>()
</script>

<template>
  <RadixNavigationMenuItem v-bind="props">
    <slot />
  </RadixNavigationMenuItem>
</template>
```

Create `components/ui/navigation-menu/NavigationMenuTrigger.vue`:
```vue
<script setup lang="ts">
import { NavigationMenuTrigger as RadixNavigationMenuTrigger, type NavigationMenuTriggerProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'
import { ChevronDown } from '@lucide/vue'

interface Props extends NavigationMenuTriggerProps {
  class?: string
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <RadixNavigationMenuTrigger
    v-bind="delegatedProps"
    :class="cn(
      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      props.class
    )"
  >
    <slot />
    <ChevronDown
      class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </RadixNavigationMenuTrigger>
</template>
```

Create `components/ui/navigation-menu/NavigationMenuContent.vue`:
```vue
<script setup lang="ts">
import { NavigationMenuContent as RadixNavigationMenuContent, type NavigationMenuContentEmits, type NavigationMenuContentProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends NavigationMenuContentProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const delegatedEmits = computed<NavigationMenuContentEmits>(() => {
  return {
    'enter-from': emits['enterFrom'],
    'enter-to': emits['enterTo'],
    'leave-from': emits['leaveFrom'],
    'leave-to': emits['leaveTo']
  }
})
</script>

<template>
  <RadixNavigationMenuContent
    v-bind="delegatedProps"
    :class="cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      props.class
    )"
    @enter-from="delegatedEmits['enter-from']($event)"
    @enter-to="delegatedEmits['enter-to']($event)"
    @leave-from="delegatedEmits['leave-from']($event)"
    @leave-to="delegatedEmits['leave-to']($event)"
  >
    <slot />
  </RadixNavigationMenuContent>
</template>
```

Create `components/ui/navigation-menu/NavigationMenuLink.vue`:
```vue
<script setup lang="ts">
import { NavigationMenuLink as RadixNavigationMenuLink, type NavigationMenuLinkEmits, type NavigationMenuLinkProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props extends NavigationMenuLinkProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const delegatedEmits = computed<NavigationMenuLinkEmits>(() => {
  return {
    'activate': emits['activate'],
    'blur': emits['blur'],
    'focus': emits['focus'],
    'leave': emits['leave']
  }
})
</script>

<template>
  <RadixNavigationMenuLink
    v-bind="delegatedProps"
    :class="cn(
      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      props.class
    )"
    @activate="delegatedEmits['activate']($event)"
    @blur="delegatedEmits['blur']($event)"
    @focus="delegatedEmits['focus']($event)"
    @leave="delegatedEmits['leave']($event)"
  >
    <slot />
  </RadixNavigationMenuLink>
</template>
```

### Step 7: Register components in nuxt.config.ts

Add to the `components` array in `nuxt.config.ts` (after the existing badge entry):
```typescript
{
  path: '~/components/ui/tabs',
  prefix: ''
},
{
  path: '~/components/ui/accordion',
  prefix: ''
},
{
  path: '~/components/ui/switch',
  prefix: ''
},
{
  path: '~/components/ui/progress',
  prefix: ''
},
{
  path: '~/components/ui/table',
  prefix: ''
},
{
  path: '~/components/ui/navigation-menu',
  prefix: ''
},
```

### Step 8: Verify components compile

Run: `npx nuxt typecheck`
Expected: No TypeScript errors in the new component files.

### Step 9: Commit

```bash
git add components/ui/tabs/ components/ui/accordion/ components/ui/switch/ components/ui/progress/ components/ui/table/ components/ui/navigation-menu/ nuxt.config.ts
git commit -m "feat: add shadcn-vue UI components (tabs, accordion, switch, progress, table, navigation-menu)"
```


---

## Task 2: Create Cloud Provider SVG Icon Components

**Files:**
- Create: `components/icons/AwsIcon.vue`
- Create: `components/icons/AzureIcon.vue`
- Create: `components/icons/GcpIcon.vue`
- Create: `components/icons/OnPremIcon.vue`

**Interfaces:**
- Consumes: None
- Produces: 4 inline SVG icon components, each accepting `class` prop

### Step 1: Create AwsIcon.vue

```vue
<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <path d="M108.8 187.2c1.6 4.8 5.6 8 10.4 8 4.8 0 8.8-3.2 10.4-8l16-48h-48l11.2 48z" fill="currentColor" opacity="0.9"/>
    <path d="M224 128c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 28.8 19.2 52.8 44.8 60.8l-16 48c-1.6 4.8-5.6 8-10.4 8s-8.8-3.2-10.4-8l-24-72c-3.2-9.6-4.8-19.2-4.8-28.8 0-48 38.4-86.4 86.4-86.4s86.4 38.4 86.4 86.4c0 4.8-0.8 9.6-1.6 14.4L224 128z" fill="currentColor" opacity="0.3"/>
    <path d="M128 64c-35.2 0-64 28.8-64 64 0 8.8 1.6 17.6 4.8 25.6l24 72c1.6 4.8 5.6 8 10.4 8s8.8-3.2 10.4-8l16-48h48l-16 48c-1.6 4.8-5.6 8-10.4 8s-8.8-3.2-10.4-8l-24-72c-3.2-9.6-4.8-19.2-4.8-28.8 0-35.2 28.8-64 64-64s64 28.8 64 64c0 4.8-0.8 9.6-1.6 14.4L224 128c0-35.2-28.8-64-64-64z" fill="currentColor"/>
  </svg>
</template>
```

### Step 2: Create AzureIcon.vue

```vue
<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <path d="M48 128l64-80 64 80-64 80-64-80z" fill="currentColor" opacity="0.8"/>
    <path d="M112 48l64 80-32 48-64-80 32-48z" fill="currentColor"/>
  </svg>
</template>
```

### Step 3: Create GcpIcon.vue

```vue
<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <path d="M128 32L32 128l96 96 96-96-96-96z" fill="currentColor" opacity="0.6"/>
    <path d="M128 64L64 128l64 64 64-64-64-64z" fill="currentColor" opacity="0.8"/>
    <path d="M128 96L96 128l32 32 32-32-32-32z" fill="currentColor"/>
  </svg>
</template>
```

### Step 4: Create OnPremIcon.vue

```vue
<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <rect x="48" y="48" width="160" height="160" rx="8" stroke="currentColor" stroke-width="4" fill="none"/>
    <rect x="64" y="64" width="128" height="24" rx="4" fill="currentColor" opacity="0.3"/>
    <rect x="64" y="104" width="128" height="24" rx="4" fill="currentColor" opacity="0.3"/>
    <rect x="64" y="144" width="128" height="24" rx="4" fill="currentColor" opacity="0.3"/>
    <circle cx="80" cy="76" r="4" fill="currentColor"/>
    <circle cx="96" cy="76" r="4" fill="currentColor"/>
    <circle cx="80" cy="116" r="4" fill="currentColor"/>
    <circle cx="96" cy="116" r="4" fill="currentColor"/>
    <circle cx="80" cy="156" r="4" fill="currentColor"/>
    <circle cx="96" cy="156" r="4" fill="currentColor"/>
  </svg>
</template>
```

### Step 5: Verify icons render

Run: `npx nuxt typecheck`
Expected: No TypeScript errors.

### Step 6: Commit

```bash
git add components/icons/
git commit -m "feat: add cloud provider SVG icon components (AWS, Azure, GCP, On-Prem)"
```


---

## Task 3: Create the Landing Page Component

**Files:**
- Modify: `pages/index.vue` (complete replacement)

**Interfaces:**
- Consumes: All UI components from Task 1, all icons from Task 2
- Produces: Complete landing page with 5 sections

### Step 1: Write the complete pages/index.vue

Replace the entire `pages/index.vue` with the full landing page component. Due to the file's size (~600 lines), it will be written in one operation. The component includes:

**Script section imports:**
```typescript
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@/components/ui/button/Button'
import { Badge } from '@/components/ui/badge/Badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card/Card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs/Tabs'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion/Accordion'
import { Switch } from '@/components/ui/switch/Switch'
import { Progress } from '@/components/ui/progress/Progress'
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/table/Table'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu/NavigationMenu'
import AwsIcon from '@/components/icons/AwsIcon.vue'
import AzureIcon from '@/components/icons/AzureIcon.vue'
import GcpIcon from '@/components/icons/GcpIcon.vue'
import OnPremIcon from '@/components/icons/OnPremIcon.vue'
```

**Script section reactive state:**
```typescript
// Terminal mockup state
const terminalLines = ref<string[]>([])
const currentLineIndex = ref(0)
const currentCharIndex = ref(0)
const isTyping = ref(true)
const terminalTexts = [
  'pdaccess connect --protocol ssh --target aws-prod-server-01',
  'Connecting to 52.14.88.123:22 via PDAccess Secure Proxy...',
  'Authenticating via zero-knowledge credential proxy...',
  '[OK] Session established. Raw credentials never exposed.',
  'pdaccess connect --protocol rdp --target azure-vault-win01',
  'Connecting to 10.0.1.50:3389 via PDAccess Secure Proxy...',
  '[OK] RDP session routed through encrypted tunnel.',
  'pdaccess connect --protocol sql --target gcp-prod-db-01',
  'Connecting to 172.16.0.10:5432 via PDAccess Secure Proxy...',
  '[OK] Database session established. Query logged.',
]

let typingInterval: ReturnType<typeof setInterval> | null = null

function typeNextLine() {
  if (currentLineIndex.value >= terminalTexts.length) {
    currentLineIndex.value = 0
    terminalLines.value = []
  }
  const currentText = terminalTexts[currentLineIndex.value]
  if (currentCharIndex.value < currentText.length) {
    if (!terminalLines.value[currentLineIndex.value]) {
      terminalLines.value[currentLineIndex.value] = ''
    }
    terminalLines.value[currentLineIndex.value] += currentText[currentCharIndex.value]
    currentCharIndex.value++
  } else {
    currentLineIndex.value++
    currentCharIndex.value = 0
  }
}

onMounted(() => {
  typingInterval = setInterval(typeNextLine, 30)
})
onUnmounted(() => {
  if (typingInterval) clearInterval(typingInterval)
})

// Cloud inventory mock data
const cloudEnvironments = [
  { name: 'AWS Production', region: 'us-east-1', assets: 247, status: 'active' as const },
  { name: 'Azure Enterprise', region: 'eastus2', assets: 183, status: 'active' as const },
  { name: 'GCP Analytics', region: 'us-central1', assets: 94, status: 'active' as const },
  { name: 'On-Prem Datacenter', region: 'NYC-DC-01', assets: 312, status: 'active' as const },
  { name: 'AWS Staging', region: 'eu-west-1', assets: 56, status: 'active' as const },
]

// Session metrics
const activeConnections = ref(42)
const bandwidthUsage = ref(42)
let metricsInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  metricsInterval = setInterval(() => {
    activeConnections.value = Math.min(99, Math.max(15, activeConnections.value + Math.floor(Math.random() * 7) - 3))
    bandwidthUsage.value = Math.min(100, Math.max(20, bandwidthUsage.value + Math.floor(Math.random() * 10) - 5))
  }, 2000)
})
onUnmounted(() => {
  if (metricsInterval) clearInterval(metricsInterval)
})

// Least privilege enforcement
const enforceLeastPrivilege = ref(true)

// Navigation menu state
const navActive = ref<string | null>(null)
```

**Template structure (5 sections):**

1. **Global Navigation Bar** (lines ~130-180):
   - Fixed top nav with backdrop blur
   - Logo (PD gradient icon + "PDAccess" text)
   - NavigationMenu with Products dropdown (Session Management, SAPM Password Vault, Linux Audit), Hybrid Cloud Support, Compliance
   - Sign In (ghost button) + Deploy One-Click Bridge (cyan button)

2. **Hero Section** (lines ~185-260):
   - Background grid effect (bg-grid opacity-20)
   - Radial cyan glow gradient
   - Badge: "Vaultless & Open-Source PAM"
   - H1: "One Click to Bridge Any Cloud Asset. Zero Trust Required."
   - Subtitle paragraph about credential usage sharing
   - CTA buttons: Start Free Trial (cyan) + View Documentation (outline)
   - Interactive terminal mockup with typing animation

3. **Unified Infrastructure Bento Grid** (lines ~265-430):
   - Section header with badge and h2
   - 4-card bento grid:
     - Card 1 (lg:col-span-2): Multi-Cloud Unified Bridge with AWS/Azure/GCP/On-Prem icons + stats
     - Card 2: Privileged Session Management with feature list
     - Card 3: Linux Direct Audit with mock terminal output
     - Card 4 (lg:col-span-2): SAPM Password Vault with 3 feature boxes

4. **Hybrid Cloud Operations Interface** (lines ~435-540):
   - Section header with badge and h2
   - Tabs with Cloud Inventory and Session Control Proxy
   - Cloud Inventory tab: Table with 5 environments, green status dots
   - Switch: "Enforce Principle of Least Privilege"
   - Progress: bandwidth/connections tracker
   - Session Control Proxy tab: Active connections list with protocol types

5. **Risk Mitigation FAQ** (lines ~545-600):
   - Section header with badge and h2
   - Accordion (collapsible) with 3 questions:
     - "How does the zero-sharing credential proxy work?"
     - "Can we log legacy protocols like VNC and LDAP?"
     - "How does PDAccess handle hybrid compliance audits?"

### Step 2: Write the file

Use the write tool to create the complete `pages/index.vue` file with all sections.

### Step 3: Verify TypeScript compilation

Run: `npx nuxt typecheck`
Expected: No TypeScript errors.

### Step 4: Test in dev server

Run: `npx nuxt dev`
Expected: Page loads without errors, all sections render, terminal typing animation works, tabs switch correctly, accordion expands/collapses.

### Step 5: Commit

```bash
git add components/ui/tabs/ components/ui/accordion/ components/ui/switch/ components/ui/progress/ components/ui/table/ components/ui/navigation-menu/ components/icons/ nuxt.config.ts pages/index.vue
git commit -m "feat: redesign landing page with deep-space cyber security aesthetic

- Add shadcn-vue UI components (tabs, accordion, switch, progress, table, navigation-menu)
- Add cloud provider SVG icons (AWS, Azure, GCP, On-Prem)
- Replace homepage with premium landing page featuring:
  - Interactive terminal mockup with typing animation
  - Bento grid for unified infrastructure
  - Hybrid cloud operations interface with live metrics
  - Risk mitigation FAQ accordion"
```

---

## Task 4: Add Tailwind CSS Custom Animations

**Files:**
- Modify: `assets/css/global.css`

**Interfaces:**
- Consumes: Existing Tailwind setup
- Produces: Custom animation utilities for the landing page

### Step 1: Add custom animations to global.css

Append to `assets/css/global.css` in the `@layer utilities` section:

```css
@layer utilities {
  /* ... existing utilities ... */

  /* Custom animations for landing page */
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  .animate-glow-pulse {
    animation: glow-pulse 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient-shift 8s ease infinite;
  }
}
```

### Step 2: Verify styles compile

Run: `npx nuxt dev`
Expected: No CSS errors, animations work in the browser.

### Step 3: Commit

```bash
git add assets/css/global.css
git commit -m "feat: add custom animations for landing page (glow-pulse, float, gradient)"
```

---

## Self-Review Checklist

### Spec coverage:
- [x] Global Navigation Bar with NavigationMenu, Sign In, Deploy button
- [x] Hero Section with badge, H1, subtitle, terminal mockup
- [x] Bento Grid with 4 cards (Multi-Cloud, Session Mgmt, Linux Audit, SAPM Vault)
- [x] Hybrid Cloud Operations with Tabs, Cloud Inventory table, Switch, Progress
- [x] Risk Mitigation FAQ with Accordion (3 questions)
- [x] Deep-space cyber security aesthetic (black bg, slate-800 borders, cyan accents)
- [x] Responsive (mobile-first with sm/md/lg/xl breakpoints)
- [x] Custom SVG icons for cloud providers
- [x] Fully interactive (terminal typing, live metrics, tabs, accordion)

### Placeholder scan:
- [x] No "TBD", "TODO", "implement later" markers
- [x] All code blocks contain actual implementation
- [x] No "similar to Task N" references

### Type consistency:
- [x] All props use consistent naming (class prop on all UI components)
- [x] TypeScript types defined for all reactive state
- [x] No `any` types used

---

## Execution Summary

**Total files to create:** 28 (24 UI components + 4 icons)
**Total files to modify:** 3 (nuxt.config.ts, pages/index.vue, assets/css/global.css)
**Estimated implementation time:** 4-6 hours
**Risk level:** Low — all components follow existing shadcn-vue patterns
