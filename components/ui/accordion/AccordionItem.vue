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
