// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],

  typescript: {
    strict: true,
    typeCheck: true,
  },

  app: {
    head: {
      title: 'E-commerce Store',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern e-commerce store built with Nuxt 3' }
      ],
    },
    // This is important for GitHub Pages
    baseURL: '/ecommerce-nuxt/',
    buildAssetsDir: '/ecommerce-nuxt/_nuxt/',
  },

  vite: {
    optimizeDeps: {
      exclude: ['vue-tracer']
    }
  },

  compatibilityDate: '2025-03-21'
})