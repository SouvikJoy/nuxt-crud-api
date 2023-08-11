// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      "@nuxtjs/tailwindcss",
      "nuxt-icon",
      "@pinia/nuxt"
  ],
  // @ts-ignore
  tailwindcss: {
    cssPath: "~/assets/main.css",
  },
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  nitro: {
    plugins: ["@/server/db/index.ts"]
  },
  build: {
    transpile: [
        "@headlessui/vue",
        "vue-toastification",
        "@headlessui/tailwindcss"
    ]
  }
})
