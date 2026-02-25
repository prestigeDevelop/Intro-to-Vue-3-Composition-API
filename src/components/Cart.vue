<script setup>
import { watch, inject } from "vue";

const props = defineProps({
  variant: {
    type: Object,
    required: false,
    default: () => new Object(),
  },
});

const cart = inject("cart");
const total = inject("total");
const updateCart = inject("updateCart");

watch(
  () => props.variant,
  (newVariant) => {
    if (newVariant && newVariant.id) updateCart(newVariant);
  },
);
</script>
<template>
  <RouterLink to="/cart-summary">
    <div class="cart">Cart({{ cart.length }})Total(${{ total }})</div>
  </RouterLink>
</template>
