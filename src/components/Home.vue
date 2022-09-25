<template>
  <div id="content">
    <div class="wrapper">
   <img src="https://www.geledes.org.br/wp-content/uploads/2020/05/maos-mulheres.png" class="img-responsive" alt="Responsive image">
</div>
  </div>
      <!-- <img
        src="https://birminghamchristian.com/wp-content/uploads/2020/09/bigstock-Elderly-Hands-Helping-Hands-O-365834089-scaled.jpg"
        alt="This is just"
        data-url="#1" -->
     
      <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/73159/image2.jpg" alt="a demo of" data-url="#2">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/73159/image3.jpg" alt="a full slider" data-url="#3">
               <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/73159/image4.jpg" alt="and it's really beautiful" data-url="#4">
          -->


  <Card />
</template>
<script setup>
import Card from "./Card.vue";
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


</style>
