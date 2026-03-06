// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,       
  app: {
    baseURL: '/',  
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/a11y', '@nuxt/fonts']
})