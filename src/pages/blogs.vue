<template>
  <Section class="section has-background-light">
    <div class="fixed-grid has-2-cols">
      <div class="grid is-gap-2">
        <div class="cell" v-for="(page, index) in pages" :key="index">
          <div class="card is-one-quarter has-background-primary">
            <NuxtLink :to="`/blog/${page.slug}`" class="font-bold hover:underline">
              <div class="card-image" v-if="page.image">
                <figure class="image is-64x64">
                  <img :src="`/uploads/blog/${page.image}`" alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="title is-3">{{ page.title }}</p>
                  <p class="subtitle is-5">{{ page.description }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'

definePageMeta({ layout: 'default', transition: 'fade' })

const { data: pages } = await useAsyncData('blogs', async () => {
  const content = await useContent()
  const blogPosts = await content.getCollection('blog').find()
  return blogPosts.sort((a, b) => (b.time || 0) - (a.time || 0))
})
</script>
