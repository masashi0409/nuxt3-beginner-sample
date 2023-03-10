// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Nuxt 3 sample',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
    },
  },
  // modules: ['@nuxtjs/tailwindcss'],
})
