import { createRouter, createWebHistory } from "vue-router";
import ProductDisplay from "../components/ProductDisplay.vue";
import CartSummary from "../components/CartSummary.vue";

const routes = [
  {
    path: "/",
    component: ProductDisplay,
  },
  {
    path: "/cart-summary",
    component: CartSummary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
