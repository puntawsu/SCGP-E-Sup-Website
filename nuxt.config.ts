export default defineNuxtConfig({
  ssr: false,

  ignore: [
    '**/*.DS_Store',
    '**/vite/**',
    '**/ vite/**'
  ],

  vite: {
    assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.JPEG'],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'UNRESOLVED_IMPORT') return
          warn(warning)
        }
      }
    }
  },

  css: [
    "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],

  modules: [
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore'],
      ],
    }],
    "@nuxtjs/i18n",

  ],

  i18n: {
    locales: [
      { code: 'th', iso: 'th-TH', file: 'th.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'th',
    lazy: true,
    langDir: 'assets/language',
  },

  nitro: {
    preset: 'static',
    output: {
      dir: 'dist',
      publicDir: 'dist'
    }
  },

  plugins: [
    { src: '~/plugins/vue3-toastify.js', mode: 'client' },
    "~/plugins/vuex.ts",
    '~/plugins/sweetalert2.client.js'


  ],

  app: {
    head: {
      title: "E-Supplier",
      link: [
        {
          rel: "icon",
          type: 'image/svg+xml',
          href: "/_nuxt/assets/img/favicon/96x96.svg",
        },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/mciastek/sal.js/dist/sal.css' },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-1X4irW9oHgS3/7jQEZTUKt1QtmT0Bhu4m3U9I4N4j+Gfmw40OBmG+z6bO8sLZ1Up',
          crossorigin: 'anonymous',
        },
        { src: 'https://cdn.jsdelivr.net/gh/mciastek/sal.js/dist/sal.js', defer: true },
      ],
    },
    mounted() {
      this.$nextTick(() => {
        sal();
      });
    }
  },

  compatibilityDate: '2024-07-31',
});