<script setup>
import { ref, provide } from "vue";
import { v4 as uuidv4 } from "uuid";
import Cart from "./components/Cart.vue";
const premium = true;

const cart = ref([]);
const total = ref(0);
const userName = ref(uuidv4().slice(0, 15));

const updateCart = (product) => {
  cart.value.push(product);
  total.value += product.price;
};

provide("cart", cart);
provide("total", total);
provide("updateCart", updateCart);
provide("user", userName);

const variant = ref({});
const addToCart = (selectedProduct) => {
  variant.value = { ...selectedProduct };
};
</script>

<template>
  <div class="nav-bar"></div>
  <Cart :variant="variant"></Cart>
  <RouterView v-slot="{ Component }">
    <component :is="Component" :premium="premium" @add-to-cart="addToCart" />
  </RouterView>
</template>
