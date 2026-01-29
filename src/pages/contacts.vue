<template>
  <Section :full="true">
    <div class="container has-text-centered">
      <h4 class="title is-1">
        PDAccess Team is ready for answer
      </h4>
      <div class="columns mt-small">
        <div class="column is-one-third has-text-right">
          <p class="subtitle is-5">You may utilize the provided form to request a demonstration or pose inquiries
            regarding our product and solution offerings. Please do not hesitate to reach out to us for assistance</p>
        </div>
        <div class="column has-text-left">
          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
</template>
<script>
import Section from "@/components/Section";
import ContactForm from "@/components/forms/ContactForm";

export default {
  name: "Contacts",
  layout: "main",
  components: {
    Section,
    ContactForm,
  },
  mounted() {
    this.$tracking();
  },
  head() {
    return {
      title: "PDAccess - Contacts",
    };
  }
};
</script>