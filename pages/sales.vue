<script setup lang="ts">
definePageMeta({
  layout: 'landing'
})

import Badge from '@/components/ui/badge/Badge.vue'
import Card from '@/components/ui/card/Card.vue'
import CardHeader from '@/components/ui/card/CardHeader.vue'
import CardTitle from '@/components/ui/card/CardTitle.vue'
import CardDescription from '@/components/ui/card/CardDescription.vue'
import Button from '@/components/ui/button/Button.vue'
import SalesForm from '~/components/forms/Sales.vue'

useHead({
  title: 'Sales - PDAccess',
  meta: [
    { name: 'description', content: 'Contact our sales team for demonstrations, pricing, and enterprise solutions.' }
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
          <Badge class="mb-6 border-cyan-500/30 text-cyan-400 bg-cyan-500/10">Sales</Badge>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
            Questions?
            <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Let's Talk.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 text-balance">
            The PDAccess Team is ready to answer your questions about our product and solutions.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/"><Button variant="outline" class="border-slate-700 text-slate-300 hover:bg-slate-800 bg-slate-900">Back to Home</Button></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Sales Form Section -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">
          <div class="text-right">
            <h2 class="text-2xl font-bold text-white mb-4">Request a Demonstration</h2>
            <p class="text-slate-400 text-lg mb-6">
              You may utilize the provided form to request a demonstration or pose inquiries regarding our product and solution offerings. Please do not hesitate to reach out to us for assistance.
            </p>
            <div class="space-y-3 text-slate-300">
              <div class="flex items-center gap-2 justify-end">
                <span>Email:</span>
                <a href="mailto:sales@pdaccess.com" class="text-cyan-400 hover:text-cyan-300">sales@pdaccess.com</a>
              </div>
            </div>
          </div>
          <div>
            <Card class="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle class="text-white">Sales Inquiry</CardTitle>
                <CardDescription class="text-slate-400">We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <SalesForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
