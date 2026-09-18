<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <path d="M128 32L32 128l96 96 96-96-96-96z" fill="currentColor" opacity="0.6"/>
    <path d="M128 64L64 128l64 64 64-64-64-64z" fill="currentColor" opacity="0.8"/>
    <path d="M128 96L96 128l32 32 32-32-32-32z" fill="currentColor"/>
  </svg>
</template>
