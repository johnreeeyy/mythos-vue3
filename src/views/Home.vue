<script setup>
import GodsList from "@/components/GodsList.vue";
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import { getGods } from "@/services/godsService";
import { computed, onMounted, ref } from "vue";

const gods = ref([]);
const selectedFilter = ref("All");
const searchQuery = ref("");
const favoriteGods = ref(JSON.parse(localStorage.getItem("favorites")) || []);
const showFavorites = ref(false);
const loading = ref(true);

onMounted(async () => {
  try {
    loading.value = true;
    gods.value = await getGods();
  } finally {
    loading.value = false;
  }
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

  <Loading v-if="loading" loadingText="Summoning the Gods" />

  <GodsList
    v-else
    :gods="filteredGods"
    :favorites="favoriteGods"
    @add-to-favorites="addToFavorites"
  />
</template>
