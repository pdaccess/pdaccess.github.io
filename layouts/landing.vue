<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
  localStorage.setItem('theme', 'dark')
})
</script>
