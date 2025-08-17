import { ref } from 'vue'

export interface Notification {
  id: number
  type: 'success' | 'error'
  title: string
  message: string
}

const notifications = ref<Notification[]>([])
let notificationId = 0

export const useNotification = () => {
  const addNotification = (type: 'success' | 'error', title: string, message: string) => {
    const id = notificationId++
    notifications.value.push({ id, type, title, message })
    setTimeout(() => removeNotification(id), 5000)
  }

  const removeNotification = (id: number) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  return {
    notifications,
    addNotification,
    removeNotification
  }
} 