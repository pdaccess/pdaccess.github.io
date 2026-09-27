<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { useFetch } from '#app'

const { data: article } = await useFetch('/api/content/privacy', {
  key: 'legal-privacy'
})

useHead({
  title: 'Privacy Policy - PDAccess',
  meta: [
    { name: 'description', content: 'PDAccess privacy policy. Learn how we collect, use, and protect your personal information.' }
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
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Legal</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            Privacy Policy
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            How we collect, use, and protect your personal information.
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <NuxtLink to="/legal/privacy" class="text-cyan-400 hover:text-cyan-300">Legal Pages</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose-dark max-w-none" v-html="article?.body" />
      </div>
    </section>

    <Footer />
  </div>
</template>
