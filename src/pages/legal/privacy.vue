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

const { data: article } = await useAsyncData('legal-privacy', async () => {
  return await queryContent('legal').where({ _path: '/privacy' }).first()
})
</script>
