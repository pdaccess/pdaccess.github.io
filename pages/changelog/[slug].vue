<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { computed } from 'vue'
import PrevNext from '@/components/global/PrevNext.vue'

const route = useRoute()
const slug = route.params.slug as string

if (slug === 'undefined' || !slug) {
  throw createError({ statusCode: 404, message: 'Page Not Found' })
}

const { data: article } = await useFetch(`/api/content/changelog?slug=${slug}`, {
  key: `changelog-${slug}`
})

const { data: surroundData } = await useFetch('/api/content/changelogs', {
  key: 'changelog-surround-list'
})

const prev = computed(() => {
  if (!surroundData.value?.length) return null
  const items = surroundData.value.sort((a: any, b: any) => (b.time || 0) - (a.time || 0))
  const currentIndex = items.findIndex((item: any) => item.id === slug)
  if (currentIndex > 0) {
    const prevItem = items[currentIndex - 1]
    return { slug: prevItem.id, title: prevItem.title }
  }
  return null
})

const next = computed(() => {
  if (!surroundData.value?.length) return null
  const items = surroundData.value.sort((a: any, b: any) => (b.time || 0) - (a.time || 0))
  const currentIndex = items.findIndex((item: any) => item.id === slug)
  if (currentIndex < items.length - 1) {
    const nextItem = items[currentIndex + 1]
    return { slug: nextItem.id, title: nextItem.title }
  }
  return null
})

useHead({
  title: article.value?.title || 'Changelog - PDAccess',
  meta: [
    { name: 'description', content: article.value?.description || 'Changelog entry from PDAccess' }
  ]
})
</script>

<template>
  <div v-if="article" class="min-h-screen bg-[#0a0a0f] text-white">
    <!-- Header Navigation -->
    <Header />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Changelog</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            {{ article.title }}
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            {{ article.description }}
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <span>Version {{ article.time || 'latest' }}</span>
            <NuxtLink to="/changelogs" class="text-cyan-400 hover:text-cyan-300">Back to Changelogs</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Article Body -->
        <div class="prose-dark max-w-none" v-html="article?.body" />

        <!-- Prev/Next Navigation -->
        <div class="mt-16 pt-8 border-t border-slate-800">
          <PrevNext :prev="prev" :next="next" base="changelog" />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
