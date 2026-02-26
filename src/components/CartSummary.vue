<script setup>
import { inject, computed } from "vue";

const cart = inject("cart");
const total = inject("total");
const user = inject("user");

const getQuantityByProduct = (productId) => {
  return cart.value.filter((item) => item.id === productId).length;
};
</script>

<template>
  <div class="container">
    <div class="product-display">
      <h2 class="mb-2">Cart Summary for:{{ user }}</h2>
      <div class="row mb-3">
        <div class="col-4 cartTable">Product Details</div>
        <div class="col-4 cartTable">Quantity</div>
        <div class="col-4 cartTable">Price</div>
      </div>
      <div class="row" v-for="(item, index) in cart" :key="index">
        <div class="col-4 d-flex align-items-center gap-2">
          <img v-bind:src="item.image" class="col-2 m-0 p-0" />{{ item.name }}
        </div>
        <div class="col-4">{{ getQuantityByProduct(item.id) }}</div>
        <div class="col-4">${{ item.price }}</div>
      </div>
      <p class="mt-2">
        <strong>Total: ${{ total }}</strong>
      </p>
    </div>
  </div>
</template>

<style lang="css" scoped>
.cartTable {
  font-weight: 600;
  font-size: 18px;
  color: #211818ea;
}
.product-image {
  width: 20%;
}
</style>
