<template>
  <Section class="section has-background-light">
    <div class="fixed-grid has-2-cols">
      <div class="grid is-gap-2">
        <div class="cell" v-for="(page, index) in pages" v-bind:key="index">
          <div class="card is-one-quarter has-background-primary">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: page.slug } }" class="font-bold hover:underline">
              <div class="card-image" v-if="page.image">
                <figure class="image is-64x64">
                  <img :src="require(`@/assets${page.image}`)" alt="Image" />
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
<script>
import Section from "@/components/Section";

export default {
  name: "Blogs",
  layout: "main",
  transition: "fade",
  scrollToTop: true,
  components: {
    Section,
  },
  mounted() {
    this.$tracking();
  },
  head() {
    return {
      title: "PDAccess - Blogs",
    };
  },
  async asyncData({ $content }) {
    const pages = await $content("blog").
      sortBy("time", "desc").
      fetch();

    console.log(pages);
    return {
      pages,
    };
  },
};
</script>