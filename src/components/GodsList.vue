<script setup>
import GodCard from "@/components/GodCard.vue";

defineProps({
  gods: {
    type: Array,
    required: true
  },
  favorites: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["add-to-favorites"]);
</script>

<template>
  <div class="gods-container">
    <GodCard
      v-for="god in gods"
      :key="god.id"
      :god="god"
      :isFavorite="favorites.includes(god.name)"
      @add-to-favorites="emit('add-to-favorites', $event)"
    />
  </div>
</template>

<style scoped>
.gods-container {
  position: relative;

  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));

  gap: 30px;

  padding: 30px;

  max-width: 100%;
  margin: 15px auto 0 auto;

  justify-content: center;
  align-items: stretch;
}
</style>
