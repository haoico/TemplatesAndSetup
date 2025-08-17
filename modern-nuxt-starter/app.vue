<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Add Tailwind CSS classes to body
useHead({
  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>
