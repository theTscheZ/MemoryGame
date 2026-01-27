<script setup lang="ts">
const props = defineProps<{
  size: number
  sizeCap: number
}>()

const emit = defineEmits<{
  (e: "stop"): void
  (e: "next"): void
  (e: "reset"): void
}>()
</script>

<template>
  <footer>
    <button @click="emit('stop')">
      Return to Menu
    </button>

    <button
        @click="emit('next')"
        :disabled="size >= sizeCap"
    >
      Make it harder
    </button>

    <button @click="emit('reset')">
      Reset to Easy
    </button>
  </footer>
</template>
