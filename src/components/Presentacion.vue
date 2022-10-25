<template>
  <div class="presentacion">
    <p class="bienvenida">Bienvenidxs</p>
    <h2>La web que te quiere <span>escuchar </span> más simple,más conectados.</h2>

  </div>
</template>
<style scoped>
.presentacion .bienvenida {
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-top: 6vh;
  height: 1vw;
}

.contenido header .contenido-header nav ul a:hover {
  color: yellow;
}

.presentacion {
  max-width: 1100px;
  height: 70vh;
  margin: auto;
  columns: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.presentacion .bienvenida {
  font-size: 16px;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

.presentacion h2 {
  font-size: 55px;
  margin-bottom: 25px;
  text-align: center;
}

.presentacion h2 span {
  font-size: 55px;
  color: rgb(235, 72, 72);
}

.presentacion .descripcion {
  max-width: 700px;
  margin: 25px auto;
  font-size: 18px;
  text-align: center;
}

.presentacion a {
  text-align: none;
  display: inline-block;
  margin: 25px;
  padding: 20px 25px;
  border: 2px solid rgb(0, 0, 0);
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.5s;
}

.presentacion a:hover {
  background-color: rgb(218, 142, 196);
}
</style>