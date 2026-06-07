<script setup>
import GodsList from "@/components/GodsList.vue";
import Header from "@/components/Header.vue";
import Loading from "@/components/Loading.vue";
import { computed, onMounted, ref } from "vue";
import { useFavorites } from "@/composables/useFavorite";
import { useGods } from "@/composables/useGods";

const { gods, loading, fetchGods } = useGods();
const selectedFilter = ref("All");
const searchQuery = ref("");
const { favoriteGods, toggleFavorite } = useFavorites();
const showFavorites = ref(false);

onMounted(() => {
  fetchGods();
});

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
    @add-to-favorites="toggleFavorite"
  />
</template>
