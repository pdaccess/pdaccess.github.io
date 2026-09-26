<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { useFetch } from '#app'
import Badge from '@/components/ui/badge/Badge.vue'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import Button from '@/components/ui/button/Button.vue'

const { data: pages } = await useFetch('/api/content/changelogs', {
  key: 'changelogs',
  parse: (res: any) => {
    return res?.sort((a: any, b: any) => (b.time || 0) - (a.time || 0)) || []
  }
})

useHead({
  title: 'Changelogs - PDAccess',
  meta: [
    { name: 'description', content: 'View the latest changelogs and updates for PDAccess.' }
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
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Changelogs</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            What's New in
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> PDAccess</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            Stay up to date with the latest features, improvements, and security updates.
          </p>
        </div>
      </div>
    </section>

    <!-- Changelogs List -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="pages && pages.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            v-for="page in pages"
            :key="page._path"
            class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors group"
          >
            <NuxtLink :to="`/changelog/${page.id}`" class="block">
              <CardHeader class="pb-4">
                <CardTitle class="text-white group-hover:text-cyan-400 transition-colors text-xl mb-2">
                  {{ page.title }}
                </CardTitle>
                <CardDescription class="text-slate-400 leading-relaxed">
                  {{ page.description }}
                </CardDescription>
              </CardHeader>
            </NuxtLink>
          </Card>
        </div>
        <div v-else class="text-center py-20">
          <p class="text-slate-400 text-lg">No changelogs available yet.</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
