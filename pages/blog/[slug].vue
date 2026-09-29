<script setup lang="ts">
import { computed } from 'vue'
import { useFetch } from '#app'
import PrevNext from '@/components/global/PrevNext.vue'

definePageMeta({
  layout: 'landing'
})

const route = useRoute()
const slug = route.params.slug as string

if (slug === 'undefined' || !slug) {
  throw createError({ statusCode: 404, message: 'Page Not Found' })
}

const { data: article } = await useFetch(`/api/content/blog?slug=${slug}`, {
  key: `blog-${slug}`
})

const { data: blogList } = await useFetch('/api/content/blog', {
  key: 'blog-list'
})

const prev = computed(() => {
  if (!blogList.value?.length) return null
  const items = blogList.value
  const currentIndex = items.findIndex((item: any) => item.slug === slug)
  if (currentIndex > 0) {
    const prevItem = items[currentIndex - 1]
    return { slug: prevItem.slug, title: prevItem.title }
  }
  return null
})

const next = computed(() => {
  if (!blogList.value?.length) return null
  const items = blogList.value
  const currentIndex = items.findIndex((item: any) => item.slug === slug)
  if (currentIndex < items.length - 1) {
    const nextItem = items[currentIndex + 1]
    return { slug: nextItem.slug, title: nextItem.title }
  }
  return null
})

useHead({
  title: article.value?.title || 'Blog Post - PDAccess',
  meta: [
    { name: 'description', content: article.value?.description || 'Insights and updates from the PDAccess team' }
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
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Blog</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            {{ article.title }}
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            {{ article.description }}
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <NuxtLink to="/blogs" class="text-cyan-400 hover:text-cyan-300">Back to Blogs</NuxtLink>
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
          <PrevNext :prev="prev" :next="next" base="blog" />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
