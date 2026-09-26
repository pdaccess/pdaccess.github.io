<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <div :class="cn('flex items-center justify-between px-6 py-4 border-t', props.class)">
    <slot />
  </div>
</template>
