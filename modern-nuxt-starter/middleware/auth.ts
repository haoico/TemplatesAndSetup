import logger from '~/utils/logger'

export default defineNuxtRouteMiddleware((to) => {
  // logger.debug('[Auth Middleware] Starting, route:', to.path)
  
  // const { isAuthenticated } = useAuth()
  // const isLoading = ref(true)

  // // Only run on client-side
  // if (process.client) {
  //   // Wait for auth state to be determined
  //   return new Promise((resolve) => {
  //     // Use a longer timeout to ensure Firebase has initialized
  //     setTimeout(() => {
  //       isLoading.value = false
        
  //       // If user is authenticated and trying to access the home page, redirect to dashboard
  //       if (to.path === '/' && isAuthenticated.value) {
  //         logger.debug('[Auth Middleware] Authenticated user at home, redirecting to dashboard')
  //         resolve(navigateTo('/dashboard'))
  //       }
  //       // If user is not authenticated and trying to access protected routes, redirect to home
  //       else if (to.path !== '/' && !isAuthenticated.value) {
  //         logger.debug('[Auth Middleware] Unauthenticated user, redirecting to home')
  //         resolve(navigateTo('/'))
  //       }
  //       else {
  //         logger.debug('[Auth Middleware] No redirection needed')
  //         resolve()
  //       }
  //     }, 500) // Increased timeout to ensure Firebase is ready
  //   })
  // }
  
  return
}) 