<script setup lang="ts">
import { useThemeStore } from './stores/useThemeStore'

const themeStore = useThemeStore()
</script>

<template>
  <div :class="['app', themeStore.mode]">
    <router-view />
  </div>
</template>

<style scoped>
</style>
