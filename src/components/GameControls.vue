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
    <div class="actions">
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
    </div>
  </footer>
</template>

<style scoped>
.actions {
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-items: center;
  justify-content: center;
  font-size: inherit;
}
</style>
