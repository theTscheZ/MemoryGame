<script setup lang="ts">
defineProps<{
  flipped: boolean;
  matched: boolean;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div
      class="card"
      :class="{ flipped }"
      @click="emit('click')"
  >
    <div class="inner">
      <div class="front">?</div>
      <div class="back">🂠</div>
    </div>
  </div>
</template>

<style scoped>
.card {
  aspect-ratio: 1 / 1;
  cursor: pointer;
  perspective: 1000px;
}

.inner {
  width: 100%;
  height: 100%;
  transition: transform 0.4s;
  transform-style: preserve-3d;
}

.card.flipped .inner {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 8px;
  backface-visibility: hidden;
}

.front {
  background: #444;
}

.back {
  background: #ccc;
  transform: rotateY(180deg);
}
</style>
