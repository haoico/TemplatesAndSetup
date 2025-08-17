import { ComputedRef } from 'vue'

declare module '#app' {
  interface NuxtApp {
    $toggleDarkMode: () => boolean
    $isDarkMode: () => boolean
  }
}

export {} 