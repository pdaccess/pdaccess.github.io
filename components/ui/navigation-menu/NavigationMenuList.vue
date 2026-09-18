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
