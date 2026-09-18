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
