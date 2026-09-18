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
