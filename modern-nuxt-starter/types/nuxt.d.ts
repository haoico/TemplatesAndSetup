import type { Emitter } from 'mitt'

declare module '#app' {
  interface NuxtApp {
    $bus: {
      on: Emitter<any>['on']
      off: Emitter<any>['off']
      emit: Emitter<any>['emit']
    }
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $bus: {
      on: Emitter<any>['on']
      off: Emitter<any>['off']
      emit: Emitter<any>['emit']
    }
  }
} 