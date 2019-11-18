import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Setup from "../views/Setup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "setup",
    component: Setup
  },
  {
    path: "/Calendar",
    name: "Calendar",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
