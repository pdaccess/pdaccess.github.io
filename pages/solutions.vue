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

const { data: solutions } = await useAsyncData('solutions', async () => {
  const items = await queryContent('solution').find()
  return items.sort((a: any, b: any) => (b.time || 0).localeCompare(a.time || 0))
}, {
  watch: []
})

const { data: blogs } = await useAsyncData('blogs', async () => {
  const items = await queryContent('blog').sort({ updatedAt: -1 }).find()
  return items
}, {
  watch: []
})

useHead({
  title: 'Solutions - PDAccess',
  meta: [
    { name: 'description', content: 'Explore how PDAccess solves real-world privileged access management challenges across cloud and on-premises environments.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Solutions</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Solve Your Access
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Challenges.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            Explore how PDAccess solves real-world access management challenges across cloud and on-premises environments.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/"><Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800">Back to Home</Button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="solutions && solutions.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="solution in solutions" :key="solution._path" class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors group">
            <NuxtLink :to="solution._path" class="block">
              <div v-if="solution.image" class="h-48 overflow-hidden rounded-t-lg">
                <img :src="solution.image" :alt="solution.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div v-else class="h-48 bg-slate-800/50 flex items-center justify-center rounded-t-lg">
                <span class="text-slate-500 text-sm">No image</span>
              </div>
              <CardHeader>
                <CardTitle class="text-white group-hover:text-cyan-400 transition-colors">{{ solution.title }}</CardTitle>
                <CardDescription class="text-slate-400">{{ solution.description }}</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-500">{{ solution.time }}</span>
                  <span class="text-cyan-400 text-sm font-medium group-hover:text-cyan-300">Read more →</span>
                </div>
              </CardContent>
            </NuxtLink>
          </Card>
        </div>
        <div v-else class="text-center py-20">
          <p class="text-slate-400 text-lg">No solutions available yet.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600"></div>
            <span class="text-sm text-slate-400">&copy; 2026 PDAccess. All rights reserved.</span>
          </div>
          <div class="flex items-center gap-6 text-sm text-slate-400">
            <NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink>
            <NuxtLink to="/blogs" class="hover:text-white transition-colors">Blog</NuxtLink>
            <a href="#" class="hover:text-white transition-colors">Documentation</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
