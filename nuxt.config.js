export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "covid-19-infoedu",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/mixinSrcSvg.js",
    { src: "~/plugins/vuelidate" },
    "~plugins/vue-the-mask.js",
    "~plugins/vue-awesome-swiper.js",
    "~/plugins/api"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/svg"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/style-resources", "@nuxtjs/axios"],

  styleResources: {
    scss: [
      "assets/scss/setup/_default.scss",
      "assets/scss/setup/_grid.scss",
      "assets/scss/setup/_mixins.scss",
      "assets/scss/setup/_reset.scss",
      "assets/scss/setup/_variables.scss"
    ]
  },

  // Axios Configuration: See https://axios.nuxtjs.org/options
  axios: {
    baseURL: "http://localhost:8080/api"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
