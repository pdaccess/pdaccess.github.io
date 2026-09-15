<template>
  <div>
    <Section :full="false">
      <div class="container fluid">
        <div class="columns is-multiline">
          <div class="card column is-4 has-background-primary" v-for="(page, index) in pages" :key="index">
            <NuxtLink :to="`/solution/${page.slug}`" class="text-primary font-bold hover:underline">
              <div class="card-image has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                  <img :src="page.image" alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="title">{{ page.title }}</p>
                  <p class="subtitle">{{ page.description }}</p>
                  <br />
                  <time datetime="2016-1-1">{{ page.time }}</time>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'

definePageMeta({ layout: 'default' })

const { data: pages } = await useAsyncData('solutions', async () => {
  const solutions = await queryContent('solution').find()
  return solutions.sort((a, b) => (b.time || 0) - (a.time || 0))
})
</script>

<style>
@media only screen and (max-width: 800px) {
  .features {
    display: flex !important;
  }
  .features .is-parent {
    width: 100px !important;
  }
  .features .tag {
    font-size: 0.75rem !important;
  }
  .level-item {
    margin-top: 25px !important;
  }
}
.sc-chat-window {
  z-index: 100000;
}
</style>
