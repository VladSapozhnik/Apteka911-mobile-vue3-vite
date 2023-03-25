<script setup>
  import {RouterLink} from "vue-router";
</script>

<template>
  <router-link :to="{name: 'main'}" class="logo object-fit" href="/">
    <img src="../assets/logo.svg" alt="logo"/>
  </router-link>
</template>

<style scoped>
  .logo {
    display: block;
    margin-right: 8px;
    min-width: 112px;
    height: 46px;
  }
</style>