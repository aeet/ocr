export default defineNuxtConfig({
  ssr: false,
  devServer: {
    https: {
      key: "key.pem",
      cert: "cert.pem",
    },
  },
  modules: ["@primevue/nuxt-module", "@pinia/nuxt"],
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/base.css"],
  nitro: {
    routeRules: {
      "/ocr/**": { proxy: "https://ocr.geiwo.top:9999/ocr/**" },
    },
  },
  primevue: {
    options: { theme: "none" },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.png" }],
    },
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
