import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import logger from '~/utils/logger'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  // Firebase configuration with debug output
  // const firebaseConfig = {
  //   apiKey: config.public.firebaseApiKey,
  //   authDomain: config.public.firebaseAuthDomain,
  //   projectId: config.public.firebaseProjectId,
  //   storageBucket: config.public.firebaseStorageBucket,
  //   messagingSenderId: config.public.firebaseMessagingSenderId,
  //   appId: config.public.firebaseAppId,
  // }

  // // Debug the Firebase config values (without printing sensitive data)
  // logger.debug('[Firebase Plugin] Config:', {
  //   projectId: firebaseConfig.projectId,
  //   authDomain: firebaseConfig.authDomain,
  //   hasApiKey: !!firebaseConfig.apiKey,
  //   hasAppId: !!firebaseConfig.appId
  // })

  // try {
  //   logger.debug('[Firebase Plugin] Initializing Firebase app')
    
  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig)
    
  //   // Initialize Firebase services
  //   const auth = getAuth(app)
  //   const firestore = getFirestore(app)
  //   const storage = getStorage(app)
  //   const googleProvider = new GoogleAuthProvider()
    
  //   // Configure Google Provider for better UX
  //   googleProvider.setCustomParameters({
  //     prompt: 'select_account'
  //   })
    
  //   // Provide Firebase services to the app
  //   nuxtApp.provide('firebaseApp', app)
  //   nuxtApp.provide('auth', auth)
  //   nuxtApp.provide('firestore', firestore)
  //   nuxtApp.provide('storage', storage)
  //   nuxtApp.provide('googleProvider', googleProvider)
    
  //   // Log auth status for debugging
  //   const currentUser = auth.currentUser
  //   logger.debug('[Firebase Plugin] Current auth state on initialization:', currentUser ? 'Authenticated' : 'Not authenticated')
    
  //   logger.debug('[Firebase Plugin] Firebase services initialized successfully')
  // } catch (error) {
  //   logger.error('[Firebase Plugin] Error initializing Firebase:', error)
  // }
}) 