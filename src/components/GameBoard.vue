<script setup lang="ts">
import { ref, computed, watch } from "vue";
import MemoryCard from "./MemoryCard.vue";
import type { Card } from "../types/memory";
import { useGameStore } from "../stores/game";
import { createCatDeck } from "../game/createCatDeck";

const gameStore = useGameStore();

const props = defineProps<{
  size: number;
}>();

const emit = defineEmits<{
  (e: "won"): void;
}>();

const isLoading = ref(true);

/* ---------- STATE ---------- */

const cards = ref<Card[]>([]);
const flippedCards = ref<Card[]>([]);
const lockBoard = ref(false);

/* ---------- SETUP ---------- */

async function setupBoard() {
  isLoading.value = true;
  const pairCount = (props.size * props.size) / 2;

  gameStore.matchedIds = [];

  cards.value = await createCatDeck(pairCount);

  flippedCards.value = [];
  lockBoard.value = false;
  isLoading.value = false;
}

watch(
    () => props.size,
    async () => {
      await setupBoard();
    },
    { immediate: true }
);


/* ---------- GAME LOGIC ---------- */

function onCardClick(card: Card) {
  if (lockBoard.value) return;
  if (card.flipped || card.matched) return;

  card.flipped = true;
  flippedCards.value.push(card);

  if (flippedCards.value.length === 2) {
    checkMatch();
  }
}

function checkMatch() {
  if (flippedCards.value.length !== 2) return;

  lockBoard.value = true;

  const [a, b] = flippedCards.value;
  if (!a || !b) return;

  if (a.id === b.id) {
    a.matched = true;
    b.matched = true;

    gameStore.saveMatched(cards.value);

    resetTurn();
  } else {
    setTimeout(() => {
      a.flipped = false;
      b.flipped = false;
      resetTurn();
    }, 800);
  }
}


function resetTurn() {
  flippedCards.value = [];
  lockBoard.value = false;
}

/* ---------- COMPUTED ---------- */

const won = computed(() =>
    cards.value.length > 0 && cards.value.every(card => card.matched)
);

watch(won, (isWon) => {
  if (isWon) {
    emit("won");
  }
});

const gridStyle = computed(() => ({
  gridTemplateColumns: `repeat(${props.size}, 1fr)`
}));
</script>

<template>
  <div v-if="isLoading" class="loading">
    <p>Loading cats… 🐈</p>

    <div class="skeleton-grid" :style="gridStyle">
      <div
          v-for="i in size * size"
          :key="i"
          class="skeleton-card"
      />
    </div>
  </div>

  <div v-else class="board" :style="gridStyle">
    <MemoryCard
        v-for="card in cards"
        :key="card.uid"
        :flipped="card.flipped"
        :matched="card.matched"
        :image-url="card.imageUrl"
        @click="onCardClick(card)"
    />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 90vw;
  margin: 0 auto;
}
</style>
