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
