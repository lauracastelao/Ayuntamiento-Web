<script setup>
import { RouterView } from "vue-router";

import Nav from "./components/Nav.vue";
import Copyright from "./components/Copyright.vue";
</script>

<template>
<Nav/>


  <RouterView />
  <Copyright/>
</template>

<style scoped>

</style>
