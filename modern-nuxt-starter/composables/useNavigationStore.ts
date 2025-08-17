import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const activeItem = ref('repositories')

  const setActiveItem = (item: string) => {
    activeItem.value = item
  }

  return {
    activeItem,
    setActiveItem
  }
}) 