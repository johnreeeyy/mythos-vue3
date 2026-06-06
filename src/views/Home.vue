<script setup>
import GodsList from "@/components/GodsList.vue";
import Header from "@/components/Header.vue";
import { getGods } from "@/services/godsService";
import { computed, onMounted, ref } from "vue";

const gods = ref([]);
const selectedFilter = ref("All");
const searchQuery = ref("");
const favoriteGods = ref(JSON.parse(localStorage.getItem("favorites")) || []);
const showFavorites = ref(false);

onMounted(async () => {
  gods.value = await getGods();
});

const addToFavorites = (godName) => {
  if (favoriteGods.value.includes(godName)) {
    favoriteGods.value = favoriteGods.value.filter((god) => god !== godName);
  } else {
    favoriteGods.value.push(godName);
  }

  localStorage.setItem("favorites", JSON.stringify(favoriteGods.value));
};

const filteredGods = computed(() => {
  return (gods.value || []).filter((god) => {
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
  />
</template>
