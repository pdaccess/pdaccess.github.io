<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <path d="M108.8 187.2c1.6 4.8 5.6 8 10.4 8 4.8 0 8.8-3.2 10.4-8l16-48h-48l11.2 48z" fill="currentColor" opacity="0.9"/>
    <path d="M224 128c0-35.2-28.8-64-64-64s-64 28.8-64 64c0 28.8 19.2 52.8 44.8 60.8l-16 48c-1.6 4.8-5.6 8-10.4 8s-8.8-3.2-10.4-8l-24-72c-3.2-9.6-4.8-19.2-4.8-28.8 0-48 38.4-86.4 86.4-86.4s86.4 38.4 86.4 86.4c0 4.8-0.8 9.6-1.6 14.4L224 128z" fill="currentColor" opacity="0.3"/>
    <path d="M128 64c-35.2 0-64 28.8-64 64 0 8.8 1.6 17.6 4.8 25.6l24 72c1.6 4.8 5.6 8 10.4 8s8.8-3.2 10.4-8l16-48h48l-16 48c-1.6 4.8-5.6 8-10.4 8s-8.8-3.2-10.4-8l-24-72c-3.2-9.6-4.8-19.2-4.8-28.8 0-35.2 28.8-64 64-64s64 28.8 64 64c0 4.8-0.8 9.6-1.6 14.4L224 128c0-35.2-28.8-64-64-64z" fill="currentColor"/>
  </svg>
</template>
