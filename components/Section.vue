<template>
  <section
    :class="[
      'relative',
      full ? 'min-h-[90vh]' : 'py-16 md:py-24',
      'bg-background'
    ]"
  >
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
defineProps<{
  full?: boolean
  background?: string
}>()
</script>
