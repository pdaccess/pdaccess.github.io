<template>
  <Section :full="true">
    <div class="container box">
      <div class="content is-medium">
        <NuxtContent :document="article" />
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'

definePageMeta({ layout: 'default' })

const { data: article } = await useAsyncData('terms', async () => {
  const content = await useContent()
  return await content.findOne('legal', 'terms_and_conditions')
})
</script>
