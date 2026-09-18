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
