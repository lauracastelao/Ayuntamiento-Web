
<script setup>

import {RouterLink} from 'vue-router';
</script>
<template>
   <nav class="navbar navbar-expand-lg bg-info fixed-top d-flex" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Buzonín 📬</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/home">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/letter">Carta</RouterLink>
          </li>
          <li class="nav-item">
           <RouterLink to="/claim">Claim</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/question">Pregunta</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/faq">FAQ</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about">Conóceme</RouterLink>
          </li>
          <li class="nav-item">
           <RouterLink to="/prueba">Prueba</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    
  </nav>
</template>


<style lang="css" scoped>
 .nav-item {
  display: flex;
  justify-content: space-evenly;
}
a {
  text-decoration: none;
  margin-right: 1rem;
  color: #000;
}
a:hover {
  color: crimson;
}

nav {
  width: 100%;
  height: 6.5vh;
}


</style>
