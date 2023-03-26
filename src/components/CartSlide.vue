<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

  const store = useStore();
  const basketCart = computed(() => store.getters.BASKET);

  const emit = defineEmits(['addCartToBasket'])

  defineProps({
    cart: Object,
  })
  const loadImg = (img) => new URL('../assets/'+img+'.png', import.meta.url).href;
  const isBasketCart = (cart) => basketCart.value.includes(cart);
  const onSubmit = (cart) => {
    emit('addCartToBasket', cart);
  }

  defineExpose({
    onSubmit,
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
      <div class="cart_basket" @click="onSubmit(cart)" :class="{active: isBasketCart(cart)}"></div>
    </div>
    <div class="cart_is-stock">
      <span v-if="cart.isStock">Є в наявності</span>
      <span v-else class="cart_is-stock--grey">Немає в наявності</span>
    </div>
</template>