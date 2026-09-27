<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const slug = route.params.slug as string

if (slug === 'undefined' || !slug) {
  throw createError({ statusCode: 404, message: 'Documentation Not Found' })
}

const { data: article } = await useFetch(`/api/content/docs?slug=${slug}`, {
  key: `doc-${slug}`
})

const { data: allDocs } = await useFetch('/api/content/docs', {
  key: 'docs-list'
})

// Build navigation from the docs list
const docIndex = allDocs.value?.findIndex((d: any) => d.id === slug) || -1
const prev = docIndex > 0 ? allDocs.value[docIndex - 1] : null
const next = docIndex < (allDocs.value?.length || 0) - 1 ? allDocs.value[docIndex + 1] : null

useHead({
  title: article.value?.title || 'Documentation - PDAccess',
  meta: [
    { name: 'description', content: article.value?.description || 'PDAccess documentation' }
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
      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Documentation</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            {{ article.title }}
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            {{ article.description }}
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <NuxtLink to="/docs" class="text-cyan-400 hover:text-cyan-300">All Documentation</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Article Body -->
        <div class="prose-dark" v-html="article?.body"></div>

        <!-- Navigation -->
        <div class="mt-16 pt-8 border-t border-slate-800">
          <div class="flex items-center justify-between">
            <NuxtLink
              v-if="prev"
              :to="`/docs/${prev.id}`"
              class="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2"
            >
              ← {{ prev.title }}
            </NuxtLink>
            <span v-else></span>

            <NuxtLink
              to="/docs"
              class="text-slate-400 hover:text-white text-sm"
            >
              Back to all docs
            </NuxtLink>

            <NuxtLink
              v-if="next"
              :to="`/docs/${next.id}`"
              class="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2"
            >
              {{ next.title }} →
            </NuxtLink>
            <span v-else></span>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
    <div class="text-center">
      <p class="text-slate-400 text-lg">Documentation not found.</p>
      <NuxtLink to="/docs" class="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">Back to Documentation</NuxtLink>
    </div>
  </div>
</template>
