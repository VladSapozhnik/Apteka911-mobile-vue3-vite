<script setup>
  import {RouterLink} from "vue-router";
</script>

<template>
  <keep-alive>
    <router-link :to="{name: 'main'}" class="logo object-fit" href="/">
      <img src="../assets/logo.svg" alt="logo"/>
    </router-link>
  </keep-alive>

</template>

<style scoped>
  .logo {
    display: block;
    margin-right: 8px;
    min-width: 112px;
    height: 46px;
  }
</style>