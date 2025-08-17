import type { DocumentData } from 'firebase/firestore'

export interface BaseDocument extends DocumentData {
  id?: string
} 