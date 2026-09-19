<template>
  <div class="min-h-screen bg-background text-foreground">
    <Header />
    <NuxtPage />
    <ChatWidget />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ChatWidget from '~/components/ChatWidget.vue'
</script>
