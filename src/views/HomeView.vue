<script setup>

import Home from "../components/Home.vue";

</script>

<template>
<div id="Home">
  <Home/>

</div>
</template>
<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display";
}

html {
  scroll-behavior: smooth;
}

#servicios {
  padding: 100px 15px;
  text-align: center;
  background-color: #f3f3f3;
}

#servicios .titulo-seccion {
  font-size: 22px;
  text-transform: uppercase;
  color: black;
  text-decoration: underline;
  text-decoration-color: rgb(211, 74, 74);
  text-decoration-thickness: 5px;
}

#servicios .fila {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 30px auto;
}

#servicios .fila .servicios {
  max-width: 350px;
  background-color: #f3f3f3;
  padding: 30px;
  margin: 0 5px;
  border-right: 5px;

  transition: 0.5s;
}

#servicios .fila .servicio:hover {
  box-shadow: 5px 5px 10px #565656, -5px ´-5px 10px #8a8a8a;
}

#servicios .fila .servicios h4 {
  font-size: 22px;
  margin-bottom: 25px;
}
#servicios .fila .servicio .icono {
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  margin-bottom: 25px;
}

#servicios .fila .servicio hr {
  width: 30%;
  margin: auto;
  color: #000;
  margin-bottom: 25px;
}

.servicios .fila .servicio ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

#servicios .dila .servicio p {
  font-size: 14px;
  line-height: 22px;
}
</style>
