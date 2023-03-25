<script setup>
  import Header from "./Header.vue";
  import Carts from "./CartsSlider.vue";
  import Info from "./Info.vue";
  import Menu from "./Menu.vue";
  import Popup from "./Popup.vue";
</script>

<template>
  <Header/>
  <main class="main">
    <div class="container _f _f-column _h-100">
      <div class="_f _j-between _i-center _mb-25">
        <h2 class="h2 main_title">Найчастіше купують</h2>
        <div class="swiper-button _f">
          <div ref="prev" class="swiper-button-prev _f _i-center _j-center"></div>
          <div ref="next" class="swiper-button-next _f _i-center _j-center"></div>
        </div>
      </div>
      <Carts />
      <Info />
      <Menu />
      <Popup />
    </div>
  </main>
</template>