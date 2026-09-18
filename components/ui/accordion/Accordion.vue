<script setup lang="ts">
import { AccordionRoot, type AccordionRootEmits, type AccordionRootProps } from 'radix-vue'

interface Props extends AccordionRootProps {
  class?: string
}

const props = defineProps<Props>()
const emits = defineEmits<AccordionRootEmits>()
</script>

<template>
  <AccordionRoot v-bind="props" class="w-full" @update:model-value="emits('update:modelValue', $event)">
    <slot />
  </AccordionRoot>
</template>
