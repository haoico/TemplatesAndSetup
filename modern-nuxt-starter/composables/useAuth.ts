import { ref } from 'vue'
import type { Auth } from 'firebase/auth'
import { 
  signInWithPopup, 
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut as firebaseSignOut
} from 'firebase/auth'
import type { User } from 'firebase/auth'
import logger from '~/utils/logger'

export const useAuth = () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)
  const userEmail = ref('')
  const { createOrUpdateUser } = useUserStore()

  logger.debug('[useAuth] Initializing auth composable')

  // Only run on client-side
  if (process.client) {
    logger.debug('[useAuth] Running on client-side')
    const nuxtApp = useNuxtApp()
    const auth = nuxtApp.$auth as Auth | null
    const googleProvider = nuxtApp.$googleProvider as GoogleAuthProvider | null

    logger.debug('[useAuth] Firebase auth initialized:', !!auth)
    logger.debug('[useAuth] Google provider initialized:', !!googleProvider)

    if (auth) {
      // Listen to auth state changes
      onAuthStateChanged(auth, async (firebaseUser) => {
        logger.debug('[useAuth] Auth state changed:', firebaseUser ? 'User logged in' : 'User logged out')
        user.value = firebaseUser
        isAuthenticated.value = !!firebaseUser
        userEmail.value = firebaseUser?.email || ''
        
        // Create or update user in Firestore when authenticated
        if (firebaseUser) {
          try {
            await createOrUpdateUser(firebaseUser)
          } catch (error) {
            console.error('[useAuth] Error updating user data:', error)
          }
        }

        logger.debug('[useAuth] Updated auth state:', {
          isAuthenticated: isAuthenticated.value,
          email: userEmail.value
        })
      })
    }

    const signInWithGoogle = async () => {
      logger.debug('[useAuth] Starting Google sign in')
      try {
        if (!auth || !googleProvider) {
          console.error('[useAuth] Firebase auth not initialized')
          throw new Error('Firebase auth not initialized')
        }
        const result = await signInWithPopup(auth, googleProvider)
        logger.debug('[useAuth] Google sign in successful:', result.user.email)
        return true
      } catch (error) {
        console.error('[useAuth] Google Sign In Error:', error)
        throw error
      }
    }

    const signOut = async () => {
      logger.debug('[useAuth] Starting sign out')
      try {
        if (!auth) {
          console.error('[useAuth] Firebase auth not initialized')
          throw new Error('Firebase auth not initialized')
        }
        await firebaseSignOut(auth)
        logger.debug('[useAuth] Sign out successful')
      } catch (error) {
        console.error('[useAuth] Sign Out Error:', error)
        throw error
      }
    }

    return {
      user,
      isAuthenticated,
      userEmail,
      signInWithGoogle,
      signOut
    }
  }

  logger.debug('[useAuth] Running on server-side')
  // Return empty functions for server-side
  return {
    user,
    isAuthenticated,
    userEmail,
    signInWithGoogle: () => Promise.reject(new Error('Cannot sign in on server')),
    signOut: () => Promise.reject(new Error('Cannot sign out on server'))
  }
} 
