
export default defineNuxtConfig({
  modules: ["@primevue/nuxt-module","@pinia/nuxt"],
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/base.css"],
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
