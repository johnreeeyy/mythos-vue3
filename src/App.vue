<script setup>
import Header from "@/components/Header.vue";
import GodsList from "@/components/GodsList.vue";
import GodModal from "@/components/GodModal.vue";
import gods from "./data";
import { computed, ref, watch } from "vue";

const selectedFilter = ref("All");
const searchQuery = ref("");
const favoriteGods = ref(JSON.parse(localStorage.getItem("favorites")) || []);
const showFavorites = ref(false);
const selectedGod = ref(null);

const addToFavorites = (godName) => {
  if (favoriteGods.value.includes(godName)) {
    favoriteGods.value = favoriteGods.value.filter((god) => god !== godName);
  } else {
    favoriteGods.value.push(godName);
  }

  localStorage.setItem("favorites", JSON.stringify(favoriteGods.value));
};

const openModal = (god) => {
  selectedGod.value = god;
};
const closeModal = () => {
  selectedGod.value = null;
};

const filteredGods = computed(() => {
  return gods.filter((god) => {
    const filterMatch =
      selectedFilter.value === "All" || god.mythology === selectedFilter.value;
    const searchMatch = god.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const favoriteMatch =
      !showFavorites.value || favoriteGods.value.includes(god.name);
    return filterMatch && searchMatch && favoriteMatch;
  });
});

watch(selectedGod, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <Header
    :selectedFilter="selectedFilter"
    :showFavorites="showFavorites"
    @change-filter="selectedFilter = $event"
    @change-search="searchQuery = $event"
    @show-favorites="showFavorites = !showFavorites"
  />
  <GodsList
    :gods="filteredGods"
    :favorites="favoriteGods"
    @add-to-favorites="addToFavorites"
    @show-modal="openModal"
  />
  <GodModal :god="selectedGod" @close-modal="closeModal" />
</template>

<style scoped></style>
