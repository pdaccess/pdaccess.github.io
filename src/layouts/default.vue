<template>
  <div class="min-h-screen bg-dark-950 text-dark-100">
    <Header />
    <NuxtPage />
    <ChatWidget />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#app'

useHead({
  title: 'PDAccess, Next Generation Privileged Access Management',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'PDAccess, Next Generation and Open Source Privileged Access Management and Identity Access Management Tool both cloud and on-prem environment'
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.pdaccess.com' },
    { hid: 'og:title', property: 'og:title', content: 'PDAccess, Next Generation PAM and IAM' },
    { hid: 'og:site_name', property: 'og:site_name', content: 'PDAccess' },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://www.pdaccess.com/favicon/apple-icon-152x152.png'
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: 'PDAccess, Next Generation PAM and IAM Software'
    },
    { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.pdaccess.com' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'PDAccess' },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Next Generation PAM and IAM'
    },
    { hid: 'twitter:creator', name: 'twitter:creator', content: '@pdaccess' },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://www.pdaccess.com/favicon/apple-icon-152x152.png'
    }
  ]
})
</script>
