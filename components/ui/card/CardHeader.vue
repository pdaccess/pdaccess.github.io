<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <div :class="cn('flex flex-col space-y-1.5 pb-6 pt-4', props.class)">
    <slot />
  </div>
</template>
