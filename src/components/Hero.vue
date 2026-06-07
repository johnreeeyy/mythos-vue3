<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToGods = () => {
  router.push("/gods");
};
</script>

<template>
  <div class="hero">
    <div class="overlay"></div>

    <div class="content">
      <h1>Mythos</h1>

      <p>Enter the world of Gods from various mythologies.</p>

      <button @click="goToGods">Enter Pantheon</button>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-image: url("/background.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  overflow: hidden;
}

/* dark overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.9)
  );
}

/* content layer */
.content {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  color: gold;
  padding: 20px;
}

/* title */
.content h1 {
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 2px;
}

/* subtitle */
.content p {
  color: rgb(230, 230, 230);
  font-size: 1.2rem;
  max-width: 400px;
  line-height: 1.6;
}

/* button */
.content button {
  padding: 12px 25px;

  border: 1px solid gold;
  background: transparent;
  color: gold;

  border-radius: 8px;
  cursor: pointer;

  transition: 0.3s ease;
}

.content button:hover {
  background: gold;
  color: black;
  transform: translateY(-2px);
}
</style>
