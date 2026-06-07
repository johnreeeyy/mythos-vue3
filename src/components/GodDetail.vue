<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getGods } from "@/services/godsService";

const route = useRoute();

const gods = ref([]);
const god = computed(() =>
  gods.value.find((god) => god.id === route.params.id)
);

onMounted(async () => {
  gods.value = await getGods();
});
</script>

<template>
  <div class="detail-overlay" id="detail-overlay">
    <header>
      <img src="/logo.png" alt="" />
      <h1>Mythos</h1>
    </header>
    <div class="detail" @click.stop>
      <div class="detail-header">
        <button class="close-button" @click="$router.push('/')">←</button>
        <h1>{{ god?.name }}</h1>
      </div>

      <div class="detail-content">
        <div class="left-content">
          <img :src="god?.image" :alt="god?.name" />
        </div>

        <div class="right-content">
          <section class="god-domain">
            <h3>Domains</h3>
            <ul>
              <li v-for="domain in god?.domain" :key="domain">
                {{ domain }}
              </li>
            </ul>
          </section>

          <section class="god-symbol">
            <h3>Symbols</h3>
            <ul>
              <li v-for="symbol in god?.symbols" :key="symbol">
                {{ symbol }}
              </li>
            </ul>
          </section>

          <section class="god-trivia">
            <h3>Trivia</h3>
            <p>{{ god?.trivia }}</p>
          </section>

          <section class="god-lore">
            <h3>Lore</h3>
            <p>{{ god?.lore }}</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 10px;
}

header img {
  width: 55px;
  height: 55px;
  object-fit: cover;
}

header h1 {
  color: gold;
}

.detail-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  inset: 0;
  gap: 10px;

  width: 100vw;
  height: 100vh;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
}

.detail {
  width: min(700px, 95vw);

  height: 500px;
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  padding-top: 10px;

  color: gold;

  border-radius: 12px;
  border: 1px solid gold;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);

  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);

  line-height: 23px;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  padding: 5px 10px;

  background-color: transparent;
}

.detail-content {
  display: grid;
  grid-template-columns: 280px 1fr;

  gap: 20px;

  flex: 1;

  overflow: hidden;

  padding: 10px;

  align-items: start;
}

.close-button {
  font-size: 20px;

  background-color: transparent;
  border: none;

  color: gold;

  cursor: pointer;
}

.left-content {
  width: 100%;

  height: 420px;

  padding: 5px;

  border: 1px solid gold;
  border-radius: 5px;

  background-color: transparent;

  overflow: hidden;
}

.left-content img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: top;

  border-radius: 5px;
}

.right-content {
  overflow-y: auto;

  height: 100%;

  padding-right: 5px;
}

.right-content p,
.right-content ul {
  color: rgb(245, 231, 234);
}

ul {
  list-style-type: disc;

  padding-left: 20px;

  list-style-position: inside;
}

section {
  margin-bottom: 10px;

  border-bottom: 1px solid gold;

  padding-bottom: 10px;
}

/* MOBILE */
@media (max-width: 685px) {
  .detail {
    width: 95vw;
    height: 90vh;

    border-radius: 10px;
  }

  .detail-content {
    display: flex;
    flex-direction: column;

    gap: 15px;

    overflow: hidden;

    height: 100%;
  }

  .left-content {
    width: 100%;

    min-height: 220px;
    max-height: 220px;

    flex-shrink: 0;

    overflow: hidden;
  }

  .left-content img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: top;
  }

  .right-content {
    flex: 1;

    overflow-y: auto;

    min-height: 0;

    padding-right: 4px;
  }

  .detail-header {
    padding: 10px;
  }

  .close-button {
    font-size: 24px;
  }
}

/* Scrollbar width */
.right-content::-webkit-scrollbar,
.detail-content::-webkit-scrollbar {
  width: 10px;
}

/* Scrollbar track */
.right-content::-webkit-scrollbar-track,
.detail-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.6);

  border-radius: 10px;
}

/* Scrollbar thumb */
.right-content::-webkit-scrollbar-thumb,
.detail-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgb(255, 215, 0), rgb(184, 134, 11));

  border-radius: 10px;

  border: 2px solid rgba(0, 0, 0, 0.7);
}

/* Hover */
.right-content::-webkit-scrollbar-thumb:hover,
.detail-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgb(255, 230, 120), rgb(212, 175, 55));
}
</style>
