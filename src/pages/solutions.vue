<template>
  <div>
    <Section :full="false">
      <div class="container fluid">
        <div class="columns is-multiline">
          <div class="card column is-4 has-background-primary" v-for="(page, index) in pages" v-bind:key="index">
            <NuxtLink :to="{ name: 'solution-slug', params: { slug: page.slug } }"
              class="text-primary font-bold hover:underline">
              <div class="card-image has-text-centered">
                <figure class="image is-96x96 is-inline-block">
                  <img :src="page.image" alt="Image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="title">{{ page.title }}</p>
                  <p class="subtitle">
                    {{ page.description }}
                  </p>
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
<script>
import Section from "@/components/Section";

export default {
  name: "Solutions",
  layout: "main",
  components: { Section },
  mounted() {
    this.$tracking();
  },
  head() {
    return {
      title: "PDAccess - Solutions",
    };
  },
  async asyncData({ $content }) {
    const pages = await $content("solution").
      sortBy("time", "desc").
      fetch();

    console.log(pages);
    return {
      pages,
    };
  },
};
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