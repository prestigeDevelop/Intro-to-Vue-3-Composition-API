<script setup>
import { computed, ref } from "vue";
import socksGreenImage from "./assets/images/socks_green.jpeg";
import socksBlueImage from "./assets/images/socks_blue.jpeg";

const product = ref("Socks");
const brand = ref("Vue Mastery");

const selectedVariant = ref(0);

const details = ref(["50% cotton", "30% wool", "20% polyester"]);

const variants = ref([
  {
    id: 2234,
    color: "green",
    image: socksGreenImage,
    quantity: 5,
    price: 14,
  },
  { id: 2235, color: "blue", image: socksBlueImage, quantity: 5, price: 12.5 },
]);
const image = computed(() => {
  return variants.value[selectedVariant.value].image;
});
const inStock = computed(() => {
  return variants.value[selectedVariant.value].quantity > 0;
});
const price = computed(() => {
  return "$" + variants.value[selectedVariant.value].price;
});
const title = computed(() => {
  return brand.value + " " + product.value;
});
const cart = ref([]);

const addToCart = () => {
  cart.value.push(variants.value[selectedVariant.value]);
  variants.value[selectedVariant.value].quantity--;
  total.value += variants.value[selectedVariant.value].price;
};

const updateQuantity = (index) => {
  selectedVariant.value = index;
  console.log(cart.value);
};

const total = ref(0);
</script>

<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart({{ cart.length }})</div>
  <div class="cart">Cart Total(${{ total }})</div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" :class="{ 'out-of-stock-img': !inStock }" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock:{{ price }}</p>
        <p v-else>Out of Stock</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateQuantity(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        ></div>
        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart()"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>
