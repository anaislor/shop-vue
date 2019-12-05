import Vue from "vue";
import VueRouter from "vue-router";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "shop",
    component: Shop
  },
  {
    path: "/basket",
    name: "basket",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Basket.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
