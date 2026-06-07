import { ref, watch } from "vue";

const favoriteGods = ref(JSON.parse(localStorage.getItem("favorites")) || []);

watch(
  favoriteGods,
  (newFavorites) => {
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  },
  { deep: true }
);

export function useFavorites() {
  const toggleFavorite = (godName) => {
    if (favoriteGods.value.includes(godName)) {
      favoriteGods.value = favoriteGods.value.filter((god) => god !== godName);
    } else {
      favoriteGods.value.push(godName);
    }
  };

  return {
    favoriteGods,
    toggleFavorite
  };
}
