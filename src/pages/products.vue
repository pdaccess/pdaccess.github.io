<template>
  <div>
    <Section>
      <template #head>
        <div class="columns">
          <div class="column">
            <div class="section-heading has-text-centered">
              <h3 class="title is-2 text-gray">Enterprise Features</h3>
              <h4 class="subtitle is-5 text-gray">
                You can choose your package with support. You will find
                subscription or annually support packages. For details:
                <a href="mailto:sales@pdaccess.com">sales@pdaccess.com</a>
              </h4>
            </div>
          </div>
        </div>
      </template>
      <div class="columns">
        <div class="column" v-for="(page, index) in pages" :key="index">
          <NuxtLink
            :to="`/product/${page.slug}`"
            class="text-primary hover:underline"
          >
            <div class="card has-background-primary is-dark">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img src="@/assets/logos/pdaccess_white_logo.png" alt="PDAccess Image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="subtitle">{{ page.title }}</p>
                  </div>
                </div>
                <div class="content">{{ page.description }}</div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Section>
    <section class="section has-background-light">
      <div class="section-heading has-text-centered">
        <h3 class="title is-2 text-gray">Priced Packages</h3>
        <h4 class="subtitle is-5 text-gray">
          You can choose the one that suits you from the Priced Packages
        </h4>
      </div>
      <div class="container is-fluid">
        <Price />
      </div>
    </section>
    <section class="section has-background-light hero is-medium">
      <div class="section-heading has-text-centered">
        <h3 class="title is-2 text-gray">Have a question?</h3>
        <h4 class="subtitle is-5 text-gray">
          <a href="mailto:sales@pdaccess.com">sales@pdaccess.com</a>
        </h4>
      </div>
      <br />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app'
import Section from '~/components/Section.vue'
import Price from '~/components/Price.vue'

definePageMeta({ layout: 'default' })

const { data: pages } = await useAsyncData('products', async () => {
  const content = await useContent()
  return await content.getCollection('product').find()
})
</script>
