<script setup lang="ts">
import { useFetch } from '#app'

definePageMeta({
  layout: 'landing'
})

const { data: article } = await useFetch('/api/content/about', {
  key: 'about',
  pick: ['id', 'title', 'description', 'content']
})

useHead({
  title: 'About - PDAccess',
  meta: [
    { name: 'description', content: 'Learn about PDAccess - zero-knowledge privileged access management and open-source identity solutions.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <Header />
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">About</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            About PDAccess
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Zero-knowledge privileged access management and open-source identity solutions.
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <NuxtLink to="/docs" class="text-cyan-400 hover:text-cyan-300">Read Docs</NuxtLink>
            <Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
