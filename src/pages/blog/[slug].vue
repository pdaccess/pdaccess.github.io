<template>
  <div>
    <Section :full="false">
      <div class="container has-text-left">
        <h1 class="is-spaced title is-1">{{ article.title }}</h1>
        <h2 class="subtitle is-3">{{ article.description }}</h2>
      </div>
    </Section>
    <section class="section">
      <div class="container">
        <img :src="article.img" :alt="article.alt" />
        <div class="content is-medium">
          <NuxtContent :document="article" />
        </div>
        <br />
        <p>Article last updated: {{ article.updatedAt }}</p>
        <PrevNext :prev="prev" :next="next" base="blog" />
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
