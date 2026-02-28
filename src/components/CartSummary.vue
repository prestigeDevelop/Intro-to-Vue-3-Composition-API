<script setup>
import { inject, computed, ref } from "vue";

const cart = inject("cart");
const total = inject("total");
const user = inject("user");

const getQuantityByProduct = (productId) => {
  return cart.value.filter((item) => item.id === productId).length;
};

const getReducedCart = computed(() => {
  return cart.value.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    console.log(existingItem);

    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.quantity * existingItem.price;
    } else {
      acc.push({ ...item, quantity: 1, total: item.price });
    }
    console.log(acc);
    return acc;
  }, []);
});

const decrement = (item) => {
  if (cart.value.filter((i) => i.id === item.id).length > 0) {
    const index = cart.value.findIndex((i) => i.id === item.id);
    cart.value.splice(index, 1);
    total.value -= item.price;
  }
};

const increment = (item) => {
  cart.value.push(item);
  total.value += item.price;
};
</script>

<template>
  <div class="container">
    <div class="product-display">
      <h2 class="mb-2">Cart Summary for:{{ user }}</h2>
      <div class="row mb-3">
        <div class="col-3 cartTable">Product Details</div>
        <div class="col-3 cartTable">Quantity</div>
        <div class="col-3 cartTable">Price</div>
        <div class="col-3 cartTable">Total</div>
      </div>
      <div class="row" v-for="(item, index) in getReducedCart" :key="index">
        <div class="col-3 product-cell">
          <img v-bind:src="item.image" class="col-2 m-0 p-0" />{{ item.name }}
        </div>
        <div class="col-3">
          <button class="buttonPlusMinus" @click="decrement(item)">-</button>
          {{ item.quantity }}
          <button class="buttonPlusMinus" @click="increment(item)">+</button>
        </div>
        <div class="col-3">${{ item.price }}</div>
        <div class="col-3">{{ item.total }}</div>
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
.product-cell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
