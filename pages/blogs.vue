<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { useAsyncData } from '#app'
import Badge from '@/components/ui/badge/Badge.vue'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import CardContent from '@/components/ui/card/CardContent.vue'
import Button from '@/components/ui/button/Button.vue'

const { data: blogs } = await useFetch('/api/content/blog', {
  key: 'blogs',
  parse: (res) => {
    return res?.sort((a: any, b: any) => (b.updatedAt || '').localeCompare(a.updatedAt || '')) || []
  }
})

useHead({
  title: 'Blog - PDAccess',
  meta: [
    { name: 'description', content: 'Latest news and updates from the PDAccess team on cloud security, PAM, and identity management.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <!-- Header Navigation -->
    <Header />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Blog</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Latest from the
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> PDAccess Team.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            News, tutorials, and insights on cloud security, privileged access management, and identity management.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/"><Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">Back to Home</Button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Blog Post -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="blogs && blogs.length" class="mb-16">
          <NuxtLink :to="blogs[0]._path" class="block">
            <Card class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors overflow-hidden">
              <div class="grid md:grid-cols-2">
                <div v-if="blogs[0].image" class="h-64 md:h-auto overflow-hidden">
                  <img :src="`/uploads/blog/${blogs[0].image}`" :alt="blogs[0].title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div v-else class="h-64 md:h-auto bg-slate-800/50 flex items-center justify-center">
                  <span class="text-slate-500 text-sm">No image</span>
                </div>
                <div class="p-8 flex flex-col justify-center">
                  <Badge class="self-start mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10 w-fit">Featured</Badge>
                  <CardHeader class="p-0 space-y-2">
                    <CardTitle class="text-2xl md:text-3xl text-white">{{ blogs[0].title }}</CardTitle>
                    <CardDescription class="text-slate-400 text-base">{{ blogs[0].description }}</CardDescription>
                  </CardHeader>
                  <CardContent class="p-0 mt-4">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-slate-500">{{ blogs[0].updatedAt }}</span>
                      <span class="text-cyan-400 font-medium">Read more →</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="blogs && blogs.length > 1" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card v-for="blog in blogs.slice(1)" :key="blog._path" class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors group">
            <NuxtLink :to="blog._path" class="block">
              <div v-if="blog.image" class="h-48 overflow-hidden rounded-t-lg">
                <img :src="`/uploads/blog/${blog.image}`" :alt="blog.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div v-else class="h-48 bg-slate-800/50 flex items-center justify-center rounded-t-lg">
                <span class="text-slate-500 text-sm">No image</span>
              </div>
              <CardHeader>
                <CardTitle class="text-white group-hover:text-cyan-400 transition-colors">{{ blog.title }}</CardTitle>
                <CardDescription class="text-slate-400">{{ blog.description }}</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-500">{{ blog.updatedAt }}</span>
                  <span class="text-cyan-400 text-sm font-medium group-hover:text-cyan-300">Read more →</span>
                </div>
              </CardContent>
            </NuxtLink>
          </Card>
        </div>
        <div v-else class="text-center py-20">
          <p class="text-slate-400 text-lg">No blog posts available yet.</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
