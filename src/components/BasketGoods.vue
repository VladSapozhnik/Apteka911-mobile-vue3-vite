<script setup>
  import {useStore} from "vuex";
  import {computed} from "vue";

  const store = useStore();
  const basket = computed(() => store.getters.BASKET);

  // const loadImg = (img) => new URL('../assets/'+img+'.png', import.meta.url).href;

  defineExpose({
    basket,
  })
</script>

<template>
  <div class="goods" v-if="basket.length">
      <div class="goods_head">Постачальник: <span>Lorem Ipsum</span></div>
      <ul class="goods-list" v-for="cart of basket" :key="cart.id">
        <li class="goods-item _f">
          <div class="goods-item_pic object-fit">
            <img :src="`../static/images/${cart.img}.png`" alt="basket goods" />
          </div>
          <div>
            <h4 class="goods-item_title">{{cart.title}}</h4>
            <div class="goods-item-price">
              {{ cart.currentPrice }} грн
              <span class="goods-item-price_number">{{cart.quantity}} шт</span>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>