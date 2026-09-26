<template>
  <div class="flex items-center space-x-4">
    <img :src="author.image" class="w-12 h-12 rounded-full" alt="Author" />
    <div>
      <h4 class="font-semibold text-foreground">Author</h4>
      <p class="text-foreground">{{ author.name }}</p>
      <p class="text-muted-foreground text-sm">{{ author.bio }}</p>
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
