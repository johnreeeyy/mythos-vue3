<script setup>
defineProps({
  selectedFilter: String,
  showFavorites: Boolean
});

const emit = defineEmits(["change-filter", "change-search", "show-favorites"]);
</script>

<template>
  <div class="header-container">
    <header>
      <img src="/logo.png" alt="" />

      <div class="searchbar-container">
        <input
          class="searchbar"
          type="text"
          placeholder="Search a God"
          @input="emit('change-search', $event.target.value)"
        />
      </div>

      <h1>Mythos</h1>
    </header>

    <div class="filter-buttons">
      <button
        :class="{ active: selectedFilter === 'All' }"
        @click="emit('change-filter', 'All')"
      >
        All
      </button>
      <button
        :class="{ active: selectedFilter === 'Greek' }"
        @click="emit('change-filter', 'Greek')"
      >
        Greek
      </button>
      <button
        :class="{ active: selectedFilter === 'Norse' }"
        @click="emit('change-filter', 'Norse')"
      >
        Norse
      </button>
    </div>

    <button
      class="favorites-toggle"
      :class="{ active: showFavorites === true }"
      @click="emit('show-favorites')"
    >
      ★ Favorites
    </button>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  position: relative;

  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  align-items: center;
}

header h1 {
  font-weight: bold;
  color: gold;
}

.filter-buttons {
  display: flex;
  gap: 6px;
  border: none;
  padding: 10px;
}

.filter-buttons button {
  padding: 5px 10px;
  width: 100px;

  font-size: 15px;
  font-weight: 600;

  background-color: gold;
  color: black;

  border: none;
  border-radius: 5px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.filter-buttons button:hover {
  transform: translateY(-3px);

  box-shadow: -5px 10px 25px rgba(255, 215, 0, 0.3);
}

.filter-buttons button.active {
  transform: translateY(-3px);

  box-shadow: -5px 10px 25px rgba(255, 215, 0, 0.3);

  text-decoration: underline;
}

@media (max-width: 768px) {
  header h1 {
    display: none;
  }
}

header img {
  width: 55px;
  height: 55px;
  object-fit: cover;
}

.searchbar-container {
  display: flex;
  align-items: center;
  position: relative;
}

.searchbar-container img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.searchbar {
  width: 200px;
  font-size: 20px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  color: gold;
  border: 1px solid gold;
  border-radius: 5px;

  transition: box-shadow 0.25s ease;
}

.searchbar:focus {
  box-shadow: inset 0px 0px 20px rgba(255, 215, 0, 0.3);
  outline: none;
  border-color: gold;
}

.searchbar::placeholder {
  color: rgb(245, 231, 234);
  opacity: 1;
}

.favorites-toggle {
  border: 1px solid gold;
  background: transparent;
  color: gold;
  padding: 2px 5px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
}

.favorites-toggle.active {
  background: gold;
  color: black;
}
</style>
