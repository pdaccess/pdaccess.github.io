export default {
  srcDir: "src/",
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  //mode: 'universal',
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "PDAccess, Next Generation Privileged Access Management",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "PDAccess, Next Generation and Open Source Privileged Access Management and Identity Access Management Tool both cloud and on-prem environment",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://pdaccess.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "PDAccess, Next Generation Privileged Access Management",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://www.pdaccess.com/_nuxt/img/logo_pda_b.5093f81.svg",
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "PDAccess, Next Generation and Open Source Privileged Access Management and Identity Access Management Tool both cloud and on-prem environment",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon/favicon.ico",
      },
    ],
    script: [
      {
        hid: "gdpr",
        src: "https://m.pdaccess.com/focus/2.js",
        defer: true,
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/bulma/dark.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: "@/plugins/track.client.js",
    },
    {
      src: "@/plugins/main.client.js",
    },
    { src: "@plugins/chat.client.js", mode: "client", ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    "nuxt-buefy",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      remarkPlugins: ["remark-emoji"],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  publicRuntimeConfig: {
    pdaccessBaseUrl: process.env.VUE_APP_PDACCESS_API_URL,
  },
  privateRuntimeConfig: {},
  loading: {
    color: "#2DACE1",
    height: "3px",
  },
  pwa: {
    icon: {},
  },
  // router: {
  //     extendRoutes(routes, resolve) {
  //         const indexIndex = routes.findIndex(route => route.name === 'index')
  //         let index = routes[indexIndex].children.findIndex(route => route.name === 'index-child-id')
  //         routes[indexIndex].children[index] = {
  //             ...routes[indexIndex].children[index],
  //             components: {
  //                 default: routes[indexIndex].children[index].component,
  //                 left: resolve(__dirname, 'components/childLeft.vue')
  //             },
  //             chunkNames: {
  //                 left: 'components/childLeft'
  //             }
  //         }

  //         index = routes.findIndex(route => route.name === 'main')
  //         routes[index] = {
  //             ...routes[index],
  //             components: {
  //                 default: routes[index].component,
  //                 top: resolve(__dirname, 'components/mainTop.vue')
  //             },
  //             chunkNames: {
  //                 top: 'components/mainTop'
  //             }
  //         }
  //     }
  // }
};
