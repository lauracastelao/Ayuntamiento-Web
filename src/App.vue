<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
import Presentacion from "./components/Presentacion.vue";
import Slider from "./components/Slider.vue";
</script>

<template>
  <Nav/>
  <Slider/>
  <Presentacion/>

  <RouterView />
</template>

<style scoped>
nav{
  width:100%;
  height: 100%;
}
</style>
