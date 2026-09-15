<template>
  <section
    :class="[
      'relative',
      full ? 'min-h-[90vh]' : 'py-16 md:py-24',
      isDark
        ? 'bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    ]"
  >
    <div v-if="isDark" class="absolute inset-0 bg-grid opacity-30"></div>
    <div v-if="isDark" class="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent"></div>

    <div class="relative z-10">
      <div v-if="$slots.head" class="pt-24 pb-8 text-center">
        <slot name="head" />
      </div>
      <div class="relative z-10 section-padding">
        <slot />
      </div>
      <div v-if="$slots.foot" class="pb-8">
        <slot name="foot" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()

defineProps<{
  full?: boolean
  background?: string
}>()
</script>
