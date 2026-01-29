<template>
  <div>
    <Section>
      <template slot="head">
        <div class="columns">
          <div class="column">
            <div class="section-heading has-text-centered">
              <h3 class="title is-2 text-gray">Enterprise Features</h3>
              <h4 class="subtitle is-5 text-gray">
                You can choose your package with support. You will find
                subscription or annualy support packages. For details:
                <a href="mailto:sales@pdaccess.com">sales@pdaccess.com</a>
              </h4>
            </div>
          </div>
        </div>
      </template>
      <div class="columns">
        <div class="column" v-for="(page, index) in pages" v-bind:key="index">
          <NuxtLink
            :to="{ name: 'product-slug', params: { slug: page.slug } }"
            class="text-primary hover:underline"
          >
            <div class="card has-background-primary is-dark">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img
                        :src="require('@/assets/logos/pdaccess_white_logo.png')"
                        alt="PDAccess Image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="subtitle">{{ page.title }}</p>
                  </div>
                </div>
                <div class="content">
                  {{ page.description }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </Section>
    <section class="section has-background-light">
      <div class="section-heading has-text-centered">
        <h3 class="title is-2 text-gray">Priced Packages</h3>
        <h4 class="subtitle is-5 text-gray">
          You can choose the one that suits you from the Priced Packages
        </h4>
      </div>
      <div class="container is-fluid">
        <Price />
      </div>
    </section>
    <section class="section has-background-light hero is-medium">
      <div class="section-heading has-text-centered">
        <h3 class="title is-2 text-gray">Have a question?</h3>
        <h4 class="subtitle is-5 text-gray">
          <a href="mailto:sales@pdaccess.com">sales@pdaccess.com</a>
        </h4>
      </div>
      <br />
    </section>
  </div>
</template>
<script>
import Section from "@/components/Section";
import Price from "@/views/Price";

export default {
  name: "Products",
  layout: "main",
  components: {
    Section,
    Price,
  },
  mounted() {
    this.$tracking();
  },
  head() {
    return {
      title: "PDAccess - Products",
    };
  },
  async asyncData({ $content }) {
    const pages = await $content("product").fetch();

    console.log(pages);
    return {
      pages,
    };
  },
};
</script>