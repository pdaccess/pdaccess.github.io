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
  name: "privacy",
  layout: "main",
  components: {
    Section,
  },
  async asyncData({ $content }) {
    const article = await $content("legal", "privacy").fetch();

    return {
      article,
    };
  },
};
</script>