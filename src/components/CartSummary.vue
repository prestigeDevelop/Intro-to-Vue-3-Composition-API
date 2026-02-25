<script setup>
import { inject } from "vue";

const cart = inject("cart");
const total = inject("total");
const user = inject("user");
</script>

<template>
  <div class="product-display">
    <h2>Cart Summary for:{{ user }}</h2>
    <div v-for="(item, index) in cart" :key="index">
      <p class="cartTable">{{ item.name }} - ${{ item.price }}</p>
    </div>
    <p>
      <strong>Total: ${{ total }}</strong>
    </p>
  </div>
</template>

<style lang="css" scoped>
.cartTable {
  /* background-color: blue; */
  border-radius: 5px;
  border: 2px solid black;
  width: 50%;
  margin: 0%;
}
</style>
