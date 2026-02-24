<script setup>
import { computed, ref } from "vue";

import productDisplay from "./components/ProductDisplay.vue";

const total = ref(0);

const cart = ref([]);
const premium = true;

const addToCart = (selectedProduct) => {
  cart.value.push(selectedProduct.id);

  total.value += selectedProduct.price;
};
</script>

<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart.length }})Total(${{ total }})</div>

  <div class="product-display">
    <productDisplay
      :premium="premium"
      @add-to-cart="addToCart"
    ></productDisplay>
  </div>
</template>
