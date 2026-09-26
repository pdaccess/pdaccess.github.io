<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <h3 :class="cn('text-2xl font-medium leading-none tracking-tight', props.class)">
    <slot />
  </h3>
</template>
