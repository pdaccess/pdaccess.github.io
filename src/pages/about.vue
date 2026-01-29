<template>
  <Section :full="true">
    <div class="container box">
      <div class="content is-medium">
        <nuxt-content :document="article" />
      </div>
    </div>
  </Section>
</template>
<script>
import Section from "@/components/Section";

export default {
  name: "about",
  layout: "main",
  components: {
    Section,
  },
  async asyncData({ $content }) {
    const article = await $content("legal", "us").fetch();

    return {
      article,
    };
  },
};
</script>