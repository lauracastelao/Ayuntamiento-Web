<script setup>
import Access from "../components/Access.vue";
import Footer from "../components/Copyright.vue";

import Letter from "../components/Letter.vue";
import Presentacion from "../components/Presentacion.vue";
import Nav from "../components/Nav.vue";
</script>

<template>
  <Nav />
  <Presentacion />
  <div class="container-fluid py-2">
    <div class="d-flex flex-row flex-nowrap mx-4">
      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Mi%20proyecto.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">Carta</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Mi%20proyecto.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">Quejas y sugerencias</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Mi%20proyecto.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">FaQ</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <button class="btn btn-white text-black">
            <RouterLink to="/about"> Accede </RouterLink>
          </button>
        </div>
      </div>
      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Mi%20proyecto.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Mi%20proyecto.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
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
