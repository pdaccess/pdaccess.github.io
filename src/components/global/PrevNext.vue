<template>
  <ul class="flex space-x-4">
    <li>
      <NuxtLink
        v-if="prev"
        :to="`/${base}/${prev.slug}`"
        class="text-primary font-bold hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </li>
    <li>
      <NuxtLink
        v-if="next"
        :to="`/${base}/${next.slug}`"
        class="font-bold hover:underline"
      >
        {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{
  prev?: { slug: string; title: string } | null
  next?: { slug: string; title: string } | null
  base: string
}>()
</script>
