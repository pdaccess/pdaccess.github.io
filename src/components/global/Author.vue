<template>
  <div class="flex items-center space-x-4">
    <img :src="author.image" class="w-12 h-12 rounded-full" alt="Author" />
    <div>
      <h4 class="font-semibold text-dark-200">Author</h4>
      <p class="text-dark-300">{{ author.name }}</p>
      <p class="text-dark-400 text-sm">{{ author.bio }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  author: {
    image: string
    name: string
    bio: string
  }
}>()
</script>
