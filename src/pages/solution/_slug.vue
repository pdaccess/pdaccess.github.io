<template>
  <div>
    <Section :full="false">
      <div class="container has-text-centered">
        <h1 class="is-spaced title is-1">{{ article.title }}</h1>
        <h2 class="subtitle is-3">{{ article.description }}</h2>
      </div>
    </Section>
    <section class="section">
      <div class="container box">
        <img :src="article.img" :alt="article.alt" />
        <div class="content is-medium">
          <NuxtContent :document="article" />
        </div>
        <br />
        <p>Article last updated: {{ article.updatedAt }}</p>
        <PrevNext :prev="prev" :next="next" base="solution" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'
import PrevNext from '~/components/global/PrevNext.vue'

definePageMeta({ layout: 'default' })

const { $route } = useNuxtApp() as any
const slug = $route.params.slug

if (slug === 'undefined' || !slug) {
  throw createError({ statusCode: 404, message: 'Page Not Found' })
}

const { data: article } = await useAsyncData(`solution-${slug}`, async () => {
  const content = await useContent()
  return await content.findOne('solution', slug)
})

const { data: surroundData } = await useAsyncData(`solution-surround-${slug}`, async () => {
  const content = await useContent()
  return await content.getCollection('solution').surround(slug, {
    fields: ['title', 'slug']
  }).find()
})

const prev = surroundData.value?.[0] || null
const next = surroundData.value?.[1] || null
</script>
