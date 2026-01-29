<template>
    <Section :full="true">
      <div class="container has-text-centered">
        <br />
        <h4 class="title is-1">
          Thank you for reaching us. We will contact to you...
        </h4>
      </div>
  </Section>
</template>
<script>
import Section from "@/components/Section";

export default {
  name: "Thanks",
  layout: "main",
  components: {
    Section,
  },
  head: {
    title: "PDAccess - Thank you",
  },
};
</script>