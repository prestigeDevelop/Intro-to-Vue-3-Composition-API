<script setup>
import { computed, ref } from "vue";

import productDisplay from "./components/ProductDisplay.vue";
import Cart from "./components/Cart.vue";
const premium = true;

const variant = ref({});
const addToCart = (selectedProduct) => {
  //This creates a new object reference on every click, guaranteeing the watcher always fires — even for the same product clicked multiple times.
  variant.value = { ...selectedProduct };
};
</script>

<template>
  <div class="nav-bar"></div>
  <Cart :variant="variant"></Cart>
  <div class="product-display">
    <productDisplay
      :premium="premium"
      @add-to-cart="addToCart"
    ></productDisplay>
  </div>
</template>
