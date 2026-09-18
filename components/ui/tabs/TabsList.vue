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
