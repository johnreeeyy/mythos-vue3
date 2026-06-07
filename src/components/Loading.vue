<script setup>
import { ClipLoader } from "vue-spinner";
import "vue-spinner/style.css";

defineProps({
  loadingText: String
});
</script>

<template>
  <div class="loading-container">
    <clip-loader color="#FFD700" size="2rem" />
    <p>{{ loadingText }}</p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 0.5rem;
}

p {
  font-size: 2rem;
  color: gold;
  font-weight: 300;
}
</style>
