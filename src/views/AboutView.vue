<script setup></script>

<template>
  <div class="container">
    <main id="hero">
      <div class="promo">
        <h1>¿Quieres conocerme?</h1>
        <p>Echale un vistazo a mi portfolio</p>
        <button type="button">Accede </button>
      </div>
      <video muted autoplay loop>
        <source src="../video/production ID_5183314.mp4" type="video/mp4" />
      </video>
      <div class="capa"></div>
    </main>
  </div>
</template>

<style lang="scss" scoped>


#hero {
  min-height: 100vh;
  position: relative;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.capa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(56, 51, 51);
  opacity: 0.5;
  mix-blend-mode: overlay;
}

.promo {
  padding-top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  position: relative;
  z-index: 2;
}

button{
  border-radius:30px;
  padding: 10px 0;
  width:160px;
  background-color: pink;
  font-size: 1.8rem;
  color: #3f3f3f;
  font-weight: 800;
  transition:150ms;
  margin-top:40px;

}

button:focus{
outline: none;
}
button:hover{
  transform: translate(0,-5px);
}

.body{
  margin:0;
  padding: 0;
  line-height:1.6;
  font-family: 'Poppins', sans-serif;
}

.promo{
  padding-top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;

}

.promo p{
  font-size: 2.5 rem;
  text-align:center;
  color:white;
  font-weight: 900;

}


.promo h1{
  font-size: 3.5rem;
  text-align:center;
  color:#f3f3f3;
  font-weight: 700;
}
</style>
