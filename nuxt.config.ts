// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  ssr: false,
  target: 'static',

  app: {
    head: {
      title: 'PDAccess, Next Generation Privileged Access Management',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'PDAccess, Next Generation and Open Source Privileged Access Management and Identity Access Management Tool both cloud and on-prem environment'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://pdaccess.com'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'PDAccess, Next Generation Privileged Access Management'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://www.pdaccess.com/favicon/apple-icon-152x152.png'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'PDAccess, Next Generation and Open Source Privileged Access Management and Identity Access Management Tool both cloud and on-prem environment'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico'
        }
      ],
      script: [
        {
          hid: 'gdpr',
          src: 'https://m.pdaccess.com/focus/2.js',
          defer: true
        }
      ]
    }
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/global.css'
  ],

  plugins: [],

  components: true,

  modules: [
    '@nuxt/content'
  ],

  content: {
    markdown: {
      remarkPlugins: []
    }
  },

  runtimeConfig: {
    public: {
      pdaccessBaseUrl: process.env.VUE_APP_PDACCESS_API_URL || 'https://api.pdaccess.com'
    }
  },

  compatibilityDate: '2024-01-01'
})
