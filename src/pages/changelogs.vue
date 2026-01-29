<template>
  <div>
    <Section :full="false" background="info">
      <div class="columns">
        <div class="column">
          <div class="section-heading has-text-left">
            <h3 class="title is-2 text-gray">Changelog For PDAccess</h3>
            <h4 class="subtitle is-5 text-gray">
              If you think that you found a bug, please contact us
              <a href="mailto:sales@pdaccess.com">support@pdaccess.com</a>
            </h4>
          </div>
        </div>
      </div>
    </Section>
    <section class="section has-background-light">
      <div class="fixed-grid has-1-cols">
        <div class="grid is-gap-2">
          <div class="cell" v-for="(page, index) in pages" v-bind:key="index">
            <NuxtLink :to="{ name: 'changelog-slug', params: { slug: page.slug } }"
              class="text-primary hover:underline">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-64x64">
                        <img :src="require('@/assets/logos/pdaccess_white_logo.png')" alt="PDAccess Image" />
                      </figure>
                    </div>
                    <div class="media-content">
                      <p class="subtitle">{{ page.title }}</p>
                    </div>
                  </div>
                  <div class="content">
                    {{ page.description }}
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Section from "@/components/Section";

export default {
  name: "changelogs",
  layout: "main",
  components: {
    Section,
  },
  mounted() {
    this.$tracking();
  },
  head() {
    return {
      title: "PDAccess - Changelog",
    };
  },
  async asyncData({ $content }) {
    const pages = await $content("changelog").
      sortBy('time', 'desc').
      fetch();

    return {
      pages,
    };
  },
};
</script>