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
</script>

<template>
  <RadixNavigationMenuLink
    v-bind="delegatedProps"
    :class="cn(
      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      props.class
    )"
    @select="emits('select', $event)"
  >
    <slot />
  </RadixNavigationMenuLink>
</template>
