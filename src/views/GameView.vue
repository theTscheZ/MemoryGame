<script setup lang="ts">
import GameBoard from "../components/GameBoard.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";
import { useGameStore } from "../stores/game";

const gameStore = useGameStore();

const router = useRouter();
let size = ref(gameStore.level);
const sizeCap = 10;

function stopGame() {
  router.push("/");
}

function nextStage() {
  if (size.value < sizeCap) {
    size.value += 2;
    gameStore.resetForDifficulty(size.value);
  }
}

function resetGame() {
  size.value = 2;
  gameStore.setLevel(size.value);
  gameStore.resetGame()
}

function onWon() {
  console.log("WON EVENT RECEIVED");
  if (size.value < sizeCap)
    nextStage();
}
</script>

<template>
  <main style="padding: 2rem; text-align: center;">
    <h1>Difficulty {{ size / 2 }}</h1>
    <GameBoard :key="size" :size="Math.min(Math.max(size, 2), sizeCap)" @won="onWon"/>
  </main>
  <footer>
    <button @click="stopGame">
      Return to Menu
    </button>
    <button @click="nextStage">
      Make it harder
    </button>
    <button @click="resetGame">
      Reset to Easy
    </button>
  </footer>
</template>

<style scoped>
main {
  text-align: center;
}
</style>