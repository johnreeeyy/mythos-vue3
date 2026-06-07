import { ref } from "vue";
import { getGods } from "@/services/godsService";

const gods = ref([]);
const loading = ref(true);
let hasFetched = false;

export function useGods() {
  const fetchGods = async () => {
    if (hasFetched) return;

    try {
      loading.value = true;
      gods.value = await getGods();
      hasFetched = true;
    } finally {
      loading.value = false;
    }
  };

  return {
    gods,
    loading,
    fetchGods
  };
}
