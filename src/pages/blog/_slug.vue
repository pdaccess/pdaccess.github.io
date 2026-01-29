<template>
  <div>
    <Section :full="false">
      <div class="container has-text-left">
        <h1 class="is-spaced title is-1">{{ article.title }}</h1>
        <h2 class="subtitle is-3">
          {{ article.description }}
        </h2>

        <!-- <author :author="article.author" /> -->
      </div>
      <template name="header">
        <Header />
      </template>
    </Section>
    <section class="section">
      <div class="container">
        <img :src="article.img" :alt="article.alt" />
        <div class="content is-medium">
          <nuxt-content :document="article" />
        </div>
        <br />
        <p>Article last updated: {{ article.updatedAt }}</p>
        <prev-next :prev="prev" :next="next" base="blog-slug" />
      </div>
    </section>
  </div>
</template>
<script>
import Section from "@/components/Section";
import Header from "@/components/Header";

export default {
  name: "blog",
  layout: "main",
  components: {
    Section,
    Header
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
    const article = await $content("blog", params.slug).fetch();

    const [prev, next] = await $content("blog")
      .only(["title", "slug"])
      .sortBy("time", "desc")
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