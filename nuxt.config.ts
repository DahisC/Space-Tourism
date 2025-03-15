import unoConfig from './uno.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  nitro: {
    preset: 'static',
  },

  modules: ['@unocss/nuxt'],
  unocss: unoConfig,

  app: {
    head: {
      title: 'Space Tourism',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }],
      meta: [{ name: 'description', content: 'So, You want to travel to SPACE' }],
    },
  },
});
