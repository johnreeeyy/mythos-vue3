import { createWebHistory, createRouter } from "vue-router";
import GodDetails from "@/views/GodDetails.vue";
import Home from "@/views/Home.vue";
import Gods from "@/views/Gods.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/gods",
      name: "gods",
      component: Gods
    },
    {
      path: "/god/:id",
      name: "god-detail",
      component: GodDetails
    }
  ]
});

export default router;
