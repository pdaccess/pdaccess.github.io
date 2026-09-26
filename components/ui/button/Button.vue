<script setup lang="ts">
import { buttonVariants } from './button.variants'
import { cn } from '@/lib/utils'

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  class?: string
}

const props = withDefaults(defineProps<Pick<Props, 'variant' | 'size' | 'class'>>(), {
  variant: 'default',
  size: 'default',
})
</script>

<template>
  <button
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
