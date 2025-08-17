// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  
  // runtimeConfig: {
  //   // Server-side environment variables
  //   nodeEnv: process.env.NODE_ENV || 'development',
    
  //   // Firebase server-side configuration (optional)
  //   firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
  //   firebaseClientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  //   firebasePrivateKey: process.env.FIREBASE_PRIVATE_KEY,
  //   firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    
  //   // Public variables that will be exposed to the client
  //   public: {
  //     // Firebase public configuration (optional)
  //     firebaseApiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
  //     firebaseAuthDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  //     firebaseProjectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
  //     firebaseStorageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  //     firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  //     firebaseAppId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
  //     appUrl: process.env.APP_URL || 'http://localhost:3000'
  //   },

  //   devtools: { enabled: false }
  // },

  // Build configuration
  build: {
    transpile: [
      'tslib',
      'firebase',
      '@firebase/auth',
      '@firebase/app'
    ]
  },

  // App configuration
  app: {
    head: {
      title: 'Nuxt Starter Template - Modern Web Development',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.ico' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern, production-ready Nuxt 3 starter template with TypeScript, Tailwind CSS, Pinia, and Firebase authentication.' },
        { name: 'keywords', content: 'nuxt, vue, typescript, tailwind, starter template, web development' },
        { name: 'author', content: 'Your Name' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Nuxt Starter Template' },
        { name: 'og:description', content: 'A modern, production-ready Nuxt 3 starter template' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'msapplication-TileColor', content: '#4F46E5' },
        { name: 'theme-color', content: '#4F46E5' }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
