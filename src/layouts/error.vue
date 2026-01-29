<template>
  <Section>
    <div class="hero-body" v-scroll-reveal.reset>
      <div class="container has-text-left">
        <h1 class="title is-1 is-black">
          The page you are looking for is not exists
        </h1>
        <h2 class="subtitle is-3">...</h2>
      </div>
    </div>
  </Section>
</template>
<script>
import Section from "@/components/Section";

export default {
  components: {
    Section,
  },
  mounted() {
    this.$tracking();
  },
};
</script>