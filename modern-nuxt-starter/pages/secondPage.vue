import { NuxtLink } from '../.nuxt/components';
<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
            </h1>
          </div>
          
          <!-- Dark mode toggle -->
          <button
            @click="toggleDarkMode"
            class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <SunIcon v-if="isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          </span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="handleGetStarted"
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          </button>
          <NuxtLink to="/">
            <button
                class="px-8 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-colors">
                FirstPage
            </button>
          </NuxtLink>
        </div>
      </div>

      <!-- Features Section -->
      <div id="features" class="mb-16">
        <h3 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        </h3>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <CodeBracketIcon class="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Nuxt 3</h4>
            <p class="text-gray-600 dark:text-gray-400">
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <PaintBrushIcon class="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h4>
            <p class="text-gray-600 dark:text-gray-400">
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <CircleStackIcon class="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pinia Store</h4>
            <p class="text-gray-600 dark:text-gray-400">
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <ShieldCheckIcon class="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Firebase Auth</h4>
            <p class="text-gray-600 dark:text-gray-400">
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <CommandLineIcon class="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">TypeScript</h4>
            <p class="text-gray-600 dark:text-gray-400">
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
              <SparklesIcon class="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-2"></h4>
            <p class="text-gray-600 dark:text-gray-400">
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-gray-100 dark:bg-gray-800 rounded-2xl p-12">
        <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        </h3>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        </p>
        <button 
          @click="handleGetStarted"
          class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all transform hover:scale-105"
        >
        </button>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { 
  SunIcon, 
  MoonIcon, 
  CodeBracketIcon, 
  PaintBrushIcon, 
  CircleStackIcon, 
  ShieldCheckIcon, 
  CommandLineIcon, 
  SparklesIcon 
} from '@heroicons/vue/24/outline'

// SEO Meta Tags
useHead({
  title: 'Nuxt Starter Template - Modern Web Development',
  meta: [
    { name: 'description', content: 'A modern, production-ready Nuxt 3 starter template with TypeScript, Tailwind CSS, Pinia, and Firebase authentication.' },
    { name: 'keywords', content: 'nuxt, vue, typescript, tailwind, starter template, web development' },
    { property: 'og:title', content: 'Nuxt Starter Template' },
    { property: 'og:description', content: 'A modern, production-ready Nuxt 3 starter template' },
    { property: 'og:type', content: 'website' },
  ]
})

// Composables
const { isDark, toggleDarkMode } = useDarkMode()

// Methods
const handleGetStarted = () => {
  console.log('Get started clicked')
  // Add your custom logic here
}
</script>
