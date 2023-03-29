<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";
  import { RouterLink } from "vue-router";
  import Logo from "./Logo.vue";

  const store = useStore();
  const countCart = computed(() => store.getters.BASKET_CART_COUNT);
  const openBasket = () => countCart.value ? 'basket' : 'main';

  defineExpose({
    countCart,
    openBasket
  })
</script>


<template>
  <header class="header">
    <div class="container _f _j-between _i-center">
      <Logo />
      <div class="header-search _wid-100">
        <input class="header-search_input" type="text" placeholder="Пошук">
      </div>
      <router-link :to="{name: openBasket()}" class="header-basket">
        <span class="header-basket_count">{{countCart}}</span>
      </router-link>
    </div>
  </header>
</template>