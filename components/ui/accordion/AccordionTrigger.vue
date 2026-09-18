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
