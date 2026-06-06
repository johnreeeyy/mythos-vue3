import GodDetails from "@/views/GodDetails.vue";
import Home from "@/views/Home.vue";
import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/god/:id",
      name: "god-detail",
      component: GodDetails
    }
  ]
});

export default router;
