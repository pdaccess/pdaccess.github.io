// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',

  app: {
    baseURL: '/',
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
      ]
    }
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/global.css'
  ],


  components: [
    {
      path: '~/components',
      global: true
    },
    {
      path: '~/components/icons',
      global: true
    },
    {
      path: '~/components/ui',
      prefix: 'Ui',
    },
    {
      path: '~/components/ui/card',
      prefix: ''
    },
    {
      path: '~/components/ui/badge',
      prefix: ''
    },
    {
      path: '~/components/ui/tabs',
      prefix: ''
    },
    {
      path: '~/components/ui/accordion',
      prefix: ''
    },
    {
      path: '~/components/ui/switch',
      prefix: ''
    },
    {
      path: '~/components/ui/progress',
      prefix: ''
    },
    {
      path: '~/components/ui/table',
      prefix: ''
    },
    {
      path: '~/components/ui/button',
      prefix: ''
    },
    {
      path: '~/components/ui/navigation-menu',
      prefix: ''
    },
  ],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  content: {
    ignore: [],
    markdown: {
      remarkPlugins: []
    },
    experimental: {
      clientDB: true,
      search: false
    },
    highlight: false
  },

  runtimeConfig: {
    public: {
      pdaccessBaseUrl: process.env.VUE_APP_PDACCESS_API_URL || 'https://api.pdaccess.com'
    }
  },

  compatibilityDate: '2024-01-01',

  layout: {
    // Layouts are automatically registered from the layouts/ directory
  },

  experimental: {
    appManifest: false,
    payloadExtraction: false
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  vite: {
    optimizeDeps: {
      exclude: ['@nuxt/content']
    }
  },

  build: {
    assetsDir: '_nuxt'
  },
  nitro: {
    storage: {
      data: {
        driver: 'fs',
        base: './.nitro/data'
      }
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'font-awesome-icon'
    }
  },
})
