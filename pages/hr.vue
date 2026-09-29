<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { useFetch } from '#app'
import CvForm from '~/components/forms/CVForm.vue'

const route = useRoute()
const jobSlug = route.query.slug as string || 'cybersecurity_developer'

const { data: job } = await useFetch(`/api/content/hr?slug=${jobSlug}`, {
  key: `hr-${jobSlug}`
})

useHead({
  title: 'Careers - PDAccess',
  meta: [
    { name: 'description', content: 'Join the PDAccess team. We\'re looking for cybersecurity and software experts.' }
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
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Careers</Badge>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-balance leading-tight mb-4">
            {{ job?.title || 'Careers at PDAccess' }}
          </h1>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            {{ job?.description || 'Join our team of cybersecurity and software experts.' }}
          </p>
          <div class="flex items-center justify-center gap-4 text-sm text-slate-500">
            <NuxtLink to="/hr" class="text-cyan-400 hover:text-cyan-300">Back to All Jobs</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Job Content -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose-dark max-w-none" v-if="job" v-html="job?.body" />
        <div class="mt-12">
          <CvForm />
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
