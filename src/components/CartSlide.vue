<script setup>
  import {ref} from "vue";

  const isAddToCart = ref(false);

  const emit = defineEmits(['addCartToBasket'])

  defineProps({
    cart: Object,
  })

  const loadImg = (img) => new URL('../assets/'+img+'.png', import.meta.url).href;

  const onSubmit = (cart) => {
    isAddToCart.value = !isAddToCart.value;
    emit('addCartToBasket', cart);
  }

  defineExpose({
    onSubmit,
    isAddToCart,
  })
</script>

<template>
    <div class="cart_img object-fit">
      <img :src="loadImg(cart.img)" alt="cart">
    </div>
    <h3 class="cart_title">
      {{ cart.title }}
    </h3>
    <div class="_mb-8 _f _j-between _i-end">
      <div class="cart-price">
        <div class="cart-price_prev" v-if="cart.prevPrice">{{ cart.prevPrice }} грн</div>
        <div class="cart-price_current" :class="{active: cart.prevPrice}">{{ cart.currentPrice }} грн</div>
      </div>
      <div class="cart_basket" @click="onSubmit(cart)" :class="{active: !isAddToCart}"></div>
    </div>
    <div class="cart_is-stock">
      <span v-if="cart.isStock">Є в наявності</span>
      <span v-else :style="{color: '#8592AA'}">Немає в наявності</span>
    </div>
</template>