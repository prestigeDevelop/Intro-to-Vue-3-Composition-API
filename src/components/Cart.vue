<script setup>
import { watch, ref } from "vue";
const props = defineProps({
  variant: {
    type: Object,
    required: false,
    default: () => new Object(),
  },
});

const total = ref(0);
const cart = ref([]);

const updateCart = (selectedProduct) => {
  cart.value.push(selectedProduct.id);
  total.value += selectedProduct.price;
};

watch(
  () => props.variant,
  (newVariant) => {
    updateCart(newVariant);
  },
);
</script>
<template>
  <div class="cart">Cart({{ cart.length }})Total(${{ total }})</div>
</template>
