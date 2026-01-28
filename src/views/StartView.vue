<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useGameStore } from "../stores/game";
import ThemeToggle from "../components/ThemeToggle.vue";

const router = useRouter();
const gameStore = useGameStore();

const username = ref("");

function startGame() {
  const name = username.value.trim();
  if (!name) return;

  gameStore.login(name);
  router.push("/game");
}
</script>

<template>
  <main class="start">
    <h1>Memory Game</h1>

    <ThemeToggle />

    <p>
      Find all the pairs.
      The game gets harder the more you win.
    </p>

    <form @submit.prevent="startGame" class="login">
      <input
          v-model="username"
          placeholder="Username"
          autocomplete="off"
      />

      <button type="submit">
        Start Game
      </button>
    </form>
  </main>
</template>

<style scoped>
.start {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.25rem;
  text-align: center;
  gap: 1.25rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 0.5rem;
}

p {
  max-width: 320px;
  opacity: 0.85;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  max-width: 260px;
}

input,
select {
  padding: 0.65rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
}

button {
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

</style>
