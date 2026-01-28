<script setup lang="ts">
defineProps<{
  flipped: boolean;
  matched: boolean;
  imageUrl: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <div
      class="card"
      :class="{ flipped }"
      data-testid ="card"
      @click="emit('click')"
  >
    <div class="inner">
      <div class="front">?</div>
      <div class="back">
      <img data-testid="card-image" :src="imageUrl" alt="cat" />
    </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  perspective: 1000px;
  border-radius: 12px;
  overflow: hidden;
}

.inner {
  width: 100%;
  height: 100%;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  border-radius: 12px;
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
  font-size: 2.2rem;
  border-radius: 12px;
  backface-visibility: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.front {
  background: linear-gradient(135deg, #64748b, #475569);
  color: white;
}

.back {
  background: #e5e7eb;
  transform: rotateY(180deg);
  padding: 0;
}

.back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (hover: hover) {
  .card:hover .front {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  }
}

</style>
