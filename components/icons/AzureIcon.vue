<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <path d="M48 128l64-80 64 80-64 80-64-80z" fill="currentColor" opacity="0.8"/>
    <path d="M112 48l64 80-32 48-64-80 32-48z" fill="currentColor"/>
  </svg>
</template>
