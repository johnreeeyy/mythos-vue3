<script setup>
defineProps({
  god: Object,
  isFavorite: Boolean
});

const emit = defineEmits(["add-to-favorites", "show-modal", "close-modal"]);
</script>

<template>
  <div class="gods-card" @click="emit('show-modal', god)">
    <img :src="god.image" :alt="god.name" />

    <div class="gods-identity">
      <h2>{{ god.name }}</h2>

      <span class="mythology-tag" :class="god.mythology.toLowerCase()">
        {{ god.mythology }}
      </span>
    </div>

    <div class="card-footer">
      <p>{{ god.description }}</p>

      <button
        class="favorite-button"
        @click.stop="emit('add-to-favorites', god.name)"
      >
        {{ isFavorite ? "★" : "☆" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.gods-card {
  display: flex;
  flex-direction: column;

  padding: 15px;
  gap: 10px;

  border: 1px solid gold;
  border-radius: 12px;

  overflow: hidden;

  color: gold;

  line-height: 1.7;
  font-size: 15px;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  height: 100%;
}

.gods-card:hover {
  transform: translateY(-8px);

  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
}

.gods-card p {
  color: rgb(245, 231, 234);
  flex-grow: 1;
}

.gods-card img {
  width: 100%;
  height: 250px;

  object-fit: cover;
  object-position: top;
  display: block;

  border-radius: 8px;
}

.gods-card h2 {
  font-size: 2rem;
  color: gold;
}

.gods-identity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.mythology-tag {
  background-color: rgb(245, 231, 234);
  color: white;
  padding: 4px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 8px;
}

.favorite-button {
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  color: gold;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.greek {
  background: rgb(212, 175, 55);
  color: black;
}

.norse {
  background: rgb(70, 89, 102);
}
</style>
