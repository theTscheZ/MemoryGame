<script setup lang="ts">
import { useThemeStore } from '../stores/useThemeStore.ts'

const themeStore = useThemeStore()
</script>

<template>
  <button class="theme-toggle" @click="themeStore.toggleTheme">
    {{ themeStore.mode === 'dark' ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>

<style scoped>

</style>