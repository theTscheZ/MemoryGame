<script setup lang="ts">
import GameBoard from "../components/GameBoard.vue";
import GameControls from "../components/GameControls.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useGameStore } from "../stores/game";

const gameStore = useGameStore();
const router = useRouter();

const sizeCap = 10;
const size = ref(gameStore.level);

function stopGame() {
  router.push("/");
}

function nextStage() {
  if (size.value < sizeCap) {
    size.value += 2;
    gameStore.setLevel(size.value);
  }
}

function resetGame() {
  size.value = 2;
  gameStore.resetGame();
  gameStore.setLevel(size.value);
}

function onWon() {
  if (size.value < sizeCap) {
    nextStage();
  }
}
</script>

<template>
  <main style="padding: 2rem; text-align: center;">
    <h1>Difficulty {{ size / 2 }}</h1>

    <GameBoard
        :key="size"
        :size="size"
        @won="onWon"
    />
  </main>

  <GameControls
      :size="size"
      :size-cap="sizeCap"
      @stop="stopGame"
      @next="nextStage"
      @reset="resetGame"
  />
</template>
