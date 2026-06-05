<script setup>
defineProps({
  god: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(["close-modal"]);

const close = () => {
  emit("close-modal");
};
</script>

<template>
  <Transition name="modal">
    <div class="modal-overlay" id="modal-overlay" v-if="god" @click="close">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h1>{{ god.name }}</h1>
          <button class="close-button" @click="close">X</button>
        </div>

        <div class="modal-content">
          <div class="left-content">
            <img :src="god.image" :alt="god.name" />
          </div>

          <div class="right-content">
            <section class="god-domain">
              <h3>Domains</h3>
              <ul>
                <li v-for="domain in god.domain" :key="domain">
                  {{ domain }}
                </li>
              </ul>
            </section>

            <section class="god-symbol">
              <h3>Symbols</h3>
              <ul>
                <li v-for="symbol in god.symbols" :key="symbol">
                  {{ symbol }}
                </li>
              </ul>
            </section>

            <section class="god-trivia">
              <h3>Trivia</h3>
              <p>{{ god.trivia }}</p>
            </section>

            <section class="god-lore">
              <h3>Lore</h3>
              <p>{{ god.lore }}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.4);

  z-index: 2000;
}

.modal {
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

  background-color: rgba(0, 0, 0, 1);

  box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);

  line-height: 23px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 5px 10px;

  background-color: transparent;
}

.modal-content {
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
  .modal {
    width: 95vw;
    height: 90vh;

    border-radius: 10px;
  }

  .modal-content {
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

  .modal-header {
    padding: 10px;
  }

  .close-button {
    font-size: 24px;
  }
}

/* modal opening/closing animation */
.modal-overlay {
  opacity: 1;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

/* Scrollbar width */
.right-content::-webkit-scrollbar,
.modal-content::-webkit-scrollbar {
  width: 10px;
}

/* Scrollbar track */
.right-content::-webkit-scrollbar-track,
.modal-content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.6);

  border-radius: 10px;
}

/* Scrollbar thumb */
.right-content::-webkit-scrollbar-thumb,
.modal-content::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgb(255, 215, 0), rgb(184, 134, 11));

  border-radius: 10px;

  border: 2px solid rgba(0, 0, 0, 0.7);
}

/* Hover */
.right-content::-webkit-scrollbar-thumb:hover,
.modal-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, rgb(255, 230, 120), rgb(212, 175, 55));
}
</style>
