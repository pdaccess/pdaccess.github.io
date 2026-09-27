<script setup lang="ts">
import { useFetch } from '#app'

definePageMeta({
  layout: 'landing'
})

const { data: article } = await useFetch('/api/content/getstarted', {
  key: 'getstarted'
})

useHead({
  title: 'Get Started - PDAccess',
  meta: [
    { name: 'description', content: 'Get started with PDAccess - learn how to deploy and configure your privileged access management solution.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <Header />
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Getting Started</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            {{ article?.title || 'Get Started with PDAccess' }}
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            {{ article?.description || 'Learn how to deploy and configure your privileged access management solution.' }}
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <NuxtLink to="/docs" class="text-cyan-400 hover:text-cyan-300">Read Full Docs</NuxtLink>
            <Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">
              Download
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose-dark max-w-none" v-html="article?.body" />
      </div>
    </section>
    <Footer />
  </div>
</template>
