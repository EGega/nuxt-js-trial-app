// https://nuxt.com/docs/api/configuration/nuxt-config
// The methods can be overwritten in each template seperately if we do not want to use the global settings
export default defineNuxtConfig({
modules: ['@nuxtjs/tailwindcss'],
app: {
  head:{
    title: 'Nuxt App',
    meta: [
      { name: 'description', content: 'Everything about Nuxt 3' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]
  }
}
})
