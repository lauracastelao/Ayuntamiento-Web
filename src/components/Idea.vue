<template>
  <body>
    <nav class="accordion arrows">
      <header class="box">
        <label for="acc-close" class="box-title">¿Como surge la idea? </label>
      </header>
      <input type="radio" name="accordion" id="cb1" />
      <section class="box">
        <label class="box-title" for="cb1">Brecha digital</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
          El acceso a la tecnología va evolucionando cada más rápido,eso nos beneficia pero a su vez, otras muchas personas, no tienen la misma igualdad;en el caso de los mayores, la causa principal de esta brecha es el desconocimiento del uso de estas tecnologías.
        </div>
      </section>
      
      <input type="radio" name="accordion" id="cb2" />
      <section class="box">
        <label class="box-title" for="cb2">Casos reales</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
            Tras mucho tiempo hablando con diferentes personas, he vivido esta realidad más de cerca, dialogando con personas de mediana y avanzada edad, con personas que no están tan accesibles a la tecnologia, me percaté cuenta de que la realidad y a lo que algunos estamos acostumbrados a hacer a diario para muchas supone un esfuerzo extra que crea mucha frustación. Una de las principales dificultades que me comentaban era la poca accesibilidad que notaban ante cualquier tramite administrativo.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb3" />
      <section class="box">
        <label class="box-title" for="cb3">Covid y automatización</label>
        <label class="box-close" for="acc-close"></label>
        <div class="box-content">
         Y ahora bien. Momento post-pandemia. El covid se instaura en nuestras vidas y pum,usamos la tecnologia para todo, comunicarnos, enviar documentos, trabajar, estudiar, hacer tramites e incluso hacer consultas médicas. La tecnología ha sido una facilitadora para muchos de los que nos sentimos familiarizados con ella, en cambio, ha generado muchas dificultades a las personas que no tienen esa relación tecnologica tan afianzada. Por lo que de nuevo, sin quererlo, la brecha digital aumenta, damos por supuesto que todos sabemos enviar un trámite por internet, pero en ocasiones ya sea por ese desconocimiento o la propia dificiltad que generan algunas páginas con demasiado contenido...la finalidad queda nublada porque NO llega a todo el mundo.
         Así surge buzonín, una aplicación con la que realizar los trámites básicos de consulta ciudadana sin la necesidad de tener conocimientos básicos. A golpe de click y con el contenido justo,llegando a todas las personas sin barrera. 
        </div>
        
      </section>
      <div class="frame">
        <iframe src="https://embed.lottiefiles.com/animation/99987"></iframe>
      </div>

      <input type="radio" name="accordion" id="acc-close" />
    </nav>
  </body>
</template>
<style lang="css" scoped>
   
body {
  height: calc(100% - 20px);
  width: calc(100% - 20px);
  margin: 0;
  padding: 10px;
  display: flex;
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto", sans-serif;
  margin-top: 15vh;
  margin-bottom: 15vh;
 

}
.accordion {
  margin: auto;
  width: 400px;
}
.accordion input {
  display: none;
}
.box {
  position: relative;
  background: white;
  height: 64px;
  transition: all 0.15s ease-in-out;
}
.box::before {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
}
header.box {
  background: #8D99AE;
  z-index: 100;
  cursor: initial;
  box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px -2px rgba(0, 0, 0, 0.12),
    0 2px 4px -4px rgba(0, 0, 0, 0.24);
}
header .box-title {
  margin: 0;
  font-weight: normal;
  font-size: 16pt;
  color: white;
  cursor: initial;
}
.box-title {
  width: calc(100% - 40px);
  height: 64px;
  line-height: 64px;
  padding: 0 20px;
  display: inline-block;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-align: center;
}
.box-content {
  width: calc(100% - 40px);
  padding: 30px 20px;
  font-size: 11pt;
  color: rgba(0, 0, 0, 0.54);
  display: none;
}
.box-close {
  position: absolute;
  height: 64px;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  display: none;
}
input:checked + .box {
  height: auto;
  margin: 16px 0;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16), 0 6px 12px rgba(0, 0, 0, 0.32);
}
input:checked + .box .box-title {
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
}
input:checked + .box .box-content,
input:checked + .box .box-close {
  display: inline-block;
}
.arrows section .box-title {
  padding-left: 44px;
  width: calc(100% - 64px);
}
.arrows section .box-title:before {
  position: absolute;
  display: block;
  content: "\203a";
  font-size: 18pt;
  left: 20px;
  top: -2px;
  transition: transform 0.15s ease-in-out;
  color: rgba(0, 0, 0, 0.54);
}
input:checked + section.box .box-title:before {
  transform: rotate(90deg);
}


</style>

<script setup></script>
