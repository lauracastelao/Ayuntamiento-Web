<template>
  <div id="content">
    <div class="post">
      <img
        src="https://www.geledes.org.br/wp-content/uploads/2020/05/maos-mulheres.png"
        alt=""
      />
      <footer>
        <h2>Cuando dicen que no puedes hacerlo. Demuestra que están equivocados.</h2>
      </footer>
    </div>
  </div>


</template>
<script setup>

</script>
<style lang="css" scoped>
img {
  width: 100%;
  max-height: 1000px;
  height: 700px;
  opacity: 1;
  display: block;

  transition: 0.5s ease;
  backface-visibility: hidden;
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
}

.post {
  width: 100%;

  max-height: 1000px;
  height: 700px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 25px;
  position: relative;
}

.post:hover footer {
  width: 100%;
}

.post img {
  width: 100%;
  height: 100%;
  display: block;
}

.post footer {
  width: 0;
  height: 100%;
  background: rgba(182, 181, 185, 0.71);
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 400ms ease-in-out;
}

footer h2 {
  color: #fff;
  font-size: 3rem;
  border: 6px solid #fff;
  padding: 0.8em 1.9em;
}
</style>
