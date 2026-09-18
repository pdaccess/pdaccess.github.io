<script setup lang="ts">
interface Props {
  class?: string
}
defineProps<Props>()
</script>

<template>
  <svg :class="class" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6">
    <rect x="48" y="48" width="160" height="160" rx="8" stroke="currentColor" stroke-width="4" fill="none"/>
    <rect x="64" y="64" width="128" height="24" rx="4" fill="currentColor" opacity="0.3"/>
    <rect x="64" y="104" width="128" height="24" rx="4" fill="currentColor" opacity="0.3"/>
    <rect x="64" y="144" width="128" height="24" rx="4" fill="currentColor" opacity="0.3"/>
    <circle cx="80" cy="76" r="4" fill="currentColor"/>
    <circle cx="96" cy="76" r="4" fill="currentColor"/>
    <circle cx="80" cy="116" r="4" fill="currentColor"/>
    <circle cx="96" cy="116" r="4" fill="currentColor"/>
    <circle cx="80" cy="156" r="4" fill="currentColor"/>
    <circle cx="96" cy="156" r="4" fill="currentColor"/>
  </svg>
</template>
