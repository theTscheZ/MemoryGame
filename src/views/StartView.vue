<script setup lang="ts">
import { useRouter } from "vue-router";
import ThemeToggle from '../components/ThemeToggle.vue'

const router = useRouter();

function startGame() {
  router.push("/game");
}
</script>

<template>
  <main class="start">
    <h1>Memory Game</h1>

    <ThemeToggle />

    <p>
      Finde alle Paare.
      Nach jedem Sieg wird das Spiel schwerer.
    </p>

    <button @click="startGame">
      Start Game
    </button>
  </main>
</template>

<style scoped>
.start {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  max-width: 320px;
  margin-bottom: 2rem;
  opacity: 0.8;
}

button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
