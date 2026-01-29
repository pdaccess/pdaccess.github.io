<template>
  <div>
    <Section :full="true">
      <div class="container has-text-centered">
        <br />
        <h4 class="title is-1">
          Join our team with Cyber Security and Software Expertice
        </h4>

        <div class="columns">
          <div class="column is-one-third has-text-right">
            <p class="subtitle is-5">
              We love Cyber Security and Software together. Actually, we produce
              Security Softwares. Both expertise is essential for us. If you
              have passion about them, please don't hesitate to fill the form.
              We will carefully handle all applications. Every level of
              applicant is accepted.
            </p>
          </div>
          <div class="column has-text-left">
            <CvForm />
          </div>
        </div>
      </div>
    </Section>
    <section class="section" style="padding-top: 10px">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <div class="box">
              <div class="content">
                <nuxt-content :document="j1" />
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="box">
              <div class="content">
                <nuxt-content :document="j2" />
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="columns">
          <div class="column is-6">
            <div class="box">
              <div class="content">
                <nuxt-content :document="j3" />
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>
<script>
import Section from "@/components/Section";
import CvForm from "@/components/forms/CVForm";

export default {
  name: "Hr",
  layout: "main",
  components: {
    Section,
    CvForm,
  },
  mounted() {
    this.$tracking();
  },
  head: {
    title: "PDAccess - Human Resources",
  },
  async asyncData({ $content }) {
    const j1 = await $content("hr", "cybersecurity_developer").fetch();
    const j2 = await $content(
      "hr",
      "cybersecurity_validation_engineer"
    ).fetch();
    //const j3 = await $content("hr", "senior_cybersecurity_developer").fetch();

    return {
      j1,
      j2,
     // j3,
    };
  },
};
</script>