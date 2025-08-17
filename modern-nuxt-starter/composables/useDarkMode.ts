import { ref, onMounted, watch } from 'vue'
import logger from '~/utils/logger'
export const useDarkMode = () => {
  const isDark = ref(false)

  logger.debug('[DarkMode] Initializing dark mode composable')

  const toggleDarkMode = () => {
    logger.debug('[DarkMode] Toggle called. Current state:', isDark.value)
    isDark.value = !isDark.value
    logger.debug('[DarkMode] New state:', isDark.value)
    
    localStorage.setItem('darkMode', isDark.value.toString())
    logger.debug('[DarkMode] Saved to localStorage:', localStorage.getItem('darkMode'))
    
    applyDarkMode()
  }

  const applyDarkMode = () => {
    logger.debug('[DarkMode] Applying dark mode. isDark:', isDark.value)
    logger.debug('[DarkMode] Current classList:', document.documentElement.classList.toString())
    
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      logger.debug('[DarkMode] Added dark class')
    } else {
      document.documentElement.classList.remove('dark')
      logger.debug('[DarkMode] Removed dark class')
    }
    
    logger.debug('[DarkMode] Final classList:', document.documentElement.classList.toString())
  }

  onMounted(() => {
    logger.debug('[DarkMode] Component mounted')
    const darkMode = localStorage.getItem('darkMode')
    logger.debug('[DarkMode] Retrieved from localStorage:', darkMode)
    
    isDark.value = darkMode === 'true'
    logger.debug('[DarkMode] Set initial state:', isDark.value)
    
    // Check if system prefers dark mode when no preference is stored
    if (darkMode === null) {
      logger.debug('[DarkMode] No stored preference, checking system preference')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      logger.debug('[DarkMode] System prefers dark:', systemPrefersDark)
      isDark.value = systemPrefersDark
    }
    
    applyDarkMode()
  })

  watch(isDark, (newValue, oldValue) => {
    logger.debug('[DarkMode] Watch triggered - Old value:', oldValue, 'New value:', newValue)
    applyDarkMode()
  })

  return {
    isDark,
    toggleDarkMode
  }
} 