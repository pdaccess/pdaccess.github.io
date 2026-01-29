<template>
  <div>
    <Section :full="false">
      <div class="container has-text-centered is-white">
        <h1 class="is-spaced title is-1">{{ article.title }}</h1>
        <h2 class="subtitle is-3">
          {{ article.description }}
        </h2>

        <!-- <author :author="article.author" /> -->
      </div>
      <!-- <template name="foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            
          </div>
        </nav>
      </template> -->
    </Section>
    <section class="section">
      <div class="container box">
        <img :src="article.img" :alt="article.alt" />
        <div class="content is-medium">
          <nuxt-content :document="article" />
        </div>
        <br />
        <p>Article last updated: {{ article.updatedAt }}</p>
        <prev-next :prev="prev" :next="next" base="changelog-slug" />
      </div>
    </section>
  </div>
</template>
<script>
import Section from "@/components/Section";

export default {
  name: "changelog",
  layout: "main",
  components: {
    Section,
  },
  mounted() {
    this.$tracking();
  },
  head() {
    return {
      title: `PDAccess - ${this.article.title}`,
    };
  },
  async asyncData({ $content, params }) {
    if (params.slug == "undefined" || params.slug === null)
      return this.$nuxt.error({ statusCode: 404 });
    const article = await $content("changelog", params.slug).fetch();

    const [prev, next] = await $content("changelog")
      .only(["title", "slug"])
      .sortBy("time", "asc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
};
</script>