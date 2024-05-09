import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    console.log(to);
    if (to.hash === "#d") {
      return {
        selector: to.hash,
        offset: { x: 0, y: 1000 },
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
