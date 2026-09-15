<template>
  <div class="min-h-screen bg-dark-950">
    <Header />
    <Section :full="true">
      <template #head>
        <div class="container-narrow text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            404 - Page Not Found
          </h1>
          <p class="text-dark-400 text-lg">
            The page you are looking for does not exist.
          </p>
        </div>
      </template>
    </Section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Section from '~/components/Section.vue'

const error = useError()
</script>
