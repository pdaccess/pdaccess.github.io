<template>
  <div>
    <Section :full="false">
      <div class="container-narrow">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">{{ article.title }}</h1>
        <p class="text-dark-400 text-lg mb-4">{{ article.description }}</p>
        <p class="text-dark-500 text-sm">Updated: {{ article.updatedAt }}</p>
      </div>
    </Section>
    <section class="py-16 bg-dark-950">
      <div class="container-narrow">
        <div v-if="article.image" class="mb-8">
          <img :src="`/uploads/blog/${article.image}`" :alt="article.title" class="w-full rounded-xl shadow-lg" />
        </div>
        <div class="prose prose-invert max-w-none">
          <NuxtContent :document="article" />
        </div>
        <div class="mt-12 pt-8 border-t border-dark-800">
          <PrevNext :prev="prev" :next="next" base="blog" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData, useRoute } from '#app'
import Section from '~/components/Section.vue'
import PrevNext from '~/components/global/PrevNext.vue'

definePageMeta({ layout: 'default' })

const route = useRoute()
const slug = route.params.slug as string

if (slug === 'undefined' || !slug) {
  throw createError({ statusCode: 404, message: 'Page Not Found' })
}

const { data: article } = await useAsyncData(`blog-${slug}`, async () => {
  return await queryContent('blog').where({ _path: `/${slug}` }).first()
})

const { data: surroundData } = await useAsyncData(`blog-surround-${slug}`, async () => {
  return await queryContent('blog').surround(slug, { before: 1, after: 1 }).find()
})

const prev = surroundData.value?.[0] || null
const next = surroundData.value?.[1] || null
</script>
