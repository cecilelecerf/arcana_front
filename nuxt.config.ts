// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],  
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "@/assets/style/_colors.scss" as *; @use "@/assets/style/_mixins.scss" as *; @use "@/assets/fonts/_nameFonts.scss" as *; @use "@/assets/style/_typo.scss" as *;',
            
          },

        }
      }
  }
})
