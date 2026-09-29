<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import { useAsyncData } from '#app'

const { data: solutions } = await useFetch('/api/content/solution', {
  key: 'solutions',
  parse: (res) => {
    return res?.sort((a: any, b: any) => (b.time || 0).localeCompare(a.time || 0)) || []
  }
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
    <!-- Header Navigation -->
    <Header />

    <!-- Hero Section -->
    <section class="relative pt-32 pb-12 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-10"></div>
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
            <NuxtLink to="/"><Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">Back to Home</Button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Solution -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="solutions && solutions.length" class="mb-16">
          <NuxtLink :to="solutions[0]._path" class="block">
            <Card class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors overflow-hidden">
              <div class="grid md:grid-cols-2">
                <div v-if="solutions[0].image" class="h-64 md:h-auto overflow-hidden">
                  <img :src="solutions[0].image" :alt="solutions[0].title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div v-else class="h-64 md:h-auto bg-slate-800/50 flex items-center justify-center">
                  <span class="text-slate-500 text-sm">No image</span>
                </div>
                <div class="p-8 flex flex-col justify-center">
                  <Badge class="self-start mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-500/10 w-fit">Featured</Badge>
                  <CardHeader class="p-0 space-y-2">
                    <CardTitle class="text-2xl md:text-3xl text-white">{{ solutions[0].title }}</CardTitle>
                    <CardDescription class="text-slate-400 text-base">{{ solutions[0].description }}</CardDescription>
                  </CardHeader>
                  <CardContent class="p-0 mt-4">
                    <div class="flex items-center justify-between">
                      <span class="text-sm text-slate-500">{{ solutions[0].time }}</span>
                      <span class="text-cyan-400 font-medium group-hover:text-cyan-300">Read more →</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="solutions && solutions.length > 1" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="solution in solutions.slice(1)" :key="solution._path" class="bg-slate-900/50 border-slate-800 hover:border-cyan-500/30 transition-colors group">
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

    <Footer />
  </div>
</template>
