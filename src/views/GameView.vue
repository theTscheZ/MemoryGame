<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function stopGame() {
  router.push("/");
}
</script>

<template>
  <main style="padding: 2rem; text-align: center;">
    <h2>Game View</h2>
    <p>Hier kommt später das Memory rein.</p>
  </main>
  <footer>
    <button @click="stopGame">
      Return to Menu
    </button>
  </footer>
</template>
