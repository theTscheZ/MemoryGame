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
  min-width: 40%;
  align-items: center;
  align-self: center;
}

.login {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 220px;
}

input {
  padding: 0.6rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  text-align: center;
}

</style>
