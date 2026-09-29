<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})


useHead({
  title: 'Thank You - PDAccess',
  meta: [
    { name: 'description', content: 'Thank you for reaching out to PDAccess. We will contact you soon.' }
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
          <Badge class="mb-6 border-green-500/30 text-green-400 bg-green-500/10">Success</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Thank You!
            <span class="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent"> We'll Be in Touch.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            Thank you for reaching out to us. We will contact you shortly.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/"><Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">Back to Home</Button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
