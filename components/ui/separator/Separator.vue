<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  class?: string
}

const props = defineProps<Pick<Props, 'class'>>()
</script>

<template>
  <hr :class="cn('my-4 border-t', props.class)" />
</template>
