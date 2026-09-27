<script setup lang="ts">
import { useFetch } from '#app'

definePageMeta({
  layout: 'landing'
})

const { data: pages } = await useFetch('/api/content/docs', {
  key: 'docs',
  pick: ['id', 'title', 'description']
})

useHead({
  title: 'Documentation — PDAccess',
  meta: [
    { name: 'description', content: 'PDAccess documentation for Security Admins, IAM Admins, and PAM Admins.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0f] text-white">
    <Header />
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
      <div class="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent animate-glow-pulse"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Documentation</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Learn How to Use
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> PDAccess</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            Comprehensive guides for administrators, developers, and security teams.
          </p>
        </div>
        <div v-if="pages && pages.length" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            v-for="page in pages"
            :key="page._path"
            class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors group"
          >
            <NuxtLink :to="`/docs/${page.id}`" class="block">
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
          <p class="text-slate-400 text-lg">No documentation available yet.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
