<template>
  <Section :full="false">
    <template #head>
      <div class="container-narrow">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
        <p class="text-dark-300 text-lg max-w-2xl mx-auto">Latest news and updates from the PDAccess team</p>
      </div>
    </template>

    <div class="container-narrow">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="page in pages" :key="page._path" class="card overflow-hidden group cursor-pointer">
          <NuxtLink :to="`/blog/${page.slug}`">
            <div v-if="page.image" class="h-48 overflow-hidden">
              <img :src="`/uploads/blog/${page.image}`" :alt="page.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div v-else class="h-48 bg-dark-800 flex items-center justify-center">
              <span class="text-dark-500 text-sm">No image</span>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ page.title }}</h3>
              <p class="text-dark-400 text-sm mb-3">{{ page.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-dark-500 text-xs">{{ page.updatedAt }}</span>
                <span class="text-primary-400 text-sm font-medium group-hover:text-primary-300">Read more →</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'

definePageMeta({ layout: 'default' })

const { data: pages } = await useAsyncData('blog-list', async () => {
  return await queryContent('blog').sort({ updatedAt: -1 }).find()
})
</script>
