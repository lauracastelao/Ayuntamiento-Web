<script setup>
    
</script>
<template>
    

<!-- <div class="container-fluid py-2">
    <div class="d-flex flex-row flex-nowrap mx-4" id="lol">
      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(7).png?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center mb-2">Carta</h5>
          <p class="card-text">
            Envia una carta general al ayuntamiento,nosotros nos encargamos de
            que llegue al departamento correcto
          </p>
          <a href="#" class="btn btn-primary mt-2">
            <RouterLink to="/letter">GOOO</RouterLink></a
          >
        </div>
      </div>

      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/Claim.jpg?raw=true"
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
          src="https://github.com/lauracastelao/image/blob/main/3.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">FaQ</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <button class="btn btn-white text-black">
            <RouterLink to="/contact"> Accede </RouterLink>
          </button>
        </div>
      </div>
      <div class="card mx-4 mb-4" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://github.com/lauracastelao/image/blob/main/answer-defi.jpg?raw=true"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title text-center">Pregunta</h5>
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
          src="https://github.com/lauracastelao/image/blob/main/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(1).jpg?raw=true"
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
  </div> -->
  <div class="container">
      <div class="box">
        <img src="https://github.com/lauracastelao/image/blob/main/answer-defi.jpg?raw=true" alt="Imagen de simbolo de pregunta"/>
        <h3>Pregunta</h3>
        <p>
          Envia una pregunta al ayuntamiento,nosotros nos encargamos de
            que llegue al departamento correcto
        </p>
      </div>
      <div class="box">
        <img src="https://github.com/lauracastelao/image/blob/main/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(7).png?raw=true" alt="Ilustración de una carta"/>
        <h3>Carta</h3>
        <p>
          Envia una carta general al ayuntamiento,nosotros nos encargamos de
          que llegue al departamento correcto
        </p>
      </div>
      <div class="box">
        <img src="https://github.com/lauracastelao/image/blob/main/Claim.jpg?raw=true" alt="Ilustracion de queja o sugerencia en simbolo"/>
        <h3>Queja y sugerencia</h3>
        <p>
        ¿Estas descontento? Haznoslo saber,esta sección te permite poder realizar cualquier queja,reclamación o sugerencia.
          
        </p>
        
      </div>
    </div>
</template>
<style lang="css" scoped>
body{
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
}
.container{
    display: flex;
    width: 920px;
    height: auto;
    margin: 30px auto;
}
.box{
    width: 32%;
    height: auto;
    border: 1px solid #ccc;
    margin-right: 1%;
    background: white;
    border-radius: 10px;
    transition: 0.9;
}
.box:hover{
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.5);
    cursor: pointer;
}
img{
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
h3,p{
    text-align: center;
    color: rgb(104, 92, 92);
}
p{
    font-size: 15px;
    padding: 0 5px;
}
@media (max-width: 800px){
    .container{
        width: 100%;
    }
}
@media (max-width: 600px){
    .container{
        width: 85%;
        display: block;
    }
    .box{
        width: 100%;
        margin-bottom: 4%;
    }
}

</style>