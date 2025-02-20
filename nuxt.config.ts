import unoConfig from './uno.config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'static',
  },

  modules: ['@unocss/nuxt'],
  unocss: unoConfig,
});
